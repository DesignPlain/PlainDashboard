import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponse,
  lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponse_GetTypes,
} from "./lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponse";
import {
  lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse,
  lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse_GetTypes,
} from "./lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse";
import {
  lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponse,
  lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponse_GetTypes,
} from "./lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponse";

export interface lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecification {
  //
  active?: boolean;

  //
  continueResponses?: Array<lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponse>;

  //
  stillWaitingResponses?: Array<lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse>;

  //
  waitingResponses?: Array<lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponse>;
}

export function lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "active", "", [], false, false),
    new DynamicUIProps(
      InputType.Array,
      "continueResponses",
      "",
      lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponse_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "stillWaitingResponses",
      "",
      lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "waitingResponses",
      "",
      lex_V2modelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponse_GetTypes(),
      false,
      false,
    ),
  ];
}
