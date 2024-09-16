import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dataloss_PreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoType,
  dataloss_PreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoType_GetTypes,
} from './dataloss_PreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoType';

export interface dataloss_PreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoType {
  /*
Type of information the findings limit applies to. Only one limit per infoType should be provided. If InfoTypeLimit does
not have an infoType, the DLP API applies the limit against all infoTypes that are found but not
specified in another InfoTypeLimit.
Structure is documented below.
*/
  infoType?: dataloss_PreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoType;

  // Max findings limit for the given infoType.
  maxFindings?: number;
}

export function dataloss_PreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'infoType',
      'Type of information the findings limit applies to. Only one limit per infoType should be provided. If InfoTypeLimit does\nnot have an infoType, the DLP API applies the limit against all infoTypes that are found but not\nspecified in another InfoTypeLimit.\nStructure is documented below.',
      () =>
        dataloss_PreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoType_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maxFindings',
      'Max findings limit for the given infoType.',
      () => [],
      false,
      false,
    ),
  ];
}
