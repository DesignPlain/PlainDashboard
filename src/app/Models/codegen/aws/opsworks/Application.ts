import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  opsworks_ApplicationAppSource,
  opsworks_ApplicationAppSource_GetTypes,
} from '../types/opsworks_ApplicationAppSource';
import {
  opsworks_ApplicationSslConfiguration,
  opsworks_ApplicationSslConfiguration_GetTypes,
} from '../types/opsworks_ApplicationSslConfiguration';
import {
  opsworks_ApplicationEnvironment,
  opsworks_ApplicationEnvironment_GetTypes,
} from '../types/opsworks_ApplicationEnvironment';

export interface ApplicationArgs {
  // A short, machine-readable name for the application. This can only be defined on resource creation and ignored on resource update.
  shortName?: string;

  // Opsworks application type. One of `aws-flow-ruby`, `java`, `rails`, `php`, `nodejs`, `static` or `other`.
  type?: string;

  // SCM configuration of the app as described below.
  appSources?: Array<opsworks_ApplicationAppSource>;

  // Run bundle install when deploying for application of type `rails`.
  autoBundleOnDeploy?: string;

  // The data source's ARN.
  dataSourceArn?: string;

  // Whether to enable SSL for the app. This must be set in order to let `ssl_configuration.private_key`, `ssl_configuration.certificate` and `ssl_configuration.chain` take effect.
  enableSsl?: boolean;

  // The SSL configuration of the app. Object is described below.
  sslConfigurations?: Array<opsworks_ApplicationSslConfiguration>;

  // The database name.
  dataSourceDatabaseName?: string;

  // A description of the app.
  description?: string;

  // A human-readable name for the application.
  name?: string;

  // ID of the stack the application will belong to.
  stackId?: string;

  // The name of the Rails environment for application of type `rails`.
  railsEnv?: string;

  // Specify activity and workflow workers for your app using the aws-flow gem.
  awsFlowRubySettings?: string;

  // The data source's type one of `AutoSelectOpsworksMysqlInstance`, `OpsworksMysqlInstance`, or `RdsDbInstance`.
  dataSourceType?: string;

  // Subfolder for the document root for application of type `rails`.
  documentRoot?: string;

  // A list of virtual host alias.
  domains?: Array<string>;

  // Object to define environment variables.  Object is described below.
  environments?: Array<opsworks_ApplicationEnvironment>;
}
export class Application extends DS_Resource {
  // Opsworks application type. One of `aws-flow-ruby`, `java`, `rails`, `php`, `nodejs`, `static` or `other`.
  public type?: string;

  // SCM configuration of the app as described below.
  public appSources?: Array<opsworks_ApplicationAppSource>;

  // Specify activity and workflow workers for your app using the aws-flow gem.
  public awsFlowRubySettings?: string;

  // The data source's type one of `AutoSelectOpsworksMysqlInstance`, `OpsworksMysqlInstance`, or `RdsDbInstance`.
  public dataSourceType?: string;

  // A short, machine-readable name for the application. This can only be defined on resource creation and ignored on resource update.
  public shortName?: string;

  // The database name.
  public dataSourceDatabaseName?: string;

  // The name of the Rails environment for application of type `rails`.
  public railsEnv?: string;

  // ID of the stack the application will belong to.
  public stackId?: string;

  // Run bundle install when deploying for application of type `rails`.
  public autoBundleOnDeploy?: string;

  // A description of the app.
  public description?: string;

  // A list of virtual host alias.
  public domains?: Array<string>;

  // A human-readable name for the application.
  public name?: string;

  // The SSL configuration of the app. Object is described below.
  public sslConfigurations?: Array<opsworks_ApplicationSslConfiguration>;

  // The data source's ARN.
  public dataSourceArn?: string;

  // Subfolder for the document root for application of type `rails`.
  public documentRoot?: string;

  // Whether to enable SSL for the app. This must be set in order to let `ssl_configuration.private_key`, `ssl_configuration.certificate` and `ssl_configuration.chain` take effect.
  public enableSsl?: boolean;

  // Object to define environment variables.  Object is described below.
  public environments?: Array<opsworks_ApplicationEnvironment>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'type',
        'Opsworks application type. One of `aws-flow-ruby`, `java`, `rails`, `php`, `nodejs`, `static` or `other`.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'dataSourceDatabaseName',
        'The database name.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'sslConfigurations',
        'The SSL configuration of the app. Object is described below.',
        () => opsworks_ApplicationSslConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'A human-readable name for the application.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'railsEnv',
        'The name of the Rails environment for application of type `rails`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'domains',
        'A list of virtual host alias.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'appSources',
        'SCM configuration of the app as described below.',
        () => opsworks_ApplicationAppSource_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'dataSourceArn',
        "The data source's ARN.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'A description of the app.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'shortName',
        'A short, machine-readable name for the application. This can only be defined on resource creation and ignored on resource update.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'autoBundleOnDeploy',
        'Run bundle install when deploying for application of type `rails`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enableSsl',
        'Whether to enable SSL for the app. This must be set in order to let `ssl_configuration.private_key`, `ssl_configuration.certificate` and `ssl_configuration.chain` take effect.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'stackId',
        'ID of the stack the application will belong to.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'awsFlowRubySettings',
        'Specify activity and workflow workers for your app using the aws-flow gem.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'dataSourceType',
        "The data source's type one of `AutoSelectOpsworksMysqlInstance`, `OpsworksMysqlInstance`, or `RdsDbInstance`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'documentRoot',
        'Subfolder for the document root for application of type `rails`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'environments',
        'Object to define environment variables.  Object is described below.',
        () => opsworks_ApplicationEnvironment_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
