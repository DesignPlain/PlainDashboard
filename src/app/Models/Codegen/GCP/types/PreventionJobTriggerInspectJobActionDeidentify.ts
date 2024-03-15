import { PreventionJobTriggerInspectJobActionDeidentifyTransformationConfig } from "./PreventionJobTriggerInspectJobActionDeidentifyTransformationConfig";
import { PreventionJobTriggerInspectJobActionDeidentifyTransformationDetailsStorageConfig } from "./PreventionJobTriggerInspectJobActionDeidentifyTransformationDetailsStorageConfig";

export interface PreventionJobTriggerInspectJobActionDeidentify {
  /*
List of user-specified file type groups to transform. If specified, only the files with these filetypes will be transformed.
If empty, all supported files will be transformed. Supported types may be automatically added over time.
If a file type is set in this field that isn't supported by the Deidentify action then the job will fail and will not be successfully created/started.
Each value may be one of: `IMAGE`, `TEXT_FILE`, `CSV`, `TSV`.
*/
  FileTypesToTransforms?: Array<string>;

  /*
User specified deidentify templates and configs for structured, unstructured, and image files.
Structure is documented below.
*/
  TransformationConfig?: PreventionJobTriggerInspectJobActionDeidentifyTransformationConfig;

  /*
Config for storing transformation details.
Structure is documented below.
*/
  TransformationDetailsStorageConfig?: PreventionJobTriggerInspectJobActionDeidentifyTransformationDetailsStorageConfig;

  /*
User settable Cloud Storage bucket and folders to store de-identified files.
This field must be set for cloud storage deidentification.
The output Cloud Storage bucket must be different from the input bucket.
De-identified files will overwrite files in the output path.
Form of: gs://bucket/folder/ or gs://bucket
*/
  CloudStorageOutput?: string;
}
