export interface DataStoreIndexProperty {
  /*
The direction the index should optimize for sorting.
Possible values are: `ASCENDING`, `DESCENDING`.
*/
  Direction?: string;

  // The property name to index.
  Name?: string;
}
