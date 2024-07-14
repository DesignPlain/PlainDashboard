import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface config_endpoints {
  // Use this to override the default service endpoint URL
  elasticbeanstalk?: string;

  // Use this to override the default service endpoint URL
  s3control?: string;

  // Use this to override the default service endpoint URL
  redshift?: string;

  // Use this to override the default service endpoint URL
  costoptimizationhub?: string;

  // Use this to override the default service endpoint URL
  glacier?: string;

  // Use this to override the default service endpoint URL
  ram?: string;

  // Use this to override the default service endpoint URL
  lex?: string;

  // Use this to override the default service endpoint URL
  quicksight?: string;

  // Use this to override the default service endpoint URL
  s3outposts?: string;

  // Use this to override the default service endpoint URL
  sts?: string;

  // Use this to override the default service endpoint URL
  pipes?: string;

  // Use this to override the default service endpoint URL
  sso?: string;

  // Use this to override the default service endpoint URL
  autoscalingplans?: string;

  // Use this to override the default service endpoint URL
  identitystore?: string;

  // Use this to override the default service endpoint URL
  lambda?: string;

  // Use this to override the default service endpoint URL
  emrcontainers?: string;

  // Use this to override the default service endpoint URL
  elb?: string;

  // Use this to override the default service endpoint URL
  ivs?: string;

  // Use this to override the default service endpoint URL
  servicequotas?: string;

  // Use this to override the default service endpoint URL
  imagebuilder?: string;

  // Use this to override the default service endpoint URL
  mq?: string;

  // Use this to override the default service endpoint URL
  redshiftdata?: string;

  // Use this to override the default service endpoint URL
  appmesh?: string;

  // Use this to override the default service endpoint URL
  cloudwatchlogs?: string;

  // Use this to override the default service endpoint URL
  directoryservice?: string;

  // Use this to override the default service endpoint URL
  cur?: string;

  // Use this to override the default service endpoint URL
  neptune?: string;

  // Use this to override the default service endpoint URL
  workspaces?: string;

  // Use this to override the default service endpoint URL
  cloudfrontkeyvaluestore?: string;

  // Use this to override the default service endpoint URL
  cloudhsm?: string;

  // Use this to override the default service endpoint URL
  cognitoidentity?: string;

  // Use this to override the default service endpoint URL
  acm?: string;

  // Use this to override the default service endpoint URL
  appfabric?: string;

  // Use this to override the default service endpoint URL
  cognitoidentityprovider?: string;

  // Use this to override the default service endpoint URL
  costexplorer?: string;

  // Use this to override the default service endpoint URL
  datasync?: string;

  // Use this to override the default service endpoint URL
  organizations?: string;

  // Use this to override the default service endpoint URL
  synthetics?: string;

  // Use this to override the default service endpoint URL
  appsync?: string;

  // Use this to override the default service endpoint URL
  cloudwatchrum?: string;

  // Use this to override the default service endpoint URL
  codegurureviewer?: string;

  // Use this to override the default service endpoint URL
  detective?: string;

  // Use this to override the default service endpoint URL
  ds?: string;

  // Use this to override the default service endpoint URL
  finspace?: string;

  // Use this to override the default service endpoint URL
  kinesis?: string;

  // Use this to override the default service endpoint URL
  opensearchservice?: string;

  // Use this to override the default service endpoint URL
  cloudcontrol?: string;

  // Use this to override the default service endpoint URL
  cloudhsmv2?: string;

  // Use this to override the default service endpoint URL
  connect?: string;

  // Use this to override the default service endpoint URL
  simpledb?: string;

  // Use this to override the default service endpoint URL
  auditmanager?: string;

  // Use this to override the default service endpoint URL
  kinesisanalyticsv2?: string;

  // Use this to override the default service endpoint URL
  recyclebin?: string;

  // Use this to override the default service endpoint URL
  inspectorv2?: string;

  // Use this to override the default service endpoint URL
  swf?: string;

  // Use this to override the default service endpoint URL
  secretsmanager?: string;

  // Use this to override the default service endpoint URL
  ses?: string;

  // Use this to override the default service endpoint URL
  codestarconnections?: string;

  // Use this to override the default service endpoint URL
  networkfirewall?: string;

  // Use this to override the default service endpoint URL
  route53?: string;

  // Use this to override the default service endpoint URL
  config?: string;

  // Use this to override the default service endpoint URL
  elastictranscoder?: string;

  // Use this to override the default service endpoint URL
  bedrock?: string;

  // Use this to override the default service endpoint URL
  networkmanager?: string;

  // Use this to override the default service endpoint URL
  oam?: string;

  // Use this to override the default service endpoint URL
  kafkaconnect?: string;

  // Use this to override the default service endpoint URL
  sfn?: string;

  // Use this to override the default service endpoint URL
  stepfunctions?: string;

  // Use this to override the default service endpoint URL
  autoscaling?: string;

  // Use this to override the default service endpoint URL
  es?: string;

  // Use this to override the default service endpoint URL
  globalaccelerator?: string;

  // Use this to override the default service endpoint URL
  firehose?: string;

  // Use this to override the default service endpoint URL
  prometheusservice?: string;

  // Use this to override the default service endpoint URL
  redshiftdataapiservice?: string;

  // Use this to override the default service endpoint URL
  apigateway?: string;

  // Use this to override the default service endpoint URL
  cloud9?: string;

  // Use this to override the default service endpoint URL
  cloudcontrolapi?: string;

  // Use this to override the default service endpoint URL
  devicefarm?: string;

  // Use this to override the default service endpoint URL
  transcribe?: string;

  // Use this to override the default service endpoint URL
  ecs?: string;

  // Use this to override the default service endpoint URL
  efs?: string;

  // Use this to override the default service endpoint URL
  locationservice?: string;

  // Use this to override the default service endpoint URL
  securityhub?: string;

  // Use this to override the default service endpoint URL
  acmpca?: string;

  // Use this to override the default service endpoint URL
  budgets?: string;

  // Use this to override the default service endpoint URL
  keyspaces?: string;

  // Use this to override the default service endpoint URL
  grafana?: string;

  // Use this to override the default service endpoint URL
  rum?: string;

  // Use this to override the default service endpoint URL
  fsx?: string;

  // Use this to override the default service endpoint URL
  codebuild?: string;

  // Use this to override the default service endpoint URL
  databasemigrationservice?: string;

  // Use this to override the default service endpoint URL
  eventbridge?: string;

  // Use this to override the default service endpoint URL
  logs?: string;

  // Use this to override the default service endpoint URL
  opsworks?: string;

  // Use this to override the default service endpoint URL
  beanstalk?: string;

  // Use this to override the default service endpoint URL
  cognitoidp?: string;

  // Use this to override the default service endpoint URL
  lightsail?: string;

  // Use this to override the default service endpoint URL
  guardduty?: string;

  // Use this to override the default service endpoint URL
  mediastore?: string;

  // Use this to override the default service endpoint URL
  sns?: string;

  // Use this to override the default service endpoint URL
  ssoadmin?: string;

  // Use this to override the default service endpoint URL
  amplify?: string;

  // Use this to override the default service endpoint URL
  chime?: string;

  // Use this to override the default service endpoint URL
  dlm?: string;

  // Use this to override the default service endpoint URL
  route53domains?: string;

  // Use this to override the default service endpoint URL
  transfer?: string;

  // Use this to override the default service endpoint URL
  backup?: string;

  // Use this to override the default service endpoint URL
  chimesdkmediapipelines?: string;

  // Use this to override the default service endpoint URL
  pinpoint?: string;

  // Use this to override the default service endpoint URL
  worklink?: string;

  // Use this to override the default service endpoint URL
  amp?: string;

  // Use this to override the default service endpoint URL
  dax?: string;

  // Use this to override the default service endpoint URL
  resourcegroupstaggingapi?: string;

  // Use this to override the default service endpoint URL
  serverlessapprepo?: string;

  // Use this to override the default service endpoint URL
  sqs?: string;

  // Use this to override the default service endpoint URL
  storagegateway?: string;

  // Use this to override the default service endpoint URL
  amg?: string;

  // Use this to override the default service endpoint URL
  iam?: string;

  // Use this to override the default service endpoint URL
  route53recoverycontrolconfig?: string;

  // Use this to override the default service endpoint URL
  schemas?: string;

  // Use this to override the default service endpoint URL
  cloudwatchevidently?: string;

  // Use this to override the default service endpoint URL
  controltower?: string;

  // Use this to override the default service endpoint URL
  mediaconvert?: string;

  // Use this to override the default service endpoint URL
  costandusagereportservice?: string;

  // Use this to override the default service endpoint URL
  greengrass?: string;

  // Use this to override the default service endpoint URL
  wafregional?: string;

  // Use this to override the default service endpoint URL
  docdb?: string;

  // Use this to override the default service endpoint URL
  elasticache?: string;

  // Use this to override the default service endpoint URL
  vpclattice?: string;

  // Use this to override the default service endpoint URL
  rekognition?: string;

  // Use this to override the default service endpoint URL
  resourcegroups?: string;

  // Use this to override the default service endpoint URL
  fis?: string;

  // Use this to override the default service endpoint URL
  lexmodels?: string;

  // Use this to override the default service endpoint URL
  prometheus?: string;

  // Use this to override the default service endpoint URL
  sdb?: string;

  // Use this to override the default service endpoint URL
  codeartifact?: string;

  // Use this to override the default service endpoint URL
  databasemigration?: string;

  // Use this to override the default service endpoint URL
  opensearchserverless?: string;

  // Use this to override the default service endpoint URL
  scheduler?: string;

  // Use this to override the default service endpoint URL
  accessanalyzer?: string;

  // Use this to override the default service endpoint URL
  cloudwatchevents?: string;

  // Use this to override the default service endpoint URL
  datapipeline?: string;

  // Use this to override the default service endpoint URL
  signer?: string;

  // Use this to override the default service endpoint URL
  ssmincidents?: string;

  // Use this to override the default service endpoint URL
  codecommit?: string;

  // Use this to override the default service endpoint URL
  dms?: string;

  // Use this to override the default service endpoint URL
  opensearchingestion?: string;

  // Use this to override the default service endpoint URL
  qldb?: string;

  // Use this to override the default service endpoint URL
  apprunner?: string;

  // Use this to override the default service endpoint URL
  dynamodb?: string;

  // Use this to override the default service endpoint URL
  licensemanager?: string;

  // Use this to override the default service endpoint URL
  sagemaker?: string;

  // Use this to override the default service endpoint URL
  appintegrations?: string;

  // Use this to override the default service endpoint URL
  appregistry?: string;

  // Use this to override the default service endpoint URL
  codeguruprofiler?: string;

  // Use this to override the default service endpoint URL
  mediapackage?: string;

  // Use this to override the default service endpoint URL
  ecr?: string;

  // Use this to override the default service endpoint URL
  lexv2models?: string;

  // Use this to override the default service endpoint URL
  location?: string;

  // Use this to override the default service endpoint URL
  lexmodelsv2?: string;

  // Use this to override the default service endpoint URL
  redshiftserverless?: string;

  // Use this to override the default service endpoint URL
  cloudwatchlog?: string;

  // Use this to override the default service endpoint URL
  emr?: string;

  // Use this to override the default service endpoint URL
  kendra?: string;

  // Use this to override the default service endpoint URL
  inspector2?: string;

  // Use this to override the default service endpoint URL
  verifiedpermissions?: string;

  // Use this to override the default service endpoint URL
  ssmcontacts?: string;

  // Use this to override the default service endpoint URL
  polly?: string;

  // Use this to override the default service endpoint URL
  pricing?: string;

  // Use this to override the default service endpoint URL
  qbusiness?: string;

  // Use this to override the default service endpoint URL
  emrserverless?: string;

  // Use this to override the default service endpoint URL
  serverlessrepo?: string;

  // Use this to override the default service endpoint URL
  docdbelastic?: string;

  // Use this to override the default service endpoint URL
  eks?: string;

  // Use this to override the default service endpoint URL
  elasticloadbalancingv2?: string;

  // Use this to override the default service endpoint URL
  configservice?: string;

  // Use this to override the default service endpoint URL
  customerprofiles?: string;

  // Use this to override the default service endpoint URL
  elbv2?: string;

  // Use this to override the default service endpoint URL
  events?: string;

  // Use this to override the default service endpoint URL
  opensearch?: string;

  // Use this to override the default service endpoint URL
  appconfig?: string;

  // Use this to override the default service endpoint URL
  applicationinsights?: string;

  // Use this to override the default service endpoint URL
  codepipeline?: string;

  // Use this to override the default service endpoint URL
  resourcegroupstagging?: string;

  // Use this to override the default service endpoint URL
  timestreamwrite?: string;

  // Use this to override the default service endpoint URL
  groundstation?: string;

  // Use this to override the default service endpoint URL
  kafka?: string;

  // Use this to override the default service endpoint URL
  managedgrafana?: string;

  // Use this to override the default service endpoint URL
  mediaconnect?: string;

  // Use this to override the default service endpoint URL
  medialive?: string;

  // Use this to override the default service endpoint URL
  s3?: string;

  // Use this to override the default service endpoint URL
  servicecatalogappregistry?: string;

  // Use this to override the default service endpoint URL
  sesv2?: string;

  // Use this to override the default service endpoint URL
  appintegrationsservice?: string;

  // Use this to override the default service endpoint URL
  ec2?: string;

  // Use this to override the default service endpoint URL
  elasticloadbalancing?: string;

  // Use this to override the default service endpoint URL
  waf?: string;

  // Use this to override the default service endpoint URL
  cloudwatch?: string;

  // Use this to override the default service endpoint URL
  computeoptimizer?: string;

  // Use this to override the default service endpoint URL
  iot?: string;

  // Use this to override the default service endpoint URL
  kinesisanalytics?: string;

  // Use this to override the default service endpoint URL
  servicediscovery?: string;

  // Use this to override the default service endpoint URL
  codestarnotifications?: string;

  // Use this to override the default service endpoint URL
  deploy?: string;

  // Use this to override the default service endpoint URL
  directconnect?: string;

  // Use this to override the default service endpoint URL
  pcaconnectorad?: string;

  // Use this to override the default service endpoint URL
  rolesanywhere?: string;

  // Use this to override the default service endpoint URL
  ssm?: string;

  // Use this to override the default service endpoint URL
  appflow?: string;

  // Use this to override the default service endpoint URL
  appstream?: string;

  // Use this to override the default service endpoint URL
  ce?: string;

  // Use this to override the default service endpoint URL
  osis?: string;

  // Use this to override the default service endpoint URL
  route53recoveryreadiness?: string;

  // Use this to override the default service endpoint URL
  shield?: string;

  // Use this to override the default service endpoint URL
  account?: string;

  // Use this to override the default service endpoint URL
  ecrpublic?: string;

  // Use this to override the default service endpoint URL
  mediapackagev2?: string;

  // Use this to override the default service endpoint URL
  internetmonitor?: string;

  // Use this to override the default service endpoint URL
  route53resolver?: string;

  // Use this to override the default service endpoint URL
  transcribeservice?: string;

  // Use this to override the default service endpoint URL
  batch?: string;

  // Use this to override the default service endpoint URL
  cloudwatchobservabilityaccessmanager?: string;

  // Use this to override the default service endpoint URL
  comprehend?: string;

  // Use this to override the default service endpoint URL
  evidently?: string;

  // Use this to override the default service endpoint URL
  fms?: string;

  // Use this to override the default service endpoint URL
  glue?: string;

  // Use this to override the default service endpoint URL
  lexmodelbuilding?: string;

  // Use this to override the default service endpoint URL
  msk?: string;

  // Use this to override the default service endpoint URL
  apigatewayv2?: string;

  // Use this to override the default service endpoint URL
  cloudsearch?: string;

  // Use this to override the default service endpoint URL
  elasticsearchservice?: string;

  // Use this to override the default service endpoint URL
  macie2?: string;

  // Use this to override the default service endpoint URL
  bedrockagent?: string;

  // Use this to override the default service endpoint URL
  cloudformation?: string;

  // Use this to override the default service endpoint URL
  m2?: string;

  // Use this to override the default service endpoint URL
  iotanalytics?: string;

  // Use this to override the default service endpoint URL
  kinesisvideo?: string;

  // Use this to override the default service endpoint URL
  lexmodelbuildingservice?: string;

  // Use this to override the default service endpoint URL
  memorydb?: string;

  // Use this to override the default service endpoint URL
  resourceexplorer2?: string;

  // Use this to override the default service endpoint URL
  appautoscaling?: string;

  // Use this to override the default service endpoint URL
  chimesdkvoice?: string;

  // Use this to override the default service endpoint URL
  gamelift?: string;

  // Use this to override the default service endpoint URL
  wafv2?: string;

  // Use this to override the default service endpoint URL
  athena?: string;

  // Use this to override the default service endpoint URL
  codecatalyst?: string;

  // Use this to override the default service endpoint URL
  kms?: string;

  // Use this to override the default service endpoint URL
  cloudtrail?: string;

  // Use this to override the default service endpoint URL
  codedeploy?: string;

  // Use this to override the default service endpoint URL
  cleanrooms?: string;

  // Use this to override the default service endpoint URL
  inspector?: string;

  // Use this to override the default service endpoint URL
  lookoutmetrics?: string;

  // Use this to override the default service endpoint URL
  launchwizard?: string;

  // Use this to override the default service endpoint URL
  rds?: string;

  // Use this to override the default service endpoint URL
  serverlessapplicationrepository?: string;

  // Use this to override the default service endpoint URL
  elasticsearch?: string;

  // Use this to override the default service endpoint URL
  iotevents?: string;

  // Use this to override the default service endpoint URL
  ivschat?: string;

  // Use this to override the default service endpoint URL
  outposts?: string;

  // Use this to override the default service endpoint URL
  rbin?: string;

  // Use this to override the default service endpoint URL
  securitylake?: string;

  // Use this to override the default service endpoint URL
  wellarchitected?: string;

  // Use this to override the default service endpoint URL
  connectcases?: string;

  // Use this to override the default service endpoint URL
  dataexchange?: string;

  // Use this to override the default service endpoint URL
  lakeformation?: string;

  // Use this to override the default service endpoint URL
  ssmsap?: string;

  // Use this to override the default service endpoint URL
  xray?: string;

  // Use this to override the default service endpoint URL
  cloudfront?: string;

  // Use this to override the default service endpoint URL
  healthlake?: string;

  // Use this to override the default service endpoint URL
  mwaa?: string;

  // Use this to override the default service endpoint URL
  applicationautoscaling?: string;

  // Use this to override the default service endpoint URL
  s3api?: string;

  // Use this to override the default service endpoint URL
  servicecatalog?: string;
}

