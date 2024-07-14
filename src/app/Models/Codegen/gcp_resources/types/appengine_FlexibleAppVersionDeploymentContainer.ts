import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appengine_FlexibleAppVersionDeploymentContainer {
  /*
URI to the hosted container image in Google Container Registry. The URI must be fully qualified and include a tag or digest.
Examples: "gcr.io/my-project/image:tag" or "gcr.io/my-project/image@digest"
*/
  image?: string;
}

export function appengine_FlexibleAppVersionDeploymentContainer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "image",
      'URI to the hosted container image in Google Container Registry. The URI must be fully qualified and include a tag or digest.\nExamples: "gcr.io/my-project/image:tag" or "gcr.io/my-project/image@digest"',
      [],
      true,
      false,
    ),
  ];
}
