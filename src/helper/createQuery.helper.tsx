import { collection, query, where, WhereFilterOp } from "firebase/firestore";
import { db } from "../components/config/firebase-config";

export const createQuery = (
  collectionName: string,
  field: string,
  operation: WhereFilterOp,
  value: any
) => {
  return query(collection(db, collectionName), where(field, operation, value));
};