export function config_endpoints_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "fsx",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "redshiftserverless",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "eks",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ivs",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sfn",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lexmodels",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "opensearch",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "iotanalytics",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mediastore",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "storagegateway",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "greengrass",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sagemaker",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "emrserverless",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "comprehend",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "acmpca",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cognitoidp",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "groundstation",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kms",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "wellarchitected",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "elastictranscoder",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ecs",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bedrock",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prometheus",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ec2",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "redshift",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cloudwatchrum",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kafkaconnect",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "qbusiness",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ce",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mediapackagev2",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lambda",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "route53",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dlm",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cloudfront",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sns",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sqs",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "iam",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "elasticache",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "codecatalyst",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "rds",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "networkmanager",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "apigateway",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "elbv2",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ds",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "stepfunctions",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mwaa",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "applicationautoscaling",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "codeartifact",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "datapipeline",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ssmincidents",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "configservice",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "elasticbeanstalk",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "recyclebin",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "swf",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resourcegroupstaggingapi",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dataexchange",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "neptune",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "opensearchservice",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "databasemigrationservice",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mediaconvert",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "codeguruprofiler",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "directoryservice",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cloud9",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "databasemigration",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "licensemanager",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cognitoidentityprovider",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cloudwatchevidently",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "pricing",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lakeformation",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "acm",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "controltower",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "docdbelastic",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "fms",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "iotevents",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3api",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "organizations",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prometheusservice",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "redshiftdataapiservice",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "route53recoverycontrolconfig",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "opensearchingestion",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timestreamwrite",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ram",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "finspace",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "devicefarm",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cloudtrail",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "opensearchserverless",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cloudwatch",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "autoscalingplans",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "verifiedpermissions",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "codegurureviewer",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "keyspaces",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "beanstalk",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "route53domains",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cloudformation",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serverlessapplicationrepository",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "synthetics",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "appsync",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "events",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kinesisvideo",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "emrcontainers",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "efs",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "amp",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "apigatewayv2",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "oam",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lightsail",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "appmesh",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cur",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serverlessapprepo",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "glacier",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sso",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "managedgrafana",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "codebuild",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "codepipeline",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dynamodb",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lexmodelsv2",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kendra",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "chime",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "rekognition",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "macie2",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "launchwizard",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "redshiftdata",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "pcaconnectorad",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ecr",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serverlessrepo",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "inspector",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "networkfirewall",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "codecommit",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "evidently",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "athena",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "securitylake",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cloudfrontkeyvaluestore",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "appintegrationsservice",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cloudwatchevents",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "inspector2",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "applicationinsights",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "medialive",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "computeoptimizer",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ecrpublic",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cognitoidentity",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "transcribe",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "m2",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cleanrooms",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "imagebuilder",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "rum",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "backup",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "osis",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "quicksight",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "identitystore",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "elasticloadbalancingv2",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "memorydb",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "xray",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "pinpoint",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dax",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "servicecatalogappregistry",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "directconnect",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "appflow",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "outposts",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "elb",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "scheduler",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resourcegroups",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "internetmonitor",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "batch",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "wafv2",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lookoutmetrics",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "amplify",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "chimesdkmediapipelines",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "transfer",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ssmcontacts",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "waf",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "globalaccelerator",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "securityhub",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "location",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cloudcontrolapi",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "schemas",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logs",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lexv2models",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "codestarnotifications",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "route53resolver",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lexmodelbuildingservice",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cloudhsm",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "budgets",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "secretsmanager",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "polly",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "chimesdkvoice",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "workspaces",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kinesis",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "es",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "account",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cloudsearch",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sts",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "appfabric",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ssm",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "elasticsearch",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bedrockagent",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "appautoscaling",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ses",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "codedeploy",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sdb",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "docdb",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vpclattice",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mq",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "fis",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "iot",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cloudwatchobservabilityaccessmanager",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cloudhsmv2",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kafka",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "costoptimizationhub",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "accessanalyzer",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "route53recoveryreadiness",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "apprunner",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resourcegroupstagging",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resourceexplorer2",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "eventbridge",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "guardduty",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "healthlake",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "appconfig",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sesv2",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "amg",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "costandusagereportservice",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cloudwatchlog",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deploy",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "elasticsearchservice",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ssmsap",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lex",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "config",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "gamelift",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "connect",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "rolesanywhere",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lexmodelbuilding",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "qldb",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mediapackage",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kinesisanalyticsv2",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "servicequotas",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cloudcontrol",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "locationservice",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "appstream",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "datasync",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "simpledb",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "auditmanager",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ssoadmin",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "elasticloadbalancing",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "shield",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3control",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "pipes",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ivschat",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "rbin",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dms",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "appregistry",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "detective",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "msk",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "inspectorv2",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "appintegrations",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "emr",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "transcribeservice",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3outposts",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cloudwatchlogs",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "servicediscovery",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "connectcases",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "servicecatalog",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "grafana",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "opsworks",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "customerprofiles",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mediaconnect",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "glue",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "worklink",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "signer",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "autoscaling",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "firehose",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "wafregional",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kinesisanalytics",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "costexplorer",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "codestarconnections",
      "Use this to override the default service endpoint URL",
      [],
      false,
      false,
    ),
  ];
}
