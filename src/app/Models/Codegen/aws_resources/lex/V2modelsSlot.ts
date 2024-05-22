import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lex_V2modelsSlotValueElicitationSetting,
  lex_V2modelsSlotValueElicitationSetting_GetTypes,
} from "../types/lex_V2modelsSlotValueElicitationSetting";
import {
  lex_V2modelsSlotMultipleValuesSetting,
  lex_V2modelsSlotMultipleValuesSetting_GetTypes,
} from "../types/lex_V2modelsSlotMultipleValuesSetting";
import {
  lex_V2modelsSlotObfuscationSetting,
  lex_V2modelsSlotObfuscationSetting_GetTypes,
} from "../types/lex_V2modelsSlotObfuscationSetting";
import {
  lex_V2modelsSlotTimeouts,
  lex_V2modelsSlotTimeouts_GetTypes,
} from "../types/lex_V2modelsSlotTimeouts";

export interface V2modelsSlotArgs {
  // Identifier of the bot associated with the slot.
  botId?: string;

  // Whether the slot returns multiple values in one response. See the `multiple_values_setting` argument reference below.
  multipleValuesSettings?: Array<lex_V2modelsSlotMultipleValuesSetting>;

  // Determines how slot values are used in Amazon CloudWatch logs. See the `obfuscation_setting` argument reference below.
  obfuscationSettings?: Array<lex_V2modelsSlotObfuscationSetting>;

  // Unique identifier for the slot type associated with this slot.
  slotTypeId?: string;

  //
  timeouts?: lex_V2modelsSlotTimeouts;

  /*
Prompts that Amazon Lex sends to the user to elicit a response that provides the value for the slot.

The following arguments are optional:
*/
  valueElicitationSetting?: lex_V2modelsSlotValueElicitationSetting;

  // Version of the bot associated with the slot.
  botVersion?: string;

  // Description of the slot.
  description?: string;

  // Identifier of the intent that contains the slot.
  intentId?: string;

  // Identifier of the language and locale that the slot will be used in.
  localeId?: string;

  // Name of the slot.
  name?: string;
}
export class V2modelsSlot extends Resource {
  // Name of the slot.
  public name?: string;

  // Determines how slot values are used in Amazon CloudWatch logs. See the `obfuscation_setting` argument reference below.
  public obfuscationSettings?: Array<lex_V2modelsSlotObfuscationSetting>;

  //
  public timeouts?: lex_V2modelsSlotTimeouts;

  // Identifier of the bot associated with the slot.
  public botId?: string;

  // Version of the bot associated with the slot.
  public botVersion?: string;

  // Description of the slot.
  public description?: string;

  // Whether the slot returns multiple values in one response. See the `multiple_values_setting` argument reference below.
  public multipleValuesSettings?: Array<lex_V2modelsSlotMultipleValuesSetting>;

  /*
Prompts that Amazon Lex sends to the user to elicit a response that provides the value for the slot.

The following arguments are optional:
*/
  public valueElicitationSetting?: lex_V2modelsSlotValueElicitationSetting;

  // Identifier of the intent that contains the slot.
  public intentId?: string;

  // Identifier of the language and locale that the slot will be used in.
  public localeId?: string;

  // Unique identifier associated with the slot.
  public slotId?: string;

  // Unique identifier for the slot type associated with this slot.
  public slotTypeId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "multipleValuesSettings",
        "Whether the slot returns multiple values in one response. See the `multiple_values_setting` argument reference below.",
        lex_V2modelsSlotMultipleValuesSetting_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "valueElicitationSetting",
        "Prompts that Amazon Lex sends to the user to elicit a response that provides the value for the slot.\n\nThe following arguments are optional:",
        lex_V2modelsSlotValueElicitationSetting_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "intentId",
        "Identifier of the intent that contains the slot.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the slot.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "botId",
        "Identifier of the bot associated with the slot.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "obfuscationSettings",
        "Determines how slot values are used in Amazon CloudWatch logs. See the `obfuscation_setting` argument reference below.",
        lex_V2modelsSlotObfuscationSetting_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "slotTypeId",
        "Unique identifier for the slot type associated with this slot.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        lex_V2modelsSlotTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "botVersion",
        "Version of the bot associated with the slot.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the slot.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "localeId",
        "Identifier of the language and locale that the slot will be used in.",
        [],
        true,
        false,
      ),
    ];
  }
}
