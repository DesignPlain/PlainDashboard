import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataloss_PreventionJobTriggerInspectJobActionDeidentifyTransformationConfig,
  dataloss_PreventionJobTriggerInspectJobActionDeidentifyTransformationConfig_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobActionDeidentifyTransformationConfig";
import {
  dataloss_PreventionJobTriggerInspectJobActionDeidentifyTransformationDetailsStorageConfig,
  dataloss_PreventionJobTriggerInspectJobActionDeidentifyTransformationDetailsStorageConfig_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobActionDeidentifyTransformationDetailsStorageConfig";

export interface dataloss_PreventionJobTriggerInspectJobActionDeidentify {
  /*
User settable Cloud Storage bucket and folders to store de-identified files.
This field must be set for cloud storage deidentification.
The output Cloud Storage bucket must be different from the input bucket.
De-identified files will overwrite files in the output path.
Form of: gs://bucket/folder/ or gs://bucket
*/
  cloudStorageOutput?: string;

  /*
List of user-specified file type groups to transform. If specified, only the files with these filetypes will be transformed.
If empty, all supported files will be transformed. Supported types may be automatically added over time.
If a file type is set in this field that isn't supported by the Deidentify action then the job will fail and will not be successfully created/started.
Each value may be one of: `IMAGE`, `TEXT_FILE`, `CSV`, `TSV`.
*/
  fileTypesToTransforms?: Array<string>;

  /*
User specified deidentify templates and configs for structured, unstructured, and image files.
Structure is documented below.
*/
  transformationConfig?: dataloss_PreventionJobTriggerInspectJobActionDeidentifyTransformationConfig;

  /*
Config for storing transformation details.
Structure is documented below.
*/
  transformationDetailsStorageConfig?: dataloss_PreventionJobTriggerInspectJobActionDeidentifyTransformationDetailsStorageConfig;
}

export function dataloss_PreventionJobTriggerInspectJobActionDeidentify_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "fileTypesToTransforms",
      "List of user-specified file type groups to transform. If specified, only the files with these filetypes will be transformed.\nIf empty, all supported files will be transformed. Supported types may be automatically added over time.\nIf a file type is set in this field that isn't supported by the Deidentify action then the job will fail and will not be successfully created/started.\nEach value may be one of: `IMAGE`, `TEXT_FILE`, `CSV`, `TSV`.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "transformationConfig",
      "User specified deidentify templates and configs for structured, unstructured, and image files.\nStructure is documented below.",
      dataloss_PreventionJobTriggerInspectJobActionDeidentifyTransformationConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "transformationDetailsStorageConfig",
      "Config for storing transformation details.\nStructure is documented below.",
      dataloss_PreventionJobTriggerInspectJobActionDeidentifyTransformationDetailsStorageConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cloudStorageOutput",
      "User settable Cloud Storage bucket and folders to store de-identified files.\nThis field must be set for cloud storage deidentification.\nThe output Cloud Storage bucket must be different from the input bucket.\nDe-identified files will overwrite files in the output path.\nForm of: gs://bucket/folder/ or gs://bucket",
      [],
      true,
      false,
    ),
  ];
}
