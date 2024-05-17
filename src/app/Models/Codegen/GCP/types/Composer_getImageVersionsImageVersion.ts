import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Composer_getImageVersionsImageVersion {
  // The string identifier of the image version, in the form: "composer-x.y.z-airflow-a.b.c"
  ImageVersionId?: string;

  // Supported python versions for this image version
  SupportedPythonVersions?: Array<string>;
}

export function Composer_getImageVersionsImageVersion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ImageVersionId",
      'The string identifier of the image version, in the form: "composer-x.y.z-airflow-a.b.c"',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SupportedPythonVersions",
      "Supported python versions for this image version",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
