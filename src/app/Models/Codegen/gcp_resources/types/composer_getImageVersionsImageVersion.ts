import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface composer_getImageVersionsImageVersion {
  // The string identifier of the image version, in the form: "composer-x.y.z-airflow-a.b.c"
  imageVersionId?: string;

  // Supported python versions for this image version
  supportedPythonVersions?: Array<string>;
}

export function composer_getImageVersionsImageVersion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "imageVersionId",
      'The string identifier of the image version, in the form: "composer-x.y.z-airflow-a.b.c"',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "supportedPythonVersions",
      "Supported python versions for this image version",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
