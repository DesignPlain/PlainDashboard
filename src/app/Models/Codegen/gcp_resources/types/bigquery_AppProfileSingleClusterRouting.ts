import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface bigquery_AppProfileSingleClusterRouting {
  /*
If true, CheckAndMutateRow and ReadModifyWriteRow requests are allowed by this app profile.
It is unsafe to send these requests to the same table/row/column in multiple clusters.
*/
  allowTransactionalWrites?: boolean;

  // The cluster to which read/write requests should be routed.
  clusterId?: string;
}

export function bigquery_AppProfileSingleClusterRouting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "allowTransactionalWrites",
      "If true, CheckAndMutateRow and ReadModifyWriteRow requests are allowed by this app profile.\nIt is unsafe to send these requests to the same table/row/column in multiple clusters.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clusterId",
      "The cluster to which read/write requests should be routed.",
      [],
      true,
      false,
    ),
  ];
}
