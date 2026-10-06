import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, limit } from "firebase/firestore";
import firebaseConfig from "../../firebase-applet-config.json";

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(
  app,
  firebaseConfig.firestoreDatabaseId || "(default)"
);

export interface AdvisorQueryLog {
  id?: string;
  userQuestion: string;
  advisorResponse: string;
  createdAt: string;
  timestamp: number;
  houseConfig?: any;
  sessionId?: string;
  source?: string;
}

/**
 * Guarda una consulta y respuesta técnica en la colección 'advisor_queries' de Firestore
 */
export async function saveAdvisorQueryToFirestore(data: {
  userQuestion: string;
  advisorResponse: string;
  houseConfig?: any;
  sessionId?: string;
}): Promise<string | null> {
  try {
    const docRef = await addDoc(collection(db, "advisor_queries"), {
      userQuestion: data.userQuestion,
      advisorResponse: data.advisorResponse,
      createdAt: new Date().toISOString(),
      timestamp: Date.now(),
      houseConfig: data.houseConfig || null,
      sessionId: data.sessionId || "session_" + Math.random().toString(36).substring(2, 9),
      source: "web_applet",
    });
    return docRef.id;
  } catch (error) {
    console.error("Error guardando consulta en Firestore:", error);
    return null;
  }
}

/**
 * Obtiene las consultas más recientes de Firestore
 */
export async function fetchAdvisorQueries(limitCount: number = 100): Promise<AdvisorQueryLog[]> {
  try {
    // Intentar primero a través del endpoint del servidor
    const res = await fetch("/api/advisor/logs");
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.queries) && data.queries.length > 0) {
        return data.queries.map((q: any) => {
          let parsedContext = null;
          if (q.houseContextSummary) {
            try {
              parsedContext = JSON.parse(q.houseContextSummary);
            } catch {
              parsedContext = q.houseContextSummary;
            }
          }
          return {
            ...q,
            houseConfig: parsedContext,
          };
        });
      }
    }
  } catch (e) {
    console.warn("Fallo endpoint /api/advisor/logs, recurriendo a SDK Firestore:", e);
  }

  // Fallback directo con SDK de Firestore
  try {
    const q = query(
      collection(db, "advisor_queries"),
      orderBy("timestamp", "desc"),
      limit(limitCount)
    );
    const querySnapshot = await getDocs(q);
    const logs: AdvisorQueryLog[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      logs.push({
        id: doc.id,
        userQuestion: data.userQuestion || "",
        advisorResponse: data.advisorResponse || "",
        createdAt: data.createdAt || new Date(data.timestamp || Date.now()).toISOString(),
        timestamp: data.timestamp || Date.now(),
        houseConfig: data.houseConfig || null,
        sessionId: data.sessionId || "",
        source: data.source || "web_applet",
      });
    });
    return logs;
  } catch (error) {
    console.error("Error obteniendo logs de Firestore con SDK:", error);
    return [];
  }
}

/**
 * Resetea y vacía todas las consultas registradas en Firestore
 */
export async function resetAdvisorQueriesInFirestore(): Promise<{ success: boolean; count?: number }> {
  try {
    const res = await fetch("/api/advisor/logs", { method: "DELETE" });
    if (res.ok) {
      const data = await res.json();
      return { success: true, count: data.deletedCount || 0 };
    }
  } catch (e) {
    console.warn("Fallo endpoint DELETE /api/advisor/logs, recurriendo a SDK Firestore:", e);
  }

  // Fallback SDK
  try {
    const { deleteDoc, doc } = await import("firebase/firestore");
    const q = query(collection(db, "advisor_queries"), limit(300));
    const snap = await getDocs(q);
    let count = 0;
    const deletePromises = snap.docs.map(async (d) => {
      await deleteDoc(doc(db, "advisor_queries", d.id));
      count++;
    });
    await Promise.all(deletePromises);
    return { success: true, count };
  } catch (error) {
    console.error("Error al resetear consultas en Firestore:", error);
    return { success: false };
  }
}

