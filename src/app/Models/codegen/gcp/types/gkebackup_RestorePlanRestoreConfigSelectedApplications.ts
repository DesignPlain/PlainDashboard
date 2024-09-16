import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  gkebackup_RestorePlanRestoreConfigSelectedApplicationsNamespacedName,
  gkebackup_RestorePlanRestoreConfigSelectedApplicationsNamespacedName_GetTypes,
} from './gkebackup_RestorePlanRestoreConfigSelectedApplicationsNamespacedName';

export interface gkebackup_RestorePlanRestoreConfigSelectedApplications {
  /*
A list of namespaced Kubernetes resources.
Structure is documented below.
*/
  namespacedNames?: Array<gkebackup_RestorePlanRestoreConfigSelectedApplicationsNamespacedName>;
}

export function gkebackup_RestorePlanRestoreConfigSelectedApplications_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'namespacedNames',
      'A list of namespaced Kubernetes resources.\nStructure is documented below.',
      () =>
        gkebackup_RestorePlanRestoreConfigSelectedApplicationsNamespacedName_GetTypes(),
      true,
      false,
    ),
  ];
}
