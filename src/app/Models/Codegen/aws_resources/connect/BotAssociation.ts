import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  connect_BotAssociationLexBot,
  connect_BotAssociationLexBot_GetTypes,
} from "../types/connect_BotAssociationLexBot";

export interface BotAssociationArgs {
  // Configuration information of an Amazon Lex (V1) bot. Detailed below.
  lexBot?: connect_BotAssociationLexBot;

  // The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
  instanceId?: string;
}
export class BotAssociation extends Resource {
  // The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
  public instanceId?: string;

  // Configuration information of an Amazon Lex (V1) bot. Detailed below.
  public lexBot?: connect_BotAssociationLexBot;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "lexBot",
        "Configuration information of an Amazon Lex (V1) bot. Detailed below.",
        connect_BotAssociationLexBot_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceId",
        "The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.",
        [],
        true,
        true,
      ),
    ];
  }
}
