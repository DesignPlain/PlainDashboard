import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup,
  lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup_GetTypes,
} from "./lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup";

export interface lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponse {
  //
  allowInterrupt?: boolean;

  //
  messageGroups?: Array<lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup>;
}

export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponse_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "allowInterrupt", "", [], false, false),
    new DynamicUIProps(
      InputType.Array,
      "messageGroups",
      "",
      lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup_GetTypes(),
      false,
      false,
    ),
  ];
}
