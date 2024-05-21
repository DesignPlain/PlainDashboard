import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gkebackup_RestorePlanRestoreConfigTransformationRuleResourceFilterGroupKind,
  gkebackup_RestorePlanRestoreConfigTransformationRuleResourceFilterGroupKind_GetTypes,
} from "./gkebackup_RestorePlanRestoreConfigTransformationRuleResourceFilterGroupKind";

export interface gkebackup_RestorePlanRestoreConfigTransformationRuleResourceFilter {
  /*
(Filtering parameter) Any resource subject to transformation must
belong to one of the listed "types". If this field is not provided,
no type filtering will be performed
(all resources of all types matching previous filtering parameters
will be candidates for transformation).
Structure is documented below.
*/
  groupKinds?: Array<gkebackup_RestorePlanRestoreConfigTransformationRuleResourceFilterGroupKind>;

  /*
This is a JSONPath expression that matches specific fields of
candidate resources and it operates as a filtering parameter
(resources that are not matched with this expression will not
be candidates for transformation).
*/
  jsonPath?: string;

  /*
(Filtering parameter) Any resource subject to transformation must
be contained within one of the listed Kubernetes Namespace in the
Backup. If this field is not provided, no namespace filtering will
be performed (all resources in all Namespaces, including all
cluster-scoped resources, will be candidates for transformation).
To mix cluster-scoped and namespaced resources in the same rule,
use an empty string ("") as one of the target namespaces.
*/
  namespaces?: Array<string>;
}

export function gkebackup_RestorePlanRestoreConfigTransformationRuleResourceFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "groupKinds",
      '(Filtering parameter) Any resource subject to transformation must\nbelong to one of the listed "types". If this field is not provided,\nno type filtering will be performed\n(all resources of all types matching previous filtering parameters\nwill be candidates for transformation).\nStructure is documented below.',
      gkebackup_RestorePlanRestoreConfigTransformationRuleResourceFilterGroupKind_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "jsonPath",
      "This is a JSONPath expression that matches specific fields of\ncandidate resources and it operates as a filtering parameter\n(resources that are not matched with this expression will not\nbe candidates for transformation).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "namespaces",
      '(Filtering parameter) Any resource subject to transformation must\nbe contained within one of the listed Kubernetes Namespace in the\nBackup. If this field is not provided, no namespace filtering will\nbe performed (all resources in all Namespaces, including all\ncluster-scoped resources, will be candidates for transformation).\nTo mix cluster-scoped and namespaced resources in the same rule,\nuse an empty string ("") as one of the target namespaces.',
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
