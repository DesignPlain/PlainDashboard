import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudrunv2_getJobTemplateTemplateVolumeEmptyDir {
  // The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY"]
  medium?: string;

  // Limit on the storage usable by this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. This field's values are of the 'Quantity' k8s type: https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir.
  sizeLimit?: string;
}

export function cloudrunv2_getJobTemplateTemplateVolumeEmptyDir_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "medium",
      'The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sizeLimit",
      "Limit on the storage usable by this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. This field's values are of the 'Quantity' k8s type: https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir.",
      [],
      true,
      false,
    ),
  ];
}
