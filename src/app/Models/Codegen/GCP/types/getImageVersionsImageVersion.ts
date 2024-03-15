export interface getImageVersionsImageVersion {
  // The string identifier of the image version, in the form: "composer-x.y.z-airflow-a.b.c"
  ImageVersionId?: string;

  // Supported python versions for this image version
  SupportedPythonVersions?: Array<string>;
}
