import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface codegurureviewer_RepositoryAssociationRepositoryCodecommit {
  // The name of the AWS CodeCommit repository.
  name?: string;
}

export function codegurureviewer_RepositoryAssociationRepositoryCodecommit_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the AWS CodeCommit repository.',
      () => [],
      true,
      false,
    ),
  ];
}
