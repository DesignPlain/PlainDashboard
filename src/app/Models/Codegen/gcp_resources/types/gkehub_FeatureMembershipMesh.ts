import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface gkehub_FeatureMembershipMesh {
  // Whether to automatically manage Service Mesh. Can either be `MANAGEMENT_AUTOMATIC` or `MANAGEMENT_MANUAL`.
  management?: string;

  // --DEPRECATED-- Whether to automatically manage Service Mesh control planes. Possible values: CONTROL_PLANE_MANAGEMENT_UNSPECIFIED, AUTOMATIC, MANUAL
  controlPlane?: string;
}

export function gkehub_FeatureMembershipMesh_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "management",
      "Whether to automatically manage Service Mesh. Can either be `MANAGEMENT_AUTOMATIC` or `MANAGEMENT_MANUAL`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "controlPlane",
      "**DEPRECATED** Whether to automatically manage Service Mesh control planes. Possible values: CONTROL_PLANE_MANAGEMENT_UNSPECIFIED, AUTOMATIC, MANUAL",
      [],
      false,
      false,
    ),
  ];
}
