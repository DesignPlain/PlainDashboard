import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudrunv2_getServiceTemplateVolumeEmptyDir {
  // The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY"]
  Medium?: string;

  // Limit on the storage usable by this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. This field's values are of the 'Quantity' k8s type: https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir.
  SizeLimit?: string;
}

export function Cloudrunv2_getServiceTemplateVolumeEmptyDir_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Medium",
      'The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SizeLimit",
      "Limit on the storage usable by this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. This field's values are of the 'Quantity' k8s type: https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir.",
      [],
      true,
      false,
    ),
  ];
}
