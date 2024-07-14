import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface codegurureviewer_RepositoryAssociationRepositoryBitbucket {
  // The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection.
  connectionArn?: string;

  // The name of the third party source repository.
  name?: string;

  // The username for the account that owns the repository.
  owner?: string;
}

export function codegurureviewer_RepositoryAssociationRepositoryBitbucket_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "connectionArn",
      "The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the third party source repository.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "owner",
      "The username for the account that owns the repository.",
      [],
      true,
      false,
    ),
  ];
}
