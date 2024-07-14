import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface organizations_getDelegatedServicesDelegatedService {
  // The date that the account became a delegated administrator for this service.
  delegationEnabledDate?: string;

  // The name of an AWS service that can request an operation for the specified service.
  servicePrincipal?: string;
}

export function organizations_getDelegatedServicesDelegatedService_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "delegationEnabledDate",
      "The date that the account became a delegated administrator for this service.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "servicePrincipal",
      "The name of an AWS service that can request an operation for the specified service.",
      [],
      true,
      false,
    ),
  ];
}
