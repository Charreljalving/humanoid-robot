import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, getDoc, query, orderBy, Timestamp } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Article } from '../types/Article';

const COLLECTION_NAME = 'artikelen';

export const articleService = {
  async getArticles() {
    const q = query(collection(db, COLLECTION_NAME), orderBy('datum', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      datum: (doc.data().datum as Timestamp).toDate()
    })) as Article[];
  },

  async getArticle(id: string) {
    const docRef = doc(db, COLLECTION_NAME, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        ...data,
        datum: (data.datum as Timestamp).toDate()
      } as Article;
    }
    return null;
  },

  async createArticle(article: Omit<Article, 'id'>) {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...article,
      datum: Timestamp.fromDate(article.datum)
    });
    return docRef.id;
  },

  async updateArticle(id: string, article: Partial<Article>) {
    const docRef = doc(db, COLLECTION_NAME, id);
    if (article.datum) {
      article.datum = Timestamp.fromDate(article.datum) as any;
    }
    await updateDoc(docRef, article);
  },

  async deleteArticle(id: string) {
    const docRef = doc(db, COLLECTION_NAME, id);
    await deleteDoc(docRef);
  }
};