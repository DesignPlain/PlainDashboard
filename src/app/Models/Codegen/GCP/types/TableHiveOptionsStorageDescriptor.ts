export interface TableHiveOptionsStorageDescriptor {
  // The fully qualified Java class name of the input format.
  InputFormat?: string;

  // Cloud Storage folder URI where the table data is stored, starting with "gs://".
  LocationUri?: string;

  // The fully qualified Java class name of the output format.
  OutputFormat?: string;
}
