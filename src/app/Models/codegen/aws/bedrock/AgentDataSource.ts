import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  bedrock_AgentDataSourceServerSideEncryptionConfiguration,
  bedrock_AgentDataSourceServerSideEncryptionConfiguration_GetTypes,
} from '../types/bedrock_AgentDataSourceServerSideEncryptionConfiguration';
import {
  bedrock_AgentDataSourceTimeouts,
  bedrock_AgentDataSourceTimeouts_GetTypes,
} from '../types/bedrock_AgentDataSourceTimeouts';
import {
  bedrock_AgentDataSourceVectorIngestionConfiguration,
  bedrock_AgentDataSourceVectorIngestionConfiguration_GetTypes,
} from '../types/bedrock_AgentDataSourceVectorIngestionConfiguration';
import {
  bedrock_AgentDataSourceDataSourceConfiguration,
  bedrock_AgentDataSourceDataSourceConfiguration_GetTypes,
} from '../types/bedrock_AgentDataSourceDataSourceConfiguration';

export interface AgentDataSourceArgs {
  //
  timeouts?: bedrock_AgentDataSourceTimeouts;

  // Details about the configuration of the server-side encryption. See `vector_ingestion_configuration` block for details.
  vectorIngestionConfiguration?: bedrock_AgentDataSourceVectorIngestionConfiguration;

  // Data deletion policy for a data source. Valid values: `RETAIN`, `DELETE`.
  dataDeletionPolicy?: string;

  // Details about how the data source is stored. See `data_source_configuration` block for details.
  dataSourceConfiguration?: bedrock_AgentDataSourceDataSourceConfiguration;

  // Description of the data source.
  description?: string;

  // Unique identifier of the knowledge base to which the data source belongs.
  knowledgeBaseId?: string;

  /*
Name of the data source.

The following arguments are optional:
*/
  name?: string;

  // Details about the configuration of the server-side encryption. See `server_side_encryption_configuration` block for details.
  serverSideEncryptionConfiguration?: bedrock_AgentDataSourceServerSideEncryptionConfiguration;
}
export class AgentDataSource extends DS_Resource {
  // Data deletion policy for a data source. Valid values: `RETAIN`, `DELETE`.
  public dataDeletionPolicy?: string;

  // Details about how the data source is stored. See `data_source_configuration` block for details.
  public dataSourceConfiguration?: bedrock_AgentDataSourceDataSourceConfiguration;

  //
  public timeouts?: bedrock_AgentDataSourceTimeouts;

  // Details about the configuration of the server-side encryption. See `vector_ingestion_configuration` block for details.
  public vectorIngestionConfiguration?: bedrock_AgentDataSourceVectorIngestionConfiguration;

  // Unique identifier of the data source.
  public dataSourceId?: string;

  // Description of the data source.
  public description?: string;

  // Unique identifier of the knowledge base to which the data source belongs.
  public knowledgeBaseId?: string;

  /*
Name of the data source.

The following arguments are optional:
*/
  public name?: string;

  // Details about the configuration of the server-side encryption. See `server_side_encryption_configuration` block for details.
  public serverSideEncryptionConfiguration?: bedrock_AgentDataSourceServerSideEncryptionConfiguration;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'dataDeletionPolicy',
        'Data deletion policy for a data source. Valid values: `RETAIN`, `DELETE`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'dataSourceConfiguration',
        'Details about how the data source is stored. See `data_source_configuration` block for details.',
        () => bedrock_AgentDataSourceDataSourceConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the data source.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'knowledgeBaseId',
        'Unique identifier of the knowledge base to which the data source belongs.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the data source.\n\nThe following arguments are optional:',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'serverSideEncryptionConfiguration',
        'Details about the configuration of the server-side encryption. See `server_side_encryption_configuration` block for details.',
        () =>
          bedrock_AgentDataSourceServerSideEncryptionConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'timeouts',
        '',
        () => bedrock_AgentDataSourceTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'vectorIngestionConfiguration',
        'Details about the configuration of the server-side encryption. See `vector_ingestion_configuration` block for details.',
        () => bedrock_AgentDataSourceVectorIngestionConfiguration_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
