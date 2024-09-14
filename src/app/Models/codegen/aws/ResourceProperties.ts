import { ResourceType } from "./ResourceType";
import { DS_Resource, ResourceProperty } from "../ds_base/Resource";
import { DynamicUIProps } from "../ds_base/DynamicUIProps";
import { Analyzer as ACCESSANALYZER_Analyzer } from "./accessanalyzer/Analyzer";
import { ArchiveRule as ACCESSANALYZER_ArchiveRule } from "./accessanalyzer/ArchiveRule";
import { AlternativeContact as ACCOUNT_AlternativeContact } from "./account/AlternativeContact";
import { PrimaryContact as ACCOUNT_PrimaryContact } from "./account/PrimaryContact";
import { Region as ACCOUNT_Region } from "./account/Region";
import { Certificate as ACM_Certificate } from "./acm/Certificate";
import { CertificateValidation as ACM_CertificateValidation } from "./acm/CertificateValidation";
import { Certificate as ACMPCA_Certificate } from "./acmpca/Certificate";
import { CertificateAuthority as ACMPCA_CertificateAuthority } from "./acmpca/CertificateAuthority";
import { CertificateAuthorityCertificate as ACMPCA_CertificateAuthorityCertificate } from "./acmpca/CertificateAuthorityCertificate";
import { Permission as ACMPCA_Permission } from "./acmpca/Permission";
import { Policy as ACMPCA_Policy } from "./acmpca/Policy";
import { Listener as ALB_Listener } from "./alb/Listener";
import { ListenerCertificate as ALB_ListenerCertificate } from "./alb/ListenerCertificate";
import { ListenerRule as ALB_ListenerRule } from "./alb/ListenerRule";
import { LoadBalancer as ALB_LoadBalancer } from "./alb/LoadBalancer";
import { TargetGroup as ALB_TargetGroup } from "./alb/TargetGroup";
import { TargetGroupAttachment as ALB_TargetGroupAttachment } from "./alb/TargetGroupAttachment";
import { AlertManagerDefinition as AMP_AlertManagerDefinition } from "./amp/AlertManagerDefinition";
import { RuleGroupNamespace as AMP_RuleGroupNamespace } from "./amp/RuleGroupNamespace";
import { Scraper as AMP_Scraper } from "./amp/Scraper";
import { Workspace as AMP_Workspace } from "./amp/Workspace";
import { App as AMPLIFY_App } from "./amplify/App";
import { BackendEnvironment as AMPLIFY_BackendEnvironment } from "./amplify/BackendEnvironment";
import { Branch as AMPLIFY_Branch } from "./amplify/Branch";
import { DomainAssociation as AMPLIFY_DomainAssociation } from "./amplify/DomainAssociation";
import { Webhook as AMPLIFY_Webhook } from "./amplify/Webhook";
import { Account as APIGATEWAY_Account } from "./apigateway/Account";
import { ApiKey as APIGATEWAY_ApiKey } from "./apigateway/ApiKey";
import { Authorizer as APIGATEWAY_Authorizer } from "./apigateway/Authorizer";
import { BasePathMapping as APIGATEWAY_BasePathMapping } from "./apigateway/BasePathMapping";
import { ClientCertificate as APIGATEWAY_ClientCertificate } from "./apigateway/ClientCertificate";
import { Deployment as APIGATEWAY_Deployment } from "./apigateway/Deployment";
import { DocumentationPart as APIGATEWAY_DocumentationPart } from "./apigateway/DocumentationPart";
import { DocumentationVersion as APIGATEWAY_DocumentationVersion } from "./apigateway/DocumentationVersion";
import { DomainName as APIGATEWAY_DomainName } from "./apigateway/DomainName";
import { Integration as APIGATEWAY_Integration } from "./apigateway/Integration";
import { IntegrationResponse as APIGATEWAY_IntegrationResponse } from "./apigateway/IntegrationResponse";
import { Method as APIGATEWAY_Method } from "./apigateway/Method";
import { MethodResponse as APIGATEWAY_MethodResponse } from "./apigateway/MethodResponse";
import { MethodSettings as APIGATEWAY_MethodSettings } from "./apigateway/MethodSettings";
import { Model as APIGATEWAY_Model } from "./apigateway/Model";
import { RequestValidator as APIGATEWAY_RequestValidator } from "./apigateway/RequestValidator";
import { Resource as APIGATEWAY_Resource } from "./apigateway/Resource";
import { Response as APIGATEWAY_Response } from "./apigateway/Response";
import { RestApi as APIGATEWAY_RestApi } from "./apigateway/RestApi";
import { RestApiPolicy as APIGATEWAY_RestApiPolicy } from "./apigateway/RestApiPolicy";
import { Stage as APIGATEWAY_Stage } from "./apigateway/Stage";
import { UsagePlan as APIGATEWAY_UsagePlan } from "./apigateway/UsagePlan";
import { UsagePlanKey as APIGATEWAY_UsagePlanKey } from "./apigateway/UsagePlanKey";
import { VpcLink as APIGATEWAY_VpcLink } from "./apigateway/VpcLink";
import { Api as APIGATEWAYV2_Api } from "./apigatewayv2/Api";
import { ApiMapping as APIGATEWAYV2_ApiMapping } from "./apigatewayv2/ApiMapping";
import { Authorizer as APIGATEWAYV2_Authorizer } from "./apigatewayv2/Authorizer";
import { Deployment as APIGATEWAYV2_Deployment } from "./apigatewayv2/Deployment";
import { DomainName as APIGATEWAYV2_DomainName } from "./apigatewayv2/DomainName";
import { Integration as APIGATEWAYV2_Integration } from "./apigatewayv2/Integration";
import { IntegrationResponse as APIGATEWAYV2_IntegrationResponse } from "./apigatewayv2/IntegrationResponse";
import { Model as APIGATEWAYV2_Model } from "./apigatewayv2/Model";
import { Route as APIGATEWAYV2_Route } from "./apigatewayv2/Route";
import { RouteResponse as APIGATEWAYV2_RouteResponse } from "./apigatewayv2/RouteResponse";
import { Stage as APIGATEWAYV2_Stage } from "./apigatewayv2/Stage";
import { VpcLink as APIGATEWAYV2_VpcLink } from "./apigatewayv2/VpcLink";
import { Policy as APPAUTOSCALING_Policy } from "./appautoscaling/Policy";
import { ScheduledAction as APPAUTOSCALING_ScheduledAction } from "./appautoscaling/ScheduledAction";
import { Target as APPAUTOSCALING_Target } from "./appautoscaling/Target";
import { Application as APPCONFIG_Application } from "./appconfig/Application";
import { ConfigurationProfile as APPCONFIG_ConfigurationProfile } from "./appconfig/ConfigurationProfile";
import { Deployment as APPCONFIG_Deployment } from "./appconfig/Deployment";
import { DeploymentStrategy as APPCONFIG_DeploymentStrategy } from "./appconfig/DeploymentStrategy";
import { Environment as APPCONFIG_Environment } from "./appconfig/Environment";
import { EventIntegration as APPCONFIG_EventIntegration } from "./appconfig/EventIntegration";
import { Extension as APPCONFIG_Extension } from "./appconfig/Extension";
import { ExtensionAssociation as APPCONFIG_ExtensionAssociation } from "./appconfig/ExtensionAssociation";
import { HostedConfigurationVersion as APPCONFIG_HostedConfigurationVersion } from "./appconfig/HostedConfigurationVersion";
import { AppAuthorization as APPFABRIC_AppAuthorization } from "./appfabric/AppAuthorization";
import { AppAuthorizationConnection as APPFABRIC_AppAuthorizationConnection } from "./appfabric/AppAuthorizationConnection";
import { AppBundle as APPFABRIC_AppBundle } from "./appfabric/AppBundle";
import { Ingestion as APPFABRIC_Ingestion } from "./appfabric/Ingestion";
import { IngestionDestination as APPFABRIC_IngestionDestination } from "./appfabric/IngestionDestination";
import { ConnectorProfile as APPFLOW_ConnectorProfile } from "./appflow/ConnectorProfile";
import { Flow as APPFLOW_Flow } from "./appflow/Flow";
import { DataIntegration as APPINTEGRATIONS_DataIntegration } from "./appintegrations/DataIntegration";
import { Application as APPLICATIONINSIGHTS_Application } from "./applicationinsights/Application";
import { GatewayRoute as APPMESH_GatewayRoute } from "./appmesh/GatewayRoute";
import { Mesh as APPMESH_Mesh } from "./appmesh/Mesh";
import { Route as APPMESH_Route } from "./appmesh/Route";
import { VirtualGateway as APPMESH_VirtualGateway } from "./appmesh/VirtualGateway";
import { VirtualNode as APPMESH_VirtualNode } from "./appmesh/VirtualNode";
import { VirtualRouter as APPMESH_VirtualRouter } from "./appmesh/VirtualRouter";
import { VirtualService as APPMESH_VirtualService } from "./appmesh/VirtualService";
import { AutoScalingConfigurationVersion as APPRUNNER_AutoScalingConfigurationVersion } from "./apprunner/AutoScalingConfigurationVersion";
import { Connection as APPRUNNER_Connection } from "./apprunner/Connection";
import { CustomDomainAssociation as APPRUNNER_CustomDomainAssociation } from "./apprunner/CustomDomainAssociation";
import { DefaultAutoScalingConfigurationVersion as APPRUNNER_DefaultAutoScalingConfigurationVersion } from "./apprunner/DefaultAutoScalingConfigurationVersion";
import { Deployment as APPRUNNER_Deployment } from "./apprunner/Deployment";
import { ObservabilityConfiguration as APPRUNNER_ObservabilityConfiguration } from "./apprunner/ObservabilityConfiguration";
import { Service as APPRUNNER_Service } from "./apprunner/Service";
import { VpcConnector as APPRUNNER_VpcConnector } from "./apprunner/VpcConnector";
import { VpcIngressConnection as APPRUNNER_VpcIngressConnection } from "./apprunner/VpcIngressConnection";
import { DirectoryConfig as APPSTREAM_DirectoryConfig } from "./appstream/DirectoryConfig";
import { Fleet as APPSTREAM_Fleet } from "./appstream/Fleet";
import { FleetStackAssociation as APPSTREAM_FleetStackAssociation } from "./appstream/FleetStackAssociation";
import { ImageBuilder as APPSTREAM_ImageBuilder } from "./appstream/ImageBuilder";
import { Stack as APPSTREAM_Stack } from "./appstream/Stack";
import { User as APPSTREAM_User } from "./appstream/User";
import { UserStackAssociation as APPSTREAM_UserStackAssociation } from "./appstream/UserStackAssociation";
import { ApiCache as APPSYNC_ApiCache } from "./appsync/ApiCache";
import { ApiKey as APPSYNC_ApiKey } from "./appsync/ApiKey";
import { DataSource as APPSYNC_DataSource } from "./appsync/DataSource";
import { DomainName as APPSYNC_DomainName } from "./appsync/DomainName";
import { DomainNameApiAssociation as APPSYNC_DomainNameApiAssociation } from "./appsync/DomainNameApiAssociation";
import { Function as APPSYNC_Function } from "./appsync/Function";
import { GraphQLApi as APPSYNC_GraphQLApi } from "./appsync/GraphQLApi";
import { Resolver as APPSYNC_Resolver } from "./appsync/Resolver";
import { Type as APPSYNC_Type } from "./appsync/Type";
import { Database as ATHENA_Database } from "./athena/Database";
import { DataCatalog as ATHENA_DataCatalog } from "./athena/DataCatalog";
import { NamedQuery as ATHENA_NamedQuery } from "./athena/NamedQuery";
import { PreparedStatement as ATHENA_PreparedStatement } from "./athena/PreparedStatement";
import { Workgroup as ATHENA_Workgroup } from "./athena/Workgroup";
import { AccountRegistration as AUDITMANAGER_AccountRegistration } from "./auditmanager/AccountRegistration";
import { Assessment as AUDITMANAGER_Assessment } from "./auditmanager/Assessment";
import { AssessmentDelegation as AUDITMANAGER_AssessmentDelegation } from "./auditmanager/AssessmentDelegation";
import { AssessmentReport as AUDITMANAGER_AssessmentReport } from "./auditmanager/AssessmentReport";
import { Control as AUDITMANAGER_Control } from "./auditmanager/Control";
import { Framework as AUDITMANAGER_Framework } from "./auditmanager/Framework";
import { FrameworkShare as AUDITMANAGER_FrameworkShare } from "./auditmanager/FrameworkShare";
import { OrganizationAdminAccountRegistration as AUDITMANAGER_OrganizationAdminAccountRegistration } from "./auditmanager/OrganizationAdminAccountRegistration";
import { Attachment as AUTOSCALING_Attachment } from "./autoscaling/Attachment";
import { Group as AUTOSCALING_Group } from "./autoscaling/Group";
import { LifecycleHook as AUTOSCALING_LifecycleHook } from "./autoscaling/LifecycleHook";
import { Notification as AUTOSCALING_Notification } from "./autoscaling/Notification";
import { Policy as AUTOSCALING_Policy } from "./autoscaling/Policy";
import { Schedule as AUTOSCALING_Schedule } from "./autoscaling/Schedule";
import { Tag as AUTOSCALING_Tag } from "./autoscaling/Tag";
import { TrafficSourceAttachment as AUTOSCALING_TrafficSourceAttachment } from "./autoscaling/TrafficSourceAttachment";
import { ScalingPlan as AUTOSCALINGPLANS_ScalingPlan } from "./autoscalingplans/ScalingPlan";
import { Framework as BACKUP_Framework } from "./backup/Framework";
import { GlobalSettings as BACKUP_GlobalSettings } from "./backup/GlobalSettings";
import { Plan as BACKUP_Plan } from "./backup/Plan";
import { RegionSettings as BACKUP_RegionSettings } from "./backup/RegionSettings";
import { ReportPlan as BACKUP_ReportPlan } from "./backup/ReportPlan";
import { Selection as BACKUP_Selection } from "./backup/Selection";
import { Vault as BACKUP_Vault } from "./backup/Vault";
import { VaultLockConfiguration as BACKUP_VaultLockConfiguration } from "./backup/VaultLockConfiguration";
import { VaultNotifications as BACKUP_VaultNotifications } from "./backup/VaultNotifications";
import { VaultPolicy as BACKUP_VaultPolicy } from "./backup/VaultPolicy";
import { ComputeEnvironment as BATCH_ComputeEnvironment } from "./batch/ComputeEnvironment";
import { JobDefinition as BATCH_JobDefinition } from "./batch/JobDefinition";
import { JobQueue as BATCH_JobQueue } from "./batch/JobQueue";
import { SchedulingPolicy as BATCH_SchedulingPolicy } from "./batch/SchedulingPolicy";
import { Export as BCMDATA_Export } from "./bcmdata/Export";
import { AgentAgent as BEDROCK_AgentAgent } from "./bedrock/AgentAgent";
import { AgentAgentActionGroup as BEDROCK_AgentAgentActionGroup } from "./bedrock/AgentAgentActionGroup";
import { AgentAgentAlias as BEDROCK_AgentAgentAlias } from "./bedrock/AgentAgentAlias";
import { AgentAgentKnowledgeBaseAssociation as BEDROCK_AgentAgentKnowledgeBaseAssociation } from "./bedrock/AgentAgentKnowledgeBaseAssociation";
import { AgentDataSource as BEDROCK_AgentDataSource } from "./bedrock/AgentDataSource";
import { AgentKnowledgeBase as BEDROCK_AgentKnowledgeBase } from "./bedrock/AgentKnowledgeBase";
import { CustomModel as BEDROCK_CustomModel } from "./bedrock/CustomModel";
import { Guardrail as BEDROCK_Guardrail } from "./bedrock/Guardrail";
import { ProvisionedModelThroughput as BEDROCK_ProvisionedModelThroughput } from "./bedrock/ProvisionedModelThroughput";
import { InvocationLoggingConfiguration as BEDROCKMODEL_InvocationLoggingConfiguration } from "./bedrockmodel/InvocationLoggingConfiguration";
import { Budget as BUDGETS_Budget } from "./budgets/Budget";
import { BudgetAction as BUDGETS_BudgetAction } from "./budgets/BudgetAction";
import { AggregateAuthorization as CFG_AggregateAuthorization } from "./cfg/AggregateAuthorization";
import { ConfigurationAggregator as CFG_ConfigurationAggregator } from "./cfg/ConfigurationAggregator";
import { ConformancePack as CFG_ConformancePack } from "./cfg/ConformancePack";
import { DeliveryChannel as CFG_DeliveryChannel } from "./cfg/DeliveryChannel";
import { OrganizationConformancePack as CFG_OrganizationConformancePack } from "./cfg/OrganizationConformancePack";
import { OrganizationCustomPolicyRule as CFG_OrganizationCustomPolicyRule } from "./cfg/OrganizationCustomPolicyRule";
import { OrganizationCustomRule as CFG_OrganizationCustomRule } from "./cfg/OrganizationCustomRule";
import { OrganizationManagedRule as CFG_OrganizationManagedRule } from "./cfg/OrganizationManagedRule";
import { Recorder as CFG_Recorder } from "./cfg/Recorder";
import { RecorderStatus as CFG_RecorderStatus } from "./cfg/RecorderStatus";
import { RemediationConfiguration as CFG_RemediationConfiguration } from "./cfg/RemediationConfiguration";
import { RetentionConfiguration as CFG_RetentionConfiguration } from "./cfg/RetentionConfiguration";
import { Rule as CFG_Rule } from "./cfg/Rule";
import { SlackChannelConfiguration as CHATBOT_SlackChannelConfiguration } from "./chatbot/SlackChannelConfiguration";
import { TeamsChannelConfiguration as CHATBOT_TeamsChannelConfiguration } from "./chatbot/TeamsChannelConfiguration";
import { SdkvoiceGlobalSettings as CHIME_SdkvoiceGlobalSettings } from "./chime/SdkvoiceGlobalSettings";
import { SdkvoiceSipMediaApplication as CHIME_SdkvoiceSipMediaApplication } from "./chime/SdkvoiceSipMediaApplication";
import { SdkvoiceSipRule as CHIME_SdkvoiceSipRule } from "./chime/SdkvoiceSipRule";
import { SdkvoiceVoiceProfileDomain as CHIME_SdkvoiceVoiceProfileDomain } from "./chime/SdkvoiceVoiceProfileDomain";
import { VoiceConnector as CHIME_VoiceConnector } from "./chime/VoiceConnector";
import { VoiceConnectorGroup as CHIME_VoiceConnectorGroup } from "./chime/VoiceConnectorGroup";
import { VoiceConnectorLogging as CHIME_VoiceConnectorLogging } from "./chime/VoiceConnectorLogging";
import { VoiceConnectorOrganization as CHIME_VoiceConnectorOrganization } from "./chime/VoiceConnectorOrganization";
import { VoiceConnectorStreaming as CHIME_VoiceConnectorStreaming } from "./chime/VoiceConnectorStreaming";
import { VoiceConnectorTermination as CHIME_VoiceConnectorTermination } from "./chime/VoiceConnectorTermination";
import { VoiceConnectorTerminationCredentials as CHIME_VoiceConnectorTerminationCredentials } from "./chime/VoiceConnectorTerminationCredentials";
import { MediaInsightsPipelineConfiguration as CHIMESDKMEDIAPIPELINES_MediaInsightsPipelineConfiguration } from "./chimesdkmediapipelines/MediaInsightsPipelineConfiguration";
import { Collaboration as CLEANROOMS_Collaboration } from "./cleanrooms/Collaboration";
import { ConfiguredTable as CLEANROOMS_ConfiguredTable } from "./cleanrooms/ConfiguredTable";
import { EnvironmentEC2 as CLOUD9_EnvironmentEC2 } from "./cloud9/EnvironmentEC2";
import { EnvironmentMembership as CLOUD9_EnvironmentMembership } from "./cloud9/EnvironmentMembership";
import { Resource as CLOUDCONTROL_Resource } from "./cloudcontrol/Resource";
import { CloudFormationType as CLOUDFORMATION_CloudFormationType } from "./cloudformation/CloudFormationType";
import { Stack as CLOUDFORMATION_Stack } from "./cloudformation/Stack";
import { StackSet as CLOUDFORMATION_StackSet } from "./cloudformation/StackSet";
import { StackSetInstance as CLOUDFORMATION_StackSetInstance } from "./cloudformation/StackSetInstance";
import { CachePolicy as CLOUDFRONT_CachePolicy } from "./cloudfront/CachePolicy";
import { ContinuousDeploymentPolicy as CLOUDFRONT_ContinuousDeploymentPolicy } from "./cloudfront/ContinuousDeploymentPolicy";
import { Distribution as CLOUDFRONT_Distribution } from "./cloudfront/Distribution";
import { FieldLevelEncryptionConfig as CLOUDFRONT_FieldLevelEncryptionConfig } from "./cloudfront/FieldLevelEncryptionConfig";
import { FieldLevelEncryptionProfile as CLOUDFRONT_FieldLevelEncryptionProfile } from "./cloudfront/FieldLevelEncryptionProfile";
import { Function as CLOUDFRONT_Function } from "./cloudfront/Function";
import { KeyGroup as CLOUDFRONT_KeyGroup } from "./cloudfront/KeyGroup";
import { KeyValueStore as CLOUDFRONT_KeyValueStore } from "./cloudfront/KeyValueStore";
import { KeyvaluestoreKey as CLOUDFRONT_KeyvaluestoreKey } from "./cloudfront/KeyvaluestoreKey";
import { MonitoringSubscription as CLOUDFRONT_MonitoringSubscription } from "./cloudfront/MonitoringSubscription";
import { OriginAccessControl as CLOUDFRONT_OriginAccessControl } from "./cloudfront/OriginAccessControl";
import { OriginAccessIdentity as CLOUDFRONT_OriginAccessIdentity } from "./cloudfront/OriginAccessIdentity";
import { OriginRequestPolicy as CLOUDFRONT_OriginRequestPolicy } from "./cloudfront/OriginRequestPolicy";
import { PublicKey as CLOUDFRONT_PublicKey } from "./cloudfront/PublicKey";
import { RealtimeLogConfig as CLOUDFRONT_RealtimeLogConfig } from "./cloudfront/RealtimeLogConfig";
import { ResponseHeadersPolicy as CLOUDFRONT_ResponseHeadersPolicy } from "./cloudfront/ResponseHeadersPolicy";
import { Cluster as CLOUDHSMV2_Cluster } from "./cloudhsmv2/Cluster";
import { Hsm as CLOUDHSMV2_Hsm } from "./cloudhsmv2/Hsm";
import { Domain as CLOUDSEARCH_Domain } from "./cloudsearch/Domain";
import { DomainServiceAccessPolicy as CLOUDSEARCH_DomainServiceAccessPolicy } from "./cloudsearch/DomainServiceAccessPolicy";
import { EventDataStore as CLOUDTRAIL_EventDataStore } from "./cloudtrail/EventDataStore";
import { OrganizationDelegatedAdminAccount as CLOUDTRAIL_OrganizationDelegatedAdminAccount } from "./cloudtrail/OrganizationDelegatedAdminAccount";
import { Trail as CLOUDTRAIL_Trail } from "./cloudtrail/Trail";
import { CompositeAlarm as CLOUDWATCH_CompositeAlarm } from "./cloudwatch/CompositeAlarm";
import { Dashboard as CLOUDWATCH_Dashboard } from "./cloudwatch/Dashboard";
import { EventApiDestination as CLOUDWATCH_EventApiDestination } from "./cloudwatch/EventApiDestination";
import { EventArchive as CLOUDWATCH_EventArchive } from "./cloudwatch/EventArchive";
import { EventBus as CLOUDWATCH_EventBus } from "./cloudwatch/EventBus";
import { EventBusPolicy as CLOUDWATCH_EventBusPolicy } from "./cloudwatch/EventBusPolicy";
import { EventConnection as CLOUDWATCH_EventConnection } from "./cloudwatch/EventConnection";
import { EventEndpoint as CLOUDWATCH_EventEndpoint } from "./cloudwatch/EventEndpoint";
import { EventPermission as CLOUDWATCH_EventPermission } from "./cloudwatch/EventPermission";
import { EventRule as CLOUDWATCH_EventRule } from "./cloudwatch/EventRule";
import { EventTarget as CLOUDWATCH_EventTarget } from "./cloudwatch/EventTarget";
import { InternetMonitor as CLOUDWATCH_InternetMonitor } from "./cloudwatch/InternetMonitor";
import { LogAccountPolicy as CLOUDWATCH_LogAccountPolicy } from "./cloudwatch/LogAccountPolicy";
import { LogDataProtectionPolicy as CLOUDWATCH_LogDataProtectionPolicy } from "./cloudwatch/LogDataProtectionPolicy";
import { LogDestination as CLOUDWATCH_LogDestination } from "./cloudwatch/LogDestination";
import { LogDestinationPolicy as CLOUDWATCH_LogDestinationPolicy } from "./cloudwatch/LogDestinationPolicy";
import { LogGroup as CLOUDWATCH_LogGroup } from "./cloudwatch/LogGroup";
import { LogMetricFilter as CLOUDWATCH_LogMetricFilter } from "./cloudwatch/LogMetricFilter";
import { LogResourcePolicy as CLOUDWATCH_LogResourcePolicy } from "./cloudwatch/LogResourcePolicy";
import { LogStream as CLOUDWATCH_LogStream } from "./cloudwatch/LogStream";
import { LogSubscriptionFilter as CLOUDWATCH_LogSubscriptionFilter } from "./cloudwatch/LogSubscriptionFilter";
import { MetricAlarm as CLOUDWATCH_MetricAlarm } from "./cloudwatch/MetricAlarm";
import { MetricStream as CLOUDWATCH_MetricStream } from "./cloudwatch/MetricStream";
import { QueryDefinition as CLOUDWATCH_QueryDefinition } from "./cloudwatch/QueryDefinition";
import { Domain as CODEARTIFACT_Domain } from "./codeartifact/Domain";
import { DomainPermissions as CODEARTIFACT_DomainPermissions } from "./codeartifact/DomainPermissions";
import { Repository as CODEARTIFACT_Repository } from "./codeartifact/Repository";
import { RepositoryPermissionsPolicy as CODEARTIFACT_RepositoryPermissionsPolicy } from "./codeartifact/RepositoryPermissionsPolicy";
import { Project as CODEBUILD_Project } from "./codebuild/Project";
import { ReportGroup as CODEBUILD_ReportGroup } from "./codebuild/ReportGroup";
import { ResourcePolicy as CODEBUILD_ResourcePolicy } from "./codebuild/ResourcePolicy";
import { SourceCredential as CODEBUILD_SourceCredential } from "./codebuild/SourceCredential";
import { Webhook as CODEBUILD_Webhook } from "./codebuild/Webhook";
import { DevEnvironment as CODECATALYST_DevEnvironment } from "./codecatalyst/DevEnvironment";
import { Project as CODECATALYST_Project } from "./codecatalyst/Project";
import { SourceRepository as CODECATALYST_SourceRepository } from "./codecatalyst/SourceRepository";
import { ApprovalRuleTemplate as CODECOMMIT_ApprovalRuleTemplate } from "./codecommit/ApprovalRuleTemplate";
import { ApprovalRuleTemplateAssociation as CODECOMMIT_ApprovalRuleTemplateAssociation } from "./codecommit/ApprovalRuleTemplateAssociation";
import { Repository as CODECOMMIT_Repository } from "./codecommit/Repository";
import { Trigger as CODECOMMIT_Trigger } from "./codecommit/Trigger";
import { Application as CODEDEPLOY_Application } from "./codedeploy/Application";
import { DeploymentConfig as CODEDEPLOY_DeploymentConfig } from "./codedeploy/DeploymentConfig";
import { DeploymentGroup as CODEDEPLOY_DeploymentGroup } from "./codedeploy/DeploymentGroup";
import { ProfilingGroup as CODEGURUPROFILER_ProfilingGroup } from "./codeguruprofiler/ProfilingGroup";
import { RepositoryAssociation as CODEGURUREVIEWER_RepositoryAssociation } from "./codegurureviewer/RepositoryAssociation";
import { CustomActionType as CODEPIPELINE_CustomActionType } from "./codepipeline/CustomActionType";
import { Pipeline as CODEPIPELINE_Pipeline } from "./codepipeline/Pipeline";
import { Webhook as CODEPIPELINE_Webhook } from "./codepipeline/Webhook";
import { Connection as CODESTARCONNECTIONS_Connection } from "./codestarconnections/Connection";
import { Host as CODESTARCONNECTIONS_Host } from "./codestarconnections/Host";
import { NotificationRule as CODESTARNOTIFICATIONS_NotificationRule } from "./codestarnotifications/NotificationRule";
import { IdentityPool as COGNITO_IdentityPool } from "./cognito/IdentityPool";
import { IdentityPoolProviderPrincipalTag as COGNITO_IdentityPoolProviderPrincipalTag } from "./cognito/IdentityPoolProviderPrincipalTag";
import { IdentityPoolRoleAttachment as COGNITO_IdentityPoolRoleAttachment } from "./cognito/IdentityPoolRoleAttachment";
import { IdentityProvider as COGNITO_IdentityProvider } from "./cognito/IdentityProvider";
import { ManagedUserPoolClient as COGNITO_ManagedUserPoolClient } from "./cognito/ManagedUserPoolClient";
import { ResourceServer as COGNITO_ResourceServer } from "./cognito/ResourceServer";
import { RiskConfiguration as COGNITO_RiskConfiguration } from "./cognito/RiskConfiguration";
import { User as COGNITO_User } from "./cognito/User";
import { UserGroup as COGNITO_UserGroup } from "./cognito/UserGroup";
import { UserInGroup as COGNITO_UserInGroup } from "./cognito/UserInGroup";
import { UserPool as COGNITO_UserPool } from "./cognito/UserPool";
import { UserPoolClient as COGNITO_UserPoolClient } from "./cognito/UserPoolClient";
import { UserPoolDomain as COGNITO_UserPoolDomain } from "./cognito/UserPoolDomain";
import { UserPoolUICustomization as COGNITO_UserPoolUICustomization } from "./cognito/UserPoolUICustomization";
import { DocumentClassifier as COMPREHEND_DocumentClassifier } from "./comprehend/DocumentClassifier";
import { EntityRecognizer as COMPREHEND_EntityRecognizer } from "./comprehend/EntityRecognizer";
import { BotAssociation as CONNECT_BotAssociation } from "./connect/BotAssociation";
import { ContactFlow as CONNECT_ContactFlow } from "./connect/ContactFlow";
import { ContactFlowModule as CONNECT_ContactFlowModule } from "./connect/ContactFlowModule";
import { HoursOfOperation as CONNECT_HoursOfOperation } from "./connect/HoursOfOperation";
import { Instance as CONNECT_Instance } from "./connect/Instance";
import { InstanceStorageConfig as CONNECT_InstanceStorageConfig } from "./connect/InstanceStorageConfig";
import { LambdaFunctionAssociation as CONNECT_LambdaFunctionAssociation } from "./connect/LambdaFunctionAssociation";
import { PhoneNumber as CONNECT_PhoneNumber } from "./connect/PhoneNumber";
import { Queue as CONNECT_Queue } from "./connect/Queue";
import { QuickConnect as CONNECT_QuickConnect } from "./connect/QuickConnect";
import { RoutingProfile as CONNECT_RoutingProfile } from "./connect/RoutingProfile";
import { SecurityProfile as CONNECT_SecurityProfile } from "./connect/SecurityProfile";
import { User as CONNECT_User } from "./connect/User";
import { UserHierarchyGroup as CONNECT_UserHierarchyGroup } from "./connect/UserHierarchyGroup";
import { UserHierarchyStructure as CONNECT_UserHierarchyStructure } from "./connect/UserHierarchyStructure";
import { Vocabulary as CONNECT_Vocabulary } from "./connect/Vocabulary";
import { ControlTowerControl as CONTROLTOWER_ControlTowerControl } from "./controltower/ControlTowerControl";
import { LandingZone as CONTROLTOWER_LandingZone } from "./controltower/LandingZone";
import { AnomalyMonitor as COSTEXPLORER_AnomalyMonitor } from "./costexplorer/AnomalyMonitor";
import { AnomalySubscription as COSTEXPLORER_AnomalySubscription } from "./costexplorer/AnomalySubscription";
import { CostAllocationTag as COSTEXPLORER_CostAllocationTag } from "./costexplorer/CostAllocationTag";
import { CostCategory as COSTEXPLORER_CostCategory } from "./costexplorer/CostCategory";
import { ReportDefinition as CUR_ReportDefinition } from "./cur/ReportDefinition";
import { Domain as CUSTOMERPROFILES_Domain } from "./customerprofiles/Domain";
import { Profile as CUSTOMERPROFILES_Profile } from "./customerprofiles/Profile";
import { DataSet as DATAEXCHANGE_DataSet } from "./dataexchange/DataSet";
import { Revision as DATAEXCHANGE_Revision } from "./dataexchange/Revision";
import { Pipeline as DATAPIPELINE_Pipeline } from "./datapipeline/Pipeline";
import { PipelineDefinition as DATAPIPELINE_PipelineDefinition } from "./datapipeline/PipelineDefinition";
import { Agent as DATASYNC_Agent } from "./datasync/Agent";
import { EfsLocation as DATASYNC_EfsLocation } from "./datasync/EfsLocation";
import { FsxOpenZfsFileSystem as DATASYNC_FsxOpenZfsFileSystem } from "./datasync/FsxOpenZfsFileSystem";
import { LocationAzureBlob as DATASYNC_LocationAzureBlob } from "./datasync/LocationAzureBlob";
import { LocationFsxLustre as DATASYNC_LocationFsxLustre } from "./datasync/LocationFsxLustre";
import { LocationFsxOntapFileSystem as DATASYNC_LocationFsxOntapFileSystem } from "./datasync/LocationFsxOntapFileSystem";
import { LocationFsxWindows as DATASYNC_LocationFsxWindows } from "./datasync/LocationFsxWindows";
import { LocationHdfs as DATASYNC_LocationHdfs } from "./datasync/LocationHdfs";
import { LocationObjectStorage as DATASYNC_LocationObjectStorage } from "./datasync/LocationObjectStorage";
import { LocationSmb as DATASYNC_LocationSmb } from "./datasync/LocationSmb";
import { NfsLocation as DATASYNC_NfsLocation } from "./datasync/NfsLocation";
import { S3Location as DATASYNC_S3Location } from "./datasync/S3Location";
import { Task as DATASYNC_Task } from "./datasync/Task";
import { Domain as DATAZONE_Domain } from "./datazone/Domain";
import { EnvironmentBlueprintConfiguration as DATAZONE_EnvironmentBlueprintConfiguration } from "./datazone/EnvironmentBlueprintConfiguration";
import { EnvironmentProfile as DATAZONE_EnvironmentProfile } from "./datazone/EnvironmentProfile";
import { FormType as DATAZONE_FormType } from "./datazone/FormType";
import { Glossary as DATAZONE_Glossary } from "./datazone/Glossary";
import { GlossaryTerm as DATAZONE_GlossaryTerm } from "./datazone/GlossaryTerm";
import { Project as DATAZONE_Project } from "./datazone/Project";
import { Cluster as DAX_Cluster } from "./dax/Cluster";
import { ParameterGroup as DAX_ParameterGroup } from "./dax/ParameterGroup";
import { SubnetGroup as DAX_SubnetGroup } from "./dax/SubnetGroup";
import { Graph as DETECTIVE_Graph } from "./detective/Graph";
import { InvitationAccepter as DETECTIVE_InvitationAccepter } from "./detective/InvitationAccepter";
import { Member as DETECTIVE_Member } from "./detective/Member";
import { OrganizationAdminAccount as DETECTIVE_OrganizationAdminAccount } from "./detective/OrganizationAdminAccount";
import { OrganizationConfiguration as DETECTIVE_OrganizationConfiguration } from "./detective/OrganizationConfiguration";
import { DevicePool as DEVICEFARM_DevicePool } from "./devicefarm/DevicePool";
import { InstanceProfile as DEVICEFARM_InstanceProfile } from "./devicefarm/InstanceProfile";
import { NetworkProfile as DEVICEFARM_NetworkProfile } from "./devicefarm/NetworkProfile";
import { Project as DEVICEFARM_Project } from "./devicefarm/Project";
import { TestGridProject as DEVICEFARM_TestGridProject } from "./devicefarm/TestGridProject";
import { Upload as DEVICEFARM_Upload } from "./devicefarm/Upload";
import { EventSourcesConfig as DEVOPSGURU_EventSourcesConfig } from "./devopsguru/EventSourcesConfig";
import { NotificationChannel as DEVOPSGURU_NotificationChannel } from "./devopsguru/NotificationChannel";
import { ResourceCollection as DEVOPSGURU_ResourceCollection } from "./devopsguru/ResourceCollection";
import { ServiceIntegration as DEVOPSGURU_ServiceIntegration } from "./devopsguru/ServiceIntegration";
import { BgpPeer as DIRECTCONNECT_BgpPeer } from "./directconnect/BgpPeer";
import { Connection as DIRECTCONNECT_Connection } from "./directconnect/Connection";
import { ConnectionAssociation as DIRECTCONNECT_ConnectionAssociation } from "./directconnect/ConnectionAssociation";
import { ConnectionConfirmation as DIRECTCONNECT_ConnectionConfirmation } from "./directconnect/ConnectionConfirmation";
import { Gateway as DIRECTCONNECT_Gateway } from "./directconnect/Gateway";
import { GatewayAssociation as DIRECTCONNECT_GatewayAssociation } from "./directconnect/GatewayAssociation";
import { GatewayAssociationProposal as DIRECTCONNECT_GatewayAssociationProposal } from "./directconnect/GatewayAssociationProposal";
import { HostedConnection as DIRECTCONNECT_HostedConnection } from "./directconnect/HostedConnection";
import { HostedPrivateVirtualInterface as DIRECTCONNECT_HostedPrivateVirtualInterface } from "./directconnect/HostedPrivateVirtualInterface";
import { HostedPrivateVirtualInterfaceAccepter as DIRECTCONNECT_HostedPrivateVirtualInterfaceAccepter } from "./directconnect/HostedPrivateVirtualInterfaceAccepter";
import { HostedPublicVirtualInterface as DIRECTCONNECT_HostedPublicVirtualInterface } from "./directconnect/HostedPublicVirtualInterface";
import { HostedPublicVirtualInterfaceAccepter as DIRECTCONNECT_HostedPublicVirtualInterfaceAccepter } from "./directconnect/HostedPublicVirtualInterfaceAccepter";
import { HostedTransitVirtualInterface as DIRECTCONNECT_HostedTransitVirtualInterface } from "./directconnect/HostedTransitVirtualInterface";
import { HostedTransitVirtualInterfaceAcceptor as DIRECTCONNECT_HostedTransitVirtualInterfaceAcceptor } from "./directconnect/HostedTransitVirtualInterfaceAcceptor";
import { LinkAggregationGroup as DIRECTCONNECT_LinkAggregationGroup } from "./directconnect/LinkAggregationGroup";
import { MacsecKeyAssociation as DIRECTCONNECT_MacsecKeyAssociation } from "./directconnect/MacsecKeyAssociation";
import { PrivateVirtualInterface as DIRECTCONNECT_PrivateVirtualInterface } from "./directconnect/PrivateVirtualInterface";
import { PublicVirtualInterface as DIRECTCONNECT_PublicVirtualInterface } from "./directconnect/PublicVirtualInterface";
import { TransitVirtualInterface as DIRECTCONNECT_TransitVirtualInterface } from "./directconnect/TransitVirtualInterface";
import { ConditionalForwader as DIRECTORYSERVICE_ConditionalForwader } from "./directoryservice/ConditionalForwader";
import { Directory as DIRECTORYSERVICE_Directory } from "./directoryservice/Directory";
import { LogService as DIRECTORYSERVICE_LogService } from "./directoryservice/LogService";
import { RadiusSettings as DIRECTORYSERVICE_RadiusSettings } from "./directoryservice/RadiusSettings";
import { ServiceRegion as DIRECTORYSERVICE_ServiceRegion } from "./directoryservice/ServiceRegion";
import { SharedDirectory as DIRECTORYSERVICE_SharedDirectory } from "./directoryservice/SharedDirectory";
import { SharedDirectoryAccepter as DIRECTORYSERVICE_SharedDirectoryAccepter } from "./directoryservice/SharedDirectoryAccepter";
import { Trust as DIRECTORYSERVICE_Trust } from "./directoryservice/Trust";
import { LifecyclePolicy as DLM_LifecyclePolicy } from "./dlm/LifecyclePolicy";
import { Certificate as DMS_Certificate } from "./dms/Certificate";
import { Endpoint as DMS_Endpoint } from "./dms/Endpoint";
import { EventSubscription as DMS_EventSubscription } from "./dms/EventSubscription";
import { ReplicationConfig as DMS_ReplicationConfig } from "./dms/ReplicationConfig";
import { ReplicationInstance as DMS_ReplicationInstance } from "./dms/ReplicationInstance";
import { ReplicationSubnetGroup as DMS_ReplicationSubnetGroup } from "./dms/ReplicationSubnetGroup";
import { ReplicationTask as DMS_ReplicationTask } from "./dms/ReplicationTask";
import { S3Endpoint as DMS_S3Endpoint } from "./dms/S3Endpoint";
import { Cluster as DOCDB_Cluster } from "./docdb/Cluster";
import { ClusterInstance as DOCDB_ClusterInstance } from "./docdb/ClusterInstance";
import { ClusterParameterGroup as DOCDB_ClusterParameterGroup } from "./docdb/ClusterParameterGroup";
import { ClusterSnapshot as DOCDB_ClusterSnapshot } from "./docdb/ClusterSnapshot";
import { ElasticCluster as DOCDB_ElasticCluster } from "./docdb/ElasticCluster";
import { EventSubscription as DOCDB_EventSubscription } from "./docdb/EventSubscription";
import { GlobalCluster as DOCDB_GlobalCluster } from "./docdb/GlobalCluster";
import { SubnetGroup as DOCDB_SubnetGroup } from "./docdb/SubnetGroup";
import { ReplicationConfigurationTemplate as DRS_ReplicationConfigurationTemplate } from "./drs/ReplicationConfigurationTemplate";
import { ContributorInsights as DYNAMODB_ContributorInsights } from "./dynamodb/ContributorInsights";
import { GlobalTable as DYNAMODB_GlobalTable } from "./dynamodb/GlobalTable";
import { KinesisStreamingDestination as DYNAMODB_KinesisStreamingDestination } from "./dynamodb/KinesisStreamingDestination";
import { ResourcePolicy as DYNAMODB_ResourcePolicy } from "./dynamodb/ResourcePolicy";
import { Table as DYNAMODB_Table } from "./dynamodb/Table";
import { TableExport as DYNAMODB_TableExport } from "./dynamodb/TableExport";
import { TableItem as DYNAMODB_TableItem } from "./dynamodb/TableItem";
import { TableReplica as DYNAMODB_TableReplica } from "./dynamodb/TableReplica";
import { Tag as DYNAMODB_Tag } from "./dynamodb/Tag";
import { DefaultKmsKey as EBS_DefaultKmsKey } from "./ebs/DefaultKmsKey";
import { EncryptionByDefault as EBS_EncryptionByDefault } from "./ebs/EncryptionByDefault";
import { FastSnapshotRestore as EBS_FastSnapshotRestore } from "./ebs/FastSnapshotRestore";
import { Snapshot as EBS_Snapshot } from "./ebs/Snapshot";
import { SnapshotBlockPublicAccess as EBS_SnapshotBlockPublicAccess } from "./ebs/SnapshotBlockPublicAccess";
import { SnapshotCopy as EBS_SnapshotCopy } from "./ebs/SnapshotCopy";
import { SnapshotImport as EBS_SnapshotImport } from "./ebs/SnapshotImport";
import { Volume as EBS_Volume } from "./ebs/Volume";
import { Ami as EC2_Ami } from "./ec2/Ami";
import { AmiCopy as EC2_AmiCopy } from "./ec2/AmiCopy";
import { AmiFromInstance as EC2_AmiFromInstance } from "./ec2/AmiFromInstance";
import { AmiLaunchPermission as EC2_AmiLaunchPermission } from "./ec2/AmiLaunchPermission";
import { AvailabilityZoneGroup as EC2_AvailabilityZoneGroup } from "./ec2/AvailabilityZoneGroup";
import { CapacityBlockReservation as EC2_CapacityBlockReservation } from "./ec2/CapacityBlockReservation";
import { CapacityReservation as EC2_CapacityReservation } from "./ec2/CapacityReservation";
import { CarrierGateway as EC2_CarrierGateway } from "./ec2/CarrierGateway";
import { CustomerGateway as EC2_CustomerGateway } from "./ec2/CustomerGateway";
import { DedicatedHost as EC2_DedicatedHost } from "./ec2/DedicatedHost";
import { DefaultNetworkAcl as EC2_DefaultNetworkAcl } from "./ec2/DefaultNetworkAcl";
import { DefaultRouteTable as EC2_DefaultRouteTable } from "./ec2/DefaultRouteTable";
import { DefaultSecurityGroup as EC2_DefaultSecurityGroup } from "./ec2/DefaultSecurityGroup";
import { DefaultSubnet as EC2_DefaultSubnet } from "./ec2/DefaultSubnet";
import { DefaultVpc as EC2_DefaultVpc } from "./ec2/DefaultVpc";
import { DefaultVpcDhcpOptions as EC2_DefaultVpcDhcpOptions } from "./ec2/DefaultVpcDhcpOptions";
import { EgressOnlyInternetGateway as EC2_EgressOnlyInternetGateway } from "./ec2/EgressOnlyInternetGateway";
import { Eip as EC2_Eip } from "./ec2/Eip";
import { EipAssociation as EC2_EipAssociation } from "./ec2/EipAssociation";
import { EipDomainName as EC2_EipDomainName } from "./ec2/EipDomainName";
import { Fleet as EC2_Fleet } from "./ec2/Fleet";
import { FlowLog as EC2_FlowLog } from "./ec2/FlowLog";
import { ImageBlockPublicAccess as EC2_ImageBlockPublicAccess } from "./ec2/ImageBlockPublicAccess";
import { Instance as EC2_Instance } from "./ec2/Instance";
import { InstanceMetadataDefaults as EC2_InstanceMetadataDefaults } from "./ec2/InstanceMetadataDefaults";
import { InternetGateway as EC2_InternetGateway } from "./ec2/InternetGateway";
import { InternetGatewayAttachment as EC2_InternetGatewayAttachment } from "./ec2/InternetGatewayAttachment";
import { KeyPair as EC2_KeyPair } from "./ec2/KeyPair";
import { LaunchConfiguration as EC2_LaunchConfiguration } from "./ec2/LaunchConfiguration";
import { LaunchTemplate as EC2_LaunchTemplate } from "./ec2/LaunchTemplate";
import { LocalGatewayRoute as EC2_LocalGatewayRoute } from "./ec2/LocalGatewayRoute";
import { LocalGatewayRouteTableVpcAssociation as EC2_LocalGatewayRouteTableVpcAssociation } from "./ec2/LocalGatewayRouteTableVpcAssociation";
import { MainRouteTableAssociation as EC2_MainRouteTableAssociation } from "./ec2/MainRouteTableAssociation";
import { ManagedPrefixList as EC2_ManagedPrefixList } from "./ec2/ManagedPrefixList";
import { ManagedPrefixListEntry as EC2_ManagedPrefixListEntry } from "./ec2/ManagedPrefixListEntry";
import { NatGateway as EC2_NatGateway } from "./ec2/NatGateway";
import { NetworkAcl as EC2_NetworkAcl } from "./ec2/NetworkAcl";
import { NetworkAclAssociation as EC2_NetworkAclAssociation } from "./ec2/NetworkAclAssociation";
import { NetworkAclRule as EC2_NetworkAclRule } from "./ec2/NetworkAclRule";
import { NetworkInsightsAnalysis as EC2_NetworkInsightsAnalysis } from "./ec2/NetworkInsightsAnalysis";
import { NetworkInsightsPath as EC2_NetworkInsightsPath } from "./ec2/NetworkInsightsPath";
import { NetworkInterface as EC2_NetworkInterface } from "./ec2/NetworkInterface";
import { NetworkInterfaceAttachment as EC2_NetworkInterfaceAttachment } from "./ec2/NetworkInterfaceAttachment";
import { NetworkInterfaceSecurityGroupAttachment as EC2_NetworkInterfaceSecurityGroupAttachment } from "./ec2/NetworkInterfaceSecurityGroupAttachment";
import { PeeringConnectionOptions as EC2_PeeringConnectionOptions } from "./ec2/PeeringConnectionOptions";
import { PlacementGroup as EC2_PlacementGroup } from "./ec2/PlacementGroup";
import { ProxyProtocolPolicy as EC2_ProxyProtocolPolicy } from "./ec2/ProxyProtocolPolicy";
import { Route as EC2_Route } from "./ec2/Route";
import { RouteTable as EC2_RouteTable } from "./ec2/RouteTable";
import { RouteTableAssociation as EC2_RouteTableAssociation } from "./ec2/RouteTableAssociation";
import { SecurityGroup as EC2_SecurityGroup } from "./ec2/SecurityGroup";
import { SecurityGroupAssociation as EC2_SecurityGroupAssociation } from "./ec2/SecurityGroupAssociation";
import { SecurityGroupRule as EC2_SecurityGroupRule } from "./ec2/SecurityGroupRule";
import { SerialConsoleAccess as EC2_SerialConsoleAccess } from "./ec2/SerialConsoleAccess";
import { SnapshotCreateVolumePermission as EC2_SnapshotCreateVolumePermission } from "./ec2/SnapshotCreateVolumePermission";
import { SpotDatafeedSubscription as EC2_SpotDatafeedSubscription } from "./ec2/SpotDatafeedSubscription";
import { SpotFleetRequest as EC2_SpotFleetRequest } from "./ec2/SpotFleetRequest";
import { SpotInstanceRequest as EC2_SpotInstanceRequest } from "./ec2/SpotInstanceRequest";
import { Subnet as EC2_Subnet } from "./ec2/Subnet";
import { SubnetCidrReservation as EC2_SubnetCidrReservation } from "./ec2/SubnetCidrReservation";
import { Tag as EC2_Tag } from "./ec2/Tag";
import { TrafficMirrorFilter as EC2_TrafficMirrorFilter } from "./ec2/TrafficMirrorFilter";
import { TrafficMirrorFilterRule as EC2_TrafficMirrorFilterRule } from "./ec2/TrafficMirrorFilterRule";
import { TrafficMirrorSession as EC2_TrafficMirrorSession } from "./ec2/TrafficMirrorSession";
import { TrafficMirrorTarget as EC2_TrafficMirrorTarget } from "./ec2/TrafficMirrorTarget";
import { VolumeAttachment as EC2_VolumeAttachment } from "./ec2/VolumeAttachment";
import { Vpc as EC2_Vpc } from "./ec2/Vpc";
import { VpcDhcpOptions as EC2_VpcDhcpOptions } from "./ec2/VpcDhcpOptions";
import { VpcDhcpOptionsAssociation as EC2_VpcDhcpOptionsAssociation } from "./ec2/VpcDhcpOptionsAssociation";
import { VpcEndpoint as EC2_VpcEndpoint } from "./ec2/VpcEndpoint";
import { VpcEndpointConnectionAccepter as EC2_VpcEndpointConnectionAccepter } from "./ec2/VpcEndpointConnectionAccepter";
import { VpcEndpointConnectionNotification as EC2_VpcEndpointConnectionNotification } from "./ec2/VpcEndpointConnectionNotification";
import { VpcEndpointPolicy as EC2_VpcEndpointPolicy } from "./ec2/VpcEndpointPolicy";
import { VpcEndpointRouteTableAssociation as EC2_VpcEndpointRouteTableAssociation } from "./ec2/VpcEndpointRouteTableAssociation";
import { VpcEndpointService as EC2_VpcEndpointService } from "./ec2/VpcEndpointService";
import { VpcEndpointServiceAllowedPrinciple as EC2_VpcEndpointServiceAllowedPrinciple } from "./ec2/VpcEndpointServiceAllowedPrinciple";
import { VpcEndpointSubnetAssociation as EC2_VpcEndpointSubnetAssociation } from "./ec2/VpcEndpointSubnetAssociation";
import { VpcIpam as EC2_VpcIpam } from "./ec2/VpcIpam";
import { VpcIpamOrganizationAdminAccount as EC2_VpcIpamOrganizationAdminAccount } from "./ec2/VpcIpamOrganizationAdminAccount";
import { VpcIpamPool as EC2_VpcIpamPool } from "./ec2/VpcIpamPool";
import { VpcIpamPoolCidr as EC2_VpcIpamPoolCidr } from "./ec2/VpcIpamPoolCidr";
import { VpcIpamPoolCidrAllocation as EC2_VpcIpamPoolCidrAllocation } from "./ec2/VpcIpamPoolCidrAllocation";
import { VpcIpamPreviewNextCidr as EC2_VpcIpamPreviewNextCidr } from "./ec2/VpcIpamPreviewNextCidr";
import { VpcIpamResourceDiscovery as EC2_VpcIpamResourceDiscovery } from "./ec2/VpcIpamResourceDiscovery";
import { VpcIpamResourceDiscoveryAssociation as EC2_VpcIpamResourceDiscoveryAssociation } from "./ec2/VpcIpamResourceDiscoveryAssociation";
import { VpcIpamScope as EC2_VpcIpamScope } from "./ec2/VpcIpamScope";
import { VpcIpv4CidrBlockAssociation as EC2_VpcIpv4CidrBlockAssociation } from "./ec2/VpcIpv4CidrBlockAssociation";
import { VpcIpv6CidrBlockAssociation as EC2_VpcIpv6CidrBlockAssociation } from "./ec2/VpcIpv6CidrBlockAssociation";
import { VpcNetworkPerformanceMetricSubscription as EC2_VpcNetworkPerformanceMetricSubscription } from "./ec2/VpcNetworkPerformanceMetricSubscription";
import { VpcPeeringConnection as EC2_VpcPeeringConnection } from "./ec2/VpcPeeringConnection";
import { VpcPeeringConnectionAccepter as EC2_VpcPeeringConnectionAccepter } from "./ec2/VpcPeeringConnectionAccepter";
import { VpnConnection as EC2_VpnConnection } from "./ec2/VpnConnection";
import { VpnConnectionRoute as EC2_VpnConnectionRoute } from "./ec2/VpnConnectionRoute";
import { VpnGateway as EC2_VpnGateway } from "./ec2/VpnGateway";
import { VpnGatewayAttachment as EC2_VpnGatewayAttachment } from "./ec2/VpnGatewayAttachment";
import { VpnGatewayRoutePropagation as EC2_VpnGatewayRoutePropagation } from "./ec2/VpnGatewayRoutePropagation";
import { AuthorizationRule as EC2CLIENTVPN_AuthorizationRule } from "./ec2clientvpn/AuthorizationRule";
import { Endpoint as EC2CLIENTVPN_Endpoint } from "./ec2clientvpn/Endpoint";
import { NetworkAssociation as EC2CLIENTVPN_NetworkAssociation } from "./ec2clientvpn/NetworkAssociation";
import { Route as EC2CLIENTVPN_Route } from "./ec2clientvpn/Route";
import { Connect as EC2TRANSITGATEWAY_Connect } from "./ec2transitgateway/Connect";
import { ConnectPeer as EC2TRANSITGATEWAY_ConnectPeer } from "./ec2transitgateway/ConnectPeer";
import { InstanceConnectEndpoint as EC2TRANSITGATEWAY_InstanceConnectEndpoint } from "./ec2transitgateway/InstanceConnectEndpoint";
import { InstanceState as EC2TRANSITGATEWAY_InstanceState } from "./ec2transitgateway/InstanceState";
import { MulticastDomain as EC2TRANSITGATEWAY_MulticastDomain } from "./ec2transitgateway/MulticastDomain";
import { MulticastDomainAssociation as EC2TRANSITGATEWAY_MulticastDomainAssociation } from "./ec2transitgateway/MulticastDomainAssociation";
import { MulticastGroupMember as EC2TRANSITGATEWAY_MulticastGroupMember } from "./ec2transitgateway/MulticastGroupMember";
import { MulticastGroupSource as EC2TRANSITGATEWAY_MulticastGroupSource } from "./ec2transitgateway/MulticastGroupSource";
import { PeeringAttachment as EC2TRANSITGATEWAY_PeeringAttachment } from "./ec2transitgateway/PeeringAttachment";
import { PeeringAttachmentAccepter as EC2TRANSITGATEWAY_PeeringAttachmentAccepter } from "./ec2transitgateway/PeeringAttachmentAccepter";
import { PolicyTable as EC2TRANSITGATEWAY_PolicyTable } from "./ec2transitgateway/PolicyTable";
import { PolicyTableAssociation as EC2TRANSITGATEWAY_PolicyTableAssociation } from "./ec2transitgateway/PolicyTableAssociation";
import { PrefixListReference as EC2TRANSITGATEWAY_PrefixListReference } from "./ec2transitgateway/PrefixListReference";
import { Route as EC2TRANSITGATEWAY_Route } from "./ec2transitgateway/Route";
import { RouteTable as EC2TRANSITGATEWAY_RouteTable } from "./ec2transitgateway/RouteTable";
import { RouteTableAssociation as EC2TRANSITGATEWAY_RouteTableAssociation } from "./ec2transitgateway/RouteTableAssociation";
import { RouteTablePropagation as EC2TRANSITGATEWAY_RouteTablePropagation } from "./ec2transitgateway/RouteTablePropagation";
import { TransitGateway as EC2TRANSITGATEWAY_TransitGateway } from "./ec2transitgateway/TransitGateway";
import { VpcAttachment as EC2TRANSITGATEWAY_VpcAttachment } from "./ec2transitgateway/VpcAttachment";
import { VpcAttachmentAccepter as EC2TRANSITGATEWAY_VpcAttachmentAccepter } from "./ec2transitgateway/VpcAttachmentAccepter";
import { LifecyclePolicy as ECR_LifecyclePolicy } from "./ecr/LifecyclePolicy";
import { PullThroughCacheRule as ECR_PullThroughCacheRule } from "./ecr/PullThroughCacheRule";
import { RegistryPolicy as ECR_RegistryPolicy } from "./ecr/RegistryPolicy";
import { RegistryScanningConfiguration as ECR_RegistryScanningConfiguration } from "./ecr/RegistryScanningConfiguration";
import { ReplicationConfiguration as ECR_ReplicationConfiguration } from "./ecr/ReplicationConfiguration";
import { Repository as ECR_Repository } from "./ecr/Repository";
import { RepositoryCreationTemplate as ECR_RepositoryCreationTemplate } from "./ecr/RepositoryCreationTemplate";
import { RepositoryPolicy as ECR_RepositoryPolicy } from "./ecr/RepositoryPolicy";
import { Repository as ECRPUBLIC_Repository } from "./ecrpublic/Repository";
import { RepositoryPolicy as ECRPUBLIC_RepositoryPolicy } from "./ecrpublic/RepositoryPolicy";
import { AccountSettingDefault as ECS_AccountSettingDefault } from "./ecs/AccountSettingDefault";
import { CapacityProvider as ECS_CapacityProvider } from "./ecs/CapacityProvider";
import { Cluster as ECS_Cluster } from "./ecs/Cluster";
import { ClusterCapacityProviders as ECS_ClusterCapacityProviders } from "./ecs/ClusterCapacityProviders";
import { Service as ECS_Service } from "./ecs/Service";
import { Tag as ECS_Tag } from "./ecs/Tag";
import { TaskDefinition as ECS_TaskDefinition } from "./ecs/TaskDefinition";
import { TaskSet as ECS_TaskSet } from "./ecs/TaskSet";
import { AccessPoint as EFS_AccessPoint } from "./efs/AccessPoint";
import { BackupPolicy as EFS_BackupPolicy } from "./efs/BackupPolicy";
import { FileSystem as EFS_FileSystem } from "./efs/FileSystem";
import { FileSystemPolicy as EFS_FileSystemPolicy } from "./efs/FileSystemPolicy";
import { MountTarget as EFS_MountTarget } from "./efs/MountTarget";
import { ReplicationConfiguration as EFS_ReplicationConfiguration } from "./efs/ReplicationConfiguration";
import { AccessEntry as EKS_AccessEntry } from "./eks/AccessEntry";
import { AccessPolicyAssociation as EKS_AccessPolicyAssociation } from "./eks/AccessPolicyAssociation";
import { Addon as EKS_Addon } from "./eks/Addon";
import { Cluster as EKS_Cluster } from "./eks/Cluster";
import { FargateProfile as EKS_FargateProfile } from "./eks/FargateProfile";
import { IdentityProviderConfig as EKS_IdentityProviderConfig } from "./eks/IdentityProviderConfig";
import { NodeGroup as EKS_NodeGroup } from "./eks/NodeGroup";
import { PodIdentityAssociation as EKS_PodIdentityAssociation } from "./eks/PodIdentityAssociation";
import { Cluster as ELASTICACHE_Cluster } from "./elasticache/Cluster";
import { GlobalReplicationGroup as ELASTICACHE_GlobalReplicationGroup } from "./elasticache/GlobalReplicationGroup";
import { ParameterGroup as ELASTICACHE_ParameterGroup } from "./elasticache/ParameterGroup";
import { ReplicationGroup as ELASTICACHE_ReplicationGroup } from "./elasticache/ReplicationGroup";
import { ServerlessCache as ELASTICACHE_ServerlessCache } from "./elasticache/ServerlessCache";
import { SubnetGroup as ELASTICACHE_SubnetGroup } from "./elasticache/SubnetGroup";
import { User as ELASTICACHE_User } from "./elasticache/User";
import { UserGroup as ELASTICACHE_UserGroup } from "./elasticache/UserGroup";
import { UserGroupAssociation as ELASTICACHE_UserGroupAssociation } from "./elasticache/UserGroupAssociation";
import { Application as ELASTICBEANSTALK_Application } from "./elasticbeanstalk/Application";
import { ApplicationVersion as ELASTICBEANSTALK_ApplicationVersion } from "./elasticbeanstalk/ApplicationVersion";
import { ConfigurationTemplate as ELASTICBEANSTALK_ConfigurationTemplate } from "./elasticbeanstalk/ConfigurationTemplate";
import { Environment as ELASTICBEANSTALK_Environment } from "./elasticbeanstalk/Environment";
import { Domain as ELASTICSEARCH_Domain } from "./elasticsearch/Domain";
import { DomainPolicy as ELASTICSEARCH_DomainPolicy } from "./elasticsearch/DomainPolicy";
import { DomainSamlOptions as ELASTICSEARCH_DomainSamlOptions } from "./elasticsearch/DomainSamlOptions";
import { VpcEndpoint as ELASTICSEARCH_VpcEndpoint } from "./elasticsearch/VpcEndpoint";
import { Pipeline as ELASTICTRANSCODER_Pipeline } from "./elastictranscoder/Pipeline";
import { Preset as ELASTICTRANSCODER_Preset } from "./elastictranscoder/Preset";
import { AppCookieStickinessPolicy as ELB_AppCookieStickinessPolicy } from "./elb/AppCookieStickinessPolicy";
import { Attachment as ELB_Attachment } from "./elb/Attachment";
import { ListenerPolicy as ELB_ListenerPolicy } from "./elb/ListenerPolicy";
import { LoadBalancer as ELB_LoadBalancer } from "./elb/LoadBalancer";
import { LoadBalancerBackendServerPolicy as ELB_LoadBalancerBackendServerPolicy } from "./elb/LoadBalancerBackendServerPolicy";
import { LoadBalancerCookieStickinessPolicy as ELB_LoadBalancerCookieStickinessPolicy } from "./elb/LoadBalancerCookieStickinessPolicy";
import { LoadBalancerPolicy as ELB_LoadBalancerPolicy } from "./elb/LoadBalancerPolicy";
import { SslNegotiationPolicy as ELB_SslNegotiationPolicy } from "./elb/SslNegotiationPolicy";
import { BlockPublicAccessConfiguration as EMR_BlockPublicAccessConfiguration } from "./emr/BlockPublicAccessConfiguration";
import { Cluster as EMR_Cluster } from "./emr/Cluster";
import { InstanceFleet as EMR_InstanceFleet } from "./emr/InstanceFleet";
import { InstanceGroup as EMR_InstanceGroup } from "./emr/InstanceGroup";
import { ManagedScalingPolicy as EMR_ManagedScalingPolicy } from "./emr/ManagedScalingPolicy";
import { SecurityConfiguration as EMR_SecurityConfiguration } from "./emr/SecurityConfiguration";
import { Studio as EMR_Studio } from "./emr/Studio";
import { StudioSessionMapping as EMR_StudioSessionMapping } from "./emr/StudioSessionMapping";
import { JobTemplate as EMRCONTAINERS_JobTemplate } from "./emrcontainers/JobTemplate";
import { VirtualCluster as EMRCONTAINERS_VirtualCluster } from "./emrcontainers/VirtualCluster";
import { Application as EMRSERVERLESS_Application } from "./emrserverless/Application";
import { Feature as EVIDENTLY_Feature } from "./evidently/Feature";
import { Launch as EVIDENTLY_Launch } from "./evidently/Launch";
import { Project as EVIDENTLY_Project } from "./evidently/Project";
import { Segment as EVIDENTLY_Segment } from "./evidently/Segment";
import { KxCluster as FINSPACE_KxCluster } from "./finspace/KxCluster";
import { KxDatabase as FINSPACE_KxDatabase } from "./finspace/KxDatabase";
import { KxDataview as FINSPACE_KxDataview } from "./finspace/KxDataview";
import { KxEnvironment as FINSPACE_KxEnvironment } from "./finspace/KxEnvironment";
import { KxScalingGroup as FINSPACE_KxScalingGroup } from "./finspace/KxScalingGroup";
import { KxUser as FINSPACE_KxUser } from "./finspace/KxUser";
import { KxVolume as FINSPACE_KxVolume } from "./finspace/KxVolume";
import { ExperimentTemplate as FIS_ExperimentTemplate } from "./fis/ExperimentTemplate";
import { AdminAccount as FMS_AdminAccount } from "./fms/AdminAccount";
import { Policy as FMS_Policy } from "./fms/Policy";
import { ResourceSet as FMS_ResourceSet } from "./fms/ResourceSet";
import { Backup as FSX_Backup } from "./fsx/Backup";
import { DataRepositoryAssociation as FSX_DataRepositoryAssociation } from "./fsx/DataRepositoryAssociation";
import { FileCache as FSX_FileCache } from "./fsx/FileCache";
import { LustreFileSystem as FSX_LustreFileSystem } from "./fsx/LustreFileSystem";
import { OntapFileSystem as FSX_OntapFileSystem } from "./fsx/OntapFileSystem";
import { OntapStorageVirtualMachine as FSX_OntapStorageVirtualMachine } from "./fsx/OntapStorageVirtualMachine";
import { OntapVolume as FSX_OntapVolume } from "./fsx/OntapVolume";
import { OpenZfsFileSystem as FSX_OpenZfsFileSystem } from "./fsx/OpenZfsFileSystem";
import { OpenZfsSnapshot as FSX_OpenZfsSnapshot } from "./fsx/OpenZfsSnapshot";
import { OpenZfsVolume as FSX_OpenZfsVolume } from "./fsx/OpenZfsVolume";
import { WindowsFileSystem as FSX_WindowsFileSystem } from "./fsx/WindowsFileSystem";
import { Alias as GAMELIFT_Alias } from "./gamelift/Alias";
import { Build as GAMELIFT_Build } from "./gamelift/Build";
import { Fleet as GAMELIFT_Fleet } from "./gamelift/Fleet";
import { GameServerGroup as GAMELIFT_GameServerGroup } from "./gamelift/GameServerGroup";
import { GameSessionQueue as GAMELIFT_GameSessionQueue } from "./gamelift/GameSessionQueue";
import { MatchmakingConfiguration as GAMELIFT_MatchmakingConfiguration } from "./gamelift/MatchmakingConfiguration";
import { MatchmakingRuleSet as GAMELIFT_MatchmakingRuleSet } from "./gamelift/MatchmakingRuleSet";
import { Script as GAMELIFT_Script } from "./gamelift/Script";
import { Vault as GLACIER_Vault } from "./glacier/Vault";
import { VaultLock as GLACIER_VaultLock } from "./glacier/VaultLock";
import { Accelerator as GLOBALACCELERATOR_Accelerator } from "./globalaccelerator/Accelerator";
import { CrossAccountAttachment as GLOBALACCELERATOR_CrossAccountAttachment } from "./globalaccelerator/CrossAccountAttachment";
import { CustomRoutingAccelerator as GLOBALACCELERATOR_CustomRoutingAccelerator } from "./globalaccelerator/CustomRoutingAccelerator";
import { CustomRoutingEndpointGroup as GLOBALACCELERATOR_CustomRoutingEndpointGroup } from "./globalaccelerator/CustomRoutingEndpointGroup";
import { CustomRoutingListener as GLOBALACCELERATOR_CustomRoutingListener } from "./globalaccelerator/CustomRoutingListener";
import { EndpointGroup as GLOBALACCELERATOR_EndpointGroup } from "./globalaccelerator/EndpointGroup";
import { Listener as GLOBALACCELERATOR_Listener } from "./globalaccelerator/Listener";
import { CatalogDatabase as GLUE_CatalogDatabase } from "./glue/CatalogDatabase";
import { CatalogTable as GLUE_CatalogTable } from "./glue/CatalogTable";
import { CatalogTableOptimizer as GLUE_CatalogTableOptimizer } from "./glue/CatalogTableOptimizer";
import { Classifier as GLUE_Classifier } from "./glue/Classifier";
import { Connection as GLUE_Connection } from "./glue/Connection";
import { Crawler as GLUE_Crawler } from "./glue/Crawler";
import { DataCatalogEncryptionSettings as GLUE_DataCatalogEncryptionSettings } from "./glue/DataCatalogEncryptionSettings";
import { DataQualityRuleset as GLUE_DataQualityRuleset } from "./glue/DataQualityRuleset";
import { DevEndpoint as GLUE_DevEndpoint } from "./glue/DevEndpoint";
import { Job as GLUE_Job } from "./glue/Job";
import { MLTransform as GLUE_MLTransform } from "./glue/MLTransform";
import { Partition as GLUE_Partition } from "./glue/Partition";
import { PartitionIndex as GLUE_PartitionIndex } from "./glue/PartitionIndex";
import { Registry as GLUE_Registry } from "./glue/Registry";
import { ResourcePolicy as GLUE_ResourcePolicy } from "./glue/ResourcePolicy";
import { Schema as GLUE_Schema } from "./glue/Schema";
import { SecurityConfiguration as GLUE_SecurityConfiguration } from "./glue/SecurityConfiguration";
import { Trigger as GLUE_Trigger } from "./glue/Trigger";
import { UserDefinedFunction as GLUE_UserDefinedFunction } from "./glue/UserDefinedFunction";
import { Workflow as GLUE_Workflow } from "./glue/Workflow";
import { LicenseAssociation as GRAFANA_LicenseAssociation } from "./grafana/LicenseAssociation";
import { RoleAssociation as GRAFANA_RoleAssociation } from "./grafana/RoleAssociation";
import { Workspace as GRAFANA_Workspace } from "./grafana/Workspace";
import { WorkspaceApiKey as GRAFANA_WorkspaceApiKey } from "./grafana/WorkspaceApiKey";
import { WorkspaceSamlConfiguration as GRAFANA_WorkspaceSamlConfiguration } from "./grafana/WorkspaceSamlConfiguration";
import { WorkspaceServiceAccount as GRAFANA_WorkspaceServiceAccount } from "./grafana/WorkspaceServiceAccount";
import { WorkspaceServiceAccountToken as GRAFANA_WorkspaceServiceAccountToken } from "./grafana/WorkspaceServiceAccountToken";
import { Detector as GUARDDUTY_Detector } from "./guardduty/Detector";
import { DetectorFeature as GUARDDUTY_DetectorFeature } from "./guardduty/DetectorFeature";
import { Filter as GUARDDUTY_Filter } from "./guardduty/Filter";
import { InviteAccepter as GUARDDUTY_InviteAccepter } from "./guardduty/InviteAccepter";
import { IPSet as GUARDDUTY_IPSet } from "./guardduty/IPSet";
import { MalwareProtectionPlan as GUARDDUTY_MalwareProtectionPlan } from "./guardduty/MalwareProtectionPlan";
import { Member as GUARDDUTY_Member } from "./guardduty/Member";
import { OrganizationAdminAccount as GUARDDUTY_OrganizationAdminAccount } from "./guardduty/OrganizationAdminAccount";
import { OrganizationConfiguration as GUARDDUTY_OrganizationConfiguration } from "./guardduty/OrganizationConfiguration";
import { OrganizationConfigurationFeature as GUARDDUTY_OrganizationConfigurationFeature } from "./guardduty/OrganizationConfigurationFeature";
import { PublishingDestination as GUARDDUTY_PublishingDestination } from "./guardduty/PublishingDestination";
import { ThreatIntelSet as GUARDDUTY_ThreatIntelSet } from "./guardduty/ThreatIntelSet";
import { AccessKey as IAM_AccessKey } from "./iam/AccessKey";
import { AccountAlias as IAM_AccountAlias } from "./iam/AccountAlias";
import { AccountPasswordPolicy as IAM_AccountPasswordPolicy } from "./iam/AccountPasswordPolicy";
import { Group as IAM_Group } from "./iam/Group";
import { GroupMembership as IAM_GroupMembership } from "./iam/GroupMembership";
import { GroupPolicy as IAM_GroupPolicy } from "./iam/GroupPolicy";
import { GroupPolicyAttachment as IAM_GroupPolicyAttachment } from "./iam/GroupPolicyAttachment";
import { InstanceProfile as IAM_InstanceProfile } from "./iam/InstanceProfile";
import { OpenIdConnectProvider as IAM_OpenIdConnectProvider } from "./iam/OpenIdConnectProvider";
import { Policy as IAM_Policy } from "./iam/Policy";
import { PolicyAttachment as IAM_PolicyAttachment } from "./iam/PolicyAttachment";
import { Role as IAM_Role } from "./iam/Role";
import { RolePolicy as IAM_RolePolicy } from "./iam/RolePolicy";
import { RolePolicyAttachment as IAM_RolePolicyAttachment } from "./iam/RolePolicyAttachment";
import { SamlProvider as IAM_SamlProvider } from "./iam/SamlProvider";
import { SecurityTokenServicePreferences as IAM_SecurityTokenServicePreferences } from "./iam/SecurityTokenServicePreferences";
import { ServerCertificate as IAM_ServerCertificate } from "./iam/ServerCertificate";
import { ServiceLinkedRole as IAM_ServiceLinkedRole } from "./iam/ServiceLinkedRole";
import { ServiceSpecificCredential as IAM_ServiceSpecificCredential } from "./iam/ServiceSpecificCredential";
import { SigningCertificate as IAM_SigningCertificate } from "./iam/SigningCertificate";
import { SshKey as IAM_SshKey } from "./iam/SshKey";
import { User as IAM_User } from "./iam/User";
import { UserGroupMembership as IAM_UserGroupMembership } from "./iam/UserGroupMembership";
import { UserLoginProfile as IAM_UserLoginProfile } from "./iam/UserLoginProfile";
import { UserPolicy as IAM_UserPolicy } from "./iam/UserPolicy";
import { UserPolicyAttachment as IAM_UserPolicyAttachment } from "./iam/UserPolicyAttachment";
import { VirtualMfaDevice as IAM_VirtualMfaDevice } from "./iam/VirtualMfaDevice";
import { Group as IDENTITYSTORE_Group } from "./identitystore/Group";
import { GroupMembership as IDENTITYSTORE_GroupMembership } from "./identitystore/GroupMembership";
import { User as IDENTITYSTORE_User } from "./identitystore/User";
import { Component as IMAGEBUILDER_Component } from "./imagebuilder/Component";
import { ContainerRecipe as IMAGEBUILDER_ContainerRecipe } from "./imagebuilder/ContainerRecipe";
import { DistributionConfiguration as IMAGEBUILDER_DistributionConfiguration } from "./imagebuilder/DistributionConfiguration";
import { Image as IMAGEBUILDER_Image } from "./imagebuilder/Image";
import { ImagePipeline as IMAGEBUILDER_ImagePipeline } from "./imagebuilder/ImagePipeline";
import { ImageRecipe as IMAGEBUILDER_ImageRecipe } from "./imagebuilder/ImageRecipe";
import { InfrastructureConfiguration as IMAGEBUILDER_InfrastructureConfiguration } from "./imagebuilder/InfrastructureConfiguration";
import { Workflow as IMAGEBUILDER_Workflow } from "./imagebuilder/Workflow";
import { AssessmentTarget as INSPECTOR_AssessmentTarget } from "./inspector/AssessmentTarget";
import { AssessmentTemplate as INSPECTOR_AssessmentTemplate } from "./inspector/AssessmentTemplate";
import { ResourceGroup as INSPECTOR_ResourceGroup } from "./inspector/ResourceGroup";
import { DelegatedAdminAccount as INSPECTOR2_DelegatedAdminAccount } from "./inspector2/DelegatedAdminAccount";
import { Enabler as INSPECTOR2_Enabler } from "./inspector2/Enabler";
import { MemberAssociation as INSPECTOR2_MemberAssociation } from "./inspector2/MemberAssociation";
import { OrganizationConfiguration as INSPECTOR2_OrganizationConfiguration } from "./inspector2/OrganizationConfiguration";
import { Authorizer as IOT_Authorizer } from "./iot/Authorizer";
import { BillingGroup as IOT_BillingGroup } from "./iot/BillingGroup";
import { CaCertificate as IOT_CaCertificate } from "./iot/CaCertificate";
import { Certificate as IOT_Certificate } from "./iot/Certificate";
import { DomainConfiguration as IOT_DomainConfiguration } from "./iot/DomainConfiguration";
import { EventConfigurations as IOT_EventConfigurations } from "./iot/EventConfigurations";
import { IndexingConfiguration as IOT_IndexingConfiguration } from "./iot/IndexingConfiguration";
import { LoggingOptions as IOT_LoggingOptions } from "./iot/LoggingOptions";
import { Policy as IOT_Policy } from "./iot/Policy";
import { PolicyAttachment as IOT_PolicyAttachment } from "./iot/PolicyAttachment";
import { ProvisioningTemplate as IOT_ProvisioningTemplate } from "./iot/ProvisioningTemplate";
import { RoleAlias as IOT_RoleAlias } from "./iot/RoleAlias";
import { Thing as IOT_Thing } from "./iot/Thing";
import { ThingGroup as IOT_ThingGroup } from "./iot/ThingGroup";
import { ThingGroupMembership as IOT_ThingGroupMembership } from "./iot/ThingGroupMembership";
import { ThingPrincipalAttachment as IOT_ThingPrincipalAttachment } from "./iot/ThingPrincipalAttachment";
import { ThingType as IOT_ThingType } from "./iot/ThingType";
import { TopicRule as IOT_TopicRule } from "./iot/TopicRule";
import { TopicRuleDestination as IOT_TopicRuleDestination } from "./iot/TopicRuleDestination";
import { Channel as IVS_Channel } from "./ivs/Channel";
import { PlaybackKeyPair as IVS_PlaybackKeyPair } from "./ivs/PlaybackKeyPair";
import { RecordingConfiguration as IVS_RecordingConfiguration } from "./ivs/RecordingConfiguration";
import { LoggingConfiguration as IVSCHAT_LoggingConfiguration } from "./ivschat/LoggingConfiguration";
import { Room as IVSCHAT_Room } from "./ivschat/Room";
import { DataSource as KENDRA_DataSource } from "./kendra/DataSource";
import { Experience as KENDRA_Experience } from "./kendra/Experience";
import { Faq as KENDRA_Faq } from "./kendra/Faq";
import { Index as KENDRA_Index } from "./kendra/Index";
import { QuerySuggestionsBlockList as KENDRA_QuerySuggestionsBlockList } from "./kendra/QuerySuggestionsBlockList";
import { Thesaurus as KENDRA_Thesaurus } from "./kendra/Thesaurus";
import { Keyspace as KEYSPACES_Keyspace } from "./keyspaces/Keyspace";
import { Table as KEYSPACES_Table } from "./keyspaces/Table";
import { AnalyticsApplication as KINESIS_AnalyticsApplication } from "./kinesis/AnalyticsApplication";
import { FirehoseDeliveryStream as KINESIS_FirehoseDeliveryStream } from "./kinesis/FirehoseDeliveryStream";
import { ResourcePolicy as KINESIS_ResourcePolicy } from "./kinesis/ResourcePolicy";
import { Stream as KINESIS_Stream } from "./kinesis/Stream";
import { StreamConsumer as KINESIS_StreamConsumer } from "./kinesis/StreamConsumer";
import { VideoStream as KINESIS_VideoStream } from "./kinesis/VideoStream";
import { Application as KINESISANALYTICSV2_Application } from "./kinesisanalyticsv2/Application";
import { ApplicationSnapshot as KINESISANALYTICSV2_ApplicationSnapshot } from "./kinesisanalyticsv2/ApplicationSnapshot";
import { Alias as KMS_Alias } from "./kms/Alias";
import { Ciphertext as KMS_Ciphertext } from "./kms/Ciphertext";
import { CustomKeyStore as KMS_CustomKeyStore } from "./kms/CustomKeyStore";
import { ExternalKey as KMS_ExternalKey } from "./kms/ExternalKey";
import { Grant as KMS_Grant } from "./kms/Grant";
import { Key as KMS_Key } from "./kms/Key";
import { KeyPolicy as KMS_KeyPolicy } from "./kms/KeyPolicy";
import { ReplicaExternalKey as KMS_ReplicaExternalKey } from "./kms/ReplicaExternalKey";
import { ReplicaKey as KMS_ReplicaKey } from "./kms/ReplicaKey";
import { DataCellsFilter as LAKEFORMATION_DataCellsFilter } from "./lakeformation/DataCellsFilter";
import { DataLakeSettings as LAKEFORMATION_DataLakeSettings } from "./lakeformation/DataLakeSettings";
import { LfTag as LAKEFORMATION_LfTag } from "./lakeformation/LfTag";
import { Permissions as LAKEFORMATION_Permissions } from "./lakeformation/Permissions";
import { Resource as LAKEFORMATION_Resource } from "./lakeformation/Resource";
import { ResourceLfTag as LAKEFORMATION_ResourceLfTag } from "./lakeformation/ResourceLfTag";
import { ResourceLfTags as LAKEFORMATION_ResourceLfTags } from "./lakeformation/ResourceLfTags";
import { Alias as LAMBDA_Alias } from "./lambda/Alias";
import { CallbackFunction as LAMBDA_CallbackFunction } from "./lambda/CallbackFunction";
import { CodeSigningConfig as LAMBDA_CodeSigningConfig } from "./lambda/CodeSigningConfig";
import { EventSourceMapping as LAMBDA_EventSourceMapping } from "./lambda/EventSourceMapping";
import { Function as LAMBDA_Function } from "./lambda/Function";
import { FunctionEventInvokeConfig as LAMBDA_FunctionEventInvokeConfig } from "./lambda/FunctionEventInvokeConfig";
import { FunctionUrl as LAMBDA_FunctionUrl } from "./lambda/FunctionUrl";
import { Invocation as LAMBDA_Invocation } from "./lambda/Invocation";
import { LayerVersion as LAMBDA_LayerVersion } from "./lambda/LayerVersion";
import { LayerVersionPermission as LAMBDA_LayerVersionPermission } from "./lambda/LayerVersionPermission";
import { Permission as LAMBDA_Permission } from "./lambda/Permission";
import { ProvisionedConcurrencyConfig as LAMBDA_ProvisionedConcurrencyConfig } from "./lambda/ProvisionedConcurrencyConfig";
import { RuntimeManagementConfig as LAMBDA_RuntimeManagementConfig } from "./lambda/RuntimeManagementConfig";
import { Listener as LB_Listener } from "./lb/Listener";
import { ListenerCertificate as LB_ListenerCertificate } from "./lb/ListenerCertificate";
import { ListenerRule as LB_ListenerRule } from "./lb/ListenerRule";
import { LoadBalancer as LB_LoadBalancer } from "./lb/LoadBalancer";
import { TargetGroup as LB_TargetGroup } from "./lb/TargetGroup";
import { TargetGroupAttachment as LB_TargetGroupAttachment } from "./lb/TargetGroupAttachment";
import { TrustStore as LB_TrustStore } from "./lb/TrustStore";
import { TrustStoreRevocation as LB_TrustStoreRevocation } from "./lb/TrustStoreRevocation";
import { Bot as LEX_Bot } from "./lex/Bot";
import { BotAlias as LEX_BotAlias } from "./lex/BotAlias";
import { Intent as LEX_Intent } from "./lex/Intent";
import { SlotType as LEX_SlotType } from "./lex/SlotType";
import { V2modelsBot as LEX_V2modelsBot } from "./lex/V2modelsBot";
import { V2modelsBotLocale as LEX_V2modelsBotLocale } from "./lex/V2modelsBotLocale";
import { V2modelsBotVersion as LEX_V2modelsBotVersion } from "./lex/V2modelsBotVersion";
import { V2modelsIntent as LEX_V2modelsIntent } from "./lex/V2modelsIntent";
import { V2modelsSlot as LEX_V2modelsSlot } from "./lex/V2modelsSlot";
import { V2modelsSlotType as LEX_V2modelsSlotType } from "./lex/V2modelsSlotType";
import { Association as LICENSEMANAGER_Association } from "./licensemanager/Association";
import { LicenseConfiguration as LICENSEMANAGER_LicenseConfiguration } from "./licensemanager/LicenseConfiguration";
import { LicenseGrant as LICENSEMANAGER_LicenseGrant } from "./licensemanager/LicenseGrant";
import { LicenseGrantAccepter as LICENSEMANAGER_LicenseGrantAccepter } from "./licensemanager/LicenseGrantAccepter";
import { Bucket as LIGHTSAIL_Bucket } from "./lightsail/Bucket";
import { BucketAccessKey as LIGHTSAIL_BucketAccessKey } from "./lightsail/BucketAccessKey";
import { BucketResourceAccess as LIGHTSAIL_BucketResourceAccess } from "./lightsail/BucketResourceAccess";
import { Certificate as LIGHTSAIL_Certificate } from "./lightsail/Certificate";
import { ContainerService as LIGHTSAIL_ContainerService } from "./lightsail/ContainerService";
import { ContainerServiceDeploymentVersion as LIGHTSAIL_ContainerServiceDeploymentVersion } from "./lightsail/ContainerServiceDeploymentVersion";
import { Database as LIGHTSAIL_Database } from "./lightsail/Database";
import { Disk as LIGHTSAIL_Disk } from "./lightsail/Disk";
import { Disk_attachment as LIGHTSAIL_Disk_attachment } from "./lightsail/Disk_attachment";
import { Distribution as LIGHTSAIL_Distribution } from "./lightsail/Distribution";
import { Domain as LIGHTSAIL_Domain } from "./lightsail/Domain";
import { DomainEntry as LIGHTSAIL_DomainEntry } from "./lightsail/DomainEntry";
import { Instance as LIGHTSAIL_Instance } from "./lightsail/Instance";
import { InstancePublicPorts as LIGHTSAIL_InstancePublicPorts } from "./lightsail/InstancePublicPorts";
import { KeyPair as LIGHTSAIL_KeyPair } from "./lightsail/KeyPair";
import { Lb as LIGHTSAIL_Lb } from "./lightsail/Lb";
import { LbAttachment as LIGHTSAIL_LbAttachment } from "./lightsail/LbAttachment";
import { LbCertificate as LIGHTSAIL_LbCertificate } from "./lightsail/LbCertificate";
import { LbCertificateAttachment as LIGHTSAIL_LbCertificateAttachment } from "./lightsail/LbCertificateAttachment";
import { LbHttpsRedirectionPolicy as LIGHTSAIL_LbHttpsRedirectionPolicy } from "./lightsail/LbHttpsRedirectionPolicy";
import { LbStickinessPolicy as LIGHTSAIL_LbStickinessPolicy } from "./lightsail/LbStickinessPolicy";
import { StaticIp as LIGHTSAIL_StaticIp } from "./lightsail/StaticIp";
import { StaticIpAttachment as LIGHTSAIL_StaticIpAttachment } from "./lightsail/StaticIpAttachment";
import { GeofenceCollection as LOCATION_GeofenceCollection } from "./location/GeofenceCollection";
import { MapResource as LOCATION_MapResource } from "./location/MapResource";
import { PlaceIndex as LOCATION_PlaceIndex } from "./location/PlaceIndex";
import { RouteCalculation as LOCATION_RouteCalculation } from "./location/RouteCalculation";
import { Tracker as LOCATION_Tracker } from "./location/Tracker";
import { TrackerAssociation as LOCATION_TrackerAssociation } from "./location/TrackerAssociation";
import { Application as M2_Application } from "./m2/Application";
import { Deployment as M2_Deployment } from "./m2/Deployment";
import { Environment as M2_Environment } from "./m2/Environment";
import { CustomDataIdentifier as MACIE_CustomDataIdentifier } from "./macie/CustomDataIdentifier";
import { FindingsFilter as MACIE_FindingsFilter } from "./macie/FindingsFilter";
import { Account as MACIE2_Account } from "./macie2/Account";
import { ClassificationExportConfiguration as MACIE2_ClassificationExportConfiguration } from "./macie2/ClassificationExportConfiguration";
import { ClassificationJob as MACIE2_ClassificationJob } from "./macie2/ClassificationJob";
import { InvitationAccepter as MACIE2_InvitationAccepter } from "./macie2/InvitationAccepter";
import { Member as MACIE2_Member } from "./macie2/Member";
import { OrganizationAdminAccount as MACIE2_OrganizationAdminAccount } from "./macie2/OrganizationAdminAccount";
import { Queue as MEDIACONVERT_Queue } from "./mediaconvert/Queue";
import { Channel as MEDIALIVE_Channel } from "./medialive/Channel";
import { Input as MEDIALIVE_Input } from "./medialive/Input";
import { InputSecurityGroup as MEDIALIVE_InputSecurityGroup } from "./medialive/InputSecurityGroup";
import { Multiplex as MEDIALIVE_Multiplex } from "./medialive/Multiplex";
import { MultiplexProgram as MEDIALIVE_MultiplexProgram } from "./medialive/MultiplexProgram";
import { Channel as MEDIAPACKAGE_Channel } from "./mediapackage/Channel";
import { Container as MEDIASTORE_Container } from "./mediastore/Container";
import { ContainerPolicy as MEDIASTORE_ContainerPolicy } from "./mediastore/ContainerPolicy";
import { Acl as MEMORYDB_Acl } from "./memorydb/Acl";
import { Cluster as MEMORYDB_Cluster } from "./memorydb/Cluster";
import { ParameterGroup as MEMORYDB_ParameterGroup } from "./memorydb/ParameterGroup";
import { Snapshot as MEMORYDB_Snapshot } from "./memorydb/Snapshot";
import { SubnetGroup as MEMORYDB_SubnetGroup } from "./memorydb/SubnetGroup";
import { User as MEMORYDB_User } from "./memorydb/User";
import { Broker as MQ_Broker } from "./mq/Broker";
import { Configuration as MQ_Configuration } from "./mq/Configuration";
import { Cluster as MSK_Cluster } from "./msk/Cluster";
import { ClusterPolicy as MSK_ClusterPolicy } from "./msk/ClusterPolicy";
import { Configuration as MSK_Configuration } from "./msk/Configuration";
import { Replicator as MSK_Replicator } from "./msk/Replicator";
import { ScramSecretAssociation as MSK_ScramSecretAssociation } from "./msk/ScramSecretAssociation";
import { ServerlessCluster as MSK_ServerlessCluster } from "./msk/ServerlessCluster";
import { VpcConnection as MSK_VpcConnection } from "./msk/VpcConnection";
import { Connector as MSKCONNECT_Connector } from "./mskconnect/Connector";
import { CustomPlugin as MSKCONNECT_CustomPlugin } from "./mskconnect/CustomPlugin";
import { WorkerConfiguration as MSKCONNECT_WorkerConfiguration } from "./mskconnect/WorkerConfiguration";
import { Environment as MWAA_Environment } from "./mwaa/Environment";
import { Cluster as NEPTUNE_Cluster } from "./neptune/Cluster";
import { ClusterEndpoint as NEPTUNE_ClusterEndpoint } from "./neptune/ClusterEndpoint";
import { ClusterInstance as NEPTUNE_ClusterInstance } from "./neptune/ClusterInstance";
import { ClusterParameterGroup as NEPTUNE_ClusterParameterGroup } from "./neptune/ClusterParameterGroup";
import { ClusterSnapshot as NEPTUNE_ClusterSnapshot } from "./neptune/ClusterSnapshot";
import { EventSubscription as NEPTUNE_EventSubscription } from "./neptune/EventSubscription";
import { GlobalCluster as NEPTUNE_GlobalCluster } from "./neptune/GlobalCluster";
import { ParameterGroup as NEPTUNE_ParameterGroup } from "./neptune/ParameterGroup";
import { SubnetGroup as NEPTUNE_SubnetGroup } from "./neptune/SubnetGroup";
import { Firewall as NETWORKFIREWALL_Firewall } from "./networkfirewall/Firewall";
import { FirewallPolicy as NETWORKFIREWALL_FirewallPolicy } from "./networkfirewall/FirewallPolicy";
import { LoggingConfiguration as NETWORKFIREWALL_LoggingConfiguration } from "./networkfirewall/LoggingConfiguration";
import { ResourcePolicy as NETWORKFIREWALL_ResourcePolicy } from "./networkfirewall/ResourcePolicy";
import { RuleGroup as NETWORKFIREWALL_RuleGroup } from "./networkfirewall/RuleGroup";
import { TlsInspectionConfiguration as NETWORKFIREWALL_TlsInspectionConfiguration } from "./networkfirewall/TlsInspectionConfiguration";
import { AttachmentAccepter as NETWORKMANAGER_AttachmentAccepter } from "./networkmanager/AttachmentAccepter";
import { ConnectAttachment as NETWORKMANAGER_ConnectAttachment } from "./networkmanager/ConnectAttachment";
import { Connection as NETWORKMANAGER_Connection } from "./networkmanager/Connection";
import { ConnectPeer as NETWORKMANAGER_ConnectPeer } from "./networkmanager/ConnectPeer";
import { CoreNetwork as NETWORKMANAGER_CoreNetwork } from "./networkmanager/CoreNetwork";
import { CoreNetworkPolicyAttachment as NETWORKMANAGER_CoreNetworkPolicyAttachment } from "./networkmanager/CoreNetworkPolicyAttachment";
import { CustomerGatewayAssociation as NETWORKMANAGER_CustomerGatewayAssociation } from "./networkmanager/CustomerGatewayAssociation";
import { Device as NETWORKMANAGER_Device } from "./networkmanager/Device";
import { GlobalNetwork as NETWORKMANAGER_GlobalNetwork } from "./networkmanager/GlobalNetwork";
import { Link as NETWORKMANAGER_Link } from "./networkmanager/Link";
import { LinkAssociation as NETWORKMANAGER_LinkAssociation } from "./networkmanager/LinkAssociation";
import { Site as NETWORKMANAGER_Site } from "./networkmanager/Site";
import { SiteToSiteVpnAttachment as NETWORKMANAGER_SiteToSiteVpnAttachment } from "./networkmanager/SiteToSiteVpnAttachment";
import { TransitGatewayConnectPeerAssociation as NETWORKMANAGER_TransitGatewayConnectPeerAssociation } from "./networkmanager/TransitGatewayConnectPeerAssociation";
import { TransitGatewayPeering as NETWORKMANAGER_TransitGatewayPeering } from "./networkmanager/TransitGatewayPeering";
import { TransitGatewayRegistration as NETWORKMANAGER_TransitGatewayRegistration } from "./networkmanager/TransitGatewayRegistration";
import { TransitGatewayRouteTableAttachment as NETWORKMANAGER_TransitGatewayRouteTableAttachment } from "./networkmanager/TransitGatewayRouteTableAttachment";
import { VpcAttachment as NETWORKMANAGER_VpcAttachment } from "./networkmanager/VpcAttachment";
import { Monitor as NETWORKMONITOR_Monitor } from "./networkmonitor/Monitor";
import { Probe as NETWORKMONITOR_Probe } from "./networkmonitor/Probe";
import { Link as OAM_Link } from "./oam/Link";
import { Sink as OAM_Sink } from "./oam/Sink";
import { SinkPolicy as OAM_SinkPolicy } from "./oam/SinkPolicy";
import { Domain as OPENSEARCH_Domain } from "./opensearch/Domain";
import { DomainPolicy as OPENSEARCH_DomainPolicy } from "./opensearch/DomainPolicy";
import { DomainSamlOptions as OPENSEARCH_DomainSamlOptions } from "./opensearch/DomainSamlOptions";
import { InboundConnectionAccepter as OPENSEARCH_InboundConnectionAccepter } from "./opensearch/InboundConnectionAccepter";
import { OutboundConnection as OPENSEARCH_OutboundConnection } from "./opensearch/OutboundConnection";
import { Package as OPENSEARCH_Package } from "./opensearch/Package";
import { PackageAssociation as OPENSEARCH_PackageAssociation } from "./opensearch/PackageAssociation";
import { ServerlessAccessPolicy as OPENSEARCH_ServerlessAccessPolicy } from "./opensearch/ServerlessAccessPolicy";
import { ServerlessCollection as OPENSEARCH_ServerlessCollection } from "./opensearch/ServerlessCollection";
import { ServerlessLifecyclePolicy as OPENSEARCH_ServerlessLifecyclePolicy } from "./opensearch/ServerlessLifecyclePolicy";
import { ServerlessSecurityConfig as OPENSEARCH_ServerlessSecurityConfig } from "./opensearch/ServerlessSecurityConfig";
import { ServerlessSecurityPolicy as OPENSEARCH_ServerlessSecurityPolicy } from "./opensearch/ServerlessSecurityPolicy";
import { ServerlessVpcEndpoint as OPENSEARCH_ServerlessVpcEndpoint } from "./opensearch/ServerlessVpcEndpoint";
import { VpcEndpoint as OPENSEARCH_VpcEndpoint } from "./opensearch/VpcEndpoint";
import { Pipeline as OPENSEARCHINGEST_Pipeline } from "./opensearchingest/Pipeline";
import { Application as OPSWORKS_Application } from "./opsworks/Application";
import { CustomLayer as OPSWORKS_CustomLayer } from "./opsworks/CustomLayer";
import { EcsClusterLayer as OPSWORKS_EcsClusterLayer } from "./opsworks/EcsClusterLayer";
import { GangliaLayer as OPSWORKS_GangliaLayer } from "./opsworks/GangliaLayer";
import { HaproxyLayer as OPSWORKS_HaproxyLayer } from "./opsworks/HaproxyLayer";
import { Instance as OPSWORKS_Instance } from "./opsworks/Instance";
import { JavaAppLayer as OPSWORKS_JavaAppLayer } from "./opsworks/JavaAppLayer";
import { MemcachedLayer as OPSWORKS_MemcachedLayer } from "./opsworks/MemcachedLayer";
import { MysqlLayer as OPSWORKS_MysqlLayer } from "./opsworks/MysqlLayer";
import { NodejsAppLayer as OPSWORKS_NodejsAppLayer } from "./opsworks/NodejsAppLayer";
import { Permission as OPSWORKS_Permission } from "./opsworks/Permission";
import { PhpAppLayer as OPSWORKS_PhpAppLayer } from "./opsworks/PhpAppLayer";
import { RailsAppLayer as OPSWORKS_RailsAppLayer } from "./opsworks/RailsAppLayer";
import { RdsDbInstance as OPSWORKS_RdsDbInstance } from "./opsworks/RdsDbInstance";
import { Stack as OPSWORKS_Stack } from "./opsworks/Stack";
import { StaticWebLayer as OPSWORKS_StaticWebLayer } from "./opsworks/StaticWebLayer";
import { UserProfile as OPSWORKS_UserProfile } from "./opsworks/UserProfile";
import { Account as ORGANIZATIONS_Account } from "./organizations/Account";
import { DelegatedAdministrator as ORGANIZATIONS_DelegatedAdministrator } from "./organizations/DelegatedAdministrator";
import { Organization as ORGANIZATIONS_Organization } from "./organizations/Organization";
import { OrganizationalUnit as ORGANIZATIONS_OrganizationalUnit } from "./organizations/OrganizationalUnit";
import { Policy as ORGANIZATIONS_Policy } from "./organizations/Policy";
import { PolicyAttachment as ORGANIZATIONS_PolicyAttachment } from "./organizations/PolicyAttachment";
import { ResourcePolicy as ORGANIZATIONS_ResourcePolicy } from "./organizations/ResourcePolicy";
import { Key as PAYMENTCRYPTOGRAPHY_Key } from "./paymentcryptography/Key";
import { KeyAlias as PAYMENTCRYPTOGRAPHY_KeyAlias } from "./paymentcryptography/KeyAlias";
import { AdmChannel as PINPOINT_AdmChannel } from "./pinpoint/AdmChannel";
import { ApnsChannel as PINPOINT_ApnsChannel } from "./pinpoint/ApnsChannel";
import { ApnsSandboxChannel as PINPOINT_ApnsSandboxChannel } from "./pinpoint/ApnsSandboxChannel";
import { ApnsVoipChannel as PINPOINT_ApnsVoipChannel } from "./pinpoint/ApnsVoipChannel";
import { ApnsVoipSandboxChannel as PINPOINT_ApnsVoipSandboxChannel } from "./pinpoint/ApnsVoipSandboxChannel";
import { App as PINPOINT_App } from "./pinpoint/App";
import { BaiduChannel as PINPOINT_BaiduChannel } from "./pinpoint/BaiduChannel";
import { EmailChannel as PINPOINT_EmailChannel } from "./pinpoint/EmailChannel";
import { EmailTemplate as PINPOINT_EmailTemplate } from "./pinpoint/EmailTemplate";
import { EventStream as PINPOINT_EventStream } from "./pinpoint/EventStream";
import { GcmChannel as PINPOINT_GcmChannel } from "./pinpoint/GcmChannel";
import { SmsChannel as PINPOINT_SmsChannel } from "./pinpoint/SmsChannel";
import { Pipe as PIPES_Pipe } from "./pipes/Pipe";
import { Ledger as QLDB_Ledger } from "./qldb/Ledger";
import { Stream as QLDB_Stream } from "./qldb/Stream";
import { AccountSubscription as QUICKSIGHT_AccountSubscription } from "./quicksight/AccountSubscription";
import { Analysis as QUICKSIGHT_Analysis } from "./quicksight/Analysis";
import { Dashboard as QUICKSIGHT_Dashboard } from "./quicksight/Dashboard";
import { DataSet as QUICKSIGHT_DataSet } from "./quicksight/DataSet";
import { DataSource as QUICKSIGHT_DataSource } from "./quicksight/DataSource";
import { Folder as QUICKSIGHT_Folder } from "./quicksight/Folder";
import { FolderMembership as QUICKSIGHT_FolderMembership } from "./quicksight/FolderMembership";
import { Group as QUICKSIGHT_Group } from "./quicksight/Group";
import { GroupMembership as QUICKSIGHT_GroupMembership } from "./quicksight/GroupMembership";
import { IamPolicyAssignment as QUICKSIGHT_IamPolicyAssignment } from "./quicksight/IamPolicyAssignment";
import { Ingestion as QUICKSIGHT_Ingestion } from "./quicksight/Ingestion";
import { Namespace as QUICKSIGHT_Namespace } from "./quicksight/Namespace";
import { RefreshSchedule as QUICKSIGHT_RefreshSchedule } from "./quicksight/RefreshSchedule";
import { Template as QUICKSIGHT_Template } from "./quicksight/Template";
import { TemplateAlias as QUICKSIGHT_TemplateAlias } from "./quicksight/TemplateAlias";
import { Theme as QUICKSIGHT_Theme } from "./quicksight/Theme";
import { User as QUICKSIGHT_User } from "./quicksight/User";
import { VpcConnection as QUICKSIGHT_VpcConnection } from "./quicksight/VpcConnection";
import { PrincipalAssociation as RAM_PrincipalAssociation } from "./ram/PrincipalAssociation";
import { ResourceAssociation as RAM_ResourceAssociation } from "./ram/ResourceAssociation";
import { ResourceShare as RAM_ResourceShare } from "./ram/ResourceShare";
import { ResourceShareAccepter as RAM_ResourceShareAccepter } from "./ram/ResourceShareAccepter";
import { SharingWithOrganization as RAM_SharingWithOrganization } from "./ram/SharingWithOrganization";
import { Rule as RBIN_Rule } from "./rbin/Rule";
import { Certificate as RDS_Certificate } from "./rds/Certificate";
import { Cluster as RDS_Cluster } from "./rds/Cluster";
import { ClusterActivityStream as RDS_ClusterActivityStream } from "./rds/ClusterActivityStream";
import { ClusterEndpoint as RDS_ClusterEndpoint } from "./rds/ClusterEndpoint";
import { ClusterInstance as RDS_ClusterInstance } from "./rds/ClusterInstance";
import { ClusterParameterGroup as RDS_ClusterParameterGroup } from "./rds/ClusterParameterGroup";
import { ClusterRoleAssociation as RDS_ClusterRoleAssociation } from "./rds/ClusterRoleAssociation";
import { ClusterSnapshot as RDS_ClusterSnapshot } from "./rds/ClusterSnapshot";
import { CustomDbEngineVersion as RDS_CustomDbEngineVersion } from "./rds/CustomDbEngineVersion";
import { EventSubscription as RDS_EventSubscription } from "./rds/EventSubscription";
import { ExportTask as RDS_ExportTask } from "./rds/ExportTask";
import { GlobalCluster as RDS_GlobalCluster } from "./rds/GlobalCluster";
import { Instance as RDS_Instance } from "./rds/Instance";
import { InstanceAutomatedBackupsReplication as RDS_InstanceAutomatedBackupsReplication } from "./rds/InstanceAutomatedBackupsReplication";
import { Integration as RDS_Integration } from "./rds/Integration";
import { OptionGroup as RDS_OptionGroup } from "./rds/OptionGroup";
import { ParameterGroup as RDS_ParameterGroup } from "./rds/ParameterGroup";
import { Proxy as RDS_Proxy } from "./rds/Proxy";
import { ProxyDefaultTargetGroup as RDS_ProxyDefaultTargetGroup } from "./rds/ProxyDefaultTargetGroup";
import { ProxyEndpoint as RDS_ProxyEndpoint } from "./rds/ProxyEndpoint";
import { ProxyTarget as RDS_ProxyTarget } from "./rds/ProxyTarget";
import { ReservedInstance as RDS_ReservedInstance } from "./rds/ReservedInstance";
import { RoleAssociation as RDS_RoleAssociation } from "./rds/RoleAssociation";
import { Snapshot as RDS_Snapshot } from "./rds/Snapshot";
import { SnapshotCopy as RDS_SnapshotCopy } from "./rds/SnapshotCopy";
import { SubnetGroup as RDS_SubnetGroup } from "./rds/SubnetGroup";
import { AuthenticationProfile as REDSHIFT_AuthenticationProfile } from "./redshift/AuthenticationProfile";
import { Cluster as REDSHIFT_Cluster } from "./redshift/Cluster";
import { ClusterIamRoles as REDSHIFT_ClusterIamRoles } from "./redshift/ClusterIamRoles";
import { ClusterSnapshot as REDSHIFT_ClusterSnapshot } from "./redshift/ClusterSnapshot";
import { DataShareAuthorization as REDSHIFT_DataShareAuthorization } from "./redshift/DataShareAuthorization";
import { DataShareConsumerAssociation as REDSHIFT_DataShareConsumerAssociation } from "./redshift/DataShareConsumerAssociation";
import { EndpointAccess as REDSHIFT_EndpointAccess } from "./redshift/EndpointAccess";
import { EndpointAuthorization as REDSHIFT_EndpointAuthorization } from "./redshift/EndpointAuthorization";
import { EventSubscription as REDSHIFT_EventSubscription } from "./redshift/EventSubscription";
import { HsmClientCertificate as REDSHIFT_HsmClientCertificate } from "./redshift/HsmClientCertificate";
import { HsmConfiguration as REDSHIFT_HsmConfiguration } from "./redshift/HsmConfiguration";
import { Logging as REDSHIFT_Logging } from "./redshift/Logging";
import { ParameterGroup as REDSHIFT_ParameterGroup } from "./redshift/ParameterGroup";
import { Partner as REDSHIFT_Partner } from "./redshift/Partner";
import { ResourcePolicy as REDSHIFT_ResourcePolicy } from "./redshift/ResourcePolicy";
import { ScheduledAction as REDSHIFT_ScheduledAction } from "./redshift/ScheduledAction";
import { SnapshotCopy as REDSHIFT_SnapshotCopy } from "./redshift/SnapshotCopy";
import { SnapshotCopyGrant as REDSHIFT_SnapshotCopyGrant } from "./redshift/SnapshotCopyGrant";
import { SnapshotSchedule as REDSHIFT_SnapshotSchedule } from "./redshift/SnapshotSchedule";
import { SnapshotScheduleAssociation as REDSHIFT_SnapshotScheduleAssociation } from "./redshift/SnapshotScheduleAssociation";
import { SubnetGroup as REDSHIFT_SubnetGroup } from "./redshift/SubnetGroup";
import { UsageLimit as REDSHIFT_UsageLimit } from "./redshift/UsageLimit";
import { Statement as REDSHIFTDATA_Statement } from "./redshiftdata/Statement";
import { CustomDomainAssociation as REDSHIFTSERVERLESS_CustomDomainAssociation } from "./redshiftserverless/CustomDomainAssociation";
import { EndpointAccess as REDSHIFTSERVERLESS_EndpointAccess } from "./redshiftserverless/EndpointAccess";
import { Namespace as REDSHIFTSERVERLESS_Namespace } from "./redshiftserverless/Namespace";
import { ResourcePolicy as REDSHIFTSERVERLESS_ResourcePolicy } from "./redshiftserverless/ResourcePolicy";
import { Snapshot as REDSHIFTSERVERLESS_Snapshot } from "./redshiftserverless/Snapshot";
import { UsageLimit as REDSHIFTSERVERLESS_UsageLimit } from "./redshiftserverless/UsageLimit";
import { Workgroup as REDSHIFTSERVERLESS_Workgroup } from "./redshiftserverless/Workgroup";
import { Collection as REKOGNITION_Collection } from "./rekognition/Collection";
import { Project as REKOGNITION_Project } from "./rekognition/Project";
import { StreamProcessor as REKOGNITION_StreamProcessor } from "./rekognition/StreamProcessor";
import { Index as RESOURCEEXPLORER_Index } from "./resourceexplorer/Index";
import { View as RESOURCEEXPLORER_View } from "./resourceexplorer/View";
import { Group as RESOURCEGROUPS_Group } from "./resourcegroups/Group";
import { Resource as RESOURCEGROUPS_Resource } from "./resourcegroups/Resource";
import { Profile as ROLESANYWHERE_Profile } from "./rolesanywhere/Profile";
import { TrustAnchor as ROLESANYWHERE_TrustAnchor } from "./rolesanywhere/TrustAnchor";
import { CidrCollection as ROUTE53_CidrCollection } from "./route53/CidrCollection";
import { CidrLocation as ROUTE53_CidrLocation } from "./route53/CidrLocation";
import { DelegationSet as ROUTE53_DelegationSet } from "./route53/DelegationSet";
import { HealthCheck as ROUTE53_HealthCheck } from "./route53/HealthCheck";
import { HostedZoneDnsSec as ROUTE53_HostedZoneDnsSec } from "./route53/HostedZoneDnsSec";
import { KeySigningKey as ROUTE53_KeySigningKey } from "./route53/KeySigningKey";
import { QueryLog as ROUTE53_QueryLog } from "./route53/QueryLog";
import { Record as ROUTE53_Record } from "./route53/Record";
import { ResolverConfig as ROUTE53_ResolverConfig } from "./route53/ResolverConfig";
import { ResolverDnsSecConfig as ROUTE53_ResolverDnsSecConfig } from "./route53/ResolverDnsSecConfig";
import { ResolverEndpoint as ROUTE53_ResolverEndpoint } from "./route53/ResolverEndpoint";
import { ResolverFirewallConfig as ROUTE53_ResolverFirewallConfig } from "./route53/ResolverFirewallConfig";
import { ResolverFirewallDomainList as ROUTE53_ResolverFirewallDomainList } from "./route53/ResolverFirewallDomainList";
import { ResolverFirewallRule as ROUTE53_ResolverFirewallRule } from "./route53/ResolverFirewallRule";
import { ResolverFirewallRuleGroup as ROUTE53_ResolverFirewallRuleGroup } from "./route53/ResolverFirewallRuleGroup";
import { ResolverFirewallRuleGroupAssociation as ROUTE53_ResolverFirewallRuleGroupAssociation } from "./route53/ResolverFirewallRuleGroupAssociation";
import { ResolverQueryLogConfig as ROUTE53_ResolverQueryLogConfig } from "./route53/ResolverQueryLogConfig";
import { ResolverQueryLogConfigAssociation as ROUTE53_ResolverQueryLogConfigAssociation } from "./route53/ResolverQueryLogConfigAssociation";
import { ResolverRule as ROUTE53_ResolverRule } from "./route53/ResolverRule";
import { ResolverRuleAssociation as ROUTE53_ResolverRuleAssociation } from "./route53/ResolverRuleAssociation";
import { TrafficPolicy as ROUTE53_TrafficPolicy } from "./route53/TrafficPolicy";
import { TrafficPolicyInstance as ROUTE53_TrafficPolicyInstance } from "./route53/TrafficPolicyInstance";
import { VpcAssociationAuthorization as ROUTE53_VpcAssociationAuthorization } from "./route53/VpcAssociationAuthorization";
import { Zone as ROUTE53_Zone } from "./route53/Zone";
import { ZoneAssociation as ROUTE53_ZoneAssociation } from "./route53/ZoneAssociation";
import { DelegationSignerRecord as ROUTE53DOMAINS_DelegationSignerRecord } from "./route53domains/DelegationSignerRecord";
import { RegisteredDomain as ROUTE53DOMAINS_RegisteredDomain } from "./route53domains/RegisteredDomain";
import { Cluster as ROUTE53RECOVERYCONTROL_Cluster } from "./route53recoverycontrol/Cluster";
import { ControlPanel as ROUTE53RECOVERYCONTROL_ControlPanel } from "./route53recoverycontrol/ControlPanel";
import { RoutingControl as ROUTE53RECOVERYCONTROL_RoutingControl } from "./route53recoverycontrol/RoutingControl";
import { SafetyRule as ROUTE53RECOVERYCONTROL_SafetyRule } from "./route53recoverycontrol/SafetyRule";
import { Cell as ROUTE53RECOVERYREADINESS_Cell } from "./route53recoveryreadiness/Cell";
import { ReadinessCheck as ROUTE53RECOVERYREADINESS_ReadinessCheck } from "./route53recoveryreadiness/ReadinessCheck";
import { RecoveryGroup as ROUTE53RECOVERYREADINESS_RecoveryGroup } from "./route53recoveryreadiness/RecoveryGroup";
import { ResourceSet as ROUTE53RECOVERYREADINESS_ResourceSet } from "./route53recoveryreadiness/ResourceSet";
import { AppMonitor as RUM_AppMonitor } from "./rum/AppMonitor";
import { MetricsDestination as RUM_MetricsDestination } from "./rum/MetricsDestination";
import { AccessPoint as S3_AccessPoint } from "./s3/AccessPoint";
import { AccountPublicAccessBlock as S3_AccountPublicAccessBlock } from "./s3/AccountPublicAccessBlock";
import { AnalyticsConfiguration as S3_AnalyticsConfiguration } from "./s3/AnalyticsConfiguration";
import { Bucket as S3_Bucket } from "./s3/Bucket";
import { BucketAccelerateConfigurationV2 as S3_BucketAccelerateConfigurationV2 } from "./s3/BucketAccelerateConfigurationV2";
import { BucketAclV2 as S3_BucketAclV2 } from "./s3/BucketAclV2";
import { BucketCorsConfigurationV2 as S3_BucketCorsConfigurationV2 } from "./s3/BucketCorsConfigurationV2";
import { BucketIntelligentTieringConfiguration as S3_BucketIntelligentTieringConfiguration } from "./s3/BucketIntelligentTieringConfiguration";
import { BucketLifecycleConfigurationV2 as S3_BucketLifecycleConfigurationV2 } from "./s3/BucketLifecycleConfigurationV2";
import { BucketLoggingV2 as S3_BucketLoggingV2 } from "./s3/BucketLoggingV2";
import { BucketMetric as S3_BucketMetric } from "./s3/BucketMetric";
import { BucketNotification as S3_BucketNotification } from "./s3/BucketNotification";
import { BucketObject as S3_BucketObject } from "./s3/BucketObject";
import { BucketObjectLockConfigurationV2 as S3_BucketObjectLockConfigurationV2 } from "./s3/BucketObjectLockConfigurationV2";
import { BucketObjectv2 as S3_BucketObjectv2 } from "./s3/BucketObjectv2";
import { BucketOwnershipControls as S3_BucketOwnershipControls } from "./s3/BucketOwnershipControls";
import { BucketPolicy as S3_BucketPolicy } from "./s3/BucketPolicy";
import { BucketPublicAccessBlock as S3_BucketPublicAccessBlock } from "./s3/BucketPublicAccessBlock";
import { BucketReplicationConfig as S3_BucketReplicationConfig } from "./s3/BucketReplicationConfig";
import { BucketRequestPaymentConfigurationV2 as S3_BucketRequestPaymentConfigurationV2 } from "./s3/BucketRequestPaymentConfigurationV2";
import { BucketServerSideEncryptionConfigurationV2 as S3_BucketServerSideEncryptionConfigurationV2 } from "./s3/BucketServerSideEncryptionConfigurationV2";
import { BucketV2 as S3_BucketV2 } from "./s3/BucketV2";
import { BucketVersioningV2 as S3_BucketVersioningV2 } from "./s3/BucketVersioningV2";
import { BucketWebsiteConfigurationV2 as S3_BucketWebsiteConfigurationV2 } from "./s3/BucketWebsiteConfigurationV2";
import { DirectoryBucket as S3_DirectoryBucket } from "./s3/DirectoryBucket";
import { Inventory as S3_Inventory } from "./s3/Inventory";
import { ObjectCopy as S3_ObjectCopy } from "./s3/ObjectCopy";
import { AccessGrant as S3CONTROL_AccessGrant } from "./s3control/AccessGrant";
import { AccessGrantsInstance as S3CONTROL_AccessGrantsInstance } from "./s3control/AccessGrantsInstance";
import { AccessGrantsInstanceResourcePolicy as S3CONTROL_AccessGrantsInstanceResourcePolicy } from "./s3control/AccessGrantsInstanceResourcePolicy";
import { AccessGrantsLocation as S3CONTROL_AccessGrantsLocation } from "./s3control/AccessGrantsLocation";
import { AccessPointPolicy as S3CONTROL_AccessPointPolicy } from "./s3control/AccessPointPolicy";
import { Bucket as S3CONTROL_Bucket } from "./s3control/Bucket";
import { BucketLifecycleConfiguration as S3CONTROL_BucketLifecycleConfiguration } from "./s3control/BucketLifecycleConfiguration";
import { BucketPolicy as S3CONTROL_BucketPolicy } from "./s3control/BucketPolicy";
import { MultiRegionAccessPoint as S3CONTROL_MultiRegionAccessPoint } from "./s3control/MultiRegionAccessPoint";
import { MultiRegionAccessPointPolicy as S3CONTROL_MultiRegionAccessPointPolicy } from "./s3control/MultiRegionAccessPointPolicy";
import { ObjectLambdaAccessPoint as S3CONTROL_ObjectLambdaAccessPoint } from "./s3control/ObjectLambdaAccessPoint";
import { ObjectLambdaAccessPointPolicy as S3CONTROL_ObjectLambdaAccessPointPolicy } from "./s3control/ObjectLambdaAccessPointPolicy";
import { StorageLensConfiguration as S3CONTROL_StorageLensConfiguration } from "./s3control/StorageLensConfiguration";
import { Endpoint as S3OUTPOSTS_Endpoint } from "./s3outposts/Endpoint";
import { App as SAGEMAKER_App } from "./sagemaker/App";
import { AppImageConfig as SAGEMAKER_AppImageConfig } from "./sagemaker/AppImageConfig";
import { CodeRepository as SAGEMAKER_CodeRepository } from "./sagemaker/CodeRepository";
import { DataQualityJobDefinition as SAGEMAKER_DataQualityJobDefinition } from "./sagemaker/DataQualityJobDefinition";
import { Device as SAGEMAKER_Device } from "./sagemaker/Device";
import { DeviceFleet as SAGEMAKER_DeviceFleet } from "./sagemaker/DeviceFleet";
import { Domain as SAGEMAKER_Domain } from "./sagemaker/Domain";
import { Endpoint as SAGEMAKER_Endpoint } from "./sagemaker/Endpoint";
import { EndpointConfiguration as SAGEMAKER_EndpointConfiguration } from "./sagemaker/EndpointConfiguration";
import { FeatureGroup as SAGEMAKER_FeatureGroup } from "./sagemaker/FeatureGroup";
import { FlowDefinition as SAGEMAKER_FlowDefinition } from "./sagemaker/FlowDefinition";
import { HumanTaskUI as SAGEMAKER_HumanTaskUI } from "./sagemaker/HumanTaskUI";
import { Image as SAGEMAKER_Image } from "./sagemaker/Image";
import { ImageVersion as SAGEMAKER_ImageVersion } from "./sagemaker/ImageVersion";
import { Model as SAGEMAKER_Model } from "./sagemaker/Model";
import { ModelPackageGroup as SAGEMAKER_ModelPackageGroup } from "./sagemaker/ModelPackageGroup";
import { ModelPackageGroupPolicy as SAGEMAKER_ModelPackageGroupPolicy } from "./sagemaker/ModelPackageGroupPolicy";
import { MonitoringSchedule as SAGEMAKER_MonitoringSchedule } from "./sagemaker/MonitoringSchedule";
import { NotebookInstance as SAGEMAKER_NotebookInstance } from "./sagemaker/NotebookInstance";
import { NotebookInstanceLifecycleConfiguration as SAGEMAKER_NotebookInstanceLifecycleConfiguration } from "./sagemaker/NotebookInstanceLifecycleConfiguration";
import { Pipeline as SAGEMAKER_Pipeline } from "./sagemaker/Pipeline";
import { Project as SAGEMAKER_Project } from "./sagemaker/Project";
import { ServicecatalogPortfolioStatus as SAGEMAKER_ServicecatalogPortfolioStatus } from "./sagemaker/ServicecatalogPortfolioStatus";
import { Space as SAGEMAKER_Space } from "./sagemaker/Space";
import { StudioLifecycleConfig as SAGEMAKER_StudioLifecycleConfig } from "./sagemaker/StudioLifecycleConfig";
import { UserProfile as SAGEMAKER_UserProfile } from "./sagemaker/UserProfile";
import { Workforce as SAGEMAKER_Workforce } from "./sagemaker/Workforce";
import { Workteam as SAGEMAKER_Workteam } from "./sagemaker/Workteam";
import { Schedule as SCHEDULER_Schedule } from "./scheduler/Schedule";
import { ScheduleGroup as SCHEDULER_ScheduleGroup } from "./scheduler/ScheduleGroup";
import { Discoverer as SCHEMAS_Discoverer } from "./schemas/Discoverer";
import { Registry as SCHEMAS_Registry } from "./schemas/Registry";
import { RegistryPolicy as SCHEMAS_RegistryPolicy } from "./schemas/RegistryPolicy";
import { Schema as SCHEMAS_Schema } from "./schemas/Schema";
import { Secret as SECRETSMANAGER_Secret } from "./secretsmanager/Secret";
import { SecretPolicy as SECRETSMANAGER_SecretPolicy } from "./secretsmanager/SecretPolicy";
import { SecretRotation as SECRETSMANAGER_SecretRotation } from "./secretsmanager/SecretRotation";
import { SecretVersion as SECRETSMANAGER_SecretVersion } from "./secretsmanager/SecretVersion";
import { Account as SECURITYHUB_Account } from "./securityhub/Account";
import { ActionTarget as SECURITYHUB_ActionTarget } from "./securityhub/ActionTarget";
import { AutomationRule as SECURITYHUB_AutomationRule } from "./securityhub/AutomationRule";
import { ConfigurationPolicy as SECURITYHUB_ConfigurationPolicy } from "./securityhub/ConfigurationPolicy";
import { ConfigurationPolicyAssociation as SECURITYHUB_ConfigurationPolicyAssociation } from "./securityhub/ConfigurationPolicyAssociation";
import { FindingAggregator as SECURITYHUB_FindingAggregator } from "./securityhub/FindingAggregator";
import { Insight as SECURITYHUB_Insight } from "./securityhub/Insight";
import { InviteAccepter as SECURITYHUB_InviteAccepter } from "./securityhub/InviteAccepter";
import { Member as SECURITYHUB_Member } from "./securityhub/Member";
import { OrganizationAdminAccount as SECURITYHUB_OrganizationAdminAccount } from "./securityhub/OrganizationAdminAccount";
import { OrganizationConfiguration as SECURITYHUB_OrganizationConfiguration } from "./securityhub/OrganizationConfiguration";
import { ProductSubscription as SECURITYHUB_ProductSubscription } from "./securityhub/ProductSubscription";
import { StandardsControl as SECURITYHUB_StandardsControl } from "./securityhub/StandardsControl";
import { StandardsSubscription as SECURITYHUB_StandardsSubscription } from "./securityhub/StandardsSubscription";
import { AwsLogSource as SECURITYLAKE_AwsLogSource } from "./securitylake/AwsLogSource";
import { CustomLogSource as SECURITYLAKE_CustomLogSource } from "./securitylake/CustomLogSource";
import { DataLake as SECURITYLAKE_DataLake } from "./securitylake/DataLake";
import { Subscriber as SECURITYLAKE_Subscriber } from "./securitylake/Subscriber";
import { SubscriberNotification as SECURITYLAKE_SubscriberNotification } from "./securitylake/SubscriberNotification";
import { CloudFormationStack as SERVERLESSREPOSITORY_CloudFormationStack } from "./serverlessrepository/CloudFormationStack";
import { AppregistryApplication as SERVICECATALOG_AppregistryApplication } from "./servicecatalog/AppregistryApplication";
import { BudgetResourceAssociation as SERVICECATALOG_BudgetResourceAssociation } from "./servicecatalog/BudgetResourceAssociation";
import { Constraint as SERVICECATALOG_Constraint } from "./servicecatalog/Constraint";
import { OrganizationsAccess as SERVICECATALOG_OrganizationsAccess } from "./servicecatalog/OrganizationsAccess";
import { Portfolio as SERVICECATALOG_Portfolio } from "./servicecatalog/Portfolio";
import { PortfolioShare as SERVICECATALOG_PortfolioShare } from "./servicecatalog/PortfolioShare";
import { PrincipalPortfolioAssociation as SERVICECATALOG_PrincipalPortfolioAssociation } from "./servicecatalog/PrincipalPortfolioAssociation";
import { Product as SERVICECATALOG_Product } from "./servicecatalog/Product";
import { ProductPortfolioAssociation as SERVICECATALOG_ProductPortfolioAssociation } from "./servicecatalog/ProductPortfolioAssociation";
import { ProvisionedProduct as SERVICECATALOG_ProvisionedProduct } from "./servicecatalog/ProvisionedProduct";
import { ProvisioningArtifact as SERVICECATALOG_ProvisioningArtifact } from "./servicecatalog/ProvisioningArtifact";
import { ServiceAction as SERVICECATALOG_ServiceAction } from "./servicecatalog/ServiceAction";
import { TagOption as SERVICECATALOG_TagOption } from "./servicecatalog/TagOption";
import { TagOptionResourceAssociation as SERVICECATALOG_TagOptionResourceAssociation } from "./servicecatalog/TagOptionResourceAssociation";
import { HttpNamespace as SERVICEDISCOVERY_HttpNamespace } from "./servicediscovery/HttpNamespace";
import { Instance as SERVICEDISCOVERY_Instance } from "./servicediscovery/Instance";
import { PrivateDnsNamespace as SERVICEDISCOVERY_PrivateDnsNamespace } from "./servicediscovery/PrivateDnsNamespace";
import { PublicDnsNamespace as SERVICEDISCOVERY_PublicDnsNamespace } from "./servicediscovery/PublicDnsNamespace";
import { Service as SERVICEDISCOVERY_Service } from "./servicediscovery/Service";
import { ServiceQuota as SERVICEQUOTAS_ServiceQuota } from "./servicequotas/ServiceQuota";
import { Template as SERVICEQUOTAS_Template } from "./servicequotas/Template";
import { TemplateAssociation as SERVICEQUOTAS_TemplateAssociation } from "./servicequotas/TemplateAssociation";
import { ActiveReceiptRuleSet as SES_ActiveReceiptRuleSet } from "./ses/ActiveReceiptRuleSet";
import { ConfigurationSet as SES_ConfigurationSet } from "./ses/ConfigurationSet";
import { DomainDkim as SES_DomainDkim } from "./ses/DomainDkim";
import { DomainIdentity as SES_DomainIdentity } from "./ses/DomainIdentity";
import { DomainIdentityVerification as SES_DomainIdentityVerification } from "./ses/DomainIdentityVerification";
import { EmailIdentity as SES_EmailIdentity } from "./ses/EmailIdentity";
import { EventDestination as SES_EventDestination } from "./ses/EventDestination";
import { IdentityNotificationTopic as SES_IdentityNotificationTopic } from "./ses/IdentityNotificationTopic";
import { IdentityPolicy as SES_IdentityPolicy } from "./ses/IdentityPolicy";
import { MailFrom as SES_MailFrom } from "./ses/MailFrom";
import { ReceiptFilter as SES_ReceiptFilter } from "./ses/ReceiptFilter";
import { ReceiptRule as SES_ReceiptRule } from "./ses/ReceiptRule";
import { ReceiptRuleSet as SES_ReceiptRuleSet } from "./ses/ReceiptRuleSet";
import { Template as SES_Template } from "./ses/Template";
import { AccountVdmAttributes as SESV2_AccountVdmAttributes } from "./sesv2/AccountVdmAttributes";
import { ConfigurationSet as SESV2_ConfigurationSet } from "./sesv2/ConfigurationSet";
import { ConfigurationSetEventDestination as SESV2_ConfigurationSetEventDestination } from "./sesv2/ConfigurationSetEventDestination";
import { ContactList as SESV2_ContactList } from "./sesv2/ContactList";
import { DedicatedIpAssignment as SESV2_DedicatedIpAssignment } from "./sesv2/DedicatedIpAssignment";
import { DedicatedIpPool as SESV2_DedicatedIpPool } from "./sesv2/DedicatedIpPool";
import { EmailIdentity as SESV2_EmailIdentity } from "./sesv2/EmailIdentity";
import { EmailIdentityFeedbackAttributes as SESV2_EmailIdentityFeedbackAttributes } from "./sesv2/EmailIdentityFeedbackAttributes";
import { EmailIdentityMailFromAttributes as SESV2_EmailIdentityMailFromAttributes } from "./sesv2/EmailIdentityMailFromAttributes";
import { EmailIdentityPolicy as SESV2_EmailIdentityPolicy } from "./sesv2/EmailIdentityPolicy";
import { Activity as SFN_Activity } from "./sfn/Activity";
import { Alias as SFN_Alias } from "./sfn/Alias";
import { StateMachine as SFN_StateMachine } from "./sfn/StateMachine";
import { ApplicationLayerAutomaticResponse as SHIELD_ApplicationLayerAutomaticResponse } from "./shield/ApplicationLayerAutomaticResponse";
import { DrtAccessLogBucketAssociation as SHIELD_DrtAccessLogBucketAssociation } from "./shield/DrtAccessLogBucketAssociation";
import { DrtAccessRoleArnAssociation as SHIELD_DrtAccessRoleArnAssociation } from "./shield/DrtAccessRoleArnAssociation";
import { ProactiveEngagement as SHIELD_ProactiveEngagement } from "./shield/ProactiveEngagement";
import { Protection as SHIELD_Protection } from "./shield/Protection";
import { ProtectionGroup as SHIELD_ProtectionGroup } from "./shield/ProtectionGroup";
import { ProtectionHealthCheckAssociation as SHIELD_ProtectionHealthCheckAssociation } from "./shield/ProtectionHealthCheckAssociation";
import { Subscription as SHIELD_Subscription } from "./shield/Subscription";
import { SigningJob as SIGNER_SigningJob } from "./signer/SigningJob";
import { SigningProfile as SIGNER_SigningProfile } from "./signer/SigningProfile";
import { SigningProfilePermission as SIGNER_SigningProfilePermission } from "./signer/SigningProfilePermission";
import { Domain as SIMPLEDB_Domain } from "./simpledb/Domain";
import { DataProtectionPolicy as SNS_DataProtectionPolicy } from "./sns/DataProtectionPolicy";
import { PlatformApplication as SNS_PlatformApplication } from "./sns/PlatformApplication";
import { SmsPreferences as SNS_SmsPreferences } from "./sns/SmsPreferences";
import { Topic as SNS_Topic } from "./sns/Topic";
import { TopicPolicy as SNS_TopicPolicy } from "./sns/TopicPolicy";
import { TopicSubscription as SNS_TopicSubscription } from "./sns/TopicSubscription";
import { Queue as SQS_Queue } from "./sqs/Queue";
import { QueuePolicy as SQS_QueuePolicy } from "./sqs/QueuePolicy";
import { RedriveAllowPolicy as SQS_RedriveAllowPolicy } from "./sqs/RedriveAllowPolicy";
import { RedrivePolicy as SQS_RedrivePolicy } from "./sqs/RedrivePolicy";
import { Activation as SSM_Activation } from "./ssm/Activation";
import { Association as SSM_Association } from "./ssm/Association";
import { ContactsRotation as SSM_ContactsRotation } from "./ssm/ContactsRotation";
import { DefaultPatchBaseline as SSM_DefaultPatchBaseline } from "./ssm/DefaultPatchBaseline";
import { Document as SSM_Document } from "./ssm/Document";
import { MaintenanceWindow as SSM_MaintenanceWindow } from "./ssm/MaintenanceWindow";
import { MaintenanceWindowTarget as SSM_MaintenanceWindowTarget } from "./ssm/MaintenanceWindowTarget";
import { MaintenanceWindowTask as SSM_MaintenanceWindowTask } from "./ssm/MaintenanceWindowTask";
import { Parameter as SSM_Parameter } from "./ssm/Parameter";
import { PatchBaseline as SSM_PatchBaseline } from "./ssm/PatchBaseline";
import { PatchGroup as SSM_PatchGroup } from "./ssm/PatchGroup";
import { ResourceDataSync as SSM_ResourceDataSync } from "./ssm/ResourceDataSync";
import { ServiceSetting as SSM_ServiceSetting } from "./ssm/ServiceSetting";
import { Contact as SSMCONTACTS_Contact } from "./ssmcontacts/Contact";
import { ContactChannel as SSMCONTACTS_ContactChannel } from "./ssmcontacts/ContactChannel";
import { Plan as SSMCONTACTS_Plan } from "./ssmcontacts/Plan";
import { ReplicationSet as SSMINCIDENTS_ReplicationSet } from "./ssmincidents/ReplicationSet";
import { ResponsePlan as SSMINCIDENTS_ResponsePlan } from "./ssmincidents/ResponsePlan";
import { AccountAssignment as SSOADMIN_AccountAssignment } from "./ssoadmin/AccountAssignment";
import { Application as SSOADMIN_Application } from "./ssoadmin/Application";
import { ApplicationAccessScope as SSOADMIN_ApplicationAccessScope } from "./ssoadmin/ApplicationAccessScope";
import { ApplicationAssignment as SSOADMIN_ApplicationAssignment } from "./ssoadmin/ApplicationAssignment";
import { ApplicationAssignmentConfiguration as SSOADMIN_ApplicationAssignmentConfiguration } from "./ssoadmin/ApplicationAssignmentConfiguration";
import { CustomerManagedPolicyAttachment as SSOADMIN_CustomerManagedPolicyAttachment } from "./ssoadmin/CustomerManagedPolicyAttachment";
import { InstanceAccessControlAttributes as SSOADMIN_InstanceAccessControlAttributes } from "./ssoadmin/InstanceAccessControlAttributes";
import { ManagedPolicyAttachment as SSOADMIN_ManagedPolicyAttachment } from "./ssoadmin/ManagedPolicyAttachment";
import { PermissionsBoundaryAttachment as SSOADMIN_PermissionsBoundaryAttachment } from "./ssoadmin/PermissionsBoundaryAttachment";
import { PermissionSet as SSOADMIN_PermissionSet } from "./ssoadmin/PermissionSet";
import { PermissionSetInlinePolicy as SSOADMIN_PermissionSetInlinePolicy } from "./ssoadmin/PermissionSetInlinePolicy";
import { TrustedTokenIssuer as SSOADMIN_TrustedTokenIssuer } from "./ssoadmin/TrustedTokenIssuer";
import { Cache as STORAGEGATEWAY_Cache } from "./storagegateway/Cache";
import { CachesIscsiVolume as STORAGEGATEWAY_CachesIscsiVolume } from "./storagegateway/CachesIscsiVolume";
import { FileSystemAssociation as STORAGEGATEWAY_FileSystemAssociation } from "./storagegateway/FileSystemAssociation";
import { Gateway as STORAGEGATEWAY_Gateway } from "./storagegateway/Gateway";
import { NfsFileShare as STORAGEGATEWAY_NfsFileShare } from "./storagegateway/NfsFileShare";
import { SmbFileShare as STORAGEGATEWAY_SmbFileShare } from "./storagegateway/SmbFileShare";
import { StoredIscsiVolume as STORAGEGATEWAY_StoredIscsiVolume } from "./storagegateway/StoredIscsiVolume";
import { TapePool as STORAGEGATEWAY_TapePool } from "./storagegateway/TapePool";
import { UploadBuffer as STORAGEGATEWAY_UploadBuffer } from "./storagegateway/UploadBuffer";
import { WorkingStorage as STORAGEGATEWAY_WorkingStorage } from "./storagegateway/WorkingStorage";
import { Domain as SWF_Domain } from "./swf/Domain";
import { Canary as SYNTHETICS_Canary } from "./synthetics/Canary";
import { Group as SYNTHETICS_Group } from "./synthetics/Group";
import { GroupAssociation as SYNTHETICS_GroupAssociation } from "./synthetics/GroupAssociation";
import { DbInstance as TIMESTREAMINFLUXDB_DbInstance } from "./timestreaminfluxdb/DbInstance";
import { Database as TIMESTREAMWRITE_Database } from "./timestreamwrite/Database";
import { Table as TIMESTREAMWRITE_Table } from "./timestreamwrite/Table";
import { LanguageModel as TRANSCRIBE_LanguageModel } from "./transcribe/LanguageModel";
import { MedicalVocabulary as TRANSCRIBE_MedicalVocabulary } from "./transcribe/MedicalVocabulary";
import { Vocabulary as TRANSCRIBE_Vocabulary } from "./transcribe/Vocabulary";
import { VocabularyFilter as TRANSCRIBE_VocabularyFilter } from "./transcribe/VocabularyFilter";
import { Access as TRANSFER_Access } from "./transfer/Access";
import { Agreement as TRANSFER_Agreement } from "./transfer/Agreement";
import { Certificate as TRANSFER_Certificate } from "./transfer/Certificate";
import { Connector as TRANSFER_Connector } from "./transfer/Connector";
import { Profile as TRANSFER_Profile } from "./transfer/Profile";
import { Server as TRANSFER_Server } from "./transfer/Server";
import { SshKey as TRANSFER_SshKey } from "./transfer/SshKey";
import { Tag as TRANSFER_Tag } from "./transfer/Tag";
import { User as TRANSFER_User } from "./transfer/User";
import { Workflow as TRANSFER_Workflow } from "./transfer/Workflow";
import { Endpoint as VERIFIEDACCESS_Endpoint } from "./verifiedaccess/Endpoint";
import { Group as VERIFIEDACCESS_Group } from "./verifiedaccess/Group";
import { Instance as VERIFIEDACCESS_Instance } from "./verifiedaccess/Instance";
import { InstanceLoggingConfiguration as VERIFIEDACCESS_InstanceLoggingConfiguration } from "./verifiedaccess/InstanceLoggingConfiguration";
import { InstanceTrustProviderAttachment as VERIFIEDACCESS_InstanceTrustProviderAttachment } from "./verifiedaccess/InstanceTrustProviderAttachment";
import { TrustProvider as VERIFIEDACCESS_TrustProvider } from "./verifiedaccess/TrustProvider";
import { IdentitySource as VERIFIEDPERMISSIONS_IdentitySource } from "./verifiedpermissions/IdentitySource";
import { Policy as VERIFIEDPERMISSIONS_Policy } from "./verifiedpermissions/Policy";
import { PolicyStore as VERIFIEDPERMISSIONS_PolicyStore } from "./verifiedpermissions/PolicyStore";
import { PolicyTemplate as VERIFIEDPERMISSIONS_PolicyTemplate } from "./verifiedpermissions/PolicyTemplate";
import { Schema as VERIFIEDPERMISSIONS_Schema } from "./verifiedpermissions/Schema";
import { EndpointPrivateDns as VPC_EndpointPrivateDns } from "./vpc/EndpointPrivateDns";
import { EndpointServicePrivateDnsVerification as VPC_EndpointServicePrivateDnsVerification } from "./vpc/EndpointServicePrivateDnsVerification";
import { SecurityGroupEgressRule as VPC_SecurityGroupEgressRule } from "./vpc/SecurityGroupEgressRule";
import { SecurityGroupIngressRule as VPC_SecurityGroupIngressRule } from "./vpc/SecurityGroupIngressRule";
import { AccessLogSubscription as VPCLATTICE_AccessLogSubscription } from "./vpclattice/AccessLogSubscription";
import { AuthPolicy as VPCLATTICE_AuthPolicy } from "./vpclattice/AuthPolicy";
import { Listener as VPCLATTICE_Listener } from "./vpclattice/Listener";
import { ListenerRule as VPCLATTICE_ListenerRule } from "./vpclattice/ListenerRule";
import { ResourcePolicy as VPCLATTICE_ResourcePolicy } from "./vpclattice/ResourcePolicy";
import { Service as VPCLATTICE_Service } from "./vpclattice/Service";
import { ServiceNetwork as VPCLATTICE_ServiceNetwork } from "./vpclattice/ServiceNetwork";
import { ServiceNetworkServiceAssociation as VPCLATTICE_ServiceNetworkServiceAssociation } from "./vpclattice/ServiceNetworkServiceAssociation";
import { ServiceNetworkVpcAssociation as VPCLATTICE_ServiceNetworkVpcAssociation } from "./vpclattice/ServiceNetworkVpcAssociation";
import { TargetGroup as VPCLATTICE_TargetGroup } from "./vpclattice/TargetGroup";
import { TargetGroupAttachment as VPCLATTICE_TargetGroupAttachment } from "./vpclattice/TargetGroupAttachment";
import { ByteMatchSet as WAF_ByteMatchSet } from "./waf/ByteMatchSet";
import { GeoMatchSet as WAF_GeoMatchSet } from "./waf/GeoMatchSet";
import { IpSet as WAF_IpSet } from "./waf/IpSet";
import { RateBasedRule as WAF_RateBasedRule } from "./waf/RateBasedRule";
import { RegexMatchSet as WAF_RegexMatchSet } from "./waf/RegexMatchSet";
import { RegexPatternSet as WAF_RegexPatternSet } from "./waf/RegexPatternSet";
import { Rule as WAF_Rule } from "./waf/Rule";
import { RuleGroup as WAF_RuleGroup } from "./waf/RuleGroup";
import { SizeConstraintSet as WAF_SizeConstraintSet } from "./waf/SizeConstraintSet";
import { SqlInjectionMatchSet as WAF_SqlInjectionMatchSet } from "./waf/SqlInjectionMatchSet";
import { WebAcl as WAF_WebAcl } from "./waf/WebAcl";
import { XssMatchSet as WAF_XssMatchSet } from "./waf/XssMatchSet";
import { ByteMatchSet as WAFREGIONAL_ByteMatchSet } from "./wafregional/ByteMatchSet";
import { GeoMatchSet as WAFREGIONAL_GeoMatchSet } from "./wafregional/GeoMatchSet";
import { IpSet as WAFREGIONAL_IpSet } from "./wafregional/IpSet";
import { RateBasedRule as WAFREGIONAL_RateBasedRule } from "./wafregional/RateBasedRule";
import { RegexMatchSet as WAFREGIONAL_RegexMatchSet } from "./wafregional/RegexMatchSet";
import { RegexPatternSet as WAFREGIONAL_RegexPatternSet } from "./wafregional/RegexPatternSet";
import { Rule as WAFREGIONAL_Rule } from "./wafregional/Rule";
import { RuleGroup as WAFREGIONAL_RuleGroup } from "./wafregional/RuleGroup";
import { SizeConstraintSet as WAFREGIONAL_SizeConstraintSet } from "./wafregional/SizeConstraintSet";
import { SqlInjectionMatchSet as WAFREGIONAL_SqlInjectionMatchSet } from "./wafregional/SqlInjectionMatchSet";
import { WebAcl as WAFREGIONAL_WebAcl } from "./wafregional/WebAcl";
import { WebAclAssociation as WAFREGIONAL_WebAclAssociation } from "./wafregional/WebAclAssociation";
import { XssMatchSet as WAFREGIONAL_XssMatchSet } from "./wafregional/XssMatchSet";
import { IpSet as WAFV2_IpSet } from "./wafv2/IpSet";
import { RegexPatternSet as WAFV2_RegexPatternSet } from "./wafv2/RegexPatternSet";
import { RuleGroup as WAFV2_RuleGroup } from "./wafv2/RuleGroup";
import { WebAcl as WAFV2_WebAcl } from "./wafv2/WebAcl";
import { WebAclAssociation as WAFV2_WebAclAssociation } from "./wafv2/WebAclAssociation";
import { WebAclLoggingConfiguration as WAFV2_WebAclLoggingConfiguration } from "./wafv2/WebAclLoggingConfiguration";
import { Fleet as WORKLINK_Fleet } from "./worklink/Fleet";
import { WebsiteCertificateAuthorityAssociation as WORKLINK_WebsiteCertificateAuthorityAssociation } from "./worklink/WebsiteCertificateAuthorityAssociation";
import { ConnectionAlias as WORKSPACES_ConnectionAlias } from "./workspaces/ConnectionAlias";
import { Directory as WORKSPACES_Directory } from "./workspaces/Directory";
import { IpGroup as WORKSPACES_IpGroup } from "./workspaces/IpGroup";
import { Workspace as WORKSPACES_Workspace } from "./workspaces/Workspace";
import { EncryptionConfig as XRAY_EncryptionConfig } from "./xray/EncryptionConfig";
import { Group as XRAY_Group } from "./xray/Group";
import { SamplingRule as XRAY_SamplingRule } from "./xray/SamplingRule";

export class ResourceProperties {
  static readonly ResourceFactoryMap1 = new Map<
    ResourceType,
    () => DS_Resource
  >([
    [ResourceType.ACCESSANALYZER_ANALYZER, () => new ACCESSANALYZER_Analyzer()],
    [
      ResourceType.ACCESSANALYZER_ARCHIVERULE,
      () => new ACCESSANALYZER_ArchiveRule(),
    ],
    [
      ResourceType.ACCOUNT_ALTERNATIVECONTACT,
      () => new ACCOUNT_AlternativeContact(),
    ],
    [ResourceType.ACCOUNT_PRIMARYCONTACT, () => new ACCOUNT_PrimaryContact()],
    [ResourceType.ACCOUNT_REGION, () => new ACCOUNT_Region()],
    [ResourceType.ACM_CERTIFICATE, () => new ACM_Certificate()],
    [
      ResourceType.ACM_CERTIFICATEVALIDATION,
      () => new ACM_CertificateValidation(),
    ],
    [ResourceType.ACMPCA_CERTIFICATE, () => new ACMPCA_Certificate()],
    [
      ResourceType.ACMPCA_CERTIFICATEAUTHORITY,
      () => new ACMPCA_CertificateAuthority(),
    ],
    [
      ResourceType.ACMPCA_CERTIFICATEAUTHORITYCERTIFICATE,
      () => new ACMPCA_CertificateAuthorityCertificate(),
    ],
    [ResourceType.ACMPCA_PERMISSION, () => new ACMPCA_Permission()],
    [ResourceType.ACMPCA_POLICY, () => new ACMPCA_Policy()],
    [ResourceType.ALB_LISTENER, () => new ALB_Listener()],
    [ResourceType.ALB_LISTENERCERTIFICATE, () => new ALB_ListenerCertificate()],
    [ResourceType.ALB_LISTENERRULE, () => new ALB_ListenerRule()],
    [ResourceType.ALB_LOADBALANCER, () => new ALB_LoadBalancer()],
    [ResourceType.ALB_TARGETGROUP, () => new ALB_TargetGroup()],
    [
      ResourceType.ALB_TARGETGROUPATTACHMENT,
      () => new ALB_TargetGroupAttachment(),
    ],
    [
      ResourceType.AMP_ALERTMANAGERDEFINITION,
      () => new AMP_AlertManagerDefinition(),
    ],
    [ResourceType.AMP_RULEGROUPNAMESPACE, () => new AMP_RuleGroupNamespace()],
    [ResourceType.AMP_SCRAPER, () => new AMP_Scraper()],
    [ResourceType.AMP_WORKSPACE, () => new AMP_Workspace()],
    [ResourceType.AMPLIFY_APP, () => new AMPLIFY_App()],
    [
      ResourceType.AMPLIFY_BACKENDENVIRONMENT,
      () => new AMPLIFY_BackendEnvironment(),
    ],
    [ResourceType.AMPLIFY_BRANCH, () => new AMPLIFY_Branch()],
    [
      ResourceType.AMPLIFY_DOMAINASSOCIATION,
      () => new AMPLIFY_DomainAssociation(),
    ],
    [ResourceType.AMPLIFY_WEBHOOK, () => new AMPLIFY_Webhook()],
    [ResourceType.APIGATEWAY_ACCOUNT, () => new APIGATEWAY_Account()],
    [ResourceType.APIGATEWAY_APIKEY, () => new APIGATEWAY_ApiKey()],
    [ResourceType.APIGATEWAY_AUTHORIZER, () => new APIGATEWAY_Authorizer()],
    [
      ResourceType.APIGATEWAY_BASEPATHMAPPING,
      () => new APIGATEWAY_BasePathMapping(),
    ],
    [
      ResourceType.APIGATEWAY_CLIENTCERTIFICATE,
      () => new APIGATEWAY_ClientCertificate(),
    ],
    [ResourceType.APIGATEWAY_DEPLOYMENT, () => new APIGATEWAY_Deployment()],
    [
      ResourceType.APIGATEWAY_DOCUMENTATIONPART,
      () => new APIGATEWAY_DocumentationPart(),
    ],
    [
      ResourceType.APIGATEWAY_DOCUMENTATIONVERSION,
      () => new APIGATEWAY_DocumentationVersion(),
    ],
    [ResourceType.APIGATEWAY_DOMAINNAME, () => new APIGATEWAY_DomainName()],
    [ResourceType.APIGATEWAY_INTEGRATION, () => new APIGATEWAY_Integration()],
    [
      ResourceType.APIGATEWAY_INTEGRATIONRESPONSE,
      () => new APIGATEWAY_IntegrationResponse(),
    ],
    [ResourceType.APIGATEWAY_METHOD, () => new APIGATEWAY_Method()],
    [
      ResourceType.APIGATEWAY_METHODRESPONSE,
      () => new APIGATEWAY_MethodResponse(),
    ],
    [
      ResourceType.APIGATEWAY_METHODSETTINGS,
      () => new APIGATEWAY_MethodSettings(),
    ],
    [ResourceType.APIGATEWAY_MODEL, () => new APIGATEWAY_Model()],
    [
      ResourceType.APIGATEWAY_REQUESTVALIDATOR,
      () => new APIGATEWAY_RequestValidator(),
    ],
    [ResourceType.APIGATEWAY_RESOURCE, () => new APIGATEWAY_Resource()],
    [ResourceType.APIGATEWAY_RESPONSE, () => new APIGATEWAY_Response()],
    [ResourceType.APIGATEWAY_RESTAPI, () => new APIGATEWAY_RestApi()],
    [
      ResourceType.APIGATEWAY_RESTAPIPOLICY,
      () => new APIGATEWAY_RestApiPolicy(),
    ],
    [ResourceType.APIGATEWAY_STAGE, () => new APIGATEWAY_Stage()],
    [ResourceType.APIGATEWAY_USAGEPLAN, () => new APIGATEWAY_UsagePlan()],
    [ResourceType.APIGATEWAY_USAGEPLANKEY, () => new APIGATEWAY_UsagePlanKey()],
    [ResourceType.APIGATEWAY_VPCLINK, () => new APIGATEWAY_VpcLink()],
    [ResourceType.APIGATEWAYV2_API, () => new APIGATEWAYV2_Api()],
    [ResourceType.APIGATEWAYV2_APIMAPPING, () => new APIGATEWAYV2_ApiMapping()],
    [ResourceType.APIGATEWAYV2_AUTHORIZER, () => new APIGATEWAYV2_Authorizer()],
    [ResourceType.APIGATEWAYV2_DEPLOYMENT, () => new APIGATEWAYV2_Deployment()],
    [ResourceType.APIGATEWAYV2_DOMAINNAME, () => new APIGATEWAYV2_DomainName()],
    [
      ResourceType.APIGATEWAYV2_INTEGRATION,
      () => new APIGATEWAYV2_Integration(),
    ],
    [
      ResourceType.APIGATEWAYV2_INTEGRATIONRESPONSE,
      () => new APIGATEWAYV2_IntegrationResponse(),
    ],
    [ResourceType.APIGATEWAYV2_MODEL, () => new APIGATEWAYV2_Model()],
    [ResourceType.APIGATEWAYV2_ROUTE, () => new APIGATEWAYV2_Route()],
    [
      ResourceType.APIGATEWAYV2_ROUTERESPONSE,
      () => new APIGATEWAYV2_RouteResponse(),
    ],
    [ResourceType.APIGATEWAYV2_STAGE, () => new APIGATEWAYV2_Stage()],
    [ResourceType.APIGATEWAYV2_VPCLINK, () => new APIGATEWAYV2_VpcLink()],
    [ResourceType.APPAUTOSCALING_POLICY, () => new APPAUTOSCALING_Policy()],
    [
      ResourceType.APPAUTOSCALING_SCHEDULEDACTION,
      () => new APPAUTOSCALING_ScheduledAction(),
    ],
    [ResourceType.APPAUTOSCALING_TARGET, () => new APPAUTOSCALING_Target()],
    [ResourceType.APPCONFIG_APPLICATION, () => new APPCONFIG_Application()],
    [
      ResourceType.APPCONFIG_CONFIGURATIONPROFILE,
      () => new APPCONFIG_ConfigurationProfile(),
    ],
    [ResourceType.APPCONFIG_DEPLOYMENT, () => new APPCONFIG_Deployment()],
    [
      ResourceType.APPCONFIG_DEPLOYMENTSTRATEGY,
      () => new APPCONFIG_DeploymentStrategy(),
    ],
    [ResourceType.APPCONFIG_ENVIRONMENT, () => new APPCONFIG_Environment()],
    [
      ResourceType.APPCONFIG_EVENTINTEGRATION,
      () => new APPCONFIG_EventIntegration(),
    ],
    [ResourceType.APPCONFIG_EXTENSION, () => new APPCONFIG_Extension()],
    [
      ResourceType.APPCONFIG_EXTENSIONASSOCIATION,
      () => new APPCONFIG_ExtensionAssociation(),
    ],
    [
      ResourceType.APPCONFIG_HOSTEDCONFIGURATIONVERSION,
      () => new APPCONFIG_HostedConfigurationVersion(),
    ],
    [
      ResourceType.APPFABRIC_APPAUTHORIZATION,
      () => new APPFABRIC_AppAuthorization(),
    ],
    [
      ResourceType.APPFABRIC_APPAUTHORIZATIONCONNECTION,
      () => new APPFABRIC_AppAuthorizationConnection(),
    ],
    [ResourceType.APPFABRIC_APPBUNDLE, () => new APPFABRIC_AppBundle()],
    [ResourceType.APPFABRIC_INGESTION, () => new APPFABRIC_Ingestion()],
    [
      ResourceType.APPFABRIC_INGESTIONDESTINATION,
      () => new APPFABRIC_IngestionDestination(),
    ],
    [
      ResourceType.APPFLOW_CONNECTORPROFILE,
      () => new APPFLOW_ConnectorProfile(),
    ],
    [ResourceType.APPFLOW_FLOW, () => new APPFLOW_Flow()],
    [
      ResourceType.APPINTEGRATIONS_DATAINTEGRATION,
      () => new APPINTEGRATIONS_DataIntegration(),
    ],
    [
      ResourceType.APPLICATIONINSIGHTS_APPLICATION,
      () => new APPLICATIONINSIGHTS_Application(),
    ],
    [ResourceType.APPMESH_GATEWAYROUTE, () => new APPMESH_GatewayRoute()],
    [ResourceType.APPMESH_MESH, () => new APPMESH_Mesh()],
    [ResourceType.APPMESH_ROUTE, () => new APPMESH_Route()],
    [ResourceType.APPMESH_VIRTUALGATEWAY, () => new APPMESH_VirtualGateway()],
    [ResourceType.APPMESH_VIRTUALNODE, () => new APPMESH_VirtualNode()],
    [ResourceType.APPMESH_VIRTUALROUTER, () => new APPMESH_VirtualRouter()],
    [ResourceType.APPMESH_VIRTUALSERVICE, () => new APPMESH_VirtualService()],
    [
      ResourceType.APPRUNNER_AUTOSCALINGCONFIGURATIONVERSION,
      () => new APPRUNNER_AutoScalingConfigurationVersion(),
    ],
    [ResourceType.APPRUNNER_CONNECTION, () => new APPRUNNER_Connection()],
    [
      ResourceType.APPRUNNER_CUSTOMDOMAINASSOCIATION,
      () => new APPRUNNER_CustomDomainAssociation(),
    ],
    [
      ResourceType.APPRUNNER_DEFAULTAUTOSCALINGCONFIGURATIONVERSION,
      () => new APPRUNNER_DefaultAutoScalingConfigurationVersion(),
    ],
    [ResourceType.APPRUNNER_DEPLOYMENT, () => new APPRUNNER_Deployment()],
    [
      ResourceType.APPRUNNER_OBSERVABILITYCONFIGURATION,
      () => new APPRUNNER_ObservabilityConfiguration(),
    ],
    [ResourceType.APPRUNNER_SERVICE, () => new APPRUNNER_Service()],
    [ResourceType.APPRUNNER_VPCCONNECTOR, () => new APPRUNNER_VpcConnector()],
    [
      ResourceType.APPRUNNER_VPCINGRESSCONNECTION,
      () => new APPRUNNER_VpcIngressConnection(),
    ],
    [
      ResourceType.APPSTREAM_DIRECTORYCONFIG,
      () => new APPSTREAM_DirectoryConfig(),
    ],
    [ResourceType.APPSTREAM_FLEET, () => new APPSTREAM_Fleet()],
    [
      ResourceType.APPSTREAM_FLEETSTACKASSOCIATION,
      () => new APPSTREAM_FleetStackAssociation(),
    ],
    [ResourceType.APPSTREAM_IMAGEBUILDER, () => new APPSTREAM_ImageBuilder()],
    [ResourceType.APPSTREAM_STACK, () => new APPSTREAM_Stack()],
    [ResourceType.APPSTREAM_USER, () => new APPSTREAM_User()],
    [
      ResourceType.APPSTREAM_USERSTACKASSOCIATION,
      () => new APPSTREAM_UserStackAssociation(),
    ],
    [ResourceType.APPSYNC_APICACHE, () => new APPSYNC_ApiCache()],
    [ResourceType.APPSYNC_APIKEY, () => new APPSYNC_ApiKey()],
    [ResourceType.APPSYNC_DATASOURCE, () => new APPSYNC_DataSource()],
    [ResourceType.APPSYNC_DOMAINNAME, () => new APPSYNC_DomainName()],
    [
      ResourceType.APPSYNC_DOMAINNAMEAPIASSOCIATION,
      () => new APPSYNC_DomainNameApiAssociation(),
    ],
    [ResourceType.APPSYNC_FUNCTION, () => new APPSYNC_Function()],
    [ResourceType.APPSYNC_GRAPHQLAPI, () => new APPSYNC_GraphQLApi()],
    [ResourceType.APPSYNC_RESOLVER, () => new APPSYNC_Resolver()],
    [ResourceType.APPSYNC_TYPE, () => new APPSYNC_Type()],
    [ResourceType.ATHENA_DATABASE, () => new ATHENA_Database()],
    [ResourceType.ATHENA_DATACATALOG, () => new ATHENA_DataCatalog()],
    [ResourceType.ATHENA_NAMEDQUERY, () => new ATHENA_NamedQuery()],
    [
      ResourceType.ATHENA_PREPAREDSTATEMENT,
      () => new ATHENA_PreparedStatement(),
    ],
    [ResourceType.ATHENA_WORKGROUP, () => new ATHENA_Workgroup()],
    [
      ResourceType.AUDITMANAGER_ACCOUNTREGISTRATION,
      () => new AUDITMANAGER_AccountRegistration(),
    ],
    [ResourceType.AUDITMANAGER_ASSESSMENT, () => new AUDITMANAGER_Assessment()],
    [
      ResourceType.AUDITMANAGER_ASSESSMENTDELEGATION,
      () => new AUDITMANAGER_AssessmentDelegation(),
    ],
    [
      ResourceType.AUDITMANAGER_ASSESSMENTREPORT,
      () => new AUDITMANAGER_AssessmentReport(),
    ],
    [ResourceType.AUDITMANAGER_CONTROL, () => new AUDITMANAGER_Control()],
    [ResourceType.AUDITMANAGER_FRAMEWORK, () => new AUDITMANAGER_Framework()],
    [
      ResourceType.AUDITMANAGER_FRAMEWORKSHARE,
      () => new AUDITMANAGER_FrameworkShare(),
    ],
    [
      ResourceType.AUDITMANAGER_ORGANIZATIONADMINACCOUNTREGISTRATION,
      () => new AUDITMANAGER_OrganizationAdminAccountRegistration(),
    ],
    [ResourceType.AUTOSCALING_ATTACHMENT, () => new AUTOSCALING_Attachment()],
    [ResourceType.AUTOSCALING_GROUP, () => new AUTOSCALING_Group()],
    [
      ResourceType.AUTOSCALING_LIFECYCLEHOOK,
      () => new AUTOSCALING_LifecycleHook(),
    ],
    [
      ResourceType.AUTOSCALING_NOTIFICATION,
      () => new AUTOSCALING_Notification(),
    ],
    [ResourceType.AUTOSCALING_POLICY, () => new AUTOSCALING_Policy()],
    [ResourceType.AUTOSCALING_SCHEDULE, () => new AUTOSCALING_Schedule()],
    [ResourceType.AUTOSCALING_TAG, () => new AUTOSCALING_Tag()],
    [
      ResourceType.AUTOSCALING_TRAFFICSOURCEATTACHMENT,
      () => new AUTOSCALING_TrafficSourceAttachment(),
    ],
    [
      ResourceType.AUTOSCALINGPLANS_SCALINGPLAN,
      () => new AUTOSCALINGPLANS_ScalingPlan(),
    ],
    [ResourceType.BACKUP_FRAMEWORK, () => new BACKUP_Framework()],
    [ResourceType.BACKUP_GLOBALSETTINGS, () => new BACKUP_GlobalSettings()],
    [ResourceType.BACKUP_PLAN, () => new BACKUP_Plan()],
    [ResourceType.BACKUP_REGIONSETTINGS, () => new BACKUP_RegionSettings()],
    [ResourceType.BACKUP_REPORTPLAN, () => new BACKUP_ReportPlan()],
    [ResourceType.BACKUP_SELECTION, () => new BACKUP_Selection()],
    [ResourceType.BACKUP_VAULT, () => new BACKUP_Vault()],
    [
      ResourceType.BACKUP_VAULTLOCKCONFIGURATION,
      () => new BACKUP_VaultLockConfiguration(),
    ],
    [
      ResourceType.BACKUP_VAULTNOTIFICATIONS,
      () => new BACKUP_VaultNotifications(),
    ],
    [ResourceType.BACKUP_VAULTPOLICY, () => new BACKUP_VaultPolicy()],
    [
      ResourceType.BATCH_COMPUTEENVIRONMENT,
      () => new BATCH_ComputeEnvironment(),
    ],
    [ResourceType.BATCH_JOBDEFINITION, () => new BATCH_JobDefinition()],
    [ResourceType.BATCH_JOBQUEUE, () => new BATCH_JobQueue()],
    [ResourceType.BATCH_SCHEDULINGPOLICY, () => new BATCH_SchedulingPolicy()],
    [ResourceType.BCMDATA_EXPORT, () => new BCMDATA_Export()],
    [ResourceType.BEDROCK_AGENTAGENT, () => new BEDROCK_AgentAgent()],
    [
      ResourceType.BEDROCK_AGENTAGENTACTIONGROUP,
      () => new BEDROCK_AgentAgentActionGroup(),
    ],
    [ResourceType.BEDROCK_AGENTAGENTALIAS, () => new BEDROCK_AgentAgentAlias()],
    [
      ResourceType.BEDROCK_AGENTAGENTKNOWLEDGEBASEASSOCIATION,
      () => new BEDROCK_AgentAgentKnowledgeBaseAssociation(),
    ],
    [ResourceType.BEDROCK_AGENTDATASOURCE, () => new BEDROCK_AgentDataSource()],
    [
      ResourceType.BEDROCK_AGENTKNOWLEDGEBASE,
      () => new BEDROCK_AgentKnowledgeBase(),
    ],
    [ResourceType.BEDROCK_CUSTOMMODEL, () => new BEDROCK_CustomModel()],
    [ResourceType.BEDROCK_GUARDRAIL, () => new BEDROCK_Guardrail()],
    [
      ResourceType.BEDROCK_PROVISIONEDMODELTHROUGHPUT,
      () => new BEDROCK_ProvisionedModelThroughput(),
    ],
    [
      ResourceType.BEDROCKMODEL_INVOCATIONLOGGINGCONFIGURATION,
      () => new BEDROCKMODEL_InvocationLoggingConfiguration(),
    ],
    [ResourceType.BUDGETS_BUDGET, () => new BUDGETS_Budget()],
    [ResourceType.BUDGETS_BUDGETACTION, () => new BUDGETS_BudgetAction()],
    [
      ResourceType.CFG_AGGREGATEAUTHORIZATION,
      () => new CFG_AggregateAuthorization(),
    ],
    [
      ResourceType.CFG_CONFIGURATIONAGGREGATOR,
      () => new CFG_ConfigurationAggregator(),
    ],
    [ResourceType.CFG_CONFORMANCEPACK, () => new CFG_ConformancePack()],
    [ResourceType.CFG_DELIVERYCHANNEL, () => new CFG_DeliveryChannel()],
    [
      ResourceType.CFG_ORGANIZATIONCONFORMANCEPACK,
      () => new CFG_OrganizationConformancePack(),
    ],
    [
      ResourceType.CFG_ORGANIZATIONCUSTOMPOLICYRULE,
      () => new CFG_OrganizationCustomPolicyRule(),
    ],
    [
      ResourceType.CFG_ORGANIZATIONCUSTOMRULE,
      () => new CFG_OrganizationCustomRule(),
    ],
    [
      ResourceType.CFG_ORGANIZATIONMANAGEDRULE,
      () => new CFG_OrganizationManagedRule(),
    ],
    [ResourceType.CFG_RECORDER, () => new CFG_Recorder()],
    [ResourceType.CFG_RECORDERSTATUS, () => new CFG_RecorderStatus()],
    [
      ResourceType.CFG_REMEDIATIONCONFIGURATION,
      () => new CFG_RemediationConfiguration(),
    ],
    [
      ResourceType.CFG_RETENTIONCONFIGURATION,
      () => new CFG_RetentionConfiguration(),
    ],
    [ResourceType.CFG_RULE, () => new CFG_Rule()],
    [
      ResourceType.CHATBOT_SLACKCHANNELCONFIGURATION,
      () => new CHATBOT_SlackChannelConfiguration(),
    ],
    [
      ResourceType.CHATBOT_TEAMSCHANNELCONFIGURATION,
      () => new CHATBOT_TeamsChannelConfiguration(),
    ],
    [
      ResourceType.CHIME_SDKVOICEGLOBALSETTINGS,
      () => new CHIME_SdkvoiceGlobalSettings(),
    ],
    [
      ResourceType.CHIME_SDKVOICESIPMEDIAAPPLICATION,
      () => new CHIME_SdkvoiceSipMediaApplication(),
    ],
    [ResourceType.CHIME_SDKVOICESIPRULE, () => new CHIME_SdkvoiceSipRule()],
    [
      ResourceType.CHIME_SDKVOICEVOICEPROFILEDOMAIN,
      () => new CHIME_SdkvoiceVoiceProfileDomain(),
    ],
    [ResourceType.CHIME_VOICECONNECTOR, () => new CHIME_VoiceConnector()],
    [
      ResourceType.CHIME_VOICECONNECTORGROUP,
      () => new CHIME_VoiceConnectorGroup(),
    ],
    [
      ResourceType.CHIME_VOICECONNECTORLOGGING,
      () => new CHIME_VoiceConnectorLogging(),
    ],
    [
      ResourceType.CHIME_VOICECONNECTORORGANIZATION,
      () => new CHIME_VoiceConnectorOrganization(),
    ],
    [
      ResourceType.CHIME_VOICECONNECTORSTREAMING,
      () => new CHIME_VoiceConnectorStreaming(),
    ],
    [
      ResourceType.CHIME_VOICECONNECTORTERMINATION,
      () => new CHIME_VoiceConnectorTermination(),
    ],
    [
      ResourceType.CHIME_VOICECONNECTORTERMINATIONCREDENTIALS,
      () => new CHIME_VoiceConnectorTerminationCredentials(),
    ],
    [
      ResourceType.CHIMESDKMEDIAPIPELINES_MEDIAINSIGHTSPIPELINECONFIGURATION,
      () => new CHIMESDKMEDIAPIPELINES_MediaInsightsPipelineConfiguration(),
    ],
    [
      ResourceType.CLEANROOMS_COLLABORATION,
      () => new CLEANROOMS_Collaboration(),
    ],
    [
      ResourceType.CLEANROOMS_CONFIGUREDTABLE,
      () => new CLEANROOMS_ConfiguredTable(),
    ],
    [ResourceType.CLOUD9_ENVIRONMENTEC2, () => new CLOUD9_EnvironmentEC2()],
    [
      ResourceType.CLOUD9_ENVIRONMENTMEMBERSHIP,
      () => new CLOUD9_EnvironmentMembership(),
    ],
    [ResourceType.CLOUDCONTROL_RESOURCE, () => new CLOUDCONTROL_Resource()],
    [
      ResourceType.CLOUDFORMATION_CLOUDFORMATIONTYPE,
      () => new CLOUDFORMATION_CloudFormationType(),
    ],
    [ResourceType.CLOUDFORMATION_STACK, () => new CLOUDFORMATION_Stack()],
    [ResourceType.CLOUDFORMATION_STACKSET, () => new CLOUDFORMATION_StackSet()],
    [
      ResourceType.CLOUDFORMATION_STACKSETINSTANCE,
      () => new CLOUDFORMATION_StackSetInstance(),
    ],
    [ResourceType.CLOUDFRONT_CACHEPOLICY, () => new CLOUDFRONT_CachePolicy()],
    [
      ResourceType.CLOUDFRONT_CONTINUOUSDEPLOYMENTPOLICY,
      () => new CLOUDFRONT_ContinuousDeploymentPolicy(),
    ],
    [ResourceType.CLOUDFRONT_DISTRIBUTION, () => new CLOUDFRONT_Distribution()],
    [
      ResourceType.CLOUDFRONT_FIELDLEVELENCRYPTIONCONFIG,
      () => new CLOUDFRONT_FieldLevelEncryptionConfig(),
    ],
    [
      ResourceType.CLOUDFRONT_FIELDLEVELENCRYPTIONPROFILE,
      () => new CLOUDFRONT_FieldLevelEncryptionProfile(),
    ],
    [ResourceType.CLOUDFRONT_FUNCTION, () => new CLOUDFRONT_Function()],
    [ResourceType.CLOUDFRONT_KEYGROUP, () => new CLOUDFRONT_KeyGroup()],
    [
      ResourceType.CLOUDFRONT_KEYVALUESTORE,
      () => new CLOUDFRONT_KeyValueStore(),
    ],
    [
      ResourceType.CLOUDFRONT_KEYVALUESTOREKEY,
      () => new CLOUDFRONT_KeyvaluestoreKey(),
    ],
    [
      ResourceType.CLOUDFRONT_MONITORINGSUBSCRIPTION,
      () => new CLOUDFRONT_MonitoringSubscription(),
    ],
    [
      ResourceType.CLOUDFRONT_ORIGINACCESSCONTROL,
      () => new CLOUDFRONT_OriginAccessControl(),
    ],
    [
      ResourceType.CLOUDFRONT_ORIGINACCESSIDENTITY,
      () => new CLOUDFRONT_OriginAccessIdentity(),
    ],
    [
      ResourceType.CLOUDFRONT_ORIGINREQUESTPOLICY,
      () => new CLOUDFRONT_OriginRequestPolicy(),
    ],
    [ResourceType.CLOUDFRONT_PUBLICKEY, () => new CLOUDFRONT_PublicKey()],
    [
      ResourceType.CLOUDFRONT_REALTIMELOGCONFIG,
      () => new CLOUDFRONT_RealtimeLogConfig(),
    ],
    [
      ResourceType.CLOUDFRONT_RESPONSEHEADERSPOLICY,
      () => new CLOUDFRONT_ResponseHeadersPolicy(),
    ],
    [ResourceType.CLOUDHSMV2_CLUSTER, () => new CLOUDHSMV2_Cluster()],
    [ResourceType.CLOUDHSMV2_HSM, () => new CLOUDHSMV2_Hsm()],
    [ResourceType.CLOUDSEARCH_DOMAIN, () => new CLOUDSEARCH_Domain()],
    [
      ResourceType.CLOUDSEARCH_DOMAINSERVICEACCESSPOLICY,
      () => new CLOUDSEARCH_DomainServiceAccessPolicy(),
    ],
    [
      ResourceType.CLOUDTRAIL_EVENTDATASTORE,
      () => new CLOUDTRAIL_EventDataStore(),
    ],
    [
      ResourceType.CLOUDTRAIL_ORGANIZATIONDELEGATEDADMINACCOUNT,
      () => new CLOUDTRAIL_OrganizationDelegatedAdminAccount(),
    ],
    [ResourceType.CLOUDTRAIL_TRAIL, () => new CLOUDTRAIL_Trail()],
    [
      ResourceType.CLOUDWATCH_COMPOSITEALARM,
      () => new CLOUDWATCH_CompositeAlarm(),
    ],
    [ResourceType.CLOUDWATCH_DASHBOARD, () => new CLOUDWATCH_Dashboard()],
    [
      ResourceType.CLOUDWATCH_EVENTAPIDESTINATION,
      () => new CLOUDWATCH_EventApiDestination(),
    ],
    [ResourceType.CLOUDWATCH_EVENTARCHIVE, () => new CLOUDWATCH_EventArchive()],
    [ResourceType.CLOUDWATCH_EVENTBUS, () => new CLOUDWATCH_EventBus()],
    [
      ResourceType.CLOUDWATCH_EVENTBUSPOLICY,
      () => new CLOUDWATCH_EventBusPolicy(),
    ],
    [
      ResourceType.CLOUDWATCH_EVENTCONNECTION,
      () => new CLOUDWATCH_EventConnection(),
    ],
    [
      ResourceType.CLOUDWATCH_EVENTENDPOINT,
      () => new CLOUDWATCH_EventEndpoint(),
    ],
    [
      ResourceType.CLOUDWATCH_EVENTPERMISSION,
      () => new CLOUDWATCH_EventPermission(),
    ],
    [ResourceType.CLOUDWATCH_EVENTRULE, () => new CLOUDWATCH_EventRule()],
    [ResourceType.CLOUDWATCH_EVENTTARGET, () => new CLOUDWATCH_EventTarget()],
    [
      ResourceType.CLOUDWATCH_INTERNETMONITOR,
      () => new CLOUDWATCH_InternetMonitor(),
    ],
    [
      ResourceType.CLOUDWATCH_LOGACCOUNTPOLICY,
      () => new CLOUDWATCH_LogAccountPolicy(),
    ],
    [
      ResourceType.CLOUDWATCH_LOGDATAPROTECTIONPOLICY,
      () => new CLOUDWATCH_LogDataProtectionPolicy(),
    ],
    [
      ResourceType.CLOUDWATCH_LOGDESTINATION,
      () => new CLOUDWATCH_LogDestination(),
    ],
    [
      ResourceType.CLOUDWATCH_LOGDESTINATIONPOLICY,
      () => new CLOUDWATCH_LogDestinationPolicy(),
    ],
    [ResourceType.CLOUDWATCH_LOGGROUP, () => new CLOUDWATCH_LogGroup()],
    [
      ResourceType.CLOUDWATCH_LOGMETRICFILTER,
      () => new CLOUDWATCH_LogMetricFilter(),
    ],
    [
      ResourceType.CLOUDWATCH_LOGRESOURCEPOLICY,
      () => new CLOUDWATCH_LogResourcePolicy(),
    ],
    [ResourceType.CLOUDWATCH_LOGSTREAM, () => new CLOUDWATCH_LogStream()],
    [
      ResourceType.CLOUDWATCH_LOGSUBSCRIPTIONFILTER,
      () => new CLOUDWATCH_LogSubscriptionFilter(),
    ],
    [ResourceType.CLOUDWATCH_METRICALARM, () => new CLOUDWATCH_MetricAlarm()],
    [ResourceType.CLOUDWATCH_METRICSTREAM, () => new CLOUDWATCH_MetricStream()],
    [
      ResourceType.CLOUDWATCH_QUERYDEFINITION,
      () => new CLOUDWATCH_QueryDefinition(),
    ],
    [ResourceType.CODEARTIFACT_DOMAIN, () => new CODEARTIFACT_Domain()],
    [
      ResourceType.CODEARTIFACT_DOMAINPERMISSIONS,
      () => new CODEARTIFACT_DomainPermissions(),
    ],
    [ResourceType.CODEARTIFACT_REPOSITORY, () => new CODEARTIFACT_Repository()],
    [
      ResourceType.CODEARTIFACT_REPOSITORYPERMISSIONSPOLICY,
      () => new CODEARTIFACT_RepositoryPermissionsPolicy(),
    ],
    [ResourceType.CODEBUILD_PROJECT, () => new CODEBUILD_Project()],
    [ResourceType.CODEBUILD_REPORTGROUP, () => new CODEBUILD_ReportGroup()],
    [
      ResourceType.CODEBUILD_RESOURCEPOLICY,
      () => new CODEBUILD_ResourcePolicy(),
    ],
    [
      ResourceType.CODEBUILD_SOURCECREDENTIAL,
      () => new CODEBUILD_SourceCredential(),
    ],
    [ResourceType.CODEBUILD_WEBHOOK, () => new CODEBUILD_Webhook()],
    [
      ResourceType.CODECATALYST_DEVENVIRONMENT,
      () => new CODECATALYST_DevEnvironment(),
    ],
    [ResourceType.CODECATALYST_PROJECT, () => new CODECATALYST_Project()],
    [
      ResourceType.CODECATALYST_SOURCEREPOSITORY,
      () => new CODECATALYST_SourceRepository(),
    ],
    [
      ResourceType.CODECOMMIT_APPROVALRULETEMPLATE,
      () => new CODECOMMIT_ApprovalRuleTemplate(),
    ],
    [
      ResourceType.CODECOMMIT_APPROVALRULETEMPLATEASSOCIATION,
      () => new CODECOMMIT_ApprovalRuleTemplateAssociation(),
    ],
    [ResourceType.CODECOMMIT_REPOSITORY, () => new CODECOMMIT_Repository()],
    [ResourceType.CODECOMMIT_TRIGGER, () => new CODECOMMIT_Trigger()],
    [ResourceType.CODEDEPLOY_APPLICATION, () => new CODEDEPLOY_Application()],
    [
      ResourceType.CODEDEPLOY_DEPLOYMENTCONFIG,
      () => new CODEDEPLOY_DeploymentConfig(),
    ],
    [
      ResourceType.CODEDEPLOY_DEPLOYMENTGROUP,
      () => new CODEDEPLOY_DeploymentGroup(),
    ],
    [
      ResourceType.CODEGURUPROFILER_PROFILINGGROUP,
      () => new CODEGURUPROFILER_ProfilingGroup(),
    ],
    [
      ResourceType.CODEGURUREVIEWER_REPOSITORYASSOCIATION,
      () => new CODEGURUREVIEWER_RepositoryAssociation(),
    ],
    [
      ResourceType.CODEPIPELINE_CUSTOMACTIONTYPE,
      () => new CODEPIPELINE_CustomActionType(),
    ],
    [ResourceType.CODEPIPELINE_PIPELINE, () => new CODEPIPELINE_Pipeline()],
    [ResourceType.CODEPIPELINE_WEBHOOK, () => new CODEPIPELINE_Webhook()],
    [
      ResourceType.CODESTARCONNECTIONS_CONNECTION,
      () => new CODESTARCONNECTIONS_Connection(),
    ],
    [
      ResourceType.CODESTARCONNECTIONS_HOST,
      () => new CODESTARCONNECTIONS_Host(),
    ],
    [
      ResourceType.CODESTARNOTIFICATIONS_NOTIFICATIONRULE,
      () => new CODESTARNOTIFICATIONS_NotificationRule(),
    ],
    [ResourceType.COGNITO_IDENTITYPOOL, () => new COGNITO_IdentityPool()],
    [
      ResourceType.COGNITO_IDENTITYPOOLPROVIDERPRINCIPALTAG,
      () => new COGNITO_IdentityPoolProviderPrincipalTag(),
    ],
    [
      ResourceType.COGNITO_IDENTITYPOOLROLEATTACHMENT,
      () => new COGNITO_IdentityPoolRoleAttachment(),
    ],
    [
      ResourceType.COGNITO_IDENTITYPROVIDER,
      () => new COGNITO_IdentityProvider(),
    ],
    [
      ResourceType.COGNITO_MANAGEDUSERPOOLCLIENT,
      () => new COGNITO_ManagedUserPoolClient(),
    ],
    [ResourceType.COGNITO_RESOURCESERVER, () => new COGNITO_ResourceServer()],
    [
      ResourceType.COGNITO_RISKCONFIGURATION,
      () => new COGNITO_RiskConfiguration(),
    ],
    [ResourceType.COGNITO_USER, () => new COGNITO_User()],
    [ResourceType.COGNITO_USERGROUP, () => new COGNITO_UserGroup()],
    [ResourceType.COGNITO_USERINGROUP, () => new COGNITO_UserInGroup()],
    [ResourceType.COGNITO_USERPOOL, () => new COGNITO_UserPool()],
    [ResourceType.COGNITO_USERPOOLCLIENT, () => new COGNITO_UserPoolClient()],
    [ResourceType.COGNITO_USERPOOLDOMAIN, () => new COGNITO_UserPoolDomain()],
    [
      ResourceType.COGNITO_USERPOOLUICUSTOMIZATION,
      () => new COGNITO_UserPoolUICustomization(),
    ],
    [
      ResourceType.COMPREHEND_DOCUMENTCLASSIFIER,
      () => new COMPREHEND_DocumentClassifier(),
    ],
    [
      ResourceType.COMPREHEND_ENTITYRECOGNIZER,
      () => new COMPREHEND_EntityRecognizer(),
    ],
    [ResourceType.CONNECT_BOTASSOCIATION, () => new CONNECT_BotAssociation()],
    [ResourceType.CONNECT_CONTACTFLOW, () => new CONNECT_ContactFlow()],
    [
      ResourceType.CONNECT_CONTACTFLOWMODULE,
      () => new CONNECT_ContactFlowModule(),
    ],
    [
      ResourceType.CONNECT_HOURSOFOPERATION,
      () => new CONNECT_HoursOfOperation(),
    ],
    [ResourceType.CONNECT_INSTANCE, () => new CONNECT_Instance()],
    [
      ResourceType.CONNECT_INSTANCESTORAGECONFIG,
      () => new CONNECT_InstanceStorageConfig(),
    ],
    [
      ResourceType.CONNECT_LAMBDAFUNCTIONASSOCIATION,
      () => new CONNECT_LambdaFunctionAssociation(),
    ],
    [ResourceType.CONNECT_PHONENUMBER, () => new CONNECT_PhoneNumber()],
    [ResourceType.CONNECT_QUEUE, () => new CONNECT_Queue()],
    [ResourceType.CONNECT_QUICKCONNECT, () => new CONNECT_QuickConnect()],
    [ResourceType.CONNECT_ROUTINGPROFILE, () => new CONNECT_RoutingProfile()],
    [ResourceType.CONNECT_SECURITYPROFILE, () => new CONNECT_SecurityProfile()],
    [ResourceType.CONNECT_USER, () => new CONNECT_User()],
    [
      ResourceType.CONNECT_USERHIERARCHYGROUP,
      () => new CONNECT_UserHierarchyGroup(),
    ],
    [
      ResourceType.CONNECT_USERHIERARCHYSTRUCTURE,
      () => new CONNECT_UserHierarchyStructure(),
    ],
    [ResourceType.CONNECT_VOCABULARY, () => new CONNECT_Vocabulary()],
    [
      ResourceType.CONTROLTOWER_CONTROLTOWERCONTROL,
      () => new CONTROLTOWER_ControlTowerControl(),
    ],
    [
      ResourceType.CONTROLTOWER_LANDINGZONE,
      () => new CONTROLTOWER_LandingZone(),
    ],
    [
      ResourceType.COSTEXPLORER_ANOMALYMONITOR,
      () => new COSTEXPLORER_AnomalyMonitor(),
    ],
    [
      ResourceType.COSTEXPLORER_ANOMALYSUBSCRIPTION,
      () => new COSTEXPLORER_AnomalySubscription(),
    ],
    [
      ResourceType.COSTEXPLORER_COSTALLOCATIONTAG,
      () => new COSTEXPLORER_CostAllocationTag(),
    ],
    [
      ResourceType.COSTEXPLORER_COSTCATEGORY,
      () => new COSTEXPLORER_CostCategory(),
    ],
    [ResourceType.CUR_REPORTDEFINITION, () => new CUR_ReportDefinition()],
    [ResourceType.CUSTOMERPROFILES_DOMAIN, () => new CUSTOMERPROFILES_Domain()],
    [
      ResourceType.CUSTOMERPROFILES_PROFILE,
      () => new CUSTOMERPROFILES_Profile(),
    ],
    [ResourceType.DATAEXCHANGE_DATASET, () => new DATAEXCHANGE_DataSet()],
    [ResourceType.DATAEXCHANGE_REVISION, () => new DATAEXCHANGE_Revision()],
    [ResourceType.DATAPIPELINE_PIPELINE, () => new DATAPIPELINE_Pipeline()],
    [
      ResourceType.DATAPIPELINE_PIPELINEDEFINITION,
      () => new DATAPIPELINE_PipelineDefinition(),
    ],
    [ResourceType.DATASYNC_AGENT, () => new DATASYNC_Agent()],
    [ResourceType.DATASYNC_EFSLOCATION, () => new DATASYNC_EfsLocation()],
    [
      ResourceType.DATASYNC_FSXOPENZFSFILESYSTEM,
      () => new DATASYNC_FsxOpenZfsFileSystem(),
    ],
    [
      ResourceType.DATASYNC_LOCATIONAZUREBLOB,
      () => new DATASYNC_LocationAzureBlob(),
    ],
    [
      ResourceType.DATASYNC_LOCATIONFSXLUSTRE,
      () => new DATASYNC_LocationFsxLustre(),
    ],
    [
      ResourceType.DATASYNC_LOCATIONFSXONTAPFILESYSTEM,
      () => new DATASYNC_LocationFsxOntapFileSystem(),
    ],
    [
      ResourceType.DATASYNC_LOCATIONFSXWINDOWS,
      () => new DATASYNC_LocationFsxWindows(),
    ],
    [ResourceType.DATASYNC_LOCATIONHDFS, () => new DATASYNC_LocationHdfs()],
    [
      ResourceType.DATASYNC_LOCATIONOBJECTSTORAGE,
      () => new DATASYNC_LocationObjectStorage(),
    ],
    [ResourceType.DATASYNC_LOCATIONSMB, () => new DATASYNC_LocationSmb()],
    [ResourceType.DATASYNC_NFSLOCATION, () => new DATASYNC_NfsLocation()],
    [ResourceType.DATASYNC_S3LOCATION, () => new DATASYNC_S3Location()],
    [ResourceType.DATASYNC_TASK, () => new DATASYNC_Task()],
    [ResourceType.DATAZONE_DOMAIN, () => new DATAZONE_Domain()],
    [
      ResourceType.DATAZONE_ENVIRONMENTBLUEPRINTCONFIGURATION,
      () => new DATAZONE_EnvironmentBlueprintConfiguration(),
    ],
    [
      ResourceType.DATAZONE_ENVIRONMENTPROFILE,
      () => new DATAZONE_EnvironmentProfile(),
    ],
    [ResourceType.DATAZONE_FORMTYPE, () => new DATAZONE_FormType()],
    [ResourceType.DATAZONE_GLOSSARY, () => new DATAZONE_Glossary()],
    [ResourceType.DATAZONE_GLOSSARYTERM, () => new DATAZONE_GlossaryTerm()],
    [ResourceType.DATAZONE_PROJECT, () => new DATAZONE_Project()],
    [ResourceType.DAX_CLUSTER, () => new DAX_Cluster()],
    [ResourceType.DAX_PARAMETERGROUP, () => new DAX_ParameterGroup()],
    [ResourceType.DAX_SUBNETGROUP, () => new DAX_SubnetGroup()],
    [ResourceType.DETECTIVE_GRAPH, () => new DETECTIVE_Graph()],
    [
      ResourceType.DETECTIVE_INVITATIONACCEPTER,
      () => new DETECTIVE_InvitationAccepter(),
    ],
    [ResourceType.DETECTIVE_MEMBER, () => new DETECTIVE_Member()],
    [
      ResourceType.DETECTIVE_ORGANIZATIONADMINACCOUNT,
      () => new DETECTIVE_OrganizationAdminAccount(),
    ],
    [
      ResourceType.DETECTIVE_ORGANIZATIONCONFIGURATION,
      () => new DETECTIVE_OrganizationConfiguration(),
    ],
    [ResourceType.DEVICEFARM_DEVICEPOOL, () => new DEVICEFARM_DevicePool()],
    [
      ResourceType.DEVICEFARM_INSTANCEPROFILE,
      () => new DEVICEFARM_InstanceProfile(),
    ],
    [
      ResourceType.DEVICEFARM_NETWORKPROFILE,
      () => new DEVICEFARM_NetworkProfile(),
    ],
    [ResourceType.DEVICEFARM_PROJECT, () => new DEVICEFARM_Project()],
    [
      ResourceType.DEVICEFARM_TESTGRIDPROJECT,
      () => new DEVICEFARM_TestGridProject(),
    ],
    [ResourceType.DEVICEFARM_UPLOAD, () => new DEVICEFARM_Upload()],
    [
      ResourceType.DEVOPSGURU_EVENTSOURCESCONFIG,
      () => new DEVOPSGURU_EventSourcesConfig(),
    ],
    [
      ResourceType.DEVOPSGURU_NOTIFICATIONCHANNEL,
      () => new DEVOPSGURU_NotificationChannel(),
    ],
    [
      ResourceType.DEVOPSGURU_RESOURCECOLLECTION,
      () => new DEVOPSGURU_ResourceCollection(),
    ],
    [
      ResourceType.DEVOPSGURU_SERVICEINTEGRATION,
      () => new DEVOPSGURU_ServiceIntegration(),
    ],
    [ResourceType.DIRECTCONNECT_BGPPEER, () => new DIRECTCONNECT_BgpPeer()],
    [
      ResourceType.DIRECTCONNECT_CONNECTION,
      () => new DIRECTCONNECT_Connection(),
    ],
    [
      ResourceType.DIRECTCONNECT_CONNECTIONASSOCIATION,
      () => new DIRECTCONNECT_ConnectionAssociation(),
    ],
    [
      ResourceType.DIRECTCONNECT_CONNECTIONCONFIRMATION,
      () => new DIRECTCONNECT_ConnectionConfirmation(),
    ],
    [ResourceType.DIRECTCONNECT_GATEWAY, () => new DIRECTCONNECT_Gateway()],
    [
      ResourceType.DIRECTCONNECT_GATEWAYASSOCIATION,
      () => new DIRECTCONNECT_GatewayAssociation(),
    ],
    [
      ResourceType.DIRECTCONNECT_GATEWAYASSOCIATIONPROPOSAL,
      () => new DIRECTCONNECT_GatewayAssociationProposal(),
    ],
    [
      ResourceType.DIRECTCONNECT_HOSTEDCONNECTION,
      () => new DIRECTCONNECT_HostedConnection(),
    ],
    [
      ResourceType.DIRECTCONNECT_HOSTEDPRIVATEVIRTUALINTERFACE,
      () => new DIRECTCONNECT_HostedPrivateVirtualInterface(),
    ],
    [
      ResourceType.DIRECTCONNECT_HOSTEDPRIVATEVIRTUALINTERFACEACCEPTER,
      () => new DIRECTCONNECT_HostedPrivateVirtualInterfaceAccepter(),
    ],
    [
      ResourceType.DIRECTCONNECT_HOSTEDPUBLICVIRTUALINTERFACE,
      () => new DIRECTCONNECT_HostedPublicVirtualInterface(),
    ],
    [
      ResourceType.DIRECTCONNECT_HOSTEDPUBLICVIRTUALINTERFACEACCEPTER,
      () => new DIRECTCONNECT_HostedPublicVirtualInterfaceAccepter(),
    ],
    [
      ResourceType.DIRECTCONNECT_HOSTEDTRANSITVIRTUALINTERFACE,
      () => new DIRECTCONNECT_HostedTransitVirtualInterface(),
    ],
    [
      ResourceType.DIRECTCONNECT_HOSTEDTRANSITVIRTUALINTERFACEACCEPTOR,
      () => new DIRECTCONNECT_HostedTransitVirtualInterfaceAcceptor(),
    ],
    [
      ResourceType.DIRECTCONNECT_LINKAGGREGATIONGROUP,
      () => new DIRECTCONNECT_LinkAggregationGroup(),
    ],
    [
      ResourceType.DIRECTCONNECT_MACSECKEYASSOCIATION,
      () => new DIRECTCONNECT_MacsecKeyAssociation(),
    ],
    [
      ResourceType.DIRECTCONNECT_PRIVATEVIRTUALINTERFACE,
      () => new DIRECTCONNECT_PrivateVirtualInterface(),
    ],
    [
      ResourceType.DIRECTCONNECT_PUBLICVIRTUALINTERFACE,
      () => new DIRECTCONNECT_PublicVirtualInterface(),
    ],
    [
      ResourceType.DIRECTCONNECT_TRANSITVIRTUALINTERFACE,
      () => new DIRECTCONNECT_TransitVirtualInterface(),
    ],
    [
      ResourceType.DIRECTORYSERVICE_CONDITIONALFORWADER,
      () => new DIRECTORYSERVICE_ConditionalForwader(),
    ],
    [
      ResourceType.DIRECTORYSERVICE_DIRECTORY,
      () => new DIRECTORYSERVICE_Directory(),
    ],
    [
      ResourceType.DIRECTORYSERVICE_LOGSERVICE,
      () => new DIRECTORYSERVICE_LogService(),
    ],
    [
      ResourceType.DIRECTORYSERVICE_RADIUSSETTINGS,
      () => new DIRECTORYSERVICE_RadiusSettings(),
    ],
    [
      ResourceType.DIRECTORYSERVICE_SERVICEREGION,
      () => new DIRECTORYSERVICE_ServiceRegion(),
    ],
    [
      ResourceType.DIRECTORYSERVICE_SHAREDDIRECTORY,
      () => new DIRECTORYSERVICE_SharedDirectory(),
    ],
    [
      ResourceType.DIRECTORYSERVICE_SHAREDDIRECTORYACCEPTER,
      () => new DIRECTORYSERVICE_SharedDirectoryAccepter(),
    ],
    [ResourceType.DIRECTORYSERVICE_TRUST, () => new DIRECTORYSERVICE_Trust()],
    [ResourceType.DLM_LIFECYCLEPOLICY, () => new DLM_LifecyclePolicy()],
    [ResourceType.DMS_CERTIFICATE, () => new DMS_Certificate()],
    [ResourceType.DMS_ENDPOINT, () => new DMS_Endpoint()],
    [ResourceType.DMS_EVENTSUBSCRIPTION, () => new DMS_EventSubscription()],
    [ResourceType.DMS_REPLICATIONCONFIG, () => new DMS_ReplicationConfig()],
    [ResourceType.DMS_REPLICATIONINSTANCE, () => new DMS_ReplicationInstance()],
    [
      ResourceType.DMS_REPLICATIONSUBNETGROUP,
      () => new DMS_ReplicationSubnetGroup(),
    ],
    [ResourceType.DMS_REPLICATIONTASK, () => new DMS_ReplicationTask()],
    [ResourceType.DMS_S3ENDPOINT, () => new DMS_S3Endpoint()],
    [ResourceType.DOCDB_CLUSTER, () => new DOCDB_Cluster()],
    [ResourceType.DOCDB_CLUSTERINSTANCE, () => new DOCDB_ClusterInstance()],
    [
      ResourceType.DOCDB_CLUSTERPARAMETERGROUP,
      () => new DOCDB_ClusterParameterGroup(),
    ],
    [ResourceType.DOCDB_CLUSTERSNAPSHOT, () => new DOCDB_ClusterSnapshot()],
    [ResourceType.DOCDB_ELASTICCLUSTER, () => new DOCDB_ElasticCluster()],
    [ResourceType.DOCDB_EVENTSUBSCRIPTION, () => new DOCDB_EventSubscription()],
    [ResourceType.DOCDB_GLOBALCLUSTER, () => new DOCDB_GlobalCluster()],
    [ResourceType.DOCDB_SUBNETGROUP, () => new DOCDB_SubnetGroup()],
    [
      ResourceType.DRS_REPLICATIONCONFIGURATIONTEMPLATE,
      () => new DRS_ReplicationConfigurationTemplate(),
    ],
    [
      ResourceType.DYNAMODB_CONTRIBUTORINSIGHTS,
      () => new DYNAMODB_ContributorInsights(),
    ],
    [ResourceType.DYNAMODB_GLOBALTABLE, () => new DYNAMODB_GlobalTable()],
    [
      ResourceType.DYNAMODB_KINESISSTREAMINGDESTINATION,
      () => new DYNAMODB_KinesisStreamingDestination(),
    ],
    [ResourceType.DYNAMODB_RESOURCEPOLICY, () => new DYNAMODB_ResourcePolicy()],
    [ResourceType.DYNAMODB_TABLE, () => new DYNAMODB_Table()],
    [ResourceType.DYNAMODB_TABLEEXPORT, () => new DYNAMODB_TableExport()],
    [ResourceType.DYNAMODB_TABLEITEM, () => new DYNAMODB_TableItem()],
    [ResourceType.DYNAMODB_TABLEREPLICA, () => new DYNAMODB_TableReplica()],
    [ResourceType.DYNAMODB_TAG, () => new DYNAMODB_Tag()],
    [ResourceType.EBS_DEFAULTKMSKEY, () => new EBS_DefaultKmsKey()],
    [ResourceType.EBS_ENCRYPTIONBYDEFAULT, () => new EBS_EncryptionByDefault()],
    [ResourceType.EBS_FASTSNAPSHOTRESTORE, () => new EBS_FastSnapshotRestore()],
    [ResourceType.EBS_SNAPSHOT, () => new EBS_Snapshot()],
    [
      ResourceType.EBS_SNAPSHOTBLOCKPUBLICACCESS,
      () => new EBS_SnapshotBlockPublicAccess(),
    ],
    [ResourceType.EBS_SNAPSHOTCOPY, () => new EBS_SnapshotCopy()],
    [ResourceType.EBS_SNAPSHOTIMPORT, () => new EBS_SnapshotImport()],
    [ResourceType.EBS_VOLUME, () => new EBS_Volume()],
    [ResourceType.EC2_AMI, () => new EC2_Ami()],
    [ResourceType.EC2_AMICOPY, () => new EC2_AmiCopy()],
    [ResourceType.EC2_AMIFROMINSTANCE, () => new EC2_AmiFromInstance()],
    [ResourceType.EC2_AMILAUNCHPERMISSION, () => new EC2_AmiLaunchPermission()],
    [
      ResourceType.EC2_AVAILABILITYZONEGROUP,
      () => new EC2_AvailabilityZoneGroup(),
    ],
    [
      ResourceType.EC2_CAPACITYBLOCKRESERVATION,
      () => new EC2_CapacityBlockReservation(),
    ],
    [ResourceType.EC2_CAPACITYRESERVATION, () => new EC2_CapacityReservation()],
    [ResourceType.EC2_CARRIERGATEWAY, () => new EC2_CarrierGateway()],
    [ResourceType.EC2_CUSTOMERGATEWAY, () => new EC2_CustomerGateway()],
    [ResourceType.EC2_DEDICATEDHOST, () => new EC2_DedicatedHost()],
    [ResourceType.EC2_DEFAULTNETWORKACL, () => new EC2_DefaultNetworkAcl()],
    [ResourceType.EC2_DEFAULTROUTETABLE, () => new EC2_DefaultRouteTable()],
    [
      ResourceType.EC2_DEFAULTSECURITYGROUP,
      () => new EC2_DefaultSecurityGroup(),
    ],
    [ResourceType.EC2_DEFAULTSUBNET, () => new EC2_DefaultSubnet()],
    [ResourceType.EC2_DEFAULTVPC, () => new EC2_DefaultVpc()],
    [
      ResourceType.EC2_DEFAULTVPCDHCPOPTIONS,
      () => new EC2_DefaultVpcDhcpOptions(),
    ],
    [
      ResourceType.EC2_EGRESSONLYINTERNETGATEWAY,
      () => new EC2_EgressOnlyInternetGateway(),
    ],
    [ResourceType.EC2_EIP, () => new EC2_Eip()],
    [ResourceType.EC2_EIPASSOCIATION, () => new EC2_EipAssociation()],
    [ResourceType.EC2_EIPDOMAINNAME, () => new EC2_EipDomainName()],
    [ResourceType.EC2_FLEET, () => new EC2_Fleet()],
    [ResourceType.EC2_FLOWLOG, () => new EC2_FlowLog()],
    [
      ResourceType.EC2_IMAGEBLOCKPUBLICACCESS,
      () => new EC2_ImageBlockPublicAccess(),
    ],
    [ResourceType.EC2_INSTANCE, () => new EC2_Instance()],
    [
      ResourceType.EC2_INSTANCEMETADATADEFAULTS,
      () => new EC2_InstanceMetadataDefaults(),
    ],
    [ResourceType.EC2_INTERNETGATEWAY, () => new EC2_InternetGateway()],
    [
      ResourceType.EC2_INTERNETGATEWAYATTACHMENT,
      () => new EC2_InternetGatewayAttachment(),
    ],
    [ResourceType.EC2_KEYPAIR, () => new EC2_KeyPair()],
    [ResourceType.EC2_LAUNCHCONFIGURATION, () => new EC2_LaunchConfiguration()],
    [ResourceType.EC2_LAUNCHTEMPLATE, () => new EC2_LaunchTemplate()],
    [ResourceType.EC2_LOCALGATEWAYROUTE, () => new EC2_LocalGatewayRoute()],
    [
      ResourceType.EC2_LOCALGATEWAYROUTETABLEVPCASSOCIATION,
      () => new EC2_LocalGatewayRouteTableVpcAssociation(),
    ],
    [
      ResourceType.EC2_MAINROUTETABLEASSOCIATION,
      () => new EC2_MainRouteTableAssociation(),
    ],
    [ResourceType.EC2_MANAGEDPREFIXLIST, () => new EC2_ManagedPrefixList()],
    [
      ResourceType.EC2_MANAGEDPREFIXLISTENTRY,
      () => new EC2_ManagedPrefixListEntry(),
    ],
    [ResourceType.EC2_NATGATEWAY, () => new EC2_NatGateway()],
    [ResourceType.EC2_NETWORKACL, () => new EC2_NetworkAcl()],
    [
      ResourceType.EC2_NETWORKACLASSOCIATION,
      () => new EC2_NetworkAclAssociation(),
    ],
    [ResourceType.EC2_NETWORKACLRULE, () => new EC2_NetworkAclRule()],
    [
      ResourceType.EC2_NETWORKINSIGHTSANALYSIS,
      () => new EC2_NetworkInsightsAnalysis(),
    ],
    [ResourceType.EC2_NETWORKINSIGHTSPATH, () => new EC2_NetworkInsightsPath()],
    [ResourceType.EC2_NETWORKINTERFACE, () => new EC2_NetworkInterface()],
    [
      ResourceType.EC2_NETWORKINTERFACEATTACHMENT,
      () => new EC2_NetworkInterfaceAttachment(),
    ],
    [
      ResourceType.EC2_NETWORKINTERFACESECURITYGROUPATTACHMENT,
      () => new EC2_NetworkInterfaceSecurityGroupAttachment(),
    ],
    [
      ResourceType.EC2_PEERINGCONNECTIONOPTIONS,
      () => new EC2_PeeringConnectionOptions(),
    ],
    [ResourceType.EC2_PLACEMENTGROUP, () => new EC2_PlacementGroup()],
    [ResourceType.EC2_PROXYPROTOCOLPOLICY, () => new EC2_ProxyProtocolPolicy()],
    [ResourceType.EC2_ROUTE, () => new EC2_Route()],
    [ResourceType.EC2_ROUTETABLE, () => new EC2_RouteTable()],
    [
      ResourceType.EC2_ROUTETABLEASSOCIATION,
      () => new EC2_RouteTableAssociation(),
    ],
    [ResourceType.EC2_SECURITYGROUP, () => new EC2_SecurityGroup()],
    [
      ResourceType.EC2_SECURITYGROUPASSOCIATION,
      () => new EC2_SecurityGroupAssociation(),
    ],
    [ResourceType.EC2_SECURITYGROUPRULE, () => new EC2_SecurityGroupRule()],
    [ResourceType.EC2_SERIALCONSOLEACCESS, () => new EC2_SerialConsoleAccess()],
    [
      ResourceType.EC2_SNAPSHOTCREATEVOLUMEPERMISSION,
      () => new EC2_SnapshotCreateVolumePermission(),
    ],
    [
      ResourceType.EC2_SPOTDATAFEEDSUBSCRIPTION,
      () => new EC2_SpotDatafeedSubscription(),
    ],
    [ResourceType.EC2_SPOTFLEETREQUEST, () => new EC2_SpotFleetRequest()],
    [ResourceType.EC2_SPOTINSTANCEREQUEST, () => new EC2_SpotInstanceRequest()],
    [ResourceType.EC2_SUBNET, () => new EC2_Subnet()],
    [
      ResourceType.EC2_SUBNETCIDRRESERVATION,
      () => new EC2_SubnetCidrReservation(),
    ],
    [ResourceType.EC2_TAG, () => new EC2_Tag()],
    [ResourceType.EC2_TRAFFICMIRRORFILTER, () => new EC2_TrafficMirrorFilter()],
    [
      ResourceType.EC2_TRAFFICMIRRORFILTERRULE,
      () => new EC2_TrafficMirrorFilterRule(),
    ],
    [
      ResourceType.EC2_TRAFFICMIRRORSESSION,
      () => new EC2_TrafficMirrorSession(),
    ],
    [ResourceType.EC2_TRAFFICMIRRORTARGET, () => new EC2_TrafficMirrorTarget()],
    [ResourceType.EC2_VOLUMEATTACHMENT, () => new EC2_VolumeAttachment()],
    [ResourceType.EC2_VPC, () => new EC2_Vpc()],
    [ResourceType.EC2_VPCDHCPOPTIONS, () => new EC2_VpcDhcpOptions()],
    [
      ResourceType.EC2_VPCDHCPOPTIONSASSOCIATION,
      () => new EC2_VpcDhcpOptionsAssociation(),
    ],
    [ResourceType.EC2_VPCENDPOINT, () => new EC2_VpcEndpoint()],
    [
      ResourceType.EC2_VPCENDPOINTCONNECTIONACCEPTER,
      () => new EC2_VpcEndpointConnectionAccepter(),
    ],
    [
      ResourceType.EC2_VPCENDPOINTCONNECTIONNOTIFICATION,
      () => new EC2_VpcEndpointConnectionNotification(),
    ],
    [ResourceType.EC2_VPCENDPOINTPOLICY, () => new EC2_VpcEndpointPolicy()],
    [
      ResourceType.EC2_VPCENDPOINTROUTETABLEASSOCIATION,
      () => new EC2_VpcEndpointRouteTableAssociation(),
    ],
    [ResourceType.EC2_VPCENDPOINTSERVICE, () => new EC2_VpcEndpointService()],
    [
      ResourceType.EC2_VPCENDPOINTSERVICEALLOWEDPRINCIPLE,
      () => new EC2_VpcEndpointServiceAllowedPrinciple(),
    ],
    [
      ResourceType.EC2_VPCENDPOINTSUBNETASSOCIATION,
      () => new EC2_VpcEndpointSubnetAssociation(),
    ],
    [ResourceType.EC2_VPCIPAM, () => new EC2_VpcIpam()],
    [
      ResourceType.EC2_VPCIPAMORGANIZATIONADMINACCOUNT,
      () => new EC2_VpcIpamOrganizationAdminAccount(),
    ],
    [ResourceType.EC2_VPCIPAMPOOL, () => new EC2_VpcIpamPool()],
    [ResourceType.EC2_VPCIPAMPOOLCIDR, () => new EC2_VpcIpamPoolCidr()],
    [
      ResourceType.EC2_VPCIPAMPOOLCIDRALLOCATION,
      () => new EC2_VpcIpamPoolCidrAllocation(),
    ],
    [
      ResourceType.EC2_VPCIPAMPREVIEWNEXTCIDR,
      () => new EC2_VpcIpamPreviewNextCidr(),
    ],
    [
      ResourceType.EC2_VPCIPAMRESOURCEDISCOVERY,
      () => new EC2_VpcIpamResourceDiscovery(),
    ],
    [
      ResourceType.EC2_VPCIPAMRESOURCEDISCOVERYASSOCIATION,
      () => new EC2_VpcIpamResourceDiscoveryAssociation(),
    ],
    [ResourceType.EC2_VPCIPAMSCOPE, () => new EC2_VpcIpamScope()],
    [
      ResourceType.EC2_VPCIPV4CIDRBLOCKASSOCIATION,
      () => new EC2_VpcIpv4CidrBlockAssociation(),
    ],
    [
      ResourceType.EC2_VPCIPV6CIDRBLOCKASSOCIATION,
      () => new EC2_VpcIpv6CidrBlockAssociation(),
    ],
    [
      ResourceType.EC2_VPCNETWORKPERFORMANCEMETRICSUBSCRIPTION,
      () => new EC2_VpcNetworkPerformanceMetricSubscription(),
    ],
    [
      ResourceType.EC2_VPCPEERINGCONNECTION,
      () => new EC2_VpcPeeringConnection(),
    ],
    [
      ResourceType.EC2_VPCPEERINGCONNECTIONACCEPTER,
      () => new EC2_VpcPeeringConnectionAccepter(),
    ],
    [ResourceType.EC2_VPNCONNECTION, () => new EC2_VpnConnection()],
    [ResourceType.EC2_VPNCONNECTIONROUTE, () => new EC2_VpnConnectionRoute()],
    [ResourceType.EC2_VPNGATEWAY, () => new EC2_VpnGateway()],
    [
      ResourceType.EC2_VPNGATEWAYATTACHMENT,
      () => new EC2_VpnGatewayAttachment(),
    ],
    [
      ResourceType.EC2_VPNGATEWAYROUTEPROPAGATION,
      () => new EC2_VpnGatewayRoutePropagation(),
    ],
    [
      ResourceType.EC2CLIENTVPN_AUTHORIZATIONRULE,
      () => new EC2CLIENTVPN_AuthorizationRule(),
    ],
    [ResourceType.EC2CLIENTVPN_ENDPOINT, () => new EC2CLIENTVPN_Endpoint()],
    [
      ResourceType.EC2CLIENTVPN_NETWORKASSOCIATION,
      () => new EC2CLIENTVPN_NetworkAssociation(),
    ],
    [ResourceType.EC2CLIENTVPN_ROUTE, () => new EC2CLIENTVPN_Route()],
    [
      ResourceType.EC2TRANSITGATEWAY_CONNECT,
      () => new EC2TRANSITGATEWAY_Connect(),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_CONNECTPEER,
      () => new EC2TRANSITGATEWAY_ConnectPeer(),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_INSTANCECONNECTENDPOINT,
      () => new EC2TRANSITGATEWAY_InstanceConnectEndpoint(),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_INSTANCESTATE,
      () => new EC2TRANSITGATEWAY_InstanceState(),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_MULTICASTDOMAIN,
      () => new EC2TRANSITGATEWAY_MulticastDomain(),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_MULTICASTDOMAINASSOCIATION,
      () => new EC2TRANSITGATEWAY_MulticastDomainAssociation(),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_MULTICASTGROUPMEMBER,
      () => new EC2TRANSITGATEWAY_MulticastGroupMember(),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_MULTICASTGROUPSOURCE,
      () => new EC2TRANSITGATEWAY_MulticastGroupSource(),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_PEERINGATTACHMENT,
      () => new EC2TRANSITGATEWAY_PeeringAttachment(),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_PEERINGATTACHMENTACCEPTER,
      () => new EC2TRANSITGATEWAY_PeeringAttachmentAccepter(),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_POLICYTABLE,
      () => new EC2TRANSITGATEWAY_PolicyTable(),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_POLICYTABLEASSOCIATION,
      () => new EC2TRANSITGATEWAY_PolicyTableAssociation(),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_PREFIXLISTREFERENCE,
      () => new EC2TRANSITGATEWAY_PrefixListReference(),
    ],
    [ResourceType.EC2TRANSITGATEWAY_ROUTE, () => new EC2TRANSITGATEWAY_Route()],
    [
      ResourceType.EC2TRANSITGATEWAY_ROUTETABLE,
      () => new EC2TRANSITGATEWAY_RouteTable(),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_ROUTETABLEASSOCIATION,
      () => new EC2TRANSITGATEWAY_RouteTableAssociation(),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_ROUTETABLEPROPAGATION,
      () => new EC2TRANSITGATEWAY_RouteTablePropagation(),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_TRANSITGATEWAY,
      () => new EC2TRANSITGATEWAY_TransitGateway(),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_VPCATTACHMENT,
      () => new EC2TRANSITGATEWAY_VpcAttachment(),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_VPCATTACHMENTACCEPTER,
      () => new EC2TRANSITGATEWAY_VpcAttachmentAccepter(),
    ],
    [ResourceType.ECR_LIFECYCLEPOLICY, () => new ECR_LifecyclePolicy()],
    [
      ResourceType.ECR_PULLTHROUGHCACHERULE,
      () => new ECR_PullThroughCacheRule(),
    ],
    [ResourceType.ECR_REGISTRYPOLICY, () => new ECR_RegistryPolicy()],
    [
      ResourceType.ECR_REGISTRYSCANNINGCONFIGURATION,
      () => new ECR_RegistryScanningConfiguration(),
    ],
    [
      ResourceType.ECR_REPLICATIONCONFIGURATION,
      () => new ECR_ReplicationConfiguration(),
    ],
    [ResourceType.ECR_REPOSITORY, () => new ECR_Repository()],
    [
      ResourceType.ECR_REPOSITORYCREATIONTEMPLATE,
      () => new ECR_RepositoryCreationTemplate(),
    ],
    [ResourceType.ECR_REPOSITORYPOLICY, () => new ECR_RepositoryPolicy()],
    [ResourceType.ECRPUBLIC_REPOSITORY, () => new ECRPUBLIC_Repository()],
    [
      ResourceType.ECRPUBLIC_REPOSITORYPOLICY,
      () => new ECRPUBLIC_RepositoryPolicy(),
    ],
    [
      ResourceType.ECS_ACCOUNTSETTINGDEFAULT,
      () => new ECS_AccountSettingDefault(),
    ],
    [ResourceType.ECS_CAPACITYPROVIDER, () => new ECS_CapacityProvider()],
    [ResourceType.ECS_CLUSTER, () => new ECS_Cluster()],
    [
      ResourceType.ECS_CLUSTERCAPACITYPROVIDERS,
      () => new ECS_ClusterCapacityProviders(),
    ],
    [ResourceType.ECS_SERVICE, () => new ECS_Service()],
    [ResourceType.ECS_TAG, () => new ECS_Tag()],
    [ResourceType.ECS_TASKDEFINITION, () => new ECS_TaskDefinition()],
    [ResourceType.ECS_TASKSET, () => new ECS_TaskSet()],
    [ResourceType.EFS_ACCESSPOINT, () => new EFS_AccessPoint()],
    [ResourceType.EFS_BACKUPPOLICY, () => new EFS_BackupPolicy()],
    [ResourceType.EFS_FILESYSTEM, () => new EFS_FileSystem()],
    [ResourceType.EFS_FILESYSTEMPOLICY, () => new EFS_FileSystemPolicy()],
    [ResourceType.EFS_MOUNTTARGET, () => new EFS_MountTarget()],
    [
      ResourceType.EFS_REPLICATIONCONFIGURATION,
      () => new EFS_ReplicationConfiguration(),
    ],
    [ResourceType.EKS_ACCESSENTRY, () => new EKS_AccessEntry()],
    [
      ResourceType.EKS_ACCESSPOLICYASSOCIATION,
      () => new EKS_AccessPolicyAssociation(),
    ],
    [ResourceType.EKS_ADDON, () => new EKS_Addon()],
    [ResourceType.EKS_CLUSTER, () => new EKS_Cluster()],
    [ResourceType.EKS_FARGATEPROFILE, () => new EKS_FargateProfile()],
    [
      ResourceType.EKS_IDENTITYPROVIDERCONFIG,
      () => new EKS_IdentityProviderConfig(),
    ],
    [ResourceType.EKS_NODEGROUP, () => new EKS_NodeGroup()],
    [
      ResourceType.EKS_PODIDENTITYASSOCIATION,
      () => new EKS_PodIdentityAssociation(),
    ],
    [ResourceType.ELASTICACHE_CLUSTER, () => new ELASTICACHE_Cluster()],
    [
      ResourceType.ELASTICACHE_GLOBALREPLICATIONGROUP,
      () => new ELASTICACHE_GlobalReplicationGroup(),
    ],
    [
      ResourceType.ELASTICACHE_PARAMETERGROUP,
      () => new ELASTICACHE_ParameterGroup(),
    ],
    [
      ResourceType.ELASTICACHE_REPLICATIONGROUP,
      () => new ELASTICACHE_ReplicationGroup(),
    ],
    [
      ResourceType.ELASTICACHE_SERVERLESSCACHE,
      () => new ELASTICACHE_ServerlessCache(),
    ],
    [ResourceType.ELASTICACHE_SUBNETGROUP, () => new ELASTICACHE_SubnetGroup()],
    [ResourceType.ELASTICACHE_USER, () => new ELASTICACHE_User()],
    [ResourceType.ELASTICACHE_USERGROUP, () => new ELASTICACHE_UserGroup()],
    [
      ResourceType.ELASTICACHE_USERGROUPASSOCIATION,
      () => new ELASTICACHE_UserGroupAssociation(),
    ],
    [
      ResourceType.ELASTICBEANSTALK_APPLICATION,
      () => new ELASTICBEANSTALK_Application(),
    ],
    [
      ResourceType.ELASTICBEANSTALK_APPLICATIONVERSION,
      () => new ELASTICBEANSTALK_ApplicationVersion(),
    ],
    [
      ResourceType.ELASTICBEANSTALK_CONFIGURATIONTEMPLATE,
      () => new ELASTICBEANSTALK_ConfigurationTemplate(),
    ],
    [
      ResourceType.ELASTICBEANSTALK_ENVIRONMENT,
      () => new ELASTICBEANSTALK_Environment(),
    ],
    [ResourceType.ELASTICSEARCH_DOMAIN, () => new ELASTICSEARCH_Domain()],
    [
      ResourceType.ELASTICSEARCH_DOMAINPOLICY,
      () => new ELASTICSEARCH_DomainPolicy(),
    ],
    [
      ResourceType.ELASTICSEARCH_DOMAINSAMLOPTIONS,
      () => new ELASTICSEARCH_DomainSamlOptions(),
    ],
    [
      ResourceType.ELASTICSEARCH_VPCENDPOINT,
      () => new ELASTICSEARCH_VpcEndpoint(),
    ],
    [
      ResourceType.ELASTICTRANSCODER_PIPELINE,
      () => new ELASTICTRANSCODER_Pipeline(),
    ],
    [
      ResourceType.ELASTICTRANSCODER_PRESET,
      () => new ELASTICTRANSCODER_Preset(),
    ],
    [
      ResourceType.ELB_APPCOOKIESTICKINESSPOLICY,
      () => new ELB_AppCookieStickinessPolicy(),
    ],
    [ResourceType.ELB_ATTACHMENT, () => new ELB_Attachment()],
    [ResourceType.ELB_LISTENERPOLICY, () => new ELB_ListenerPolicy()],
    [ResourceType.ELB_LOADBALANCER, () => new ELB_LoadBalancer()],
    [
      ResourceType.ELB_LOADBALANCERBACKENDSERVERPOLICY,
      () => new ELB_LoadBalancerBackendServerPolicy(),
    ],
    [
      ResourceType.ELB_LOADBALANCERCOOKIESTICKINESSPOLICY,
      () => new ELB_LoadBalancerCookieStickinessPolicy(),
    ],
    [ResourceType.ELB_LOADBALANCERPOLICY, () => new ELB_LoadBalancerPolicy()],
    [
      ResourceType.ELB_SSLNEGOTIATIONPOLICY,
      () => new ELB_SslNegotiationPolicy(),
    ],
    [
      ResourceType.EMR_BLOCKPUBLICACCESSCONFIGURATION,
      () => new EMR_BlockPublicAccessConfiguration(),
    ],
    [ResourceType.EMR_CLUSTER, () => new EMR_Cluster()],
    [ResourceType.EMR_INSTANCEFLEET, () => new EMR_InstanceFleet()],
    [ResourceType.EMR_INSTANCEGROUP, () => new EMR_InstanceGroup()],
    [
      ResourceType.EMR_MANAGEDSCALINGPOLICY,
      () => new EMR_ManagedScalingPolicy(),
    ],
    [
      ResourceType.EMR_SECURITYCONFIGURATION,
      () => new EMR_SecurityConfiguration(),
    ],
    [ResourceType.EMR_STUDIO, () => new EMR_Studio()],
    [
      ResourceType.EMR_STUDIOSESSIONMAPPING,
      () => new EMR_StudioSessionMapping(),
    ],
    [
      ResourceType.EMRCONTAINERS_JOBTEMPLATE,
      () => new EMRCONTAINERS_JobTemplate(),
    ],
    [
      ResourceType.EMRCONTAINERS_VIRTUALCLUSTER,
      () => new EMRCONTAINERS_VirtualCluster(),
    ],
    [
      ResourceType.EMRSERVERLESS_APPLICATION,
      () => new EMRSERVERLESS_Application(),
    ],
    [ResourceType.EVIDENTLY_FEATURE, () => new EVIDENTLY_Feature()],
    [ResourceType.EVIDENTLY_LAUNCH, () => new EVIDENTLY_Launch()],
    [ResourceType.EVIDENTLY_PROJECT, () => new EVIDENTLY_Project()],
    [ResourceType.EVIDENTLY_SEGMENT, () => new EVIDENTLY_Segment()],
    [ResourceType.FINSPACE_KXCLUSTER, () => new FINSPACE_KxCluster()],
    [ResourceType.FINSPACE_KXDATABASE, () => new FINSPACE_KxDatabase()],
    [ResourceType.FINSPACE_KXDATAVIEW, () => new FINSPACE_KxDataview()],
    [ResourceType.FINSPACE_KXENVIRONMENT, () => new FINSPACE_KxEnvironment()],
    [ResourceType.FINSPACE_KXSCALINGGROUP, () => new FINSPACE_KxScalingGroup()],
    [ResourceType.FINSPACE_KXUSER, () => new FINSPACE_KxUser()],
    [ResourceType.FINSPACE_KXVOLUME, () => new FINSPACE_KxVolume()],
    [ResourceType.FIS_EXPERIMENTTEMPLATE, () => new FIS_ExperimentTemplate()],
    [ResourceType.FMS_ADMINACCOUNT, () => new FMS_AdminAccount()],
    [ResourceType.FMS_POLICY, () => new FMS_Policy()],
    [ResourceType.FMS_RESOURCESET, () => new FMS_ResourceSet()],
    [ResourceType.FSX_BACKUP, () => new FSX_Backup()],
    [
      ResourceType.FSX_DATAREPOSITORYASSOCIATION,
      () => new FSX_DataRepositoryAssociation(),
    ],
    [ResourceType.FSX_FILECACHE, () => new FSX_FileCache()],
    [ResourceType.FSX_LUSTREFILESYSTEM, () => new FSX_LustreFileSystem()],
    [ResourceType.FSX_ONTAPFILESYSTEM, () => new FSX_OntapFileSystem()],
    [
      ResourceType.FSX_ONTAPSTORAGEVIRTUALMACHINE,
      () => new FSX_OntapStorageVirtualMachine(),
    ],
    [ResourceType.FSX_ONTAPVOLUME, () => new FSX_OntapVolume()],
    [ResourceType.FSX_OPENZFSFILESYSTEM, () => new FSX_OpenZfsFileSystem()],
    [ResourceType.FSX_OPENZFSSNAPSHOT, () => new FSX_OpenZfsSnapshot()],
    [ResourceType.FSX_OPENZFSVOLUME, () => new FSX_OpenZfsVolume()],
    [ResourceType.FSX_WINDOWSFILESYSTEM, () => new FSX_WindowsFileSystem()],
    [ResourceType.GAMELIFT_ALIAS, () => new GAMELIFT_Alias()],
    [ResourceType.GAMELIFT_BUILD, () => new GAMELIFT_Build()],
    [ResourceType.GAMELIFT_FLEET, () => new GAMELIFT_Fleet()],
    [
      ResourceType.GAMELIFT_GAMESERVERGROUP,
      () => new GAMELIFT_GameServerGroup(),
    ],
    [
      ResourceType.GAMELIFT_GAMESESSIONQUEUE,
      () => new GAMELIFT_GameSessionQueue(),
    ],
    [
      ResourceType.GAMELIFT_MATCHMAKINGCONFIGURATION,
      () => new GAMELIFT_MatchmakingConfiguration(),
    ],
    [
      ResourceType.GAMELIFT_MATCHMAKINGRULESET,
      () => new GAMELIFT_MatchmakingRuleSet(),
    ],
    [ResourceType.GAMELIFT_SCRIPT, () => new GAMELIFT_Script()],
    [ResourceType.GLACIER_VAULT, () => new GLACIER_Vault()],
    [ResourceType.GLACIER_VAULTLOCK, () => new GLACIER_VaultLock()],
    [
      ResourceType.GLOBALACCELERATOR_ACCELERATOR,
      () => new GLOBALACCELERATOR_Accelerator(),
    ],
    [
      ResourceType.GLOBALACCELERATOR_CROSSACCOUNTATTACHMENT,
      () => new GLOBALACCELERATOR_CrossAccountAttachment(),
    ],
    [
      ResourceType.GLOBALACCELERATOR_CUSTOMROUTINGACCELERATOR,
      () => new GLOBALACCELERATOR_CustomRoutingAccelerator(),
    ],
    [
      ResourceType.GLOBALACCELERATOR_CUSTOMROUTINGENDPOINTGROUP,
      () => new GLOBALACCELERATOR_CustomRoutingEndpointGroup(),
    ],
    [
      ResourceType.GLOBALACCELERATOR_CUSTOMROUTINGLISTENER,
      () => new GLOBALACCELERATOR_CustomRoutingListener(),
    ],
    [
      ResourceType.GLOBALACCELERATOR_ENDPOINTGROUP,
      () => new GLOBALACCELERATOR_EndpointGroup(),
    ],
    [
      ResourceType.GLOBALACCELERATOR_LISTENER,
      () => new GLOBALACCELERATOR_Listener(),
    ],
    [ResourceType.GLUE_CATALOGDATABASE, () => new GLUE_CatalogDatabase()],
    [ResourceType.GLUE_CATALOGTABLE, () => new GLUE_CatalogTable()],
    [
      ResourceType.GLUE_CATALOGTABLEOPTIMIZER,
      () => new GLUE_CatalogTableOptimizer(),
    ],
    [ResourceType.GLUE_CLASSIFIER, () => new GLUE_Classifier()],
    [ResourceType.GLUE_CONNECTION, () => new GLUE_Connection()],
    [ResourceType.GLUE_CRAWLER, () => new GLUE_Crawler()],
    [
      ResourceType.GLUE_DATACATALOGENCRYPTIONSETTINGS,
      () => new GLUE_DataCatalogEncryptionSettings(),
    ],
    [ResourceType.GLUE_DATAQUALITYRULESET, () => new GLUE_DataQualityRuleset()],
    [ResourceType.GLUE_DEVENDPOINT, () => new GLUE_DevEndpoint()],
    [ResourceType.GLUE_JOB, () => new GLUE_Job()],
    [ResourceType.GLUE_MLTRANSFORM, () => new GLUE_MLTransform()],
    [ResourceType.GLUE_PARTITION, () => new GLUE_Partition()],
    [ResourceType.GLUE_PARTITIONINDEX, () => new GLUE_PartitionIndex()],
    [ResourceType.GLUE_REGISTRY, () => new GLUE_Registry()],
    [ResourceType.GLUE_RESOURCEPOLICY, () => new GLUE_ResourcePolicy()],
    [ResourceType.GLUE_SCHEMA, () => new GLUE_Schema()],
    [
      ResourceType.GLUE_SECURITYCONFIGURATION,
      () => new GLUE_SecurityConfiguration(),
    ],
    [ResourceType.GLUE_TRIGGER, () => new GLUE_Trigger()],
    [
      ResourceType.GLUE_USERDEFINEDFUNCTION,
      () => new GLUE_UserDefinedFunction(),
    ],
    [ResourceType.GLUE_WORKFLOW, () => new GLUE_Workflow()],
    [
      ResourceType.GRAFANA_LICENSEASSOCIATION,
      () => new GRAFANA_LicenseAssociation(),
    ],
    [ResourceType.GRAFANA_ROLEASSOCIATION, () => new GRAFANA_RoleAssociation()],
    [ResourceType.GRAFANA_WORKSPACE, () => new GRAFANA_Workspace()],
    [ResourceType.GRAFANA_WORKSPACEAPIKEY, () => new GRAFANA_WorkspaceApiKey()],
    [
      ResourceType.GRAFANA_WORKSPACESAMLCONFIGURATION,
      () => new GRAFANA_WorkspaceSamlConfiguration(),
    ],
    [
      ResourceType.GRAFANA_WORKSPACESERVICEACCOUNT,
      () => new GRAFANA_WorkspaceServiceAccount(),
    ],
    [
      ResourceType.GRAFANA_WORKSPACESERVICEACCOUNTTOKEN,
      () => new GRAFANA_WorkspaceServiceAccountToken(),
    ],
    [ResourceType.GUARDDUTY_DETECTOR, () => new GUARDDUTY_Detector()],
    [
      ResourceType.GUARDDUTY_DETECTORFEATURE,
      () => new GUARDDUTY_DetectorFeature(),
    ],
    [ResourceType.GUARDDUTY_FILTER, () => new GUARDDUTY_Filter()],
    [
      ResourceType.GUARDDUTY_INVITEACCEPTER,
      () => new GUARDDUTY_InviteAccepter(),
    ],
    [ResourceType.GUARDDUTY_IPSET, () => new GUARDDUTY_IPSet()],
    [
      ResourceType.GUARDDUTY_MALWAREPROTECTIONPLAN,
      () => new GUARDDUTY_MalwareProtectionPlan(),
    ],
    [ResourceType.GUARDDUTY_MEMBER, () => new GUARDDUTY_Member()],
    [
      ResourceType.GUARDDUTY_ORGANIZATIONADMINACCOUNT,
      () => new GUARDDUTY_OrganizationAdminAccount(),
    ],
    [
      ResourceType.GUARDDUTY_ORGANIZATIONCONFIGURATION,
      () => new GUARDDUTY_OrganizationConfiguration(),
    ],
    [
      ResourceType.GUARDDUTY_ORGANIZATIONCONFIGURATIONFEATURE,
      () => new GUARDDUTY_OrganizationConfigurationFeature(),
    ],
    [
      ResourceType.GUARDDUTY_PUBLISHINGDESTINATION,
      () => new GUARDDUTY_PublishingDestination(),
    ],
    [
      ResourceType.GUARDDUTY_THREATINTELSET,
      () => new GUARDDUTY_ThreatIntelSet(),
    ],
    [ResourceType.IAM_ACCESSKEY, () => new IAM_AccessKey()],
    [ResourceType.IAM_ACCOUNTALIAS, () => new IAM_AccountAlias()],
    [
      ResourceType.IAM_ACCOUNTPASSWORDPOLICY,
      () => new IAM_AccountPasswordPolicy(),
    ],
    [ResourceType.IAM_GROUP, () => new IAM_Group()],
    [ResourceType.IAM_GROUPMEMBERSHIP, () => new IAM_GroupMembership()],
    [ResourceType.IAM_GROUPPOLICY, () => new IAM_GroupPolicy()],
    [
      ResourceType.IAM_GROUPPOLICYATTACHMENT,
      () => new IAM_GroupPolicyAttachment(),
    ],
    [ResourceType.IAM_INSTANCEPROFILE, () => new IAM_InstanceProfile()],
    [
      ResourceType.IAM_OPENIDCONNECTPROVIDER,
      () => new IAM_OpenIdConnectProvider(),
    ],
    [ResourceType.IAM_POLICY, () => new IAM_Policy()],
    [ResourceType.IAM_POLICYATTACHMENT, () => new IAM_PolicyAttachment()],
    [ResourceType.IAM_ROLE, () => new IAM_Role()],
    [ResourceType.IAM_ROLEPOLICY, () => new IAM_RolePolicy()],
    [
      ResourceType.IAM_ROLEPOLICYATTACHMENT,
      () => new IAM_RolePolicyAttachment(),
    ],
    [ResourceType.IAM_SAMLPROVIDER, () => new IAM_SamlProvider()],
    [
      ResourceType.IAM_SECURITYTOKENSERVICEPREFERENCES,
      () => new IAM_SecurityTokenServicePreferences(),
    ],
    [ResourceType.IAM_SERVERCERTIFICATE, () => new IAM_ServerCertificate()],
    [ResourceType.IAM_SERVICELINKEDROLE, () => new IAM_ServiceLinkedRole()],
    [
      ResourceType.IAM_SERVICESPECIFICCREDENTIAL,
      () => new IAM_ServiceSpecificCredential(),
    ],
    [ResourceType.IAM_SIGNINGCERTIFICATE, () => new IAM_SigningCertificate()],
    [ResourceType.IAM_SSHKEY, () => new IAM_SshKey()],
    [ResourceType.IAM_USER, () => new IAM_User()],
    [ResourceType.IAM_USERGROUPMEMBERSHIP, () => new IAM_UserGroupMembership()],
    [ResourceType.IAM_USERLOGINPROFILE, () => new IAM_UserLoginProfile()],
    [ResourceType.IAM_USERPOLICY, () => new IAM_UserPolicy()],
    [
      ResourceType.IAM_USERPOLICYATTACHMENT,
      () => new IAM_UserPolicyAttachment(),
    ],
    [ResourceType.IAM_VIRTUALMFADEVICE, () => new IAM_VirtualMfaDevice()],
    [ResourceType.IDENTITYSTORE_GROUP, () => new IDENTITYSTORE_Group()],
    [
      ResourceType.IDENTITYSTORE_GROUPMEMBERSHIP,
      () => new IDENTITYSTORE_GroupMembership(),
    ],
    [ResourceType.IDENTITYSTORE_USER, () => new IDENTITYSTORE_User()],
    [ResourceType.IMAGEBUILDER_COMPONENT, () => new IMAGEBUILDER_Component()],
    [
      ResourceType.IMAGEBUILDER_CONTAINERRECIPE,
      () => new IMAGEBUILDER_ContainerRecipe(),
    ],
    [
      ResourceType.IMAGEBUILDER_DISTRIBUTIONCONFIGURATION,
      () => new IMAGEBUILDER_DistributionConfiguration(),
    ],
    [ResourceType.IMAGEBUILDER_IMAGE, () => new IMAGEBUILDER_Image()],
    [
      ResourceType.IMAGEBUILDER_IMAGEPIPELINE,
      () => new IMAGEBUILDER_ImagePipeline(),
    ],
    [
      ResourceType.IMAGEBUILDER_IMAGERECIPE,
      () => new IMAGEBUILDER_ImageRecipe(),
    ],
    [
      ResourceType.IMAGEBUILDER_INFRASTRUCTURECONFIGURATION,
      () => new IMAGEBUILDER_InfrastructureConfiguration(),
    ],
    [ResourceType.IMAGEBUILDER_WORKFLOW, () => new IMAGEBUILDER_Workflow()],
    [
      ResourceType.INSPECTOR_ASSESSMENTTARGET,
      () => new INSPECTOR_AssessmentTarget(),
    ],
    [
      ResourceType.INSPECTOR_ASSESSMENTTEMPLATE,
      () => new INSPECTOR_AssessmentTemplate(),
    ],
    [ResourceType.INSPECTOR_RESOURCEGROUP, () => new INSPECTOR_ResourceGroup()],
    [
      ResourceType.INSPECTOR2_DELEGATEDADMINACCOUNT,
      () => new INSPECTOR2_DelegatedAdminAccount(),
    ],
    [ResourceType.INSPECTOR2_ENABLER, () => new INSPECTOR2_Enabler()],
    [
      ResourceType.INSPECTOR2_MEMBERASSOCIATION,
      () => new INSPECTOR2_MemberAssociation(),
    ],
    [
      ResourceType.INSPECTOR2_ORGANIZATIONCONFIGURATION,
      () => new INSPECTOR2_OrganizationConfiguration(),
    ],
    [ResourceType.IOT_AUTHORIZER, () => new IOT_Authorizer()],
    [ResourceType.IOT_BILLINGGROUP, () => new IOT_BillingGroup()],
    [ResourceType.IOT_CACERTIFICATE, () => new IOT_CaCertificate()],
    [ResourceType.IOT_CERTIFICATE, () => new IOT_Certificate()],
    [ResourceType.IOT_DOMAINCONFIGURATION, () => new IOT_DomainConfiguration()],
    [ResourceType.IOT_EVENTCONFIGURATIONS, () => new IOT_EventConfigurations()],
    [
      ResourceType.IOT_INDEXINGCONFIGURATION,
      () => new IOT_IndexingConfiguration(),
    ],
    [ResourceType.IOT_LOGGINGOPTIONS, () => new IOT_LoggingOptions()],
    [ResourceType.IOT_POLICY, () => new IOT_Policy()],
    [ResourceType.IOT_POLICYATTACHMENT, () => new IOT_PolicyAttachment()],
    [
      ResourceType.IOT_PROVISIONINGTEMPLATE,
      () => new IOT_ProvisioningTemplate(),
    ],
    [ResourceType.IOT_ROLEALIAS, () => new IOT_RoleAlias()],
    [ResourceType.IOT_THING, () => new IOT_Thing()],
    [ResourceType.IOT_THINGGROUP, () => new IOT_ThingGroup()],
    [
      ResourceType.IOT_THINGGROUPMEMBERSHIP,
      () => new IOT_ThingGroupMembership(),
    ],
    [
      ResourceType.IOT_THINGPRINCIPALATTACHMENT,
      () => new IOT_ThingPrincipalAttachment(),
    ],
    [ResourceType.IOT_THINGTYPE, () => new IOT_ThingType()],
    [ResourceType.IOT_TOPICRULE, () => new IOT_TopicRule()],
    [
      ResourceType.IOT_TOPICRULEDESTINATION,
      () => new IOT_TopicRuleDestination(),
    ],
    [ResourceType.IVS_CHANNEL, () => new IVS_Channel()],
    [ResourceType.IVS_PLAYBACKKEYPAIR, () => new IVS_PlaybackKeyPair()],
    [
      ResourceType.IVS_RECORDINGCONFIGURATION,
      () => new IVS_RecordingConfiguration(),
    ],
    [
      ResourceType.IVSCHAT_LOGGINGCONFIGURATION,
      () => new IVSCHAT_LoggingConfiguration(),
    ],
    [ResourceType.IVSCHAT_ROOM, () => new IVSCHAT_Room()],
    [ResourceType.KENDRA_DATASOURCE, () => new KENDRA_DataSource()],
    [ResourceType.KENDRA_EXPERIENCE, () => new KENDRA_Experience()],
    [ResourceType.KENDRA_FAQ, () => new KENDRA_Faq()],
    [ResourceType.KENDRA_INDEX, () => new KENDRA_Index()],
    [
      ResourceType.KENDRA_QUERYSUGGESTIONSBLOCKLIST,
      () => new KENDRA_QuerySuggestionsBlockList(),
    ],
    [ResourceType.KENDRA_THESAURUS, () => new KENDRA_Thesaurus()],
    [ResourceType.KEYSPACES_KEYSPACE, () => new KEYSPACES_Keyspace()],
    [ResourceType.KEYSPACES_TABLE, () => new KEYSPACES_Table()],
    [
      ResourceType.KINESIS_ANALYTICSAPPLICATION,
      () => new KINESIS_AnalyticsApplication(),
    ],
    [
      ResourceType.KINESIS_FIREHOSEDELIVERYSTREAM,
      () => new KINESIS_FirehoseDeliveryStream(),
    ],
    [ResourceType.KINESIS_RESOURCEPOLICY, () => new KINESIS_ResourcePolicy()],
    [ResourceType.KINESIS_STREAM, () => new KINESIS_Stream()],
    [ResourceType.KINESIS_STREAMCONSUMER, () => new KINESIS_StreamConsumer()],
    [ResourceType.KINESIS_VIDEOSTREAM, () => new KINESIS_VideoStream()],
    [
      ResourceType.KINESISANALYTICSV2_APPLICATION,
      () => new KINESISANALYTICSV2_Application(),
    ],
    [
      ResourceType.KINESISANALYTICSV2_APPLICATIONSNAPSHOT,
      () => new KINESISANALYTICSV2_ApplicationSnapshot(),
    ],
    [ResourceType.KMS_ALIAS, () => new KMS_Alias()],
    [ResourceType.KMS_CIPHERTEXT, () => new KMS_Ciphertext()],
    [ResourceType.KMS_CUSTOMKEYSTORE, () => new KMS_CustomKeyStore()],
    [ResourceType.KMS_EXTERNALKEY, () => new KMS_ExternalKey()],
    [ResourceType.KMS_GRANT, () => new KMS_Grant()],
    [ResourceType.KMS_KEY, () => new KMS_Key()],
    [ResourceType.KMS_KEYPOLICY, () => new KMS_KeyPolicy()],
    [ResourceType.KMS_REPLICAEXTERNALKEY, () => new KMS_ReplicaExternalKey()],
    [ResourceType.KMS_REPLICAKEY, () => new KMS_ReplicaKey()],
    [
      ResourceType.LAKEFORMATION_DATACELLSFILTER,
      () => new LAKEFORMATION_DataCellsFilter(),
    ],
    [
      ResourceType.LAKEFORMATION_DATALAKESETTINGS,
      () => new LAKEFORMATION_DataLakeSettings(),
    ],
    [ResourceType.LAKEFORMATION_LFTAG, () => new LAKEFORMATION_LfTag()],
    [
      ResourceType.LAKEFORMATION_PERMISSIONS,
      () => new LAKEFORMATION_Permissions(),
    ],
    [ResourceType.LAKEFORMATION_RESOURCE, () => new LAKEFORMATION_Resource()],
    [
      ResourceType.LAKEFORMATION_RESOURCELFTAG,
      () => new LAKEFORMATION_ResourceLfTag(),
    ],
    [
      ResourceType.LAKEFORMATION_RESOURCELFTAGS,
      () => new LAKEFORMATION_ResourceLfTags(),
    ],
    [ResourceType.LAMBDA_ALIAS, () => new LAMBDA_Alias()],
    [ResourceType.LAMBDA_CALLBACKFUNCTION, () => new LAMBDA_CallbackFunction()],
    [
      ResourceType.LAMBDA_CODESIGNINGCONFIG,
      () => new LAMBDA_CodeSigningConfig(),
    ],
    [
      ResourceType.LAMBDA_EVENTSOURCEMAPPING,
      () => new LAMBDA_EventSourceMapping(),
    ],
    [ResourceType.LAMBDA_FUNCTION, () => new LAMBDA_Function()],
    [
      ResourceType.LAMBDA_FUNCTIONEVENTINVOKECONFIG,
      () => new LAMBDA_FunctionEventInvokeConfig(),
    ],
    [ResourceType.LAMBDA_FUNCTIONURL, () => new LAMBDA_FunctionUrl()],
    [ResourceType.LAMBDA_INVOCATION, () => new LAMBDA_Invocation()],
    [ResourceType.LAMBDA_LAYERVERSION, () => new LAMBDA_LayerVersion()],
    [
      ResourceType.LAMBDA_LAYERVERSIONPERMISSION,
      () => new LAMBDA_LayerVersionPermission(),
    ],
    [ResourceType.LAMBDA_PERMISSION, () => new LAMBDA_Permission()],
    [
      ResourceType.LAMBDA_PROVISIONEDCONCURRENCYCONFIG,
      () => new LAMBDA_ProvisionedConcurrencyConfig(),
    ],
    [
      ResourceType.LAMBDA_RUNTIMEMANAGEMENTCONFIG,
      () => new LAMBDA_RuntimeManagementConfig(),
    ],
    [ResourceType.LB_LISTENER, () => new LB_Listener()],
    [ResourceType.LB_LISTENERCERTIFICATE, () => new LB_ListenerCertificate()],
    [ResourceType.LB_LISTENERRULE, () => new LB_ListenerRule()],
    [ResourceType.LB_LOADBALANCER, () => new LB_LoadBalancer()],
    [ResourceType.LB_TARGETGROUP, () => new LB_TargetGroup()],
    [
      ResourceType.LB_TARGETGROUPATTACHMENT,
      () => new LB_TargetGroupAttachment(),
    ],
    [ResourceType.LB_TRUSTSTORE, () => new LB_TrustStore()],
    [ResourceType.LB_TRUSTSTOREREVOCATION, () => new LB_TrustStoreRevocation()],
    [ResourceType.LEX_BOT, () => new LEX_Bot()],
    [ResourceType.LEX_BOTALIAS, () => new LEX_BotAlias()],
    [ResourceType.LEX_INTENT, () => new LEX_Intent()],
    [ResourceType.LEX_SLOTTYPE, () => new LEX_SlotType()],
    [ResourceType.LEX_V2MODELSBOT, () => new LEX_V2modelsBot()],
    [ResourceType.LEX_V2MODELSBOTLOCALE, () => new LEX_V2modelsBotLocale()],
    [ResourceType.LEX_V2MODELSBOTVERSION, () => new LEX_V2modelsBotVersion()],
    [ResourceType.LEX_V2MODELSINTENT, () => new LEX_V2modelsIntent()],
    [ResourceType.LEX_V2MODELSSLOT, () => new LEX_V2modelsSlot()],
    [ResourceType.LEX_V2MODELSSLOTTYPE, () => new LEX_V2modelsSlotType()],
    [
      ResourceType.LICENSEMANAGER_ASSOCIATION,
      () => new LICENSEMANAGER_Association(),
    ],
    [
      ResourceType.LICENSEMANAGER_LICENSECONFIGURATION,
      () => new LICENSEMANAGER_LicenseConfiguration(),
    ],
    [
      ResourceType.LICENSEMANAGER_LICENSEGRANT,
      () => new LICENSEMANAGER_LicenseGrant(),
    ],
    [
      ResourceType.LICENSEMANAGER_LICENSEGRANTACCEPTER,
      () => new LICENSEMANAGER_LicenseGrantAccepter(),
    ],
    [ResourceType.LIGHTSAIL_BUCKET, () => new LIGHTSAIL_Bucket()],
    [
      ResourceType.LIGHTSAIL_BUCKETACCESSKEY,
      () => new LIGHTSAIL_BucketAccessKey(),
    ],
    [
      ResourceType.LIGHTSAIL_BUCKETRESOURCEACCESS,
      () => new LIGHTSAIL_BucketResourceAccess(),
    ],
    [ResourceType.LIGHTSAIL_CERTIFICATE, () => new LIGHTSAIL_Certificate()],
    [
      ResourceType.LIGHTSAIL_CONTAINERSERVICE,
      () => new LIGHTSAIL_ContainerService(),
    ],
    [
      ResourceType.LIGHTSAIL_CONTAINERSERVICEDEPLOYMENTVERSION,
      () => new LIGHTSAIL_ContainerServiceDeploymentVersion(),
    ],
    [ResourceType.LIGHTSAIL_DATABASE, () => new LIGHTSAIL_Database()],
    [ResourceType.LIGHTSAIL_DISK, () => new LIGHTSAIL_Disk()],
    [
      ResourceType.LIGHTSAIL_DISK_ATTACHMENT,
      () => new LIGHTSAIL_Disk_attachment(),
    ],
    [ResourceType.LIGHTSAIL_DISTRIBUTION, () => new LIGHTSAIL_Distribution()],
    [ResourceType.LIGHTSAIL_DOMAIN, () => new LIGHTSAIL_Domain()],
    [ResourceType.LIGHTSAIL_DOMAINENTRY, () => new LIGHTSAIL_DomainEntry()],
    [ResourceType.LIGHTSAIL_INSTANCE, () => new LIGHTSAIL_Instance()],
    [
      ResourceType.LIGHTSAIL_INSTANCEPUBLICPORTS,
      () => new LIGHTSAIL_InstancePublicPorts(),
    ],
    [ResourceType.LIGHTSAIL_KEYPAIR, () => new LIGHTSAIL_KeyPair()],
    [ResourceType.LIGHTSAIL_LB, () => new LIGHTSAIL_Lb()],
    [ResourceType.LIGHTSAIL_LBATTACHMENT, () => new LIGHTSAIL_LbAttachment()],
    [ResourceType.LIGHTSAIL_LBCERTIFICATE, () => new LIGHTSAIL_LbCertificate()],
    [
      ResourceType.LIGHTSAIL_LBCERTIFICATEATTACHMENT,
      () => new LIGHTSAIL_LbCertificateAttachment(),
    ],
    [
      ResourceType.LIGHTSAIL_LBHTTPSREDIRECTIONPOLICY,
      () => new LIGHTSAIL_LbHttpsRedirectionPolicy(),
    ],
    [
      ResourceType.LIGHTSAIL_LBSTICKINESSPOLICY,
      () => new LIGHTSAIL_LbStickinessPolicy(),
    ],
    [ResourceType.LIGHTSAIL_STATICIP, () => new LIGHTSAIL_StaticIp()],
    [
      ResourceType.LIGHTSAIL_STATICIPATTACHMENT,
      () => new LIGHTSAIL_StaticIpAttachment(),
    ],
    [
      ResourceType.LOCATION_GEOFENCECOLLECTION,
      () => new LOCATION_GeofenceCollection(),
    ],
    [ResourceType.LOCATION_MAPRESOURCE, () => new LOCATION_MapResource()],
    [ResourceType.LOCATION_PLACEINDEX, () => new LOCATION_PlaceIndex()],
    [
      ResourceType.LOCATION_ROUTECALCULATION,
      () => new LOCATION_RouteCalculation(),
    ],
    [ResourceType.LOCATION_TRACKER, () => new LOCATION_Tracker()],
    [
      ResourceType.LOCATION_TRACKERASSOCIATION,
      () => new LOCATION_TrackerAssociation(),
    ],
    [ResourceType.M2_APPLICATION, () => new M2_Application()],
    [ResourceType.M2_DEPLOYMENT, () => new M2_Deployment()],
    [ResourceType.M2_ENVIRONMENT, () => new M2_Environment()],
    [
      ResourceType.MACIE_CUSTOMDATAIDENTIFIER,
      () => new MACIE_CustomDataIdentifier(),
    ],
    [ResourceType.MACIE_FINDINGSFILTER, () => new MACIE_FindingsFilter()],
    [ResourceType.MACIE2_ACCOUNT, () => new MACIE2_Account()],
    [
      ResourceType.MACIE2_CLASSIFICATIONEXPORTCONFIGURATION,
      () => new MACIE2_ClassificationExportConfiguration(),
    ],
    [
      ResourceType.MACIE2_CLASSIFICATIONJOB,
      () => new MACIE2_ClassificationJob(),
    ],
    [
      ResourceType.MACIE2_INVITATIONACCEPTER,
      () => new MACIE2_InvitationAccepter(),
    ],
    [ResourceType.MACIE2_MEMBER, () => new MACIE2_Member()],
    [
      ResourceType.MACIE2_ORGANIZATIONADMINACCOUNT,
      () => new MACIE2_OrganizationAdminAccount(),
    ],
    [ResourceType.MEDIACONVERT_QUEUE, () => new MEDIACONVERT_Queue()],
    [ResourceType.MEDIALIVE_CHANNEL, () => new MEDIALIVE_Channel()],
    [ResourceType.MEDIALIVE_INPUT, () => new MEDIALIVE_Input()],
    [
      ResourceType.MEDIALIVE_INPUTSECURITYGROUP,
      () => new MEDIALIVE_InputSecurityGroup(),
    ],
    [ResourceType.MEDIALIVE_MULTIPLEX, () => new MEDIALIVE_Multiplex()],
    [
      ResourceType.MEDIALIVE_MULTIPLEXPROGRAM,
      () => new MEDIALIVE_MultiplexProgram(),
    ],
    [ResourceType.MEDIAPACKAGE_CHANNEL, () => new MEDIAPACKAGE_Channel()],
    [ResourceType.MEDIASTORE_CONTAINER, () => new MEDIASTORE_Container()],
    [
      ResourceType.MEDIASTORE_CONTAINERPOLICY,
      () => new MEDIASTORE_ContainerPolicy(),
    ],
    [ResourceType.MEMORYDB_ACL, () => new MEMORYDB_Acl()],
    [ResourceType.MEMORYDB_CLUSTER, () => new MEMORYDB_Cluster()],
    [ResourceType.MEMORYDB_PARAMETERGROUP, () => new MEMORYDB_ParameterGroup()],
    [ResourceType.MEMORYDB_SNAPSHOT, () => new MEMORYDB_Snapshot()],
    [ResourceType.MEMORYDB_SUBNETGROUP, () => new MEMORYDB_SubnetGroup()],
    [ResourceType.MEMORYDB_USER, () => new MEMORYDB_User()],
    [ResourceType.MQ_BROKER, () => new MQ_Broker()],
    [ResourceType.MQ_CONFIGURATION, () => new MQ_Configuration()],
    [ResourceType.MSK_CLUSTER, () => new MSK_Cluster()],
    [ResourceType.MSK_CLUSTERPOLICY, () => new MSK_ClusterPolicy()],
    [ResourceType.MSK_CONFIGURATION, () => new MSK_Configuration()],
    [ResourceType.MSK_REPLICATOR, () => new MSK_Replicator()],
    [
      ResourceType.MSK_SCRAMSECRETASSOCIATION,
      () => new MSK_ScramSecretAssociation(),
    ],
    [ResourceType.MSK_SERVERLESSCLUSTER, () => new MSK_ServerlessCluster()],
    [ResourceType.MSK_VPCCONNECTION, () => new MSK_VpcConnection()],
    [ResourceType.MSKCONNECT_CONNECTOR, () => new MSKCONNECT_Connector()],
    [ResourceType.MSKCONNECT_CUSTOMPLUGIN, () => new MSKCONNECT_CustomPlugin()],
    [
      ResourceType.MSKCONNECT_WORKERCONFIGURATION,
      () => new MSKCONNECT_WorkerConfiguration(),
    ],
    [ResourceType.MWAA_ENVIRONMENT, () => new MWAA_Environment()],
    [ResourceType.NEPTUNE_CLUSTER, () => new NEPTUNE_Cluster()],
    [ResourceType.NEPTUNE_CLUSTERENDPOINT, () => new NEPTUNE_ClusterEndpoint()],
    [ResourceType.NEPTUNE_CLUSTERINSTANCE, () => new NEPTUNE_ClusterInstance()],
    [
      ResourceType.NEPTUNE_CLUSTERPARAMETERGROUP,
      () => new NEPTUNE_ClusterParameterGroup(),
    ],
    [ResourceType.NEPTUNE_CLUSTERSNAPSHOT, () => new NEPTUNE_ClusterSnapshot()],
    [
      ResourceType.NEPTUNE_EVENTSUBSCRIPTION,
      () => new NEPTUNE_EventSubscription(),
    ],
    [ResourceType.NEPTUNE_GLOBALCLUSTER, () => new NEPTUNE_GlobalCluster()],
    [ResourceType.NEPTUNE_PARAMETERGROUP, () => new NEPTUNE_ParameterGroup()],
    [ResourceType.NEPTUNE_SUBNETGROUP, () => new NEPTUNE_SubnetGroup()],
    [
      ResourceType.NETWORKFIREWALL_FIREWALL,
      () => new NETWORKFIREWALL_Firewall(),
    ],
    [
      ResourceType.NETWORKFIREWALL_FIREWALLPOLICY,
      () => new NETWORKFIREWALL_FirewallPolicy(),
    ],
    [
      ResourceType.NETWORKFIREWALL_LOGGINGCONFIGURATION,
      () => new NETWORKFIREWALL_LoggingConfiguration(),
    ],
    [
      ResourceType.NETWORKFIREWALL_RESOURCEPOLICY,
      () => new NETWORKFIREWALL_ResourcePolicy(),
    ],
    [
      ResourceType.NETWORKFIREWALL_RULEGROUP,
      () => new NETWORKFIREWALL_RuleGroup(),
    ],
    [
      ResourceType.NETWORKFIREWALL_TLSINSPECTIONCONFIGURATION,
      () => new NETWORKFIREWALL_TlsInspectionConfiguration(),
    ],
    [
      ResourceType.NETWORKMANAGER_ATTACHMENTACCEPTER,
      () => new NETWORKMANAGER_AttachmentAccepter(),
    ],
    [
      ResourceType.NETWORKMANAGER_CONNECTATTACHMENT,
      () => new NETWORKMANAGER_ConnectAttachment(),
    ],
    [
      ResourceType.NETWORKMANAGER_CONNECTION,
      () => new NETWORKMANAGER_Connection(),
    ],
    [
      ResourceType.NETWORKMANAGER_CONNECTPEER,
      () => new NETWORKMANAGER_ConnectPeer(),
    ],
    [
      ResourceType.NETWORKMANAGER_CORENETWORK,
      () => new NETWORKMANAGER_CoreNetwork(),
    ],
    [
      ResourceType.NETWORKMANAGER_CORENETWORKPOLICYATTACHMENT,
      () => new NETWORKMANAGER_CoreNetworkPolicyAttachment(),
    ],
    [
      ResourceType.NETWORKMANAGER_CUSTOMERGATEWAYASSOCIATION,
      () => new NETWORKMANAGER_CustomerGatewayAssociation(),
    ],
    [ResourceType.NETWORKMANAGER_DEVICE, () => new NETWORKMANAGER_Device()],
    [
      ResourceType.NETWORKMANAGER_GLOBALNETWORK,
      () => new NETWORKMANAGER_GlobalNetwork(),
    ],
    [ResourceType.NETWORKMANAGER_LINK, () => new NETWORKMANAGER_Link()],
    [
      ResourceType.NETWORKMANAGER_LINKASSOCIATION,
      () => new NETWORKMANAGER_LinkAssociation(),
    ],
    [ResourceType.NETWORKMANAGER_SITE, () => new NETWORKMANAGER_Site()],
    [
      ResourceType.NETWORKMANAGER_SITETOSITEVPNATTACHMENT,
      () => new NETWORKMANAGER_SiteToSiteVpnAttachment(),
    ],
    [
      ResourceType.NETWORKMANAGER_TRANSITGATEWAYCONNECTPEERASSOCIATION,
      () => new NETWORKMANAGER_TransitGatewayConnectPeerAssociation(),
    ],
    [
      ResourceType.NETWORKMANAGER_TRANSITGATEWAYPEERING,
      () => new NETWORKMANAGER_TransitGatewayPeering(),
    ],
    [
      ResourceType.NETWORKMANAGER_TRANSITGATEWAYREGISTRATION,
      () => new NETWORKMANAGER_TransitGatewayRegistration(),
    ],
    [
      ResourceType.NETWORKMANAGER_TRANSITGATEWAYROUTETABLEATTACHMENT,
      () => new NETWORKMANAGER_TransitGatewayRouteTableAttachment(),
    ],
    [
      ResourceType.NETWORKMANAGER_VPCATTACHMENT,
      () => new NETWORKMANAGER_VpcAttachment(),
    ],
    [ResourceType.NETWORKMONITOR_MONITOR, () => new NETWORKMONITOR_Monitor()],
    [ResourceType.NETWORKMONITOR_PROBE, () => new NETWORKMONITOR_Probe()],
    [ResourceType.OAM_LINK, () => new OAM_Link()],
    [ResourceType.OAM_SINK, () => new OAM_Sink()],
    [ResourceType.OAM_SINKPOLICY, () => new OAM_SinkPolicy()],
    [ResourceType.OPENSEARCH_DOMAIN, () => new OPENSEARCH_Domain()],
    [ResourceType.OPENSEARCH_DOMAINPOLICY, () => new OPENSEARCH_DomainPolicy()],
    [
      ResourceType.OPENSEARCH_DOMAINSAMLOPTIONS,
      () => new OPENSEARCH_DomainSamlOptions(),
    ],
    [
      ResourceType.OPENSEARCH_INBOUNDCONNECTIONACCEPTER,
      () => new OPENSEARCH_InboundConnectionAccepter(),
    ],
    [
      ResourceType.OPENSEARCH_OUTBOUNDCONNECTION,
      () => new OPENSEARCH_OutboundConnection(),
    ],
    [ResourceType.OPENSEARCH_PACKAGE, () => new OPENSEARCH_Package()],
    [
      ResourceType.OPENSEARCH_PACKAGEASSOCIATION,
      () => new OPENSEARCH_PackageAssociation(),
    ],
    [
      ResourceType.OPENSEARCH_SERVERLESSACCESSPOLICY,
      () => new OPENSEARCH_ServerlessAccessPolicy(),
    ],
    [
      ResourceType.OPENSEARCH_SERVERLESSCOLLECTION,
      () => new OPENSEARCH_ServerlessCollection(),
    ],
    [
      ResourceType.OPENSEARCH_SERVERLESSLIFECYCLEPOLICY,
      () => new OPENSEARCH_ServerlessLifecyclePolicy(),
    ],
    [
      ResourceType.OPENSEARCH_SERVERLESSSECURITYCONFIG,
      () => new OPENSEARCH_ServerlessSecurityConfig(),
    ],
    [
      ResourceType.OPENSEARCH_SERVERLESSSECURITYPOLICY,
      () => new OPENSEARCH_ServerlessSecurityPolicy(),
    ],
    [
      ResourceType.OPENSEARCH_SERVERLESSVPCENDPOINT,
      () => new OPENSEARCH_ServerlessVpcEndpoint(),
    ],
    [ResourceType.OPENSEARCH_VPCENDPOINT, () => new OPENSEARCH_VpcEndpoint()],
    [
      ResourceType.OPENSEARCHINGEST_PIPELINE,
      () => new OPENSEARCHINGEST_Pipeline(),
    ],
    [ResourceType.OPSWORKS_APPLICATION, () => new OPSWORKS_Application()],
    [ResourceType.OPSWORKS_CUSTOMLAYER, () => new OPSWORKS_CustomLayer()],
    [
      ResourceType.OPSWORKS_ECSCLUSTERLAYER,
      () => new OPSWORKS_EcsClusterLayer(),
    ],
    [ResourceType.OPSWORKS_GANGLIALAYER, () => new OPSWORKS_GangliaLayer()],
    [ResourceType.OPSWORKS_HAPROXYLAYER, () => new OPSWORKS_HaproxyLayer()],
    [ResourceType.OPSWORKS_INSTANCE, () => new OPSWORKS_Instance()],
    [ResourceType.OPSWORKS_JAVAAPPLAYER, () => new OPSWORKS_JavaAppLayer()],
    [ResourceType.OPSWORKS_MEMCACHEDLAYER, () => new OPSWORKS_MemcachedLayer()],
    [ResourceType.OPSWORKS_MYSQLLAYER, () => new OPSWORKS_MysqlLayer()],
    [ResourceType.OPSWORKS_NODEJSAPPLAYER, () => new OPSWORKS_NodejsAppLayer()],
    [ResourceType.OPSWORKS_PERMISSION, () => new OPSWORKS_Permission()],
    [ResourceType.OPSWORKS_PHPAPPLAYER, () => new OPSWORKS_PhpAppLayer()],
    [ResourceType.OPSWORKS_RAILSAPPLAYER, () => new OPSWORKS_RailsAppLayer()],
    [ResourceType.OPSWORKS_RDSDBINSTANCE, () => new OPSWORKS_RdsDbInstance()],
    [ResourceType.OPSWORKS_STACK, () => new OPSWORKS_Stack()],
    [ResourceType.OPSWORKS_STATICWEBLAYER, () => new OPSWORKS_StaticWebLayer()],
    [ResourceType.OPSWORKS_USERPROFILE, () => new OPSWORKS_UserProfile()],
    [ResourceType.ORGANIZATIONS_ACCOUNT, () => new ORGANIZATIONS_Account()],
    [
      ResourceType.ORGANIZATIONS_DELEGATEDADMINISTRATOR,
      () => new ORGANIZATIONS_DelegatedAdministrator(),
    ],
    [
      ResourceType.ORGANIZATIONS_ORGANIZATION,
      () => new ORGANIZATIONS_Organization(),
    ],
    [
      ResourceType.ORGANIZATIONS_ORGANIZATIONALUNIT,
      () => new ORGANIZATIONS_OrganizationalUnit(),
    ],
    [ResourceType.ORGANIZATIONS_POLICY, () => new ORGANIZATIONS_Policy()],
    [
      ResourceType.ORGANIZATIONS_POLICYATTACHMENT,
      () => new ORGANIZATIONS_PolicyAttachment(),
    ],
    [
      ResourceType.ORGANIZATIONS_RESOURCEPOLICY,
      () => new ORGANIZATIONS_ResourcePolicy(),
    ],
    [ResourceType.PAYMENTCRYPTOGRAPHY_KEY, () => new PAYMENTCRYPTOGRAPHY_Key()],
    [
      ResourceType.PAYMENTCRYPTOGRAPHY_KEYALIAS,
      () => new PAYMENTCRYPTOGRAPHY_KeyAlias(),
    ],
    [ResourceType.PINPOINT_ADMCHANNEL, () => new PINPOINT_AdmChannel()],
    [ResourceType.PINPOINT_APNSCHANNEL, () => new PINPOINT_ApnsChannel()],
    [
      ResourceType.PINPOINT_APNSSANDBOXCHANNEL,
      () => new PINPOINT_ApnsSandboxChannel(),
    ],
    [
      ResourceType.PINPOINT_APNSVOIPCHANNEL,
      () => new PINPOINT_ApnsVoipChannel(),
    ],
    [
      ResourceType.PINPOINT_APNSVOIPSANDBOXCHANNEL,
      () => new PINPOINT_ApnsVoipSandboxChannel(),
    ],
    [ResourceType.PINPOINT_APP, () => new PINPOINT_App()],
    [ResourceType.PINPOINT_BAIDUCHANNEL, () => new PINPOINT_BaiduChannel()],
    [ResourceType.PINPOINT_EMAILCHANNEL, () => new PINPOINT_EmailChannel()],
    [ResourceType.PINPOINT_EMAILTEMPLATE, () => new PINPOINT_EmailTemplate()],
    [ResourceType.PINPOINT_EVENTSTREAM, () => new PINPOINT_EventStream()],
    [ResourceType.PINPOINT_GCMCHANNEL, () => new PINPOINT_GcmChannel()],
    [ResourceType.PINPOINT_SMSCHANNEL, () => new PINPOINT_SmsChannel()],
    [ResourceType.PIPES_PIPE, () => new PIPES_Pipe()],
    [ResourceType.QLDB_LEDGER, () => new QLDB_Ledger()],
    [ResourceType.QLDB_STREAM, () => new QLDB_Stream()],
    [
      ResourceType.QUICKSIGHT_ACCOUNTSUBSCRIPTION,
      () => new QUICKSIGHT_AccountSubscription(),
    ],
    [ResourceType.QUICKSIGHT_ANALYSIS, () => new QUICKSIGHT_Analysis()],
    [ResourceType.QUICKSIGHT_DASHBOARD, () => new QUICKSIGHT_Dashboard()],
    [ResourceType.QUICKSIGHT_DATASET, () => new QUICKSIGHT_DataSet()],
    [ResourceType.QUICKSIGHT_DATASOURCE, () => new QUICKSIGHT_DataSource()],
    [ResourceType.QUICKSIGHT_FOLDER, () => new QUICKSIGHT_Folder()],
    [
      ResourceType.QUICKSIGHT_FOLDERMEMBERSHIP,
      () => new QUICKSIGHT_FolderMembership(),
    ],
    [ResourceType.QUICKSIGHT_GROUP, () => new QUICKSIGHT_Group()],
    [
      ResourceType.QUICKSIGHT_GROUPMEMBERSHIP,
      () => new QUICKSIGHT_GroupMembership(),
    ],
    [
      ResourceType.QUICKSIGHT_IAMPOLICYASSIGNMENT,
      () => new QUICKSIGHT_IamPolicyAssignment(),
    ],
    [ResourceType.QUICKSIGHT_INGESTION, () => new QUICKSIGHT_Ingestion()],
  ]);
  static readonly ResourceFactoryMap2 = new Map<
    ResourceType,
    () => DS_Resource
  >([
    [ResourceType.QUICKSIGHT_NAMESPACE, () => new QUICKSIGHT_Namespace()],
    [
      ResourceType.QUICKSIGHT_REFRESHSCHEDULE,
      () => new QUICKSIGHT_RefreshSchedule(),
    ],
    [ResourceType.QUICKSIGHT_TEMPLATE, () => new QUICKSIGHT_Template()],
    [
      ResourceType.QUICKSIGHT_TEMPLATEALIAS,
      () => new QUICKSIGHT_TemplateAlias(),
    ],
    [ResourceType.QUICKSIGHT_THEME, () => new QUICKSIGHT_Theme()],
    [ResourceType.QUICKSIGHT_USER, () => new QUICKSIGHT_User()],
    [
      ResourceType.QUICKSIGHT_VPCCONNECTION,
      () => new QUICKSIGHT_VpcConnection(),
    ],
    [
      ResourceType.RAM_PRINCIPALASSOCIATION,
      () => new RAM_PrincipalAssociation(),
    ],
    [ResourceType.RAM_RESOURCEASSOCIATION, () => new RAM_ResourceAssociation()],
    [ResourceType.RAM_RESOURCESHARE, () => new RAM_ResourceShare()],
    [
      ResourceType.RAM_RESOURCESHAREACCEPTER,
      () => new RAM_ResourceShareAccepter(),
    ],
    [
      ResourceType.RAM_SHARINGWITHORGANIZATION,
      () => new RAM_SharingWithOrganization(),
    ],
    [ResourceType.RBIN_RULE, () => new RBIN_Rule()],
    [ResourceType.RDS_CERTIFICATE, () => new RDS_Certificate()],
    [ResourceType.RDS_CLUSTER, () => new RDS_Cluster()],
    [
      ResourceType.RDS_CLUSTERACTIVITYSTREAM,
      () => new RDS_ClusterActivityStream(),
    ],
    [ResourceType.RDS_CLUSTERENDPOINT, () => new RDS_ClusterEndpoint()],
    [ResourceType.RDS_CLUSTERINSTANCE, () => new RDS_ClusterInstance()],
    [
      ResourceType.RDS_CLUSTERPARAMETERGROUP,
      () => new RDS_ClusterParameterGroup(),
    ],
    [
      ResourceType.RDS_CLUSTERROLEASSOCIATION,
      () => new RDS_ClusterRoleAssociation(),
    ],
    [ResourceType.RDS_CLUSTERSNAPSHOT, () => new RDS_ClusterSnapshot()],
    [
      ResourceType.RDS_CUSTOMDBENGINEVERSION,
      () => new RDS_CustomDbEngineVersion(),
    ],
    [ResourceType.RDS_EVENTSUBSCRIPTION, () => new RDS_EventSubscription()],
    [ResourceType.RDS_EXPORTTASK, () => new RDS_ExportTask()],
    [ResourceType.RDS_GLOBALCLUSTER, () => new RDS_GlobalCluster()],
    [ResourceType.RDS_INSTANCE, () => new RDS_Instance()],
    [
      ResourceType.RDS_INSTANCEAUTOMATEDBACKUPSREPLICATION,
      () => new RDS_InstanceAutomatedBackupsReplication(),
    ],
    [ResourceType.RDS_INTEGRATION, () => new RDS_Integration()],
    [ResourceType.RDS_OPTIONGROUP, () => new RDS_OptionGroup()],
    [ResourceType.RDS_PARAMETERGROUP, () => new RDS_ParameterGroup()],
    [ResourceType.RDS_PROXY, () => new RDS_Proxy()],
    [
      ResourceType.RDS_PROXYDEFAULTTARGETGROUP,
      () => new RDS_ProxyDefaultTargetGroup(),
    ],
    [ResourceType.RDS_PROXYENDPOINT, () => new RDS_ProxyEndpoint()],
    [ResourceType.RDS_PROXYTARGET, () => new RDS_ProxyTarget()],
    [ResourceType.RDS_RESERVEDINSTANCE, () => new RDS_ReservedInstance()],
    [ResourceType.RDS_ROLEASSOCIATION, () => new RDS_RoleAssociation()],
    [ResourceType.RDS_SNAPSHOT, () => new RDS_Snapshot()],
    [ResourceType.RDS_SNAPSHOTCOPY, () => new RDS_SnapshotCopy()],
    [ResourceType.RDS_SUBNETGROUP, () => new RDS_SubnetGroup()],
    [
      ResourceType.REDSHIFT_AUTHENTICATIONPROFILE,
      () => new REDSHIFT_AuthenticationProfile(),
    ],
    [ResourceType.REDSHIFT_CLUSTER, () => new REDSHIFT_Cluster()],
    [
      ResourceType.REDSHIFT_CLUSTERIAMROLES,
      () => new REDSHIFT_ClusterIamRoles(),
    ],
    [
      ResourceType.REDSHIFT_CLUSTERSNAPSHOT,
      () => new REDSHIFT_ClusterSnapshot(),
    ],
    [
      ResourceType.REDSHIFT_DATASHAREAUTHORIZATION,
      () => new REDSHIFT_DataShareAuthorization(),
    ],
    [
      ResourceType.REDSHIFT_DATASHARECONSUMERASSOCIATION,
      () => new REDSHIFT_DataShareConsumerAssociation(),
    ],
    [ResourceType.REDSHIFT_ENDPOINTACCESS, () => new REDSHIFT_EndpointAccess()],
    [
      ResourceType.REDSHIFT_ENDPOINTAUTHORIZATION,
      () => new REDSHIFT_EndpointAuthorization(),
    ],
    [
      ResourceType.REDSHIFT_EVENTSUBSCRIPTION,
      () => new REDSHIFT_EventSubscription(),
    ],
    [
      ResourceType.REDSHIFT_HSMCLIENTCERTIFICATE,
      () => new REDSHIFT_HsmClientCertificate(),
    ],
    [
      ResourceType.REDSHIFT_HSMCONFIGURATION,
      () => new REDSHIFT_HsmConfiguration(),
    ],
    [ResourceType.REDSHIFT_LOGGING, () => new REDSHIFT_Logging()],
    [ResourceType.REDSHIFT_PARAMETERGROUP, () => new REDSHIFT_ParameterGroup()],
    [ResourceType.REDSHIFT_PARTNER, () => new REDSHIFT_Partner()],
    [ResourceType.REDSHIFT_RESOURCEPOLICY, () => new REDSHIFT_ResourcePolicy()],
    [
      ResourceType.REDSHIFT_SCHEDULEDACTION,
      () => new REDSHIFT_ScheduledAction(),
    ],
    [ResourceType.REDSHIFT_SNAPSHOTCOPY, () => new REDSHIFT_SnapshotCopy()],
    [
      ResourceType.REDSHIFT_SNAPSHOTCOPYGRANT,
      () => new REDSHIFT_SnapshotCopyGrant(),
    ],
    [
      ResourceType.REDSHIFT_SNAPSHOTSCHEDULE,
      () => new REDSHIFT_SnapshotSchedule(),
    ],
    [
      ResourceType.REDSHIFT_SNAPSHOTSCHEDULEASSOCIATION,
      () => new REDSHIFT_SnapshotScheduleAssociation(),
    ],
    [ResourceType.REDSHIFT_SUBNETGROUP, () => new REDSHIFT_SubnetGroup()],
    [ResourceType.REDSHIFT_USAGELIMIT, () => new REDSHIFT_UsageLimit()],
    [ResourceType.REDSHIFTDATA_STATEMENT, () => new REDSHIFTDATA_Statement()],
    [
      ResourceType.REDSHIFTSERVERLESS_CUSTOMDOMAINASSOCIATION,
      () => new REDSHIFTSERVERLESS_CustomDomainAssociation(),
    ],
    [
      ResourceType.REDSHIFTSERVERLESS_ENDPOINTACCESS,
      () => new REDSHIFTSERVERLESS_EndpointAccess(),
    ],
    [
      ResourceType.REDSHIFTSERVERLESS_NAMESPACE,
      () => new REDSHIFTSERVERLESS_Namespace(),
    ],
    [
      ResourceType.REDSHIFTSERVERLESS_RESOURCEPOLICY,
      () => new REDSHIFTSERVERLESS_ResourcePolicy(),
    ],
    [
      ResourceType.REDSHIFTSERVERLESS_SNAPSHOT,
      () => new REDSHIFTSERVERLESS_Snapshot(),
    ],
    [
      ResourceType.REDSHIFTSERVERLESS_USAGELIMIT,
      () => new REDSHIFTSERVERLESS_UsageLimit(),
    ],
    [
      ResourceType.REDSHIFTSERVERLESS_WORKGROUP,
      () => new REDSHIFTSERVERLESS_Workgroup(),
    ],
    [ResourceType.REKOGNITION_COLLECTION, () => new REKOGNITION_Collection()],
    [ResourceType.REKOGNITION_PROJECT, () => new REKOGNITION_Project()],
    [
      ResourceType.REKOGNITION_STREAMPROCESSOR,
      () => new REKOGNITION_StreamProcessor(),
    ],
    [ResourceType.RESOURCEEXPLORER_INDEX, () => new RESOURCEEXPLORER_Index()],
    [ResourceType.RESOURCEEXPLORER_VIEW, () => new RESOURCEEXPLORER_View()],
    [ResourceType.RESOURCEGROUPS_GROUP, () => new RESOURCEGROUPS_Group()],
    [ResourceType.RESOURCEGROUPS_RESOURCE, () => new RESOURCEGROUPS_Resource()],
    [ResourceType.ROLESANYWHERE_PROFILE, () => new ROLESANYWHERE_Profile()],
    [
      ResourceType.ROLESANYWHERE_TRUSTANCHOR,
      () => new ROLESANYWHERE_TrustAnchor(),
    ],
    [ResourceType.ROUTE53_CIDRCOLLECTION, () => new ROUTE53_CidrCollection()],
    [ResourceType.ROUTE53_CIDRLOCATION, () => new ROUTE53_CidrLocation()],
    [ResourceType.ROUTE53_DELEGATIONSET, () => new ROUTE53_DelegationSet()],
    [ResourceType.ROUTE53_HEALTHCHECK, () => new ROUTE53_HealthCheck()],
    [
      ResourceType.ROUTE53_HOSTEDZONEDNSSEC,
      () => new ROUTE53_HostedZoneDnsSec(),
    ],
    [ResourceType.ROUTE53_KEYSIGNINGKEY, () => new ROUTE53_KeySigningKey()],
    [ResourceType.ROUTE53_QUERYLOG, () => new ROUTE53_QueryLog()],
    [ResourceType.ROUTE53_RECORD, () => new ROUTE53_Record()],
    [ResourceType.ROUTE53_RESOLVERCONFIG, () => new ROUTE53_ResolverConfig()],
    [
      ResourceType.ROUTE53_RESOLVERDNSSECCONFIG,
      () => new ROUTE53_ResolverDnsSecConfig(),
    ],
    [
      ResourceType.ROUTE53_RESOLVERENDPOINT,
      () => new ROUTE53_ResolverEndpoint(),
    ],
    [
      ResourceType.ROUTE53_RESOLVERFIREWALLCONFIG,
      () => new ROUTE53_ResolverFirewallConfig(),
    ],
    [
      ResourceType.ROUTE53_RESOLVERFIREWALLDOMAINLIST,
      () => new ROUTE53_ResolverFirewallDomainList(),
    ],
    [
      ResourceType.ROUTE53_RESOLVERFIREWALLRULE,
      () => new ROUTE53_ResolverFirewallRule(),
    ],
    [
      ResourceType.ROUTE53_RESOLVERFIREWALLRULEGROUP,
      () => new ROUTE53_ResolverFirewallRuleGroup(),
    ],
    [
      ResourceType.ROUTE53_RESOLVERFIREWALLRULEGROUPASSOCIATION,
      () => new ROUTE53_ResolverFirewallRuleGroupAssociation(),
    ],
    [
      ResourceType.ROUTE53_RESOLVERQUERYLOGCONFIG,
      () => new ROUTE53_ResolverQueryLogConfig(),
    ],
    [
      ResourceType.ROUTE53_RESOLVERQUERYLOGCONFIGASSOCIATION,
      () => new ROUTE53_ResolverQueryLogConfigAssociation(),
    ],
    [ResourceType.ROUTE53_RESOLVERRULE, () => new ROUTE53_ResolverRule()],
    [
      ResourceType.ROUTE53_RESOLVERRULEASSOCIATION,
      () => new ROUTE53_ResolverRuleAssociation(),
    ],
    [ResourceType.ROUTE53_TRAFFICPOLICY, () => new ROUTE53_TrafficPolicy()],
    [
      ResourceType.ROUTE53_TRAFFICPOLICYINSTANCE,
      () => new ROUTE53_TrafficPolicyInstance(),
    ],
    [
      ResourceType.ROUTE53_VPCASSOCIATIONAUTHORIZATION,
      () => new ROUTE53_VpcAssociationAuthorization(),
    ],
    [ResourceType.ROUTE53_ZONE, () => new ROUTE53_Zone()],
    [ResourceType.ROUTE53_ZONEASSOCIATION, () => new ROUTE53_ZoneAssociation()],
    [
      ResourceType.ROUTE53DOMAINS_DELEGATIONSIGNERRECORD,
      () => new ROUTE53DOMAINS_DelegationSignerRecord(),
    ],
    [
      ResourceType.ROUTE53DOMAINS_REGISTEREDDOMAIN,
      () => new ROUTE53DOMAINS_RegisteredDomain(),
    ],
    [
      ResourceType.ROUTE53RECOVERYCONTROL_CLUSTER,
      () => new ROUTE53RECOVERYCONTROL_Cluster(),
    ],
    [
      ResourceType.ROUTE53RECOVERYCONTROL_CONTROLPANEL,
      () => new ROUTE53RECOVERYCONTROL_ControlPanel(),
    ],
    [
      ResourceType.ROUTE53RECOVERYCONTROL_ROUTINGCONTROL,
      () => new ROUTE53RECOVERYCONTROL_RoutingControl(),
    ],
    [
      ResourceType.ROUTE53RECOVERYCONTROL_SAFETYRULE,
      () => new ROUTE53RECOVERYCONTROL_SafetyRule(),
    ],
    [
      ResourceType.ROUTE53RECOVERYREADINESS_CELL,
      () => new ROUTE53RECOVERYREADINESS_Cell(),
    ],
    [
      ResourceType.ROUTE53RECOVERYREADINESS_READINESSCHECK,
      () => new ROUTE53RECOVERYREADINESS_ReadinessCheck(),
    ],
    [
      ResourceType.ROUTE53RECOVERYREADINESS_RECOVERYGROUP,
      () => new ROUTE53RECOVERYREADINESS_RecoveryGroup(),
    ],
    [
      ResourceType.ROUTE53RECOVERYREADINESS_RESOURCESET,
      () => new ROUTE53RECOVERYREADINESS_ResourceSet(),
    ],
    [ResourceType.RUM_APPMONITOR, () => new RUM_AppMonitor()],
    [ResourceType.RUM_METRICSDESTINATION, () => new RUM_MetricsDestination()],
    [ResourceType.S3_ACCESSPOINT, () => new S3_AccessPoint()],
    [
      ResourceType.S3_ACCOUNTPUBLICACCESSBLOCK,
      () => new S3_AccountPublicAccessBlock(),
    ],
    [
      ResourceType.S3_ANALYTICSCONFIGURATION,
      () => new S3_AnalyticsConfiguration(),
    ],
    [ResourceType.S3_BUCKET, () => new S3_Bucket()],
    [
      ResourceType.S3_BUCKETACCELERATECONFIGURATIONV2,
      () => new S3_BucketAccelerateConfigurationV2(),
    ],
    [ResourceType.S3_BUCKETACLV2, () => new S3_BucketAclV2()],
    [
      ResourceType.S3_BUCKETCORSCONFIGURATIONV2,
      () => new S3_BucketCorsConfigurationV2(),
    ],
    [
      ResourceType.S3_BUCKETINTELLIGENTTIERINGCONFIGURATION,
      () => new S3_BucketIntelligentTieringConfiguration(),
    ],
    [
      ResourceType.S3_BUCKETLIFECYCLECONFIGURATIONV2,
      () => new S3_BucketLifecycleConfigurationV2(),
    ],
    [ResourceType.S3_BUCKETLOGGINGV2, () => new S3_BucketLoggingV2()],
    [ResourceType.S3_BUCKETMETRIC, () => new S3_BucketMetric()],
    [ResourceType.S3_BUCKETNOTIFICATION, () => new S3_BucketNotification()],
    [ResourceType.S3_BUCKETOBJECT, () => new S3_BucketObject()],
    [
      ResourceType.S3_BUCKETOBJECTLOCKCONFIGURATIONV2,
      () => new S3_BucketObjectLockConfigurationV2(),
    ],
    [ResourceType.S3_BUCKETOBJECTV2, () => new S3_BucketObjectv2()],
    [
      ResourceType.S3_BUCKETOWNERSHIPCONTROLS,
      () => new S3_BucketOwnershipControls(),
    ],
    [ResourceType.S3_BUCKETPOLICY, () => new S3_BucketPolicy()],
    [
      ResourceType.S3_BUCKETPUBLICACCESSBLOCK,
      () => new S3_BucketPublicAccessBlock(),
    ],
    [
      ResourceType.S3_BUCKETREPLICATIONCONFIG,
      () => new S3_BucketReplicationConfig(),
    ],
    [
      ResourceType.S3_BUCKETREQUESTPAYMENTCONFIGURATIONV2,
      () => new S3_BucketRequestPaymentConfigurationV2(),
    ],
    [
      ResourceType.S3_BUCKETSERVERSIDEENCRYPTIONCONFIGURATIONV2,
      () => new S3_BucketServerSideEncryptionConfigurationV2(),
    ],
    [ResourceType.S3_BUCKETV2, () => new S3_BucketV2()],
    [ResourceType.S3_BUCKETVERSIONINGV2, () => new S3_BucketVersioningV2()],
    [
      ResourceType.S3_BUCKETWEBSITECONFIGURATIONV2,
      () => new S3_BucketWebsiteConfigurationV2(),
    ],
    [ResourceType.S3_DIRECTORYBUCKET, () => new S3_DirectoryBucket()],
    [ResourceType.S3_INVENTORY, () => new S3_Inventory()],
    [ResourceType.S3_OBJECTCOPY, () => new S3_ObjectCopy()],
    [ResourceType.S3CONTROL_ACCESSGRANT, () => new S3CONTROL_AccessGrant()],
    [
      ResourceType.S3CONTROL_ACCESSGRANTSINSTANCE,
      () => new S3CONTROL_AccessGrantsInstance(),
    ],
    [
      ResourceType.S3CONTROL_ACCESSGRANTSINSTANCERESOURCEPOLICY,
      () => new S3CONTROL_AccessGrantsInstanceResourcePolicy(),
    ],
    [
      ResourceType.S3CONTROL_ACCESSGRANTSLOCATION,
      () => new S3CONTROL_AccessGrantsLocation(),
    ],
    [
      ResourceType.S3CONTROL_ACCESSPOINTPOLICY,
      () => new S3CONTROL_AccessPointPolicy(),
    ],
    [ResourceType.S3CONTROL_BUCKET, () => new S3CONTROL_Bucket()],
    [
      ResourceType.S3CONTROL_BUCKETLIFECYCLECONFIGURATION,
      () => new S3CONTROL_BucketLifecycleConfiguration(),
    ],
    [ResourceType.S3CONTROL_BUCKETPOLICY, () => new S3CONTROL_BucketPolicy()],
    [
      ResourceType.S3CONTROL_MULTIREGIONACCESSPOINT,
      () => new S3CONTROL_MultiRegionAccessPoint(),
    ],
    [
      ResourceType.S3CONTROL_MULTIREGIONACCESSPOINTPOLICY,
      () => new S3CONTROL_MultiRegionAccessPointPolicy(),
    ],
    [
      ResourceType.S3CONTROL_OBJECTLAMBDAACCESSPOINT,
      () => new S3CONTROL_ObjectLambdaAccessPoint(),
    ],
    [
      ResourceType.S3CONTROL_OBJECTLAMBDAACCESSPOINTPOLICY,
      () => new S3CONTROL_ObjectLambdaAccessPointPolicy(),
    ],
    [
      ResourceType.S3CONTROL_STORAGELENSCONFIGURATION,
      () => new S3CONTROL_StorageLensConfiguration(),
    ],
    [ResourceType.S3OUTPOSTS_ENDPOINT, () => new S3OUTPOSTS_Endpoint()],
    [ResourceType.SAGEMAKER_APP, () => new SAGEMAKER_App()],
    [
      ResourceType.SAGEMAKER_APPIMAGECONFIG,
      () => new SAGEMAKER_AppImageConfig(),
    ],
    [
      ResourceType.SAGEMAKER_CODEREPOSITORY,
      () => new SAGEMAKER_CodeRepository(),
    ],
    [
      ResourceType.SAGEMAKER_DATAQUALITYJOBDEFINITION,
      () => new SAGEMAKER_DataQualityJobDefinition(),
    ],
    [ResourceType.SAGEMAKER_DEVICE, () => new SAGEMAKER_Device()],
    [ResourceType.SAGEMAKER_DEVICEFLEET, () => new SAGEMAKER_DeviceFleet()],
    [ResourceType.SAGEMAKER_DOMAIN, () => new SAGEMAKER_Domain()],
    [ResourceType.SAGEMAKER_ENDPOINT, () => new SAGEMAKER_Endpoint()],
    [
      ResourceType.SAGEMAKER_ENDPOINTCONFIGURATION,
      () => new SAGEMAKER_EndpointConfiguration(),
    ],
    [ResourceType.SAGEMAKER_FEATUREGROUP, () => new SAGEMAKER_FeatureGroup()],
    [
      ResourceType.SAGEMAKER_FLOWDEFINITION,
      () => new SAGEMAKER_FlowDefinition(),
    ],
    [ResourceType.SAGEMAKER_HUMANTASKUI, () => new SAGEMAKER_HumanTaskUI()],
    [ResourceType.SAGEMAKER_IMAGE, () => new SAGEMAKER_Image()],
    [ResourceType.SAGEMAKER_IMAGEVERSION, () => new SAGEMAKER_ImageVersion()],
    [ResourceType.SAGEMAKER_MODEL, () => new SAGEMAKER_Model()],
    [
      ResourceType.SAGEMAKER_MODELPACKAGEGROUP,
      () => new SAGEMAKER_ModelPackageGroup(),
    ],
    [
      ResourceType.SAGEMAKER_MODELPACKAGEGROUPPOLICY,
      () => new SAGEMAKER_ModelPackageGroupPolicy(),
    ],
    [
      ResourceType.SAGEMAKER_MONITORINGSCHEDULE,
      () => new SAGEMAKER_MonitoringSchedule(),
    ],
    [
      ResourceType.SAGEMAKER_NOTEBOOKINSTANCE,
      () => new SAGEMAKER_NotebookInstance(),
    ],
    [
      ResourceType.SAGEMAKER_NOTEBOOKINSTANCELIFECYCLECONFIGURATION,
      () => new SAGEMAKER_NotebookInstanceLifecycleConfiguration(),
    ],
    [ResourceType.SAGEMAKER_PIPELINE, () => new SAGEMAKER_Pipeline()],
    [ResourceType.SAGEMAKER_PROJECT, () => new SAGEMAKER_Project()],
    [
      ResourceType.SAGEMAKER_SERVICECATALOGPORTFOLIOSTATUS,
      () => new SAGEMAKER_ServicecatalogPortfolioStatus(),
    ],
    [ResourceType.SAGEMAKER_SPACE, () => new SAGEMAKER_Space()],
    [
      ResourceType.SAGEMAKER_STUDIOLIFECYCLECONFIG,
      () => new SAGEMAKER_StudioLifecycleConfig(),
    ],
    [ResourceType.SAGEMAKER_USERPROFILE, () => new SAGEMAKER_UserProfile()],
    [ResourceType.SAGEMAKER_WORKFORCE, () => new SAGEMAKER_Workforce()],
    [ResourceType.SAGEMAKER_WORKTEAM, () => new SAGEMAKER_Workteam()],
    [ResourceType.SCHEDULER_SCHEDULE, () => new SCHEDULER_Schedule()],
    [ResourceType.SCHEDULER_SCHEDULEGROUP, () => new SCHEDULER_ScheduleGroup()],
    [ResourceType.SCHEMAS_DISCOVERER, () => new SCHEMAS_Discoverer()],
    [ResourceType.SCHEMAS_REGISTRY, () => new SCHEMAS_Registry()],
    [ResourceType.SCHEMAS_REGISTRYPOLICY, () => new SCHEMAS_RegistryPolicy()],
    [ResourceType.SCHEMAS_SCHEMA, () => new SCHEMAS_Schema()],
    [ResourceType.SECRETSMANAGER_SECRET, () => new SECRETSMANAGER_Secret()],
    [
      ResourceType.SECRETSMANAGER_SECRETPOLICY,
      () => new SECRETSMANAGER_SecretPolicy(),
    ],
    [
      ResourceType.SECRETSMANAGER_SECRETROTATION,
      () => new SECRETSMANAGER_SecretRotation(),
    ],
    [
      ResourceType.SECRETSMANAGER_SECRETVERSION,
      () => new SECRETSMANAGER_SecretVersion(),
    ],
    [ResourceType.SECURITYHUB_ACCOUNT, () => new SECURITYHUB_Account()],
    [
      ResourceType.SECURITYHUB_ACTIONTARGET,
      () => new SECURITYHUB_ActionTarget(),
    ],
    [
      ResourceType.SECURITYHUB_AUTOMATIONRULE,
      () => new SECURITYHUB_AutomationRule(),
    ],
    [
      ResourceType.SECURITYHUB_CONFIGURATIONPOLICY,
      () => new SECURITYHUB_ConfigurationPolicy(),
    ],
    [
      ResourceType.SECURITYHUB_CONFIGURATIONPOLICYASSOCIATION,
      () => new SECURITYHUB_ConfigurationPolicyAssociation(),
    ],
    [
      ResourceType.SECURITYHUB_FINDINGAGGREGATOR,
      () => new SECURITYHUB_FindingAggregator(),
    ],
    [ResourceType.SECURITYHUB_INSIGHT, () => new SECURITYHUB_Insight()],
    [
      ResourceType.SECURITYHUB_INVITEACCEPTER,
      () => new SECURITYHUB_InviteAccepter(),
    ],
    [ResourceType.SECURITYHUB_MEMBER, () => new SECURITYHUB_Member()],
    [
      ResourceType.SECURITYHUB_ORGANIZATIONADMINACCOUNT,
      () => new SECURITYHUB_OrganizationAdminAccount(),
    ],
    [
      ResourceType.SECURITYHUB_ORGANIZATIONCONFIGURATION,
      () => new SECURITYHUB_OrganizationConfiguration(),
    ],
    [
      ResourceType.SECURITYHUB_PRODUCTSUBSCRIPTION,
      () => new SECURITYHUB_ProductSubscription(),
    ],
    [
      ResourceType.SECURITYHUB_STANDARDSCONTROL,
      () => new SECURITYHUB_StandardsControl(),
    ],
    [
      ResourceType.SECURITYHUB_STANDARDSSUBSCRIPTION,
      () => new SECURITYHUB_StandardsSubscription(),
    ],
    [
      ResourceType.SECURITYLAKE_AWSLOGSOURCE,
      () => new SECURITYLAKE_AwsLogSource(),
    ],
    [
      ResourceType.SECURITYLAKE_CUSTOMLOGSOURCE,
      () => new SECURITYLAKE_CustomLogSource(),
    ],
    [ResourceType.SECURITYLAKE_DATALAKE, () => new SECURITYLAKE_DataLake()],
    [ResourceType.SECURITYLAKE_SUBSCRIBER, () => new SECURITYLAKE_Subscriber()],
    [
      ResourceType.SECURITYLAKE_SUBSCRIBERNOTIFICATION,
      () => new SECURITYLAKE_SubscriberNotification(),
    ],
    [
      ResourceType.SERVERLESSREPOSITORY_CLOUDFORMATIONSTACK,
      () => new SERVERLESSREPOSITORY_CloudFormationStack(),
    ],
    [
      ResourceType.SERVICECATALOG_APPREGISTRYAPPLICATION,
      () => new SERVICECATALOG_AppregistryApplication(),
    ],
    [
      ResourceType.SERVICECATALOG_BUDGETRESOURCEASSOCIATION,
      () => new SERVICECATALOG_BudgetResourceAssociation(),
    ],
    [
      ResourceType.SERVICECATALOG_CONSTRAINT,
      () => new SERVICECATALOG_Constraint(),
    ],
    [
      ResourceType.SERVICECATALOG_ORGANIZATIONSACCESS,
      () => new SERVICECATALOG_OrganizationsAccess(),
    ],
    [
      ResourceType.SERVICECATALOG_PORTFOLIO,
      () => new SERVICECATALOG_Portfolio(),
    ],
    [
      ResourceType.SERVICECATALOG_PORTFOLIOSHARE,
      () => new SERVICECATALOG_PortfolioShare(),
    ],
    [
      ResourceType.SERVICECATALOG_PRINCIPALPORTFOLIOASSOCIATION,
      () => new SERVICECATALOG_PrincipalPortfolioAssociation(),
    ],
    [ResourceType.SERVICECATALOG_PRODUCT, () => new SERVICECATALOG_Product()],
    [
      ResourceType.SERVICECATALOG_PRODUCTPORTFOLIOASSOCIATION,
      () => new SERVICECATALOG_ProductPortfolioAssociation(),
    ],
    [
      ResourceType.SERVICECATALOG_PROVISIONEDPRODUCT,
      () => new SERVICECATALOG_ProvisionedProduct(),
    ],
    [
      ResourceType.SERVICECATALOG_PROVISIONINGARTIFACT,
      () => new SERVICECATALOG_ProvisioningArtifact(),
    ],
    [
      ResourceType.SERVICECATALOG_SERVICEACTION,
      () => new SERVICECATALOG_ServiceAction(),
    ],
    [
      ResourceType.SERVICECATALOG_TAGOPTION,
      () => new SERVICECATALOG_TagOption(),
    ],
    [
      ResourceType.SERVICECATALOG_TAGOPTIONRESOURCEASSOCIATION,
      () => new SERVICECATALOG_TagOptionResourceAssociation(),
    ],
    [
      ResourceType.SERVICEDISCOVERY_HTTPNAMESPACE,
      () => new SERVICEDISCOVERY_HttpNamespace(),
    ],
    [
      ResourceType.SERVICEDISCOVERY_INSTANCE,
      () => new SERVICEDISCOVERY_Instance(),
    ],
    [
      ResourceType.SERVICEDISCOVERY_PRIVATEDNSNAMESPACE,
      () => new SERVICEDISCOVERY_PrivateDnsNamespace(),
    ],
    [
      ResourceType.SERVICEDISCOVERY_PUBLICDNSNAMESPACE,
      () => new SERVICEDISCOVERY_PublicDnsNamespace(),
    ],
    [
      ResourceType.SERVICEDISCOVERY_SERVICE,
      () => new SERVICEDISCOVERY_Service(),
    ],
    [
      ResourceType.SERVICEQUOTAS_SERVICEQUOTA,
      () => new SERVICEQUOTAS_ServiceQuota(),
    ],
    [ResourceType.SERVICEQUOTAS_TEMPLATE, () => new SERVICEQUOTAS_Template()],
    [
      ResourceType.SERVICEQUOTAS_TEMPLATEASSOCIATION,
      () => new SERVICEQUOTAS_TemplateAssociation(),
    ],
    [
      ResourceType.SES_ACTIVERECEIPTRULESET,
      () => new SES_ActiveReceiptRuleSet(),
    ],
    [ResourceType.SES_CONFIGURATIONSET, () => new SES_ConfigurationSet()],
    [ResourceType.SES_DOMAINDKIM, () => new SES_DomainDkim()],
    [ResourceType.SES_DOMAINIDENTITY, () => new SES_DomainIdentity()],
    [
      ResourceType.SES_DOMAINIDENTITYVERIFICATION,
      () => new SES_DomainIdentityVerification(),
    ],
    [ResourceType.SES_EMAILIDENTITY, () => new SES_EmailIdentity()],
    [ResourceType.SES_EVENTDESTINATION, () => new SES_EventDestination()],
    [
      ResourceType.SES_IDENTITYNOTIFICATIONTOPIC,
      () => new SES_IdentityNotificationTopic(),
    ],
    [ResourceType.SES_IDENTITYPOLICY, () => new SES_IdentityPolicy()],
    [ResourceType.SES_MAILFROM, () => new SES_MailFrom()],
    [ResourceType.SES_RECEIPTFILTER, () => new SES_ReceiptFilter()],
    [ResourceType.SES_RECEIPTRULE, () => new SES_ReceiptRule()],
    [ResourceType.SES_RECEIPTRULESET, () => new SES_ReceiptRuleSet()],
    [ResourceType.SES_TEMPLATE, () => new SES_Template()],
    [
      ResourceType.SESV2_ACCOUNTVDMATTRIBUTES,
      () => new SESV2_AccountVdmAttributes(),
    ],
    [ResourceType.SESV2_CONFIGURATIONSET, () => new SESV2_ConfigurationSet()],
    [
      ResourceType.SESV2_CONFIGURATIONSETEVENTDESTINATION,
      () => new SESV2_ConfigurationSetEventDestination(),
    ],
    [ResourceType.SESV2_CONTACTLIST, () => new SESV2_ContactList()],
    [
      ResourceType.SESV2_DEDICATEDIPASSIGNMENT,
      () => new SESV2_DedicatedIpAssignment(),
    ],
    [ResourceType.SESV2_DEDICATEDIPPOOL, () => new SESV2_DedicatedIpPool()],
    [ResourceType.SESV2_EMAILIDENTITY, () => new SESV2_EmailIdentity()],
    [
      ResourceType.SESV2_EMAILIDENTITYFEEDBACKATTRIBUTES,
      () => new SESV2_EmailIdentityFeedbackAttributes(),
    ],
    [
      ResourceType.SESV2_EMAILIDENTITYMAILFROMATTRIBUTES,
      () => new SESV2_EmailIdentityMailFromAttributes(),
    ],
    [
      ResourceType.SESV2_EMAILIDENTITYPOLICY,
      () => new SESV2_EmailIdentityPolicy(),
    ],
    [ResourceType.SFN_ACTIVITY, () => new SFN_Activity()],
    [ResourceType.SFN_ALIAS, () => new SFN_Alias()],
    [ResourceType.SFN_STATEMACHINE, () => new SFN_StateMachine()],
    [
      ResourceType.SHIELD_APPLICATIONLAYERAUTOMATICRESPONSE,
      () => new SHIELD_ApplicationLayerAutomaticResponse(),
    ],
    [
      ResourceType.SHIELD_DRTACCESSLOGBUCKETASSOCIATION,
      () => new SHIELD_DrtAccessLogBucketAssociation(),
    ],
    [
      ResourceType.SHIELD_DRTACCESSROLEARNASSOCIATION,
      () => new SHIELD_DrtAccessRoleArnAssociation(),
    ],
    [
      ResourceType.SHIELD_PROACTIVEENGAGEMENT,
      () => new SHIELD_ProactiveEngagement(),
    ],
    [ResourceType.SHIELD_PROTECTION, () => new SHIELD_Protection()],
    [ResourceType.SHIELD_PROTECTIONGROUP, () => new SHIELD_ProtectionGroup()],
    [
      ResourceType.SHIELD_PROTECTIONHEALTHCHECKASSOCIATION,
      () => new SHIELD_ProtectionHealthCheckAssociation(),
    ],
    [ResourceType.SHIELD_SUBSCRIPTION, () => new SHIELD_Subscription()],
    [ResourceType.SIGNER_SIGNINGJOB, () => new SIGNER_SigningJob()],
    [ResourceType.SIGNER_SIGNINGPROFILE, () => new SIGNER_SigningProfile()],
    [
      ResourceType.SIGNER_SIGNINGPROFILEPERMISSION,
      () => new SIGNER_SigningProfilePermission(),
    ],
    [ResourceType.SIMPLEDB_DOMAIN, () => new SIMPLEDB_Domain()],
    [
      ResourceType.SNS_DATAPROTECTIONPOLICY,
      () => new SNS_DataProtectionPolicy(),
    ],
    [ResourceType.SNS_PLATFORMAPPLICATION, () => new SNS_PlatformApplication()],
    [ResourceType.SNS_SMSPREFERENCES, () => new SNS_SmsPreferences()],
    [ResourceType.SNS_TOPIC, () => new SNS_Topic()],
    [ResourceType.SNS_TOPICPOLICY, () => new SNS_TopicPolicy()],
    [ResourceType.SNS_TOPICSUBSCRIPTION, () => new SNS_TopicSubscription()],
    [ResourceType.SQS_QUEUE, () => new SQS_Queue()],
    [ResourceType.SQS_QUEUEPOLICY, () => new SQS_QueuePolicy()],
    [ResourceType.SQS_REDRIVEALLOWPOLICY, () => new SQS_RedriveAllowPolicy()],
    [ResourceType.SQS_REDRIVEPOLICY, () => new SQS_RedrivePolicy()],
    [ResourceType.SSM_ACTIVATION, () => new SSM_Activation()],
    [ResourceType.SSM_ASSOCIATION, () => new SSM_Association()],
    [ResourceType.SSM_CONTACTSROTATION, () => new SSM_ContactsRotation()],
    [
      ResourceType.SSM_DEFAULTPATCHBASELINE,
      () => new SSM_DefaultPatchBaseline(),
    ],
    [ResourceType.SSM_DOCUMENT, () => new SSM_Document()],
    [ResourceType.SSM_MAINTENANCEWINDOW, () => new SSM_MaintenanceWindow()],
    [
      ResourceType.SSM_MAINTENANCEWINDOWTARGET,
      () => new SSM_MaintenanceWindowTarget(),
    ],
    [
      ResourceType.SSM_MAINTENANCEWINDOWTASK,
      () => new SSM_MaintenanceWindowTask(),
    ],
    [ResourceType.SSM_PARAMETER, () => new SSM_Parameter()],
    [ResourceType.SSM_PATCHBASELINE, () => new SSM_PatchBaseline()],
    [ResourceType.SSM_PATCHGROUP, () => new SSM_PatchGroup()],
    [ResourceType.SSM_RESOURCEDATASYNC, () => new SSM_ResourceDataSync()],
    [ResourceType.SSM_SERVICESETTING, () => new SSM_ServiceSetting()],
    [ResourceType.SSMCONTACTS_CONTACT, () => new SSMCONTACTS_Contact()],
    [
      ResourceType.SSMCONTACTS_CONTACTCHANNEL,
      () => new SSMCONTACTS_ContactChannel(),
    ],
    [ResourceType.SSMCONTACTS_PLAN, () => new SSMCONTACTS_Plan()],
    [
      ResourceType.SSMINCIDENTS_REPLICATIONSET,
      () => new SSMINCIDENTS_ReplicationSet(),
    ],
    [
      ResourceType.SSMINCIDENTS_RESPONSEPLAN,
      () => new SSMINCIDENTS_ResponsePlan(),
    ],
    [
      ResourceType.SSOADMIN_ACCOUNTASSIGNMENT,
      () => new SSOADMIN_AccountAssignment(),
    ],
    [ResourceType.SSOADMIN_APPLICATION, () => new SSOADMIN_Application()],
    [
      ResourceType.SSOADMIN_APPLICATIONACCESSSCOPE,
      () => new SSOADMIN_ApplicationAccessScope(),
    ],
    [
      ResourceType.SSOADMIN_APPLICATIONASSIGNMENT,
      () => new SSOADMIN_ApplicationAssignment(),
    ],
    [
      ResourceType.SSOADMIN_APPLICATIONASSIGNMENTCONFIGURATION,
      () => new SSOADMIN_ApplicationAssignmentConfiguration(),
    ],
    [
      ResourceType.SSOADMIN_CUSTOMERMANAGEDPOLICYATTACHMENT,
      () => new SSOADMIN_CustomerManagedPolicyAttachment(),
    ],
    [
      ResourceType.SSOADMIN_INSTANCEACCESSCONTROLATTRIBUTES,
      () => new SSOADMIN_InstanceAccessControlAttributes(),
    ],
    [
      ResourceType.SSOADMIN_MANAGEDPOLICYATTACHMENT,
      () => new SSOADMIN_ManagedPolicyAttachment(),
    ],
    [
      ResourceType.SSOADMIN_PERMISSIONSBOUNDARYATTACHMENT,
      () => new SSOADMIN_PermissionsBoundaryAttachment(),
    ],
    [ResourceType.SSOADMIN_PERMISSIONSET, () => new SSOADMIN_PermissionSet()],
    [
      ResourceType.SSOADMIN_PERMISSIONSETINLINEPOLICY,
      () => new SSOADMIN_PermissionSetInlinePolicy(),
    ],
    [
      ResourceType.SSOADMIN_TRUSTEDTOKENISSUER,
      () => new SSOADMIN_TrustedTokenIssuer(),
    ],
    [ResourceType.STORAGEGATEWAY_CACHE, () => new STORAGEGATEWAY_Cache()],
    [
      ResourceType.STORAGEGATEWAY_CACHESISCSIVOLUME,
      () => new STORAGEGATEWAY_CachesIscsiVolume(),
    ],
    [
      ResourceType.STORAGEGATEWAY_FILESYSTEMASSOCIATION,
      () => new STORAGEGATEWAY_FileSystemAssociation(),
    ],
    [ResourceType.STORAGEGATEWAY_GATEWAY, () => new STORAGEGATEWAY_Gateway()],
    [
      ResourceType.STORAGEGATEWAY_NFSFILESHARE,
      () => new STORAGEGATEWAY_NfsFileShare(),
    ],
    [
      ResourceType.STORAGEGATEWAY_SMBFILESHARE,
      () => new STORAGEGATEWAY_SmbFileShare(),
    ],
    [
      ResourceType.STORAGEGATEWAY_STOREDISCSIVOLUME,
      () => new STORAGEGATEWAY_StoredIscsiVolume(),
    ],
    [ResourceType.STORAGEGATEWAY_TAPEPOOL, () => new STORAGEGATEWAY_TapePool()],
    [
      ResourceType.STORAGEGATEWAY_UPLOADBUFFER,
      () => new STORAGEGATEWAY_UploadBuffer(),
    ],
    [
      ResourceType.STORAGEGATEWAY_WORKINGSTORAGE,
      () => new STORAGEGATEWAY_WorkingStorage(),
    ],
    [ResourceType.SWF_DOMAIN, () => new SWF_Domain()],
    [ResourceType.SYNTHETICS_CANARY, () => new SYNTHETICS_Canary()],
    [ResourceType.SYNTHETICS_GROUP, () => new SYNTHETICS_Group()],
    [
      ResourceType.SYNTHETICS_GROUPASSOCIATION,
      () => new SYNTHETICS_GroupAssociation(),
    ],
    [
      ResourceType.TIMESTREAMINFLUXDB_DBINSTANCE,
      () => new TIMESTREAMINFLUXDB_DbInstance(),
    ],
    [
      ResourceType.TIMESTREAMWRITE_DATABASE,
      () => new TIMESTREAMWRITE_Database(),
    ],
    [ResourceType.TIMESTREAMWRITE_TABLE, () => new TIMESTREAMWRITE_Table()],
    [
      ResourceType.TRANSCRIBE_LANGUAGEMODEL,
      () => new TRANSCRIBE_LanguageModel(),
    ],
    [
      ResourceType.TRANSCRIBE_MEDICALVOCABULARY,
      () => new TRANSCRIBE_MedicalVocabulary(),
    ],
    [ResourceType.TRANSCRIBE_VOCABULARY, () => new TRANSCRIBE_Vocabulary()],
    [
      ResourceType.TRANSCRIBE_VOCABULARYFILTER,
      () => new TRANSCRIBE_VocabularyFilter(),
    ],
    [ResourceType.TRANSFER_ACCESS, () => new TRANSFER_Access()],
    [ResourceType.TRANSFER_AGREEMENT, () => new TRANSFER_Agreement()],
    [ResourceType.TRANSFER_CERTIFICATE, () => new TRANSFER_Certificate()],
    [ResourceType.TRANSFER_CONNECTOR, () => new TRANSFER_Connector()],
    [ResourceType.TRANSFER_PROFILE, () => new TRANSFER_Profile()],
    [ResourceType.TRANSFER_SERVER, () => new TRANSFER_Server()],
    [ResourceType.TRANSFER_SSHKEY, () => new TRANSFER_SshKey()],
    [ResourceType.TRANSFER_TAG, () => new TRANSFER_Tag()],
    [ResourceType.TRANSFER_USER, () => new TRANSFER_User()],
    [ResourceType.TRANSFER_WORKFLOW, () => new TRANSFER_Workflow()],
    [ResourceType.VERIFIEDACCESS_ENDPOINT, () => new VERIFIEDACCESS_Endpoint()],
    [ResourceType.VERIFIEDACCESS_GROUP, () => new VERIFIEDACCESS_Group()],
    [ResourceType.VERIFIEDACCESS_INSTANCE, () => new VERIFIEDACCESS_Instance()],
    [
      ResourceType.VERIFIEDACCESS_INSTANCELOGGINGCONFIGURATION,
      () => new VERIFIEDACCESS_InstanceLoggingConfiguration(),
    ],
    [
      ResourceType.VERIFIEDACCESS_INSTANCETRUSTPROVIDERATTACHMENT,
      () => new VERIFIEDACCESS_InstanceTrustProviderAttachment(),
    ],
    [
      ResourceType.VERIFIEDACCESS_TRUSTPROVIDER,
      () => new VERIFIEDACCESS_TrustProvider(),
    ],
    [
      ResourceType.VERIFIEDPERMISSIONS_IDENTITYSOURCE,
      () => new VERIFIEDPERMISSIONS_IdentitySource(),
    ],
    [
      ResourceType.VERIFIEDPERMISSIONS_POLICY,
      () => new VERIFIEDPERMISSIONS_Policy(),
    ],
    [
      ResourceType.VERIFIEDPERMISSIONS_POLICYSTORE,
      () => new VERIFIEDPERMISSIONS_PolicyStore(),
    ],
    [
      ResourceType.VERIFIEDPERMISSIONS_POLICYTEMPLATE,
      () => new VERIFIEDPERMISSIONS_PolicyTemplate(),
    ],
    [
      ResourceType.VERIFIEDPERMISSIONS_SCHEMA,
      () => new VERIFIEDPERMISSIONS_Schema(),
    ],
    [ResourceType.VPC_ENDPOINTPRIVATEDNS, () => new VPC_EndpointPrivateDns()],
    [
      ResourceType.VPC_ENDPOINTSERVICEPRIVATEDNSVERIFICATION,
      () => new VPC_EndpointServicePrivateDnsVerification(),
    ],
    [
      ResourceType.VPC_SECURITYGROUPEGRESSRULE,
      () => new VPC_SecurityGroupEgressRule(),
    ],
    [
      ResourceType.VPC_SECURITYGROUPINGRESSRULE,
      () => new VPC_SecurityGroupIngressRule(),
    ],
    [
      ResourceType.VPCLATTICE_ACCESSLOGSUBSCRIPTION,
      () => new VPCLATTICE_AccessLogSubscription(),
    ],
    [ResourceType.VPCLATTICE_AUTHPOLICY, () => new VPCLATTICE_AuthPolicy()],
    [ResourceType.VPCLATTICE_LISTENER, () => new VPCLATTICE_Listener()],
    [ResourceType.VPCLATTICE_LISTENERRULE, () => new VPCLATTICE_ListenerRule()],
    [
      ResourceType.VPCLATTICE_RESOURCEPOLICY,
      () => new VPCLATTICE_ResourcePolicy(),
    ],
    [ResourceType.VPCLATTICE_SERVICE, () => new VPCLATTICE_Service()],
    [
      ResourceType.VPCLATTICE_SERVICENETWORK,
      () => new VPCLATTICE_ServiceNetwork(),
    ],
    [
      ResourceType.VPCLATTICE_SERVICENETWORKSERVICEASSOCIATION,
      () => new VPCLATTICE_ServiceNetworkServiceAssociation(),
    ],
    [
      ResourceType.VPCLATTICE_SERVICENETWORKVPCASSOCIATION,
      () => new VPCLATTICE_ServiceNetworkVpcAssociation(),
    ],
    [ResourceType.VPCLATTICE_TARGETGROUP, () => new VPCLATTICE_TargetGroup()],
    [
      ResourceType.VPCLATTICE_TARGETGROUPATTACHMENT,
      () => new VPCLATTICE_TargetGroupAttachment(),
    ],
    [ResourceType.WAF_BYTEMATCHSET, () => new WAF_ByteMatchSet()],
    [ResourceType.WAF_GEOMATCHSET, () => new WAF_GeoMatchSet()],
    [ResourceType.WAF_IPSET, () => new WAF_IpSet()],
    [ResourceType.WAF_RATEBASEDRULE, () => new WAF_RateBasedRule()],
    [ResourceType.WAF_REGEXMATCHSET, () => new WAF_RegexMatchSet()],
    [ResourceType.WAF_REGEXPATTERNSET, () => new WAF_RegexPatternSet()],
    [ResourceType.WAF_RULE, () => new WAF_Rule()],
    [ResourceType.WAF_RULEGROUP, () => new WAF_RuleGroup()],
    [ResourceType.WAF_SIZECONSTRAINTSET, () => new WAF_SizeConstraintSet()],
    [
      ResourceType.WAF_SQLINJECTIONMATCHSET,
      () => new WAF_SqlInjectionMatchSet(),
    ],
    [ResourceType.WAF_WEBACL, () => new WAF_WebAcl()],
    [ResourceType.WAF_XSSMATCHSET, () => new WAF_XssMatchSet()],
    [
      ResourceType.WAFREGIONAL_BYTEMATCHSET,
      () => new WAFREGIONAL_ByteMatchSet(),
    ],
    [ResourceType.WAFREGIONAL_GEOMATCHSET, () => new WAFREGIONAL_GeoMatchSet()],
    [ResourceType.WAFREGIONAL_IPSET, () => new WAFREGIONAL_IpSet()],
    [
      ResourceType.WAFREGIONAL_RATEBASEDRULE,
      () => new WAFREGIONAL_RateBasedRule(),
    ],
    [
      ResourceType.WAFREGIONAL_REGEXMATCHSET,
      () => new WAFREGIONAL_RegexMatchSet(),
    ],
    [
      ResourceType.WAFREGIONAL_REGEXPATTERNSET,
      () => new WAFREGIONAL_RegexPatternSet(),
    ],
    [ResourceType.WAFREGIONAL_RULE, () => new WAFREGIONAL_Rule()],
    [ResourceType.WAFREGIONAL_RULEGROUP, () => new WAFREGIONAL_RuleGroup()],
    [
      ResourceType.WAFREGIONAL_SIZECONSTRAINTSET,
      () => new WAFREGIONAL_SizeConstraintSet(),
    ],
    [
      ResourceType.WAFREGIONAL_SQLINJECTIONMATCHSET,
      () => new WAFREGIONAL_SqlInjectionMatchSet(),
    ],
    [ResourceType.WAFREGIONAL_WEBACL, () => new WAFREGIONAL_WebAcl()],
    [
      ResourceType.WAFREGIONAL_WEBACLASSOCIATION,
      () => new WAFREGIONAL_WebAclAssociation(),
    ],
    [ResourceType.WAFREGIONAL_XSSMATCHSET, () => new WAFREGIONAL_XssMatchSet()],
    [ResourceType.WAFV2_IPSET, () => new WAFV2_IpSet()],
    [ResourceType.WAFV2_REGEXPATTERNSET, () => new WAFV2_RegexPatternSet()],
    [ResourceType.WAFV2_RULEGROUP, () => new WAFV2_RuleGroup()],
    [ResourceType.WAFV2_WEBACL, () => new WAFV2_WebAcl()],
    [ResourceType.WAFV2_WEBACLASSOCIATION, () => new WAFV2_WebAclAssociation()],
    [
      ResourceType.WAFV2_WEBACLLOGGINGCONFIGURATION,
      () => new WAFV2_WebAclLoggingConfiguration(),
    ],
    [ResourceType.WORKLINK_FLEET, () => new WORKLINK_Fleet()],
    [
      ResourceType.WORKLINK_WEBSITECERTIFICATEAUTHORITYASSOCIATION,
      () => new WORKLINK_WebsiteCertificateAuthorityAssociation(),
    ],
    [
      ResourceType.WORKSPACES_CONNECTIONALIAS,
      () => new WORKSPACES_ConnectionAlias(),
    ],
    [ResourceType.WORKSPACES_DIRECTORY, () => new WORKSPACES_Directory()],
    [ResourceType.WORKSPACES_IPGROUP, () => new WORKSPACES_IpGroup()],
    [ResourceType.WORKSPACES_WORKSPACE, () => new WORKSPACES_Workspace()],
    [ResourceType.XRAY_ENCRYPTIONCONFIG, () => new XRAY_EncryptionConfig()],
    [ResourceType.XRAY_GROUP, () => new XRAY_Group()],
    [ResourceType.XRAY_SAMPLINGRULE, () => new XRAY_SamplingRule()],
  ]);

  public static GetResourceObject(resType: ResourceType): DS_Resource {
    let map = this.ResourceFactoryMap1.get(resType);
    if (map == undefined) {
      map = this.ResourceFactoryMap2.get(resType);
    }

    return (map as () => DS_Resource)();
  }

  public static propertiesMap1: Map<ResourceType, ResourceProperty> = new Map([
    [
      ResourceType.ACCESSANALYZER_ANALYZER,
      new ResourceProperty(
        "Manages an Access Analyzer Analyzer. More information can be found in the [Access Analyzer User Guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html).",
        ACCESSANALYZER_Analyzer.GetTypes(),
      ),
    ],
    [
      ResourceType.ACCESSANALYZER_ARCHIVERULE,
      new ResourceProperty(
        "Resource for managing an AWS AccessAnalyzer Archive Rule.",
        ACCESSANALYZER_ArchiveRule.GetTypes(),
      ),
    ],
    [
      ResourceType.ACCOUNT_ALTERNATIVECONTACT,
      new ResourceProperty(
        "Manages the specified alternate contact attached to an AWS Account.",
        ACCOUNT_AlternativeContact.GetTypes(),
      ),
    ],
    [
      ResourceType.ACCOUNT_PRIMARYCONTACT,
      new ResourceProperty(
        "Manages the specified primary contact information associated with an AWS Account.",
        ACCOUNT_PrimaryContact.GetTypes(),
      ),
    ],
    [
      ResourceType.ACCOUNT_REGION,
      new ResourceProperty(
        "Enable (Opt-In) or Disable (Opt-Out) a particular Region for an AWS account.",
        ACCOUNT_Region.GetTypes(),
      ),
    ],
    [
      ResourceType.ACM_CERTIFICATE,
      new ResourceProperty(
        "The ACM certificate resource allows requesting and management of certificates from the Amazon Certificate Manager.  ACM certificates can be created in three ways: Amazon-issued, where AWS provides the certificate authority and automatically manages renewal; imported certificates, issued by another certificate authority; and private certificates, issued using an ACM Private Certificate Authority.  ## Amazon-Issued Certificates  For Amazon-issued certificates, this resource deals with requesting certificates and managing their attributes and life-cycle. This resource does not deal with validation of a certificate but can provide inputs for other resources implementing the validation. It does not wait for a certificate to be issued. Use a `aws.acm.CertificateValidation` resource for this.  Most commonly, this resource is used together with `aws.route53.Record` and `aws.acm.CertificateValidation` to request a DNS validated certificate, deploy the required validation records and wait for validation to complete.  Domain validation through email is also supported but should be avoided as it requires a manual step outside of this provider.   ## Certificates Imported from Other Certificate Authority  Imported certificates can be used to make certificates created with an external certificate authority available for AWS services.  As they are not managed by AWS, imported certificates are not eligible for automatic renewal. New certificate materials can be supplied to an existing imported certificate to update it in place.  ## Private Certificates  Private certificates are issued by an ACM Private Certificate Authority, which can be created using the resource type `aws.acmpca.CertificateAuthority`.  Private certificates created using this resource are eligible for managed renewal if they have been exported or associated with another AWS service. See [managed renewal documentation](https://docs.aws.amazon.com/acm/latest/userguide/managed-renewal.html) for more information. By default, a certificate is valid for 395 days and the managed renewal process will start 60 days before expiration. To renew the certificate earlier than 60 days before expiration, configure `early_renewal_duration`.",
        ACM_Certificate.GetTypes(),
      ),
    ],
    [
      ResourceType.ACM_CERTIFICATEVALIDATION,
      new ResourceProperty(
        "This resource represents a successful validation of an ACM certificate in concert with other resources.  Most commonly, this resource is used together with `aws.route53.Record` and `aws.acm.Certificate` to request a DNS validated certificate, deploy the required validation records and wait for validation to complete.  > --WARNING:-- This resource implements a part of the validation workflow. It does not represent a real-world entity in AWS, therefore changing or deleting this resource on its own has no immediate effect.",
        ACM_CertificateValidation.GetTypes(),
      ),
    ],
    [
      ResourceType.ACMPCA_CERTIFICATE,
      new ResourceProperty(
        "Provides a resource to issue a certificate using AWS Certificate Manager Private Certificate Authority (ACM PCA).  Certificates created using `aws.acmpca.Certificate` are not eligible for automatic renewal, and must be replaced instead. To issue a renewable certificate using an ACM PCA, create a `aws.acm.Certificate` with the parameter `certificate_authority_arn`.",
        ACMPCA_Certificate.GetTypes(),
      ),
    ],
    [
      ResourceType.ACMPCA_CERTIFICATEAUTHORITY,
      new ResourceProperty(
        "Provides a resource to manage AWS Certificate Manager Private Certificate Authorities (ACM PCA Certificate Authorities).  > --NOTE:-- Creating this resource will leave the certificate authority in a `PENDING_CERTIFICATE` status, which means it cannot yet issue certificates. To complete this setup, you must fully sign the certificate authority CSR available in the `certificate_signing_request` attribute. The `aws.acmpca.CertificateAuthorityCertificate` resource can be used for this purpose.",
        ACMPCA_CertificateAuthority.GetTypes(),
      ),
    ],
    [
      ResourceType.ACMPCA_CERTIFICATEAUTHORITYCERTIFICATE,
      new ResourceProperty(
        "Associates a certificate with an AWS Certificate Manager Private Certificate Authority (ACM PCA Certificate Authority). An ACM PCA Certificate Authority is unable to issue certificates until it has a certificate associated with it. A root level ACM PCA Certificate Authority is able to self-sign its own root certificate.",
        ACMPCA_CertificateAuthorityCertificate.GetTypes(),
      ),
    ],
    [
      ResourceType.ACMPCA_PERMISSION,
      new ResourceProperty(
        "Provides a resource to manage an AWS Certificate Manager Private Certificate Authorities Permission. Currently, this is only required in order to allow the ACM service to automatically renew certificates issued by a PCA.",
        ACMPCA_Permission.GetTypes(),
      ),
    ],
    [
      ResourceType.ACMPCA_POLICY,
      new ResourceProperty(
        "Attaches a resource based policy to a private CA.",
        ACMPCA_Policy.GetTypes(),
      ),
    ],
    [
      ResourceType.ALB_LISTENER,
      new ResourceProperty(
        "Provides a Load Balancer Listener resource.  > --Note:-- `aws.alb.Listener` is known as `aws.lb.Listener`. The functionality is identical.",
        ALB_Listener.GetTypes(),
      ),
    ],
    [
      ResourceType.ALB_LISTENERCERTIFICATE,
      new ResourceProperty(
        "Provides a Load Balancer Listener Certificate resource.  This resource is for additional certificates and does not replace the default certificate on the listener.  > --Note:-- `aws.alb.ListenerCertificate` is known as `aws.lb.ListenerCertificate`. The functionality is identical.",
        ALB_ListenerCertificate.GetTypes(),
      ),
    ],
    [
      ResourceType.ALB_LISTENERRULE,
      new ResourceProperty(
        "Provides a Load Balancer Listener Rule resource.  > --Note:-- `aws.alb.ListenerRule` is known as `aws.lb.ListenerRule`. The functionality is identical.",
        ALB_ListenerRule.GetTypes(),
      ),
    ],
    [
      ResourceType.ALB_LOADBALANCER,
      new ResourceProperty(
        "Provides a Load Balancer resource.  > --Note:-- `aws.alb.LoadBalancer` is known as `aws.lb.LoadBalancer`. The functionality is identical.",
        ALB_LoadBalancer.GetTypes(),
      ),
    ],
    [
      ResourceType.ALB_TARGETGROUP,
      new ResourceProperty(
        "Provides a Target Group resource for use with Load Balancer resources.  > --Note:-- `aws.alb.TargetGroup` is known as `aws.lb.TargetGroup`. The functionality is identical.",
        ALB_TargetGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.ALB_TARGETGROUPATTACHMENT,
      new ResourceProperty(
        "Provides the ability to register instances and containers with an Application Load Balancer (ALB) or Network Load Balancer (NLB) target group. For attaching resources with Elastic Load Balancer (ELB), see the `aws.elb.Attachment` resource.  > --Note:-- `aws.alb.TargetGroupAttachment` is known as `aws.lb.TargetGroupAttachment`. The functionality is identical.",
        ALB_TargetGroupAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.AMP_ALERTMANAGERDEFINITION,
      new ResourceProperty(
        "Manages an Amazon Managed Service for Prometheus (AMP) Alert Manager Definition",
        AMP_AlertManagerDefinition.GetTypes(),
      ),
    ],
    [
      ResourceType.AMP_RULEGROUPNAMESPACE,
      new ResourceProperty(
        "Manages an Amazon Managed Service for Prometheus (AMP) Rule Group Namespace",
        AMP_RuleGroupNamespace.GetTypes(),
      ),
    ],
    [
      ResourceType.AMP_SCRAPER,
      new ResourceProperty("", AMP_Scraper.GetTypes()),
    ],
    [
      ResourceType.AMP_WORKSPACE,
      new ResourceProperty(
        "Manages an Amazon Managed Service for Prometheus (AMP) Workspace.",
        AMP_Workspace.GetTypes(),
      ),
    ],
    [
      ResourceType.AMPLIFY_APP,
      new ResourceProperty(
        'Provides an Amplify App resource, a fullstack serverless app hosted on the [AWS Amplify Console](https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html).  > --Note:-- When you create/update an Amplify App from the provider, you may end up with the error "BadRequestException: You should at least provide one valid token" because of authentication issues. See the section "Repository with Tokens" below.',
        AMPLIFY_App.GetTypes(),
      ),
    ],
    [
      ResourceType.AMPLIFY_BACKENDENVIRONMENT,
      new ResourceProperty(
        "Provides an Amplify Backend Environment resource.",
        AMPLIFY_BackendEnvironment.GetTypes(),
      ),
    ],
    [
      ResourceType.AMPLIFY_BRANCH,
      new ResourceProperty(
        "Provides an Amplify Branch resource.",
        AMPLIFY_Branch.GetTypes(),
      ),
    ],
    [
      ResourceType.AMPLIFY_DOMAINASSOCIATION,
      new ResourceProperty(
        "Provides an Amplify Domain Association resource.",
        AMPLIFY_DomainAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.AMPLIFY_WEBHOOK,
      new ResourceProperty(
        "Provides an Amplify Webhook resource.",
        AMPLIFY_Webhook.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_ACCOUNT,
      new ResourceProperty(
        "Provides a settings of an API Gateway Account. Settings is applied region-wide per `provider` block.  > --Note:-- As there is no API method for deleting account settings or resetting it to defaults, destroying this resource will keep your account settings intact",
        APIGATEWAY_Account.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_APIKEY,
      new ResourceProperty(
        "Provides an API Gateway API Key.  > --NOTE:-- Since the API Gateway usage plans feature was launched on August 11, 2016, usage plans are now --required-- to associate an API key with an API stage.",
        APIGATEWAY_ApiKey.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_AUTHORIZER,
      new ResourceProperty(
        "Provides an API Gateway Authorizer.",
        APIGATEWAY_Authorizer.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_BASEPATHMAPPING,
      new ResourceProperty(
        "Connects a custom domain name registered via `aws.apigateway.DomainName`",
        APIGATEWAY_BasePathMapping.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_CLIENTCERTIFICATE,
      new ResourceProperty(
        "Provides an API Gateway Client Certificate.",
        APIGATEWAY_ClientCertificate.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_DEPLOYMENT,
      new ResourceProperty(
        "Manages an API Gateway REST Deployment. A deployment is a snapshot of the REST API configuration. The deployment can then be published to callable endpoints via the `aws.apigateway.Stage` resource and optionally managed further with the `aws.apigateway.BasePathMapping` resource, `aws.apigateway.DomainName` resource, and `aws_api_method_settings` resource. For more information, see the [API Gateway Developer Guide](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-deploy-api.html).  To properly capture all REST API configuration in a deployment, this resource must have dependencies on all prior resources that manage resources/paths, methods, integrations, etc.  - For REST APIs that are configured via OpenAPI specification (`aws.apigateway.RestApi` resource `body` argument), no special dependency setup is needed beyond referencing the  `id` attribute of that resource unless additional resources have further customized the REST API. - When the REST API configuration involves other resources (`aws.apigateway.Integration` resource), the dependency setup can be done with implicit resource references in the `triggers` argument or explicit resource references using the [resource `dependsOn` custom option](https://www.pulumi.com/docs/intro/concepts/resources/#dependson). The `triggers` argument should be preferred over `depends_on`, since `depends_on` can only capture dependency ordering and will not cause the resource to recreate (redeploy the REST API) with upstream configuration changes.  !> --WARNING:-- It is recommended to use the `aws.apigateway.Stage` resource instead of managing an API Gateway Stage via the `stage_name` argument of this resource. When this resource is recreated (REST API redeployment) with the `stage_name` configured, the stage is deleted and recreated. This will cause a temporary service interruption, increase provide plan differences, and can require a second apply to recreate any downstream stage configuration such as associated `aws_api_method_settings` resources.",
        APIGATEWAY_Deployment.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_DOCUMENTATIONPART,
      new ResourceProperty(
        "Provides a settings of an API Gateway Documentation Part.",
        APIGATEWAY_DocumentationPart.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_DOCUMENTATIONVERSION,
      new ResourceProperty(
        "Provides a resource to manage an API Gateway Documentation Version.",
        APIGATEWAY_DocumentationVersion.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_DOMAINNAME,
      new ResourceProperty(
        "Registers a custom domain name for use with AWS API Gateway. Additional information about this functionality can be found in the [API Gateway Developer Guide](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html).  This resource just establishes ownership of and the TLS settings for a particular domain name. An API can be attached to a particular path under the registered domain name using the `aws.apigateway.BasePathMapping` resource.  API Gateway domains can be defined as either 'edge-optimized' or 'regional'.  In an edge-optimized configuration, API Gateway internally creates and manages a CloudFront distribution to route requests on the given hostname. In addition to this resource it's necessary to create a DNS record corresponding to the given domain name which is an alias (either Route53 alias or traditional CNAME) to the Cloudfront domain name exported in the `cloudfront_domain_name` attribute.  In a regional configuration, API Gateway does not create a CloudFront distribution to route requests to the API, though a distribution can be created if needed. In either case, it is necessary to create a DNS record corresponding to the given domain name which is an alias (either Route53 alias or traditional CNAME) to the regional domain name exported in the `regional_domain_name` attribute.  > --Note:-- API Gateway requires the use of AWS Certificate Manager (ACM) certificates instead of Identity and Access Management (IAM) certificates in regions that support ACM. Regions that support ACM can be found in the [Regions and Endpoints Documentation](https://docs.aws.amazon.com/general/latest/gr/rande.html#acm_region). To import an existing private key and certificate into ACM or request an ACM certificate, see the `aws.acm.Certificate` resource.  > --Note:-- The `aws.apigateway.DomainName` resource expects dependency on the `aws.acm.CertificateValidation` as only verified certificates can be used. This can be made either explicitly by adding the `depends_on = [aws_acm_certificate_validation.cert]` attribute. Or implicitly by referring certificate ARN from the validation resource where it will be available after the resource creation: `regional_certificate_arn = aws_acm_certificate_validation.cert.certificate_arn`.",
        APIGATEWAY_DomainName.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_INTEGRATION,
      new ResourceProperty(
        "Provides an HTTP Method Integration for an API Gateway Integration.",
        APIGATEWAY_Integration.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_INTEGRATIONRESPONSE,
      new ResourceProperty(
        "Provides an HTTP Method Integration Response for an API Gateway Resource.  > --Note:-- Depends on having `aws.apigateway.Integration` inside your rest api. To ensure this you might need to add an explicit `depends_on` for clean runs.",
        APIGATEWAY_IntegrationResponse.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_METHOD,
      new ResourceProperty(
        "Provides a HTTP Method for an API Gateway Resource.",
        APIGATEWAY_Method.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_METHODRESPONSE,
      new ResourceProperty(
        "Provides an HTTP Method Response for an API Gateway Resource. More information about API Gateway method responses can be found in the [Amazon API Gateway Developer Guide](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-settings-method-response.html).",
        APIGATEWAY_MethodResponse.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_METHODSETTINGS,
      new ResourceProperty(
        "Manages API Gateway Stage Method Settings. For example, CloudWatch logging and metrics.  > --NOTE:-- We recommend using this resource in conjunction with the `aws.apigateway.Stage` resource instead of a stage managed by the `aws.apigateway.Deployment` resource optional `stage_name` argument. Stages managed by the `aws.apigateway.Deployment` resource are recreated on redeployment and this resource will require a second apply to recreate the method settings.",
        APIGATEWAY_MethodSettings.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_MODEL,
      new ResourceProperty(
        "Provides a Model for a REST API Gateway.",
        APIGATEWAY_Model.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_REQUESTVALIDATOR,
      new ResourceProperty(
        "Manages an API Gateway Request Validator.",
        APIGATEWAY_RequestValidator.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_RESOURCE,
      new ResourceProperty(
        "Provides an API Gateway Resource.",
        APIGATEWAY_Resource.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_RESPONSE,
      new ResourceProperty(
        "Provides an API Gateway Gateway Response for a REST API Gateway.",
        APIGATEWAY_Response.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_RESTAPI,
      new ResourceProperty(
        "Manages an API Gateway REST API. The REST API can be configured via [importing an OpenAPI specification](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-import-api.html) in the `body` argument (with other arguments serving as overrides) or via other provider resources to manage the resources (`aws.apigateway.Resource` resource), methods (`aws.apigateway.Method` resource), integrations (`aws.apigateway.Integration` resource), etc. of the REST API. Once the REST API is configured, the `aws.apigateway.Deployment` resource can be used along with the `aws.apigateway.Stage` resource to publish the REST API.  > --Note:-- Amazon API Gateway Version 1 resources are used for creating and deploying REST APIs. To create and deploy WebSocket and HTTP APIs, use Amazon API Gateway Version 2 resources.  !> --WARN:-- When importing Open API Specifications with the `body` argument, by default the API Gateway REST API will be replaced with the Open API Specification thus removing any existing methods, resources, integrations, or endpoints. Endpoint mutations are asynchronous operations, and race conditions with DNS are possible. To overcome this limitation, use the `put_rest_api_mode` attribute and set it to `merge`.",
        APIGATEWAY_RestApi.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_RESTAPIPOLICY,
      new ResourceProperty(
        "Provides an API Gateway REST API Policy.  > --Note:-- Amazon API Gateway Version 1 resources are used for creating and deploying REST APIs. To create and deploy WebSocket and HTTP APIs, use Amazon API Gateway Version 2 resources.",
        APIGATEWAY_RestApiPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_STAGE,
      new ResourceProperty(
        "Manages an API Gateway Stage. A stage is a named reference to a deployment, which can be done via the `aws.apigateway.Deployment` resource. Stages can be optionally managed further with the `aws.apigateway.BasePathMapping` resource, `aws.apigateway.DomainName` resource, and `aws_api_method_settings` resource. For more information, see the [API Gateway Developer Guide](https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-stages.html).",
        APIGATEWAY_Stage.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_USAGEPLAN,
      new ResourceProperty(
        "Provides an API Gateway Usage Plan.",
        APIGATEWAY_UsagePlan.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_USAGEPLANKEY,
      new ResourceProperty(
        "Provides an API Gateway Usage Plan Key.",
        APIGATEWAY_UsagePlanKey.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAY_VPCLINK,
      new ResourceProperty(
        "Provides an API Gateway VPC Link.  > --Note:-- Amazon API Gateway Version 1 VPC Links enable private integrations that connect REST APIs to private resources in a VPC. To enable private integration for HTTP APIs, use the Amazon API Gateway Version 2 VPC Link resource.",
        APIGATEWAY_VpcLink.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAYV2_API,
      new ResourceProperty(
        "Manages an Amazon API Gateway Version 2 API.  > --Note:-- Amazon API Gateway Version 2 resources are used for creating and deploying WebSocket and HTTP APIs. To create and deploy REST APIs, use Amazon API Gateway Version 1 resources.",
        APIGATEWAYV2_Api.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAYV2_APIMAPPING,
      new ResourceProperty(
        "Manages an Amazon API Gateway Version 2 API mapping. More information can be found in the [Amazon API Gateway Developer Guide](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html).",
        APIGATEWAYV2_ApiMapping.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAYV2_AUTHORIZER,
      new ResourceProperty(
        "Manages an Amazon API Gateway Version 2 authorizer. More information can be found in the [Amazon API Gateway Developer Guide](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api.html).",
        APIGATEWAYV2_Authorizer.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAYV2_DEPLOYMENT,
      new ResourceProperty(
        "Manages an Amazon API Gateway Version 2 deployment. More information can be found in the [Amazon API Gateway Developer Guide](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api.html).  > --Note:-- Creating a deployment for an API requires at least one `aws.apigatewayv2.Route` resource associated with that API. To avoid race conditions when all resources are being created together, you need to add implicit resource references via the `triggers` argument or explicit resource references using the [resource `dependsOn` meta-argument](https://www.pulumi.com/docs/intro/concepts/programming-model/#dependson).",
        APIGATEWAYV2_Deployment.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAYV2_DOMAINNAME,
      new ResourceProperty(
        "Manages an Amazon API Gateway Version 2 domain name. More information can be found in the [Amazon API Gateway Developer Guide](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html).  > --Note:-- This resource establishes ownership of and the TLS settings for a particular domain name. An API stage can be associated with the domain name using the `aws.apigatewayv2.ApiMapping` resource.",
        APIGATEWAYV2_DomainName.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAYV2_INTEGRATION,
      new ResourceProperty(
        "Manages an Amazon API Gateway Version 2 integration. More information can be found in the [Amazon API Gateway Developer Guide](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api.html).",
        APIGATEWAYV2_Integration.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAYV2_INTEGRATIONRESPONSE,
      new ResourceProperty(
        "Manages an Amazon API Gateway Version 2 integration response. More information can be found in the [Amazon API Gateway Developer Guide](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api.html).",
        APIGATEWAYV2_IntegrationResponse.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAYV2_MODEL,
      new ResourceProperty(
        "Manages an Amazon API Gateway Version 2 [model](https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html#models-mappings-models).",
        APIGATEWAYV2_Model.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAYV2_ROUTE,
      new ResourceProperty(
        "Manages an Amazon API Gateway Version 2 route. More information can be found in the [Amazon API Gateway Developer Guide](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html) for [WebSocket](https://docs.aws.amazon.com/apigateway/latest/developerguide/websocket-api-develop-routes.html) and [HTTP](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-routes.html) APIs.",
        APIGATEWAYV2_Route.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAYV2_ROUTERESPONSE,
      new ResourceProperty(
        "Manages an Amazon API Gateway Version 2 route response. More information can be found in the [Amazon API Gateway Developer Guide](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api.html).",
        APIGATEWAYV2_RouteResponse.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAYV2_STAGE,
      new ResourceProperty(
        "Manages an Amazon API Gateway Version 2 stage. More information can be found in the [Amazon API Gateway Developer Guide](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api.html).",
        APIGATEWAYV2_Stage.GetTypes(),
      ),
    ],
    [
      ResourceType.APIGATEWAYV2_VPCLINK,
      new ResourceProperty(
        "Manages an Amazon API Gateway Version 2 VPC Link.  > --Note:-- Amazon API Gateway Version 2 VPC Links enable private integrations that connect HTTP APIs to private resources in a VPC. To enable private integration for REST APIs, use the Amazon API Gateway Version 1 VPC Link resource.",
        APIGATEWAYV2_VpcLink.GetTypes(),
      ),
    ],
    [
      ResourceType.APPAUTOSCALING_POLICY,
      new ResourceProperty(
        "Provides an Application AutoScaling Policy resource.",
        APPAUTOSCALING_Policy.GetTypes(),
      ),
    ],
    [
      ResourceType.APPAUTOSCALING_SCHEDULEDACTION,
      new ResourceProperty(
        "Provides an Application AutoScaling ScheduledAction resource.",
        APPAUTOSCALING_ScheduledAction.GetTypes(),
      ),
    ],
    [
      ResourceType.APPAUTOSCALING_TARGET,
      new ResourceProperty(
        "Provides an Application AutoScaling ScalableTarget resource. To manage policies which get attached to the target, see the `aws.appautoscaling.Policy` resource.  > --NOTE:-- Scalable targets created before 2023-03-20 may not have an assigned `arn`. These resource cannot use `tags` or participate in `default_tags`. To prevent `pulumi preview` showing differences that can never be reconciled, use the `lifecycle.ignore_changes` meta-argument. See the example below.  > --NOTE:-- The [Application Auto Scaling service automatically attempts to manage IAM Service-Linked Roles](https://docs.aws.amazon.com/autoscaling/application/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-roles) when registering certain service namespaces for the first time. To manually manage this role, see the `aws.iam.ServiceLinkedRole` resource.",
        APPAUTOSCALING_Target.GetTypes(),
      ),
    ],
    [
      ResourceType.APPCONFIG_APPLICATION,
      new ResourceProperty(
        "Provides an AppConfig Application resource.",
        APPCONFIG_Application.GetTypes(),
      ),
    ],
    [
      ResourceType.APPCONFIG_CONFIGURATIONPROFILE,
      new ResourceProperty(
        "Provides an AppConfig Configuration Profile resource.",
        APPCONFIG_ConfigurationProfile.GetTypes(),
      ),
    ],
    [
      ResourceType.APPCONFIG_DEPLOYMENT,
      new ResourceProperty(
        "Provides an AppConfig Deployment resource for an `aws.appconfig.Application` resource.",
        APPCONFIG_Deployment.GetTypes(),
      ),
    ],
    [
      ResourceType.APPCONFIG_DEPLOYMENTSTRATEGY,
      new ResourceProperty(
        "Provides an AppConfig Deployment Strategy resource.",
        APPCONFIG_DeploymentStrategy.GetTypes(),
      ),
    ],
    [
      ResourceType.APPCONFIG_ENVIRONMENT,
      new ResourceProperty(
        "Provides an AppConfig Environment resource for an `aws.appconfig.Application` resource. One or more environments can be defined for an application.",
        APPCONFIG_Environment.GetTypes(),
      ),
    ],
    [
      ResourceType.APPCONFIG_EVENTINTEGRATION,
      new ResourceProperty(
        "Provides an Amazon AppIntegrations Event Integration resource.",
        APPCONFIG_EventIntegration.GetTypes(),
      ),
    ],
    [
      ResourceType.APPCONFIG_EXTENSION,
      new ResourceProperty(
        "Provides an AppConfig Extension resource.",
        APPCONFIG_Extension.GetTypes(),
      ),
    ],
    [
      ResourceType.APPCONFIG_EXTENSIONASSOCIATION,
      new ResourceProperty(
        "Associates an AppConfig Extension with a Resource.",
        APPCONFIG_ExtensionAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.APPCONFIG_HOSTEDCONFIGURATIONVERSION,
      new ResourceProperty(
        "Provides an AppConfig Hosted Configuration Version resource.",
        APPCONFIG_HostedConfigurationVersion.GetTypes(),
      ),
    ],
    [
      ResourceType.APPFABRIC_APPAUTHORIZATION,
      new ResourceProperty(
        "Resource for managing an AWS AppFabric App Authorization.",
        APPFABRIC_AppAuthorization.GetTypes(),
      ),
    ],
    [
      ResourceType.APPFABRIC_APPAUTHORIZATIONCONNECTION,
      new ResourceProperty(
        "Resource for managing an AWS AppFabric App Authorization Connection.",
        APPFABRIC_AppAuthorizationConnection.GetTypes(),
      ),
    ],
    [
      ResourceType.APPFABRIC_APPBUNDLE,
      new ResourceProperty(
        "Resource for managing an AWS AppFabric AppBundle.",
        APPFABRIC_AppBundle.GetTypes(),
      ),
    ],
    [
      ResourceType.APPFABRIC_INGESTION,
      new ResourceProperty(
        "Resource for managing an AWS AppFabric Ingestion.",
        APPFABRIC_Ingestion.GetTypes(),
      ),
    ],
    [
      ResourceType.APPFABRIC_INGESTIONDESTINATION,
      new ResourceProperty(
        "Resource for managing an AWS AppFabric Ingestion Destination.",
        APPFABRIC_IngestionDestination.GetTypes(),
      ),
    ],
    [
      ResourceType.APPFLOW_CONNECTORPROFILE,
      new ResourceProperty(
        "Provides an AppFlow connector profile resource.  For information about AppFlow flows, see the [Amazon AppFlow API Reference](https://docs.aws.amazon.com/appflow/1.0/APIReference/Welcome.html). For specific information about creating an AppFlow connector profile, see the [CreateConnectorProfile](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_CreateConnectorProfile.html) page in the Amazon AppFlow API Reference.",
        APPFLOW_ConnectorProfile.GetTypes(),
      ),
    ],
    [
      ResourceType.APPFLOW_FLOW,
      new ResourceProperty(
        "Provides an AppFlow flow resource.",
        APPFLOW_Flow.GetTypes(),
      ),
    ],
    [
      ResourceType.APPINTEGRATIONS_DATAINTEGRATION,
      new ResourceProperty(
        "Provides an Amazon AppIntegrations Data Integration resource.",
        APPINTEGRATIONS_DataIntegration.GetTypes(),
      ),
    ],
    [
      ResourceType.APPLICATIONINSIGHTS_APPLICATION,
      new ResourceProperty(
        "Provides a ApplicationInsights Application resource.",
        APPLICATIONINSIGHTS_Application.GetTypes(),
      ),
    ],
    [
      ResourceType.APPMESH_GATEWAYROUTE,
      new ResourceProperty(
        "Provides an AWS App Mesh gateway route resource.",
        APPMESH_GatewayRoute.GetTypes(),
      ),
    ],
    [
      ResourceType.APPMESH_MESH,
      new ResourceProperty(
        "Provides an AWS App Mesh service mesh resource.",
        APPMESH_Mesh.GetTypes(),
      ),
    ],
    [
      ResourceType.APPMESH_ROUTE,
      new ResourceProperty(
        "Provides an AWS App Mesh route resource.",
        APPMESH_Route.GetTypes(),
      ),
    ],
    [
      ResourceType.APPMESH_VIRTUALGATEWAY,
      new ResourceProperty(
        "Provides an AWS App Mesh virtual gateway resource.",
        APPMESH_VirtualGateway.GetTypes(),
      ),
    ],
    [
      ResourceType.APPMESH_VIRTUALNODE,
      new ResourceProperty(
        "Provides an AWS App Mesh virtual node resource.  ## Breaking Changes  Because of backward incompatible API changes (read [here](https://github.com/awslabs/aws-app-mesh-examples/issues/92)), `aws.appmesh.VirtualNode` resource definitions created with provider versions earlier than v2.3.0 will need to be modified:  - Rename the `service_name` attribute of the `dns` object to `hostname`.  - Replace the `backends` attribute of the `spec` object with one or more `backend` configuration blocks, setting `virtual_service_name` to the name of the service.  The state associated with existing resources will automatically be migrated.",
        APPMESH_VirtualNode.GetTypes(),
      ),
    ],
    [
      ResourceType.APPMESH_VIRTUALROUTER,
      new ResourceProperty(
        "Provides an AWS App Mesh virtual router resource.  ## Breaking Changes  Because of backward incompatible API changes (read [here](https://github.com/awslabs/aws-app-mesh-examples/issues/92) and [here](https://github.com/awslabs/aws-app-mesh-examples/issues/94)), `aws.appmesh.VirtualRouter` resource definitions created with provider versions earlier than v2.3.0 will need to be modified:  - Remove service `service_names` from the `spec` argument. AWS has created a `aws.appmesh.VirtualService` resource for each service name. Import these resource using `pulumi import`.  - Add a `listener` configuration block to the `spec` argument.  The state associated with existing resources will automatically be migrated.",
        APPMESH_VirtualRouter.GetTypes(),
      ),
    ],
    [
      ResourceType.APPMESH_VIRTUALSERVICE,
      new ResourceProperty(
        "Provides an AWS App Mesh virtual service resource.",
        APPMESH_VirtualService.GetTypes(),
      ),
    ],
    [
      ResourceType.APPRUNNER_AUTOSCALINGCONFIGURATIONVERSION,
      new ResourceProperty(
        "Manages an App Runner AutoScaling Configuration Version.",
        APPRUNNER_AutoScalingConfigurationVersion.GetTypes(),
      ),
    ],
    [
      ResourceType.APPRUNNER_CONNECTION,
      new ResourceProperty(
        "Manages an App Runner Connection.  > --NOTE:-- After creation, you must complete the authentication handshake using the App Runner console.",
        APPRUNNER_Connection.GetTypes(),
      ),
    ],
    [
      ResourceType.APPRUNNER_CUSTOMDOMAINASSOCIATION,
      new ResourceProperty(
        "Manages an App Runner Custom Domain association.  > --NOTE:-- After creation, you must use the information in the `certification_validation_records` attribute to add CNAME records to your Domain Name System (DNS). For each mapped domain name, add a mapping to the target App Runner subdomain (found in the `dns_target` attribute) and one or more certificate validation records. App Runner then performs DNS validation to verify that you own or control the domain name you associated. App Runner tracks domain validity in a certificate stored in AWS Certificate Manager (ACM).",
        APPRUNNER_CustomDomainAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.APPRUNNER_DEFAULTAUTOSCALINGCONFIGURATIONVERSION,
      new ResourceProperty(
        "Manages the default App Runner auto scaling configuration. When creating or updating this resource the existing default auto scaling configuration will be set to non-default automatically. When creating or updating this resource the configuration is automatically assigned as the default to the new services you create in the future. The new default designation doesn't affect the associations that were previously set for existing services. Each account can have only one default auto scaling configuration per Region.",
        APPRUNNER_DefaultAutoScalingConfigurationVersion.GetTypes(),
      ),
    ],
    [
      ResourceType.APPRUNNER_DEPLOYMENT,
      new ResourceProperty(
        "Manages an App Runner Deployment Operation.",
        APPRUNNER_Deployment.GetTypes(),
      ),
    ],
    [
      ResourceType.APPRUNNER_OBSERVABILITYCONFIGURATION,
      new ResourceProperty(
        "Manages an App Runner Observability Configuration.",
        APPRUNNER_ObservabilityConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.APPRUNNER_SERVICE,
      new ResourceProperty(
        "Manages an App Runner Service.",
        APPRUNNER_Service.GetTypes(),
      ),
    ],
    [
      ResourceType.APPRUNNER_VPCCONNECTOR,
      new ResourceProperty(
        "Manages an App Runner VPC Connector.",
        APPRUNNER_VpcConnector.GetTypes(),
      ),
    ],
    [
      ResourceType.APPRUNNER_VPCINGRESSCONNECTION,
      new ResourceProperty(
        "Manages an App Runner VPC Ingress Connection.",
        APPRUNNER_VpcIngressConnection.GetTypes(),
      ),
    ],
    [
      ResourceType.APPSTREAM_DIRECTORYCONFIG,
      new ResourceProperty(
        "Provides an AppStream Directory Config.",
        APPSTREAM_DirectoryConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.APPSTREAM_FLEET,
      new ResourceProperty(
        "Provides an AppStream fleet.",
        APPSTREAM_Fleet.GetTypes(),
      ),
    ],
    [
      ResourceType.APPSTREAM_FLEETSTACKASSOCIATION,
      new ResourceProperty(
        "Manages an AppStream Fleet Stack association.",
        APPSTREAM_FleetStackAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.APPSTREAM_IMAGEBUILDER,
      new ResourceProperty(
        "Provides an AppStream image builder.",
        APPSTREAM_ImageBuilder.GetTypes(),
      ),
    ],
    [
      ResourceType.APPSTREAM_STACK,
      new ResourceProperty(
        "Provides an AppStream stack.",
        APPSTREAM_Stack.GetTypes(),
      ),
    ],
    [
      ResourceType.APPSTREAM_USER,
      new ResourceProperty(
        "Provides an AppStream user.",
        APPSTREAM_User.GetTypes(),
      ),
    ],
    [
      ResourceType.APPSTREAM_USERSTACKASSOCIATION,
      new ResourceProperty(
        "Manages an AppStream User Stack association.",
        APPSTREAM_UserStackAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.APPSYNC_APICACHE,
      new ResourceProperty(
        "Provides an AppSync API Cache.",
        APPSYNC_ApiCache.GetTypes(),
      ),
    ],
    [
      ResourceType.APPSYNC_APIKEY,
      new ResourceProperty(
        "Provides an AppSync API Key.",
        APPSYNC_ApiKey.GetTypes(),
      ),
    ],
    [
      ResourceType.APPSYNC_DATASOURCE,
      new ResourceProperty(
        "Provides an AppSync Data Source.",
        APPSYNC_DataSource.GetTypes(),
      ),
    ],
    [
      ResourceType.APPSYNC_DOMAINNAME,
      new ResourceProperty(
        "Provides an AppSync Domain Name.",
        APPSYNC_DomainName.GetTypes(),
      ),
    ],
    [
      ResourceType.APPSYNC_DOMAINNAMEAPIASSOCIATION,
      new ResourceProperty(
        "Provides an AppSync API Association.",
        APPSYNC_DomainNameApiAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.APPSYNC_FUNCTION,
      new ResourceProperty(
        "Provides an AppSync Function.",
        APPSYNC_Function.GetTypes(),
      ),
    ],
    [
      ResourceType.APPSYNC_GRAPHQLAPI,
      new ResourceProperty("", APPSYNC_GraphQLApi.GetTypes()),
    ],
    [
      ResourceType.APPSYNC_RESOLVER,
      new ResourceProperty(
        "Provides an AppSync Resolver.",
        APPSYNC_Resolver.GetTypes(),
      ),
    ],
    [
      ResourceType.APPSYNC_TYPE,
      new ResourceProperty(
        "Provides an AppSync Type.",
        APPSYNC_Type.GetTypes(),
      ),
    ],
    [
      ResourceType.ATHENA_DATABASE,
      new ResourceProperty(
        "Provides an Athena database.",
        ATHENA_Database.GetTypes(),
      ),
    ],
    [
      ResourceType.ATHENA_DATACATALOG,
      new ResourceProperty(
        "Provides an Athena data catalog.  More information about Athena and Athena data catalogs can be found in the [Athena User Guide](https://docs.aws.amazon.com/athena/latest/ug/what-is.html).  > --Tip:-- for a more detailed explanation on the usage of `parameters`, see the [DataCatalog API documentation](https://docs.aws.amazon.com/athena/latest/APIReference/API_DataCatalog.html)",
        ATHENA_DataCatalog.GetTypes(),
      ),
    ],
    [
      ResourceType.ATHENA_NAMEDQUERY,
      new ResourceProperty(
        "Provides an Athena Named Query resource.",
        ATHENA_NamedQuery.GetTypes(),
      ),
    ],
    [
      ResourceType.ATHENA_PREPAREDSTATEMENT,
      new ResourceProperty(
        "Resource for managing an Athena Prepared Statement.",
        ATHENA_PreparedStatement.GetTypes(),
      ),
    ],
    [
      ResourceType.ATHENA_WORKGROUP,
      new ResourceProperty(
        "Provides an Athena Workgroup.",
        ATHENA_Workgroup.GetTypes(),
      ),
    ],
    [
      ResourceType.AUDITMANAGER_ACCOUNTREGISTRATION,
      new ResourceProperty(
        "Resource for managing AWS Audit Manager Account Registration.",
        AUDITMANAGER_AccountRegistration.GetTypes(),
      ),
    ],
    [
      ResourceType.AUDITMANAGER_ASSESSMENT,
      new ResourceProperty(
        "Resource for managing an AWS Audit Manager Assessment.",
        AUDITMANAGER_Assessment.GetTypes(),
      ),
    ],
    [
      ResourceType.AUDITMANAGER_ASSESSMENTDELEGATION,
      new ResourceProperty(
        "Resource for managing an AWS Audit Manager Assessment Delegation.",
        AUDITMANAGER_AssessmentDelegation.GetTypes(),
      ),
    ],
    [
      ResourceType.AUDITMANAGER_ASSESSMENTREPORT,
      new ResourceProperty(
        "Resource for managing an AWS Audit Manager Assessment Report.",
        AUDITMANAGER_AssessmentReport.GetTypes(),
      ),
    ],
    [
      ResourceType.AUDITMANAGER_CONTROL,
      new ResourceProperty(
        "Resource for managing an AWS Audit Manager Control.",
        AUDITMANAGER_Control.GetTypes(),
      ),
    ],
    [
      ResourceType.AUDITMANAGER_FRAMEWORK,
      new ResourceProperty(
        "Resource for managing an AWS Audit Manager Framework.",
        AUDITMANAGER_Framework.GetTypes(),
      ),
    ],
    [
      ResourceType.AUDITMANAGER_FRAMEWORKSHARE,
      new ResourceProperty(
        "Resource for managing an AWS Audit Manager Framework Share.",
        AUDITMANAGER_FrameworkShare.GetTypes(),
      ),
    ],
    [
      ResourceType.AUDITMANAGER_ORGANIZATIONADMINACCOUNTREGISTRATION,
      new ResourceProperty(
        "Resource for managing AWS Audit Manager Organization Admin Account Registration.",
        AUDITMANAGER_OrganizationAdminAccountRegistration.GetTypes(),
      ),
    ],
    [
      ResourceType.AUTOSCALING_ATTACHMENT,
      new ResourceProperty(
        "Attaches a load balancer to an Auto Scaling group.  > --NOTE on Auto Scaling Groups, Attachments and Traffic Source Attachments:-- Pulumi provides standalone Attachment (for attaching Classic Load Balancers and Application Load Balancer, Gateway Load Balancer, or Network Load Balancer target groups) and Traffic Source Attachment (for attaching Load Balancers and VPC Lattice target groups) resources and an Auto Scaling Group resource with `load_balancers`, `target_group_arns` and `traffic_source` attributes. Do not use the same traffic source in more than one of these resources. Doing so will cause a conflict of attachments. A `lifecycle` configuration block can be used to suppress differences if necessary.",
        AUTOSCALING_Attachment.GetTypes(),
      ),
    ],
    [
      ResourceType.AUTOSCALING_GROUP,
      new ResourceProperty(
        "Provides an Auto Scaling Group resource.  > --Note:-- You must specify either `launch_configuration`, `launch_template`, or `mixed_instances_policy`.  > --NOTE on Auto Scaling Groups, Attachments and Traffic Source Attachments:-- Pulumi provides standalone Attachment (for attaching Classic Load Balancers and Application Load Balancer, Gateway Load Balancer, or Network Load Balancer target groups) and Traffic Source Attachment (for attaching Load Balancers and VPC Lattice target groups) resources and an Auto Scaling Group resource with `load_balancers`, `target_group_arns` and `traffic_source` attributes. Do not use the same traffic source in more than one of these resources. Doing so will cause a conflict of attachments. A `lifecycle` configuration block can be used to suppress differences if necessary.",
        AUTOSCALING_Group.GetTypes(),
      ),
    ],
    [
      ResourceType.AUTOSCALING_LIFECYCLEHOOK,
      new ResourceProperty(
        "Provides an AutoScaling Lifecycle Hook resource.  > --NOTE:-- This provider has two types of ways you can add lifecycle hooks - via the `initial_lifecycle_hook` attribute from the `aws.autoscaling.Group` resource, or via this one. Hooks added via this resource will not be added until the autoscaling group has been created, and depending on your capacity settings, after the initial instances have been launched, creating unintended behavior. If you need hooks to run on all instances, add them with `initial_lifecycle_hook` in `aws.autoscaling.Group`, but take care to not duplicate those hooks with this resource.",
        AUTOSCALING_LifecycleHook.GetTypes(),
      ),
    ],
    [
      ResourceType.AUTOSCALING_NOTIFICATION,
      new ResourceProperty(
        "Provides an AutoScaling Group with Notification support, via SNS Topics. Each of the `notifications` map to a [Notification Configuration](https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeNotificationConfigurations.html) inside Amazon Web Services, and are applied to each AutoScaling Group you supply.",
        AUTOSCALING_Notification.GetTypes(),
      ),
    ],
    [
      ResourceType.AUTOSCALING_POLICY,
      new ResourceProperty(
        "Provides an AutoScaling Scaling Policy resource.  > --NOTE:-- You may want to omit `desired_capacity` attribute from attached `aws.autoscaling.Group` when using autoscaling policies. It's good practice to pick either [manual](https://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/as-manual-scaling.html) or [dynamic](https://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/as-scale-based-on-demand.html) (policy-based) scaling.",
        AUTOSCALING_Policy.GetTypes(),
      ),
    ],
    [
      ResourceType.AUTOSCALING_SCHEDULE,
      new ResourceProperty(
        "Provides an AutoScaling Schedule resource.",
        AUTOSCALING_Schedule.GetTypes(),
      ),
    ],
    [
      ResourceType.AUTOSCALING_TAG,
      new ResourceProperty(
        "Manages an individual Autoscaling Group (ASG) tag. This resource should only be used in cases where ASGs are created outside the provider (e.g., ASGs implicitly created by EKS Node Groups).",
        AUTOSCALING_Tag.GetTypes(),
      ),
    ],
    [
      ResourceType.AUTOSCALING_TRAFFICSOURCEATTACHMENT,
      new ResourceProperty(
        "Attaches a traffic source to an Auto Scaling group.  > --NOTE on Auto Scaling Groups, Attachments and Traffic Source Attachments:-- Pulumi provides standalone Attachment (for attaching Classic Load Balancers and Application Load Balancer, Gateway Load Balancer, or Network Load Balancer target groups) and Traffic Source Attachment (for attaching Load Balancers and VPC Lattice target groups) resources and an Auto Scaling Group resource with `load_balancers`, `target_group_arns` and `traffic_source` attributes. Do not use the same traffic source in more than one of these resources. Doing so will cause a conflict of attachments. A `lifecycle` configuration block can be used to suppress differences if necessary.",
        AUTOSCALING_TrafficSourceAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.AUTOSCALINGPLANS_SCALINGPLAN,
      new ResourceProperty(
        "Manages an AWS Auto Scaling scaling plan. More information can be found in the [AWS Auto Scaling User Guide](https://docs.aws.amazon.com/autoscaling/plans/userguide/what-is-aws-auto-scaling.html).  > --NOTE:-- The AWS Auto Scaling service uses an AWS IAM service-linked role to manage predictive scaling of Amazon EC2 Auto Scaling groups. The service attempts to automatically create this role the first time a scaling plan with predictive scaling enabled is created. An `aws.iam.ServiceLinkedRole` resource can be used to manually manage this role. See the [AWS documentation](https://docs.aws.amazon.com/autoscaling/plans/userguide/aws-auto-scaling-service-linked-roles.html#create-service-linked-role-manual) for more details.",
        AUTOSCALINGPLANS_ScalingPlan.GetTypes(),
      ),
    ],
    [
      ResourceType.BACKUP_FRAMEWORK,
      new ResourceProperty(
        "Provides an AWS Backup Framework resource.  > --Note:-- For the Deployment Status of the Framework to be successful, please turn on resource tracking to enable AWS Config recording to track configuration changes of your backup resources. This can be done from the AWS Console.",
        BACKUP_Framework.GetTypes(),
      ),
    ],
    [
      ResourceType.BACKUP_GLOBALSETTINGS,
      new ResourceProperty(
        "Provides an AWS Backup Global Settings resource.",
        BACKUP_GlobalSettings.GetTypes(),
      ),
    ],
    [
      ResourceType.BACKUP_PLAN,
      new ResourceProperty(
        "Provides an AWS Backup plan resource.",
        BACKUP_Plan.GetTypes(),
      ),
    ],
    [
      ResourceType.BACKUP_REGIONSETTINGS,
      new ResourceProperty(
        "Provides an AWS Backup Region Settings resource.",
        BACKUP_RegionSettings.GetTypes(),
      ),
    ],
    [
      ResourceType.BACKUP_REPORTPLAN,
      new ResourceProperty(
        "Provides an AWS Backup Report Plan resource.",
        BACKUP_ReportPlan.GetTypes(),
      ),
    ],
    [
      ResourceType.BACKUP_SELECTION,
      new ResourceProperty(
        "Manages selection conditions for AWS Backup plan resources.",
        BACKUP_Selection.GetTypes(),
      ),
    ],
    [
      ResourceType.BACKUP_VAULT,
      new ResourceProperty(
        "Provides an AWS Backup vault resource.",
        BACKUP_Vault.GetTypes(),
      ),
    ],
    [
      ResourceType.BACKUP_VAULTLOCKCONFIGURATION,
      new ResourceProperty(
        "Provides an AWS Backup vault lock configuration resource.",
        BACKUP_VaultLockConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.BACKUP_VAULTNOTIFICATIONS,
      new ResourceProperty(
        "Provides an AWS Backup vault notifications resource.",
        BACKUP_VaultNotifications.GetTypes(),
      ),
    ],
    [
      ResourceType.BACKUP_VAULTPOLICY,
      new ResourceProperty(
        "Provides an AWS Backup vault policy resource.",
        BACKUP_VaultPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.BATCH_COMPUTEENVIRONMENT,
      new ResourceProperty(
        "Creates a AWS Batch compute environment. Compute environments contain the Amazon ECS container instances that are used to run containerized batch jobs.  For information about AWS Batch, see [What is AWS Batch?](http://docs.aws.amazon.com/batch/latest/userguide/what-is-batch.html) . For information about compute environment, see [Compute Environments](http://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html) .  > --Note:-- To prevent a race condition during environment deletion, make sure to set `depends_on` to the related `aws.iam.RolePolicyAttachment`; otherwise, the policy may be destroyed too soon and the compute environment will then get stuck in the `DELETING` state, see [Troubleshooting AWS Batch](http://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html) .",
        BATCH_ComputeEnvironment.GetTypes(),
      ),
    ],
    [
      ResourceType.BATCH_JOBDEFINITION,
      new ResourceProperty(
        "Provides a Batch Job Definition resource.",
        BATCH_JobDefinition.GetTypes(),
      ),
    ],
    [
      ResourceType.BATCH_JOBQUEUE,
      new ResourceProperty(
        "Provides a Batch Job Queue resource.",
        BATCH_JobQueue.GetTypes(),
      ),
    ],
    [
      ResourceType.BATCH_SCHEDULINGPOLICY,
      new ResourceProperty(
        "Provides a Batch Scheduling Policy resource.",
        BATCH_SchedulingPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.BCMDATA_EXPORT,
      new ResourceProperty(
        "Resource for managing an AWS BCM Data Exports Export.",
        BCMDATA_Export.GetTypes(),
      ),
    ],
    [
      ResourceType.BEDROCK_AGENTAGENT,
      new ResourceProperty(
        "Resource for managing an AWS Agents for Amazon Bedrock Agent.",
        BEDROCK_AgentAgent.GetTypes(),
      ),
    ],
    [
      ResourceType.BEDROCK_AGENTAGENTACTIONGROUP,
      new ResourceProperty(
        "Resource for managing an AWS Agents for Amazon Bedrock Agent Action Group.",
        BEDROCK_AgentAgentActionGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.BEDROCK_AGENTAGENTALIAS,
      new ResourceProperty(
        "Resource for managing an AWS Agents for Amazon Bedrock Agent Alias.",
        BEDROCK_AgentAgentAlias.GetTypes(),
      ),
    ],
    [
      ResourceType.BEDROCK_AGENTAGENTKNOWLEDGEBASEASSOCIATION,
      new ResourceProperty(
        "Resource for managing an AWS Agents for Amazon Bedrock Agent Knowledge Base Association.",
        BEDROCK_AgentAgentKnowledgeBaseAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.BEDROCK_AGENTDATASOURCE,
      new ResourceProperty(
        "Resource for managing an AWS Agents for Amazon Bedrock Data Source.",
        BEDROCK_AgentDataSource.GetTypes(),
      ),
    ],
    [
      ResourceType.BEDROCK_AGENTKNOWLEDGEBASE,
      new ResourceProperty(
        "Resource for managing an AWS Agents for Amazon Bedrock Knowledge Base.",
        BEDROCK_AgentKnowledgeBase.GetTypes(),
      ),
    ],
    [
      ResourceType.BEDROCK_CUSTOMMODEL,
      new ResourceProperty("", BEDROCK_CustomModel.GetTypes()),
    ],
    [
      ResourceType.BEDROCK_GUARDRAIL,
      new ResourceProperty(
        "Resource for managing an Amazon Bedrock Guardrail.",
        BEDROCK_Guardrail.GetTypes(),
      ),
    ],
    [
      ResourceType.BEDROCK_PROVISIONEDMODELTHROUGHPUT,
      new ResourceProperty(
        "Manages [Provisioned Throughput](https://docs.aws.amazon.com/bedrock/latest/userguide/prov-throughput.html) for an Amazon Bedrock model.",
        BEDROCK_ProvisionedModelThroughput.GetTypes(),
      ),
    ],
    [
      ResourceType.BEDROCKMODEL_INVOCATIONLOGGINGCONFIGURATION,
      new ResourceProperty(
        "Manages Bedrock model invocation logging configuration.  > Model invocation logging is configured per AWS region. To avoid overwriting settings, this resource should not be defined in multiple configurations.",
        BEDROCKMODEL_InvocationLoggingConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.BUDGETS_BUDGET,
      new ResourceProperty(
        "Provides a budgets budget resource. Budgets use the cost visualization provided by Cost Explorer to show you the status of your budgets, to provide forecasts of your estimated costs, and to track your AWS usage, including your free tier usage.",
        BUDGETS_Budget.GetTypes(),
      ),
    ],
    [
      ResourceType.BUDGETS_BUDGETACTION,
      new ResourceProperty(
        "Provides a budget action resource. Budget actions are cost savings controls that run either automatically on your behalf or by using a workflow approval process.",
        BUDGETS_BudgetAction.GetTypes(),
      ),
    ],
    [
      ResourceType.CFG_AGGREGATEAUTHORIZATION,
      new ResourceProperty(
        "Manages an AWS Config Aggregate Authorization",
        CFG_AggregateAuthorization.GetTypes(),
      ),
    ],
    [
      ResourceType.CFG_CONFIGURATIONAGGREGATOR,
      new ResourceProperty(
        "Manages an AWS Config Configuration Aggregator",
        CFG_ConfigurationAggregator.GetTypes(),
      ),
    ],
    [
      ResourceType.CFG_CONFORMANCEPACK,
      new ResourceProperty(
        "Manages a Config Conformance Pack. More information about this collection of Config rules and remediation actions can be found in the [Conformance Packs](https://docs.aws.amazon.com/config/latest/developerguide/conformance-packs.html) documentation. Sample Conformance Pack templates may be found in the [AWS Config Rules Repository](https://github.com/awslabs/aws-config-rules/tree/master/aws-config-conformance-packs).  > --NOTE:-- The account must have a Configuration Recorder with proper IAM permissions before the Conformance Pack will successfully create or update. See also the `aws.cfg.Recorder` resource.",
        CFG_ConformancePack.GetTypes(),
      ),
    ],
    [
      ResourceType.CFG_DELIVERYCHANNEL,
      new ResourceProperty(
        "Provides an AWS Config Delivery Channel.  > --Note:-- Delivery Channel requires a Configuration Recorder to be present. Use of `depends_on` (as shown below) is recommended to avoid race conditions.",
        CFG_DeliveryChannel.GetTypes(),
      ),
    ],
    [
      ResourceType.CFG_ORGANIZATIONCONFORMANCEPACK,
      new ResourceProperty(
        "Manages a Config Organization Conformance Pack. More information can be found in the [Managing Conformance Packs Across all Accounts in Your Organization](https://docs.aws.amazon.com/config/latest/developerguide/conformance-pack-organization-apis.html) and [AWS Config Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html) documentation. Example conformance pack templates may be found in the [AWS Config Rules Repository](https://github.com/awslabs/aws-config-rules/tree/master/aws-config-conformance-packs).  > --NOTE:-- This resource must be created in the Organization master account or a delegated administrator account, and the Organization must have all features enabled. Every Organization account except those configured in the `excluded_accounts` argument must have a Configuration Recorder with proper IAM permissions before the Organization Conformance Pack will successfully create or update. See also the `aws.cfg.Recorder` resource.",
        CFG_OrganizationConformancePack.GetTypes(),
      ),
    ],
    [
      ResourceType.CFG_ORGANIZATIONCUSTOMPOLICYRULE,
      new ResourceProperty(
        "Manages a Config Organization Custom Policy Rule. More information about these rules can be found in the [Enabling AWS Config Rules Across all Accounts in Your Organization](https://docs.aws.amazon.com/config/latest/developerguide/config-rule-multi-account-deployment.html) and [AWS Config Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html) documentation. For working with Organization Managed Rules (those invoking an AWS managed rule), see the `aws_config_organization_managed__rule` resource.  > --NOTE:-- This resource must be created in the Organization master account and rules will include the master account unless its ID is added to the `excluded_accounts` argument.",
        CFG_OrganizationCustomPolicyRule.GetTypes(),
      ),
    ],
    [
      ResourceType.CFG_ORGANIZATIONCUSTOMRULE,
      new ResourceProperty(
        "Manages a Config Organization Custom Rule. More information about these rules can be found in the [Enabling AWS Config Rules Across all Accounts in Your Organization](https://docs.aws.amazon.com/config/latest/developerguide/config-rule-multi-account-deployment.html) and [AWS Config Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html) documentation. For working with Organization Managed Rules (those invoking an AWS managed rule), see the `aws_config_organization_managed__rule` resource.  > --NOTE:-- This resource must be created in the Organization master account and rules will include the master account unless its ID is added to the `excluded_accounts` argument.  > --NOTE:-- The proper Lambda permission to allow the AWS Config service invoke the Lambda Function must be in place before the rule will successfully create or update. See also the `aws.lambda.Permission` resource.",
        CFG_OrganizationCustomRule.GetTypes(),
      ),
    ],
    [
      ResourceType.CFG_ORGANIZATIONMANAGEDRULE,
      new ResourceProperty(
        "Manages a Config Organization Managed Rule. More information about these rules can be found in the [Enabling AWS Config Rules Across all Accounts in Your Organization](https://docs.aws.amazon.com/config/latest/developerguide/config-rule-multi-account-deployment.html) and [AWS Config Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html) documentation. For working with Organization Custom Rules (those invoking a custom Lambda Function), see the `aws.cfg.OrganizationCustomRule` resource.  > --NOTE:-- This resource must be created in the Organization master account and rules will include the master account unless its ID is added to the `excluded_accounts` argument.  > --NOTE:-- Every Organization account except those configured in the `excluded_accounts` argument must have a Configuration Recorder with proper IAM permissions before the rule will successfully create or update. See also the `aws.cfg.Recorder` resource.",
        CFG_OrganizationManagedRule.GetTypes(),
      ),
    ],
    [
      ResourceType.CFG_RECORDER,
      new ResourceProperty(
        "Provides an AWS Config Configuration Recorder. Please note that this resource --does not start-- the created recorder automatically.  > --Note:-- _Starting_ the Configuration Recorder requires a delivery channel (while delivery channel creation requires Configuration Recorder). This is why `aws.cfg.RecorderStatus` is a separate resource.",
        CFG_Recorder.GetTypes(),
      ),
    ],
    [
      ResourceType.CFG_RECORDERSTATUS,
      new ResourceProperty(
        "Manages status (recording / stopped) of an AWS Config Configuration Recorder.  > --Note:-- Starting Configuration Recorder requires a Delivery Channel to be present. Use of `depends_on` (as shown below) is recommended to avoid race conditions.",
        CFG_RecorderStatus.GetTypes(),
      ),
    ],
    [
      ResourceType.CFG_REMEDIATIONCONFIGURATION,
      new ResourceProperty(
        "Provides an AWS Config Remediation Configuration.  > --Note:-- Config Remediation Configuration requires an existing Config Rule to be present.",
        CFG_RemediationConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.CFG_RETENTIONCONFIGURATION,
      new ResourceProperty(
        "Provides a resource to manage the AWS Config retention configuration. The retention configuration defines the number of days that AWS Config stores historical information.",
        CFG_RetentionConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.CFG_RULE,
      new ResourceProperty(
        "Provides an AWS Config Rule.  > --Note:-- Config Rule requires an existing Configuration Recorder to be present. Use of `depends_on` is recommended (as shown below) to avoid race conditions.",
        CFG_Rule.GetTypes(),
      ),
    ],
    [
      ResourceType.CHATBOT_SLACKCHANNELCONFIGURATION,
      new ResourceProperty(
        "Resource for managing an AWS Chatbot Slack Channel Configuration.",
        CHATBOT_SlackChannelConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.CHATBOT_TEAMSCHANNELCONFIGURATION,
      new ResourceProperty(
        "Resource for managing an AWS Chatbot Microsoft Teams Channel Configuration.  > --NOTE:-- We provide this resource on a best-effort basis. If you are able to test it and find it useful, we welcome your input at GitHub.",
        CHATBOT_TeamsChannelConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.CHIME_SDKVOICEGLOBALSETTINGS,
      new ResourceProperty(
        "Resource for managing Amazon Chime SDK Voice Global Settings.",
        CHIME_SdkvoiceGlobalSettings.GetTypes(),
      ),
    ],
    [
      ResourceType.CHIME_SDKVOICESIPMEDIAAPPLICATION,
      new ResourceProperty(
        "A ChimeSDKVoice SIP Media Application is a managed object that passes values from a SIP rule to a target AWS Lambda function.",
        CHIME_SdkvoiceSipMediaApplication.GetTypes(),
      ),
    ],
    [
      ResourceType.CHIME_SDKVOICESIPRULE,
      new ResourceProperty(
        "A SIP rule associates your SIP media application with a phone number or a Request URI hostname. You can associate a SIP rule with more than one SIP media application. Each application then runs only that rule.",
        CHIME_SdkvoiceSipRule.GetTypes(),
      ),
    ],
    [
      ResourceType.CHIME_SDKVOICEVOICEPROFILEDOMAIN,
      new ResourceProperty(
        "Resource for managing an AWS Chime SDK Voice Profile Domain.",
        CHIME_SdkvoiceVoiceProfileDomain.GetTypes(),
      ),
    ],
    [
      ResourceType.CHIME_VOICECONNECTOR,
      new ResourceProperty(
        "Enables you to connect your phone system to the telephone network at a substantial cost savings by using SIP trunking.",
        CHIME_VoiceConnector.GetTypes(),
      ),
    ],
    [
      ResourceType.CHIME_VOICECONNECTORGROUP,
      new ResourceProperty(
        "Creates an Amazon Chime Voice Connector group under the administrator's AWS account. You can associate Amazon Chime Voice Connectors with the Amazon Chime Voice Connector group by including VoiceConnectorItems in the request.  You can include Amazon Chime Voice Connectors from different AWS Regions in your group. This creates a fault tolerant mechanism for fallback in case of availability events.",
        CHIME_VoiceConnectorGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.CHIME_VOICECONNECTORLOGGING,
      new ResourceProperty(
        "Adds a logging configuration for the specified Amazon Chime Voice Connector. The logging configuration specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.",
        CHIME_VoiceConnectorLogging.GetTypes(),
      ),
    ],
    [
      ResourceType.CHIME_VOICECONNECTORORGANIZATION,
      new ResourceProperty(
        "Enable origination settings to control inbound calling to your SIP infrastructure.",
        CHIME_VoiceConnectorOrganization.GetTypes(),
      ),
    ],
    [
      ResourceType.CHIME_VOICECONNECTORSTREAMING,
      new ResourceProperty(
        "Adds a streaming configuration for the specified Amazon Chime Voice Connector. The streaming configuration specifies whether media streaming is enabled for sending to Amazon Kinesis. It also sets the retention period, in hours, for the Amazon Kinesis data.",
        CHIME_VoiceConnectorStreaming.GetTypes(),
      ),
    ],
    [
      ResourceType.CHIME_VOICECONNECTORTERMINATION,
      new ResourceProperty(
        "Enable Termination settings to control outbound calling from your SIP infrastructure.",
        CHIME_VoiceConnectorTermination.GetTypes(),
      ),
    ],
    [
      ResourceType.CHIME_VOICECONNECTORTERMINATIONCREDENTIALS,
      new ResourceProperty(
        "Adds termination SIP credentials for the specified Amazon Chime Voice Connector.  > --Note:-- Voice Connector Termination Credentials requires a Voice Connector Termination to be present. Use of `depends_on` (as shown below) is recommended to avoid race conditions.",
        CHIME_VoiceConnectorTerminationCredentials.GetTypes(),
      ),
    ],
    [
      ResourceType.CHIMESDKMEDIAPIPELINES_MEDIAINSIGHTSPIPELINECONFIGURATION,
      new ResourceProperty(
        "Resource for managing an AWS Chime SDK Media Pipelines Media Insights Pipeline Configuration. Consult the [Call analytics developer guide](https://docs.aws.amazon.com/chime-sdk/latest/dg/call-analytics.html) for more detailed information about usage.",
        CHIMESDKMEDIAPIPELINES_MediaInsightsPipelineConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.CLEANROOMS_COLLABORATION,
      new ResourceProperty(
        "Provides a AWS Clean Rooms collaboration.  All members included in the definition will be invited to join the collaboration and can create memberships.",
        CLEANROOMS_Collaboration.GetTypes(),
      ),
    ],
    [
      ResourceType.CLEANROOMS_CONFIGUREDTABLE,
      new ResourceProperty(
        "Provides a AWS Clean Rooms configured table. Configured tables are used to represent references to existing tables in the AWS Glue Data Catalog.",
        CLEANROOMS_ConfiguredTable.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUD9_ENVIRONMENTEC2,
      new ResourceProperty(
        "Provides a Cloud9 EC2 Development Environment.",
        CLOUD9_EnvironmentEC2.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUD9_ENVIRONMENTMEMBERSHIP,
      new ResourceProperty(
        "Provides an environment member to an AWS Cloud9 development environment.",
        CLOUD9_EnvironmentMembership.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDCONTROL_RESOURCE,
      new ResourceProperty(
        "Manages a Cloud Control API Resource. The configuration and lifecycle handling of these resources is proxied through Cloud Control API handlers to the backend service.",
        CLOUDCONTROL_Resource.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDFORMATION_CLOUDFORMATIONTYPE,
      new ResourceProperty(
        "Manages a version of a CloudFormation Type.",
        CLOUDFORMATION_CloudFormationType.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDFORMATION_STACK,
      new ResourceProperty(
        "Provides a CloudFormation Stack resource.",
        CLOUDFORMATION_Stack.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDFORMATION_STACKSET,
      new ResourceProperty(
        "Manages a CloudFormation StackSet. StackSets allow CloudFormation templates to be easily deployed across multiple accounts and regions via StackSet Instances (`aws.cloudformation.StackSetInstance` resource). Additional information about StackSets can be found in the [AWS CloudFormation User Guide](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/what-is-cfnstacksets.html).  > --NOTE:-- All template parameters, including those with a `Default`, must be configured or ignored with the `lifecycle` configuration block `ignore_changes` argument.  > --NOTE:-- All `NoEcho` template parameters must be ignored with the `lifecycle` configuration block `ignore_changes` argument.  > --NOTE:-- When using a delegated administrator account, ensure that your IAM User or Role has the `organizations:ListDelegatedAdministrators` permission. Otherwise, you may get an error like `ValidationError: Account used is not a delegated administrator`.",
        CLOUDFORMATION_StackSet.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDFORMATION_STACKSETINSTANCE,
      new ResourceProperty(
        "Manages a CloudFormation StackSet Instance. Instances are managed in the account and region of the StackSet after the target account permissions have been configured. Additional information about StackSets can be found in the [AWS CloudFormation User Guide](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/what-is-cfnstacksets.html).  > --NOTE:-- All target accounts must have an IAM Role created that matches the name of the execution role configured in the StackSet (the `execution_role_name` argument in the `aws.cloudformation.StackSet` resource) in a trust relationship with the administrative account or administration IAM Role. The execution role must have appropriate permissions to manage resources defined in the template along with those required for StackSets to operate. See the [AWS CloudFormation User Guide](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs.html) for more details.  > --NOTE:-- To retain the Stack during resource destroy, ensure `retain_stack` has been set to `true` in the state first. This must be completed _before_ a deployment that would destroy the resource.",
        CLOUDFORMATION_StackSetInstance.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDFRONT_CACHEPOLICY,
      new ResourceProperty("", CLOUDFRONT_CachePolicy.GetTypes()),
    ],
    [
      ResourceType.CLOUDFRONT_CONTINUOUSDEPLOYMENTPOLICY,
      new ResourceProperty(
        "Resource for managing an AWS CloudFront Continuous Deployment Policy.",
        CLOUDFRONT_ContinuousDeploymentPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDFRONT_DISTRIBUTION,
      new ResourceProperty(
        "Creates an Amazon CloudFront web distribution.  For information about CloudFront distributions, see the [Amazon CloudFront Developer Guide](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html). For specific information about creating CloudFront web distributions, see the [POST Distribution](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateDistribution.html) page in the Amazon CloudFront API Reference.  > --NOTE:-- CloudFront distributions take about 15 minutes to reach a deployed state after creation or modification. During this time, deletes to resources will be blocked. If you need to delete a distribution that is enabled and you do not want to wait, you need to use the `retain_on_delete` flag.",
        CLOUDFRONT_Distribution.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDFRONT_FIELDLEVELENCRYPTIONCONFIG,
      new ResourceProperty(
        "Provides a CloudFront Field-level Encryption Config resource.",
        CLOUDFRONT_FieldLevelEncryptionConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDFRONT_FIELDLEVELENCRYPTIONPROFILE,
      new ResourceProperty(
        "Provides a CloudFront Field-level Encryption Profile resource.",
        CLOUDFRONT_FieldLevelEncryptionProfile.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDFRONT_FUNCTION,
      new ResourceProperty(
        "Provides a CloudFront Function resource. With CloudFront Functions in Amazon CloudFront, you can write lightweight functions in JavaScript for high-scale, latency-sensitive CDN customizations.  See [CloudFront Functions](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-functions.html)  > --NOTE:-- You cannot delete a function if it’s associated with a cache behavior. First, update your distributions to remove the function association from all cache behaviors, then delete the function.",
        CLOUDFRONT_Function.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDFRONT_KEYGROUP,
      new ResourceProperty("", CLOUDFRONT_KeyGroup.GetTypes()),
    ],
    [
      ResourceType.CLOUDFRONT_KEYVALUESTORE,
      new ResourceProperty(
        "Resource for managing an AWS CloudFront Key Value Store.",
        CLOUDFRONT_KeyValueStore.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDFRONT_KEYVALUESTOREKEY,
      new ResourceProperty(
        "Resource for managing an AWS CloudFront KeyValueStore Key.",
        CLOUDFRONT_KeyvaluestoreKey.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDFRONT_MONITORINGSUBSCRIPTION,
      new ResourceProperty(
        "Provides a CloudFront real-time log configuration resource.",
        CLOUDFRONT_MonitoringSubscription.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDFRONT_ORIGINACCESSCONTROL,
      new ResourceProperty(
        "Manages an AWS CloudFront Origin Access Control, which is used by CloudFront Distributions with an Amazon S3 bucket as the origin.  Read more about Origin Access Control in the [CloudFront Developer Guide](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html).",
        CLOUDFRONT_OriginAccessControl.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDFRONT_ORIGINACCESSIDENTITY,
      new ResourceProperty(
        "Creates an Amazon CloudFront origin access identity.  For information about CloudFront distributions, see the [Amazon CloudFront Developer Guide](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html). For more information on generating origin access identities, see [Using an Origin Access Identity to Restrict Access to Your Amazon S3 Content][2].",
        CLOUDFRONT_OriginAccessIdentity.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDFRONT_ORIGINREQUESTPOLICY,
      new ResourceProperty("", CLOUDFRONT_OriginRequestPolicy.GetTypes()),
    ],
    [
      ResourceType.CLOUDFRONT_PUBLICKEY,
      new ResourceProperty("", CLOUDFRONT_PublicKey.GetTypes()),
    ],
    [
      ResourceType.CLOUDFRONT_REALTIMELOGCONFIG,
      new ResourceProperty(
        "Provides a CloudFront real-time log configuration resource.",
        CLOUDFRONT_RealtimeLogConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDFRONT_RESPONSEHEADERSPOLICY,
      new ResourceProperty(
        "Provides a CloudFront response headers policy resource. A response headers policy contains information about a set of HTTP response headers and their values. After you create a response headers policy, you can use its ID to attach it to one or more cache behaviors in a CloudFront distribution. When it’s attached to a cache behavior, CloudFront adds the headers in the policy to every response that it sends for requests that match the cache behavior.",
        CLOUDFRONT_ResponseHeadersPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDHSMV2_CLUSTER,
      new ResourceProperty(
        "Creates an Amazon CloudHSM v2 cluster.",
        CLOUDHSMV2_Cluster.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDHSMV2_HSM,
      new ResourceProperty(
        "Creates an HSM module in Amazon CloudHSM v2 cluster.",
        CLOUDHSMV2_Hsm.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDSEARCH_DOMAIN,
      new ResourceProperty(
        "Provides an CloudSearch domain resource.  The provider waits for the domain to become `Active` when applying a configuration.",
        CLOUDSEARCH_Domain.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDSEARCH_DOMAINSERVICEACCESSPOLICY,
      new ResourceProperty(
        "Provides an CloudSearch domain service access policy resource.  The provider waits for the domain service access policy to become `Active` when applying a configuration.",
        CLOUDSEARCH_DomainServiceAccessPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDTRAIL_EVENTDATASTORE,
      new ResourceProperty(
        "Provides a CloudTrail Event Data Store.  More information about event data stores can be found in the [Event Data Store User Guide](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-event-data-store.html).  > --Tip:-- For an organization event data store you must create this resource in the management account.",
        CLOUDTRAIL_EventDataStore.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDTRAIL_ORGANIZATIONDELEGATEDADMINACCOUNT,
      new ResourceProperty(
        "Provides a resource to manage an AWS CloudTrail Delegated Administrator.",
        CLOUDTRAIL_OrganizationDelegatedAdminAccount.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDTRAIL_TRAIL,
      new ResourceProperty(
        "Provides a CloudTrail resource.  > --Tip:-- For a multi-region trail, this resource must be in the home region of the trail.  > --Tip:-- For an organization trail, this resource must be in the master account of the organization.",
        CLOUDTRAIL_Trail.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDWATCH_COMPOSITEALARM,
      new ResourceProperty(
        "Provides a CloudWatch Composite Alarm resource.  > --NOTE:-- An alarm (composite or metric) cannot be destroyed when there are other composite alarms depending on it. This can lead to a cyclical dependency on update, as the provider will unsuccessfully attempt to destroy alarms before updating the rule. Consider using `depends_on`, references to alarm names, and two-stage updates.",
        CLOUDWATCH_CompositeAlarm.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDWATCH_DASHBOARD,
      new ResourceProperty(
        "Provides a CloudWatch Dashboard resource.",
        CLOUDWATCH_Dashboard.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDWATCH_EVENTAPIDESTINATION,
      new ResourceProperty(
        "Provides an EventBridge event API Destination resource.  > --Note:-- EventBridge was formerly known as CloudWatch Events. The functionality is identical.",
        CLOUDWATCH_EventApiDestination.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDWATCH_EVENTARCHIVE,
      new ResourceProperty(
        "Provides an EventBridge event archive resource.  > --Note:-- EventBridge was formerly known as CloudWatch Events. The functionality is identical.",
        CLOUDWATCH_EventArchive.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDWATCH_EVENTBUS,
      new ResourceProperty(
        "Provides an EventBridge event bus resource.  > --Note:-- EventBridge was formerly known as CloudWatch Events. The functionality is identical.",
        CLOUDWATCH_EventBus.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDWATCH_EVENTBUSPOLICY,
      new ResourceProperty(
        "Provides a resource to create an EventBridge resource policy to support cross-account events.  > --Note:-- EventBridge was formerly known as CloudWatch Events. The functionality is identical.  > --Note:-- The EventBridge bus policy resource  (`aws.cloudwatch.EventBusPolicy`) is incompatible with the EventBridge permission resource (`aws.cloudwatch.EventPermission`) and will overwrite permissions.",
        CLOUDWATCH_EventBusPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDWATCH_EVENTCONNECTION,
      new ResourceProperty(
        "Provides an EventBridge connection resource.  > --Note:-- EventBridge was formerly known as CloudWatch Events. The functionality is identical.",
        CLOUDWATCH_EventConnection.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDWATCH_EVENTENDPOINT,
      new ResourceProperty(
        "Provides a resource to create an EventBridge Global Endpoint.  > --Note:-- EventBridge was formerly known as CloudWatch Events. The functionality is identical.",
        CLOUDWATCH_EventEndpoint.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDWATCH_EVENTPERMISSION,
      new ResourceProperty(
        "Provides a resource to create an EventBridge permission to support cross-account events in the current account default event bus.  > --Note:-- EventBridge was formerly known as CloudWatch Events. The functionality is identical.  > --Note:-- The EventBridge bus policy resource  (`aws.cloudwatch.EventBusPolicy`) is incompatible with the EventBridge permission resource (`aws.cloudwatch.EventPermission`) and will overwrite permissions.",
        CLOUDWATCH_EventPermission.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDWATCH_EVENTRULE,
      new ResourceProperty(
        "Provides an EventBridge Rule resource.  > --Note:-- EventBridge was formerly known as CloudWatch Events. The functionality is identical.",
        CLOUDWATCH_EventRule.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDWATCH_EVENTTARGET,
      new ResourceProperty(
        "Provides an EventBridge Target resource.  > --Note:-- EventBridge was formerly known as CloudWatch Events. The functionality is identical.",
        CLOUDWATCH_EventTarget.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDWATCH_INTERNETMONITOR,
      new ResourceProperty(
        "Provides a Internet Monitor Monitor resource.",
        CLOUDWATCH_InternetMonitor.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDWATCH_LOGACCOUNTPOLICY,
      new ResourceProperty(
        "Provides a CloudWatch Log Account Policy resource.",
        CLOUDWATCH_LogAccountPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDWATCH_LOGDATAPROTECTIONPOLICY,
      new ResourceProperty(
        "Provides a CloudWatch Log Data Protection Policy resource.  Read more about protecting sensitive user data in the [User Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data.html).",
        CLOUDWATCH_LogDataProtectionPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDWATCH_LOGDESTINATION,
      new ResourceProperty(
        "Provides a CloudWatch Logs destination resource.",
        CLOUDWATCH_LogDestination.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDWATCH_LOGDESTINATIONPOLICY,
      new ResourceProperty(
        "Provides a CloudWatch Logs destination policy resource.",
        CLOUDWATCH_LogDestinationPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDWATCH_LOGGROUP,
      new ResourceProperty(
        "Provides a CloudWatch Log Group resource.",
        CLOUDWATCH_LogGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDWATCH_LOGMETRICFILTER,
      new ResourceProperty(
        "Provides a CloudWatch Log Metric Filter resource.",
        CLOUDWATCH_LogMetricFilter.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDWATCH_LOGRESOURCEPOLICY,
      new ResourceProperty(
        "Provides a resource to manage a CloudWatch log resource policy.",
        CLOUDWATCH_LogResourcePolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDWATCH_LOGSTREAM,
      new ResourceProperty(
        "Provides a CloudWatch Log Stream resource.",
        CLOUDWATCH_LogStream.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDWATCH_LOGSUBSCRIPTIONFILTER,
      new ResourceProperty(
        "Provides a CloudWatch Logs subscription filter resource.",
        CLOUDWATCH_LogSubscriptionFilter.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDWATCH_METRICALARM,
      new ResourceProperty(
        "Provides a CloudWatch Metric Alarm resource.",
        CLOUDWATCH_MetricAlarm.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDWATCH_METRICSTREAM,
      new ResourceProperty(
        "Provides a CloudWatch Metric Stream resource.",
        CLOUDWATCH_MetricStream.GetTypes(),
      ),
    ],
    [
      ResourceType.CLOUDWATCH_QUERYDEFINITION,
      new ResourceProperty(
        "Provides a CloudWatch Logs query definition resource.",
        CLOUDWATCH_QueryDefinition.GetTypes(),
      ),
    ],
    [
      ResourceType.CODEARTIFACT_DOMAIN,
      new ResourceProperty(
        "Provides a CodeArtifact Domain Resource.",
        CODEARTIFACT_Domain.GetTypes(),
      ),
    ],
    [
      ResourceType.CODEARTIFACT_DOMAINPERMISSIONS,
      new ResourceProperty(
        "Provides a CodeArtifact Domains Permissions Policy Resource.",
        CODEARTIFACT_DomainPermissions.GetTypes(),
      ),
    ],
    [
      ResourceType.CODEARTIFACT_REPOSITORY,
      new ResourceProperty(
        "Provides a CodeArtifact Repository Resource.",
        CODEARTIFACT_Repository.GetTypes(),
      ),
    ],
    [
      ResourceType.CODEARTIFACT_REPOSITORYPERMISSIONSPOLICY,
      new ResourceProperty(
        "Provides a CodeArtifact Repostory Permissions Policy Resource.",
        CODEARTIFACT_RepositoryPermissionsPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.CODEBUILD_PROJECT,
      new ResourceProperty(
        'Provides a CodeBuild Project resource. See also the `aws.codebuild.Webhook` resource, which manages the webhook to the source (e.g., the "rebuild every time a code change is pushed" option in the CodeBuild web console).',
        CODEBUILD_Project.GetTypes(),
      ),
    ],
    [
      ResourceType.CODEBUILD_REPORTGROUP,
      new ResourceProperty(
        "Provides a CodeBuild Report Groups Resource.",
        CODEBUILD_ReportGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.CODEBUILD_RESOURCEPOLICY,
      new ResourceProperty(
        "Provides a CodeBuild Resource Policy Resource.",
        CODEBUILD_ResourcePolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.CODEBUILD_SOURCECREDENTIAL,
      new ResourceProperty(
        "Provides a CodeBuild Source Credentials Resource.  > --NOTE:-- [Codebuild only allows a single credential per given server type in a given region](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_codebuild.GitHubSourceCredentials.html). Therefore, when you define `aws.codebuild.SourceCredential`, `aws.codebuild.Project` resource defined in the same module will use it.",
        CODEBUILD_SourceCredential.GetTypes(),
      ),
    ],
    [
      ResourceType.CODEBUILD_WEBHOOK,
      new ResourceProperty(
        "Manages a CodeBuild webhook, which is an endpoint accepted by the CodeBuild service to trigger builds from source code repositories. Depending on the source type of the CodeBuild project, the CodeBuild service may also automatically create and delete the actual repository webhook as well.",
        CODEBUILD_Webhook.GetTypes(),
      ),
    ],
    [
      ResourceType.CODECATALYST_DEVENVIRONMENT,
      new ResourceProperty(
        "Resource for managing an AWS CodeCatalyst Dev Environment.",
        CODECATALYST_DevEnvironment.GetTypes(),
      ),
    ],
    [
      ResourceType.CODECATALYST_PROJECT,
      new ResourceProperty(
        "Resource for managing an AWS CodeCatalyst Project.",
        CODECATALYST_Project.GetTypes(),
      ),
    ],
    [
      ResourceType.CODECATALYST_SOURCEREPOSITORY,
      new ResourceProperty(
        "Resource for managing an AWS CodeCatalyst Source Repository.",
        CODECATALYST_SourceRepository.GetTypes(),
      ),
    ],
    [
      ResourceType.CODECOMMIT_APPROVALRULETEMPLATE,
      new ResourceProperty(
        "Provides a CodeCommit Approval Rule Template Resource.",
        CODECOMMIT_ApprovalRuleTemplate.GetTypes(),
      ),
    ],
    [
      ResourceType.CODECOMMIT_APPROVALRULETEMPLATEASSOCIATION,
      new ResourceProperty(
        "Associates a CodeCommit Approval Rule Template with a Repository.",
        CODECOMMIT_ApprovalRuleTemplateAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.CODECOMMIT_REPOSITORY,
      new ResourceProperty(
        "Provides a CodeCommit Repository Resource.",
        CODECOMMIT_Repository.GetTypes(),
      ),
    ],
    [
      ResourceType.CODECOMMIT_TRIGGER,
      new ResourceProperty(
        "Provides a CodeCommit Trigger Resource.",
        CODECOMMIT_Trigger.GetTypes(),
      ),
    ],
    [
      ResourceType.CODEDEPLOY_APPLICATION,
      new ResourceProperty(
        "Provides a CodeDeploy application to be used as a basis for deployments",
        CODEDEPLOY_Application.GetTypes(),
      ),
    ],
    [
      ResourceType.CODEDEPLOY_DEPLOYMENTCONFIG,
      new ResourceProperty(
        "Provides a CodeDeploy deployment config for an application",
        CODEDEPLOY_DeploymentConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.CODEDEPLOY_DEPLOYMENTGROUP,
      new ResourceProperty(
        "Provides a CodeDeploy Deployment Group for a CodeDeploy Application  > --NOTE on blue/green deployments:-- When using `green_fleet_provisioning_option` with the `COPY_AUTO_SCALING_GROUP` action, CodeDeploy will create a new ASG with a different name. This ASG is _not_ managed by this provider and will conflict with existing configuration and state. You may want to use a different approach to managing deployments that involve multiple ASG, such as `DISCOVER_EXISTING` with separate blue and green ASG.",
        CODEDEPLOY_DeploymentGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.CODEGURUPROFILER_PROFILINGGROUP,
      new ResourceProperty(
        "Resource for managing an AWS CodeGuru Profiler Profiling Group.",
        CODEGURUPROFILER_ProfilingGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.CODEGURUREVIEWER_REPOSITORYASSOCIATION,
      new ResourceProperty(
        "Resource for managing an AWS CodeGuru Reviewer Repository Association.",
        CODEGURUREVIEWER_RepositoryAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.CODEPIPELINE_CUSTOMACTIONTYPE,
      new ResourceProperty(
        "Provides a CodeDeploy CustomActionType",
        CODEPIPELINE_CustomActionType.GetTypes(),
      ),
    ],
    [
      ResourceType.CODEPIPELINE_PIPELINE,
      new ResourceProperty(
        "Provides a CodePipeline.",
        CODEPIPELINE_Pipeline.GetTypes(),
      ),
    ],
    [
      ResourceType.CODEPIPELINE_WEBHOOK,
      new ResourceProperty(
        "Provides a CodePipeline Webhook.",
        CODEPIPELINE_Webhook.GetTypes(),
      ),
    ],
    [
      ResourceType.CODESTARCONNECTIONS_CONNECTION,
      new ResourceProperty(
        "Provides a CodeStar Connection.  > --NOTE:-- The `aws.codestarconnections.Connection` resource is created in the state `PENDING`. Authentication with the connection provider must be completed in the AWS Console. See the [AWS documentation](https://docs.aws.amazon.com/dtconsole/latest/userguide/connections-update.html) for details.",
        CODESTARCONNECTIONS_Connection.GetTypes(),
      ),
    ],
    [
      ResourceType.CODESTARCONNECTIONS_HOST,
      new ResourceProperty(
        "Provides a CodeStar Host.  > --NOTE:-- The `aws.codestarconnections.Host` resource is created in the state `PENDING`. Authentication with the host provider must be completed in the AWS Console. For more information visit [Set up a pending host](https://docs.aws.amazon.com/dtconsole/latest/userguide/connections-host-setup.html).",
        CODESTARCONNECTIONS_Host.GetTypes(),
      ),
    ],
    [
      ResourceType.CODESTARNOTIFICATIONS_NOTIFICATIONRULE,
      new ResourceProperty(
        "Provides a CodeStar Notifications Rule.",
        CODESTARNOTIFICATIONS_NotificationRule.GetTypes(),
      ),
    ],
    [
      ResourceType.COGNITO_IDENTITYPOOL,
      new ResourceProperty(
        "Provides an AWS Cognito Identity Pool.",
        COGNITO_IdentityPool.GetTypes(),
      ),
    ],
    [
      ResourceType.COGNITO_IDENTITYPOOLPROVIDERPRINCIPALTAG,
      new ResourceProperty(
        "Provides an AWS Cognito Identity Principal Mapping.",
        COGNITO_IdentityPoolProviderPrincipalTag.GetTypes(),
      ),
    ],
    [
      ResourceType.COGNITO_IDENTITYPOOLROLEATTACHMENT,
      new ResourceProperty(
        "Provides an AWS Cognito Identity Pool Roles Attachment.",
        COGNITO_IdentityPoolRoleAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.COGNITO_IDENTITYPROVIDER,
      new ResourceProperty(
        "Provides a Cognito User Identity Provider resource.",
        COGNITO_IdentityProvider.GetTypes(),
      ),
    ],
    [
      ResourceType.COGNITO_MANAGEDUSERPOOLCLIENT,
      new ResourceProperty(
        "Use the `aws.cognito.UserPoolClient` resource to manage a Cognito User Pool Client.  --This resource is advanced-- and has special caveats to consider before use. Please read this document completely before using the resource.  Use the `aws.cognito.ManagedUserPoolClient` resource to manage a Cognito User Pool Client that is automatically created by an AWS service. For instance, when [configuring an OpenSearch Domain to use Cognito authentication](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cognito-auth.html), the OpenSearch service creates the User Pool Client during setup and removes it when it is no longer required. As a result, the `aws.cognito.ManagedUserPoolClient` resource does not create or delete this resource, but instead assumes management of it.  Use the `aws.cognito.UserPoolClient` resource to manage Cognito User Pool Clients for normal use cases.",
        COGNITO_ManagedUserPoolClient.GetTypes(),
      ),
    ],
    [
      ResourceType.COGNITO_RESOURCESERVER,
      new ResourceProperty(
        "Provides a Cognito Resource Server.",
        COGNITO_ResourceServer.GetTypes(),
      ),
    ],
    [
      ResourceType.COGNITO_RISKCONFIGURATION,
      new ResourceProperty(
        "Provides a Cognito Risk Configuration resource.",
        COGNITO_RiskConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.COGNITO_USER,
      new ResourceProperty(
        "Provides a Cognito User Resource.",
        COGNITO_User.GetTypes(),
      ),
    ],
    [
      ResourceType.COGNITO_USERGROUP,
      new ResourceProperty(
        "Provides a Cognito User Group resource.",
        COGNITO_UserGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.COGNITO_USERINGROUP,
      new ResourceProperty(
        "Adds the specified user to the specified group.",
        COGNITO_UserInGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.COGNITO_USERPOOL,
      new ResourceProperty(
        "Provides a Cognito User Pool resource.",
        COGNITO_UserPool.GetTypes(),
      ),
    ],
    [
      ResourceType.COGNITO_USERPOOLCLIENT,
      new ResourceProperty(
        "Provides a Cognito User Pool Client resource.  To manage a User Pool Client created by another service, such as when [configuring an OpenSearch Domain to use Cognito authentication](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cognito-auth.html), use the `aws.cognito.ManagedUserPoolClient` resource instead.",
        COGNITO_UserPoolClient.GetTypes(),
      ),
    ],
    [
      ResourceType.COGNITO_USERPOOLDOMAIN,
      new ResourceProperty(
        "Provides a Cognito User Pool Domain resource.",
        COGNITO_UserPoolDomain.GetTypes(),
      ),
    ],
    [
      ResourceType.COGNITO_USERPOOLUICUSTOMIZATION,
      new ResourceProperty(
        "Provides a Cognito User Pool UI Customization resource.  > --Note:-- To use this resource, the user pool must have a domain associated with it. For more information, see the Amazon Cognito Developer Guide on [Customizing the Built-in Sign-In and Sign-up Webpages](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-app-ui-customization.html).",
        COGNITO_UserPoolUICustomization.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPREHEND_DOCUMENTCLASSIFIER,
      new ResourceProperty(
        "Resource for managing an AWS Comprehend Document Classifier.",
        COMPREHEND_DocumentClassifier.GetTypes(),
      ),
    ],
    [
      ResourceType.COMPREHEND_ENTITYRECOGNIZER,
      new ResourceProperty(
        "Resource for managing an AWS Comprehend Entity Recognizer.",
        COMPREHEND_EntityRecognizer.GetTypes(),
      ),
    ],
    [
      ResourceType.CONNECT_BOTASSOCIATION,
      new ResourceProperty(
        "Allows the specified Amazon Connect instance to access the specified Amazon Lex (V1) bot. For more information see [Amazon Connect: Getting Started](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-get-started.html) and [Add an Amazon Lex bot](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-lex.html).  > --NOTE:-- This resource only currently supports Amazon Lex (V1) Associations.",
        CONNECT_BotAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.CONNECT_CONTACTFLOW,
      new ResourceProperty(
        "Provides an Amazon Connect Contact Flow resource. For more information see [Amazon Connect: Getting Started](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-get-started.html)  This resource embeds or references Contact Flows specified in Amazon Connect Contact Flow Language. For more information see [Amazon Connect Flow language](https://docs.aws.amazon.com/connect/latest/adminguide/flow-language.html)  !> --WARN:-- Contact Flows exported from the Console [Contact Flow import/export](https://docs.aws.amazon.com/connect/latest/adminguide/contact-flow-import-export.html) are not in the Amazon Connect Contact Flow Language and can not be used with this resource. Instead, the recommendation is to use the AWS CLI [`describe-contact-flow`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/connect/describe-contact-flow.html). See example below which uses `jq` to extract the `Content` attribute and saves it to a local file.",
        CONNECT_ContactFlow.GetTypes(),
      ),
    ],
    [
      ResourceType.CONNECT_CONTACTFLOWMODULE,
      new ResourceProperty(
        "Provides an Amazon Connect Contact Flow Module resource. For more information see [Amazon Connect: Getting Started](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-get-started.html)  This resource embeds or references Contact Flows Modules specified in Amazon Connect Contact Flow Language. For more information see [Amazon Connect Flow language](https://docs.aws.amazon.com/connect/latest/adminguide/flow-language.html)  !> --WARN:-- Contact Flow Modules exported from the Console [See Contact Flow import/export which is the same for Contact Flow Modules](https://docs.aws.amazon.com/connect/latest/adminguide/contact-flow-import-export.html) are not in the Amazon Connect Contact Flow Language and can not be used with this resource. Instead, the recommendation is to use the AWS CLI [`describe-contact-flow-module`](https://docs.aws.amazon.com/cli/latest/reference/connect/describe-contact-flow-module.html). See example below which uses `jq` to extract the `Content` attribute and saves it to a local file.",
        CONNECT_ContactFlowModule.GetTypes(),
      ),
    ],
    [
      ResourceType.CONNECT_HOURSOFOPERATION,
      new ResourceProperty(
        "Provides an Amazon Connect Hours of Operation resource. For more information see [Amazon Connect: Getting Started](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-get-started.html)",
        CONNECT_HoursOfOperation.GetTypes(),
      ),
    ],
    [
      ResourceType.CONNECT_INSTANCE,
      new ResourceProperty(
        "Provides an Amazon Connect instance resource. For more information see [Amazon Connect: Getting Started](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-get-started.html)  !> --WARN:-- Amazon Connect enforces a limit of [100 combined instance creation and deletions every 30 days](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#feature-limits).  For example, if you create 80 instances and delete 20 of them, you must wait 30 days to create or delete another instance.  Use care when creating or deleting instances.",
        CONNECT_Instance.GetTypes(),
      ),
    ],
    [
      ResourceType.CONNECT_INSTANCESTORAGECONFIG,
      new ResourceProperty(
        "Provides an Amazon Connect Instance Storage Config resource. For more information see [Amazon Connect: Getting Started](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-get-started.html)",
        CONNECT_InstanceStorageConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.CONNECT_LAMBDAFUNCTIONASSOCIATION,
      new ResourceProperty(
        "Provides an Amazon Connect Lambda Function Association. For more information see [Amazon Connect: Getting Started](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-get-started.html) and [Invoke AWS Lambda functions](https://docs.aws.amazon.com/connect/latest/adminguide/connect-lambda-functions.html).",
        CONNECT_LambdaFunctionAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.CONNECT_PHONENUMBER,
      new ResourceProperty(
        "Provides an Amazon Connect Phone Number resource. For more information see [Amazon Connect: Getting Started](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-get-started.html)",
        CONNECT_PhoneNumber.GetTypes(),
      ),
    ],
    [
      ResourceType.CONNECT_QUEUE,
      new ResourceProperty(
        "Provides an Amazon Connect Queue resource. For more information see [Amazon Connect: Getting Started](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-get-started.html)",
        CONNECT_Queue.GetTypes(),
      ),
    ],
    [
      ResourceType.CONNECT_QUICKCONNECT,
      new ResourceProperty(
        "Provides an Amazon Connect Quick Connect resource. For more information see [Amazon Connect: Getting Started](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-get-started.html)",
        CONNECT_QuickConnect.GetTypes(),
      ),
    ],
    [
      ResourceType.CONNECT_ROUTINGPROFILE,
      new ResourceProperty(
        "Provides an Amazon Connect Routing Profile resource. For more information see [Amazon Connect: Getting Started](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-get-started.html)",
        CONNECT_RoutingProfile.GetTypes(),
      ),
    ],
    [
      ResourceType.CONNECT_SECURITYPROFILE,
      new ResourceProperty(
        "Provides an Amazon Connect Security Profile resource. For more information see [Amazon Connect: Getting Started](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-get-started.html)",
        CONNECT_SecurityProfile.GetTypes(),
      ),
    ],
    [
      ResourceType.CONNECT_USER,
      new ResourceProperty(
        "Provides an Amazon Connect User resource. For more information see [Amazon Connect: Getting Started](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-get-started.html)",
        CONNECT_User.GetTypes(),
      ),
    ],
    [
      ResourceType.CONNECT_USERHIERARCHYGROUP,
      new ResourceProperty(
        "Provides an Amazon Connect User Hierarchy Group resource. For more information see [Amazon Connect: Getting Started](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-get-started.html)  > --NOTE:-- The User Hierarchy Structure must be created before creating a User Hierarchy Group.",
        CONNECT_UserHierarchyGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.CONNECT_USERHIERARCHYSTRUCTURE,
      new ResourceProperty(
        "Provides an Amazon Connect User Hierarchy Structure resource. For more information see [Amazon Connect: Getting Started](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-get-started.html)",
        CONNECT_UserHierarchyStructure.GetTypes(),
      ),
    ],
    [
      ResourceType.CONNECT_VOCABULARY,
      new ResourceProperty(
        "Provides an Amazon Connect Vocabulary resource. For more information see [Amazon Connect: Getting Started](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-get-started.html)",
        CONNECT_Vocabulary.GetTypes(),
      ),
    ],
    [
      ResourceType.CONTROLTOWER_CONTROLTOWERCONTROL,
      new ResourceProperty(
        "Allows the application of pre-defined controls to organizational units. For more information on usage, please see the [AWS Control Tower User Guide](https://docs.aws.amazon.com/controltower/latest/userguide/enable-guardrails.html).",
        CONTROLTOWER_ControlTowerControl.GetTypes(),
      ),
    ],
    [
      ResourceType.CONTROLTOWER_LANDINGZONE,
      new ResourceProperty(
        "Creates a new landing zone using Control Tower. For more information on usage, please see the",
        CONTROLTOWER_LandingZone.GetTypes(),
      ),
    ],
    [
      ResourceType.COSTEXPLORER_ANOMALYMONITOR,
      new ResourceProperty(
        "Provides a CE Anomaly Monitor.",
        COSTEXPLORER_AnomalyMonitor.GetTypes(),
      ),
    ],
    [
      ResourceType.COSTEXPLORER_ANOMALYSUBSCRIPTION,
      new ResourceProperty(
        "Provides a CE Anomaly Subscription.",
        COSTEXPLORER_AnomalySubscription.GetTypes(),
      ),
    ],
    [
      ResourceType.COSTEXPLORER_COSTALLOCATIONTAG,
      new ResourceProperty(
        "Provides a CE Cost Allocation Tag.",
        COSTEXPLORER_CostAllocationTag.GetTypes(),
      ),
    ],
    [
      ResourceType.COSTEXPLORER_COSTCATEGORY,
      new ResourceProperty(
        "Provides a CE Cost Category.",
        COSTEXPLORER_CostCategory.GetTypes(),
      ),
    ],
    [
      ResourceType.CUR_REPORTDEFINITION,
      new ResourceProperty(
        "Manages Cost and Usage Report Definitions.  > -NOTE:- The AWS Cost and Usage Report service is only available in `us-east-1` currently.",
        CUR_ReportDefinition.GetTypes(),
      ),
    ],
    [
      ResourceType.CUSTOMERPROFILES_DOMAIN,
      new ResourceProperty(
        "Resource for managing an Amazon Customer Profiles Domain. See the [Create Domain](https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html) for more information.",
        CUSTOMERPROFILES_Domain.GetTypes(),
      ),
    ],
    [
      ResourceType.CUSTOMERPROFILES_PROFILE,
      new ResourceProperty(
        "Resource for managing an Amazon Customer Profiles Profile. See the [Create Profile](https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateProfile.html) for more information.",
        CUSTOMERPROFILES_Profile.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAEXCHANGE_DATASET,
      new ResourceProperty(
        "Provides a resource to manage AWS Data Exchange DataSets.",
        DATAEXCHANGE_DataSet.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAEXCHANGE_REVISION,
      new ResourceProperty(
        "Provides a resource to manage AWS Data Exchange Revisions.",
        DATAEXCHANGE_Revision.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPIPELINE_PIPELINE,
      new ResourceProperty(
        "Provides a DataPipeline Pipeline resource.",
        DATAPIPELINE_Pipeline.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAPIPELINE_PIPELINEDEFINITION,
      new ResourceProperty(
        "Provides a DataPipeline Pipeline Definition resource.",
        DATAPIPELINE_PipelineDefinition.GetTypes(),
      ),
    ],
    [
      ResourceType.DATASYNC_AGENT,
      new ResourceProperty(
        "Manages an AWS DataSync Agent deployed on premises.  > --NOTE:-- One of `activation_key` or `ip_address` must be provided for resource creation (agent activation). Neither is required for resource import. If using `ip_address`, this provider must be able to make an HTTP (port 80) GET request to the specified IP address from where it is running. The agent will turn off that HTTP server after activation.",
        DATASYNC_Agent.GetTypes(),
      ),
    ],
    [
      ResourceType.DATASYNC_EFSLOCATION,
      new ResourceProperty(
        "Manages an AWS DataSync EFS Location.  > --NOTE:-- The EFS File System must have a mounted EFS Mount Target before creating this resource.",
        DATASYNC_EfsLocation.GetTypes(),
      ),
    ],
    [
      ResourceType.DATASYNC_FSXOPENZFSFILESYSTEM,
      new ResourceProperty(
        "Manages an AWS DataSync FSx OpenZfs Location.",
        DATASYNC_FsxOpenZfsFileSystem.GetTypes(),
      ),
    ],
    [
      ResourceType.DATASYNC_LOCATIONAZUREBLOB,
      new ResourceProperty(
        "Manages a Microsoft Azure Blob Storage Location within AWS DataSync.  > --NOTE:-- The DataSync Agents must be available before creating this resource.",
        DATASYNC_LocationAzureBlob.GetTypes(),
      ),
    ],
    [
      ResourceType.DATASYNC_LOCATIONFSXLUSTRE,
      new ResourceProperty(
        "Manages an AWS DataSync FSx Lustre Location.",
        DATASYNC_LocationFsxLustre.GetTypes(),
      ),
    ],
    [
      ResourceType.DATASYNC_LOCATIONFSXONTAPFILESYSTEM,
      new ResourceProperty(
        "Resource for managing an AWS DataSync Location FSx Ontap File System.",
        DATASYNC_LocationFsxOntapFileSystem.GetTypes(),
      ),
    ],
    [
      ResourceType.DATASYNC_LOCATIONFSXWINDOWS,
      new ResourceProperty(
        "Manages an AWS DataSync FSx Windows Location.",
        DATASYNC_LocationFsxWindows.GetTypes(),
      ),
    ],
    [
      ResourceType.DATASYNC_LOCATIONHDFS,
      new ResourceProperty(
        "Manages an HDFS Location within AWS DataSync.  > --NOTE:-- The DataSync Agents must be available before creating this resource.",
        DATASYNC_LocationHdfs.GetTypes(),
      ),
    ],
    [
      ResourceType.DATASYNC_LOCATIONOBJECTSTORAGE,
      new ResourceProperty(
        "Manages a Object Storage Location within AWS DataSync.  > --NOTE:-- The DataSync Agents must be available before creating this resource.",
        DATASYNC_LocationObjectStorage.GetTypes(),
      ),
    ],
    [
      ResourceType.DATASYNC_LOCATIONSMB,
      new ResourceProperty(
        "Manages a SMB Location within AWS DataSync.  > --NOTE:-- The DataSync Agents must be available before creating this resource.",
        DATASYNC_LocationSmb.GetTypes(),
      ),
    ],
    [
      ResourceType.DATASYNC_NFSLOCATION,
      new ResourceProperty(
        "Manages an NFS Location within AWS DataSync.  > --NOTE:-- The DataSync Agents must be available before creating this resource.",
        DATASYNC_NfsLocation.GetTypes(),
      ),
    ],
    [
      ResourceType.DATASYNC_S3LOCATION,
      new ResourceProperty(
        "Manages an S3 Location within AWS DataSync.",
        DATASYNC_S3Location.GetTypes(),
      ),
    ],
    [
      ResourceType.DATASYNC_TASK,
      new ResourceProperty(
        "Manages an AWS DataSync Task, which represents a configuration for synchronization. Starting an execution of these DataSync Tasks (actually synchronizing files) is performed outside of this resource.",
        DATASYNC_Task.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAZONE_DOMAIN,
      new ResourceProperty(
        "Resource for managing an AWS DataZone Domain.",
        DATAZONE_Domain.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAZONE_ENVIRONMENTBLUEPRINTCONFIGURATION,
      new ResourceProperty(
        "Resource for managing an AWS DataZone Environment Blueprint Configuration.",
        DATAZONE_EnvironmentBlueprintConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAZONE_ENVIRONMENTPROFILE,
      new ResourceProperty(
        "Resource for managing an AWS DataZone Environment Profile.",
        DATAZONE_EnvironmentProfile.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAZONE_FORMTYPE,
      new ResourceProperty(
        "Resource for managing an AWS DataZone Form Type.",
        DATAZONE_FormType.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAZONE_GLOSSARY,
      new ResourceProperty(
        "Resource for managing an AWS DataZone Glossary.",
        DATAZONE_Glossary.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAZONE_GLOSSARYTERM,
      new ResourceProperty(
        "Resource for managing an AWS DataZone Glossary Term.",
        DATAZONE_GlossaryTerm.GetTypes(),
      ),
    ],
    [
      ResourceType.DATAZONE_PROJECT,
      new ResourceProperty(
        "Resource for managing an AWS DataZone Project.",
        DATAZONE_Project.GetTypes(),
      ),
    ],
    [
      ResourceType.DAX_CLUSTER,
      new ResourceProperty(
        "Provides a DAX Cluster resource.",
        DAX_Cluster.GetTypes(),
      ),
    ],
    [
      ResourceType.DAX_PARAMETERGROUP,
      new ResourceProperty(
        "Provides a DAX Parameter Group resource.",
        DAX_ParameterGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.DAX_SUBNETGROUP,
      new ResourceProperty(
        "Provides a DAX Subnet Group resource.",
        DAX_SubnetGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.DETECTIVE_GRAPH,
      new ResourceProperty(
        "Provides a resource to manage an [AWS Detective Graph](https://docs.aws.amazon.com/detective/latest/APIReference/API_CreateGraph.html). As an AWS account may own only one Detective graph per region, provisioning multiple Detective graphs requires a separate provider configuration for each graph.",
        DETECTIVE_Graph.GetTypes(),
      ),
    ],
    [
      ResourceType.DETECTIVE_INVITATIONACCEPTER,
      new ResourceProperty(
        "Provides a resource to manage an [Amazon Detective Invitation Accepter](https://docs.aws.amazon.com/detective/latest/APIReference/API_AcceptInvitation.html). Ensure that the accepter is configured to use the AWS account you wish to _accept_ the invitation from the primary graph owner account.",
        DETECTIVE_InvitationAccepter.GetTypes(),
      ),
    ],
    [
      ResourceType.DETECTIVE_MEMBER,
      new ResourceProperty(
        "Provides a resource to manage an [Amazon Detective Member](https://docs.aws.amazon.com/detective/latest/APIReference/API_CreateMembers.html).",
        DETECTIVE_Member.GetTypes(),
      ),
    ],
    [
      ResourceType.DETECTIVE_ORGANIZATIONADMINACCOUNT,
      new ResourceProperty(
        "Manages a Detective Organization Admin Account. The AWS account utilizing this resource must be an Organizations primary account. More information about Organizations support in Detective can be found in the [Detective User Guide](https://docs.aws.amazon.com/detective/latest/adminguide/accounts-orgs-transition.html).",
        DETECTIVE_OrganizationAdminAccount.GetTypes(),
      ),
    ],
    [
      ResourceType.DETECTIVE_ORGANIZATIONCONFIGURATION,
      new ResourceProperty("", DETECTIVE_OrganizationConfiguration.GetTypes()),
    ],
    [
      ResourceType.DEVICEFARM_DEVICEPOOL,
      new ResourceProperty(
        "Provides a resource to manage AWS Device Farm Device Pools.",
        DEVICEFARM_DevicePool.GetTypes(),
      ),
    ],
    [
      ResourceType.DEVICEFARM_INSTANCEPROFILE,
      new ResourceProperty(
        "Provides a resource to manage AWS Device Farm Instance Profiles. ∂ > --NOTE:-- AWS currently has limited regional support for Device Farm (e.g., `us-west-2`). See [AWS Device Farm endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/devicefarm.html) for information on supported regions.",
        DEVICEFARM_InstanceProfile.GetTypes(),
      ),
    ],
    [
      ResourceType.DEVICEFARM_NETWORKPROFILE,
      new ResourceProperty(
        "Provides a resource to manage AWS Device Farm Network Profiles. ∂ > --NOTE:-- AWS currently has limited regional support for Device Farm (e.g., `us-west-2`). See [AWS Device Farm endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/devicefarm.html) for information on supported regions.",
        DEVICEFARM_NetworkProfile.GetTypes(),
      ),
    ],
    [
      ResourceType.DEVICEFARM_PROJECT,
      new ResourceProperty(
        "Provides a resource to manage AWS Device Farm Projects.  For more information about Device Farm Projects, see the AWS Documentation on [Device Farm Projects][aws-get-project].  > --NOTE:-- AWS currently has limited regional support for Device Farm (e.g., `us-west-2`). See [AWS Device Farm endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/devicefarm.html) for information on supported regions.",
        DEVICEFARM_Project.GetTypes(),
      ),
    ],
    [
      ResourceType.DEVICEFARM_TESTGRIDPROJECT,
      new ResourceProperty(
        "Provides a resource to manage AWS Device Farm Test Grid Projects.  > --NOTE:-- AWS currently has limited regional support for Device Farm (e.g., `us-west-2`). See [AWS Device Farm endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/devicefarm.html) for information on supported regions.",
        DEVICEFARM_TestGridProject.GetTypes(),
      ),
    ],
    [
      ResourceType.DEVICEFARM_UPLOAD,
      new ResourceProperty(
        "Provides a resource to manage AWS Device Farm Uploads.  > --NOTE:-- AWS currently has limited regional support for Device Farm (e.g., `us-west-2`). See [AWS Device Farm endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/devicefarm.html) for information on supported regions.",
        DEVICEFARM_Upload.GetTypes(),
      ),
    ],
    [
      ResourceType.DEVOPSGURU_EVENTSOURCESCONFIG,
      new ResourceProperty("", DEVOPSGURU_EventSourcesConfig.GetTypes()),
    ],
    [
      ResourceType.DEVOPSGURU_NOTIFICATIONCHANNEL,
      new ResourceProperty(
        "Resource for managing an AWS DevOps Guru Notification Channel.",
        DEVOPSGURU_NotificationChannel.GetTypes(),
      ),
    ],
    [
      ResourceType.DEVOPSGURU_RESOURCECOLLECTION,
      new ResourceProperty(
        "Resource for managing an AWS DevOps Guru Resource Collection.  > Only one type of resource collection (All Account Resources, CloudFormation, or Tags) can be enabled in an account at a time. To avoid persistent differences, this resource should be defined only once.",
        DEVOPSGURU_ResourceCollection.GetTypes(),
      ),
    ],
    [
      ResourceType.DEVOPSGURU_SERVICEINTEGRATION,
      new ResourceProperty("", DEVOPSGURU_ServiceIntegration.GetTypes()),
    ],
    [
      ResourceType.DIRECTCONNECT_BGPPEER,
      new ResourceProperty(
        "Provides a Direct Connect BGP peer resource.",
        DIRECTCONNECT_BgpPeer.GetTypes(),
      ),
    ],
    [
      ResourceType.DIRECTCONNECT_CONNECTION,
      new ResourceProperty(
        "Provides a Connection of Direct Connect.",
        DIRECTCONNECT_Connection.GetTypes(),
      ),
    ],
    [
      ResourceType.DIRECTCONNECT_CONNECTIONASSOCIATION,
      new ResourceProperty(
        "Associates a Direct Connect Connection with a LAG.",
        DIRECTCONNECT_ConnectionAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.DIRECTCONNECT_CONNECTIONCONFIRMATION,
      new ResourceProperty(
        "Provides a confirmation of the creation of the specified hosted connection on an interconnect.",
        DIRECTCONNECT_ConnectionConfirmation.GetTypes(),
      ),
    ],
    [
      ResourceType.DIRECTCONNECT_GATEWAY,
      new ResourceProperty(
        "Provides a Direct Connect Gateway.",
        DIRECTCONNECT_Gateway.GetTypes(),
      ),
    ],
    [
      ResourceType.DIRECTCONNECT_GATEWAYASSOCIATION,
      new ResourceProperty(
        "Associates a Direct Connect Gateway with a VGW or transit gateway.  To create a cross-account association, create an `aws.directconnect.GatewayAssociationProposal` resource in the AWS account that owns the VGW or transit gateway and then accept the proposal in the AWS account that owns the Direct Connect Gateway by creating an `aws.directconnect.GatewayAssociation` resource with the `proposal_id` and `associated_gateway_owner_account_id` attributes set.",
        DIRECTCONNECT_GatewayAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.DIRECTCONNECT_GATEWAYASSOCIATIONPROPOSAL,
      new ResourceProperty(
        "Manages a Direct Connect Gateway Association Proposal, typically for enabling cross-account associations. For single account associations, see the `aws.directconnect.GatewayAssociation` resource.",
        DIRECTCONNECT_GatewayAssociationProposal.GetTypes(),
      ),
    ],
    [
      ResourceType.DIRECTCONNECT_HOSTEDCONNECTION,
      new ResourceProperty(
        "Provides a hosted connection on the specified interconnect or a link aggregation group (LAG) of interconnects. Intended for use by AWS Direct Connect Partners only.",
        DIRECTCONNECT_HostedConnection.GetTypes(),
      ),
    ],
    [
      ResourceType.DIRECTCONNECT_HOSTEDPRIVATEVIRTUALINTERFACE,
      new ResourceProperty(
        "Provides a Direct Connect hosted private virtual interface resource. This resource represents the allocator's side of the hosted virtual interface. A hosted virtual interface is a virtual interface that is owned by another AWS account.",
        DIRECTCONNECT_HostedPrivateVirtualInterface.GetTypes(),
      ),
    ],
    [
      ResourceType.DIRECTCONNECT_HOSTEDPRIVATEVIRTUALINTERFACEACCEPTER,
      new ResourceProperty(
        "Provides a resource to manage the accepter's side of a Direct Connect hosted private virtual interface. This resource accepts ownership of a private virtual interface created by another AWS account.",
        DIRECTCONNECT_HostedPrivateVirtualInterfaceAccepter.GetTypes(),
      ),
    ],
    [
      ResourceType.DIRECTCONNECT_HOSTEDPUBLICVIRTUALINTERFACE,
      new ResourceProperty(
        "Provides a Direct Connect hosted public virtual interface resource. This resource represents the allocator's side of the hosted virtual interface. A hosted virtual interface is a virtual interface that is owned by another AWS account.",
        DIRECTCONNECT_HostedPublicVirtualInterface.GetTypes(),
      ),
    ],
    [
      ResourceType.DIRECTCONNECT_HOSTEDPUBLICVIRTUALINTERFACEACCEPTER,
      new ResourceProperty(
        "Provides a resource to manage the accepter's side of a Direct Connect hosted public virtual interface. This resource accepts ownership of a public virtual interface created by another AWS account.",
        DIRECTCONNECT_HostedPublicVirtualInterfaceAccepter.GetTypes(),
      ),
    ],
    [
      ResourceType.DIRECTCONNECT_HOSTEDTRANSITVIRTUALINTERFACE,
      new ResourceProperty(
        "Provides a Direct Connect hosted transit virtual interface resource. This resource represents the allocator's side of the hosted virtual interface. A hosted virtual interface is a virtual interface that is owned by another AWS account.",
        DIRECTCONNECT_HostedTransitVirtualInterface.GetTypes(),
      ),
    ],
    [
      ResourceType.DIRECTCONNECT_HOSTEDTRANSITVIRTUALINTERFACEACCEPTOR,
      new ResourceProperty(
        "Provides a resource to manage the accepter's side of a Direct Connect hosted transit virtual interface. This resource accepts ownership of a transit virtual interface created by another AWS account.  > --NOTE:-- AWS allows a Direct Connect hosted transit virtual interface to be deleted from either the allocator's or accepter's side. However, this provider only allows the Direct Connect hosted transit virtual interface to be deleted from the allocator's side by removing the corresponding `aws.directconnect.HostedTransitVirtualInterface` resource from your configuration. Removing a `aws.directconnect.HostedTransitVirtualInterfaceAcceptor` resource from your configuration will remove it from your statefile and management, --but will not delete the Direct Connect virtual interface.--",
        DIRECTCONNECT_HostedTransitVirtualInterfaceAcceptor.GetTypes(),
      ),
    ],
    [
      ResourceType.DIRECTCONNECT_LINKAGGREGATIONGROUP,
      new ResourceProperty(
        "Provides a Direct Connect LAG. Connections can be added to the LAG via the `aws.directconnect.Connection` and `aws.directconnect.ConnectionAssociation` resources.  > -NOTE:- When creating a LAG, if no existing connection is specified, Direct Connect will create a connection and this provider will remove this unmanaged connection during resource creation.",
        DIRECTCONNECT_LinkAggregationGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.DIRECTCONNECT_MACSECKEYASSOCIATION,
      new ResourceProperty(
        "Provides a MAC Security (MACSec) secret key resource for use with Direct Connect. See [MACsec prerequisites](https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-mac-sec-getting-started.html#mac-sec-prerequisites) for information about MAC Security (MACsec) prerequisites.  Creating this resource will also create a resource of type `aws.secretsmanager.Secret` which is managed by Direct Connect. While you can import this resource into your state, because this secret is managed by Direct Connect, you will not be able to make any modifications to it. See [How AWS Direct Connect uses AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/integrating_how-services-use-secrets_directconnect.html) for details.  > --Note:-- All arguments including `ckn` and `cak` will be stored in the raw state as plain-text. > --Note:-- The `secret_arn` argument can only be used to reference a previously created MACSec key. You cannot associate a Secrets Manager secret created outside of the `aws.directconnect.MacsecKeyAssociation` resource.",
        DIRECTCONNECT_MacsecKeyAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.DIRECTCONNECT_PRIVATEVIRTUALINTERFACE,
      new ResourceProperty(
        "Provides a Direct Connect private virtual interface resource.",
        DIRECTCONNECT_PrivateVirtualInterface.GetTypes(),
      ),
    ],
    [
      ResourceType.DIRECTCONNECT_PUBLICVIRTUALINTERFACE,
      new ResourceProperty(
        "Provides a Direct Connect public virtual interface resource.",
        DIRECTCONNECT_PublicVirtualInterface.GetTypes(),
      ),
    ],
    [
      ResourceType.DIRECTCONNECT_TRANSITVIRTUALINTERFACE,
      new ResourceProperty(
        "Provides a Direct Connect transit virtual interface resource. A transit virtual interface is a VLAN that transports traffic from a Direct Connect gateway to one or more transit gateways.",
        DIRECTCONNECT_TransitVirtualInterface.GetTypes(),
      ),
    ],
    [
      ResourceType.DIRECTORYSERVICE_CONDITIONALFORWADER,
      new ResourceProperty(
        "Provides a conditional forwarder for managed Microsoft AD in AWS Directory Service.",
        DIRECTORYSERVICE_ConditionalForwader.GetTypes(),
      ),
    ],
    [
      ResourceType.DIRECTORYSERVICE_DIRECTORY,
      new ResourceProperty(
        "Provides a Simple or Managed Microsoft directory in AWS Directory Service.",
        DIRECTORYSERVICE_Directory.GetTypes(),
      ),
    ],
    [
      ResourceType.DIRECTORYSERVICE_LOGSERVICE,
      new ResourceProperty(
        "Provides a Log subscription for AWS Directory Service that pushes logs to cloudwatch.",
        DIRECTORYSERVICE_LogService.GetTypes(),
      ),
    ],
    [
      ResourceType.DIRECTORYSERVICE_RADIUSSETTINGS,
      new ResourceProperty(
        "Manages a directory's multi-factor authentication (MFA) using a Remote Authentication Dial In User Service (RADIUS) server.",
        DIRECTORYSERVICE_RadiusSettings.GetTypes(),
      ),
    ],
    [
      ResourceType.DIRECTORYSERVICE_SERVICEREGION,
      new ResourceProperty(
        "Manages a replicated Region and directory for Multi-Region replication. Multi-Region replication is only supported for the Enterprise Edition of AWS Managed Microsoft AD.",
        DIRECTORYSERVICE_ServiceRegion.GetTypes(),
      ),
    ],
    [
      ResourceType.DIRECTORYSERVICE_SHAREDDIRECTORY,
      new ResourceProperty(
        "Manages a directory in your account (directory owner) shared with another account (directory consumer).",
        DIRECTORYSERVICE_SharedDirectory.GetTypes(),
      ),
    ],
    [
      ResourceType.DIRECTORYSERVICE_SHAREDDIRECTORYACCEPTER,
      new ResourceProperty(
        "Accepts a shared directory in a consumer account.  > --NOTE:-- Destroying this resource removes the shared directory from the consumer account only.",
        DIRECTORYSERVICE_SharedDirectoryAccepter.GetTypes(),
      ),
    ],
    [
      ResourceType.DIRECTORYSERVICE_TRUST,
      new ResourceProperty(
        "Manages a trust relationship between two Active Directory Directories.  The directories may either be both AWS Managed Microsoft AD domains or an AWS Managed Microsoft AD domain and a self-managed Active Directory Domain.  The Trust relationship must be configured on both sides of the relationship. If a Trust has only been created on one side, it will be in the state `VerifyFailed`. Once the second Trust is created, the first will update to the correct state.",
        DIRECTORYSERVICE_Trust.GetTypes(),
      ),
    ],
    [
      ResourceType.DLM_LIFECYCLEPOLICY,
      new ResourceProperty(
        "Provides a [Data Lifecycle Manager (DLM) lifecycle policy](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html) for managing snapshots.",
        DLM_LifecyclePolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.DMS_CERTIFICATE,
      new ResourceProperty(
        "Provides a DMS (Data Migration Service) certificate resource. DMS certificates can be created, deleted, and imported.",
        DMS_Certificate.GetTypes(),
      ),
    ],
    [
      ResourceType.DMS_ENDPOINT,
      new ResourceProperty(
        "Provides a DMS (Data Migration Service) endpoint resource. DMS endpoints can be created, updated, deleted, and imported.  > --Note:-- All arguments including the password will be stored in the raw state as plain-text. > --Note:-- The `s3_settings` argument is deprecated, may not be maintained, and will be removed in a future version. Use the `aws.dms.S3Endpoint` resource instead.",
        DMS_Endpoint.GetTypes(),
      ),
    ],
    [
      ResourceType.DMS_EVENTSUBSCRIPTION,
      new ResourceProperty(
        "Provides a DMS (Data Migration Service) event subscription resource.",
        DMS_EventSubscription.GetTypes(),
      ),
    ],
    [
      ResourceType.DMS_REPLICATIONCONFIG,
      new ResourceProperty(
        "Provides a DMS Serverless replication config resource.  > --NOTE:-- Changing most arguments will stop the replication if it is running. You can set `start_replication` to resume the replication afterwards.",
        DMS_ReplicationConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.DMS_REPLICATIONINSTANCE,
      new ResourceProperty(
        "Provides a DMS (Data Migration Service) replication instance resource. DMS replication instances can be created, updated, deleted, and imported.",
        DMS_ReplicationInstance.GetTypes(),
      ),
    ],
    [
      ResourceType.DMS_REPLICATIONSUBNETGROUP,
      new ResourceProperty(
        "Provides a DMS (Data Migration Service) replication subnet group resource. DMS replication subnet groups can be created, updated, deleted, and imported.  > --Note:-- AWS requires a special IAM role called `dms-vpc-role` when using this resource. See the example below to create it as part of your configuration.",
        DMS_ReplicationSubnetGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.DMS_REPLICATIONTASK,
      new ResourceProperty(
        "Provides a DMS (Data Migration Service) replication task resource. DMS replication tasks can be created, updated, deleted, and imported.  > --NOTE:-- Changing most arguments will stop the task if it is running. You can set `start_replication_task` to resume the task afterwards.",
        DMS_ReplicationTask.GetTypes(),
      ),
    ],
    [
      ResourceType.DMS_S3ENDPOINT,
      new ResourceProperty(
        'Provides a DMS (Data Migration Service) S3 endpoint resource. DMS S3 endpoints can be created, updated, deleted, and imported.  > --Note:-- AWS is deprecating `extra_connection_attributes`, such as used with `aws.dms.Endpoint`. This resource is an alternative to `aws.dms.Endpoint` and does not use `extra_connection_attributes`. (AWS currently includes `extra_connection_attributes` in the raw responses to the AWS Provider requests and so they may be visible in the logs.)  > --Note:-- Some of this resource\'s arguments have default values that come from the AWS Provider. Other default values are provided by AWS and subject to change without notice. When relying on AWS defaults, the provider state will often have a zero value. For example, the AWS Provider does not provide a default for `cdc_max_batch_interval` but the AWS default is `60` (seconds). However, the provider state will show `0` since this is the value return by AWS when no value is present. Below, we aim to flag the defaults that come from AWS (_e.g._, "AWS default...").',
        DMS_S3Endpoint.GetTypes(),
      ),
    ],
    [
      ResourceType.DOCDB_CLUSTER,
      new ResourceProperty(
        "Manages a DocumentDB Cluster.  Changes to a DocumentDB Cluster can occur when you manually change a parameter, such as `port`, and are reflected in the next maintenance window. Because of this, this provider may report a difference in its planning phase because a modification has not yet taken place. You can use the `apply_immediately` flag to instruct the service to apply the change immediately (see documentation below).  > --Note:-- using `apply_immediately` can result in a brief downtime as the server reboots.",
        DOCDB_Cluster.GetTypes(),
      ),
    ],
    [
      ResourceType.DOCDB_CLUSTERINSTANCE,
      new ResourceProperty(
        "Provides an DocumentDB Cluster Resource Instance. A Cluster Instance Resource defines attributes that are specific to a single instance in a [DocumentDB Cluster][1].  You do not designate a primary and subsequent replicas. Instead, you simply add DocumentDB Instances and DocumentDB manages the replication. You can use the [count][3] meta-parameter to make multiple instances and join them all to the same DocumentDB Cluster, or you may specify different Cluster Instance resources with various `instance_class` sizes.",
        DOCDB_ClusterInstance.GetTypes(),
      ),
    ],
    [
      ResourceType.DOCDB_CLUSTERPARAMETERGROUP,
      new ResourceProperty(
        "Manages a DocumentDB Cluster Parameter Group",
        DOCDB_ClusterParameterGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.DOCDB_CLUSTERSNAPSHOT,
      new ResourceProperty(
        "Manages a DocumentDB database cluster snapshot for DocumentDB clusters.",
        DOCDB_ClusterSnapshot.GetTypes(),
      ),
    ],
    [
      ResourceType.DOCDB_ELASTICCLUSTER,
      new ResourceProperty(
        "Manages an AWS DocDB (DocumentDB) Elastic Cluster.",
        DOCDB_ElasticCluster.GetTypes(),
      ),
    ],
    [
      ResourceType.DOCDB_EVENTSUBSCRIPTION,
      new ResourceProperty(
        "Provides a DocumentDB event subscription resource.",
        DOCDB_EventSubscription.GetTypes(),
      ),
    ],
    [
      ResourceType.DOCDB_GLOBALCLUSTER,
      new ResourceProperty(
        "Manages an DocumentDB Global Cluster. A global cluster consists of one primary region and up to five read-only secondary regions. You issue write operations directly to the primary cluster in the primary region and Amazon DocumentDB automatically replicates the data to the secondary regions using dedicated infrastructure.  More information about DocumentDB Global Clusters can be found in the [DocumentDB Developer Guide](https://docs.aws.amazon.com/documentdb/latest/developerguide/global-clusters.html).",
        DOCDB_GlobalCluster.GetTypes(),
      ),
    ],
    [
      ResourceType.DOCDB_SUBNETGROUP,
      new ResourceProperty(
        "Provides an DocumentDB subnet group resource.",
        DOCDB_SubnetGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.DRS_REPLICATIONCONFIGURATIONTEMPLATE,
      new ResourceProperty(
        "Provides an Elastic Disaster Recovery replication configuration template resource. Before using DRS, your account must be [initialized](https://docs.aws.amazon.com/drs/latest/userguide/getting-started-initializing.html).  > --NOTE:-- Your configuration must use the PIT policy shown in the basic configuration due to AWS rules. The only value that you can change is the `retention_duration` of `rule_id` 3.",
        DRS_ReplicationConfigurationTemplate.GetTypes(),
      ),
    ],
    [
      ResourceType.DYNAMODB_CONTRIBUTORINSIGHTS,
      new ResourceProperty(
        "Provides a DynamoDB contributor insights resource",
        DYNAMODB_ContributorInsights.GetTypes(),
      ),
    ],
    [
      ResourceType.DYNAMODB_GLOBALTABLE,
      new ResourceProperty(
        "Manages [DynamoDB Global Tables V1 (version 2017.11.29)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html). These are layered on top of existing DynamoDB Tables.  > --NOTE:-- To instead manage [DynamoDB Global Tables V2 (version 2019.11.21)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html), use the `aws.dynamodb.Table` resource `replica` configuration block.  > Note: There are many restrictions before you can properly create DynamoDB Global Tables in multiple regions. See the [AWS DynamoDB Global Table Requirements](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables_reqs_bestpractices.html) for more information.",
        DYNAMODB_GlobalTable.GetTypes(),
      ),
    ],
    [
      ResourceType.DYNAMODB_KINESISSTREAMINGDESTINATION,
      new ResourceProperty(
        "Enables a [Kinesis streaming destination](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/kds.html) for data replication of a DynamoDB table.",
        DYNAMODB_KinesisStreamingDestination.GetTypes(),
      ),
    ],
    [
      ResourceType.DYNAMODB_RESOURCEPOLICY,
      new ResourceProperty(
        "Resource for managing an AWS DynamoDB Resource Policy.",
        DYNAMODB_ResourcePolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.DYNAMODB_TABLE,
      new ResourceProperty(
        "Provides a DynamoDB table resource.  > --Note:-- It is recommended to use [`ignoreChanges`](https://www.pulumi.com/docs/intro/concepts/programming-model/#ignorechanges) for `read_capacity` and/or `write_capacity` if there's `autoscaling policy` attached to the table.  > --Note:-- When using aws.dynamodb.TableReplica with this resource, use `lifecycle` `ignore_changes` for `replica`, _e.g._, `lifecycle { ignore_changes = [replica] }`.  ## DynamoDB Table attributes  Only define attributes on the table object that are going to be used as:  - Table hash key or range key - LSI or GSI hash key or range key  The DynamoDB API expects attribute structure (name and type) to be passed along when creating or updating GSI/LSIs or creating the initial table. In these cases it expects the Hash / Range keys to be provided. Because these get re-used in numerous places (i.e the table's range key could be a part of one or more GSIs), they are stored on the table object to prevent duplication and increase consistency. If you add attributes here that are not used in these scenarios it can cause an infinite loop in planning.",
        DYNAMODB_Table.GetTypes(),
      ),
    ],
    [
      ResourceType.DYNAMODB_TABLEEXPORT,
      new ResourceProperty("", DYNAMODB_TableExport.GetTypes()),
    ],
    [
      ResourceType.DYNAMODB_TABLEITEM,
      new ResourceProperty(
        "Provides a DynamoDB table item resource  > --Note:-- This resource is not meant to be used for managing large amounts of data in your table, it is not designed to scale.   You should perform --regular backups-- of all data in the table, see [AWS docs for more](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/BackupRestore.html).",
        DYNAMODB_TableItem.GetTypes(),
      ),
    ],
    [
      ResourceType.DYNAMODB_TABLEREPLICA,
      new ResourceProperty(
        "Provides a DynamoDB table replica resource for [DynamoDB Global Tables V2 (version 2019.11.21)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html).  > --Note:-- Use `lifecycle` `ignore_changes` for `replica` in the associated aws.dynamodb.Table configuration.  > --Note:-- Do not use the `replica` configuration block of aws.dynamodb.Table together with this resource as the two configuration options are mutually exclusive.",
        DYNAMODB_TableReplica.GetTypes(),
      ),
    ],
    [
      ResourceType.DYNAMODB_TAG,
      new ResourceProperty(
        "Manages an individual DynamoDB resource tag. This resource should only be used in cases where DynamoDB resources are created outside the provider (e.g., Table replicas in other regions).  > --NOTE:-- This tagging resource should not be combined with the resource for managing the parent resource. For example, using `aws.dynamodb.Table` and `aws.dynamodb.Tag` to manage tags of the same DynamoDB Table in the same region will cause a perpetual difference where the `aws_dynamodb_cluster` resource will try to remove the tag being added by the `aws.dynamodb.Tag` resource.  > --NOTE:-- This tagging resource does not use the provider `ignore_tags` configuration.",
        DYNAMODB_Tag.GetTypes(),
      ),
    ],
    [
      ResourceType.EBS_DEFAULTKMSKEY,
      new ResourceProperty(
        "Provides a resource to manage the default customer master key (CMK) that your AWS account uses to encrypt EBS volumes.  Your AWS account has an AWS-managed default CMK that is used for encrypting an EBS volume when no CMK is specified in the API call that creates the volume. By using the `aws.ebs.DefaultKmsKey` resource, you can specify a customer-managed CMK to use in place of the AWS-managed default CMK.  > --NOTE:-- Creating an `aws.ebs.DefaultKmsKey` resource does not enable default EBS encryption. Use the `aws.ebs.EncryptionByDefault` to enable default EBS encryption.  > --NOTE:-- Destroying this resource will reset the default CMK to the account's AWS-managed default CMK for EBS.",
        EBS_DefaultKmsKey.GetTypes(),
      ),
    ],
    [
      ResourceType.EBS_ENCRYPTIONBYDEFAULT,
      new ResourceProperty(
        "Provides a resource to manage whether default EBS encryption is enabled for your AWS account in the current AWS region. To manage the default KMS key for the region, see the `aws.ebs.DefaultKmsKey` resource.  > --NOTE:-- Removing this resource disables default EBS encryption.",
        EBS_EncryptionByDefault.GetTypes(),
      ),
    ],
    [
      ResourceType.EBS_FASTSNAPSHOTRESTORE,
      new ResourceProperty(
        "Resource for managing an EBS (Elastic Block Storage) Fast Snapshot Restore.",
        EBS_FastSnapshotRestore.GetTypes(),
      ),
    ],
    [
      ResourceType.EBS_SNAPSHOT,
      new ResourceProperty(
        "Creates a Snapshot of an EBS Volume.",
        EBS_Snapshot.GetTypes(),
      ),
    ],
    [
      ResourceType.EBS_SNAPSHOTBLOCKPUBLICACCESS,
      new ResourceProperty("", EBS_SnapshotBlockPublicAccess.GetTypes()),
    ],
    [
      ResourceType.EBS_SNAPSHOTCOPY,
      new ResourceProperty(
        "Creates a Snapshot of a snapshot.",
        EBS_SnapshotCopy.GetTypes(),
      ),
    ],
    [
      ResourceType.EBS_SNAPSHOTIMPORT,
      new ResourceProperty(
        "Imports a disk image from S3 as a Snapshot.",
        EBS_SnapshotImport.GetTypes(),
      ),
    ],
    [
      ResourceType.EBS_VOLUME,
      new ResourceProperty(
        "Manages a single EBS volume.",
        EBS_Volume.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_AMI,
      new ResourceProperty(
        "The AMI resource allows the creation and management of a completely-custom -Amazon Machine Image- (AMI).  If you just want to duplicate an existing AMI, possibly copying it to another region, it's better to use `aws.ec2.AmiCopy` instead.  If you just want to share an existing AMI with another AWS account, it's better to use `aws.ec2.AmiLaunchPermission` instead.",
        EC2_Ami.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_AMICOPY,
      new ResourceProperty(
        'The "AMI copy" resource allows duplication of an Amazon Machine Image (AMI), including cross-region copies.  If the source AMI has associated EBS snapshots, those will also be duplicated along with the AMI.  This is useful for taking a single AMI provisioned in one region and making it available in another for a multi-region deployment.  Copying an AMI can take several minutes. The creation of this resource will block until the new AMI is available for use on new instances.',
        EC2_AmiCopy.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_AMIFROMINSTANCE,
      new ResourceProperty(
        'The "AMI from instance" resource allows the creation of an Amazon Machine Image (AMI) modeled after an existing EBS-backed EC2 instance.  The created AMI will refer to implicitly-created snapshots of the instance\'s EBS volumes and mimick its assigned block device configuration at the time the resource is created.  This resource is best applied to an instance that is stopped when this instance is created, so that the contents of the created image are predictable. When applied to an instance that is running, -the instance will be stopped before taking the snapshots and then started back up again-, resulting in a period of downtime.  Note that the source instance is inspected only at the initial creation of this resource. Ongoing updates to the referenced instance will not be propagated into the generated AMI. Users may taint or otherwise recreate the resource in order to produce a fresh snapshot.',
        EC2_AmiFromInstance.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_AMILAUNCHPERMISSION,
      new ResourceProperty(
        "Adds a launch permission to an Amazon Machine Image (AMI).",
        EC2_AmiLaunchPermission.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_AVAILABILITYZONEGROUP,
      new ResourceProperty(
        "Manages an EC2 Availability Zone Group, such as updating its opt-in status.  > --NOTE:-- This is an advanced resource. The provider will automatically assume management of the EC2 Availability Zone Group without import and perform no actions on removal from configuration.",
        EC2_AvailabilityZoneGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_CAPACITYBLOCKRESERVATION,
      new ResourceProperty(
        "Provides an EC2 Capacity Block Reservation. This allows you to purchase capacity block for your Amazon EC2 instances in a specific Availability Zone for machine learning (ML) Workloads.  > --NOTE:-- Once created, a reservation is valid for the `duration` of the provided `capacity_block_offering_id` and cannot be deleted. Performing a `destroy` will only remove the resource from state. For more information see [EC2 Capacity Block Reservation Documentation](https://aws.amazon.com/ec2/instance-types/p5/) and [PurchaseReservedDBInstancesOffering](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/capacity-blocks-pricing-billing.html).  > --NOTE:-- Due to the expense of testing this resource, we provide it as best effort. If you find it useful, and have the ability to help test or notice issues, consider reaching out to us on GitHub.",
        EC2_CapacityBlockReservation.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_CAPACITYRESERVATION,
      new ResourceProperty(
        "Provides an EC2 Capacity Reservation. This allows you to reserve capacity for your Amazon EC2 instances in a specific Availability Zone for any duration.",
        EC2_CapacityReservation.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_CARRIERGATEWAY,
      new ResourceProperty(
        "Manages an EC2 Carrier Gateway. See the AWS [documentation](https://docs.aws.amazon.com/vpc/latest/userguide/Carrier_Gateway.html) for more information.",
        EC2_CarrierGateway.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_CUSTOMERGATEWAY,
      new ResourceProperty(
        "Provides a customer gateway inside a VPC. These objects can be connected to VPN gateways via VPN connections, and allow you to establish tunnels between your network and the VPC.",
        EC2_CustomerGateway.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_DEDICATEDHOST,
      new ResourceProperty(
        "Provides an EC2 Host resource. This allows Dedicated Hosts to be allocated, modified, and released.",
        EC2_DedicatedHost.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_DEFAULTNETWORKACL,
      new ResourceProperty(
        'Provides a resource to manage a VPC\'s default network ACL. This resource can manage the default network ACL of the default or a non-default VPC.  > --NOTE:-- This is an advanced resource with special caveats. Please read this document in its entirety before using this resource. The `aws.ec2.DefaultNetworkAcl` behaves differently from normal resources. This provider does not _create_ this resource but instead attempts to "adopt" it into management.  Every VPC has a default network ACL that can be managed but not destroyed. When the provider first adopts the Default Network ACL, it --immediately removes all rules in the ACL--. It then proceeds to create any rules specified in the configuration. This step is required so that only the rules specified in the configuration are created.  This resource treats its inline rules as absolute; only the rules defined inline are created, and any additions/removals external to this resource will result in diffs being shown. For these reasons, this resource is incompatible with the `aws.ec2.NetworkAclRule` resource.  For more information about Network ACLs, see the AWS Documentation on [Network ACLs][aws-network-acls].',
        EC2_DefaultNetworkAcl.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_DEFAULTROUTETABLE,
      new ResourceProperty(
        'Provides a resource to manage a default route table of a VPC. This resource can manage the default route table of the default or a non-default VPC.  > --NOTE:-- This is an advanced resource with special caveats. Please read this document in its entirety before using this resource. The `aws.ec2.DefaultRouteTable` resource behaves differently from normal resources. This provider does not _create_ this resource but instead attempts to "adopt" it into management. --Do not-- use both `aws.ec2.DefaultRouteTable` to manage a default route table --and-- `aws.ec2.MainRouteTableAssociation` with the same VPC due to possible route conflicts. See aws.ec2.MainRouteTableAssociation documentation for more details.  Every VPC has a default route table that can be managed but not destroyed. When the provider first adopts a default route table, it --immediately removes all defined routes--. It then proceeds to create any routes specified in the configuration. This step is required so that only the routes specified in the configuration exist in the default route table.  For more information, see the Amazon VPC User Guide on [Route Tables](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html). For information about managing normal route tables in this provider, see `aws.ec2.RouteTable`.',
        EC2_DefaultRouteTable.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_DEFAULTSECURITYGROUP,
      new ResourceProperty(
        'Provides a resource to manage a default security group. This resource can manage the default security group of the default or a non-default VPC.  > --NOTE:-- This is an advanced resource with special caveats. Please read this document in its entirety before using this resource. The `aws.ec2.DefaultSecurityGroup` resource behaves differently from normal resources. This provider does not _create_ this resource but instead attempts to "adopt" it into management.  When the provider first begins managing the default security group, it --immediately removes all ingress and egress rules in the Security Group--. It then creates any rules specified in the configuration. This way only the rules specified in the configuration are created.  This resource treats its inline rules as absolute; only the rules defined inline are created, and any additions/removals external to this resource will result in diff shown. For these reasons, this resource is incompatible with the `aws.ec2.SecurityGroupRule` resource.  For more information about default security groups, see the AWS documentation on [Default Security Groups][aws-default-security-groups]. To manage normal security groups, see the `aws.ec2.SecurityGroup` resource.',
        EC2_DefaultSecurityGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_DEFAULTSUBNET,
      new ResourceProperty(
        'Provides a resource to manage a [default subnet](http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/default-vpc.html#default-vpc-basics) in the current region.  --This is an advanced resource-- and has special caveats to be aware of when using it. Please read this document in its entirety before using this resource.  The `aws.ec2.DefaultSubnet` resource behaves differently from normal resources in that if a default subnet exists in the specified Availability Zone, this provider does not _create_ this resource, but instead "adopts" it into management. If no default subnet exists, this provider creates a new default subnet. By default, `pulumi destroy` does not delete the default subnet but does remove the resource from the state. Set the `force_destroy` argument to `true` to delete the default subnet.',
        EC2_DefaultSubnet.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_DEFAULTVPC,
      new ResourceProperty(
        'Provides a resource to manage the [default AWS VPC](http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/default-vpc.html) in the current AWS Region.  If you created your AWS account after 2013-12-04 you have a default VPC in each AWS Region.  --This is an advanced resource-- and has special caveats to be aware of when using it. Please read this document in its entirety before using this resource.  The `aws.ec2.DefaultVpc` resource behaves differently from normal resources in that if a default VPC exists, this provider does not _create_ this resource, but instead "adopts" it into management. If no default VPC exists, the provider creates a new default VPC, which leads to the implicit creation of [other resources](https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html#default-vpc-components). By default, `pulumi destroy` does not delete the default VPC but does remove the resource from the state. Set the `force_destroy` argument to `true` to delete the default VPC.',
        EC2_DefaultVpc.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_DEFAULTVPCDHCPOPTIONS,
      new ResourceProperty(
        'Provides a resource to manage the [default AWS DHCP Options Set](http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_DHCP_Options.html#AmazonDNS) in the current region.  Each AWS region comes with a default set of DHCP options. --This is an advanced resource--, and has special caveats to be aware of when using it. Please read this document in its entirety before using this resource.  The `aws.ec2.DefaultVpcDhcpOptions` behaves differently from normal resources, in that this provider does not _create_ this resource, but instead "adopts" it into management.',
        EC2_DefaultVpcDhcpOptions.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_EGRESSONLYINTERNETGATEWAY,
      new ResourceProperty(
        "[IPv6 only] Creates an egress-only Internet gateway for your VPC. An egress-only Internet gateway is used to enable outbound communication over IPv6 from instances in your VPC to the Internet, and prevents hosts outside of your VPC from initiating an IPv6 connection with your instance.",
        EC2_EgressOnlyInternetGateway.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_EIP,
      new ResourceProperty(
        "Provides an Elastic IP resource.  > --Note:-- EIP may require IGW to exist prior to association. Use `depends_on` to set an explicit dependency on the IGW.  > --Note:-- Do not use `network_interface` to associate the EIP to `aws.lb.LoadBalancer` or `aws.ec2.NatGateway` resources. Instead use the `allocation_id` available in those resources to allow AWS to manage the association, otherwise you will see `AuthFailure` errors.",
        EC2_Eip.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_EIPASSOCIATION,
      new ResourceProperty(
        "Provides an AWS EIP Association as a top level resource, to associate and disassociate Elastic IPs from AWS Instances and Network Interfaces.  > --NOTE:-- Do not use this resource to associate an EIP to `aws.lb.LoadBalancer` or `aws.ec2.NatGateway` resources. Instead use the `allocation_id` available in those resources to allow AWS to manage the association, otherwise you will see `AuthFailure` errors.  > --NOTE:-- `aws.ec2.EipAssociation` is useful in scenarios where EIPs are either pre-existing or distributed to customers or users and therefore cannot be changed.",
        EC2_EipAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_EIPDOMAINNAME,
      new ResourceProperty(
        "Assigns a static reverse DNS record to an Elastic IP addresses. See [Using reverse DNS for email applications](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#Using_Elastic_Addressing_Reverse_DNS).",
        EC2_EipDomainName.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_FLEET,
      new ResourceProperty(
        "Provides a resource to manage EC2 Fleets.",
        EC2_Fleet.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_FLOWLOG,
      new ResourceProperty(
        "Provides a VPC/Subnet/ENI/Transit Gateway/Transit Gateway Attachment Flow Log to capture IP traffic for a specific network interface, subnet, or VPC. Logs are sent to a CloudWatch Log Group, a S3 Bucket, or Amazon Kinesis Data Firehose",
        EC2_FlowLog.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_IMAGEBLOCKPUBLICACCESS,
      new ResourceProperty(
        "Provides a regional public access block for AMIs. This prevents AMIs from being made publicly accessible. If you already have public AMIs, they will remain publicly available.  > --NOTE:-- Deleting this resource does not change the block public access value, the resource in simply removed from state instead.",
        EC2_ImageBlockPublicAccess.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_INSTANCE,
      new ResourceProperty(
        "Provides an EC2 instance resource. This allows instances to be created, updated, and deleted.",
        EC2_Instance.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_INSTANCEMETADATADEFAULTS,
      new ResourceProperty(
        "Manages regional EC2 instance metadata default settings. More information can be found in the [Configure instance metadata options for new instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-new-instances.html) user guide.",
        EC2_InstanceMetadataDefaults.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_INTERNETGATEWAY,
      new ResourceProperty(
        "Provides a resource to create a VPC Internet Gateway.",
        EC2_InternetGateway.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_INTERNETGATEWAYATTACHMENT,
      new ResourceProperty(
        "Provides a resource to create a VPC Internet Gateway Attachment.",
        EC2_InternetGatewayAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_KEYPAIR,
      new ResourceProperty(
        "Provides an [EC2 key pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) resource. A key pair is used to control login access to EC2 instances.  Currently this resource requires an existing user-supplied key pair. This key pair's public key will be registered with AWS to allow logging-in to EC2 instances.  When importing an existing key pair the public key material may be in any format supported by AWS. Supported formats (per the [AWS documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#how-to-generate-your-own-key-and-import-it-to-aws)) are:  - OpenSSH public key format (the format in ~/.ssh/authorized_keys) - Base64 encoded DER format - SSH public key file format as specified in RFC4716",
        EC2_KeyPair.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_LAUNCHCONFIGURATION,
      new ResourceProperty(
        "Provides a resource to create a new launch configuration, used for autoscaling groups.  !> --WARNING:-- The use of launch configurations is discouraged in favor of launch templates. Read more in the [AWS EC2 Documentation](https://docs.aws.amazon.com/autoscaling/ec2/userguide/launch-configurations.html).  > --Note-- When using `aws.ec2.LaunchConfiguration` with `aws.autoscaling.Group`, it is recommended to use the `name_prefix` (Optional) instead of the `name` (Optional) attribute.",
        EC2_LaunchConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_LAUNCHTEMPLATE,
      new ResourceProperty(
        "Provides an EC2 launch template resource. Can be used to create instances or auto scaling groups.",
        EC2_LaunchTemplate.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_LOCALGATEWAYROUTE,
      new ResourceProperty(
        "Manages an EC2 Local Gateway Route. More information can be found in the [Outposts User Guide](https://docs.aws.amazon.com/outposts/latest/userguide/outposts-networking-components.html#routing).",
        EC2_LocalGatewayRoute.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_LOCALGATEWAYROUTETABLEVPCASSOCIATION,
      new ResourceProperty(
        "Manages an EC2 Local Gateway Route Table VPC Association. More information can be found in the [Outposts User Guide](https://docs.aws.amazon.com/outposts/latest/userguide/outposts-local-gateways.html#vpc-associations).",
        EC2_LocalGatewayRouteTableVpcAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_MAINROUTETABLEASSOCIATION,
      new ResourceProperty(
        "Provides a resource for managing the main routing table of a VPC.  > --NOTE:-- --Do not-- use both `aws.ec2.DefaultRouteTable` to manage a default route table --and-- `aws.ec2.MainRouteTableAssociation` with the same VPC due to possible route conflicts. See aws.ec2.DefaultRouteTable documentation for more details. For more information, see the Amazon VPC User Guide on [Route Tables][aws-route-tables]. For information about managing normal route tables in Pulumi, see [`aws.ec2.RouteTable`][tf-route-tables].",
        EC2_MainRouteTableAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_MANAGEDPREFIXLIST,
      new ResourceProperty(
        "Provides a managed prefix list resource.  > --NOTE on Managed Prefix Lists and Managed Prefix List Entries:-- The provider currently provides both a standalone Managed Prefix List Entry resource (a single entry), and a Managed Prefix List resource with entries defined in-line. At this time you cannot use a Managed Prefix List with in-line rules in conjunction with any Managed Prefix List Entry resources. Doing so will cause a conflict of entries and will overwrite entries.  > --NOTE on `max_entries`:-- When you reference a Prefix List in a resource, the maximum number of entries for the prefix lists counts as the same number of rules or entries for the resource. For example, if you create a prefix list with a maximum of 20 entries and you reference that prefix list in a security group rule, this counts as 20 rules for the security group.",
        EC2_ManagedPrefixList.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_MANAGEDPREFIXLISTENTRY,
      new ResourceProperty(
        "Use the `aws_prefix_list_entry` resource to manage a managed prefix list entry.  > --NOTE:-- Pulumi currently provides two resources for managing Managed Prefix Lists and Managed Prefix List Entries. The standalone resource, Managed Prefix List Entry, is used to manage a single entry. The Managed Prefix List resource is used to manage multiple entries defined in-line. It is important to note that you cannot use a Managed Prefix List with in-line rules in conjunction with any Managed Prefix List Entry resources. This will result in a conflict of entries and will cause the entries to be overwritten.  > --NOTE:-- To improve execution times on larger updates, it is recommended to use the inline `entry` block as part of the Managed Prefix List resource when creating a prefix list with more than 100 entries. You can find more information about the resource here.",
        EC2_ManagedPrefixListEntry.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_NATGATEWAY,
      new ResourceProperty(
        "Provides a resource to create a VPC NAT Gateway.",
        EC2_NatGateway.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_NETWORKACL,
      new ResourceProperty(
        "Provides an network ACL resource. You might set up network ACLs with rules similar to your security groups in order to add an additional layer of security to your VPC.  > --NOTE on Network ACLs and Network ACL Rules:-- This provider currently provides both a standalone Network ACL Rule resource and a Network ACL resource with rules defined in-line. At this time you cannot use a Network ACL with in-line rules in conjunction with any Network ACL Rule resources. Doing so will cause a conflict of rule settings and will overwrite rules.  > --NOTE on Network ACLs and Network ACL Associations:-- the provider provides both a standalone network ACL association resource and a network ACL resource with a `subnet_ids` attribute. Do not use the same subnet ID in both a network ACL resource and a network ACL association resource. Doing so will cause a conflict of associations and will overwrite the association.",
        EC2_NetworkAcl.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_NETWORKACLASSOCIATION,
      new ResourceProperty(
        "Provides an network ACL association resource which allows you to associate your network ACL with any subnet(s).  > --NOTE on Network ACLs and Network ACL Associations:-- the provider provides both a standalone network ACL association resource and a network ACL resource with a `subnet_ids` attribute. Do not use the same subnet ID in both a network ACL resource and a network ACL association resource. Doing so will cause a conflict of associations and will overwrite the association.",
        EC2_NetworkAclAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_NETWORKACLRULE,
      new ResourceProperty(
        "Creates an entry (a rule) in a network ACL with the specified rule number.  > --NOTE on Network ACLs and Network ACL Rules:-- This provider currently provides both a standalone Network ACL Rule resource and a Network ACL resource with rules defined in-line. At this time you cannot use a Network ACL with in-line rules in conjunction with any Network ACL Rule resources. Doing so will cause a conflict of rule settings and will overwrite rules.",
        EC2_NetworkAclRule.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_NETWORKINSIGHTSANALYSIS,
      new ResourceProperty(
        'Provides a Network Insights Analysis resource. Part of the "Reachability Analyzer" service in the AWS VPC console.',
        EC2_NetworkInsightsAnalysis.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_NETWORKINSIGHTSPATH,
      new ResourceProperty(
        'Provides a Network Insights Path resource. Part of the "Reachability Analyzer" service in the AWS VPC console.',
        EC2_NetworkInsightsPath.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_NETWORKINTERFACE,
      new ResourceProperty(
        "Provides an Elastic network interface (ENI) resource.",
        EC2_NetworkInterface.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_NETWORKINTERFACEATTACHMENT,
      new ResourceProperty(
        "Attach an Elastic network interface (ENI) resource with EC2 instance.",
        EC2_NetworkInterfaceAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_NETWORKINTERFACESECURITYGROUPATTACHMENT,
      new ResourceProperty(
        "This resource attaches a security group to an Elastic Network Interface (ENI). It can be used to attach a security group to any existing ENI, be it a secondary ENI or one attached as the primary interface on an instance.  > --NOTE on instances, interfaces, and security groups:-- This provider currently provides the capability to assign security groups via the [`aws.ec2.Instance`][1] and the [`aws.ec2.NetworkInterface`][2] resources. Using this resource in conjunction with security groups provided in-line in those resources will cause conflicts, and will lead to spurious diffs and undefined behavior - please use one or the other.",
        EC2_NetworkInterfaceSecurityGroupAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_PEERINGCONNECTIONOPTIONS,
      new ResourceProperty(
        "Provides a resource to manage VPC peering connection options.  > --NOTE on VPC Peering Connections and VPC Peering Connection Options:-- This provider provides both a standalone VPC Peering Connection Options and a VPC Peering Connection resource with `accepter` and `requester` attributes. Do not manage options for the same VPC peering connection in both a VPC Peering Connection resource and a VPC Peering Connection Options resource. Doing so will cause a conflict of options and will overwrite the options. Using a VPC Peering Connection Options resource decouples management of the connection options from management of the VPC Peering Connection and allows options to be set correctly in cross-region and cross-account scenarios.",
        EC2_PeeringConnectionOptions.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_PLACEMENTGROUP,
      new ResourceProperty(
        "Provides an EC2 placement group. Read more about placement groups in [AWS Docs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html).",
        EC2_PlacementGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_PROXYPROTOCOLPOLICY,
      new ResourceProperty(
        "Provides a proxy protocol policy, which allows an ELB to carry a client connection information to a backend.",
        EC2_ProxyProtocolPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_ROUTE,
      new ResourceProperty(
        "Provides a resource to create a routing table entry (a route) in a VPC routing table.  > --NOTE on Route Tables and Routes:-- This provider currently provides both a standalone Route resource and a Route Table resource with routes defined in-line. At this time you cannot use a Route Table with in-line routes in conjunction with any Route resources. Doing so will cause a conflict of rule settings and will overwrite rules.  > --NOTE on `gateway_id` attribute:-- The AWS API is very forgiving with the resource ID passed in the `gateway_id` attribute. For example an `aws.ec2.Route` resource can be created with an `aws.ec2.NatGateway` or `aws.ec2.EgressOnlyInternetGateway` ID specified for the `gateway_id` attribute. Specifying anything other than an `aws.ec2.InternetGateway` or `aws.ec2.VpnGateway` ID will lead to this provider reporting a permanent diff between your configuration and recorded state, as the AWS API returns the more-specific attribute. If you are experiencing constant diffs with an `aws.ec2.Route` resource, the first thing to check is that the correct attribute is being specified.  > --NOTE on combining `vpc_endpoint_id` and `destination_prefix_list_id` attributes:-- To associate a Gateway VPC Endpoint (such as S3) with destination prefix list, use the `aws.ec2.VpcEndpointRouteTableAssociation` resource instead.",
        EC2_Route.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_ROUTETABLE,
      new ResourceProperty(
        "Provides a resource to create a VPC routing table.  > --NOTE on Route Tables and Routes:-- This provider currently provides both a standalone Route resource and a Route Table resource with routes defined in-line. At this time you cannot use a Route Table with in-line routes in conjunction with any Route resources. Doing so will cause a conflict of rule settings and will overwrite rules.  > --NOTE on `gateway_id` and `nat_gateway_id`:-- The AWS API is very forgiving with these two attributes and the `aws.ec2.RouteTable` resource can be created with a NAT ID specified as a Gateway ID attribute. This _will_ lead to a permanent diff between your configuration and statefile, as the API returns the correct parameters in the returned route table. If you're experiencing constant diffs in your `aws.ec2.RouteTable` resources, the first thing to check is whether or not you're specifying a NAT ID instead of a Gateway ID, or vice-versa.  > --NOTE on `propagating_vgws` and the `aws.ec2.VpnGatewayRoutePropagation` resource:-- If the `propagating_vgws` argument is present, it's not supported to _also_ define route propagations using `aws.ec2.VpnGatewayRoutePropagation`, since this resource will delete any propagating gateways not explicitly listed in `propagating_vgws`. Omit this argument when defining route propagation using the separate resource.",
        EC2_RouteTable.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_ROUTETABLEASSOCIATION,
      new ResourceProperty(
        "Provides a resource to create an association between a route table and a subnet or a route table and an internet gateway or virtual private gateway.",
        EC2_RouteTableAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_SECURITYGROUP,
      new ResourceProperty(
        "Provides a security group resource.  > --NOTE:-- Avoid using the `ingress` and `egress` arguments of the `aws.ec2.SecurityGroup` resource to configure in-line rules, as they struggle with managing multiple CIDR blocks, and, due to the historical lack of unique IDs, tags and descriptions. To avoid these problems, use the current best practice of the `aws.vpc.SecurityGroupEgressRule` and `aws.vpc.SecurityGroupIngressRule` resources with one CIDR block per rule.  !> --WARNING:-- You should not use the `aws.ec2.SecurityGroup` resource with _in-line rules_ (using the `ingress` and `egress` arguments of `aws.ec2.SecurityGroup`) in conjunction with the `aws.vpc.SecurityGroupEgressRule` and `aws.vpc.SecurityGroupIngressRule` resources or the `aws.ec2.SecurityGroupRule` resource. Doing so may cause rule conflicts, perpetual differences, and result in rules being overwritten.  > --NOTE:-- Referencing Security Groups across VPC peering has certain restrictions. More information is available in the [VPC Peering User Guide](https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-security-groups.html).  > --NOTE:-- Due to [AWS Lambda improved VPC networking changes that began deploying in September 2019](https://aws.amazon.com/blogs/compute/announcing-improved-vpc-networking-for-aws-lambda-functions/), security groups associated with Lambda Functions can take up to 45 minutes to successfully delete. To allow for successful deletion, the provider will wait for at least 45 minutes even if a shorter delete timeout is specified.  > --NOTE:-- The `cidr_blocks` and `ipv6_cidr_blocks` parameters are optional in the `ingress` and `egress` blocks. If nothing is specified, traffic will be blocked as described in _NOTE on Egress rules_ later.",
        EC2_SecurityGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_SECURITYGROUPASSOCIATION,
      new ResourceProperty(
        "Provides a resource to create an association between a VPC endpoint and a security group.  > --NOTE on VPC Endpoints and VPC Endpoint Security Group Associations:-- The provider provides both a standalone VPC Endpoint Security Group Association (an association between a VPC endpoint and a single `security_group_id`) and a VPC Endpoint resource with a `security_group_ids` attribute. Do not use the same security group ID in both a VPC Endpoint resource and a VPC Endpoint Security Group Association resource. Doing so will cause a conflict of associations and will overwrite the association.",
        EC2_SecurityGroupAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_SECURITYGROUPRULE,
      new ResourceProperty(
        'Provides a security group rule resource. Represents a single `ingress` or `egress` group rule, which can be added to external Security Groups.  > --NOTE:-- Avoid using the `aws.ec2.SecurityGroupRule` resource, as it struggles with managing multiple CIDR blocks, and, due to the historical lack of unique IDs, tags and descriptions. To avoid these problems, use the current best practice of the `aws.vpc.SecurityGroupEgressRule` and `aws.vpc.SecurityGroupIngressRule` resources with one CIDR block per rule.  !> --WARNING:-- You should not use the `aws.ec2.SecurityGroupRule` resource in conjunction with `aws.vpc.SecurityGroupEgressRule` and `aws.vpc.SecurityGroupIngressRule` resources or with an `aws.ec2.SecurityGroup` resource that has in-line rules. Doing so may cause rule conflicts, perpetual differences, and result in rules being overwritten.  > --NOTE:-- Setting `protocol = "all"` or `protocol = -1` with `from_port` and `to_port` will result in the EC2 API creating a security group rule with all ports open. This API behavior cannot be controlled by this provider and may generate warnings in the future.  > --NOTE:-- Referencing Security Groups across VPC peering has certain restrictions. More information is available in the [VPC Peering User Guide](https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-security-groups.html).',
        EC2_SecurityGroupRule.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_SERIALCONSOLEACCESS,
      new ResourceProperty(
        "Provides a resource to manage whether serial console access is enabled for your AWS account in the current AWS region.  > --NOTE:-- Removing this resource disables serial console access.",
        EC2_SerialConsoleAccess.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_SNAPSHOTCREATEVOLUMEPERMISSION,
      new ResourceProperty(
        "Adds permission to create volumes off of a given EBS Snapshot.",
        EC2_SnapshotCreateVolumePermission.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_SPOTDATAFEEDSUBSCRIPTION,
      new ResourceProperty(
        "> --Note:-- There is only a single subscription allowed per account.  To help you understand the charges for your Spot instances, Amazon EC2 provides a data feed that describes your Spot instance usage and pricing. This data feed is sent to an Amazon S3 bucket that you specify when you subscribe to the data feed.",
        EC2_SpotDatafeedSubscription.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_SPOTFLEETREQUEST,
      new ResourceProperty(
        "Provides an EC2 Spot Fleet Request resource. This allows a fleet of Spot instances to be requested on the Spot market.  > --NOTE [AWS strongly discourages](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-best-practices.html#which-spot-request-method-to-use) the use of the legacy APIs called by this resource. We recommend using the EC2 Fleet or Auto Scaling Group resources instead.",
        EC2_SpotFleetRequest.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_SPOTINSTANCEREQUEST,
      new ResourceProperty(
        "Provides an EC2 Spot Instance Request resource. This allows instances to be requested on the spot market.  By default this provider creates Spot Instance Requests with a `persistent` type, which means that for the duration of their lifetime, AWS will launch an instance with the configured details if and when the spot market will accept the requested price.  On destruction, this provider will make an attempt to terminate the associated Spot Instance if there is one present.  Spot Instances requests with a `one-time` type will close the spot request when the instance is terminated either by the request being below the current spot price availability or by a user.  > --NOTE:-- Because their behavior depends on the live status of the spot market, Spot Instance Requests have a unique lifecycle that makes them behave differently than other resources. Most importantly: there is __no guarantee__ that a Spot Instance exists to fulfill the request at any given point in time. See the [AWS Spot Instance documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html) for more information.  > --NOTE [AWS strongly discourages](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-best-practices.html#which-spot-request-method-to-use) the use of the legacy APIs called by this resource. We recommend using the EC2 Instance resource with `instance_market_options` instead.",
        EC2_SpotInstanceRequest.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_SUBNET,
      new ResourceProperty(
        "Provides an VPC subnet resource.  > --NOTE:-- Due to [AWS Lambda improved VPC networking changes that began deploying in September 2019](https://aws.amazon.com/blogs/compute/announcing-improved-vpc-networking-for-aws-lambda-functions/), subnets associated with Lambda Functions can take up to 45 minutes to successfully delete. To allow for successful deletion, the provider will wait for at least 45 minutes even if a shorter delete timeout is specified.",
        EC2_Subnet.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_SUBNETCIDRRESERVATION,
      new ResourceProperty(
        "Provides a subnet CIDR reservation resource.",
        EC2_SubnetCidrReservation.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_TAG,
      new ResourceProperty(
        "Manages an individual EC2 resource tag. This resource should only be used in cases where EC2 resources are created outside the provider (e.g. AMIs), being shared via Resource Access Manager (RAM), or implicitly created by other means (e.g. Transit Gateway VPN Attachments).  > --NOTE:-- This tagging resource should not be combined with the providers resource for managing the parent resource. For example, using `aws.ec2.Vpc` and `aws.ec2.Tag` to manage tags of the same VPC will cause a perpetual difference where the `aws.ec2.Vpc` resource will try to remove the tag being added by the `aws.ec2.Tag` resource.",
        EC2_Tag.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_TRAFFICMIRRORFILTER,
      new ResourceProperty(
        "Provides an Traffic mirror filter.   Read [limits and considerations](https://docs.aws.amazon.com/vpc/latest/mirroring/traffic-mirroring-considerations.html) for traffic mirroring",
        EC2_TrafficMirrorFilter.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_TRAFFICMIRRORFILTERRULE,
      new ResourceProperty(
        "Provides an Traffic mirror filter rule.   Read [limits and considerations](https://docs.aws.amazon.com/vpc/latest/mirroring/traffic-mirroring-considerations.html) for traffic mirroring",
        EC2_TrafficMirrorFilterRule.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_TRAFFICMIRRORSESSION,
      new ResourceProperty(
        "Provides an Traffic mirror session.   Read [limits and considerations](https://docs.aws.amazon.com/vpc/latest/mirroring/traffic-mirroring-considerations.html) for traffic mirroring",
        EC2_TrafficMirrorSession.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_TRAFFICMIRRORTARGET,
      new ResourceProperty(
        "Provides a Traffic mirror target.   Read [limits and considerations](https://docs.aws.amazon.com/vpc/latest/mirroring/traffic-mirroring-considerations.html) for traffic mirroring",
        EC2_TrafficMirrorTarget.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_VOLUMEATTACHMENT,
      new ResourceProperty(
        "Provides an AWS EBS Volume Attachment as a top level resource, to attach and detach volumes from AWS Instances.  > --NOTE on EBS block devices:-- If you use `ebs_block_device` on an `aws.ec2.Instance`, this provider will assume management over the full set of non-root EBS block devices for the instance, and treats additional block devices as drift. For this reason, `ebs_block_device` cannot be mixed with external `aws.ebs.Volume` + `aws.ec2.VolumeAttachment` resources for a given instance.",
        EC2_VolumeAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_VPC,
      new ResourceProperty("Provides a VPC resource.", EC2_Vpc.GetTypes()),
    ],
    [
      ResourceType.EC2_VPCDHCPOPTIONS,
      new ResourceProperty(
        "Provides a VPC DHCP Options resource.",
        EC2_VpcDhcpOptions.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_VPCDHCPOPTIONSASSOCIATION,
      new ResourceProperty(
        "Provides a VPC DHCP Options Association resource.",
        EC2_VpcDhcpOptionsAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_VPCENDPOINT,
      new ResourceProperty(
        "Provides a VPC Endpoint resource.  > --NOTE on VPC Endpoints and VPC Endpoint Associations:-- The provider provides both standalone VPC Endpoint Associations for Route Tables - (an association between a VPC endpoint and a single `route_table_id`), Security Groups - (an association between a VPC endpoint and a single `security_group_id`), and Subnets - (an association between a VPC endpoint and a single `subnet_id`) and a VPC Endpoint resource with `route_table_ids` and `subnet_ids` attributes. Do not use the same resource ID in both a VPC Endpoint resource and a VPC Endpoint Association resource. Doing so will cause a conflict of associations and will overwrite the association.",
        EC2_VpcEndpoint.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_VPCENDPOINTCONNECTIONACCEPTER,
      new ResourceProperty(
        "Provides a resource to accept a pending VPC Endpoint Connection accept request to VPC Endpoint Service.",
        EC2_VpcEndpointConnectionAccepter.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_VPCENDPOINTCONNECTIONNOTIFICATION,
      new ResourceProperty(
        "Provides a VPC Endpoint connection notification resource. Connection notifications notify subscribers of VPC Endpoint events.",
        EC2_VpcEndpointConnectionNotification.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_VPCENDPOINTPOLICY,
      new ResourceProperty(
        "Provides a VPC Endpoint Policy resource.",
        EC2_VpcEndpointPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_VPCENDPOINTROUTETABLEASSOCIATION,
      new ResourceProperty(
        "Manages a VPC Endpoint Route Table Association",
        EC2_VpcEndpointRouteTableAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_VPCENDPOINTSERVICE,
      new ResourceProperty(
        "Provides a VPC Endpoint Service resource. Service consumers can create an _Interface_ VPC Endpoint to connect to the service.  > --NOTE on VPC Endpoint Services and VPC Endpoint Service Allowed Principals:-- This provider provides both a standalone VPC Endpoint Service Allowed Principal resource and a VPC Endpoint Service resource with an `allowed_principals` attribute. Do not use the same principal ARN in both a VPC Endpoint Service resource and a VPC Endpoint Service Allowed Principal resource. Doing so will cause a conflict and will overwrite the association.",
        EC2_VpcEndpointService.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_VPCENDPOINTSERVICEALLOWEDPRINCIPLE,
      new ResourceProperty(
        "Provides a resource to allow a principal to discover a VPC endpoint service.  > --NOTE on VPC Endpoint Services and VPC Endpoint Service Allowed Principals:-- This provider provides both a standalone VPC Endpoint Service Allowed Principal resource and a VPC Endpoint Service resource with an `allowed_principals` attribute. Do not use the same principal ARN in both a VPC Endpoint Service resource and a VPC Endpoint Service Allowed Principal resource. Doing so will cause a conflict and will overwrite the association.",
        EC2_VpcEndpointServiceAllowedPrinciple.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_VPCENDPOINTSUBNETASSOCIATION,
      new ResourceProperty(
        "Provides a resource to create an association between a VPC endpoint and a subnet.  > --NOTE on VPC Endpoints and VPC Endpoint Subnet Associations:-- This provider provides both a standalone VPC Endpoint Subnet Association (an association between a VPC endpoint and a single `subnet_id`) and a VPC Endpoint resource with a `subnet_ids` attribute. Do not use the same subnet ID in both a VPC Endpoint resource and a VPC Endpoint Subnet Association resource. Doing so will cause a conflict of associations and will overwrite the association.",
        EC2_VpcEndpointSubnetAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_VPCIPAM,
      new ResourceProperty(
        "Provides an IPAM resource.",
        EC2_VpcIpam.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_VPCIPAMORGANIZATIONADMINACCOUNT,
      new ResourceProperty(
        "Enables the IPAM Service and promotes a delegated administrator.",
        EC2_VpcIpamOrganizationAdminAccount.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_VPCIPAMPOOL,
      new ResourceProperty(
        "Provides an IP address pool resource for IPAM.",
        EC2_VpcIpamPool.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_VPCIPAMPOOLCIDR,
      new ResourceProperty(
        "Provisions a CIDR from an IPAM address pool.  > --NOTE:-- Provisioning Public IPv4 or Public IPv6 require [steps outside the scope of this resource](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html#prepare-for-byoip). The resource accepts `message` and `signature` as part of the `cidr_authorization_context` attribute but those must be generated ahead of time. Public IPv6 CIDRs that are provisioned into a Pool with `publicly_advertisable = true` and all public IPv4 CIDRs also require creating a Route Origin Authorization (ROA) object in your Regional Internet Registry (RIR).  > --NOTE:-- In order to deprovision CIDRs all Allocations must be released. Allocations created by a VPC take up to 30 minutes to be released. However, for IPAM to properly manage the removal of allocation records created by VPCs and other resources, you must [grant it permissions](https://docs.aws.amazon.com/vpc/latest/ipam/choose-single-user-or-orgs-ipam.html) in either a single account or organizationally. If you are unable to deprovision a cidr after waiting over 30 minutes, you may be missing the Service Linked Role.",
        EC2_VpcIpamPoolCidr.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_VPCIPAMPOOLCIDRALLOCATION,
      new ResourceProperty(
        "Allocates (reserves) a CIDR from an IPAM address pool, preventing usage by IPAM. Only works for private IPv4.",
        EC2_VpcIpamPoolCidrAllocation.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_VPCIPAMPREVIEWNEXTCIDR,
      new ResourceProperty(
        "Previews a CIDR from an IPAM address pool. Only works for private IPv4.",
        EC2_VpcIpamPreviewNextCidr.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_VPCIPAMRESOURCEDISCOVERY,
      new ResourceProperty(
        "Provides an IPAM Resource Discovery resource. IPAM Resource Discoveries are resources meant for multi-organization customers. If you wish to use a single IPAM across multiple orgs, a resource discovery can be created and shared from a subordinate organization to the management organizations IPAM delegated admin account. For a full deployment example, see `aws.ec2.VpcIpamResourceDiscoveryAssociation` resource.",
        EC2_VpcIpamResourceDiscovery.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_VPCIPAMRESOURCEDISCOVERYASSOCIATION,
      new ResourceProperty(
        "Provides an association between an Amazon IP Address Manager (IPAM) and a IPAM Resource Discovery. IPAM Resource Discoveries are resources meant for multi-organization customers. If you wish to use a single IPAM across multiple orgs, a resource discovery can be created and shared from a subordinate organization to the management organizations IPAM delegated admin account.  Once an association is created between two organizations via IPAM & a IPAM Resource Discovery, IPAM Pools can be shared via Resource Access Manager (RAM) to accounts in the subordinate organization; these RAM shares must be accepted by the end user account. Pools can then also discover and monitor IPAM resources in the subordinate organization.",
        EC2_VpcIpamResourceDiscoveryAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_VPCIPAMSCOPE,
      new ResourceProperty(
        "Creates a scope for AWS IPAM.",
        EC2_VpcIpamScope.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_VPCIPV4CIDRBLOCKASSOCIATION,
      new ResourceProperty(
        "Provides a resource to associate additional IPv4 CIDR blocks with a VPC.  When a VPC is created, a primary IPv4 CIDR block for the VPC must be specified. The `aws.ec2.VpcIpv4CidrBlockAssociation` resource allows further IPv4 CIDR blocks to be added to the VPC.",
        EC2_VpcIpv4CidrBlockAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_VPCIPV6CIDRBLOCKASSOCIATION,
      new ResourceProperty(
        "Provides a resource to associate additional IPv6 CIDR blocks with a VPC.  The `aws.ec2.VpcIpv6CidrBlockAssociation` resource allows IPv6 CIDR blocks to be added to the VPC.",
        EC2_VpcIpv6CidrBlockAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_VPCNETWORKPERFORMANCEMETRICSUBSCRIPTION,
      new ResourceProperty(
        "Provides a resource to manage an Infrastructure Performance subscription.",
        EC2_VpcNetworkPerformanceMetricSubscription.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_VPCPEERINGCONNECTION,
      new ResourceProperty(
        "Provides a resource to manage a VPC peering connection.  > --NOTE on VPC Peering Connections and VPC Peering Connection Options:-- This provider provides both a standalone VPC Peering Connection Options and a VPC Peering Connection resource with `accepter` and `requester` attributes. Do not manage options for the same VPC peering connection in both a VPC Peering Connection resource and a VPC Peering Connection Options resource. Doing so will cause a conflict of options and will overwrite the options. Using a VPC Peering Connection Options resource decouples management of the connection options from management of the VPC Peering Connection and allows options to be set correctly in cross-account scenarios.  > --Note:-- For cross-account (requester's AWS account differs from the accepter's AWS account) or inter-region VPC Peering Connections use the `aws.ec2.VpcPeeringConnection` resource to manage the requester's side of the connection and use the `aws.ec2.VpcPeeringConnectionAccepter` resource to manage the accepter's side of the connection.  > --Note:-- Creating multiple `aws.ec2.VpcPeeringConnection` resources with the same `peer_vpc_id` and `vpc_id` will not produce an error. Instead, AWS will return the connection `id` that already exists, resulting in multiple `aws.ec2.VpcPeeringConnection` resources with the same `id`.",
        EC2_VpcPeeringConnection.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_VPCPEERINGCONNECTIONACCEPTER,
      new ResourceProperty(
        "Provides a resource to manage the accepter's side of a VPC Peering Connection.  When a cross-account (requester's AWS account differs from the accepter's AWS account) or an inter-region VPC Peering Connection is created, a VPC Peering Connection resource is automatically created in the accepter's account. The requester can use the `aws.ec2.VpcPeeringConnection` resource to manage its side of the connection and the accepter can use the `aws.ec2.VpcPeeringConnectionAccepter` resource to \"adopt\" its side of the connection into management.",
        EC2_VpcPeeringConnectionAccepter.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_VPNCONNECTION,
      new ResourceProperty(
        "Manages a Site-to-Site VPN connection. A Site-to-Site VPN connection is an Internet Protocol security (IPsec) VPN connection between a VPC and an on-premises network. Any new Site-to-Site VPN connection that you create is an [AWS VPN connection](https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-categories.html).  > --Note:-- The CIDR blocks in the arguments `tunnel1_inside_cidr` and `tunnel2_inside_cidr` must have a prefix of /30 and be a part of a specific range. [Read more about this in the AWS documentation](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_VpnTunnelOptionsSpecification.html).",
        EC2_VpnConnection.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_VPNCONNECTIONROUTE,
      new ResourceProperty(
        "Provides a static route between a VPN connection and a customer gateway.",
        EC2_VpnConnectionRoute.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_VPNGATEWAY,
      new ResourceProperty(
        "Provides a resource to create a VPC VPN Gateway.",
        EC2_VpnGateway.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_VPNGATEWAYATTACHMENT,
      new ResourceProperty(
        "Provides a Virtual Private Gateway attachment resource, allowing for an existing hardware VPN gateway to be attached and/or detached from a VPC.  > --Note:-- The `aws.ec2.VpnGateway` resource can also automatically attach the Virtual Private Gateway it creates to an existing VPC by setting the `vpc_id` attribute accordingly.",
        EC2_VpnGatewayAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2_VPNGATEWAYROUTEPROPAGATION,
      new ResourceProperty(
        "Requests automatic route propagation between a VPN gateway and a route table.  > --Note:-- This resource should not be used with a route table that has the `propagating_vgws` argument set. If that argument is set, any route propagation not explicitly listed in its value will be removed.",
        EC2_VpnGatewayRoutePropagation.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2CLIENTVPN_AUTHORIZATIONRULE,
      new ResourceProperty(
        "Provides authorization rules for AWS Client VPN endpoints. For more information on usage, please see the [AWS Client VPN Administrator's Guide](https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/what-is.html).",
        EC2CLIENTVPN_AuthorizationRule.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2CLIENTVPN_ENDPOINT,
      new ResourceProperty(
        "Provides an AWS Client VPN endpoint for OpenVPN clients. For more information on usage, please see the [AWS Client VPN Administrator's Guide](https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/what-is.html).",
        EC2CLIENTVPN_Endpoint.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2CLIENTVPN_NETWORKASSOCIATION,
      new ResourceProperty(
        "Provides network associations for AWS Client VPN endpoints. For more information on usage, please see the [AWS Client VPN Administrator's Guide](https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/what-is.html).",
        EC2CLIENTVPN_NetworkAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2CLIENTVPN_ROUTE,
      new ResourceProperty(
        "Provides additional routes for AWS Client VPN endpoints. For more information on usage, please see the [AWS Client VPN Administrator's Guide](https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/what-is.html).",
        EC2CLIENTVPN_Route.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_CONNECT,
      new ResourceProperty(
        "Manages an EC2 Transit Gateway Connect.",
        EC2TRANSITGATEWAY_Connect.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_CONNECTPEER,
      new ResourceProperty(
        "Manages an EC2 Transit Gateway Connect Peer.",
        EC2TRANSITGATEWAY_ConnectPeer.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_INSTANCECONNECTENDPOINT,
      new ResourceProperty(
        "Manages an EC2 Instance Connect Endpoint.",
        EC2TRANSITGATEWAY_InstanceConnectEndpoint.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_INSTANCESTATE,
      new ResourceProperty(
        "Provides an EC2 instance state resource. This allows managing an instance power state.  > --NOTE on Instance State Management:-- AWS does not currently have an EC2 API operation to determine an instance has finished processing user data. As a result, this resource can interfere with user data processing. For example, this resource may stop an instance while the user data script is in mid run.",
        EC2TRANSITGATEWAY_InstanceState.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_MULTICASTDOMAIN,
      new ResourceProperty(
        "Manages an EC2 Transit Gateway Multicast Domain.",
        EC2TRANSITGATEWAY_MulticastDomain.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_MULTICASTDOMAINASSOCIATION,
      new ResourceProperty(
        "Associates the specified subnet and transit gateway attachment with the specified transit gateway multicast domain.",
        EC2TRANSITGATEWAY_MulticastDomainAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_MULTICASTGROUPMEMBER,
      new ResourceProperty(
        "Registers members (network interfaces) with the transit gateway multicast group. A member is a network interface associated with a supported EC2 instance that receives multicast traffic.",
        EC2TRANSITGATEWAY_MulticastGroupMember.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_MULTICASTGROUPSOURCE,
      new ResourceProperty(
        "Registers sources (network interfaces) with the transit gateway multicast group. A multicast source is a network interface attached to a supported instance that sends multicast traffic.",
        EC2TRANSITGATEWAY_MulticastGroupSource.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_PEERINGATTACHMENT,
      new ResourceProperty(
        "Manages an EC2 Transit Gateway Peering Attachment. For examples of custom route table association and propagation, see the [EC2 Transit Gateway Networking Examples Guide](https://docs.aws.amazon.com/vpc/latest/tgw/TGW_Scenarios.html).",
        EC2TRANSITGATEWAY_PeeringAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_PEERINGATTACHMENTACCEPTER,
      new ResourceProperty(
        "Manages the accepter's side of an EC2 Transit Gateway Peering Attachment.",
        EC2TRANSITGATEWAY_PeeringAttachmentAccepter.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_POLICYTABLE,
      new ResourceProperty(
        "Manages an EC2 Transit Gateway Policy Table.",
        EC2TRANSITGATEWAY_PolicyTable.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_POLICYTABLEASSOCIATION,
      new ResourceProperty(
        "Manages an EC2 Transit Gateway Policy Table association.",
        EC2TRANSITGATEWAY_PolicyTableAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_PREFIXLISTREFERENCE,
      new ResourceProperty(
        "Manages an EC2 Transit Gateway Prefix List Reference.",
        EC2TRANSITGATEWAY_PrefixListReference.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_ROUTE,
      new ResourceProperty(
        "Manages an EC2 Transit Gateway Route.",
        EC2TRANSITGATEWAY_Route.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_ROUTETABLE,
      new ResourceProperty(
        "Manages an EC2 Transit Gateway Route Table.",
        EC2TRANSITGATEWAY_RouteTable.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_ROUTETABLEASSOCIATION,
      new ResourceProperty(
        "Manages an EC2 Transit Gateway Route Table association.",
        EC2TRANSITGATEWAY_RouteTableAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_ROUTETABLEPROPAGATION,
      new ResourceProperty(
        "Manages an EC2 Transit Gateway Route Table propagation.",
        EC2TRANSITGATEWAY_RouteTablePropagation.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_TRANSITGATEWAY,
      new ResourceProperty(
        "Manages an EC2 Transit Gateway.",
        EC2TRANSITGATEWAY_TransitGateway.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_VPCATTACHMENT,
      new ResourceProperty(
        "Manages an EC2 Transit Gateway VPC Attachment. For examples of custom route table association and propagation, see the EC2 Transit Gateway Networking Examples Guide.",
        EC2TRANSITGATEWAY_VpcAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.EC2TRANSITGATEWAY_VPCATTACHMENTACCEPTER,
      new ResourceProperty(
        "Manages the accepter's side of an EC2 Transit Gateway VPC Attachment.  When a cross-account (requester's AWS account differs from the accepter's AWS account) EC2 Transit Gateway VPC Attachment is created, an EC2 Transit Gateway VPC Attachment resource is automatically created in the accepter's account. The requester can use the `aws.ec2transitgateway.VpcAttachment` resource to manage its side of the connection and the accepter can use the `aws.ec2transitgateway.VpcAttachmentAccepter` resource to \"adopt\" its side of the connection into management.",
        EC2TRANSITGATEWAY_VpcAttachmentAccepter.GetTypes(),
      ),
    ],
    [
      ResourceType.ECR_LIFECYCLEPOLICY,
      new ResourceProperty(
        "Manages an ECR repository lifecycle policy.  > --NOTE:-- Only one `aws.ecr.LifecyclePolicy` resource can be used with the same ECR repository. To apply multiple rules, they must be combined in the `policy` JSON.  > --NOTE:-- The AWS ECR API seems to reorder rules based on `rulePriority`. If you define multiple rules that are not sorted in ascending `rulePriority` order in the this provider code, the resource will be flagged for recreation every deployment.",
        ECR_LifecyclePolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.ECR_PULLTHROUGHCACHERULE,
      new ResourceProperty(
        "Provides an Elastic Container Registry Pull Through Cache Rule.  More information about pull through cache rules, including the set of supported upstream repositories, see [Using pull through cache rules](https://docs.aws.amazon.com/AmazonECR/latest/userguide/pull-through-cache.html).",
        ECR_PullThroughCacheRule.GetTypes(),
      ),
    ],
    [
      ResourceType.ECR_REGISTRYPOLICY,
      new ResourceProperty(
        "Provides an Elastic Container Registry Policy.  > --NOTE on ECR Registry Policies:-- While the AWS Management Console interface may suggest the ability to define multiple policies by creating multiple statements, ECR registry policies are effectively managed as singular entities at the regional level by the AWS APIs. Therefore, the `aws.ecr.RegistryPolicy` resource should be configured only once per region with all necessary statements defined in the same policy. Attempting to define multiple `aws.ecr.RegistryPolicy` resources may result in perpetual differences, with one policy overriding another.",
        ECR_RegistryPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.ECR_REGISTRYSCANNINGCONFIGURATION,
      new ResourceProperty(
        "Provides an Elastic Container Registry Scanning Configuration. Can't be completely deleted, instead reverts to the default `BASIC` scanning configuration without rules.",
        ECR_RegistryScanningConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.ECR_REPLICATIONCONFIGURATION,
      new ResourceProperty(
        "Provides an Elastic Container Registry Replication Configuration.",
        ECR_ReplicationConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.ECR_REPOSITORY,
      new ResourceProperty(
        "Provides an Elastic Container Registry Repository.",
        ECR_Repository.GetTypes(),
      ),
    ],
    [
      ResourceType.ECR_REPOSITORYCREATIONTEMPLATE,
      new ResourceProperty(
        "Provides an Elastic Container Registry Repository Creation Template.",
        ECR_RepositoryCreationTemplate.GetTypes(),
      ),
    ],
    [
      ResourceType.ECR_REPOSITORYPOLICY,
      new ResourceProperty(
        "Provides an Elastic Container Registry Repository Policy.  Note that currently only one policy may be applied to a repository.",
        ECR_RepositoryPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.ECRPUBLIC_REPOSITORY,
      new ResourceProperty(
        "Provides a Public Elastic Container Registry Repository.  > --NOTE:-- This resource can only be used in the `us-east-1` region.",
        ECRPUBLIC_Repository.GetTypes(),
      ),
    ],
    [
      ResourceType.ECRPUBLIC_REPOSITORYPOLICY,
      new ResourceProperty(
        "Provides an Elastic Container Registry Public Repository Policy.  Note that currently only one policy may be applied to a repository.  > --NOTE:-- This resource can only be used in the `us-east-1` region.",
        ECRPUBLIC_RepositoryPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.ECS_ACCOUNTSETTINGDEFAULT,
      new ResourceProperty(
        'Provides an ECS default account setting for a specific ECS Resource name within a specific region. More information can be found on the [ECS Developer Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html).  > --NOTE:-- The AWS API does not delete this resource. When you run `destroy`, the provider will attempt to disable the setting.  > --NOTE:-- Your AWS account may not support disabling `containerInstanceLongArnFormat`, `serviceLongArnFormat`, and `taskLongArnFormat`. If your account does not support disabling these, "destroying" this resource will not disable the setting nor cause a provider error. However, the AWS Provider will log an AWS error: `InvalidParameterException: You can no longer disable Long Arn settings`.',
        ECS_AccountSettingDefault.GetTypes(),
      ),
    ],
    [
      ResourceType.ECS_CAPACITYPROVIDER,
      new ResourceProperty(
        "Provides an ECS cluster capacity provider. More information can be found on the [ECS Developer Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-capacity-providers.html).  > --NOTE:-- Associating an ECS Capacity Provider to an Auto Scaling Group will automatically add the `AmazonECSManaged` tag to the Auto Scaling Group. This tag should be included in the `aws.autoscaling.Group` resource configuration to prevent the provider from removing it in subsequent executions as well as ensuring the `AmazonECSManaged` tag is propagated to all EC2 Instances in the Auto Scaling Group if `min_size` is above 0 on creation. Any EC2 Instances in the Auto Scaling Group without this tag must be manually be updated, otherwise they may cause unexpected scaling behavior and metrics.",
        ECS_CapacityProvider.GetTypes(),
      ),
    ],
    [
      ResourceType.ECS_CLUSTER,
      new ResourceProperty("Provides an ECS cluster.", ECS_Cluster.GetTypes()),
    ],
    [
      ResourceType.ECS_CLUSTERCAPACITYPROVIDERS,
      new ResourceProperty(
        "Manages the capacity providers of an ECS Cluster.  More information about capacity providers can be found in the [ECS User Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-capacity-providers.html).",
        ECS_ClusterCapacityProviders.GetTypes(),
      ),
    ],
    [
      ResourceType.ECS_SERVICE,
      new ResourceProperty(
        "> --Note:-- To prevent a race condition during service deletion, make sure to set `depends_on` to the related `aws.iam.RolePolicy`; otherwise, the policy may be destroyed too soon and the ECS service will then get stuck in the `DRAINING` state.  Provides an ECS service - effectively a task that is expected to run until an error occurs or a user terminates it (typically a webserver or a database).  See [ECS Services section in AWS developer guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html).",
        ECS_Service.GetTypes(),
      ),
    ],
    [
      ResourceType.ECS_TAG,
      new ResourceProperty(
        "Manages an individual ECS resource tag. This resource should only be used in cases where ECS resources are created outside the provider (e.g., ECS Clusters implicitly created by Batch Compute Environments).  > --NOTE:-- This tagging resource should not be combined with the resource for managing the parent resource. For example, using `aws.ecs.Cluster` and `aws.ecs.Tag` to manage tags of the same ECS Cluster will cause a perpetual difference where the `aws.ecs.Cluster` resource will try to remove the tag being added by the `aws.ecs.Tag` resource.  > --NOTE:-- This tagging resource does not use the provider `ignore_tags` configuration.",
        ECS_Tag.GetTypes(),
      ),
    ],
    [
      ResourceType.ECS_TASKDEFINITION,
      new ResourceProperty(
        "Manages a revision of an ECS task definition to be used in `aws.ecs.Service`.",
        ECS_TaskDefinition.GetTypes(),
      ),
    ],
    [
      ResourceType.ECS_TASKSET,
      new ResourceProperty(
        "Provides an ECS task set - effectively a task that is expected to run until an error occurs or a user terminates it (typically a webserver or a database).  See [ECS Task Set section in AWS developer guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-external.html).",
        ECS_TaskSet.GetTypes(),
      ),
    ],
    [
      ResourceType.EFS_ACCESSPOINT,
      new ResourceProperty(
        "Provides an Elastic File System (EFS) access point.",
        EFS_AccessPoint.GetTypes(),
      ),
    ],
    [
      ResourceType.EFS_BACKUPPOLICY,
      new ResourceProperty(
        "Provides an Elastic File System (EFS) Backup Policy resource. Backup policies turn automatic backups on or off for an existing file system.",
        EFS_BackupPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.EFS_FILESYSTEM,
      new ResourceProperty(
        "Provides an Elastic File System (EFS) File System resource.",
        EFS_FileSystem.GetTypes(),
      ),
    ],
    [
      ResourceType.EFS_FILESYSTEMPOLICY,
      new ResourceProperty(
        "Provides an Elastic File System (EFS) File System Policy resource.",
        EFS_FileSystemPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.EFS_MOUNTTARGET,
      new ResourceProperty(
        "Provides an Elastic File System (EFS) mount target.",
        EFS_MountTarget.GetTypes(),
      ),
    ],
    [
      ResourceType.EFS_REPLICATIONCONFIGURATION,
      new ResourceProperty(
        "Creates a replica of an existing EFS file system in the same or another region. Creating this resource causes the source EFS file system to be replicated to a new read-only destination EFS file system (unless using the `destination.file_system_id` attribute). Deleting this resource will cause the replication from source to destination to stop and the destination file system will no longer be read only.  > --NOTE:-- Deleting this resource does --not-- delete the destination file system that was created.",
        EFS_ReplicationConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.EKS_ACCESSENTRY,
      new ResourceProperty(
        "Access Entry Configurations for an EKS Cluster.",
        EKS_AccessEntry.GetTypes(),
      ),
    ],
    [
      ResourceType.EKS_ACCESSPOLICYASSOCIATION,
      new ResourceProperty(
        "Access Entry Policy Association for an EKS Cluster.",
        EKS_AccessPolicyAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.EKS_ADDON,
      new ResourceProperty("Manages an EKS add-on.", EKS_Addon.GetTypes()),
    ],
    [
      ResourceType.EKS_CLUSTER,
      new ResourceProperty("Manages an EKS Cluster.", EKS_Cluster.GetTypes()),
    ],
    [
      ResourceType.EKS_FARGATEPROFILE,
      new ResourceProperty(
        "Manages an EKS Fargate Profile.",
        EKS_FargateProfile.GetTypes(),
      ),
    ],
    [
      ResourceType.EKS_IDENTITYPROVIDERCONFIG,
      new ResourceProperty(
        "Manages an EKS Identity Provider Configuration.",
        EKS_IdentityProviderConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.EKS_NODEGROUP,
      new ResourceProperty(
        "Manages an EKS Node Group, which can provision and optionally update an Auto Scaling Group of Kubernetes worker nodes compatible with EKS. Additional documentation about this functionality can be found in the [EKS User Guide](https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html).",
        EKS_NodeGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.EKS_PODIDENTITYASSOCIATION,
      new ResourceProperty(
        "Resource for managing an AWS EKS (Elastic Kubernetes) Pod Identity Association.  Creates an EKS Pod Identity association between a service account in an Amazon EKS cluster and an IAM role with EKS Pod Identity. Use EKS Pod Identity to give temporary IAM credentials to pods and the credentials are rotated automatically.  Amazon EKS Pod Identity associations provide the ability to manage credentials for your applications, similar to the way that EC2 instance profiles provide credentials to Amazon EC2 instances.  If a pod uses a service account that has an association, Amazon EKS sets environment variables in the containers of the pod. The environment variables configure the Amazon Web Services SDKs, including the Command Line Interface, to use the EKS Pod Identity credentials.  Pod Identity is a simpler method than IAM roles for service accounts, as this method doesn’t use OIDC identity providers. Additionally, you can configure a role for Pod Identity once, and reuse it across clusters.",
        EKS_PodIdentityAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.ELASTICACHE_CLUSTER,
      new ResourceProperty(
        "Provides an ElastiCache Cluster resource, which manages either a [Memcached cluster](https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/WhatIs.html), a [single-node Redis instance](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.html), or a [read replica in a Redis (Cluster Mode Enabled) replication group].  For working with Redis (Cluster Mode Enabled) replication groups, see the `aws.elasticache.ReplicationGroup` resource.  > --Note:-- When you change an attribute, such as `num_cache_nodes`, by default it is applied in the next maintenance window. Because of this, this provider may report a difference in its planning phase because the actual modification has not yet taken place. You can use the `apply_immediately` flag to instruct the service to apply the change immediately. Using `apply_immediately` can result in a brief downtime as the server reboots. See the AWS Documentation on Modifying an ElastiCache Cache Cluster for [ElastiCache for Memcached](https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/Clusters.Modify.html) or [ElastiCache for Redis](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.Modify.html) for more information.  > --Note:-- Any attribute changes that re-create the resource will be applied immediately, regardless of the value of `apply_immediately`.",
        ELASTICACHE_Cluster.GetTypes(),
      ),
    ],
    [
      ResourceType.ELASTICACHE_GLOBALREPLICATIONGROUP,
      new ResourceProperty(
        "Provides an ElastiCache Global Replication Group resource, which manages replication between two or more Replication Groups in different regions. For more information, see the [ElastiCache User Guide](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Redis-Global-Datastore.html).",
        ELASTICACHE_GlobalReplicationGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.ELASTICACHE_PARAMETERGROUP,
      new ResourceProperty(
        "Provides an ElastiCache parameter group resource.  > --NOTE:-- Attempting to remove the `reserved-memory` parameter when `family` is set to `redis2.6` or `redis2.8` may show a perpetual difference in this provider due to an ElastiCache API limitation. Leave that parameter configured with any value to workaround the issue.",
        ELASTICACHE_ParameterGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.ELASTICACHE_REPLICATIONGROUP,
      new ResourceProperty(
        'Provides an ElastiCache Replication Group resource.  For working with a [Memcached cluster](https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/WhatIs.html) or a [single-node Redis instance (Cluster Mode Disabled)](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.html), see the `aws.elasticache.Cluster` resource.  > --Note:-- When you change an attribute, such as `engine_version`, by default the ElastiCache API applies it in the next maintenance window. Because of this, this provider may report a difference in its planning phase because the actual modification has not yet taken place. You can use the `apply_immediately` flag to instruct the service to apply the change immediately. Using `apply_immediately` can result in a brief downtime as servers reboots. See the AWS Documentation on [Modifying an ElastiCache Cache Cluster](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.Modify.html) for more information.  > --Note:-- Any attribute changes that re-create the resource will be applied immediately, regardless of the value of `apply_immediately`.  > --Note:-- Be aware of the terminology collision around "cluster" for `aws.elasticache.ReplicationGroup`. For example, it is possible to create a ["Cluster Mode Disabled [Redis] Cluster"](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.Create.CON.Redis.html). With "Cluster Mode Enabled", the data will be stored in shards (called "node groups"). See [Redis Cluster Configuration](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/cluster-create-determine-requirements.html#redis-cluster-configuration) for a diagram of the differences. To enable cluster mode, use a parameter group that has cluster mode enabled. The default parameter groups provided by AWS end with ".cluster.on", for example `default.redis6.x.cluster.on`.',
        ELASTICACHE_ReplicationGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.ELASTICACHE_SERVERLESSCACHE,
      new ResourceProperty(
        "Provides an ElastiCache Serverless Cache resource which manages memcached or redis.",
        ELASTICACHE_ServerlessCache.GetTypes(),
      ),
    ],
    [
      ResourceType.ELASTICACHE_SUBNETGROUP,
      new ResourceProperty(
        "Provides an ElastiCache Subnet Group resource.",
        ELASTICACHE_SubnetGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.ELASTICACHE_USER,
      new ResourceProperty(
        "Provides an ElastiCache user resource.  > --Note:-- All arguments including the username and passwords will be stored in the raw state as plain-text.",
        ELASTICACHE_User.GetTypes(),
      ),
    ],
    [
      ResourceType.ELASTICACHE_USERGROUP,
      new ResourceProperty(
        "Provides an ElastiCache user group resource.",
        ELASTICACHE_UserGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.ELASTICACHE_USERGROUPASSOCIATION,
      new ResourceProperty(
        "Associate an existing ElastiCache user and an existing user group.  > Pulumi will detect changes in the `aws.elasticache.UserGroup` since `aws.elasticache.UserGroupAssociation` changes the user IDs associated with the user group. You can ignore these changes with the `lifecycle` `ignore_changes` meta argument as shown in the example.",
        ELASTICACHE_UserGroupAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.ELASTICBEANSTALK_APPLICATION,
      new ResourceProperty(
        "Provides an Elastic Beanstalk Application Resource. Elastic Beanstalk allows you to deploy and manage applications in the AWS cloud without worrying about the infrastructure that runs those applications.  This resource creates an application that has one configuration template named `default`, and no application versions",
        ELASTICBEANSTALK_Application.GetTypes(),
      ),
    ],
    [
      ResourceType.ELASTICBEANSTALK_APPLICATIONVERSION,
      new ResourceProperty(
        "Provides an Elastic Beanstalk Application Version Resource. Elastic Beanstalk allows you to deploy and manage applications in the AWS cloud without worrying about the infrastructure that runs those applications.  This resource creates a Beanstalk Application Version that can be deployed to a Beanstalk Environment.  > --NOTE on Application Version Resource:--  When using the Application Version resource with multiple Elastic Beanstalk Environments it is possible that an error may be returned when attempting to delete an Application Version while it is still in use by a different environment. To work around this you can either create each environment in a separate AWS account or create your `aws.elasticbeanstalk.ApplicationVersion` resources with a unique names in your Elastic Beanstalk Application. For example &lt;revision&gt;-&lt;environment&gt;.",
        ELASTICBEANSTALK_ApplicationVersion.GetTypes(),
      ),
    ],
    [
      ResourceType.ELASTICBEANSTALK_CONFIGURATIONTEMPLATE,
      new ResourceProperty(
        "Provides an Elastic Beanstalk Configuration Template, which are associated with a specific application and are used to deploy different versions of the application with the same configuration settings.",
        ELASTICBEANSTALK_ConfigurationTemplate.GetTypes(),
      ),
    ],
    [
      ResourceType.ELASTICBEANSTALK_ENVIRONMENT,
      new ResourceProperty(
        "Provides an Elastic Beanstalk Environment Resource. Elastic Beanstalk allows you to deploy and manage applications in the AWS cloud without worrying about the infrastructure that runs those applications.  Environments are often things such as `development`, `integration`, or `production`.",
        ELASTICBEANSTALK_Environment.GetTypes(),
      ),
    ],
    [
      ResourceType.ELASTICSEARCH_DOMAIN,
      new ResourceProperty(
        "Manages an AWS Elasticsearch Domain.",
        ELASTICSEARCH_Domain.GetTypes(),
      ),
    ],
    [
      ResourceType.ELASTICSEARCH_DOMAINPOLICY,
      new ResourceProperty(
        "Allows setting policy to an Elasticsearch domain while referencing domain attributes (e.g., ARN)",
        ELASTICSEARCH_DomainPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.ELASTICSEARCH_DOMAINSAMLOPTIONS,
      new ResourceProperty(
        "Manages SAML authentication options for an AWS Elasticsearch Domain.",
        ELASTICSEARCH_DomainSamlOptions.GetTypes(),
      ),
    ],
    [
      ResourceType.ELASTICSEARCH_VPCENDPOINT,
      new ResourceProperty(
        "Manages an [AWS Elasticsearch VPC Endpoint](https://docs.aws.amazon.com/elasticsearch-service/latest/APIReference/API_CreateVpcEndpoint.html). Creates an Amazon elasticsearch Service-managed VPC endpoint.",
        ELASTICSEARCH_VpcEndpoint.GetTypes(),
      ),
    ],
    [
      ResourceType.ELASTICTRANSCODER_PIPELINE,
      new ResourceProperty(
        "Provides an Elastic Transcoder pipeline resource.",
        ELASTICTRANSCODER_Pipeline.GetTypes(),
      ),
    ],
    [
      ResourceType.ELASTICTRANSCODER_PRESET,
      new ResourceProperty(
        "Provides an Elastic Transcoder preset resource.",
        ELASTICTRANSCODER_Preset.GetTypes(),
      ),
    ],
    [
      ResourceType.ELB_APPCOOKIESTICKINESSPOLICY,
      new ResourceProperty(
        "Provides an application cookie stickiness policy, which allows an ELB to wed its sticky cookie's expiration to a cookie generated by your application.",
        ELB_AppCookieStickinessPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.ELB_ATTACHMENT,
      new ResourceProperty(
        "Attaches an EC2 instance to an Elastic Load Balancer (ELB). For attaching resources with Application Load Balancer (ALB) or Network Load Balancer (NLB), see the `aws.lb.TargetGroupAttachment` resource.  > --NOTE on ELB Instances and ELB Attachments:-- This provider currently provides both a standalone ELB Attachment resource (describing an instance attached to an ELB), and an Elastic Load Balancer resource with `instances` defined in-line. At this time you cannot use an ELB with in-line instances in conjunction with an ELB Attachment resource. Doing so will cause a conflict and will overwrite attachments.",
        ELB_Attachment.GetTypes(),
      ),
    ],
    [
      ResourceType.ELB_LISTENERPOLICY,
      new ResourceProperty(
        "Attaches a load balancer policy to an ELB Listener.",
        ELB_ListenerPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.ELB_LOADBALANCER,
      new ResourceProperty(
        'Provides an Elastic Load Balancer resource, also known as a "Classic Load Balancer" after the release of Application/Network Load Balancers.  > --NOTE on ELB Instances and ELB Attachments:-- This provider currently provides both a standalone ELB Attachment resource (describing an instance attached to an ELB), and an ELB resource with `instances` defined in-line. At this time you cannot use an ELB with in-line instances in conjunction with a ELB Attachment resources. Doing so will cause a conflict and will overwrite attachments.',
        ELB_LoadBalancer.GetTypes(),
      ),
    ],
    [
      ResourceType.ELB_LOADBALANCERBACKENDSERVERPOLICY,
      new ResourceProperty(
        "Attaches a load balancer policy to an ELB backend server.",
        ELB_LoadBalancerBackendServerPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.ELB_LOADBALANCERCOOKIESTICKINESSPOLICY,
      new ResourceProperty(
        "Provides a load balancer cookie stickiness policy, which allows an ELB to control the sticky session lifetime of the browser.",
        ELB_LoadBalancerCookieStickinessPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.ELB_LOADBALANCERPOLICY,
      new ResourceProperty(
        "Provides a load balancer policy, which can be attached to an ELB listener or backend server.",
        ELB_LoadBalancerPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.ELB_SSLNEGOTIATIONPOLICY,
      new ResourceProperty(
        "Provides a load balancer SSL negotiation policy, which allows an ELB to control the ciphers and protocols that are supported during SSL negotiations between a client and a load balancer.",
        ELB_SslNegotiationPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.EMR_BLOCKPUBLICACCESSCONFIGURATION,
      new ResourceProperty(
        "Resource for managing an AWS EMR block public access configuration. This region level security configuration restricts the launch of EMR clusters that have associated security groups permitting public access on unspecified ports. See the [EMR Block Public Access Configuration](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-block-public-access.html) documentation for further information.",
        EMR_BlockPublicAccessConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.EMR_CLUSTER,
      new ResourceProperty(
        "Provides an Elastic MapReduce Cluster, a web service that makes it easy to process large amounts of data efficiently. See [Amazon Elastic MapReduce Documentation](https://aws.amazon.com/documentation/elastic-mapreduce/) for more information.  To configure [Instance Groups](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-groups) for [task nodes](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html#emr-plan-task), see the `aws.emr.InstanceGroup` resource.",
        EMR_Cluster.GetTypes(),
      ),
    ],
    [
      ResourceType.EMR_INSTANCEFLEET,
      new ResourceProperty(
        "Provides an Elastic MapReduce Cluster Instance Fleet configuration. See [Amazon Elastic MapReduce Documentation](https://aws.amazon.com/documentation/emr/) for more information.  > --NOTE:-- At this time, Instance Fleets cannot be destroyed through the API nor web interface. Instance Fleets are destroyed when the EMR Cluster is destroyed. the provider will resize any Instance Fleet to zero when destroying the resource.",
        EMR_InstanceFleet.GetTypes(),
      ),
    ],
    [
      ResourceType.EMR_INSTANCEGROUP,
      new ResourceProperty(
        "Provides an Elastic MapReduce Cluster Instance Group configuration. See [Amazon Elastic MapReduce Documentation](https://aws.amazon.com/documentation/emr/) for more information.  > --NOTE:-- At this time, Instance Groups cannot be destroyed through the API nor web interface. Instance Groups are destroyed when the EMR Cluster is destroyed. this provider will resize any Instance Group to zero when destroying the resource.",
        EMR_InstanceGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.EMR_MANAGEDSCALINGPOLICY,
      new ResourceProperty(
        "Provides a Managed Scaling policy for EMR Cluster. With Amazon EMR versions 5.30.0 and later (except for Amazon EMR 6.0.0), you can enable EMR managed scaling to automatically increase or decrease the number of instances or units in your cluster based on workload. See [Using EMR Managed Scaling in Amazon EMR](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-scaling.html) for more information.",
        EMR_ManagedScalingPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.EMR_SECURITYCONFIGURATION,
      new ResourceProperty(
        "Provides a resource to manage AWS EMR Security Configurations",
        EMR_SecurityConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.EMR_STUDIO,
      new ResourceProperty(
        "Provides an Elastic MapReduce Studio.",
        EMR_Studio.GetTypes(),
      ),
    ],
    [
      ResourceType.EMR_STUDIOSESSIONMAPPING,
      new ResourceProperty(
        "Provides an Elastic MapReduce Studio Session Mapping.",
        EMR_StudioSessionMapping.GetTypes(),
      ),
    ],
    [
      ResourceType.EMRCONTAINERS_JOBTEMPLATE,
      new ResourceProperty(
        "Manages an EMR Containers (EMR on EKS) Job Template.",
        EMRCONTAINERS_JobTemplate.GetTypes(),
      ),
    ],
    [
      ResourceType.EMRCONTAINERS_VIRTUALCLUSTER,
      new ResourceProperty(
        "Manages an EMR Containers (EMR on EKS) Virtual Cluster.",
        EMRCONTAINERS_VirtualCluster.GetTypes(),
      ),
    ],
    [
      ResourceType.EMRSERVERLESS_APPLICATION,
      new ResourceProperty(
        "Manages an EMR Serverless Application.",
        EMRSERVERLESS_Application.GetTypes(),
      ),
    ],
    [
      ResourceType.EVIDENTLY_FEATURE,
      new ResourceProperty(
        "Provides a CloudWatch Evidently Feature resource.",
        EVIDENTLY_Feature.GetTypes(),
      ),
    ],
    [
      ResourceType.EVIDENTLY_LAUNCH,
      new ResourceProperty(
        "Provides a CloudWatch Evidently Launch resource.",
        EVIDENTLY_Launch.GetTypes(),
      ),
    ],
    [
      ResourceType.EVIDENTLY_PROJECT,
      new ResourceProperty(
        "Provides a CloudWatch Evidently Project resource.",
        EVIDENTLY_Project.GetTypes(),
      ),
    ],
    [
      ResourceType.EVIDENTLY_SEGMENT,
      new ResourceProperty(
        "Provides a CloudWatch Evidently Segment resource.",
        EVIDENTLY_Segment.GetTypes(),
      ),
    ],
    [
      ResourceType.FINSPACE_KXCLUSTER,
      new ResourceProperty(
        "Resource for managing an AWS FinSpace Kx Cluster.",
        FINSPACE_KxCluster.GetTypes(),
      ),
    ],
    [
      ResourceType.FINSPACE_KXDATABASE,
      new ResourceProperty(
        "Resource for managing an AWS FinSpace Kx Database.",
        FINSPACE_KxDatabase.GetTypes(),
      ),
    ],
    [
      ResourceType.FINSPACE_KXDATAVIEW,
      new ResourceProperty(
        "Resource for managing an AWS FinSpace Kx Dataview.",
        FINSPACE_KxDataview.GetTypes(),
      ),
    ],
    [
      ResourceType.FINSPACE_KXENVIRONMENT,
      new ResourceProperty(
        "Resource for managing an AWS FinSpace Kx Environment.",
        FINSPACE_KxEnvironment.GetTypes(),
      ),
    ],
    [
      ResourceType.FINSPACE_KXSCALINGGROUP,
      new ResourceProperty(
        "Resource for managing an AWS FinSpace Kx Scaling Group.",
        FINSPACE_KxScalingGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.FINSPACE_KXUSER,
      new ResourceProperty(
        "Resource for managing an AWS FinSpace Kx User.",
        FINSPACE_KxUser.GetTypes(),
      ),
    ],
    [
      ResourceType.FINSPACE_KXVOLUME,
      new ResourceProperty(
        "Resource for managing an AWS FinSpace Kx Volume.",
        FINSPACE_KxVolume.GetTypes(),
      ),
    ],
    [
      ResourceType.FIS_EXPERIMENTTEMPLATE,
      new ResourceProperty(
        "Provides an FIS Experiment Template, which can be used to run an experiment. An experiment template contains one or more actions to run on specified targets during an experiment. It also contains the stop conditions that prevent the experiment from going out of bounds. See [Amazon Fault Injection Simulator](https://docs.aws.amazon.com/fis/index.html) for more information.",
        FIS_ExperimentTemplate.GetTypes(),
      ),
    ],
    [
      ResourceType.FMS_ADMINACCOUNT,
      new ResourceProperty(
        "Provides a resource to associate/disassociate an AWS Firewall Manager administrator account. This operation must be performed in the `us-east-1` region.",
        FMS_AdminAccount.GetTypes(),
      ),
    ],
    [
      ResourceType.FMS_POLICY,
      new ResourceProperty(
        "Provides a resource to create an AWS Firewall Manager policy. You need to be using AWS organizations and have enabled the Firewall Manager administrator account.  > --NOTE:-- Due to limitations with testing, we provide it as best effort. If you find it useful, and have the ability to help test or notice issues, consider reaching out to us on GitHub.",
        FMS_Policy.GetTypes(),
      ),
    ],
    [
      ResourceType.FMS_RESOURCESET,
      new ResourceProperty(
        "Resource for managing an AWS FMS (Firewall Manager) Resource Set.",
        FMS_ResourceSet.GetTypes(),
      ),
    ],
    [
      ResourceType.FSX_BACKUP,
      new ResourceProperty(
        "Provides a FSx Backup resource.",
        FSX_Backup.GetTypes(),
      ),
    ],
    [
      ResourceType.FSX_DATAREPOSITORYASSOCIATION,
      new ResourceProperty(
        "Manages a FSx for Lustre Data Repository Association. See [Linking your file system to an S3 bucket](https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html) for more information.  > --NOTE:-- Data Repository Associations are only compatible with AWS FSx for Lustre File Systems and `PERSISTENT_2` deployment type.",
        FSX_DataRepositoryAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.FSX_FILECACHE,
      new ResourceProperty(
        "Resource for managing an Amazon File Cache cache. See the [Create File Cache](https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateFileCache.html) for more information.",
        FSX_FileCache.GetTypes(),
      ),
    ],
    [
      ResourceType.FSX_LUSTREFILESYSTEM,
      new ResourceProperty(
        "Manages a FSx Lustre File System. See the [FSx Lustre Guide](https://docs.aws.amazon.com/fsx/latest/LustreGuide/what-is.html) for more information.  > --NOTE:-- `auto_import_policy`, `export_path`, `import_path` and `imported_file_chunk_size` are not supported with the `PERSISTENT_2` deployment type. Use `aws.fsx.DataRepositoryAssociation` instead.",
        FSX_LustreFileSystem.GetTypes(),
      ),
    ],
    [
      ResourceType.FSX_ONTAPFILESYSTEM,
      new ResourceProperty(
        "Manages an Amazon FSx for NetApp ONTAP file system. See the [FSx ONTAP User Guide](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/what-is-fsx-ontap.html) for more information.",
        FSX_OntapFileSystem.GetTypes(),
      ),
    ],
    [
      ResourceType.FSX_ONTAPSTORAGEVIRTUALMACHINE,
      new ResourceProperty(
        "Manages a FSx Storage Virtual Machine. See the [FSx ONTAP User Guide](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html) for more information.",
        FSX_OntapStorageVirtualMachine.GetTypes(),
      ),
    ],
    [
      ResourceType.FSX_ONTAPVOLUME,
      new ResourceProperty(
        "Manages a FSx ONTAP Volume. See the [FSx ONTAP User Guide](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-volumes.html) for more information.",
        FSX_OntapVolume.GetTypes(),
      ),
    ],
    [
      ResourceType.FSX_OPENZFSFILESYSTEM,
      new ResourceProperty(
        "Manages an Amazon FSx for OpenZFS file system. See the [FSx OpenZFS User Guide](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/what-is-fsx.html) for more information.",
        FSX_OpenZfsFileSystem.GetTypes(),
      ),
    ],
    [
      ResourceType.FSX_OPENZFSSNAPSHOT,
      new ResourceProperty(
        "Manages an Amazon FSx for OpenZFS volume. See the [FSx OpenZFS User Guide](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/what-is-fsx.html) for more information.",
        FSX_OpenZfsSnapshot.GetTypes(),
      ),
    ],
    [
      ResourceType.FSX_OPENZFSVOLUME,
      new ResourceProperty(
        "Manages an Amazon FSx for OpenZFS volume. See the [FSx OpenZFS User Guide](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/what-is-fsx.html) for more information.",
        FSX_OpenZfsVolume.GetTypes(),
      ),
    ],
    [
      ResourceType.FSX_WINDOWSFILESYSTEM,
      new ResourceProperty(
        "Manages a FSx Windows File System. See the [FSx Windows Guide](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html) for more information.  > --NOTE:-- Either the `active_directory_id` argument or `self_managed_active_directory` configuration block must be specified.",
        FSX_WindowsFileSystem.GetTypes(),
      ),
    ],
    [
      ResourceType.GAMELIFT_ALIAS,
      new ResourceProperty(
        "Provides a GameLift Alias resource.",
        GAMELIFT_Alias.GetTypes(),
      ),
    ],
    [
      ResourceType.GAMELIFT_BUILD,
      new ResourceProperty(
        "Provides an GameLift Build resource.",
        GAMELIFT_Build.GetTypes(),
      ),
    ],
    [
      ResourceType.GAMELIFT_FLEET,
      new ResourceProperty(
        "Provides a GameLift Fleet resource.",
        GAMELIFT_Fleet.GetTypes(),
      ),
    ],
    [
      ResourceType.GAMELIFT_GAMESERVERGROUP,
      new ResourceProperty(
        "Provides an GameLift Game Server Group resource.",
        GAMELIFT_GameServerGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.GAMELIFT_GAMESESSIONQUEUE,
      new ResourceProperty(
        "Provides an GameLift Game Session Queue resource.",
        GAMELIFT_GameSessionQueue.GetTypes(),
      ),
    ],
    [
      ResourceType.GAMELIFT_MATCHMAKINGCONFIGURATION,
      new ResourceProperty(
        "Provides a GameLift Alias resource.",
        GAMELIFT_MatchmakingConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.GAMELIFT_MATCHMAKINGRULESET,
      new ResourceProperty(
        "Provides a GameLift Matchmaking Rule Set resources.",
        GAMELIFT_MatchmakingRuleSet.GetTypes(),
      ),
    ],
    [
      ResourceType.GAMELIFT_SCRIPT,
      new ResourceProperty(
        "Provides an GameLift Script resource.",
        GAMELIFT_Script.GetTypes(),
      ),
    ],
    [
      ResourceType.GLACIER_VAULT,
      new ResourceProperty(
        "Provides a Glacier Vault Resource. You can refer to the [Glacier Developer Guide](https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-vaults.html) for a full explanation of the Glacier Vault functionality  > --NOTE:-- When removing a Glacier Vault, the Vault must be empty.",
        GLACIER_Vault.GetTypes(),
      ),
    ],
    [
      ResourceType.GLACIER_VAULTLOCK,
      new ResourceProperty("", GLACIER_VaultLock.GetTypes()),
    ],
    [
      ResourceType.GLOBALACCELERATOR_ACCELERATOR,
      new ResourceProperty(
        "Creates a Global Accelerator accelerator.",
        GLOBALACCELERATOR_Accelerator.GetTypes(),
      ),
    ],
    [
      ResourceType.GLOBALACCELERATOR_CROSSACCOUNTATTACHMENT,
      new ResourceProperty(
        "Resource for managing an AWS Global Accelerator Cross Account Attachment.",
        GLOBALACCELERATOR_CrossAccountAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.GLOBALACCELERATOR_CUSTOMROUTINGACCELERATOR,
      new ResourceProperty(
        "Creates a Global Accelerator custom routing accelerator.",
        GLOBALACCELERATOR_CustomRoutingAccelerator.GetTypes(),
      ),
    ],
    [
      ResourceType.GLOBALACCELERATOR_CUSTOMROUTINGENDPOINTGROUP,
      new ResourceProperty(
        "Provides a Global Accelerator custom routing endpoint group.",
        GLOBALACCELERATOR_CustomRoutingEndpointGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.GLOBALACCELERATOR_CUSTOMROUTINGLISTENER,
      new ResourceProperty(
        "Provides a Global Accelerator custom routing listener.",
        GLOBALACCELERATOR_CustomRoutingListener.GetTypes(),
      ),
    ],
    [
      ResourceType.GLOBALACCELERATOR_ENDPOINTGROUP,
      new ResourceProperty(
        "Provides a Global Accelerator endpoint group.",
        GLOBALACCELERATOR_EndpointGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.GLOBALACCELERATOR_LISTENER,
      new ResourceProperty(
        "Provides a Global Accelerator listener.",
        GLOBALACCELERATOR_Listener.GetTypes(),
      ),
    ],
    [
      ResourceType.GLUE_CATALOGDATABASE,
      new ResourceProperty(
        "Provides a Glue Catalog Database Resource. You can refer to the [Glue Developer Guide](http://docs.aws.amazon.com/glue/latest/dg/populate-data-catalog.html) for a full explanation of the Glue Data Catalog functionality",
        GLUE_CatalogDatabase.GetTypes(),
      ),
    ],
    [
      ResourceType.GLUE_CATALOGTABLE,
      new ResourceProperty(
        "Provides a Glue Catalog Table Resource. You can refer to the [Glue Developer Guide](http://docs.aws.amazon.com/glue/latest/dg/populate-data-catalog.html) for a full explanation of the Glue Data Catalog functionality.",
        GLUE_CatalogTable.GetTypes(),
      ),
    ],
    [
      ResourceType.GLUE_CATALOGTABLEOPTIMIZER,
      new ResourceProperty(
        "Resource for managing an AWS Glue Catalog Table Optimizer.",
        GLUE_CatalogTableOptimizer.GetTypes(),
      ),
    ],
    [
      ResourceType.GLUE_CLASSIFIER,
      new ResourceProperty(
        "Provides a Glue Classifier resource.  > --NOTE:-- It is only valid to create one type of classifier (CSV, grok, JSON, or XML). Changing classifier types will recreate the classifier.",
        GLUE_Classifier.GetTypes(),
      ),
    ],
    [
      ResourceType.GLUE_CONNECTION,
      new ResourceProperty(
        "Provides a Glue Connection resource.",
        GLUE_Connection.GetTypes(),
      ),
    ],
    [
      ResourceType.GLUE_CRAWLER,
      new ResourceProperty(
        "Manages a Glue Crawler. More information can be found in the [AWS Glue Developer Guide](https://docs.aws.amazon.com/glue/latest/dg/add-crawler.html)",
        GLUE_Crawler.GetTypes(),
      ),
    ],
    [
      ResourceType.GLUE_DATACATALOGENCRYPTIONSETTINGS,
      new ResourceProperty(
        "Provides a Glue Data Catalog Encryption Settings resource.",
        GLUE_DataCatalogEncryptionSettings.GetTypes(),
      ),
    ],
    [
      ResourceType.GLUE_DATAQUALITYRULESET,
      new ResourceProperty(
        "Provides a Glue Data Quality Ruleset Resource. You can refer to the [Glue Developer Guide](https://docs.aws.amazon.com/glue/latest/dg/glue-data-quality.html) for a full explanation of the Glue Data Quality Ruleset functionality",
        GLUE_DataQualityRuleset.GetTypes(),
      ),
    ],
    [
      ResourceType.GLUE_DEVENDPOINT,
      new ResourceProperty(
        "Provides a Glue Development Endpoint resource.",
        GLUE_DevEndpoint.GetTypes(),
      ),
    ],
    [
      ResourceType.GLUE_JOB,
      new ResourceProperty(
        "Provides a Glue Job resource.  > Glue functionality, such as monitoring and logging of jobs, is typically managed with the `default_arguments` argument. See the [Special Parameters Used by AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html) topic in the Glue developer guide for additional information.",
        GLUE_Job.GetTypes(),
      ),
    ],
    [
      ResourceType.GLUE_MLTRANSFORM,
      new ResourceProperty(
        "Provides a Glue ML Transform resource.",
        GLUE_MLTransform.GetTypes(),
      ),
    ],
    [
      ResourceType.GLUE_PARTITION,
      new ResourceProperty(
        "Provides a Glue Partition Resource.",
        GLUE_Partition.GetTypes(),
      ),
    ],
    [
      ResourceType.GLUE_PARTITIONINDEX,
      new ResourceProperty("", GLUE_PartitionIndex.GetTypes()),
    ],
    [
      ResourceType.GLUE_REGISTRY,
      new ResourceProperty(
        "Provides a Glue Registry resource.",
        GLUE_Registry.GetTypes(),
      ),
    ],
    [
      ResourceType.GLUE_RESOURCEPOLICY,
      new ResourceProperty(
        "Provides a Glue resource policy. Only one can exist per region.",
        GLUE_ResourcePolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.GLUE_SCHEMA,
      new ResourceProperty(
        "Provides a Glue Schema resource.",
        GLUE_Schema.GetTypes(),
      ),
    ],
    [
      ResourceType.GLUE_SECURITYCONFIGURATION,
      new ResourceProperty(
        "Manages a Glue Security Configuration.",
        GLUE_SecurityConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.GLUE_TRIGGER,
      new ResourceProperty(
        "Manages a Glue Trigger resource.",
        GLUE_Trigger.GetTypes(),
      ),
    ],
    [
      ResourceType.GLUE_USERDEFINEDFUNCTION,
      new ResourceProperty(
        "Provides a Glue User Defined Function Resource.",
        GLUE_UserDefinedFunction.GetTypes(),
      ),
    ],
    [
      ResourceType.GLUE_WORKFLOW,
      new ResourceProperty(
        "Provides a Glue Workflow resource. The workflow graph (DAG) can be build using the `aws.glue.Trigger` resource. See the example below for creating a graph with four nodes (two triggers and two jobs).",
        GLUE_Workflow.GetTypes(),
      ),
    ],
    [
      ResourceType.GRAFANA_LICENSEASSOCIATION,
      new ResourceProperty(
        "Provides an Amazon Managed Grafana workspace license association resource.",
        GRAFANA_LicenseAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.GRAFANA_ROLEASSOCIATION,
      new ResourceProperty(
        "Provides an Amazon Managed Grafana workspace role association resource.",
        GRAFANA_RoleAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.GRAFANA_WORKSPACE,
      new ResourceProperty(
        "Provides an Amazon Managed Grafana workspace resource.",
        GRAFANA_Workspace.GetTypes(),
      ),
    ],
    [
      ResourceType.GRAFANA_WORKSPACEAPIKEY,
      new ResourceProperty(
        "Provides an Amazon Managed Grafana workspace API Key resource.",
        GRAFANA_WorkspaceApiKey.GetTypes(),
      ),
    ],
    [
      ResourceType.GRAFANA_WORKSPACESAMLCONFIGURATION,
      new ResourceProperty(
        "Provides an Amazon Managed Grafana workspace SAML configuration resource.",
        GRAFANA_WorkspaceSamlConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.GRAFANA_WORKSPACESERVICEACCOUNT,
      new ResourceProperty("", GRAFANA_WorkspaceServiceAccount.GetTypes()),
    ],
    [
      ResourceType.GRAFANA_WORKSPACESERVICEACCOUNTTOKEN,
      new ResourceProperty("", GRAFANA_WorkspaceServiceAccountToken.GetTypes()),
    ],
    [
      ResourceType.GUARDDUTY_DETECTOR,
      new ResourceProperty(
        'Provides a resource to manage an Amazon GuardDuty detector.  > --NOTE:-- Deleting this resource is equivalent to "disabling" GuardDuty for an AWS region, which removes all existing findings. You can set the `enable` attribute to `false` to instead "suspend" monitoring and feedback reporting while keeping existing data. See the [Suspending or Disabling Amazon GuardDuty documentation](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_suspend-disable.html) for more information.',
        GUARDDUTY_Detector.GetTypes(),
      ),
    ],
    [
      ResourceType.GUARDDUTY_DETECTORFEATURE,
      new ResourceProperty(
        "Provides a resource to manage a single Amazon GuardDuty [detector feature](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-features-activation-model.html#guardduty-features).  > --NOTE:-- Deleting this resource does not disable the detector feature, the resource in simply removed from state instead.",
        GUARDDUTY_DetectorFeature.GetTypes(),
      ),
    ],
    [
      ResourceType.GUARDDUTY_FILTER,
      new ResourceProperty(
        "Provides a resource to manage a GuardDuty filter.",
        GUARDDUTY_Filter.GetTypes(),
      ),
    ],
    [
      ResourceType.GUARDDUTY_INVITEACCEPTER,
      new ResourceProperty(
        "Provides a resource to accept a pending GuardDuty invite on creation, ensure the detector has the correct primary account on read, and disassociate with the primary account upon removal.",
        GUARDDUTY_InviteAccepter.GetTypes(),
      ),
    ],
    [
      ResourceType.GUARDDUTY_IPSET,
      new ResourceProperty(
        "Provides a resource to manage a GuardDuty IPSet.  > --Note:-- Currently in GuardDuty, users from member accounts cannot upload and further manage IPSets. IPSets that are uploaded by the primary account are imposed on GuardDuty functionality in its member accounts. See the [GuardDuty API Documentation](https://docs.aws.amazon.com/guardduty/latest/ug/create-ip-set.html)",
        GUARDDUTY_IPSet.GetTypes(),
      ),
    ],
    [
      ResourceType.GUARDDUTY_MALWAREPROTECTIONPLAN,
      new ResourceProperty(
        "Provides a resource to manage a GuardDuty malware protection plan.",
        GUARDDUTY_MalwareProtectionPlan.GetTypes(),
      ),
    ],
    [
      ResourceType.GUARDDUTY_MEMBER,
      new ResourceProperty(
        "Provides a resource to manage a GuardDuty member. To accept invitations in member accounts, see the `aws.guardduty.InviteAccepter` resource.",
        GUARDDUTY_Member.GetTypes(),
      ),
    ],
    [
      ResourceType.GUARDDUTY_ORGANIZATIONADMINACCOUNT,
      new ResourceProperty(
        "Manages a GuardDuty Organization Admin Account. The AWS account utilizing this resource must be an Organizations primary account. More information about Organizations support in GuardDuty can be found in the [GuardDuty User Guide](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_organizations.html).",
        GUARDDUTY_OrganizationAdminAccount.GetTypes(),
      ),
    ],
    [
      ResourceType.GUARDDUTY_ORGANIZATIONCONFIGURATION,
      new ResourceProperty(
        "Manages the GuardDuty Organization Configuration in the current AWS Region. The AWS account utilizing this resource must have been assigned as a delegated Organization administrator account, e.g., via the `aws.guardduty.OrganizationAdminAccount` resource. More information about Organizations support in GuardDuty can be found in the [GuardDuty User Guide](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_organizations.html).  > --NOTE:-- This is an advanced resource. The provider will automatically assume management of the GuardDuty Organization Configuration without import and perform no actions on removal from the resource configuration.",
        GUARDDUTY_OrganizationConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.GUARDDUTY_ORGANIZATIONCONFIGURATIONFEATURE,
      new ResourceProperty(
        "Provides a resource to manage a single Amazon GuardDuty [organization configuration feature](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-features-activation-model.html#guardduty-features).  > --NOTE:-- Deleting this resource does not disable the organization configuration feature, the resource in simply removed from state instead.",
        GUARDDUTY_OrganizationConfigurationFeature.GetTypes(),
      ),
    ],
    [
      ResourceType.GUARDDUTY_PUBLISHINGDESTINATION,
      new ResourceProperty(
        "Provides a resource to manage a GuardDuty PublishingDestination. Requires an existing GuardDuty Detector.",
        GUARDDUTY_PublishingDestination.GetTypes(),
      ),
    ],
    [
      ResourceType.GUARDDUTY_THREATINTELSET,
      new ResourceProperty(
        "Provides a resource to manage a GuardDuty ThreatIntelSet.  > --Note:-- Currently in GuardDuty, users from member accounts cannot upload and further manage ThreatIntelSets. ThreatIntelSets that are uploaded by the primary account are imposed on GuardDuty functionality in its member accounts. See the [GuardDuty API Documentation](https://docs.aws.amazon.com/guardduty/latest/ug/create-threat-intel-set.html)",
        GUARDDUTY_ThreatIntelSet.GetTypes(),
      ),
    ],
    [
      ResourceType.IAM_ACCESSKEY,
      new ResourceProperty(
        "Provides an IAM access key. This is a set of credentials that allow API requests to be made as an IAM user.",
        IAM_AccessKey.GetTypes(),
      ),
    ],
    [
      ResourceType.IAM_ACCOUNTALIAS,
      new ResourceProperty(
        "> --Note:-- There is only a single account alias per AWS account.  Manages the account alias for the AWS Account.",
        IAM_AccountAlias.GetTypes(),
      ),
    ],
    [
      ResourceType.IAM_ACCOUNTPASSWORDPOLICY,
      new ResourceProperty(
        "> --Note:-- There is only a single policy allowed per AWS account. An existing policy will be lost when using this resource as an effect of this limitation.  Manages Password Policy for the AWS Account. See more about [Account Password Policy](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_account-policy.html) in the official AWS docs.",
        IAM_AccountPasswordPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.IAM_GROUP,
      new ResourceProperty(
        "Provides an IAM group.  > --NOTE on user management:-- Using `aws.iam.GroupMembership` or `aws.iam.UserGroupMembership` resources in addition to manually managing user/group membership using the console may lead to configuration drift or conflicts. For this reason, it's recommended to either manage membership entirely with the provider or entirely within the AWS console.",
        IAM_Group.GetTypes(),
      ),
    ],
    [
      ResourceType.IAM_GROUPMEMBERSHIP,
      new ResourceProperty(
        "> --WARNING:-- Multiple aws.iam.GroupMembership resources with the same group name will produce inconsistent behavior!  Provides a top level resource to manage IAM Group membership for IAM Users. For more information on managing IAM Groups or IAM Users, see IAM Groups or IAM Users  > --Note:-- `aws.iam.GroupMembership` will conflict with itself if used more than once with the same group. To non-exclusively manage the users in a group, see the `aws.iam.UserGroupMembership` resource.",
        IAM_GroupMembership.GetTypes(),
      ),
    ],
    [
      ResourceType.IAM_GROUPPOLICY,
      new ResourceProperty(
        "Provides an IAM policy attached to a group.  > --NOTE:-- We suggest using explicit JSON encoding or `aws.iam.getPolicyDocument` when assigning a value to `policy`. They seamlessly translate configuration to JSON, enabling you to maintain consistency within your configuration without the need for context switches. Also, you can sidestep potential complications arising from formatting discrepancies, whitespace inconsistencies, and other nuances inherent to JSON.",
        IAM_GroupPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.IAM_GROUPPOLICYATTACHMENT,
      new ResourceProperty(
        "Attaches a Managed IAM Policy to an IAM group  > --NOTE:-- The usage of this resource conflicts with the `aws.iam.PolicyAttachment` resource and will permanently show a difference if both are defined.",
        IAM_GroupPolicyAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.IAM_INSTANCEPROFILE,
      new ResourceProperty(
        "Provides an IAM instance profile.  > --NOTE:-- When managing instance profiles, remember that the `name` attribute must always be unique. This means that even if you have different `role` or `path` values, duplicating an existing instance profile `name` will lead to an `EntityAlreadyExists` error.",
        IAM_InstanceProfile.GetTypes(),
      ),
    ],
    [
      ResourceType.IAM_OPENIDCONNECTPROVIDER,
      new ResourceProperty(
        "Provides an IAM OpenID Connect provider.",
        IAM_OpenIdConnectProvider.GetTypes(),
      ),
    ],
    [
      ResourceType.IAM_POLICY,
      new ResourceProperty(
        "Provides an IAM policy.  > --NOTE:-- We suggest using explicit JSON encoding or `aws.iam.getPolicyDocument` when assigning a value to `policy`. They seamlessly translate configuration to JSON, enabling you to maintain consistency within your configuration without the need for context switches. Also, you can sidestep potential complications arising from formatting discrepancies, whitespace inconsistencies, and other nuances inherent to JSON.",
        IAM_Policy.GetTypes(),
      ),
    ],
    [
      ResourceType.IAM_POLICYATTACHMENT,
      new ResourceProperty("", IAM_PolicyAttachment.GetTypes()),
    ],
    [
      ResourceType.IAM_ROLE,
      new ResourceProperty(
        "Provides an IAM role.  > --NOTE:-- If policies are attached to the role via the `aws.iam.PolicyAttachment` resource and you are modifying the role `name` or `path`, the `force_detach_policies` argument must be set to `true` and applied before attempting the operation otherwise you will encounter a `DeleteConflict` error. The `aws.iam.RolePolicyAttachment` resource (recommended) does not have this requirement.  > --NOTE:-- If you use this resource's `managed_policy_arns` argument or `inline_policy` configuration blocks, this resource will take over exclusive management of the role's respective policy types (e.g., both policy types if both arguments are used). These arguments are incompatible with other ways of managing a role's policies, such as `aws.iam.PolicyAttachment`, `aws.iam.RolePolicyAttachment`, and `aws.iam.RolePolicy`. If you attempt to manage a role's policies by multiple means, you will get resource cycling and/or errors.  > --NOTE:-- We suggest using explicit JSON encoding or `aws.iam.getPolicyDocument` when assigning a value to `policy`. They seamlessly translate configuration to JSON, enabling you to maintain consistency within your configuration without the need for context switches. Also, you can sidestep potential complications arising from formatting discrepancies, whitespace inconsistencies, and other nuances inherent to JSON.",
        IAM_Role.GetTypes(),
      ),
    ],
    [
      ResourceType.IAM_ROLEPOLICY,
      new ResourceProperty(
        "Provides an IAM role inline policy.  > --NOTE:-- For a given role, this resource is incompatible with using the `aws.iam.Role` resource `inline_policy` argument. When using that argument and this resource, both will attempt to manage the role's inline policies and the provider will show a permanent difference.  > --NOTE:-- We suggest using explicit JSON encoding or `aws.iam.getPolicyDocument` when assigning a value to `policy`. They seamlessly translate configuration to JSON, enabling you to maintain consistency within your configuration without the need for context switches. Also, you can sidestep potential complications arising from formatting discrepancies, whitespace inconsistencies, and other nuances inherent to JSON.",
        IAM_RolePolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.IAM_ROLEPOLICYATTACHMENT,
      new ResourceProperty(
        "Attaches a Managed IAM Policy to an IAM role  > --NOTE:-- The usage of this resource conflicts with the `aws.iam.PolicyAttachment` resource and will permanently show a difference if both are defined.  > --NOTE:-- For a given role, this resource is incompatible with using the `aws.iam.Role` resource `managed_policy_arns` argument. When using that argument and this resource, both will attempt to manage the role's managed policy attachments and Pulumi will show a permanent difference.",
        IAM_RolePolicyAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.IAM_SAMLPROVIDER,
      new ResourceProperty(
        "Provides an IAM SAML provider.",
        IAM_SamlProvider.GetTypes(),
      ),
    ],
    [
      ResourceType.IAM_SECURITYTOKENSERVICEPREFERENCES,
      new ResourceProperty(
        "Provides an IAM Security Token Service Preferences resource.",
        IAM_SecurityTokenServicePreferences.GetTypes(),
      ),
    ],
    [
      ResourceType.IAM_SERVERCERTIFICATE,
      new ResourceProperty(
        "Provides an IAM Server Certificate resource to upload Server Certificates. Certs uploaded to IAM can easily work with other AWS services such as:  - AWS Elastic Beanstalk - Elastic Load Balancing - CloudFront - AWS OpsWorks  For information about server certificates in IAM, see [Managing Server Certificates][2] in AWS Documentation.",
        IAM_ServerCertificate.GetTypes(),
      ),
    ],
    [
      ResourceType.IAM_SERVICELINKEDROLE,
      new ResourceProperty(
        "Provides an [IAM service-linked role](https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html).",
        IAM_ServiceLinkedRole.GetTypes(),
      ),
    ],
    [
      ResourceType.IAM_SERVICESPECIFICCREDENTIAL,
      new ResourceProperty(
        "Provides an IAM Service Specific Credential.",
        IAM_ServiceSpecificCredential.GetTypes(),
      ),
    ],
    [
      ResourceType.IAM_SIGNINGCERTIFICATE,
      new ResourceProperty(
        "Provides an IAM Signing Certificate resource to upload Signing Certificates.  > --Note:-- All arguments including the certificate body will be stored in the raw state as plain-text.",
        IAM_SigningCertificate.GetTypes(),
      ),
    ],
    [
      ResourceType.IAM_SSHKEY,
      new ResourceProperty(
        "Uploads an SSH public key and associates it with the specified IAM user.",
        IAM_SshKey.GetTypes(),
      ),
    ],
    [
      ResourceType.IAM_USER,
      new ResourceProperty(
        "Provides an IAM user.  > -NOTE:- If policies are attached to the user via the `aws.iam.PolicyAttachment` resource and you are modifying the user `name` or `path`, the `force_destroy` argument must be set to `true` and applied before attempting the operation otherwise you will encounter a `DeleteConflict` error. The `aws.iam.UserPolicyAttachment` resource (recommended) does not have this requirement.",
        IAM_User.GetTypes(),
      ),
    ],
    [
      ResourceType.IAM_USERGROUPMEMBERSHIP,
      new ResourceProperty(
        "Provides a resource for adding an IAM User to IAM Groups. This resource can be used multiple times with the same user for non-overlapping groups.  To exclusively manage the users in a group, see the `aws.iam.GroupMembership` resource.",
        IAM_UserGroupMembership.GetTypes(),
      ),
    ],
    [
      ResourceType.IAM_USERLOGINPROFILE,
      new ResourceProperty(
        "Manages an IAM User Login Profile with limited support for password creation during this provider resource creation. Uses PGP to encrypt the password for safe transport to the user. PGP keys can be obtained from Keybase.  > To reset an IAM User login password via this provider, you can use delete and recreate this resource or change any of the arguments.",
        IAM_UserLoginProfile.GetTypes(),
      ),
    ],
    [
      ResourceType.IAM_USERPOLICY,
      new ResourceProperty(
        "Provides an IAM policy attached to a user.  > --NOTE:-- We suggest using explicit JSON encoding or `aws.iam.getPolicyDocument` when assigning a value to `policy`. They seamlessly translate configuration to JSON, enabling you to maintain consistency within your configuration without the need for context switches. Also, you can sidestep potential complications arising from formatting discrepancies, whitespace inconsistencies, and other nuances inherent to JSON.",
        IAM_UserPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.IAM_USERPOLICYATTACHMENT,
      new ResourceProperty(
        "Attaches a Managed IAM Policy to an IAM user  > --NOTE:-- The usage of this resource conflicts with the `aws.iam.PolicyAttachment` resource and will permanently show a difference if both are defined.",
        IAM_UserPolicyAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.IAM_VIRTUALMFADEVICE,
      new ResourceProperty(
        "Provides an IAM Virtual MFA Device.  > --Note:-- All attributes will be stored in the raw state as plain-text. > --Note:-- A virtual MFA device cannot be directly associated with an IAM User from the provider.   To associate the virtual MFA device with a user and enable it, use the code returned in either `base_32_string_seed` or `qr_code_png` to generate TOTP authentication codes.   The authentication codes can then be used with the AWS CLI command [`aws iam enable-mfa-device`](https://docs.aws.amazon.com/cli/latest/reference/iam/enable-mfa-device.html) or the AWS API call [`EnableMFADevice`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_EnableMFADevice.html).",
        IAM_VirtualMfaDevice.GetTypes(),
      ),
    ],
    [
      ResourceType.IDENTITYSTORE_GROUP,
      new ResourceProperty(
        "Resource for managing an AWS IdentityStore Group.",
        IDENTITYSTORE_Group.GetTypes(),
      ),
    ],
    [
      ResourceType.IDENTITYSTORE_GROUPMEMBERSHIP,
      new ResourceProperty(
        "Resource for managing an AWS IdentityStore Group Membership.",
        IDENTITYSTORE_GroupMembership.GetTypes(),
      ),
    ],
    [
      ResourceType.IDENTITYSTORE_USER,
      new ResourceProperty(
        "This resource manages a User resource within an Identity Store.  > --Note:-- If you use an external identity provider or Active Directory as your identity source, use this resource with caution. IAM Identity Center does not support outbound synchronization, so your identity source does not automatically update with the changes that you make to users using this resource.",
        IDENTITYSTORE_User.GetTypes(),
      ),
    ],
    [
      ResourceType.IMAGEBUILDER_COMPONENT,
      new ResourceProperty(
        "Manages an Image Builder Component.",
        IMAGEBUILDER_Component.GetTypes(),
      ),
    ],
    [
      ResourceType.IMAGEBUILDER_CONTAINERRECIPE,
      new ResourceProperty(
        "Manages an Image Builder Container Recipe.",
        IMAGEBUILDER_ContainerRecipe.GetTypes(),
      ),
    ],
    [
      ResourceType.IMAGEBUILDER_DISTRIBUTIONCONFIGURATION,
      new ResourceProperty(
        "Manages an Image Builder Distribution Configuration.",
        IMAGEBUILDER_DistributionConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.IMAGEBUILDER_IMAGE,
      new ResourceProperty(
        "Manages an Image Builder Image.",
        IMAGEBUILDER_Image.GetTypes(),
      ),
    ],
    [
      ResourceType.IMAGEBUILDER_IMAGEPIPELINE,
      new ResourceProperty(
        "Manages an Image Builder Image Pipeline.",
        IMAGEBUILDER_ImagePipeline.GetTypes(),
      ),
    ],
    [
      ResourceType.IMAGEBUILDER_IMAGERECIPE,
      new ResourceProperty(
        "Manages an Image Builder Image Recipe.",
        IMAGEBUILDER_ImageRecipe.GetTypes(),
      ),
    ],
    [
      ResourceType.IMAGEBUILDER_INFRASTRUCTURECONFIGURATION,
      new ResourceProperty(
        "Manages an Image Builder Infrastructure Configuration.",
        IMAGEBUILDER_InfrastructureConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.IMAGEBUILDER_WORKFLOW,
      new ResourceProperty(
        "Resource for managing an AWS EC2 Image Builder Workflow.",
        IMAGEBUILDER_Workflow.GetTypes(),
      ),
    ],
    [
      ResourceType.INSPECTOR_ASSESSMENTTARGET,
      new ResourceProperty(
        "Provides an Inspector Classic Assessment Target",
        INSPECTOR_AssessmentTarget.GetTypes(),
      ),
    ],
    [
      ResourceType.INSPECTOR_ASSESSMENTTEMPLATE,
      new ResourceProperty(
        "Provides an Inspector Classic Assessment Template",
        INSPECTOR_AssessmentTemplate.GetTypes(),
      ),
    ],
    [
      ResourceType.INSPECTOR_RESOURCEGROUP,
      new ResourceProperty(
        "Provides an Amazon Inspector Classic Resource Group.",
        INSPECTOR_ResourceGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.INSPECTOR2_DELEGATEDADMINACCOUNT,
      new ResourceProperty(
        "Resource for managing an Amazon Inspector Delegated Admin Account.",
        INSPECTOR2_DelegatedAdminAccount.GetTypes(),
      ),
    ],
    [
      ResourceType.INSPECTOR2_ENABLER,
      new ResourceProperty(
        "Resource for enabling Amazon Inspector resource scans.  This resource must be created in the Organization's Administrator Account.",
        INSPECTOR2_Enabler.GetTypes(),
      ),
    ],
    [
      ResourceType.INSPECTOR2_MEMBERASSOCIATION,
      new ResourceProperty(
        "Resource for associating accounts to existing Inspector instances.",
        INSPECTOR2_MemberAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.INSPECTOR2_ORGANIZATIONCONFIGURATION,
      new ResourceProperty(
        "Resource for managing an Amazon Inspector Organization Configuration.  > --NOTE:-- In order for this resource to work, the account you use must be an Inspector Delegated Admin Account.  > --NOTE:-- When this resource is deleted, EC2, ECR, Lambda, and Lambda code scans will no longer be automatically enabled for new members of your Amazon Inspector organization.",
        INSPECTOR2_OrganizationConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.IOT_AUTHORIZER,
      new ResourceProperty(
        "Creates and manages an AWS IoT Authorizer.",
        IOT_Authorizer.GetTypes(),
      ),
    ],
    [
      ResourceType.IOT_BILLINGGROUP,
      new ResourceProperty(
        "Manages an AWS IoT Billing Group.",
        IOT_BillingGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.IOT_CACERTIFICATE,
      new ResourceProperty(
        "Creates and manages an AWS IoT CA Certificate.",
        IOT_CaCertificate.GetTypes(),
      ),
    ],
    [
      ResourceType.IOT_CERTIFICATE,
      new ResourceProperty(
        "Creates and manages an AWS IoT certificate.",
        IOT_Certificate.GetTypes(),
      ),
    ],
    [
      ResourceType.IOT_DOMAINCONFIGURATION,
      new ResourceProperty(
        "Creates and manages an AWS IoT domain configuration.",
        IOT_DomainConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.IOT_EVENTCONFIGURATIONS,
      new ResourceProperty(
        "Manages IoT event configurations.  > --NOTE:-- Deleting this resource does not disable the event configurations, the resource in simply removed from state instead.",
        IOT_EventConfigurations.GetTypes(),
      ),
    ],
    [
      ResourceType.IOT_INDEXINGCONFIGURATION,
      new ResourceProperty(
        "Managing [IoT Thing indexing](https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html).",
        IOT_IndexingConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.IOT_LOGGINGOPTIONS,
      new ResourceProperty(
        "Provides a resource to manage [default logging options](https://docs.aws.amazon.com/iot/latest/developerguide/configure-logging.html#configure-logging-console).",
        IOT_LoggingOptions.GetTypes(),
      ),
    ],
    [
      ResourceType.IOT_POLICY,
      new ResourceProperty(
        "Provides an IoT policy.  > --NOTE on policy versions:-- Updating this resource creates a new, default policy version. If updating the resource would exceed the maximum number of versions (5), the oldest non-default version of the policy is deleted before the new policy version is created.",
        IOT_Policy.GetTypes(),
      ),
    ],
    [
      ResourceType.IOT_POLICYATTACHMENT,
      new ResourceProperty(
        "Provides an IoT policy attachment.",
        IOT_PolicyAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.IOT_PROVISIONINGTEMPLATE,
      new ResourceProperty(
        "Manages an IoT fleet provisioning template. For more info, see the AWS documentation on [fleet provisioning](https://docs.aws.amazon.com/iot/latest/developerguide/provision-wo-cert.html).",
        IOT_ProvisioningTemplate.GetTypes(),
      ),
    ],
    [
      ResourceType.IOT_ROLEALIAS,
      new ResourceProperty(
        "Provides an IoT role alias.",
        IOT_RoleAlias.GetTypes(),
      ),
    ],
    [
      ResourceType.IOT_THING,
      new ResourceProperty(
        "Creates and manages an AWS IoT Thing.",
        IOT_Thing.GetTypes(),
      ),
    ],
    [
      ResourceType.IOT_THINGGROUP,
      new ResourceProperty(
        "Manages an AWS IoT Thing Group.",
        IOT_ThingGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.IOT_THINGGROUPMEMBERSHIP,
      new ResourceProperty(
        "Adds an IoT Thing to an IoT Thing Group.",
        IOT_ThingGroupMembership.GetTypes(),
      ),
    ],
    [
      ResourceType.IOT_THINGPRINCIPALATTACHMENT,
      new ResourceProperty(
        "Attaches Principal to AWS IoT Thing.",
        IOT_ThingPrincipalAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.IOT_THINGTYPE,
      new ResourceProperty(
        "Creates and manages an AWS IoT Thing Type.",
        IOT_ThingType.GetTypes(),
      ),
    ],
    [
      ResourceType.IOT_TOPICRULE,
      new ResourceProperty(
        "Creates and manages an AWS IoT topic rule.",
        IOT_TopicRule.GetTypes(),
      ),
    ],
    [
      ResourceType.IOT_TOPICRULEDESTINATION,
      new ResourceProperty("", IOT_TopicRuleDestination.GetTypes()),
    ],
    [
      ResourceType.IVS_CHANNEL,
      new ResourceProperty(
        "Resource for managing an AWS IVS (Interactive Video) Channel.",
        IVS_Channel.GetTypes(),
      ),
    ],
    [
      ResourceType.IVS_PLAYBACKKEYPAIR,
      new ResourceProperty(
        "Resource for managing an AWS IVS (Interactive Video) Playback Key Pair.",
        IVS_PlaybackKeyPair.GetTypes(),
      ),
    ],
    [
      ResourceType.IVS_RECORDINGCONFIGURATION,
      new ResourceProperty(
        "Resource for managing an AWS IVS (Interactive Video) Recording Configuration.",
        IVS_RecordingConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.IVSCHAT_LOGGINGCONFIGURATION,
      new ResourceProperty(
        "Resource for managing an AWS IVS (Interactive Video) Chat Logging Configuration.",
        IVSCHAT_LoggingConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.IVSCHAT_ROOM,
      new ResourceProperty(
        "Resource for managing an AWS IVS (Interactive Video) Chat Room.",
        IVSCHAT_Room.GetTypes(),
      ),
    ],
    [
      ResourceType.KENDRA_DATASOURCE,
      new ResourceProperty(
        "Resource for managing an AWS Kendra Data Source.",
        KENDRA_DataSource.GetTypes(),
      ),
    ],
    [
      ResourceType.KENDRA_EXPERIENCE,
      new ResourceProperty(
        "Resource for managing an AWS Kendra Experience.",
        KENDRA_Experience.GetTypes(),
      ),
    ],
    [
      ResourceType.KENDRA_FAQ,
      new ResourceProperty(
        "Resource for managing an AWS Kendra FAQ.",
        KENDRA_Faq.GetTypes(),
      ),
    ],
    [
      ResourceType.KENDRA_INDEX,
      new ResourceProperty(
        "Provides an Amazon Kendra Index resource.",
        KENDRA_Index.GetTypes(),
      ),
    ],
    [
      ResourceType.KENDRA_QUERYSUGGESTIONSBLOCKLIST,
      new ResourceProperty(
        "Use the `aws_kendra_index_block_list` resource to manage an AWS Kendra block list used for query suggestions for an index.",
        KENDRA_QuerySuggestionsBlockList.GetTypes(),
      ),
    ],
    [
      ResourceType.KENDRA_THESAURUS,
      new ResourceProperty(
        "Resource for managing an AWS Kendra Thesaurus.",
        KENDRA_Thesaurus.GetTypes(),
      ),
    ],
    [
      ResourceType.KEYSPACES_KEYSPACE,
      new ResourceProperty(
        "Provides a Keyspaces Keyspace.  More information about keyspaces can be found in the [Keyspaces User Guide](https://docs.aws.amazon.com/keyspaces/latest/devguide/what-is-keyspaces.html).",
        KEYSPACES_Keyspace.GetTypes(),
      ),
    ],
    [
      ResourceType.KEYSPACES_TABLE,
      new ResourceProperty(
        "Provides a Keyspaces Table.  More information about Keyspaces tables can be found in the [Keyspaces Developer Guide](https://docs.aws.amazon.com/keyspaces/latest/devguide/working-with-tables.html).",
        KEYSPACES_Table.GetTypes(),
      ),
    ],
    [
      ResourceType.KINESIS_ANALYTICSAPPLICATION,
      new ResourceProperty(
        "Provides a Kinesis Analytics Application resource. Kinesis Analytics is a managed service that allows processing and analyzing streaming data using standard SQL.  For more details, see the [Amazon Kinesis Analytics Documentation](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/what-is.html).  > --Note:-- To manage Amazon Kinesis Data Analytics for Apache Flink applications, use the `aws.kinesisanalyticsv2.Application` resource.",
        KINESIS_AnalyticsApplication.GetTypes(),
      ),
    ],
    [
      ResourceType.KINESIS_FIREHOSEDELIVERYSTREAM,
      new ResourceProperty(
        "Provides a Kinesis Firehose Delivery Stream resource. Amazon Kinesis Firehose is a fully managed, elastic service to easily deliver real-time data streams to destinations such as Amazon S3 , Amazon Redshift and Snowflake.  For more details, see the [Amazon Kinesis Firehose Documentation](https://aws.amazon.com/documentation/firehose/).",
        KINESIS_FirehoseDeliveryStream.GetTypes(),
      ),
    ],
    [
      ResourceType.KINESIS_RESOURCEPOLICY,
      new ResourceProperty(
        "Provides a resource to manage an Amazon Kinesis Streams resource policy. Use a resource policy to manage cross-account access to your data streams or consumers.",
        KINESIS_ResourcePolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.KINESIS_STREAM,
      new ResourceProperty(
        "Provides a Kinesis Stream resource. Amazon Kinesis is a managed service that scales elastically for real-time processing of streaming big data.  For more details, see the [Amazon Kinesis Documentation](https://aws.amazon.com/documentation/kinesis/).",
        KINESIS_Stream.GetTypes(),
      ),
    ],
    [
      ResourceType.KINESIS_STREAMCONSUMER,
      new ResourceProperty(
        "Provides a resource to manage a Kinesis Stream Consumer.  > --Note:-- You can register up to 20 consumers per stream. A given consumer can only be registered with one stream at a time.  For more details, see the [Amazon Kinesis Stream Consumer Documentation](https://docs.aws.amazon.com/streams/latest/dev/amazon-kinesis-consumers.html).",
        KINESIS_StreamConsumer.GetTypes(),
      ),
    ],
    [
      ResourceType.KINESIS_VIDEOSTREAM,
      new ResourceProperty(
        "Provides a Kinesis Video Stream resource. Amazon Kinesis Video Streams makes it easy to securely stream video from connected devices to AWS for analytics, machine learning (ML), playback, and other processing.  For more details, see the [Amazon Kinesis Documentation](https://aws.amazon.com/documentation/kinesis/).",
        KINESIS_VideoStream.GetTypes(),
      ),
    ],
    [
      ResourceType.KINESISANALYTICSV2_APPLICATION,
      new ResourceProperty(
        "Manages a Kinesis Analytics v2 Application. This resource can be used to manage both Kinesis Data Analytics for SQL applications and Kinesis Data Analytics for Apache Flink applications.  > --Note:-- Kinesis Data Analytics for SQL applications created using this resource cannot currently be viewed in the AWS Console. To manage Kinesis Data Analytics for SQL applications that can also be viewed in the AWS Console, use the `aws.kinesis.AnalyticsApplication` resource.",
        KINESISANALYTICSV2_Application.GetTypes(),
      ),
    ],
    [
      ResourceType.KINESISANALYTICSV2_APPLICATIONSNAPSHOT,
      new ResourceProperty(
        "Manages a Kinesis Analytics v2 Application Snapshot. Snapshots are the AWS implementation of [Flink Savepoints](https://ci.apache.org/projects/flink/flink-docs-release-1.11/ops/state/savepoints.html).",
        KINESISANALYTICSV2_ApplicationSnapshot.GetTypes(),
      ),
    ],
    [
      ResourceType.KMS_ALIAS,
      new ResourceProperty(
        "Provides an alias for a KMS customer master key. AWS Console enforces 1-to-1 mapping between aliases & keys, but API (hence this provider too) allows you to create as many aliases as the [account limits](http://docs.aws.amazon.com/kms/latest/developerguide/limits.html) allow you.",
        KMS_Alias.GetTypes(),
      ),
    ],
    [
      ResourceType.KMS_CIPHERTEXT,
      new ResourceProperty(
        "The KMS ciphertext resource allows you to encrypt plaintext into ciphertext by using an AWS KMS customer master key. The value returned by this resource is stable across every apply. For a changing ciphertext value each apply, see the `aws.kms.Ciphertext` data source.",
        KMS_Ciphertext.GetTypes(),
      ),
    ],
    [
      ResourceType.KMS_CUSTOMKEYSTORE,
      new ResourceProperty(
        "Resource for managing an AWS KMS (Key Management) Custom Key Store.",
        KMS_CustomKeyStore.GetTypes(),
      ),
    ],
    [
      ResourceType.KMS_EXTERNALKEY,
      new ResourceProperty(
        "Manages a single-Region or multi-Region primary KMS key that uses external key material. To instead manage a single-Region or multi-Region primary KMS key where AWS automatically generates and potentially rotates key material, see the `aws.kms.Key` resource.",
        KMS_ExternalKey.GetTypes(),
      ),
    ],
    [
      ResourceType.KMS_GRANT,
      new ResourceProperty(
        "Provides a resource-based access control mechanism for a KMS customer master key.",
        KMS_Grant.GetTypes(),
      ),
    ],
    [
      ResourceType.KMS_KEY,
      new ResourceProperty(
        "Manages a single-Region or multi-Region primary KMS key.  > --NOTE on KMS Key Policy:-- KMS Key Policy can be configured in either the standalone resource `aws.kms.KeyPolicy` or with the parameter `policy` in this resource. Configuring with both will cause inconsistencies and may overwrite configuration.",
        KMS_Key.GetTypes(),
      ),
    ],
    [
      ResourceType.KMS_KEYPOLICY,
      new ResourceProperty(
        "Attaches a policy to a KMS Key.",
        KMS_KeyPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.KMS_REPLICAEXTERNALKEY,
      new ResourceProperty(
        "Manages a KMS multi-Region replica key that uses external key material. See the [AWS KMS Developer Guide](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-import.html) for more information on importing key material into multi-Region keys.",
        KMS_ReplicaExternalKey.GetTypes(),
      ),
    ],
    [
      ResourceType.KMS_REPLICAKEY,
      new ResourceProperty(
        "Manages a KMS multi-Region replica key.",
        KMS_ReplicaKey.GetTypes(),
      ),
    ],
    [
      ResourceType.LAKEFORMATION_DATACELLSFILTER,
      new ResourceProperty(
        "Resource for managing an AWS Lake Formation Data Cells Filter.",
        LAKEFORMATION_DataCellsFilter.GetTypes(),
      ),
    ],
    [
      ResourceType.LAKEFORMATION_DATALAKESETTINGS,
      new ResourceProperty(
        "Manages Lake Formation principals designated as data lake administrators and lists of principal permission entries for default create database and default create table permissions.  > --NOTE:-- Lake Formation introduces fine-grained access control for data in your data lake. Part of the changes include the `IAMAllowedPrincipals` principal in order to make Lake Formation backwards compatible with existing IAM and Glue permissions. For more information, see [Changing the Default Security Settings for Your Data Lake](https://docs.aws.amazon.com/lake-formation/latest/dg/change-settings.html) and [Upgrading AWS Glue Data Permissions to the AWS Lake Formation Model](https://docs.aws.amazon.com/lake-formation/latest/dg/upgrade-glue-lake-formation.html).",
        LAKEFORMATION_DataLakeSettings.GetTypes(),
      ),
    ],
    [
      ResourceType.LAKEFORMATION_LFTAG,
      new ResourceProperty(
        "Creates an LF-Tag with the specified name and values. Each key must have at least one value. The maximum number of values permitted is 1000.",
        LAKEFORMATION_LfTag.GetTypes(),
      ),
    ],
    [
      ResourceType.LAKEFORMATION_PERMISSIONS,
      new ResourceProperty(
        'Grants permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3. Permissions are granted to a principal, in a Data Catalog, relative to a Lake Formation resource, which includes the Data Catalog, databases, tables, LF-tags, and LF-tag policies. For more information, see [Security and Access Control to Metadata and Data in Lake Formation](https://docs.aws.amazon.com/lake-formation/latest/dg/security-data-access.html).  !> --WARNING:-- Lake Formation permissions are not in effect by default within AWS. Using this resource will not secure your data and will result in errors if you do not change the security settings for existing resources and the default security settings for new resources. See Default Behavior and `IAMAllowedPrincipals` for additional details.  > --NOTE:-- In general, the `principal` should _NOT_ be a Lake Formation administrator or the entity (e.g., IAM role) that is running the deployment. Administrators have implicit permissions. These should be managed by granting or not granting administrator rights using `aws.lakeformation.DataLakeSettings`, _not_ with this resource.  ## Default Behavior and `IAMAllowedPrincipals`  --_Lake Formation permissions are not in effect by default within AWS._-- `IAMAllowedPrincipals` (i.e., `IAM_ALLOWED_PRINCIPALS`) conflicts with individual Lake Formation permissions (i.e., non-`IAMAllowedPrincipals` permissions), will cause unexpected behavior, and may result in errors.  When using Lake Formation, choose ONE of the following options as they are mutually exclusive:  1. Use this resource (`aws.lakeformation.Permissions`), change the default security settings using `aws.lakeformation.DataLakeSettings`, and remove existing `IAMAllowedPrincipals` permissions 2. Use `IAMAllowedPrincipals` without `aws.lakeformation.Permissions`  This example shows removing the `IAMAllowedPrincipals` default security settings and making the caller a Lake Formation admin. Since `create_database_default_permissions` and `create_table_default_permissions` are not set in the `aws.lakeformation.DataLakeSettings` resource, they are cleared.  <!--Start PulumiCodeChooser --> ```typescript import - as pulumi from "@pulumi/pulumi"; import - as aws from "@pulumi/aws";  const current = aws.getCallerIdentity({}); const currentGetSessionContext = current.then(current => aws.iam.getSessionContext({     arn: current.arn, })); const test = new aws.lakeformation.DataLakeSettings("test", {admins: [currentGetSessionContext.then(currentGetSessionContext => currentGetSessionContext.issuerArn)]}); ``` ```python import pulumi import pulumi_aws as aws  current = aws.get_caller_identity() current_get_session_context = aws.iam.get_session_context(arn=current.arn) test = aws.lakeformation.DataLakeSettings("test", admins=[current_get_session_context.issuer_arn]) ``` ```csharp using System.Collections.Generic; using System.Linq; using Pulumi; using Aws = Pulumi.Aws;  return await Deployment.RunAsync(() =>  {     var current = Aws.GetCallerIdentity.Invoke();      var currentGetSessionContext = Aws.Iam.GetSessionContext.Invoke(new()     {         Arn = current.Apply(getCallerIdentityResult => getCallerIdentityResult.Arn),     });      var test = new Aws.LakeFormation.DataLakeSettings("test", new()     {         Admins = new[]         {             currentGetSessionContext.Apply(getSessionContextResult => getSessionContextResult.IssuerArn),         },     });  }); ``` ```go package main  import ( 	"github.com/pulumi/pulumi-aws/sdk/v6/go/aws" 	"github.com/pulumi/pulumi-aws/sdk/v6/go/aws/iam" 	"github.com/pulumi/pulumi-aws/sdk/v6/go/aws/lakeformation" 	"github.com/pulumi/pulumi/sdk/v3/go/pulumi" )  func main() { 	pulumi.Run(func(ctx -pulumi.Context) error { 		current, err := aws.GetCallerIdentity(ctx, nil, nil) 		if err != nil { 			return err 		} 		currentGetSessionContext, err := iam.GetSessionContext(ctx, &iam.GetSessionContextArgs{ 			Arn: current.Arn, 		}, nil) 		if err != nil { 			return err 		} 		_, err = lakeformation.NewDataLakeSettings(ctx, "test", &lakeformation.DataLakeSettingsArgs{ 			Admins: pulumi.StringArray{ 				pulumi.String(currentGetSessionContext.IssuerArn), 			}, 		}) 		if err != nil { 			return err 		} 		return nil 	}) } ``` ```java package generated_program;  import com.pulumi.Context; import com.pulumi.Pulumi; import com.pulumi.core.Output; import com.pulumi.aws.AwsFunctions; import com.pulumi.aws.inputs.GetCallerIdentityArgs; import com.pulumi.aws.iam.IamFunctions; import com.pulumi.aws.iam.inputs.GetSessionContextArgs; import com.pulumi.aws.lakeformation.DataLakeSettings; import com.pulumi.aws.lakeformation.DataLakeSettingsArgs; import java.util.List; import java.util.ArrayList; import java.util.Map; import java.io.File; import java.nio.file.Files; import java.nio.file.Paths;  public class App {     public static void main(String[] args) {         Pulumi.run(App::stack);     }      public static void stack(Context ctx) {         final var current = AwsFunctions.getCallerIdentity();          final var currentGetSessionContext = IamFunctions.getSessionContext(GetSessionContextArgs.builder()             .arn(current.applyValue(getCallerIdentityResult -> getCallerIdentityResult.arn()))             .build());          var test = new DataLakeSettings("test", DataLakeSettingsArgs.builder()             .admins(currentGetSessionContext.applyValue(getSessionContextResult -> getSessionContextResult.issuerArn()))             .build());      } } ``` ```yaml resources:   test:     type: aws:lakeformation:DataLakeSettings     properties:       admins:         - ${currentGetSessionContext.issuerArn} variables:   current:     fn::invoke:       Function: aws:getCallerIdentity       Arguments: {}   currentGetSessionContext:     fn::invoke:       Function: aws:iam:getSessionContext       Arguments:         arn: ${current.arn} ``` <!--End PulumiCodeChooser -->  To remove existing `IAMAllowedPrincipals` permissions, use the [AWS Lake Formation Console](https://console.aws.amazon.com/lakeformation/) or [AWS CLI](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/lakeformation/batch-revoke-permissions.html).  `IAMAllowedPrincipals` is a hook to maintain backwards compatibility with AWS Glue. `IAMAllowedPrincipals` is a pseudo-entity group that acts like a Lake Formation principal. The group includes any IAM users and roles that are allowed access to your Data Catalog resources by your IAM policies.  This is Lake Formation\'s default behavior:  - Lake Formation grants `Super` permission to `IAMAllowedPrincipals` on all existing AWS Glue Data Catalog resources. - Lake Formation enables "Use only IAM access control" for new Data Catalog resources.  For more details, see [Changing the Default Security Settings for Your Data Lake](https://docs.aws.amazon.com/lake-formation/latest/dg/change-settings.html).  ### Problem Using `IAMAllowedPrincipals`  AWS does not support combining `IAMAllowedPrincipals` permissions and non-`IAMAllowedPrincipals` permissions. Doing so results in unexpected permissions and behaviors. For example, this configuration grants a user `SELECT` on a column in a table.  <!--Start PulumiCodeChooser --> ```typescript import - as pulumi from "@pulumi/pulumi"; import - as aws from "@pulumi/aws";  const example = new aws.glue.CatalogDatabase("example", {name: "sadabate"}); const exampleCatalogTable = new aws.glue.CatalogTable("example", {     name: "abelt",     databaseName: test.name,     storageDescriptor: {         columns: [{             name: "event",             type: "string",         }],     }, }); const examplePermissions = new aws.lakeformation.Permissions("example", {     permissions: ["SELECT"],     principal: "arn:aws:iam:us-east-1:123456789012:user/SanHolo",     tableWithColumns: {         databaseName: exampleCatalogTable.databaseName,         name: exampleCatalogTable.name,         columnNames: ["event"],     }, }); ``` ```python import pulumi import pulumi_aws as aws  example = aws.glue.CatalogDatabase("example", name="sadabate") example_catalog_table = aws.glue.CatalogTable("example",     name="abelt",     database_name=test["name"],     storage_descriptor={         "columns": [{             "name": "event",             "type": "string",         }],     }) example_permissions = aws.lakeformation.Permissions("example",     permissions=["SELECT"],     principal="arn:aws:iam:us-east-1:123456789012:user/SanHolo",     table_with_columns={         "database_name": example_catalog_table.database_name,         "name": example_catalog_table.name,         "column_names": ["event"],     }) ``` ```csharp using System.Collections.Generic; using System.Linq; using Pulumi; using Aws = Pulumi.Aws;  return await Deployment.RunAsync(() =>  {     var example = new Aws.Glue.CatalogDatabase("example", new()     {         Name = "sadabate",     });      var exampleCatalogTable = new Aws.Glue.CatalogTable("example", new()     {         Name = "abelt",         DatabaseName = test.Name,         StorageDescriptor = new Aws.Glue.Inputs.CatalogTableStorageDescriptorArgs         {             Columns = new[]             {                 new Aws.Glue.Inputs.CatalogTableStorageDescriptorColumnArgs                 {                     Name = "event",                     Type = "string",                 },             },         },     });      var examplePermissions = new Aws.LakeFormation.Permissions("example", new()     {         PermissionDetails = new[]         {             "SELECT",         },         Principal = "arn:aws:iam:us-east-1:123456789012:user/SanHolo",         TableWithColumns = new Aws.LakeFormation.Inputs.PermissionsTableWithColumnsArgs         {             DatabaseName = exampleCatalogTable.DatabaseName,             Name = exampleCatalogTable.Name,             ColumnNames = new[]             {                 "event",             },         },     });  }); ``` ```go package main  import ( 	"github.com/pulumi/pulumi-aws/sdk/v6/go/aws/glue" 	"github.com/pulumi/pulumi-aws/sdk/v6/go/aws/lakeformation" 	"github.com/pulumi/pulumi/sdk/v3/go/pulumi" )  func main() { 	pulumi.Run(func(ctx -pulumi.Context) error { 		_, err := glue.NewCatalogDatabase(ctx, "example", &glue.CatalogDatabaseArgs{ 			Name: pulumi.String("sadabate"), 		}) 		if err != nil { 			return err 		} 		exampleCatalogTable, err := glue.NewCatalogTable(ctx, "example", &glue.CatalogTableArgs{ 			Name:         pulumi.String("abelt"), 			DatabaseName: pulumi.Any(test.Name), 			StorageDescriptor: &glue.CatalogTableStorageDescriptorArgs{ 				Columns: glue.CatalogTableStorageDescriptorColumnArray{ 					&glue.CatalogTableStorageDescriptorColumnArgs{ 						Name: pulumi.String("event"), 						Type: pulumi.String("string"), 					}, 				}, 			}, 		}) 		if err != nil { 			return err 		} 		_, err = lakeformation.NewPermissions(ctx, "example", &lakeformation.PermissionsArgs{ 			Permissions: pulumi.StringArray{ 				pulumi.String("SELECT"), 			}, 			Principal: pulumi.String("arn:aws:iam:us-east-1:123456789012:user/SanHolo"), 			TableWithColumns: &lakeformation.PermissionsTableWithColumnsArgs{ 				DatabaseName: exampleCatalogTable.DatabaseName, 				Name:         exampleCatalogTable.Name, 				ColumnNames: pulumi.StringArray{ 					pulumi.String("event"), 				}, 			}, 		}) 		if err != nil { 			return err 		} 		return nil 	}) } ``` ```java package generated_program;  import com.pulumi.Context; import com.pulumi.Pulumi; import com.pulumi.core.Output; import com.pulumi.aws.glue.CatalogDatabase; import com.pulumi.aws.glue.CatalogDatabaseArgs; import com.pulumi.aws.glue.CatalogTable; import com.pulumi.aws.glue.CatalogTableArgs; import com.pulumi.aws.glue.inputs.CatalogTableStorageDescriptorArgs; import com.pulumi.aws.lakeformation.Permissions; import com.pulumi.aws.lakeformation.PermissionsArgs; import com.pulumi.aws.lakeformation.inputs.PermissionsTableWithColumnsArgs; import java.util.List; import java.util.ArrayList; import java.util.Map; import java.io.File; import java.nio.file.Files; import java.nio.file.Paths;  public class App {     public static void main(String[] args) {         Pulumi.run(App::stack);     }      public static void stack(Context ctx) {         var example = new CatalogDatabase("example", CatalogDatabaseArgs.builder()             .name("sadabate")             .build());          var exampleCatalogTable = new CatalogTable("exampleCatalogTable", CatalogTableArgs.builder()             .name("abelt")             .databaseName(test.name())             .storageDescriptor(CatalogTableStorageDescriptorArgs.builder()                 .columns(CatalogTableStorageDescriptorColumnArgs.builder()                     .name("event")                     .type("string")                     .build())                 .build())             .build());          var examplePermissions = new Permissions("examplePermissions", PermissionsArgs.builder()             .permissions("SELECT")             .principal("arn:aws:iam:us-east-1:123456789012:user/SanHolo")             .tableWithColumns(PermissionsTableWithColumnsArgs.builder()                 .databaseName(exampleCatalogTable.databaseName())                 .name(exampleCatalogTable.name())                 .columnNames("event")                 .build())             .build());      } } ``` ```yaml resources:   example:     type: aws:glue:CatalogDatabase     properties:       name: sadabate   exampleCatalogTable:     type: aws:glue:CatalogTable     name: example     properties:       name: abelt       databaseName: ${test.name}       storageDescriptor:         columns:           - name: event             type: string   examplePermissions:     type: aws:lakeformation:Permissions     name: example     properties:       permissions:         - SELECT       principal: arn:aws:iam:us-east-1:123456789012:user/SanHolo       tableWithColumns:         databaseName: ${exampleCatalogTable.databaseName}         name: ${exampleCatalogTable.name}         columnNames:           - event ``` <!--End PulumiCodeChooser -->  The resulting permissions depend on whether the table had `IAMAllowedPrincipals` (IAP) permissions or not.  | Result With IAP | Result Without IAP | | ---- | ---- | | `SELECT` column wildcard (i.e., all columns) | `SELECT` on `"event"` (as expected) |  ## Using Lake Formation Permissions  Lake Formation grants implicit permissions to data lake administrators, database creators, and table creators. These implicit permissions cannot be revoked _per se_. If this resource reads implicit permissions, it will attempt to revoke them, which causes an error when the resource is destroyed.  There are two ways to avoid these errors. First, and the way we recommend, is to avoid using this resource with principals that have implicit permissions. A second, error-prone option, is to grant explicit permissions (and `permissions_with_grant_option`) to "overwrite" a principal\'s implicit permissions, which you can then revoke with this resource. For more information, see [Implicit Lake Formation Permissions](https://docs.aws.amazon.com/lake-formation/latest/dg/implicit-permissions.html).  If the `principal` is also a data lake administrator, AWS grants implicit permissions that can cause errors using this resource. For example, AWS implicitly grants a `principal`/administrator `permissions` and `permissions_with_grant_option` of `ALL`, `ALTER`, `DELETE`, `DESCRIBE`, `DROP`, `INSERT`, and `SELECT` on a table. If you use this resource to explicitly grant the `principal`/administrator `permissions` but _not_ `permissions_with_grant_option` of `ALL`, `ALTER`, `DELETE`, `DESCRIBE`, `DROP`, `INSERT`, and `SELECT` on the table, this resource will read the implicit `permissions_with_grant_option` and attempt to revoke them when the resource is destroyed. Doing so will cause an `InvalidInputException: No permissions revoked` error because you cannot revoke implicit permissions _per se_. To workaround this problem, explicitly grant the `principal`/administrator `permissions` _and_ `permissions_with_grant_option`, which can then be revoked. Similarly, granting a `principal`/administrator permissions on a table with columns and providing `column_names`, will result in a `InvalidInputException: Permissions modification is invalid` error because you are narrowing the implicit permissions. Instead, set `wildcard` to `true` and remove the `column_names`.',
        LAKEFORMATION_Permissions.GetTypes(),
      ),
    ],
    [
      ResourceType.LAKEFORMATION_RESOURCE,
      new ResourceProperty(
        "Registers a Lake Formation resource (e.g., S3 bucket) as managed by the Data Catalog. In other words, the S3 path is added to the data lake.  Choose a role that has read/write access to the chosen Amazon S3 path or use the service-linked role. When you register the S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy.",
        LAKEFORMATION_Resource.GetTypes(),
      ),
    ],
    [
      ResourceType.LAKEFORMATION_RESOURCELFTAG,
      new ResourceProperty(
        "Resource for managing an AWS Lake Formation Resource LF Tag.",
        LAKEFORMATION_ResourceLfTag.GetTypes(),
      ),
    ],
    [
      ResourceType.LAKEFORMATION_RESOURCELFTAGS,
      new ResourceProperty(
        "Manages an attachment between one or more existing LF-tags and an existing Lake Formation resource.",
        LAKEFORMATION_ResourceLfTags.GetTypes(),
      ),
    ],
    [
      ResourceType.LAMBDA_ALIAS,
      new ResourceProperty(
        "Creates a Lambda function alias. Creates an alias that points to the specified Lambda function version.  For information about Lambda and how to use it, see [What is AWS Lambda?](http://docs.aws.amazon.com/lambda/latest/dg/welcome.html) For information about function aliases, see [CreateAlias](http://docs.aws.amazon.com/lambda/latest/dg/API_CreateAlias.html) and [AliasRoutingConfiguration](https://docs.aws.amazon.com/lambda/latest/dg/API_AliasRoutingConfiguration.html) in the API docs.",
        LAMBDA_Alias.GetTypes(),
      ),
    ],
    [
      ResourceType.LAMBDA_CALLBACKFUNCTION,
      new ResourceProperty(
        'A CallbackFunction is a special type of `aws.lambda.Function` that can be created out of an actual JavaScript function instance. The Pulumi compiler and runtime work in tandem to extract your function, package it up along with its dependencies, upload the package to AWS Lambda, and configure the resulting AWS Lambda resources automatically.  The JavaScript function may capture references to other variables in the surrounding code, including other resources and even imported modules. The Pulumi compiler figures out how to serialize the resulting closure as it uploads and configures the AWS Lambda. This works even if you are composing multiple functions together.  See [Function Serialization](https://www.pulumi.com/docs/concepts/inputs-outputs/function-serialization/) for additional details on this process.  ### Lambda Function Handler  You can provide the JavaScript function used for the Lambda Function\'s Handler either directly by setting the `callback` input property or instead specify the `callbackFactory`, which is a Javascript function that will be called to produce the callback function that is the entrypoint for the AWS Lambda. Using `callbackFactory` is useful when there is expensive initialization work that should only be executed once. The factory-function will be invoked once when the final AWS Lambda module is loaded. It can run whatever code it needs, and will end by returning the actual function that Lambda will call into each time the Lambda is invoked.  It is recommended to use an async function, otherwise the Lambda execution will run until the `callback` parameter is called and the event loop is empty. See [Define Lambda function handler in Node.js](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html) for additional details.  ### Lambda Function Permissions  If neither `role` nor `policies` is specified, `CallbackFunction` will create an IAM role and automatically use the following managed policies: - `AWSLambda_FullAccess` - `CloudWatchFullAccessV2` - `CloudWatchEventsFullAccess` - `AmazonS3FullAccess` - `AmazonDynamoDBFullAccess` - `AmazonSQSFullAccess` - `AmazonKinesisFullAccess` - `AWSCloudFormationReadOnlyAccess` - `AmazonCognitoPowerUser` - `AWSXrayWriteOnlyAccess`  ### Customizing Lambda function attributes  The Lambdas created by `aws.lambda.CallbackFunction` use reasonable defaults for CPU, memory, IAM, logging, and other configuration. Should you need to customize these settings, the `aws.lambda.CallbackFunction` resource offers all of the underlying AWS Lambda settings.  For example, to increase the RAM available to your function to 256MB:  ```typescript import - as aws from "@pulumi/aws";  // Create an AWS Lambda function with 256MB RAM const lambda = new aws.lambda.CallbackFunction("docsHandlerFunc", {     callback: async(event: aws.s3.BucketEvent) => {         // ...     },      memorySize: 256 /- MB -/, }); ```  ### Adding/removing files from a function bundle  Occasionally you may need to customize the contents of function bundle before uploading it to AWS Lambda --- for example, to remove unneeded Node.js modules or add certain files or folders to the bundle explicitly. The `codePathOptions` property of `CallbackFunction` allows you to do this.  In this example, a local directory `./config` is added to the function bundle, while an unneeded Node.js module `mime` is removed:  ```typescript import - as aws from "@pulumi/aws"; import - as fs from "fs";  const lambda = new aws.lambda.CallbackFunction("docsHandlerFunc", {     callback: async(event: aws.s3.BucketEvent) => {         // ...     },      codePathOptions: {          // Add local files or folders to the Lambda function bundle.         extraIncludePaths: [             "./config",         ],          // Remove unneeded Node.js packages from the bundle.         extraExcludePackages: [             "mime",         ],     }, }); ```  ### Using Lambda layers {#lambda-layers}  [Lambda layers](https://docs.aws.amazon.com/lambda/latest/dg/chapter-layers.html) allow you to share code, configuration, and other assets across multiple Lambda functions. At runtime, AWS Lambda extracts these files into the function\'s filesystem, where you can access their contents as though they belonged to the function bundle itself.  Layers are managed with the [`aws.lambda.LayerVersion`](/registry/packages/aws/api-docs/lambda/layerversion/) resource, and you can attach them to as many `lambda.Function` or `lambda.CallbackFunction` resources as you need using the function\'s `layers` property. Here, the preceding program is updated to package the `./config` folder as a Lambda layer instead:  ```typescript import - as pulumi from "@pulumi/pulumi"; import - as aws from "@pulumi/aws"; import - as fs from "fs";  // Create a Lambda layer containing some shared configuration. const configLayer = new aws.lambda.LayerVersion("config-layer", {     layerName: "my-config-layer",      // Use a Pulumi AssetArchive to zip up the contents of the folder.     code: new pulumi.asset.AssetArchive({         "config": new pulumi.asset.FileArchive("./config"),     }), });  const lambda = new aws.lambda.CallbackFunction("docsHandlerFunc", {     callback: async(event: aws.s3.BucketEvent) => {         // ...     },      // Attach the config layer to the function.     layers: [         configLayer.arn,     ], }); ```  Notice the path to the file is now `/opt/config/config.json` --- `/opt` being the path at which AWS Lambda extracts the contents of a layer. The configuration layer is now manageable and deployable independently of the Lambda itself, allowing changes to be applied immediately across all functions that use it.  #### Using layers for Node.js dependencies  This same approach can be used for sharing Node.js module dependencies. When you package your dependencies [at the proper path](https://docs.aws.amazon.com/lambda/latest/dg/packaging-layers.html) within the layer zip file, (e.g., `nodejs/node_modules`), AWS Lambda will unpack and expose them automatically to the functions that use them at runtime. This approach can be useful in monorepo scenarios such as the example below, which adds a locally built Node.js module as a layer, then references references the module from within the body of a `CallbackFunction`:  ```typescript import - as pulumi from "@pulumi/pulumi"; import - as aws from "@pulumi/aws";  // Create a layer containing a locally built Node.js module. const utilsLayer = new aws.lambda.LayerVersion("utils-layer", {     layerName: "utils",     code: new pulumi.asset.AssetArchive({          // Store the module under nodejs/node_modules to make it available         // on the Node.js module path.         "nodejs/node_modules/@my-alias/utils": new pulumi.asset.FileArchive("./layers/utils/dist"),     }), });  const lambda =  new aws.lambda.CallbackFunction("docsHandlerFunc", {     callback: async (event: aws.s3.BucketEvent) => {          // Import the module from the layer at runtime.         const { sayHello } = await import("@my-alias/utils");          // Call a function from the utils module.         console.log(sayHello());     },      // Attach the utils layer to the function.     layers: [         utilsLayer.arn,     ], }); ```  Notice the example uses the module name `@my-alias/utils`. To make this work, you\'ll need to add a few lines to your Pulumi project\'s `tsconfig.json` file to map your chosen module name to the path of the module\'s TypeScript source code:  ```javascript {     "compilerOptions": {         // ...         "baseUrl": ".",         "paths": {             "@my-alias/utils": [                 "./layers/utils"             ]         }     },     // ... } ```   {{% examples %}}',
        LAMBDA_CallbackFunction.GetTypes(),
      ),
    ],
    [
      ResourceType.LAMBDA_CODESIGNINGCONFIG,
      new ResourceProperty(
        "Provides a Lambda Code Signing Config resource. A code signing configuration defines a list of allowed signing profiles and defines the code-signing validation policy (action to be taken if deployment validation checks fail).  For information about Lambda code signing configurations and how to use them, see [configuring code signing for Lambda functions](https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html)",
        LAMBDA_CodeSigningConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.LAMBDA_EVENTSOURCEMAPPING,
      new ResourceProperty(
        "Provides a Lambda event source mapping. This allows Lambda functions to get events from Kinesis, DynamoDB, SQS, Amazon MQ and Managed Streaming for Apache Kafka (MSK).  For information about Lambda and how to use it, see [What is AWS Lambda?](http://docs.aws.amazon.com/lambda/latest/dg/welcome.html). For information about event source mappings, see [CreateEventSourceMapping](http://docs.aws.amazon.com/lambda/latest/dg/API_CreateEventSourceMapping.html) in the API docs.",
        LAMBDA_EventSourceMapping.GetTypes(),
      ),
    ],
    [
      ResourceType.LAMBDA_FUNCTION,
      new ResourceProperty(
        "Provides a Lambda Function resource. Lambda allows you to trigger execution of code in response to events in AWS, enabling serverless backend solutions. The Lambda Function itself includes source code and runtime configuration.  For information about Lambda and how to use it, see [What is AWS Lambda?](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)   > --NOTE:-- Due to [AWS Lambda improved VPC networking changes that began deploying in September 2019](https://aws.amazon.com/blogs/compute/announcing-improved-vpc-networking-for-aws-lambda-functions/), EC2 subnets and security groups associated with Lambda Functions can take up to 45 minutes to successfully delete. To allow for successful deletion, the provider will wait for at least 45 minutes even if a shorter delete timeout is specified.  > --NOTE:-- If you get a `KMSAccessDeniedException: Lambda was unable to decrypt the environment variables because KMS access was denied` error when invoking an `aws.lambda.Function` with environment variables, the IAM role associated with the function may have been deleted and recreated _after_ the function was created. You can fix the problem two ways: 1) updating the function's role to another role and then updating it back again to the recreated role, or 2) by using Pulumi to `taint` the function and `apply` your configuration again to recreate the function. (When you create a function, Lambda grants permissions on the KMS key to the function's IAM role. If the IAM role is recreated, the grant is no longer valid. Changing the function's role or recreating the function causes Lambda to update the grant.)  > To give an external source (like an EventBridge Rule, SNS, or S3) permission to access the Lambda function, use the `aws.lambda.Permission` resource. See [Lambda Permission Model](https://docs.aws.amazon.com/lambda/latest/dg/intro-permission-model.html) for more details. On the other hand, the `role` argument of this resource is the function's execution role for identity and access to AWS services and resources.",
        LAMBDA_Function.GetTypes(),
      ),
    ],
    [
      ResourceType.LAMBDA_FUNCTIONEVENTINVOKECONFIG,
      new ResourceProperty(
        "Manages an asynchronous invocation configuration for a Lambda Function or Alias. More information about asynchronous invocations and the configurable values can be found in the [Lambda Developer Guide](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html).",
        LAMBDA_FunctionEventInvokeConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.LAMBDA_FUNCTIONURL,
      new ResourceProperty(
        "Provides a Lambda function URL resource. A function URL is a dedicated HTTP(S) endpoint for a Lambda function.  See the [AWS Lambda documentation](https://docs.aws.amazon.com/lambda/latest/dg/lambda-urls.html) for more information.",
        LAMBDA_FunctionUrl.GetTypes(),
      ),
    ],
    [
      ResourceType.LAMBDA_INVOCATION,
      new ResourceProperty(
        "Use this resource to invoke a lambda function. The lambda function is invoked with the [RequestResponse](https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html#API_Invoke_RequestSyntax) invocation type.  > --NOTE:-- By default this resource _only_ invokes the function when the arguments call for a create or replace. In other words, after an initial invocation on _apply_, if the arguments do not change, a subsequent _apply_ does not invoke the function again. To dynamically invoke the function, see the `triggers` example below. To always invoke a function on each _apply_, see the `aws.lambda.Invocation` data source. To invoke the lambda function when the Pulumi resource is updated and deleted, see the CRUD Lifecycle Scope example below.  > --NOTE:-- If you get a `KMSAccessDeniedException: Lambda was unable to decrypt the environment variables because KMS access was denied` error when invoking an `aws.lambda.Function` with environment variables, the IAM role associated with the function may have been deleted and recreated _after_ the function was created. You can fix the problem two ways: 1) updating the function's role to another role and then updating it back again to the recreated role, or 2) by using Pulumi to `taint` the function and `apply` your configuration again to recreate the function. (When you create a function, Lambda grants permissions on the KMS key to the function's IAM role. If the IAM role is recreated, the grant is no longer valid. Changing the function's role or recreating the function causes Lambda to update the grant.)",
        LAMBDA_Invocation.GetTypes(),
      ),
    ],
    [
      ResourceType.LAMBDA_LAYERVERSION,
      new ResourceProperty(
        "Provides a Lambda Layer Version resource. Lambda Layers allow you to reuse shared bits of code across multiple lambda functions.  For information about Lambda Layers and how to use them, see [AWS Lambda Layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html).  > --NOTE:-- Setting `skip_destroy` to `true` means that the AWS Provider will _not_ destroy any layer version, even when running destroy. Layer versions are thus intentional dangling resources that are _not_ managed by the provider and may incur extra expense in your AWS account.",
        LAMBDA_LayerVersion.GetTypes(),
      ),
    ],
    [
      ResourceType.LAMBDA_LAYERVERSIONPERMISSION,
      new ResourceProperty(
        "Provides a Lambda Layer Version Permission resource. It allows you to share you own Lambda Layers to another account by account ID, to all accounts in AWS organization or even to all AWS accounts.  For information about Lambda Layer Permissions and how to use them, see [Using Resource-based Policies for AWS Lambda][1]  > --NOTE:-- Setting `skip_destroy` to `true` means that the AWS Provider will _not_ destroy any layer version permission, even when running `pulumi destroy`. Layer version permissions are thus intentional dangling resources that are _not_ managed by Pulumi and may incur extra expense in your AWS account.",
        LAMBDA_LayerVersionPermission.GetTypes(),
      ),
    ],
    [
      ResourceType.LAMBDA_PERMISSION,
      new ResourceProperty(
        "Gives an external source (like an EventBridge Rule, SNS, or S3) permission to access the Lambda function.",
        LAMBDA_Permission.GetTypes(),
      ),
    ],
    [
      ResourceType.LAMBDA_PROVISIONEDCONCURRENCYCONFIG,
      new ResourceProperty(
        "Manages a Lambda Provisioned Concurrency Configuration.  > --NOTE:-- Setting `skip_destroy` to `true` means that the AWS Provider will _not_ destroy a provisioned concurrency configuration, even when running `pulumi destroy`. The configuration is thus an intentional dangling resource that is _not_ managed by Pulumi and may incur extra expense in your AWS account.",
        LAMBDA_ProvisionedConcurrencyConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.LAMBDA_RUNTIMEMANAGEMENTCONFIG,
      new ResourceProperty(
        "Resource for managing an AWS Lambda Runtime Management Config.  Refer to the [AWS Lambda documentation](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html) for supported runtimes.  > Deletion of this resource returns the runtime update mode to `Auto` (the default behavior). To leave the configured runtime management options in-place, use a `removed` block with the destroy lifecycle set to `false`.",
        LAMBDA_RuntimeManagementConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.LB_LISTENER,
      new ResourceProperty(
        "Provides a Load Balancer Listener resource.  > --Note:-- `aws.alb.Listener` is known as `aws.lb.Listener`. The functionality is identical.",
        LB_Listener.GetTypes(),
      ),
    ],
    [
      ResourceType.LB_LISTENERCERTIFICATE,
      new ResourceProperty(
        "Provides a Load Balancer Listener Certificate resource.  This resource is for additional certificates and does not replace the default certificate on the listener.  > --Note:-- `aws.alb.ListenerCertificate` is known as `aws.lb.ListenerCertificate`. The functionality is identical.",
        LB_ListenerCertificate.GetTypes(),
      ),
    ],
    [
      ResourceType.LB_LISTENERRULE,
      new ResourceProperty(
        "Provides a Load Balancer Listener Rule resource.  > --Note:-- `aws.alb.ListenerRule` is known as `aws.lb.ListenerRule`. The functionality is identical.",
        LB_ListenerRule.GetTypes(),
      ),
    ],
    [
      ResourceType.LB_LOADBALANCER,
      new ResourceProperty(
        "Provides a Load Balancer resource.  > --Note:-- `aws.alb.LoadBalancer` is known as `aws.lb.LoadBalancer`. The functionality is identical.",
        LB_LoadBalancer.GetTypes(),
      ),
    ],
    [
      ResourceType.LB_TARGETGROUP,
      new ResourceProperty(
        "Provides a Target Group resource for use with Load Balancer resources.  > --Note:-- `aws.alb.TargetGroup` is known as `aws.lb.TargetGroup`. The functionality is identical.",
        LB_TargetGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.LB_TARGETGROUPATTACHMENT,
      new ResourceProperty(
        "Provides the ability to register instances and containers with an Application Load Balancer (ALB) or Network Load Balancer (NLB) target group. For attaching resources with Elastic Load Balancer (ELB), see the `aws.elb.Attachment` resource.  > --Note:-- `aws.alb.TargetGroupAttachment` is known as `aws.lb.TargetGroupAttachment`. The functionality is identical.",
        LB_TargetGroupAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.LB_TRUSTSTORE,
      new ResourceProperty(
        "Provides a ELBv2 Trust Store for use with Application Load Balancer Listener resources.",
        LB_TrustStore.GetTypes(),
      ),
    ],
    [
      ResourceType.LB_TRUSTSTOREREVOCATION,
      new ResourceProperty(
        "Provides a ELBv2 Trust Store Revocation for use with Application Load Balancer Listener resources.",
        LB_TrustStoreRevocation.GetTypes(),
      ),
    ],
    [
      ResourceType.LEX_BOT,
      new ResourceProperty(
        "Provides an Amazon Lex Bot resource. For more information see [Amazon Lex: How It Works](https://docs.aws.amazon.com/lex/latest/dg/how-it-works.html)",
        LEX_Bot.GetTypes(),
      ),
    ],
    [
      ResourceType.LEX_BOTALIAS,
      new ResourceProperty(
        "Provides an Amazon Lex Bot Alias resource. For more information see [Amazon Lex: How It Works](https://docs.aws.amazon.com/lex/latest/dg/how-it-works.html)",
        LEX_BotAlias.GetTypes(),
      ),
    ],
    [
      ResourceType.LEX_INTENT,
      new ResourceProperty(
        "Provides an Amazon Lex Intent resource. For more information see [Amazon Lex: How It Works](https://docs.aws.amazon.com/lex/latest/dg/how-it-works.html)",
        LEX_Intent.GetTypes(),
      ),
    ],
    [
      ResourceType.LEX_SLOTTYPE,
      new ResourceProperty(
        "Provides an Amazon Lex Slot Type resource. For more information see [Amazon Lex: How It Works](https://docs.aws.amazon.com/lex/latest/dg/how-it-works.html)",
        LEX_SlotType.GetTypes(),
      ),
    ],
    [
      ResourceType.LEX_V2MODELSBOT,
      new ResourceProperty(
        "Resource for managing an AWS Lex V2 Models Bot.",
        LEX_V2modelsBot.GetTypes(),
      ),
    ],
    [
      ResourceType.LEX_V2MODELSBOTLOCALE,
      new ResourceProperty(
        "Resource for managing an AWS Lex V2 Models Bot Locale.",
        LEX_V2modelsBotLocale.GetTypes(),
      ),
    ],
    [
      ResourceType.LEX_V2MODELSBOTVERSION,
      new ResourceProperty(
        "Resource for managing an AWS Lex V2 Models Bot Version.",
        LEX_V2modelsBotVersion.GetTypes(),
      ),
    ],
    [
      ResourceType.LEX_V2MODELSINTENT,
      new ResourceProperty("", LEX_V2modelsIntent.GetTypes()),
    ],
    [
      ResourceType.LEX_V2MODELSSLOT,
      new ResourceProperty(
        "Resource for managing an AWS Lex V2 Models Slot.",
        LEX_V2modelsSlot.GetTypes(),
      ),
    ],
    [
      ResourceType.LEX_V2MODELSSLOTTYPE,
      new ResourceProperty(
        "Resource for managing an AWS Lex V2 Models Slot Type.",
        LEX_V2modelsSlotType.GetTypes(),
      ),
    ],
    [
      ResourceType.LICENSEMANAGER_ASSOCIATION,
      new ResourceProperty(
        "Provides a License Manager association.  > --Note:-- License configurations can also be associated with launch templates by specifying the `license_specifications` block for an `aws.ec2.LaunchTemplate`.",
        LICENSEMANAGER_Association.GetTypes(),
      ),
    ],
    [
      ResourceType.LICENSEMANAGER_LICENSECONFIGURATION,
      new ResourceProperty(
        "Provides a License Manager license configuration resource.  > --Note:-- Removing the `license_count` attribute is not supported by the License Manager API.",
        LICENSEMANAGER_LicenseConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.LICENSEMANAGER_LICENSEGRANT,
      new ResourceProperty(
        "Provides a License Manager grant. This allows for sharing licenses with other AWS accounts.",
        LICENSEMANAGER_LicenseGrant.GetTypes(),
      ),
    ],
    [
      ResourceType.LICENSEMANAGER_LICENSEGRANTACCEPTER,
      new ResourceProperty(
        "Accepts a License Manager grant. This allows for sharing licenses with other aws accounts.",
        LICENSEMANAGER_LicenseGrantAccepter.GetTypes(),
      ),
    ],
    [
      ResourceType.LIGHTSAIL_BUCKET,
      new ResourceProperty(
        "Provides a lightsail bucket.",
        LIGHTSAIL_Bucket.GetTypes(),
      ),
    ],
    [
      ResourceType.LIGHTSAIL_BUCKETACCESSKEY,
      new ResourceProperty(
        "Provides a lightsail bucket access key. This is a set of credentials that allow API requests to be made to the lightsail bucket.",
        LIGHTSAIL_BucketAccessKey.GetTypes(),
      ),
    ],
    [
      ResourceType.LIGHTSAIL_BUCKETRESOURCEACCESS,
      new ResourceProperty(
        "Provides a lightsail resource access to a bucket.",
        LIGHTSAIL_BucketResourceAccess.GetTypes(),
      ),
    ],
    [
      ResourceType.LIGHTSAIL_CERTIFICATE,
      new ResourceProperty(
        "Provides a lightsail certificate.",
        LIGHTSAIL_Certificate.GetTypes(),
      ),
    ],
    [
      ResourceType.LIGHTSAIL_CONTAINERSERVICE,
      new ResourceProperty(
        'An Amazon Lightsail container service is a highly scalable compute and networking resource on which you can deploy, run, and manage containers. For more information, see [Container services in Amazon Lightsail](https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-services).  > --Note:-- For more information about the AWS Regions in which you can create Amazon Lightsail container services, see ["Regions and Availability Zones in Amazon Lightsail"](https://lightsail.aws.amazon.com/ls/docs/overview/article/understanding-regions-and-availability-zones-in-amazon-lightsail).',
        LIGHTSAIL_ContainerService.GetTypes(),
      ),
    ],
    [
      ResourceType.LIGHTSAIL_CONTAINERSERVICEDEPLOYMENTVERSION,
      new ResourceProperty(
        "Provides a resource to manage a deployment version for your Amazon Lightsail container service.  > --NOTE:-- The Amazon Lightsail container service must be enabled to create a deployment.  > --NOTE:-- This resource allows you to manage an Amazon Lightsail container service deployment version but the provider cannot destroy it. Removing this resource from your configuration will remove it from your statefile.",
        LIGHTSAIL_ContainerServiceDeploymentVersion.GetTypes(),
      ),
    ],
    [
      ResourceType.LIGHTSAIL_DATABASE,
      new ResourceProperty(
        'Provides a Lightsail Database. Amazon Lightsail is a service to provide easy virtual private servers with custom software already setup. See [What is Amazon Lightsail?](https://lightsail.aws.amazon.com/ls/docs/getting-started/article/what-is-amazon-lightsail) for more information.  > --Note:-- Lightsail is currently only supported in a limited number of AWS Regions, please see ["Regions and Availability Zones"](https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/) for more details',
        LIGHTSAIL_Database.GetTypes(),
      ),
    ],
    [
      ResourceType.LIGHTSAIL_DISK,
      new ResourceProperty(
        "Provides a Lightsail Disk resource.",
        LIGHTSAIL_Disk.GetTypes(),
      ),
    ],
    [
      ResourceType.LIGHTSAIL_DISK_ATTACHMENT,
      new ResourceProperty(
        "Attaches a Lightsail disk to a Lightsail Instance",
        LIGHTSAIL_Disk_attachment.GetTypes(),
      ),
    ],
    [
      ResourceType.LIGHTSAIL_DISTRIBUTION,
      new ResourceProperty(
        "Resource for managing an AWS Lightsail Distribution.",
        LIGHTSAIL_Distribution.GetTypes(),
      ),
    ],
    [
      ResourceType.LIGHTSAIL_DOMAIN,
      new ResourceProperty(
        'Creates a domain resource for the specified domain (e.g., example.com). You cannot register a new domain name using Lightsail. You must register a domain name using Amazon Route 53 or another domain name registrar. If you have already registered your domain, you can enter its name in this parameter to manage the DNS records for that domain.  > --Note:-- Lightsail is currently only supported in a limited number of AWS Regions, please see ["Regions and Availability Zones in Amazon Lightsail"](https://lightsail.aws.amazon.com/ls/docs/overview/article/understanding-regions-and-availability-zones-in-amazon-lightsail) for more details',
        LIGHTSAIL_Domain.GetTypes(),
      ),
    ],
    [
      ResourceType.LIGHTSAIL_DOMAINENTRY,
      new ResourceProperty(
        "Creates a domain entry resource  > --NOTE on `id`:-- In an effort to simplify imports, this resource `id` field has been updated to the standard resource id separator, a comma (`,`). For backward compatibility, the previous separator (underscore `_`) can still be used to read and import existing resources. When state is refreshed, the `id` will be updated to use the new standard separator. The previous separator will be deprecated in a future major release.",
        LIGHTSAIL_DomainEntry.GetTypes(),
      ),
    ],
    [
      ResourceType.LIGHTSAIL_INSTANCE,
      new ResourceProperty(
        'Provides a Lightsail Instance. Amazon Lightsail is a service to provide easy virtual private servers with custom software already setup. See [What is Amazon Lightsail?](https://lightsail.aws.amazon.com/ls/docs/getting-started/article/what-is-amazon-lightsail) for more information.  > --Note:-- Lightsail is currently only supported in a limited number of AWS Regions, please see ["Regions and Availability Zones in Amazon Lightsail"](https://lightsail.aws.amazon.com/ls/docs/overview/article/understanding-regions-and-availability-zones-in-amazon-lightsail) for more details',
        LIGHTSAIL_Instance.GetTypes(),
      ),
    ],
    [
      ResourceType.LIGHTSAIL_INSTANCEPUBLICPORTS,
      new ResourceProperty(
        'Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses allowed to connect to the instance through the ports, and the protocol.  > See [What is Amazon Lightsail?](https://lightsail.aws.amazon.com/ls/docs/getting-started/article/what-is-amazon-lightsail) for more information.  > --Note:-- Lightsail is currently only supported in a limited number of AWS Regions, please see ["Regions and Availability Zones in Amazon Lightsail"](https://lightsail.aws.amazon.com/ls/docs/overview/article/understanding-regions-and-availability-zones-in-amazon-lightsail) for more details.',
        LIGHTSAIL_InstancePublicPorts.GetTypes(),
      ),
    ],
    [
      ResourceType.LIGHTSAIL_KEYPAIR,
      new ResourceProperty(
        'Provides a Lightsail Key Pair, for use with Lightsail Instances. These key pairs are separate from EC2 Key Pairs, and must be created or imported for use with Lightsail.  > --Note:-- Lightsail is currently only supported in a limited number of AWS Regions, please see ["Regions and Availability Zones in Amazon Lightsail"](https://lightsail.aws.amazon.com/ls/docs/overview/article/understanding-regions-and-availability-zones-in-amazon-lightsail) for more details',
        LIGHTSAIL_KeyPair.GetTypes(),
      ),
    ],
    [
      ResourceType.LIGHTSAIL_LB,
      new ResourceProperty(
        "Creates a Lightsail load balancer resource.",
        LIGHTSAIL_Lb.GetTypes(),
      ),
    ],
    [
      ResourceType.LIGHTSAIL_LBATTACHMENT,
      new ResourceProperty(
        "Attaches a Lightsail Instance to a Lightsail Load Balancer.",
        LIGHTSAIL_LbAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.LIGHTSAIL_LBCERTIFICATE,
      new ResourceProperty(
        "Creates a Lightsail load balancer Certificate resource.",
        LIGHTSAIL_LbCertificate.GetTypes(),
      ),
    ],
    [
      ResourceType.LIGHTSAIL_LBCERTIFICATEATTACHMENT,
      new ResourceProperty(
        "Attaches a Lightsail Load Balancer Certificate to a Lightsail Load Balancer.",
        LIGHTSAIL_LbCertificateAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.LIGHTSAIL_LBHTTPSREDIRECTIONPOLICY,
      new ResourceProperty(
        "Configures Https Redirection for a Lightsail Load Balancer. A valid Certificate must be attached to the load balancer in order to enable https redirection.",
        LIGHTSAIL_LbHttpsRedirectionPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.LIGHTSAIL_LBSTICKINESSPOLICY,
      new ResourceProperty(
        "Configures Session Stickiness for a Lightsail Load Balancer.",
        LIGHTSAIL_LbStickinessPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.LIGHTSAIL_STATICIP,
      new ResourceProperty(
        'Allocates a static IP address.  > --Note:-- Lightsail is currently only supported in a limited number of AWS Regions, please see ["Regions and Availability Zones in Amazon Lightsail"](https://lightsail.aws.amazon.com/ls/docs/overview/article/understanding-regions-and-availability-zones-in-amazon-lightsail) for more details',
        LIGHTSAIL_StaticIp.GetTypes(),
      ),
    ],
    [
      ResourceType.LIGHTSAIL_STATICIPATTACHMENT,
      new ResourceProperty(
        'Provides a static IP address attachment - relationship between a Lightsail static IP & Lightsail instance.  > --Note:-- Lightsail is currently only supported in a limited number of AWS Regions, please see ["Regions and Availability Zones in Amazon Lightsail"](https://lightsail.aws.amazon.com/ls/docs/overview/article/understanding-regions-and-availability-zones-in-amazon-lightsail) for more details',
        LIGHTSAIL_StaticIpAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.LOCATION_GEOFENCECOLLECTION,
      new ResourceProperty(
        "Resource for managing an AWS Location Geofence Collection.",
        LOCATION_GeofenceCollection.GetTypes(),
      ),
    ],
    [
      ResourceType.LOCATION_MAPRESOURCE,
      new ResourceProperty(
        "Provides a Location Service Map.",
        LOCATION_MapResource.GetTypes(),
      ),
    ],
    [
      ResourceType.LOCATION_PLACEINDEX,
      new ResourceProperty(
        "Provides a Location Service Place Index.",
        LOCATION_PlaceIndex.GetTypes(),
      ),
    ],
    [
      ResourceType.LOCATION_ROUTECALCULATION,
      new ResourceProperty(
        "Provides a Location Service Route Calculator.",
        LOCATION_RouteCalculation.GetTypes(),
      ),
    ],
    [
      ResourceType.LOCATION_TRACKER,
      new ResourceProperty(
        "Provides a Location Service Tracker.",
        LOCATION_Tracker.GetTypes(),
      ),
    ],
    [
      ResourceType.LOCATION_TRACKERASSOCIATION,
      new ResourceProperty(
        "Resource for managing an AWS Location Tracker Association.",
        LOCATION_TrackerAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.M2_APPLICATION,
      new ResourceProperty(
        "Resource for managing an [AWS Mainframe Modernization Application](https://docs.aws.amazon.com/m2/latest/userguide/applications-m2.html).",
        M2_Application.GetTypes(),
      ),
    ],
    [
      ResourceType.M2_DEPLOYMENT,
      new ResourceProperty(
        "Resource for managing an [AWS Mainframe Modernization Deployment.](https://docs.aws.amazon.com/m2/latest/userguide/applications-m2-deploy.html)",
        M2_Deployment.GetTypes(),
      ),
    ],
    [
      ResourceType.M2_ENVIRONMENT,
      new ResourceProperty(
        "Resource for managing an [AWS Mainframe Modernization Environment](https://docs.aws.amazon.com/m2/latest/userguide/environments-m2.html).",
        M2_Environment.GetTypes(),
      ),
    ],
    [
      ResourceType.MACIE_CUSTOMDATAIDENTIFIER,
      new ResourceProperty(
        "Provides a resource to manage an [AWS Macie Custom Data Identifier](https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers-id.html).",
        MACIE_CustomDataIdentifier.GetTypes(),
      ),
    ],
    [
      ResourceType.MACIE_FINDINGSFILTER,
      new ResourceProperty(
        "Provides a resource to manage an [Amazon Macie Findings Filter](https://docs.aws.amazon.com/macie/latest/APIReference/findingsfilters-id.html).",
        MACIE_FindingsFilter.GetTypes(),
      ),
    ],
    [
      ResourceType.MACIE2_ACCOUNT,
      new ResourceProperty(
        "Provides a resource to manage an [AWS Macie Account](https://docs.aws.amazon.com/macie/latest/APIReference/macie.html).",
        MACIE2_Account.GetTypes(),
      ),
    ],
    [
      ResourceType.MACIE2_CLASSIFICATIONEXPORTCONFIGURATION,
      new ResourceProperty(
        "Provides a resource to manage an [Amazon Macie Classification Export Configuration](https://docs.aws.amazon.com/macie/latest/APIReference/classification-export-configuration.html).",
        MACIE2_ClassificationExportConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.MACIE2_CLASSIFICATIONJOB,
      new ResourceProperty(
        "Provides a resource to manage an [AWS Macie Classification Job](https://docs.aws.amazon.com/macie/latest/APIReference/jobs.html).",
        MACIE2_ClassificationJob.GetTypes(),
      ),
    ],
    [
      ResourceType.MACIE2_INVITATIONACCEPTER,
      new ResourceProperty(
        "Provides a resource to manage an [Amazon Macie Invitation Accepter](https://docs.aws.amazon.com/macie/latest/APIReference/invitations-accept.html).",
        MACIE2_InvitationAccepter.GetTypes(),
      ),
    ],
    [
      ResourceType.MACIE2_MEMBER,
      new ResourceProperty(
        "Provides a resource to manage an [Amazon Macie Member](https://docs.aws.amazon.com/macie/latest/APIReference/members-id.html).",
        MACIE2_Member.GetTypes(),
      ),
    ],
    [
      ResourceType.MACIE2_ORGANIZATIONADMINACCOUNT,
      new ResourceProperty(
        "Provides a resource to manage an [Amazon Macie Organization Admin Account](https://docs.aws.amazon.com/macie/latest/APIReference/admin.html).",
        MACIE2_OrganizationAdminAccount.GetTypes(),
      ),
    ],
    [
      ResourceType.MEDIACONVERT_QUEUE,
      new ResourceProperty(
        "Provides an AWS Elemental MediaConvert Queue.",
        MEDIACONVERT_Queue.GetTypes(),
      ),
    ],
    [
      ResourceType.MEDIALIVE_CHANNEL,
      new ResourceProperty(
        "Resource for managing an AWS MediaLive Channel.",
        MEDIALIVE_Channel.GetTypes(),
      ),
    ],
    [
      ResourceType.MEDIALIVE_INPUT,
      new ResourceProperty(
        "Resource for managing an AWS MediaLive Input.",
        MEDIALIVE_Input.GetTypes(),
      ),
    ],
    [
      ResourceType.MEDIALIVE_INPUTSECURITYGROUP,
      new ResourceProperty(
        "Resource for managing an AWS MediaLive InputSecurityGroup.",
        MEDIALIVE_InputSecurityGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.MEDIALIVE_MULTIPLEX,
      new ResourceProperty(
        "Resource for managing an AWS MediaLive Multiplex.",
        MEDIALIVE_Multiplex.GetTypes(),
      ),
    ],
    [
      ResourceType.MEDIALIVE_MULTIPLEXPROGRAM,
      new ResourceProperty(
        "Resource for managing an AWS MediaLive MultiplexProgram.",
        MEDIALIVE_MultiplexProgram.GetTypes(),
      ),
    ],
    [
      ResourceType.MEDIAPACKAGE_CHANNEL,
      new ResourceProperty(
        "Provides an AWS Elemental MediaPackage Channel.",
        MEDIAPACKAGE_Channel.GetTypes(),
      ),
    ],
    [
      ResourceType.MEDIASTORE_CONTAINER,
      new ResourceProperty(
        "Provides a MediaStore Container.",
        MEDIASTORE_Container.GetTypes(),
      ),
    ],
    [
      ResourceType.MEDIASTORE_CONTAINERPOLICY,
      new ResourceProperty("", MEDIASTORE_ContainerPolicy.GetTypes()),
    ],
    [
      ResourceType.MEMORYDB_ACL,
      new ResourceProperty(
        "Provides a MemoryDB ACL.  More information about users and ACL-s can be found in the [MemoryDB User Guide](https://docs.aws.amazon.com/memorydb/latest/devguide/clusters.acls.html).",
        MEMORYDB_Acl.GetTypes(),
      ),
    ],
    [
      ResourceType.MEMORYDB_CLUSTER,
      new ResourceProperty(
        "Provides a MemoryDB Cluster.  More information about MemoryDB can be found in the [Developer Guide](https://docs.aws.amazon.com/memorydb/latest/devguide/what-is-memorydb-for-redis.html).",
        MEMORYDB_Cluster.GetTypes(),
      ),
    ],
    [
      ResourceType.MEMORYDB_PARAMETERGROUP,
      new ResourceProperty(
        "Provides a MemoryDB Parameter Group.  More information about parameter groups can be found in the [MemoryDB User Guide](https://docs.aws.amazon.com/memorydb/latest/devguide/parametergroups.html).",
        MEMORYDB_ParameterGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.MEMORYDB_SNAPSHOT,
      new ResourceProperty(
        "Provides a MemoryDB Snapshot.  More information about snapshot and restore can be found in the [MemoryDB User Guide](https://docs.aws.amazon.com/memorydb/latest/devguide/snapshots.html).",
        MEMORYDB_Snapshot.GetTypes(),
      ),
    ],
    [
      ResourceType.MEMORYDB_SUBNETGROUP,
      new ResourceProperty(
        "Provides a MemoryDB Subnet Group.  More information about subnet groups can be found in the [MemoryDB User Guide](https://docs.aws.amazon.com/memorydb/latest/devguide/subnetgroups.html).",
        MEMORYDB_SubnetGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.MEMORYDB_USER,
      new ResourceProperty(
        "Provides a MemoryDB User.  More information about users and ACL-s can be found in the [MemoryDB User Guide](https://docs.aws.amazon.com/memorydb/latest/devguide/clusters.acls.html).  > --Note:-- All arguments including the username and passwords will be stored in the raw state as plain-text.",
        MEMORYDB_User.GetTypes(),
      ),
    ],
    [
      ResourceType.MQ_BROKER,
      new ResourceProperty(
        "Provides an Amazon MQ broker resource. This resources also manages users for the broker.  > For more information on Amazon MQ, see [Amazon MQ documentation](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/welcome.html).  > --NOTE:-- Amazon MQ currently places limits on --RabbitMQ-- brokers. For example, a RabbitMQ broker cannot have: instances with an associated IP address of an ENI attached to the broker, an associated LDAP server to authenticate and authorize broker connections, storage type `EFS`, or audit logging. Although this resource allows you to create RabbitMQ users, RabbitMQ users cannot have console access or groups. Also, Amazon MQ does not return information about RabbitMQ users so drift detection is not possible.  > --NOTE:-- Changes to an MQ Broker can occur when you change a parameter, such as `configuration` or `user`, and are reflected in the next maintenance window. Because of this, the provider may report a difference in its planning phase because a modification has not yet taken place. You can use the `apply_immediately` flag to instruct the service to apply the change immediately (see documentation below). Using `apply_immediately` can result in a brief downtime as the broker reboots.",
        MQ_Broker.GetTypes(),
      ),
    ],
    [
      ResourceType.MQ_CONFIGURATION,
      new ResourceProperty(
        "Provides an MQ Configuration Resource.  For more information on Amazon MQ, see [Amazon MQ documentation](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/welcome.html).",
        MQ_Configuration.GetTypes(),
      ),
    ],
    [
      ResourceType.MSK_CLUSTER,
      new ResourceProperty(
        "Manages an Amazon MSK cluster.  > --Note:-- This resource manages _provisioned_ clusters. To manage a _serverless_ Amazon MSK cluster, use the `aws.msk.ServerlessCluster` resource.",
        MSK_Cluster.GetTypes(),
      ),
    ],
    [
      ResourceType.MSK_CLUSTERPOLICY,
      new ResourceProperty(
        "Resource for managing an AWS Managed Streaming for Kafka Cluster Policy.",
        MSK_ClusterPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.MSK_CONFIGURATION,
      new ResourceProperty(
        "Manages an Amazon Managed Streaming for Kafka configuration. More information can be found on the [MSK Developer Guide](https://docs.aws.amazon.com/msk/latest/developerguide/msk-configuration.html).",
        MSK_Configuration.GetTypes(),
      ),
    ],
    [
      ResourceType.MSK_REPLICATOR,
      new ResourceProperty(
        "Resource for managing an AWS Managed Streaming for Kafka Replicator.",
        MSK_Replicator.GetTypes(),
      ),
    ],
    [
      ResourceType.MSK_SCRAMSECRETASSOCIATION,
      new ResourceProperty(
        "Associates SCRAM secrets stored in the Secrets Manager service with a Managed Streaming for Kafka (MSK) cluster.  > --Note:-- The following assumes the MSK cluster has SASL/SCRAM authentication enabled. See below for example usage or refer to the [Username/Password Authentication](https://docs.aws.amazon.com/msk/latest/developerguide/msk-password.html) section of the MSK Developer Guide for more details.  To set up username and password authentication for a cluster, create an `aws.secretsmanager.Secret` resource and associate a username and password with the secret with an `aws.secretsmanager.SecretVersion` resource. When creating a secret for the cluster, the `name` must have the prefix `AmazonMSK_` and you must either use an existing custom AWS KMS key or create a new custom AWS KMS key for your secret with the `aws.kms.Key` resource. It is important to note that a policy is required for the `aws.secretsmanager.Secret` resource in order for Kafka to be able to read it. This policy is attached automatically when the `aws.msk.ScramSecretAssociation` is used, however, this policy will not be in the state and as such, will present a diff on plan/apply. For that reason, you must use the `aws.secretsmanager.SecretPolicy` resource](/docs/providers/aws/r/secretsmanager_secret_policy.html) as shown below in order to ensure that the state is in a clean state after the creation of secret and the association to the cluster.",
        MSK_ScramSecretAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.MSK_SERVERLESSCLUSTER,
      new ResourceProperty(
        "Manages an Amazon MSK Serverless cluster.  > --Note:-- To manage a _provisioned_ Amazon MSK cluster, use the `aws.msk.Cluster` resource.",
        MSK_ServerlessCluster.GetTypes(),
      ),
    ],
    [
      ResourceType.MSK_VPCCONNECTION,
      new ResourceProperty(
        "Resource for managing an AWS Managed Streaming for Kafka VPC Connection.",
        MSK_VpcConnection.GetTypes(),
      ),
    ],
    [
      ResourceType.MSKCONNECT_CONNECTOR,
      new ResourceProperty(
        "Provides an Amazon MSK Connect Connector resource.",
        MSKCONNECT_Connector.GetTypes(),
      ),
    ],
    [
      ResourceType.MSKCONNECT_CUSTOMPLUGIN,
      new ResourceProperty(
        "Provides an Amazon MSK Connect Custom Plugin Resource.",
        MSKCONNECT_CustomPlugin.GetTypes(),
      ),
    ],
    [
      ResourceType.MSKCONNECT_WORKERCONFIGURATION,
      new ResourceProperty(
        "Provides an Amazon MSK Connect Worker Configuration Resource.",
        MSKCONNECT_WorkerConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.MWAA_ENVIRONMENT,
      new ResourceProperty(
        "Creates a MWAA Environment resource.",
        MWAA_Environment.GetTypes(),
      ),
    ],
    [
      ResourceType.NEPTUNE_CLUSTER,
      new ResourceProperty(
        "Provides an Neptune Cluster Resource. A Cluster Resource defines attributes that are applied to the entire cluster of Neptune Cluster Instances.  Changes to a Neptune Cluster can occur when you manually change a parameter, such as `backup_retention_period`, and are reflected in the next maintenance window. Because of this, this provider may report a difference in its planning phase because a modification has not yet taken place. You can use the `apply_immediately` flag to instruct the service to apply the change immediately (see documentation below).",
        NEPTUNE_Cluster.GetTypes(),
      ),
    ],
    [
      ResourceType.NEPTUNE_CLUSTERENDPOINT,
      new ResourceProperty(
        "Provides an Neptune Cluster Endpoint Resource.",
        NEPTUNE_ClusterEndpoint.GetTypes(),
      ),
    ],
    [
      ResourceType.NEPTUNE_CLUSTERINSTANCE,
      new ResourceProperty(
        "A Cluster Instance Resource defines attributes that are specific to a single instance in a Neptune Cluster.  You can simply add neptune instances and Neptune manages the replication. You can use the count meta-parameter to make multiple instances and join them all to the same Neptune Cluster, or you may specify different Cluster Instance resources with various `instance_class` sizes.",
        NEPTUNE_ClusterInstance.GetTypes(),
      ),
    ],
    [
      ResourceType.NEPTUNE_CLUSTERPARAMETERGROUP,
      new ResourceProperty(
        "Manages a Neptune Cluster Parameter Group",
        NEPTUNE_ClusterParameterGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.NEPTUNE_CLUSTERSNAPSHOT,
      new ResourceProperty(
        "Manages a Neptune database cluster snapshot.",
        NEPTUNE_ClusterSnapshot.GetTypes(),
      ),
    ],
    [
      ResourceType.NEPTUNE_EVENTSUBSCRIPTION,
      new ResourceProperty("", NEPTUNE_EventSubscription.GetTypes()),
    ],
    [
      ResourceType.NEPTUNE_GLOBALCLUSTER,
      new ResourceProperty(
        "Manages a Neptune Global Cluster. A global cluster consists of one primary region and up to five read-only secondary regions. You issue write operations directly to the primary cluster in the primary region and Amazon Neptune automatically replicates the data to the secondary regions using dedicated infrastructure.  More information about Neptune Global Clusters can be found in the [Neptune User Guide](https://docs.aws.amazon.com/neptune/latest/userguide/neptune-global-database.html).",
        NEPTUNE_GlobalCluster.GetTypes(),
      ),
    ],
    [
      ResourceType.NEPTUNE_PARAMETERGROUP,
      new ResourceProperty(
        "Manages a Neptune Parameter Group",
        NEPTUNE_ParameterGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.NEPTUNE_SUBNETGROUP,
      new ResourceProperty(
        "Provides an Neptune subnet group resource.",
        NEPTUNE_SubnetGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKFIREWALL_FIREWALL,
      new ResourceProperty(
        "Provides an AWS Network Firewall Firewall Resource",
        NETWORKFIREWALL_Firewall.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKFIREWALL_FIREWALLPOLICY,
      new ResourceProperty(
        "Provides an AWS Network Firewall Firewall Policy Resource",
        NETWORKFIREWALL_FirewallPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKFIREWALL_LOGGINGCONFIGURATION,
      new ResourceProperty(
        "Provides an AWS Network Firewall Logging Configuration Resource",
        NETWORKFIREWALL_LoggingConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKFIREWALL_RESOURCEPOLICY,
      new ResourceProperty(
        "Provides an AWS Network Firewall Resource Policy Resource for a rule group or firewall policy.",
        NETWORKFIREWALL_ResourcePolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKFIREWALL_RULEGROUP,
      new ResourceProperty(
        "Provides an AWS Network Firewall Rule Group Resource",
        NETWORKFIREWALL_RuleGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKFIREWALL_TLSINSPECTIONCONFIGURATION,
      new ResourceProperty(
        "Resource for managing an AWS Network Firewall TLS Inspection Configuration.",
        NETWORKFIREWALL_TlsInspectionConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKMANAGER_ATTACHMENTACCEPTER,
      new ResourceProperty(
        "Resource for managing an AWS Network Manager Attachment Accepter.",
        NETWORKMANAGER_AttachmentAccepter.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKMANAGER_CONNECTATTACHMENT,
      new ResourceProperty(
        "Resource for managing an AWS Network Manager ConnectAttachment.",
        NETWORKMANAGER_ConnectAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKMANAGER_CONNECTION,
      new ResourceProperty(
        "Creates a connection between two devices. The devices can be a physical or virtual appliance that connects to a third-party appliance in a VPC, or a physical appliance that connects to another physical appliance in an on-premises network.",
        NETWORKMANAGER_Connection.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKMANAGER_CONNECTPEER,
      new ResourceProperty(
        "Resource for managing an AWS Network Manager Connect Peer.",
        NETWORKMANAGER_ConnectPeer.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKMANAGER_CORENETWORK,
      new ResourceProperty(
        "Provides a core network resource.",
        NETWORKMANAGER_CoreNetwork.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKMANAGER_CORENETWORKPOLICYATTACHMENT,
      new ResourceProperty(
        "Provides a Core Network Policy Attachment resource. This puts a Core Network Policy to an existing Core Network and executes the change set, which deploys changes globally based on the policy submitted (Sets the policy to `LIVE`).  > --NOTE:-- Deleting this resource will not delete the current policy defined in this resource. Deleting this resource will also not revert the current `LIVE` policy to the previous version.",
        NETWORKMANAGER_CoreNetworkPolicyAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKMANAGER_CUSTOMERGATEWAYASSOCIATION,
      new ResourceProperty(
        "Associates a customer gateway with a device and optionally, with a link. If you specify a link, it must be associated with the specified device.",
        NETWORKMANAGER_CustomerGatewayAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKMANAGER_DEVICE,
      new ResourceProperty(
        "Creates a device in a global network. If you specify both a site ID and a location, the location of the site is used for visualization in the Network Manager console.",
        NETWORKMANAGER_Device.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKMANAGER_GLOBALNETWORK,
      new ResourceProperty(
        "Provides a global network resource.",
        NETWORKMANAGER_GlobalNetwork.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKMANAGER_LINK,
      new ResourceProperty(
        "Creates a link for a site.",
        NETWORKMANAGER_Link.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKMANAGER_LINKASSOCIATION,
      new ResourceProperty(
        "Associates a link to a device. A device can be associated to multiple links and a link can be associated to multiple devices. The device and link must be in the same global network and the same site.",
        NETWORKMANAGER_LinkAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKMANAGER_SITE,
      new ResourceProperty(
        "Creates a site in a global network.",
        NETWORKMANAGER_Site.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKMANAGER_SITETOSITEVPNATTACHMENT,
      new ResourceProperty(
        "Resource for managing an AWS Network Manager SiteToSiteAttachment.",
        NETWORKMANAGER_SiteToSiteVpnAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKMANAGER_TRANSITGATEWAYCONNECTPEERASSOCIATION,
      new ResourceProperty(
        "Associates a transit gateway Connect peer with a device, and optionally, with a link. If you specify a link, it must be associated with the specified device.",
        NETWORKMANAGER_TransitGatewayConnectPeerAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKMANAGER_TRANSITGATEWAYPEERING,
      new ResourceProperty(
        "Creates a peering connection between an AWS Cloud WAN core network and an AWS Transit Gateway.",
        NETWORKMANAGER_TransitGatewayPeering.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKMANAGER_TRANSITGATEWAYREGISTRATION,
      new ResourceProperty(
        "Registers a transit gateway to a global network. The transit gateway can be in any AWS Region, but it must be owned by the same AWS account that owns the global network. You cannot register a transit gateway in more than one global network.",
        NETWORKMANAGER_TransitGatewayRegistration.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKMANAGER_TRANSITGATEWAYROUTETABLEATTACHMENT,
      new ResourceProperty(
        "Creates a transit gateway route table attachment.",
        NETWORKMANAGER_TransitGatewayRouteTableAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKMANAGER_VPCATTACHMENT,
      new ResourceProperty(
        "Resource for managing an AWS Network Manager VPC Attachment.",
        NETWORKMANAGER_VpcAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKMONITOR_MONITOR,
      new ResourceProperty(
        "Resource for managing an AWS Network Monitor Monitor.",
        NETWORKMONITOR_Monitor.GetTypes(),
      ),
    ],
    [
      ResourceType.NETWORKMONITOR_PROBE,
      new ResourceProperty(
        "Resource for managing an AWS Network Monitor Probe.",
        NETWORKMONITOR_Probe.GetTypes(),
      ),
    ],
    [
      ResourceType.OAM_LINK,
      new ResourceProperty(
        "Resource for managing an AWS CloudWatch Observability Access Manager Link.",
        OAM_Link.GetTypes(),
      ),
    ],
    [
      ResourceType.OAM_SINK,
      new ResourceProperty(
        "Resource for managing an AWS CloudWatch Observability Access Manager Sink.",
        OAM_Sink.GetTypes(),
      ),
    ],
    [
      ResourceType.OAM_SINKPOLICY,
      new ResourceProperty(
        "Resource for managing an AWS CloudWatch Observability Access Manager Sink Policy.",
        OAM_SinkPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.OPENSEARCH_DOMAIN,
      new ResourceProperty(
        "Manages an Amazon OpenSearch Domain.  ## Elasticsearch vs. OpenSearch  Amazon OpenSearch Service is the successor to Amazon Elasticsearch Service and supports OpenSearch and legacy Elasticsearch OSS (up to 7.10, the final open source version of the software).  OpenSearch Domain configurations are similar in many ways to Elasticsearch Domain configurations. However, there are important differences including these:  - OpenSearch has `engine_version` while Elasticsearch has `elasticsearch_version` - Versions are specified differently - _e.g._, `Elasticsearch_7.10` with OpenSearch vs. `7.10` for Elasticsearch. - `instance_type` argument values end in `search` for OpenSearch vs. `elasticsearch` for Elasticsearch (_e.g._, `t2.micro.search` vs. `t2.micro.elasticsearch`). - The AWS-managed service-linked role for OpenSearch is called `AWSServiceRoleForAmazonOpenSearchService` instead of `AWSServiceRoleForAmazonElasticsearchService` for Elasticsearch.  There are also some potentially unexpected similarities in configurations:  - ARNs for both are prefaced with `arn:aws:es:`. - Both OpenSearch and Elasticsearch use assume role policies that refer to the `Principal` `Service` as `es.amazonaws.com`. - IAM policy actions, such as those you will find in `access_policies`, are prefaced with `es:` for both.",
        OPENSEARCH_Domain.GetTypes(),
      ),
    ],
    [
      ResourceType.OPENSEARCH_DOMAINPOLICY,
      new ResourceProperty(
        "Allows setting policy to an OpenSearch domain while referencing domain attributes (e.g., ARN).",
        OPENSEARCH_DomainPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.OPENSEARCH_DOMAINSAMLOPTIONS,
      new ResourceProperty(
        "Manages SAML authentication options for an AWS OpenSearch Domain.",
        OPENSEARCH_DomainSamlOptions.GetTypes(),
      ),
    ],
    [
      ResourceType.OPENSEARCH_INBOUNDCONNECTIONACCEPTER,
      new ResourceProperty(
        "Manages an [AWS Opensearch Inbound Connection Accepter](https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_AcceptInboundConnection.html). If connecting domains from different AWS accounts, ensure that the accepter is configured to use the AWS account where the _remote_ opensearch domain exists.",
        OPENSEARCH_InboundConnectionAccepter.GetTypes(),
      ),
    ],
    [
      ResourceType.OPENSEARCH_OUTBOUNDCONNECTION,
      new ResourceProperty(
        "Manages an AWS Opensearch Outbound Connection.",
        OPENSEARCH_OutboundConnection.GetTypes(),
      ),
    ],
    [
      ResourceType.OPENSEARCH_PACKAGE,
      new ResourceProperty(
        "Manages an AWS Opensearch Package.",
        OPENSEARCH_Package.GetTypes(),
      ),
    ],
    [
      ResourceType.OPENSEARCH_PACKAGEASSOCIATION,
      new ResourceProperty(
        "Manages an AWS Opensearch Package Association.",
        OPENSEARCH_PackageAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.OPENSEARCH_SERVERLESSACCESSPOLICY,
      new ResourceProperty(
        "Resource for managing an AWS OpenSearch Serverless Access Policy. See AWS documentation for [data access policies](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html) and [supported data access policy permissions](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html#serverless-data-supported-permissions).",
        OPENSEARCH_ServerlessAccessPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.OPENSEARCH_SERVERLESSCOLLECTION,
      new ResourceProperty(
        "Resource for managing an AWS OpenSearch Serverless Collection.  > --NOTE:-- An `aws.opensearch.ServerlessCollection` cannot be created without having an applicable encryption security policy. Use the `depends_on` meta-argument to define this dependency.  > --NOTE:-- An `aws.opensearch.ServerlessCollection` is not accessible without configuring an applicable network security policy. Data cannot be accessed without configuring an applicable data access policy.",
        OPENSEARCH_ServerlessCollection.GetTypes(),
      ),
    ],
    [
      ResourceType.OPENSEARCH_SERVERLESSLIFECYCLEPOLICY,
      new ResourceProperty(
        "Resource for managing an AWS OpenSearch Serverless Lifecycle Policy. See AWS documentation for [lifecycle policies](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-lifecycle.html).",
        OPENSEARCH_ServerlessLifecyclePolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.OPENSEARCH_SERVERLESSSECURITYCONFIG,
      new ResourceProperty(
        "Resource for managing an AWS OpenSearch Serverless Security Config.",
        OPENSEARCH_ServerlessSecurityConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.OPENSEARCH_SERVERLESSSECURITYPOLICY,
      new ResourceProperty(
        "Resource for managing an AWS OpenSearch Serverless Security Policy. See AWS documentation for [encryption policies](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html#serverless-encryption-policies) and [network policies](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html#serverless-network-policies).",
        OPENSEARCH_ServerlessSecurityPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.OPENSEARCH_SERVERLESSVPCENDPOINT,
      new ResourceProperty(
        "Resource for managing an AWS OpenSearchServerless VPC Endpoint.",
        OPENSEARCH_ServerlessVpcEndpoint.GetTypes(),
      ),
    ],
    [
      ResourceType.OPENSEARCH_VPCENDPOINT,
      new ResourceProperty(
        "Manages an [AWS Opensearch VPC Endpoint](https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_CreateVpcEndpoint.html). Creates an Amazon OpenSearch Service-managed VPC endpoint.",
        OPENSEARCH_VpcEndpoint.GetTypes(),
      ),
    ],
    [
      ResourceType.OPENSEARCHINGEST_PIPELINE,
      new ResourceProperty(
        "Resource for managing an AWS OpenSearch Ingestion Pipeline.",
        OPENSEARCHINGEST_Pipeline.GetTypes(),
      ),
    ],
    [
      ResourceType.OPSWORKS_APPLICATION,
      new ResourceProperty(
        "Provides an OpsWorks application resource.",
        OPSWORKS_Application.GetTypes(),
      ),
    ],
    [
      ResourceType.OPSWORKS_CUSTOMLAYER,
      new ResourceProperty(
        "Provides an OpsWorks custom layer resource.",
        OPSWORKS_CustomLayer.GetTypes(),
      ),
    ],
    [
      ResourceType.OPSWORKS_ECSCLUSTERLAYER,
      new ResourceProperty(
        "Provides an OpsWorks ECS Cluster layer resource.",
        OPSWORKS_EcsClusterLayer.GetTypes(),
      ),
    ],
    [
      ResourceType.OPSWORKS_GANGLIALAYER,
      new ResourceProperty(
        "Provides an OpsWorks Ganglia layer resource.",
        OPSWORKS_GangliaLayer.GetTypes(),
      ),
    ],
    [
      ResourceType.OPSWORKS_HAPROXYLAYER,
      new ResourceProperty(
        "Provides an OpsWorks haproxy layer resource.",
        OPSWORKS_HaproxyLayer.GetTypes(),
      ),
    ],
    [
      ResourceType.OPSWORKS_INSTANCE,
      new ResourceProperty(
        "Provides an OpsWorks instance resource.",
        OPSWORKS_Instance.GetTypes(),
      ),
    ],
    [
      ResourceType.OPSWORKS_JAVAAPPLAYER,
      new ResourceProperty(
        "Provides an OpsWorks Java application layer resource.",
        OPSWORKS_JavaAppLayer.GetTypes(),
      ),
    ],
    [
      ResourceType.OPSWORKS_MEMCACHEDLAYER,
      new ResourceProperty(
        "Provides an OpsWorks memcached layer resource.",
        OPSWORKS_MemcachedLayer.GetTypes(),
      ),
    ],
    [
      ResourceType.OPSWORKS_MYSQLLAYER,
      new ResourceProperty(
        "Provides an OpsWorks MySQL layer resource.",
        OPSWORKS_MysqlLayer.GetTypes(),
      ),
    ],
    [
      ResourceType.OPSWORKS_NODEJSAPPLAYER,
      new ResourceProperty(
        "Provides an OpsWorks NodeJS application layer resource.",
        OPSWORKS_NodejsAppLayer.GetTypes(),
      ),
    ],
    [
      ResourceType.OPSWORKS_PERMISSION,
      new ResourceProperty(
        "Provides an OpsWorks permission resource.",
        OPSWORKS_Permission.GetTypes(),
      ),
    ],
    [
      ResourceType.OPSWORKS_PHPAPPLAYER,
      new ResourceProperty(
        "Provides an OpsWorks PHP application layer resource.",
        OPSWORKS_PhpAppLayer.GetTypes(),
      ),
    ],
    [
      ResourceType.OPSWORKS_RAILSAPPLAYER,
      new ResourceProperty(
        "Provides an OpsWorks Ruby on Rails application layer resource.",
        OPSWORKS_RailsAppLayer.GetTypes(),
      ),
    ],
    [
      ResourceType.OPSWORKS_RDSDBINSTANCE,
      new ResourceProperty(
        "Provides an OpsWorks RDS DB Instance resource.",
        OPSWORKS_RdsDbInstance.GetTypes(),
      ),
    ],
    [
      ResourceType.OPSWORKS_STACK,
      new ResourceProperty(
        "Provides an OpsWorks stack resource.",
        OPSWORKS_Stack.GetTypes(),
      ),
    ],
    [
      ResourceType.OPSWORKS_STATICWEBLAYER,
      new ResourceProperty(
        "Provides an OpsWorks static web server layer resource.",
        OPSWORKS_StaticWebLayer.GetTypes(),
      ),
    ],
    [
      ResourceType.OPSWORKS_USERPROFILE,
      new ResourceProperty(
        "Provides an OpsWorks User Profile resource.",
        OPSWORKS_UserProfile.GetTypes(),
      ),
    ],
    [
      ResourceType.ORGANIZATIONS_ACCOUNT,
      new ResourceProperty(
        "Provides a resource to create a member account in the current organization.  > --Note:-- Account management must be done from the organization's root account.  > --Note:-- By default, deleting this resource will only remove an AWS account from an organization. You must set the `close_on_deletion` flag to true to close the account. It is worth noting that quotas are enforced when using the `close_on_deletion` argument, which can produce a [CLOSE_ACCOUNT_QUOTA_EXCEEDED](https://docs.aws.amazon.com/organizations/latest/APIReference/API_CloseAccount.html) error, and require you to close the account manually.",
        ORGANIZATIONS_Account.GetTypes(),
      ),
    ],
    [
      ResourceType.ORGANIZATIONS_DELEGATEDADMINISTRATOR,
      new ResourceProperty(
        "Provides a resource to manage an [AWS Organizations Delegated Administrator](https://docs.aws.amazon.com/organizations/latest/APIReference/API_RegisterDelegatedAdministrator.html).",
        ORGANIZATIONS_DelegatedAdministrator.GetTypes(),
      ),
    ],
    [
      ResourceType.ORGANIZATIONS_ORGANIZATION,
      new ResourceProperty(
        'Provides a resource to create an organization.  !> --WARNING:-- When migrating from a `feature_set` of `CONSOLIDATED_BILLING` to `ALL`, the Organization account owner will received an email stating the following: "You started the process to enable all features for your AWS organization. As part of that process, all member accounts that joined your organization by invitation must approve the change. You don’t need approval from member accounts that you directly created from within your AWS organization." After all member accounts have accepted the invitation, the Organization account owner must then finalize the changes via the [AWS Console](https://console.aws.amazon.com/organizations/home#/organization/settings/migration-progress). Until these steps are performed, the provider will perpetually show a difference, and the `DescribeOrganization` API will continue to show the `FeatureSet` as `CONSOLIDATED_BILLING`. See the [AWS Organizations documentation](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html) for more information.  !> --WARNING:-- [Warning from the AWS Docs](https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnableAWSServiceAccess.html): "We recommend that you enable integration between AWS Organizations and the specified AWS service by using the console or commands that are provided by the specified service. Doing so ensures that the service is aware that it can create the resources that are required for the integration. How the service creates those resources in the organization\'s accounts depends on that service. For more information, see the documentation for the other AWS service."',
        ORGANIZATIONS_Organization.GetTypes(),
      ),
    ],
    [
      ResourceType.ORGANIZATIONS_ORGANIZATIONALUNIT,
      new ResourceProperty(
        "Provides a resource to create an organizational unit.",
        ORGANIZATIONS_OrganizationalUnit.GetTypes(),
      ),
    ],
    [
      ResourceType.ORGANIZATIONS_POLICY,
      new ResourceProperty(
        "Provides a resource to manage an [AWS Organizations policy](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies.html).",
        ORGANIZATIONS_Policy.GetTypes(),
      ),
    ],
    [
      ResourceType.ORGANIZATIONS_POLICYATTACHMENT,
      new ResourceProperty(
        "Provides a resource to attach an AWS Organizations policy to an organization account, root, or unit.",
        ORGANIZATIONS_PolicyAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.ORGANIZATIONS_RESOURCEPOLICY,
      new ResourceProperty(
        "Provides a resource to manage a resource-based delegation policy that can be used to delegate policy management for AWS Organizations to specified member accounts to perform policy actions that are by default available only to the management account. See the [_AWS Organizations User Guide_](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_delegate_policies.html) for more information.",
        ORGANIZATIONS_ResourcePolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.PAYMENTCRYPTOGRAPHY_KEY,
      new ResourceProperty(
        "Resource for managing an AWS Payment Cryptography Control Plane Key.",
        PAYMENTCRYPTOGRAPHY_Key.GetTypes(),
      ),
    ],
    [
      ResourceType.PAYMENTCRYPTOGRAPHY_KEYALIAS,
      new ResourceProperty(
        "Resource for managing an AWS Payment Cryptography Control Plane Key Alias.",
        PAYMENTCRYPTOGRAPHY_KeyAlias.GetTypes(),
      ),
    ],
    [
      ResourceType.PINPOINT_ADMCHANNEL,
      new ResourceProperty(
        "Provides a Pinpoint ADM (Amazon Device Messaging) Channel resource.  > --Note:-- All arguments including the Client ID and Client Secret will be stored in the raw state as plain-text.",
        PINPOINT_AdmChannel.GetTypes(),
      ),
    ],
    [
      ResourceType.PINPOINT_APNSCHANNEL,
      new ResourceProperty(
        "Provides a Pinpoint APNs Channel resource.  > --Note:-- All arguments, including certificates and tokens, will be stored in the raw state as plain-text.",
        PINPOINT_ApnsChannel.GetTypes(),
      ),
    ],
    [
      ResourceType.PINPOINT_APNSSANDBOXCHANNEL,
      new ResourceProperty(
        "Provides a Pinpoint APNs Sandbox Channel resource.  > --Note:-- All arguments, including certificates and tokens, will be stored in the raw state as plain-text.",
        PINPOINT_ApnsSandboxChannel.GetTypes(),
      ),
    ],
    [
      ResourceType.PINPOINT_APNSVOIPCHANNEL,
      new ResourceProperty(
        "Provides a Pinpoint APNs VoIP Channel resource.  > --Note:-- All arguments, including certificates and tokens, will be stored in the raw state as plain-text.",
        PINPOINT_ApnsVoipChannel.GetTypes(),
      ),
    ],
    [
      ResourceType.PINPOINT_APNSVOIPSANDBOXCHANNEL,
      new ResourceProperty(
        "Provides a Pinpoint APNs VoIP Sandbox Channel resource.  > --Note:-- All arguments, including certificates and tokens, will be stored in the raw state as plain-text.",
        PINPOINT_ApnsVoipSandboxChannel.GetTypes(),
      ),
    ],
    [
      ResourceType.PINPOINT_APP,
      new ResourceProperty(
        "Provides a Pinpoint App resource.",
        PINPOINT_App.GetTypes(),
      ),
    ],
    [
      ResourceType.PINPOINT_BAIDUCHANNEL,
      new ResourceProperty(
        "Provides a Pinpoint Baidu Channel resource.  > --Note:-- All arguments including the Api Key and Secret Key will be stored in the raw state as plain-text.",
        PINPOINT_BaiduChannel.GetTypes(),
      ),
    ],
    [
      ResourceType.PINPOINT_EMAILCHANNEL,
      new ResourceProperty(
        "Provides a Pinpoint Email Channel resource.",
        PINPOINT_EmailChannel.GetTypes(),
      ),
    ],
    [
      ResourceType.PINPOINT_EMAILTEMPLATE,
      new ResourceProperty(
        "Provides a Pinpoint Email Template resource",
        PINPOINT_EmailTemplate.GetTypes(),
      ),
    ],
    [
      ResourceType.PINPOINT_EVENTSTREAM,
      new ResourceProperty(
        "Provides a Pinpoint Event Stream resource.",
        PINPOINT_EventStream.GetTypes(),
      ),
    ],
    [
      ResourceType.PINPOINT_GCMCHANNEL,
      new ResourceProperty(
        "Provides a Pinpoint GCM Channel resource.",
        PINPOINT_GcmChannel.GetTypes(),
      ),
    ],
    [
      ResourceType.PINPOINT_SMSCHANNEL,
      new ResourceProperty(
        "Use the `aws.pinpoint.SmsChannel` resource to manage Pinpoint SMS Channels.",
        PINPOINT_SmsChannel.GetTypes(),
      ),
    ],
    [
      ResourceType.PIPES_PIPE,
      new ResourceProperty(
        "Resource for managing an AWS EventBridge Pipes Pipe.  You can find out more about EventBridge Pipes in the [User Guide](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html).  EventBridge Pipes are very configurable, and may require IAM permissions to work correctly. More information on the configuration options and IAM permissions can be found in the [User Guide](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html).  > --Note:-- EventBridge was formerly known as CloudWatch Events. The functionality is identical.",
        PIPES_Pipe.GetTypes(),
      ),
    ],
    [
      ResourceType.QLDB_LEDGER,
      new ResourceProperty(
        "Provides an AWS Quantum Ledger Database (QLDB) resource  > --NOTE:-- Deletion protection is enabled by default. To successfully delete this resource via this provider, `deletion_protection = false` must be applied before attempting deletion.",
        QLDB_Ledger.GetTypes(),
      ),
    ],
    [
      ResourceType.QLDB_STREAM,
      new ResourceProperty(
        "Provides an AWS Quantum Ledger Database (QLDB) Stream resource",
        QLDB_Stream.GetTypes(),
      ),
    ],
    [
      ResourceType.QUICKSIGHT_ACCOUNTSUBSCRIPTION,
      new ResourceProperty(
        "Resource for managing an AWS QuickSight Account Subscription.",
        QUICKSIGHT_AccountSubscription.GetTypes(),
      ),
    ],
    [
      ResourceType.QUICKSIGHT_ANALYSIS,
      new ResourceProperty(
        "Resource for managing a QuickSight Analysis.",
        QUICKSIGHT_Analysis.GetTypes(),
      ),
    ],
    [
      ResourceType.QUICKSIGHT_DASHBOARD,
      new ResourceProperty(
        "Resource for managing a QuickSight Dashboard.",
        QUICKSIGHT_Dashboard.GetTypes(),
      ),
    ],
    [
      ResourceType.QUICKSIGHT_DATASET,
      new ResourceProperty(
        "Resource for managing a QuickSight Data Set.",
        QUICKSIGHT_DataSet.GetTypes(),
      ),
    ],
    [
      ResourceType.QUICKSIGHT_DATASOURCE,
      new ResourceProperty(
        "Resource for managing QuickSight Data Source",
        QUICKSIGHT_DataSource.GetTypes(),
      ),
    ],
    [
      ResourceType.QUICKSIGHT_FOLDER,
      new ResourceProperty(
        "Resource for managing a QuickSight Folder.",
        QUICKSIGHT_Folder.GetTypes(),
      ),
    ],
    [
      ResourceType.QUICKSIGHT_FOLDERMEMBERSHIP,
      new ResourceProperty(
        "Resource for managing an AWS QuickSight Folder Membership.",
        QUICKSIGHT_FolderMembership.GetTypes(),
      ),
    ],
    [
      ResourceType.QUICKSIGHT_GROUP,
      new ResourceProperty(
        "Resource for managing QuickSight Group",
        QUICKSIGHT_Group.GetTypes(),
      ),
    ],
    [
      ResourceType.QUICKSIGHT_GROUPMEMBERSHIP,
      new ResourceProperty(
        "Resource for managing QuickSight Group Membership",
        QUICKSIGHT_GroupMembership.GetTypes(),
      ),
    ],
    [
      ResourceType.QUICKSIGHT_IAMPOLICYASSIGNMENT,
      new ResourceProperty(
        "Resource for managing an AWS QuickSight IAM Policy Assignment.",
        QUICKSIGHT_IamPolicyAssignment.GetTypes(),
      ),
    ],
    [
      ResourceType.QUICKSIGHT_INGESTION,
      new ResourceProperty(
        "Resource for managing an AWS QuickSight Ingestion.",
        QUICKSIGHT_Ingestion.GetTypes(),
      ),
    ],
  ]);
  public static propertiesMap2: Map<ResourceType, ResourceProperty> = new Map([
    [
      ResourceType.QUICKSIGHT_NAMESPACE,
      new ResourceProperty(
        "Resource for managing an AWS QuickSight Namespace.",
        QUICKSIGHT_Namespace.GetTypes(),
      ),
    ],
    [
      ResourceType.QUICKSIGHT_REFRESHSCHEDULE,
      new ResourceProperty(
        "Resource for managing a QuickSight Refresh Schedule.",
        QUICKSIGHT_RefreshSchedule.GetTypes(),
      ),
    ],
    [
      ResourceType.QUICKSIGHT_TEMPLATE,
      new ResourceProperty(
        "Resource for managing a QuickSight Template.",
        QUICKSIGHT_Template.GetTypes(),
      ),
    ],
    [
      ResourceType.QUICKSIGHT_TEMPLATEALIAS,
      new ResourceProperty(
        "Resource for managing an AWS QuickSight Template Alias.",
        QUICKSIGHT_TemplateAlias.GetTypes(),
      ),
    ],
    [
      ResourceType.QUICKSIGHT_THEME,
      new ResourceProperty(
        "Resource for managing a QuickSight Theme.",
        QUICKSIGHT_Theme.GetTypes(),
      ),
    ],
    [
      ResourceType.QUICKSIGHT_USER,
      new ResourceProperty(
        "Resource for managing QuickSight User",
        QUICKSIGHT_User.GetTypes(),
      ),
    ],
    [
      ResourceType.QUICKSIGHT_VPCCONNECTION,
      new ResourceProperty(
        "Resource for managing an AWS QuickSight VPC Connection.",
        QUICKSIGHT_VpcConnection.GetTypes(),
      ),
    ],
    [
      ResourceType.RAM_PRINCIPALASSOCIATION,
      new ResourceProperty(
        "Provides a Resource Access Manager (RAM) principal association. Depending if [RAM Sharing with AWS Organizations is enabled](https://docs.aws.amazon.com/ram/latest/userguide/getting-started-sharing.html#getting-started-sharing-orgs), the RAM behavior with different principal types changes.  When RAM Sharing with AWS Organizations is enabled:  - For AWS Account ID, Organization, and Organizational Unit principals within the same AWS Organization, no resource share invitation is sent and resources become available automatically after creating the association. - For AWS Account ID principals outside the AWS Organization, a resource share invitation is sent and must be accepted before resources become available. See the `aws.ram.ResourceShareAccepter` resource to accept these invitations.  When RAM Sharing with AWS Organizations is not enabled:  - Organization and Organizational Unit principals cannot be used. - For AWS Account ID principals, a resource share invitation is sent and must be accepted before resources become available. See the `aws.ram.ResourceShareAccepter` resource to accept these invitations.",
        RAM_PrincipalAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.RAM_RESOURCEASSOCIATION,
      new ResourceProperty(
        "Manages a Resource Access Manager (RAM) Resource Association.  > -NOTE:- Certain AWS resources (e.g., EC2 Subnets) can only be shared in an AWS account that is a member of an AWS Organizations organization with organization-wide Resource Access Manager functionality enabled. See the [Resource Access Manager User Guide](https://docs.aws.amazon.com/ram/latest/userguide/what-is.html) and AWS service specific documentation for additional information.",
        RAM_ResourceAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.RAM_RESOURCESHARE,
      new ResourceProperty(
        "Manages a Resource Access Manager (RAM) Resource Share. To associate principals with the share, see the `aws.ram.PrincipalAssociation` resource. To associate resources with the share, see the `aws.ram.ResourceAssociation` resource.",
        RAM_ResourceShare.GetTypes(),
      ),
    ],
    [
      ResourceType.RAM_RESOURCESHAREACCEPTER,
      new ResourceProperty(
        "Manage accepting a Resource Access Manager (RAM) Resource Share invitation. From a _receiver_ AWS account, accept an invitation to share resources that were shared by a _sender_ AWS account. To create a resource share in the _sender_, see the `aws.ram.ResourceShare` resource.  > --Note:-- If both AWS accounts are in the same Organization and [RAM Sharing with AWS Organizations is enabled](https://docs.aws.amazon.com/ram/latest/userguide/getting-started-sharing.html#getting-started-sharing-orgs), this resource is not necessary as RAM Resource Share invitations are not used.",
        RAM_ResourceShareAccepter.GetTypes(),
      ),
    ],
    [
      ResourceType.RAM_SHARINGWITHORGANIZATION,
      new ResourceProperty(
        "Manages Resource Access Manager (RAM) Resource Sharing with AWS Organizations. If you enable sharing with your organization, you can share resources without using invitations. Refer to the [AWS RAM user guide](https://docs.aws.amazon.com/ram/latest/userguide/getting-started-sharing.html#getting-started-sharing-orgs) for more details.  > --NOTE:-- Use this resource to manage resource sharing within your organization, --not-- the `aws.organizations.Organization` resource with `ram.amazonaws.com` configured in `aws_service_access_principals`.",
        RAM_SharingWithOrganization.GetTypes(),
      ),
    ],
    [
      ResourceType.RBIN_RULE,
      new ResourceProperty(
        "Resource for managing an AWS RBin Rule.",
        RBIN_Rule.GetTypes(),
      ),
    ],
    [
      ResourceType.RDS_CERTIFICATE,
      new ResourceProperty("", RDS_Certificate.GetTypes()),
    ],
    [
      ResourceType.RDS_CLUSTER,
      new ResourceProperty(
        "Manages a [RDS Aurora Cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_Aurora.html) or a [RDS Multi-AZ DB Cluster](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html). To manage cluster instances that inherit configuration from the cluster (when not running the cluster in `serverless` engine mode), see the `aws.rds.ClusterInstance` resource. To manage non-Aurora DB instances (e.g., MySQL, PostgreSQL, SQL Server, etc.), see the `aws.rds.Instance` resource.  For information on the difference between the available Aurora MySQL engines see [Comparison between Aurora MySQL 1 and Aurora MySQL 2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AuroraMySQL.Updates.20180206.html) in the Amazon RDS User Guide.  Changes to an RDS Cluster can occur when you manually change a parameter, such as `port`, and are reflected in the next maintenance window. Because of this, this provider may report a difference in its planning phase because a modification has not yet taken place. You can use the `apply_immediately` flag to instruct the service to apply the change immediately (see documentation below).  > --Note:-- Multi-AZ DB clusters are supported only for the MySQL and PostgreSQL DB engines.  > --Note:-- `ca_certificate_identifier` is only supported for Multi-AZ DB clusters.  > --Note:-- using `apply_immediately` can result in a brief downtime as the server reboots. See the AWS Docs on [RDS Maintenance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html) for more information.  > --Note:-- All arguments including the username and password will be stored in the raw state as plain-text. > --NOTE on RDS Clusters and RDS Cluster Role Associations:-- Pulumi provides both a standalone RDS Cluster Role Association - (an association between an RDS Cluster and a single IAM Role) and an RDS Cluster resource with `iam_roles` attributes. Use one resource or the other to associate IAM Roles and RDS Clusters. Not doing so will cause a conflict of associations and will result in the association being overwritten.",
        RDS_Cluster.GetTypes(),
      ),
    ],
    [
      ResourceType.RDS_CLUSTERACTIVITYSTREAM,
      new ResourceProperty(
        "Manages RDS Aurora Cluster Database Activity Streams.  Database Activity Streams have some limits and requirements, refer to the [Monitoring Amazon Aurora using Database Activity Streams](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html) documentation for detailed limitations and requirements.  > --Note:-- This resource always calls the RDS [`StartActivityStream`][2] API with the `ApplyImmediately` parameter set to `true`. This is because the provider needs the activity stream to be started in order for it to get the associated attributes.  > --Note:-- This resource depends on having at least one `aws.rds.ClusterInstance` created. To avoid race conditions when all resources are being created together, add an explicit resource reference using the resource `depends_on` meta-argument.  > --Note:-- This resource is available in all regions except the following: `cn-north-1`, `cn-northwest-1`, `us-gov-east-1`, `us-gov-west-1`",
        RDS_ClusterActivityStream.GetTypes(),
      ),
    ],
    [
      ResourceType.RDS_CLUSTERENDPOINT,
      new ResourceProperty(
        "Manages an RDS Aurora Cluster Custom Endpoint. You can refer to the [User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.Endpoints.html#Aurora.Endpoints.Cluster).",
        RDS_ClusterEndpoint.GetTypes(),
      ),
    ],
    [
      ResourceType.RDS_CLUSTERINSTANCE,
      new ResourceProperty(
        "Provides an RDS Cluster Instance Resource. A Cluster Instance Resource defines attributes that are specific to a single instance in a RDS Cluster, specifically running Amazon Aurora.  Unlike other RDS resources that support replication, with Amazon Aurora you do not designate a primary and subsequent replicas. Instead, you simply add RDS Instances and Aurora manages the replication. You can use the [count][5] meta-parameter to make multiple instances and join them all to the same RDS Cluster, or you may specify different Cluster Instance resources with various `instance_class` sizes.  For more information on Amazon Aurora, see [Aurora on Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Aurora.html) in the Amazon RDS User Guide.  > --NOTE:-- Deletion Protection from the RDS service can only be enabled at the cluster level, not for individual cluster instances. You can still add the [`protect` CustomResourceOption](https://www.pulumi.com/docs/intro/concepts/programming-model/#protect) to this resource configuration if you desire protection from accidental deletion.  > --NOTE:-- `aurora` is no longer a valid `engine` because of [Amazon Aurora's MySQL-Compatible Edition version 1 end of life](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.MySQL56.EOL.html).",
        RDS_ClusterInstance.GetTypes(),
      ),
    ],
    [
      ResourceType.RDS_CLUSTERPARAMETERGROUP,
      new ResourceProperty(
        "Provides an RDS DB cluster parameter group resource. Documentation of the available parameters for various Aurora engines can be found at:  - [Aurora MySQL Parameters](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AuroraMySQL.Reference.html) - [Aurora PostgreSQL Parameters](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AuroraPostgreSQL.Reference.html)",
        RDS_ClusterParameterGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.RDS_CLUSTERROLEASSOCIATION,
      new ResourceProperty(
        "Manages a RDS DB Cluster association with an IAM Role. Example use cases:  - [Creating an IAM Role to Allow Amazon Aurora to Access AWS Services](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.Authorizing.IAM.CreateRole.html) - [Importing Amazon S3 Data into an RDS PostgreSQL DB Cluster](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PostgreSQL.S3Import.html)",
        RDS_ClusterRoleAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.RDS_CLUSTERSNAPSHOT,
      new ResourceProperty(
        "Manages an RDS database cluster snapshot for Aurora clusters. For managing RDS database instance snapshots, see the `aws.rds.Snapshot` resource.",
        RDS_ClusterSnapshot.GetTypes(),
      ),
    ],
    [
      ResourceType.RDS_CUSTOMDBENGINEVERSION,
      new ResourceProperty(
        "Provides an custom engine version (CEV) resource for Amazon RDS Custom. For additional information, see [Working with CEVs for RDS Custom for Oracle](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html) and [Working with CEVs for RDS Custom for SQL Server](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev-sqlserver.html) in the the [RDS User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html).",
        RDS_CustomDbEngineVersion.GetTypes(),
      ),
    ],
    [
      ResourceType.RDS_EVENTSUBSCRIPTION,
      new ResourceProperty(
        "Provides a DB event subscription resource.",
        RDS_EventSubscription.GetTypes(),
      ),
    ],
    [
      ResourceType.RDS_EXPORTTASK,
      new ResourceProperty(
        "Resource for managing an AWS RDS (Relational Database) Export Task.",
        RDS_ExportTask.GetTypes(),
      ),
    ],
    [
      ResourceType.RDS_GLOBALCLUSTER,
      new ResourceProperty(
        "Manages an RDS Global Cluster, which is an Aurora global database spread across multiple regions. The global database contains a single primary cluster with read-write capability, and a read-only secondary cluster that receives data from the primary cluster through high-speed replication performed by the Aurora storage subsystem.  More information about Aurora global databases can be found in the [Aurora User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html#aurora-global-database-creating).",
        RDS_GlobalCluster.GetTypes(),
      ),
    ],
    [
      ResourceType.RDS_INSTANCE,
      new ResourceProperty(
        "Provides an RDS instance resource.  A DB instance is an isolated database environment in the cloud.  A DB instance can contain multiple user-created databases.  Changes to a DB instance can occur when you manually change a parameter, such as `allocated_storage`, and are reflected in the next maintenance window. Because of this, this provider may report a difference in its planning phase because a modification has not yet taken place. You can use the `apply_immediately` flag to instruct the service to apply the change immediately (see documentation below).  When upgrading the major version of an engine, `allow_major_version_upgrade` must be set to `true`.  > --Note:-- using `apply_immediately` can result in a brief downtime as the server reboots. See the AWS Docs on [RDS Instance Maintenance][instance-maintenance] for more information.  > --Note:-- All arguments including the username and password will be stored in the raw state as plain-text. Read more about sensitive data instate.    ## RDS Instance Class Types  Amazon RDS supports instance classes for the following use cases: General-purpose, Memory-optimized, Burstable Performance, and Optimized-reads. For more information please read the AWS RDS documentation about [DB Instance Class Types](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html)  ## Low-Downtime Updates  By default, RDS applies updates to DB Instances in-place, which can lead to service interruptions. Low-downtime updates minimize service interruptions by performing the updates with an [RDS Blue/Green deployment][blue-green] and switching over the instances when complete.  Low-downtime updates are only available for DB Instances using MySQL, MariaDB and PostgreSQL, as other engines are not supported by RDS Blue/Green deployments. They cannot be used with DB Instances with replicas.  Backups must be enabled to use low-downtime updates.  Enable low-downtime updates by setting `blue_green_update.enabled` to `true`.",
        RDS_Instance.GetTypes(),
      ),
    ],
    [
      ResourceType.RDS_INSTANCEAUTOMATEDBACKUPSREPLICATION,
      new ResourceProperty(
        "Manage cross-region replication of automated backups to a different AWS Region. Documentation for cross-region automated backup replication can be found at:  - [Replicating automated backups to another AWS Region](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html)  > --Note:-- This resource has to be created in the destination region.",
        RDS_InstanceAutomatedBackupsReplication.GetTypes(),
      ),
    ],
    [
      ResourceType.RDS_INTEGRATION,
      new ResourceProperty(
        "Resource for managing an AWS RDS (Relational Database) zero-ETL integration. You can refer to the [User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/zero-etl.setting-up.html).",
        RDS_Integration.GetTypes(),
      ),
    ],
    [
      ResourceType.RDS_OPTIONGROUP,
      new ResourceProperty(
        "Provides an RDS DB option group resource. Documentation of the available options for various RDS engines can be found at:  - [MariaDB Options](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.MariaDB.Options.html) - [Microsoft SQL Server Options](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.SQLServer.Options.html) - [MySQL Options](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.MySQL.Options.html) - [Oracle Options](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.Oracle.Options.html)",
        RDS_OptionGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.RDS_PARAMETERGROUP,
      new ResourceProperty(
        "Provides an RDS DB parameter group resource. Documentation of the available parameters for various RDS engines can be found at:  - [Aurora MySQL Parameters](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AuroraMySQL.Reference.html) - [Aurora PostgreSQL Parameters](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AuroraPostgreSQL.Reference.html) - [MariaDB Parameters](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.MariaDB.Parameters.html) - [Oracle Parameters](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ModifyInstance.Oracle.html#USER_ModifyInstance.Oracle.sqlnet) - [PostgreSQL Parameters](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.PostgreSQL.CommonDBATasks.html#Appendix.PostgreSQL.CommonDBATasks.Parameters)  > --Hands-on:-- For an example of the `aws.rds.ParameterGroup` in use, follow the Manage AWS RDS Instances tutorial on HashiCorp Learn.  > --NOTE--: to make diffs less confusing, the AWS provider will ignore changes for a `parameter` whose `value` remains unchanged but whose `apply_method` is changing (e.g., from `immediate` to `pending-reboot`, or `pending-reboot` to `immediate`). This matches the cloud: if only the apply method of a parameter is changing, the AWS API will not register this change. To change the `apply_method` of a parameter, its value must also change.",
        RDS_ParameterGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.RDS_PROXY,
      new ResourceProperty(
        "Provides an RDS DB proxy resource. For additional information, see the [RDS User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.html).",
        RDS_Proxy.GetTypes(),
      ),
    ],
    [
      ResourceType.RDS_PROXYDEFAULTTARGETGROUP,
      new ResourceProperty(
        "Provides a resource to manage an RDS DB proxy default target group resource.  The `aws.rds.ProxyDefaultTargetGroup` behaves differently from normal resources, in that the provider does not _create_ or _destroy_ this resource, since it implicitly exists as part of an RDS DB Proxy. On the provider resource creation it is automatically imported and on resource destruction, the provider performs no actions in RDS.",
        RDS_ProxyDefaultTargetGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.RDS_PROXYENDPOINT,
      new ResourceProperty(
        "Provides an RDS DB proxy endpoint resource. For additional information, see the [RDS User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy-endpoints.html).",
        RDS_ProxyEndpoint.GetTypes(),
      ),
    ],
    [
      ResourceType.RDS_PROXYTARGET,
      new ResourceProperty(
        "Provides an RDS DB proxy target resource.",
        RDS_ProxyTarget.GetTypes(),
      ),
    ],
    [
      ResourceType.RDS_RESERVEDINSTANCE,
      new ResourceProperty(
        "Manages an RDS DB Reserved Instance.  > --NOTE:-- Once created, a reservation is valid for the `duration` of the provided `offering_id` and cannot be deleted. Performing a `destroy` will only remove the resource from state. For more information see [RDS Reserved Instances Documentation](https://aws.amazon.com/rds/reserved-instances/) and [PurchaseReservedDBInstancesOffering](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_PurchaseReservedDBInstancesOffering.html).  > --NOTE:-- Due to the expense of testing this resource, we provide it as best effort. If you find it useful, and have the ability to help test or notice issues, consider reaching out to us on GitHub.",
        RDS_ReservedInstance.GetTypes(),
      ),
    ],
    [
      ResourceType.RDS_ROLEASSOCIATION,
      new ResourceProperty(
        "Manages an RDS DB Instance association with an IAM Role. Example use cases:",
        RDS_RoleAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.RDS_SNAPSHOT,
      new ResourceProperty(
        "Manages an RDS database instance snapshot. For managing RDS database cluster snapshots, see the `aws.rds.ClusterSnapshot` resource.",
        RDS_Snapshot.GetTypes(),
      ),
    ],
    [
      ResourceType.RDS_SNAPSHOTCOPY,
      new ResourceProperty(
        "Manages an RDS database instance snapshot copy. For managing RDS database cluster snapshots, see the `aws.rds.ClusterSnapshot` resource.",
        RDS_SnapshotCopy.GetTypes(),
      ),
    ],
    [
      ResourceType.RDS_SUBNETGROUP,
      new ResourceProperty(
        "Provides an RDS DB subnet group resource.",
        RDS_SubnetGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.REDSHIFT_AUTHENTICATIONPROFILE,
      new ResourceProperty(
        "Creates a Redshift authentication profile",
        REDSHIFT_AuthenticationProfile.GetTypes(),
      ),
    ],
    [
      ResourceType.REDSHIFT_CLUSTER,
      new ResourceProperty(
        "Provides a Redshift Cluster Resource.   > --NOTE:-- A Redshift cluster's default IAM role can be managed both by this resource's `default_iam_role_arn` argument and the `aws.redshift.ClusterIamRoles` resource's `default_iam_role_arn` argument. Do not configure different values for both arguments. Doing so will cause a conflict of default IAM roles.",
        REDSHIFT_Cluster.GetTypes(),
      ),
    ],
    [
      ResourceType.REDSHIFT_CLUSTERIAMROLES,
      new ResourceProperty(
        "Provides a Redshift Cluster IAM Roles resource.  > --NOTE:-- A Redshift cluster's default IAM role can be managed both by this resource's `default_iam_role_arn` argument and the `aws.redshift.Cluster` resource's `default_iam_role_arn` argument. Do not configure different values for both arguments. Doing so will cause a conflict of default IAM roles.",
        REDSHIFT_ClusterIamRoles.GetTypes(),
      ),
    ],
    [
      ResourceType.REDSHIFT_CLUSTERSNAPSHOT,
      new ResourceProperty(
        "Creates a Redshift cluster snapshot",
        REDSHIFT_ClusterSnapshot.GetTypes(),
      ),
    ],
    [
      ResourceType.REDSHIFT_DATASHAREAUTHORIZATION,
      new ResourceProperty(
        "Resource for managing an AWS Redshift Data Share Authorization.",
        REDSHIFT_DataShareAuthorization.GetTypes(),
      ),
    ],
    [
      ResourceType.REDSHIFT_DATASHARECONSUMERASSOCIATION,
      new ResourceProperty(
        "Resource for managing an AWS Redshift Data Share Consumer Association.",
        REDSHIFT_DataShareConsumerAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.REDSHIFT_ENDPOINTACCESS,
      new ResourceProperty(
        "Creates a new Amazon Redshift endpoint access.",
        REDSHIFT_EndpointAccess.GetTypes(),
      ),
    ],
    [
      ResourceType.REDSHIFT_ENDPOINTAUTHORIZATION,
      new ResourceProperty(
        "Creates a new Amazon Redshift endpoint authorization.",
        REDSHIFT_EndpointAuthorization.GetTypes(),
      ),
    ],
    [
      ResourceType.REDSHIFT_EVENTSUBSCRIPTION,
      new ResourceProperty(
        "Provides a Redshift event subscription resource.",
        REDSHIFT_EventSubscription.GetTypes(),
      ),
    ],
    [
      ResourceType.REDSHIFT_HSMCLIENTCERTIFICATE,
      new ResourceProperty(
        "Creates an HSM client certificate that an Amazon Redshift cluster will use to connect to the client's HSM in order to store and retrieve the keys used to encrypt the cluster databases.",
        REDSHIFT_HsmClientCertificate.GetTypes(),
      ),
    ],
    [
      ResourceType.REDSHIFT_HSMCONFIGURATION,
      new ResourceProperty(
        "Creates an HSM configuration that contains the information required by an Amazon Redshift cluster to store and use database encryption keys in a Hardware Security Module (HSM).",
        REDSHIFT_HsmConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.REDSHIFT_LOGGING,
      new ResourceProperty(
        "Resource for managing an AWS Redshift Logging configuration.",
        REDSHIFT_Logging.GetTypes(),
      ),
    ],
    [
      ResourceType.REDSHIFT_PARAMETERGROUP,
      new ResourceProperty(
        "Provides a Redshift Cluster parameter group resource.",
        REDSHIFT_ParameterGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.REDSHIFT_PARTNER,
      new ResourceProperty(
        "Creates a new Amazon Redshift Partner Integration.",
        REDSHIFT_Partner.GetTypes(),
      ),
    ],
    [
      ResourceType.REDSHIFT_RESOURCEPOLICY,
      new ResourceProperty(
        "Creates a new Amazon Redshift Resource Policy.",
        REDSHIFT_ResourcePolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.REDSHIFT_SCHEDULEDACTION,
      new ResourceProperty("", REDSHIFT_ScheduledAction.GetTypes()),
    ],
    [
      ResourceType.REDSHIFT_SNAPSHOTCOPY,
      new ResourceProperty(
        "Resource for managing an AWS Redshift Snapshot Copy.",
        REDSHIFT_SnapshotCopy.GetTypes(),
      ),
    ],
    [
      ResourceType.REDSHIFT_SNAPSHOTCOPYGRANT,
      new ResourceProperty(
        "Creates a snapshot copy grant that allows AWS Redshift to encrypt copied snapshots with a customer master key from AWS KMS in a destination region.  Note that the grant must exist in the destination region, and not in the region of the cluster.",
        REDSHIFT_SnapshotCopyGrant.GetTypes(),
      ),
    ],
    [
      ResourceType.REDSHIFT_SNAPSHOTSCHEDULE,
      new ResourceProperty("", REDSHIFT_SnapshotSchedule.GetTypes()),
    ],
    [
      ResourceType.REDSHIFT_SNAPSHOTSCHEDULEASSOCIATION,
      new ResourceProperty("", REDSHIFT_SnapshotScheduleAssociation.GetTypes()),
    ],
    [
      ResourceType.REDSHIFT_SUBNETGROUP,
      new ResourceProperty(
        "Creates a new Amazon Redshift subnet group. You must provide a list of one or more subnets in your existing Amazon Virtual Private Cloud (Amazon VPC) when creating Amazon Redshift subnet group.",
        REDSHIFT_SubnetGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.REDSHIFT_USAGELIMIT,
      new ResourceProperty(
        "Creates a new Amazon Redshift Usage Limit.",
        REDSHIFT_UsageLimit.GetTypes(),
      ),
    ],
    [
      ResourceType.REDSHIFTDATA_STATEMENT,
      new ResourceProperty(
        "Executes a Redshift Data Statement.",
        REDSHIFTDATA_Statement.GetTypes(),
      ),
    ],
    [
      ResourceType.REDSHIFTSERVERLESS_CUSTOMDOMAINASSOCIATION,
      new ResourceProperty(
        "Resource for managing an AWS Redshift Serverless Custom Domain Association.",
        REDSHIFTSERVERLESS_CustomDomainAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.REDSHIFTSERVERLESS_ENDPOINTACCESS,
      new ResourceProperty(
        "Creates a new Amazon Redshift Serverless Endpoint Access.",
        REDSHIFTSERVERLESS_EndpointAccess.GetTypes(),
      ),
    ],
    [
      ResourceType.REDSHIFTSERVERLESS_NAMESPACE,
      new ResourceProperty(
        "Creates a new Amazon Redshift Serverless Namespace.",
        REDSHIFTSERVERLESS_Namespace.GetTypes(),
      ),
    ],
    [
      ResourceType.REDSHIFTSERVERLESS_RESOURCEPOLICY,
      new ResourceProperty(
        "Creates a new Amazon Redshift Serverless Resource Policy.",
        REDSHIFTSERVERLESS_ResourcePolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.REDSHIFTSERVERLESS_SNAPSHOT,
      new ResourceProperty(
        "Creates a new Amazon Redshift Serverless Snapshot.",
        REDSHIFTSERVERLESS_Snapshot.GetTypes(),
      ),
    ],
    [
      ResourceType.REDSHIFTSERVERLESS_USAGELIMIT,
      new ResourceProperty(
        "Creates a new Amazon Redshift Serverless Usage Limit.",
        REDSHIFTSERVERLESS_UsageLimit.GetTypes(),
      ),
    ],
    [
      ResourceType.REDSHIFTSERVERLESS_WORKGROUP,
      new ResourceProperty(
        "Creates a new Amazon Redshift Serverless Workgroup.",
        REDSHIFTSERVERLESS_Workgroup.GetTypes(),
      ),
    ],
    [
      ResourceType.REKOGNITION_COLLECTION,
      new ResourceProperty(
        "Resource for managing an AWS Rekognition Collection.",
        REKOGNITION_Collection.GetTypes(),
      ),
    ],
    [
      ResourceType.REKOGNITION_PROJECT,
      new ResourceProperty(
        "Resource for managing an AWS Rekognition Project.",
        REKOGNITION_Project.GetTypes(),
      ),
    ],
    [
      ResourceType.REKOGNITION_STREAMPROCESSOR,
      new ResourceProperty(
        "Resource for managing an AWS Rekognition Stream Processor.  > This resource must be configured specifically for your use case, and not all options are compatible with one another. See [Stream Processor API documentation](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateStreamProcessor.html#rekognition-CreateStreamProcessor-request-Input) for configuration information.  > Stream Processors configured for Face Recognition cannot have _any_ properties updated after the fact, and it will result in an AWS API error.",
        REKOGNITION_StreamProcessor.GetTypes(),
      ),
    ],
    [
      ResourceType.RESOURCEEXPLORER_INDEX,
      new ResourceProperty(
        "Provides a resource to manage a Resource Explorer index in the current AWS Region.",
        RESOURCEEXPLORER_Index.GetTypes(),
      ),
    ],
    [
      ResourceType.RESOURCEEXPLORER_VIEW,
      new ResourceProperty(
        "Provides a resource to manage a Resource Explorer view.",
        RESOURCEEXPLORER_View.GetTypes(),
      ),
    ],
    [
      ResourceType.RESOURCEGROUPS_GROUP,
      new ResourceProperty(
        "Provides a Resource Group.",
        RESOURCEGROUPS_Group.GetTypes(),
      ),
    ],
    [
      ResourceType.RESOURCEGROUPS_RESOURCE,
      new ResourceProperty(
        "Resource for managing an AWS Resource Groups Resource.",
        RESOURCEGROUPS_Resource.GetTypes(),
      ),
    ],
    [
      ResourceType.ROLESANYWHERE_PROFILE,
      new ResourceProperty(
        "Resource for managing a Roles Anywhere Profile.",
        ROLESANYWHERE_Profile.GetTypes(),
      ),
    ],
    [
      ResourceType.ROLESANYWHERE_TRUSTANCHOR,
      new ResourceProperty(
        "Resource for managing a Roles Anywhere Trust Anchor.",
        ROLESANYWHERE_TrustAnchor.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53_CIDRCOLLECTION,
      new ResourceProperty(
        "Provides a Route53 CIDR collection resource.",
        ROUTE53_CidrCollection.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53_CIDRLOCATION,
      new ResourceProperty(
        "Provides a Route53 CIDR location resource.",
        ROUTE53_CidrLocation.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53_DELEGATIONSET,
      new ResourceProperty(
        "Provides a [Route53 Delegation Set](https://docs.aws.amazon.com/Route53/latest/APIReference/API-actions-by-function.html#actions-by-function-reusable-delegation-sets) resource.",
        ROUTE53_DelegationSet.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53_HEALTHCHECK,
      new ResourceProperty(
        "Provides a Route53 health check.",
        ROUTE53_HealthCheck.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53_HOSTEDZONEDNSSEC,
      new ResourceProperty(
        "Manages Route 53 Hosted Zone Domain Name System Security Extensions (DNSSEC). For more information about managing DNSSEC in Route 53, see the [Route 53 Developer Guide](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring-dnssec.html).  !> --WARNING:-- If you disable DNSSEC signing for your hosted zone before the DNS changes have propagated, your domain could become unavailable on the internet. When you remove the DS records, you must wait until the longest TTL for the DS records that you remove has expired before you complete the step to disable DNSSEC signing. Please refer to the [Route 53 Developer Guide - Disable DNSSEC](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring-dnssec-disable.html) for a detailed breakdown on the steps required to disable DNSSEC safely for a hosted zone.  > --Note:-- Route53 hosted zones are global resources, and as such any `aws.kms.Key` that you use as part of a signing key needs to be located in the `us-east-1` region. In the example below, the main AWS provider declaration is for `us-east-1`, however if you are provisioning your AWS resources in a different region, you will need to specify a provider alias and use that attached to the `aws.kms.Key` resource as described in the provider alias documentation.",
        ROUTE53_HostedZoneDnsSec.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53_KEYSIGNINGKEY,
      new ResourceProperty(
        "Manages a Route 53 Key Signing Key. To manage Domain Name System Security Extensions (DNSSEC) for a Hosted Zone, see the `aws.route53.HostedZoneDnsSec` resource. For more information about managing DNSSEC in Route 53, see the [Route 53 Developer Guide](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring-dnssec.html).",
        ROUTE53_KeySigningKey.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53_QUERYLOG,
      new ResourceProperty(
        "Provides a Route53 query logging configuration resource.  > --NOTE:-- There are restrictions on the configuration of query logging. Notably, the CloudWatch log group must be in the `us-east-1` region, a permissive CloudWatch log resource policy must be in place, and the Route53 hosted zone must be public. See [Configuring Logging for DNS Queries](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html?console_help=true#query-logs-configuring) for additional details.",
        ROUTE53_QueryLog.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53_RECORD,
      new ResourceProperty(
        "Provides a Route53 record resource.",
        ROUTE53_Record.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53_RESOLVERCONFIG,
      new ResourceProperty(
        "Provides a Route 53 Resolver config resource.",
        ROUTE53_ResolverConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53_RESOLVERDNSSECCONFIG,
      new ResourceProperty(
        "Provides a Route 53 Resolver DNSSEC config resource.",
        ROUTE53_ResolverDnsSecConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53_RESOLVERENDPOINT,
      new ResourceProperty(
        "Provides a Route 53 Resolver endpoint resource.",
        ROUTE53_ResolverEndpoint.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53_RESOLVERFIREWALLCONFIG,
      new ResourceProperty(
        "Provides a Route 53 Resolver DNS Firewall config resource.",
        ROUTE53_ResolverFirewallConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53_RESOLVERFIREWALLDOMAINLIST,
      new ResourceProperty(
        "Provides a Route 53 Resolver DNS Firewall domain list resource.",
        ROUTE53_ResolverFirewallDomainList.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53_RESOLVERFIREWALLRULE,
      new ResourceProperty(
        "Provides a Route 53 Resolver DNS Firewall rule resource.",
        ROUTE53_ResolverFirewallRule.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53_RESOLVERFIREWALLRULEGROUP,
      new ResourceProperty(
        "Provides a Route 53 Resolver DNS Firewall rule group resource.",
        ROUTE53_ResolverFirewallRuleGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53_RESOLVERFIREWALLRULEGROUPASSOCIATION,
      new ResourceProperty(
        "Provides a Route 53 Resolver DNS Firewall rule group association resource.",
        ROUTE53_ResolverFirewallRuleGroupAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53_RESOLVERQUERYLOGCONFIG,
      new ResourceProperty(
        "Provides a Route 53 Resolver query logging configuration resource.",
        ROUTE53_ResolverQueryLogConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53_RESOLVERQUERYLOGCONFIGASSOCIATION,
      new ResourceProperty(
        "Provides a Route 53 Resolver query logging configuration association resource.",
        ROUTE53_ResolverQueryLogConfigAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53_RESOLVERRULE,
      new ResourceProperty(
        "Provides a Route53 Resolver rule.",
        ROUTE53_ResolverRule.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53_RESOLVERRULEASSOCIATION,
      new ResourceProperty(
        "Provides a Route53 Resolver rule association.",
        ROUTE53_ResolverRuleAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53_TRAFFICPOLICY,
      new ResourceProperty(
        "Manages a Route53 Traffic Policy.",
        ROUTE53_TrafficPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53_TRAFFICPOLICYINSTANCE,
      new ResourceProperty(
        "Provides a Route53 traffic policy instance resource.",
        ROUTE53_TrafficPolicyInstance.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53_VPCASSOCIATIONAUTHORIZATION,
      new ResourceProperty(
        "Authorizes a VPC in a different account to be associated with a local Route53 Hosted Zone.",
        ROUTE53_VpcAssociationAuthorization.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53_ZONE,
      new ResourceProperty(
        "Manages a Route53 Hosted Zone. For managing Domain Name System Security Extensions (DNSSEC), see the `aws.route53.KeySigningKey` and `aws.route53.HostedZoneDnsSec` resources.",
        ROUTE53_Zone.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53_ZONEASSOCIATION,
      new ResourceProperty(
        "Manages a Route53 Hosted Zone VPC association. VPC associations can only be made on private zones. See the `aws.route53.VpcAssociationAuthorization` resource for setting up cross-account associations.  > --NOTE:-- Unless explicit association ordering is required (e.g., a separate cross-account association authorization), usage of this resource is not recommended. Use the `vpc` configuration blocks available within the `aws.route53.Zone` resource instead.  > --NOTE:-- This provider provides both this standalone Zone VPC Association resource and exclusive VPC associations defined in-line in the `aws.route53.Zone` resource via `vpc` configuration blocks. At this time, you cannot use those in-line VPC associations in conjunction with this resource and the same zone ID otherwise it will cause a perpetual difference in plan output. You can optionally use [`ignoreChanges`](https://www.pulumi.com/docs/intro/concepts/programming-model/#ignorechanges) in the `aws.route53.Zone` resource to manage additional associations via this resource.",
        ROUTE53_ZoneAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53DOMAINS_DELEGATIONSIGNERRECORD,
      new ResourceProperty(
        "Provides a resource to manage a [delegation signer record](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring-dnssec-enable-signing.html#dns-configuring-dnssec-enable-signing-step-1) in the parent DNS zone for domains registered with Route53.",
        ROUTE53DOMAINS_DelegationSignerRecord.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53DOMAINS_REGISTEREDDOMAIN,
      new ResourceProperty(
        'Provides a resource to manage a domain that has been [registered](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html) and associated with the current AWS account.  --This is an advanced resource-- and has special caveats to be aware of when using it. Please read this document in its entirety before using this resource.  The `aws.route53domains.RegisteredDomain` resource behaves differently from normal resources in that if a domain has been registered, the provider does not _register_ this domain, but instead "adopts" it into management. A destroy does not delete the domain but does remove the resource from state.',
        ROUTE53DOMAINS_RegisteredDomain.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53RECOVERYCONTROL_CLUSTER,
      new ResourceProperty(
        "Provides an AWS Route 53 Recovery Control Config Cluster.",
        ROUTE53RECOVERYCONTROL_Cluster.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53RECOVERYCONTROL_CONTROLPANEL,
      new ResourceProperty(
        "Provides an AWS Route 53 Recovery Control Config Control Panel.",
        ROUTE53RECOVERYCONTROL_ControlPanel.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53RECOVERYCONTROL_ROUTINGCONTROL,
      new ResourceProperty(
        "Provides an AWS Route 53 Recovery Control Config Routing Control.",
        ROUTE53RECOVERYCONTROL_RoutingControl.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53RECOVERYCONTROL_SAFETYRULE,
      new ResourceProperty(
        "Provides an AWS Route 53 Recovery Control Config Safety Rule",
        ROUTE53RECOVERYCONTROL_SafetyRule.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53RECOVERYREADINESS_CELL,
      new ResourceProperty(
        "Provides an AWS Route 53 Recovery Readiness Cell.",
        ROUTE53RECOVERYREADINESS_Cell.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53RECOVERYREADINESS_READINESSCHECK,
      new ResourceProperty(
        "Provides an AWS Route 53 Recovery Readiness Readiness Check.",
        ROUTE53RECOVERYREADINESS_ReadinessCheck.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53RECOVERYREADINESS_RECOVERYGROUP,
      new ResourceProperty(
        "Provides an AWS Route 53 Recovery Readiness Recovery Group.",
        ROUTE53RECOVERYREADINESS_RecoveryGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.ROUTE53RECOVERYREADINESS_RESOURCESET,
      new ResourceProperty(
        "Provides an AWS Route 53 Recovery Readiness Resource Set.",
        ROUTE53RECOVERYREADINESS_ResourceSet.GetTypes(),
      ),
    ],
    [
      ResourceType.RUM_APPMONITOR,
      new ResourceProperty(
        "Provides a CloudWatch RUM App Monitor resource.",
        RUM_AppMonitor.GetTypes(),
      ),
    ],
    [
      ResourceType.RUM_METRICSDESTINATION,
      new ResourceProperty(
        "Provides a CloudWatch RUM Metrics Destination resource.",
        RUM_MetricsDestination.GetTypes(),
      ),
    ],
    [
      ResourceType.S3_ACCESSPOINT,
      new ResourceProperty(
        "Provides a resource to manage an S3 Access Point.  > --NOTE on Access Points and Access Point Policies:-- This provider provides both a standalone Access Point Policy resource and an Access Point resource with a resource policy defined in-line. You cannot use an Access Point with in-line resource policy in conjunction with an Access Point Policy resource. Doing so will cause a conflict of policies and will overwrite the access point's resource policy.  > Advanced usage: To use a custom API endpoint for this resource, use the `s3control` endpoint provider configuration), not the `s3` endpoint provider configuration.  > This resource cannot be used with S3 directory buckets.",
        S3_AccessPoint.GetTypes(),
      ),
    ],
    [
      ResourceType.S3_ACCOUNTPUBLICACCESSBLOCK,
      new ResourceProperty(
        "Manages S3 account-level Public Access Block configuration. For more information about these settings, see the [AWS S3 Block Public Access documentation](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html).  > --NOTE:-- Each AWS account may only have one S3 Public Access Block configuration. Multiple configurations of the resource against the same AWS account will cause a perpetual difference.  > Advanced usage: To use a custom API endpoint for this resource, use the `s3control` endpoint provider configuration, not the `s3` endpoint provider configuration.",
        S3_AccountPublicAccessBlock.GetTypes(),
      ),
    ],
    [
      ResourceType.S3_ANALYTICSCONFIGURATION,
      new ResourceProperty(
        "Provides a S3 bucket [analytics configuration](https://docs.aws.amazon.com/AmazonS3/latest/dev/analytics-storage-class.html) resource.  > This resource cannot be used with S3 directory buckets.",
        S3_AnalyticsConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.S3_BUCKET,
      new ResourceProperty(
        "Provides a S3 bucket resource.  > This resource provides functionality for managing S3 general purpose buckets in an AWS Partition. To manage Amazon S3 Express directory buckets, use the `aws_directory_bucket` resource. To manage [S3 on Outposts](https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html), use the `aws.s3control.Bucket` resource.  > Object Lock can be enabled by using the `object_lock_enable` attribute or by using the `aws.s3.BucketObjectLockConfigurationV2` resource. Please note, that by using the resource, Object Lock can be enabled/disabled without destroying and recreating the bucket.",
        S3_Bucket.GetTypes(),
      ),
    ],
    [
      ResourceType.S3_BUCKETACCELERATECONFIGURATIONV2,
      new ResourceProperty(
        "Provides an S3 bucket accelerate configuration resource. See the [Requirements for using Transfer Acceleration](https://docs.aws.amazon.com/AmazonS3/latest/userguide/transfer-acceleration.html#transfer-acceleration-requirements) for more details.  > This resource cannot be used with S3 directory buckets.",
        S3_BucketAccelerateConfigurationV2.GetTypes(),
      ),
    ],
    [
      ResourceType.S3_BUCKETACLV2,
      new ResourceProperty(
        "Provides an S3 bucket ACL resource.  > --Note:-- destroy does not delete the S3 Bucket ACL but does remove the resource from state.  > This resource cannot be used with S3 directory buckets.",
        S3_BucketAclV2.GetTypes(),
      ),
    ],
    [
      ResourceType.S3_BUCKETCORSCONFIGURATIONV2,
      new ResourceProperty(
        "Provides an S3 bucket CORS configuration resource. For more information about CORS, go to [Enabling Cross-Origin Resource Sharing](https://docs.aws.amazon.com/AmazonS3/latest/userguide/cors.html) in the Amazon S3 User Guide.  > --NOTE:-- S3 Buckets only support a single CORS configuration. Declaring multiple `aws.s3.BucketCorsConfigurationV2` resources to the same S3 Bucket will cause a perpetual difference in configuration.  > This resource cannot be used with S3 directory buckets.",
        S3_BucketCorsConfigurationV2.GetTypes(),
      ),
    ],
    [
      ResourceType.S3_BUCKETINTELLIGENTTIERINGCONFIGURATION,
      new ResourceProperty(
        "Provides an [S3 Intelligent-Tiering](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering.html) configuration resource.  > This resource cannot be used with S3 directory buckets.",
        S3_BucketIntelligentTieringConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.S3_BUCKETLIFECYCLECONFIGURATIONV2,
      new ResourceProperty(
        "Provides an independent configuration resource for S3 bucket [lifecycle configuration](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html).  An S3 Lifecycle configuration consists of one or more Lifecycle rules. Each rule consists of the following:  - Rule metadata (`id` and `status`) - Filter identifying objects to which the rule applies - One or more transition or expiration actions  For more information see the Amazon S3 User Guide on [`Lifecycle Configuration Elements`](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html).  > --NOTE:-- S3 Buckets only support a single lifecycle configuration. Declaring multiple `aws.s3.BucketLifecycleConfigurationV2` resources to the same S3 Bucket will cause a perpetual difference in configuration.  > --NOTE:-- Lifecycle configurations may take some time to fully propagate to all AWS S3 systems. Running Pulumi operations shortly after creating a lifecycle configuration may result in changes that affect configuration idempotence. See the Amazon S3 User Guide on [setting lifecycle configuration on a bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/how-to-set-lifecycle-configuration-intro.html).  > This resource cannot be used with S3 directory buckets.",
        S3_BucketLifecycleConfigurationV2.GetTypes(),
      ),
    ],
    [
      ResourceType.S3_BUCKETLOGGINGV2,
      new ResourceProperty(
        "Provides an S3 bucket (server access) logging resource. For more information, see [Logging requests using server access logging](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerLogs.html) in the AWS S3 User Guide.  > --Note:-- Amazon S3 supports server access logging, AWS CloudTrail, or a combination of both. Refer to the [Logging options for Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/logging-with-S3.html) to decide which method meets your requirements.  > This resource cannot be used with S3 directory buckets.",
        S3_BucketLoggingV2.GetTypes(),
      ),
    ],
    [
      ResourceType.S3_BUCKETMETRIC,
      new ResourceProperty(
        "Provides a S3 bucket [metrics configuration](http://docs.aws.amazon.com/AmazonS3/latest/dev/metrics-configurations.html) resource.  > This resource cannot be used with S3 directory buckets.",
        S3_BucketMetric.GetTypes(),
      ),
    ],
    [
      ResourceType.S3_BUCKETNOTIFICATION,
      new ResourceProperty(
        'Manages a S3 Bucket Notification Configuration. For additional information, see the [Configuring S3 Event Notifications section in the Amazon S3 Developer Guide](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html).  > --NOTE:-- S3 Buckets only support a single notification configuration resource. Declaring multiple `aws.s3.BucketNotification` resources to the same S3 Bucket will cause a perpetual difference in configuration. This resource will overwrite any existing event notifications configured for the S3 bucket it\'s associated with. See the example "Trigger multiple Lambda functions" for an option of how to configure multiple triggers within this resource.  > This resource cannot be used with S3 directory buckets.',
        S3_BucketNotification.GetTypes(),
      ),
    ],
    [
      ResourceType.S3_BUCKETOBJECT,
      new ResourceProperty(
        "Provides an S3 object resource.",
        S3_BucketObject.GetTypes(),
      ),
    ],
    [
      ResourceType.S3_BUCKETOBJECTLOCKCONFIGURATIONV2,
      new ResourceProperty(
        "Provides an S3 bucket Object Lock configuration resource. For more information about Object Locking, go to [Using S3 Object Lock](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html) in the Amazon S3 User Guide.  > This resource can be used enable Object Lock for --new-- and --existing-- buckets.  > This resource cannot be used with S3 directory buckets.",
        S3_BucketObjectLockConfigurationV2.GetTypes(),
      ),
    ],
    [
      ResourceType.S3_BUCKETOBJECTV2,
      new ResourceProperty(
        "Provides an S3 object resource.",
        S3_BucketObjectv2.GetTypes(),
      ),
    ],
    [
      ResourceType.S3_BUCKETOWNERSHIPCONTROLS,
      new ResourceProperty(
        "Provides a resource to manage S3 Bucket Ownership Controls. For more information, see the [S3 Developer Guide](https://docs.aws.amazon.com/AmazonS3/latest/dev/about-object-ownership.html).  > This resource cannot be used with S3 directory buckets.",
        S3_BucketOwnershipControls.GetTypes(),
      ),
    ],
    [
      ResourceType.S3_BUCKETPOLICY,
      new ResourceProperty(
        "Attaches a policy to an S3 bucket resource.  > Policies can be attached to both S3 general purpose buckets and S3 directory buckets.",
        S3_BucketPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.S3_BUCKETPUBLICACCESSBLOCK,
      new ResourceProperty(
        "Manages S3 bucket-level Public Access Block configuration. For more information about these settings, see the [AWS S3 Block Public Access documentation](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html).  > This resource cannot be used with S3 directory buckets.",
        S3_BucketPublicAccessBlock.GetTypes(),
      ),
    ],
    [
      ResourceType.S3_BUCKETREPLICATIONCONFIG,
      new ResourceProperty(
        "Provides an independent configuration resource for S3 bucket [replication configuration](http://docs.aws.amazon.com/AmazonS3/latest/dev/crr.html).  > --NOTE:-- S3 Buckets only support a single replication configuration. Declaring multiple `aws.s3.BucketReplicationConfig` resources to the same S3 Bucket will cause a perpetual difference in configuration.  > This resource cannot be used with S3 directory buckets.",
        S3_BucketReplicationConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.S3_BUCKETREQUESTPAYMENTCONFIGURATIONV2,
      new ResourceProperty(
        "Provides an S3 bucket request payment configuration resource. For more information, see [Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html).  > --NOTE:-- Destroying an `aws.s3.BucketRequestPaymentConfigurationV2` resource resets the bucket's `payer` to the S3 default: the bucket owner.  > This resource cannot be used with S3 directory buckets.",
        S3_BucketRequestPaymentConfigurationV2.GetTypes(),
      ),
    ],
    [
      ResourceType.S3_BUCKETSERVERSIDEENCRYPTIONCONFIGURATIONV2,
      new ResourceProperty(
        "Provides a S3 bucket server-side encryption configuration resource.  > --NOTE:-- Destroying an `aws.s3.BucketServerSideEncryptionConfigurationV2` resource resets the bucket to [Amazon S3 bucket default encryption](https://docs.aws.amazon.com/AmazonS3/latest/userguide/default-encryption-faq.html).  > This resource cannot be used with S3 directory buckets.",
        S3_BucketServerSideEncryptionConfigurationV2.GetTypes(),
      ),
    ],
    [
      ResourceType.S3_BUCKETV2,
      new ResourceProperty(
        "Provides a S3 bucket resource.  > This resource provides functionality for managing S3 general purpose buckets in an AWS Partition. To manage Amazon S3 Express directory buckets, use the `aws_directory_bucket` resource. To manage [S3 on Outposts](https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html), use the `aws.s3control.Bucket` resource.  > Object Lock can be enabled by using the `object_lock_enable` attribute or by using the `aws.s3.BucketObjectLockConfigurationV2` resource. Please note, that by using the resource, Object Lock can be enabled/disabled without destroying and recreating the bucket.",
        S3_BucketV2.GetTypes(),
      ),
    ],
    [
      ResourceType.S3_BUCKETVERSIONINGV2,
      new ResourceProperty(
        "Provides a resource for controlling versioning on an S3 bucket. Deleting this resource will either suspend versioning on the associated S3 bucket or simply remove the resource from state if the associated S3 bucket is unversioned.  For more information, see [How S3 versioning works](https://docs.aws.amazon.com/AmazonS3/latest/userguide/manage-versioning-examples.html).  > --NOTE:-- If you are enabling versioning on the bucket for the first time, AWS recommends that you wait for 15 minutes after enabling versioning before issuing write operations (PUT or DELETE) on objects in the bucket.  > This resource cannot be used with S3 directory buckets.",
        S3_BucketVersioningV2.GetTypes(),
      ),
    ],
    [
      ResourceType.S3_BUCKETWEBSITECONFIGURATIONV2,
      new ResourceProperty(
        "Provides an S3 bucket website configuration resource. For more information, see [Hosting Websites on S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html).  > This resource cannot be used with S3 directory buckets.",
        S3_BucketWebsiteConfigurationV2.GetTypes(),
      ),
    ],
    [
      ResourceType.S3_DIRECTORYBUCKET,
      new ResourceProperty(
        "Provides an Amazon S3 Express directory bucket resource.",
        S3_DirectoryBucket.GetTypes(),
      ),
    ],
    [
      ResourceType.S3_INVENTORY,
      new ResourceProperty(
        "Provides a S3 bucket [inventory configuration](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html) resource.  > This resource cannot be used with S3 directory buckets.",
        S3_Inventory.GetTypes(),
      ),
    ],
    [
      ResourceType.S3_OBJECTCOPY,
      new ResourceProperty(
        "Provides a resource for copying an S3 object.",
        S3_ObjectCopy.GetTypes(),
      ),
    ],
    [
      ResourceType.S3CONTROL_ACCESSGRANT,
      new ResourceProperty(
        "Provides a resource to manage an S3 Access Grant. Each access grant has its own ID and gives an IAM user or role or a directory user, or group (the grantee) access to a registered location. You determine the level of access, such as `READ` or `READWRITE`. Before you can create a grant, you must have an S3 Access Grants instance in the same Region as the S3 data.",
        S3CONTROL_AccessGrant.GetTypes(),
      ),
    ],
    [
      ResourceType.S3CONTROL_ACCESSGRANTSINSTANCE,
      new ResourceProperty(
        "Provides a resource to manage an S3 Access Grants instance, which serves as a logical grouping for access grants. You can have one S3 Access Grants instance per Region in your account.",
        S3CONTROL_AccessGrantsInstance.GetTypes(),
      ),
    ],
    [
      ResourceType.S3CONTROL_ACCESSGRANTSINSTANCERESOURCEPOLICY,
      new ResourceProperty(
        "Provides a resource to manage an S3 Access Grants instance resource policy. Use a resource policy to manage cross-account access to your S3 Access Grants instance.",
        S3CONTROL_AccessGrantsInstanceResourcePolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.S3CONTROL_ACCESSGRANTSLOCATION,
      new ResourceProperty(
        "Provides a resource to manage an S3 Access Grants location. A location is an S3 resource (bucket or prefix) in a permission grant that the grantee can access. The S3 data must be in the same Region as your S3 Access Grants instance. When you register a location, you must include the IAM role that has permission to manage the S3 location that you are registering.",
        S3CONTROL_AccessGrantsLocation.GetTypes(),
      ),
    ],
    [
      ResourceType.S3CONTROL_ACCESSPOINTPOLICY,
      new ResourceProperty(
        "Provides a resource to manage an S3 Access Point resource policy.  > --NOTE on Access Points and Access Point Policies:-- The provider provides both a standalone Access Point Policy resource and an Access Point resource with a resource policy defined in-line. You cannot use an Access Point with in-line resource policy in conjunction with an Access Point Policy resource. Doing so will cause a conflict of policies and will overwrite the access point's resource policy.",
        S3CONTROL_AccessPointPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.S3CONTROL_BUCKET,
      new ResourceProperty(
        "Provides a resource to manage an S3 Control Bucket.  > This functionality is for managing [S3 on Outposts](https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html). To manage S3 Buckets in an AWS Partition, see the `aws.s3.BucketV2` resource.",
        S3CONTROL_Bucket.GetTypes(),
      ),
    ],
    [
      ResourceType.S3CONTROL_BUCKETLIFECYCLECONFIGURATION,
      new ResourceProperty(
        "Provides a resource to manage an S3 Control Bucket Lifecycle Configuration.  > --NOTE:-- Each S3 Control Bucket can only have one Lifecycle Configuration. Using multiple of this resource against the same S3 Control Bucket will result in perpetual differences each provider run.  > This functionality is for managing [S3 on Outposts](https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html). To manage S3 Bucket Lifecycle Configurations in an AWS Partition, see the `aws.s3.BucketV2` resource.",
        S3CONTROL_BucketLifecycleConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.S3CONTROL_BUCKETPOLICY,
      new ResourceProperty(
        "Provides a resource to manage an S3 Control Bucket Policy.  > This functionality is for managing [S3 on Outposts](https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html). To manage S3 Bucket Policies in an AWS Partition, see the `aws.s3.BucketPolicy` resource.",
        S3CONTROL_BucketPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.S3CONTROL_MULTIREGIONACCESSPOINT,
      new ResourceProperty(
        "Provides a resource to manage an S3 Multi-Region Access Point associated with specified buckets.  > This resource cannot be used with S3 directory buckets.",
        S3CONTROL_MultiRegionAccessPoint.GetTypes(),
      ),
    ],
    [
      ResourceType.S3CONTROL_MULTIREGIONACCESSPOINTPOLICY,
      new ResourceProperty(
        "Provides a resource to manage an S3 Multi-Region Access Point access control policy.",
        S3CONTROL_MultiRegionAccessPointPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.S3CONTROL_OBJECTLAMBDAACCESSPOINT,
      new ResourceProperty(
        "Provides a resource to manage an S3 Object Lambda Access Point. An Object Lambda access point is associated with exactly one standard access point and thus one Amazon S3 bucket.",
        S3CONTROL_ObjectLambdaAccessPoint.GetTypes(),
      ),
    ],
    [
      ResourceType.S3CONTROL_OBJECTLAMBDAACCESSPOINTPOLICY,
      new ResourceProperty(
        "Provides a resource to manage an S3 Object Lambda Access Point resource policy.",
        S3CONTROL_ObjectLambdaAccessPointPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.S3CONTROL_STORAGELENSCONFIGURATION,
      new ResourceProperty(
        "Provides a resource to manage an S3 Storage Lens configuration.",
        S3CONTROL_StorageLensConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.S3OUTPOSTS_ENDPOINT,
      new ResourceProperty(
        "Provides a resource to manage an S3 Outposts Endpoint.",
        S3OUTPOSTS_Endpoint.GetTypes(),
      ),
    ],
    [
      ResourceType.SAGEMAKER_APP,
      new ResourceProperty(
        "Provides a SageMaker App resource.",
        SAGEMAKER_App.GetTypes(),
      ),
    ],
    [
      ResourceType.SAGEMAKER_APPIMAGECONFIG,
      new ResourceProperty(
        "Provides a SageMaker App Image Config resource.",
        SAGEMAKER_AppImageConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.SAGEMAKER_CODEREPOSITORY,
      new ResourceProperty(
        "Provides a SageMaker Code Repository resource.",
        SAGEMAKER_CodeRepository.GetTypes(),
      ),
    ],
    [
      ResourceType.SAGEMAKER_DATAQUALITYJOBDEFINITION,
      new ResourceProperty(
        "Provides a SageMaker data quality job definition resource.",
        SAGEMAKER_DataQualityJobDefinition.GetTypes(),
      ),
    ],
    [
      ResourceType.SAGEMAKER_DEVICE,
      new ResourceProperty(
        "Provides a SageMaker Device resource.",
        SAGEMAKER_Device.GetTypes(),
      ),
    ],
    [
      ResourceType.SAGEMAKER_DEVICEFLEET,
      new ResourceProperty(
        "Provides a SageMaker Device Fleet resource.",
        SAGEMAKER_DeviceFleet.GetTypes(),
      ),
    ],
    [
      ResourceType.SAGEMAKER_DOMAIN,
      new ResourceProperty(
        "Provides a SageMaker Domain resource.",
        SAGEMAKER_Domain.GetTypes(),
      ),
    ],
    [
      ResourceType.SAGEMAKER_ENDPOINT,
      new ResourceProperty(
        "Provides a SageMaker Endpoint resource.",
        SAGEMAKER_Endpoint.GetTypes(),
      ),
    ],
    [
      ResourceType.SAGEMAKER_ENDPOINTCONFIGURATION,
      new ResourceProperty(
        "Provides a SageMaker endpoint configuration resource.",
        SAGEMAKER_EndpointConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.SAGEMAKER_FEATUREGROUP,
      new ResourceProperty(
        "Provides a SageMaker Feature Group resource.",
        SAGEMAKER_FeatureGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.SAGEMAKER_FLOWDEFINITION,
      new ResourceProperty(
        "Provides a SageMaker Flow Definition resource.",
        SAGEMAKER_FlowDefinition.GetTypes(),
      ),
    ],
    [
      ResourceType.SAGEMAKER_HUMANTASKUI,
      new ResourceProperty(
        "Provides a SageMaker Human Task UI resource.",
        SAGEMAKER_HumanTaskUI.GetTypes(),
      ),
    ],
    [
      ResourceType.SAGEMAKER_IMAGE,
      new ResourceProperty(
        "Provides a SageMaker Image resource.",
        SAGEMAKER_Image.GetTypes(),
      ),
    ],
    [
      ResourceType.SAGEMAKER_IMAGEVERSION,
      new ResourceProperty(
        "Provides a SageMaker Image Version resource.",
        SAGEMAKER_ImageVersion.GetTypes(),
      ),
    ],
    [
      ResourceType.SAGEMAKER_MODEL,
      new ResourceProperty(
        "Provides a SageMaker model resource.",
        SAGEMAKER_Model.GetTypes(),
      ),
    ],
    [
      ResourceType.SAGEMAKER_MODELPACKAGEGROUP,
      new ResourceProperty(
        "Provides a SageMaker Model Package Group resource.",
        SAGEMAKER_ModelPackageGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.SAGEMAKER_MODELPACKAGEGROUPPOLICY,
      new ResourceProperty(
        "Provides a SageMaker Model Package Group Policy resource.",
        SAGEMAKER_ModelPackageGroupPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.SAGEMAKER_MONITORINGSCHEDULE,
      new ResourceProperty(
        "Provides a SageMaker monitoring schedule resource.",
        SAGEMAKER_MonitoringSchedule.GetTypes(),
      ),
    ],
    [
      ResourceType.SAGEMAKER_NOTEBOOKINSTANCE,
      new ResourceProperty(
        "Provides a SageMaker Notebook Instance resource.",
        SAGEMAKER_NotebookInstance.GetTypes(),
      ),
    ],
    [
      ResourceType.SAGEMAKER_NOTEBOOKINSTANCELIFECYCLECONFIGURATION,
      new ResourceProperty(
        "Provides a lifecycle configuration for SageMaker Notebook Instances.",
        SAGEMAKER_NotebookInstanceLifecycleConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.SAGEMAKER_PIPELINE,
      new ResourceProperty(
        "Provides a SageMaker Pipeline resource.",
        SAGEMAKER_Pipeline.GetTypes(),
      ),
    ],
    [
      ResourceType.SAGEMAKER_PROJECT,
      new ResourceProperty(
        "Provides a SageMaker Project resource.   > Note: If you are trying to use SageMaker projects with SageMaker studio you will need to add a tag with the key `sagemaker:studio-visibility` with value `true`. For more on requirements to use projects and permission needed see [AWS Docs](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-projects-templates-custom.html).",
        SAGEMAKER_Project.GetTypes(),
      ),
    ],
    [
      ResourceType.SAGEMAKER_SERVICECATALOGPORTFOLIOSTATUS,
      new ResourceProperty(
        "Manages status of Service Catalog in SageMaker. Service Catalog is used to create SageMaker projects.",
        SAGEMAKER_ServicecatalogPortfolioStatus.GetTypes(),
      ),
    ],
    [
      ResourceType.SAGEMAKER_SPACE,
      new ResourceProperty(
        "Provides a SageMaker Space resource.",
        SAGEMAKER_Space.GetTypes(),
      ),
    ],
    [
      ResourceType.SAGEMAKER_STUDIOLIFECYCLECONFIG,
      new ResourceProperty(
        "Provides a SageMaker Studio Lifecycle Config resource.",
        SAGEMAKER_StudioLifecycleConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.SAGEMAKER_USERPROFILE,
      new ResourceProperty(
        "Provides a SageMaker User Profile resource.",
        SAGEMAKER_UserProfile.GetTypes(),
      ),
    ],
    [
      ResourceType.SAGEMAKER_WORKFORCE,
      new ResourceProperty(
        "Provides a SageMaker Workforce resource.",
        SAGEMAKER_Workforce.GetTypes(),
      ),
    ],
    [
      ResourceType.SAGEMAKER_WORKTEAM,
      new ResourceProperty(
        "Provides a SageMaker Workteam resource.",
        SAGEMAKER_Workteam.GetTypes(),
      ),
    ],
    [
      ResourceType.SCHEDULER_SCHEDULE,
      new ResourceProperty(
        "Provides an EventBridge Scheduler Schedule resource.  You can find out more about EventBridge Scheduler in the [User Guide](https://docs.aws.amazon.com/scheduler/latest/UserGuide/what-is-scheduler.html).  > --Note:-- EventBridge was formerly known as CloudWatch Events. The functionality is identical.",
        SCHEDULER_Schedule.GetTypes(),
      ),
    ],
    [
      ResourceType.SCHEDULER_SCHEDULEGROUP,
      new ResourceProperty(
        "Provides an EventBridge Scheduler Schedule Group resource.  You can find out more about EventBridge Scheduler in the [User Guide](https://docs.aws.amazon.com/scheduler/latest/UserGuide/what-is-scheduler.html).  > --Note:-- EventBridge was formerly known as CloudWatch Events. The functionality is identical.",
        SCHEDULER_ScheduleGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.SCHEMAS_DISCOVERER,
      new ResourceProperty(
        "Provides an EventBridge Schema Discoverer resource.  > --Note:-- EventBridge was formerly known as CloudWatch Events. The functionality is identical.",
        SCHEMAS_Discoverer.GetTypes(),
      ),
    ],
    [
      ResourceType.SCHEMAS_REGISTRY,
      new ResourceProperty(
        "Provides an EventBridge Custom Schema Registry resource.  > --Note:-- EventBridge was formerly known as CloudWatch Events. The functionality is identical.",
        SCHEMAS_Registry.GetTypes(),
      ),
    ],
    [
      ResourceType.SCHEMAS_REGISTRYPOLICY,
      new ResourceProperty(
        "Resource for managing an AWS EventBridge Schemas Registry Policy.",
        SCHEMAS_RegistryPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.SCHEMAS_SCHEMA,
      new ResourceProperty(
        "Provides an EventBridge Schema resource.  > --Note:-- EventBridge was formerly known as CloudWatch Events. The functionality is identical.",
        SCHEMAS_Schema.GetTypes(),
      ),
    ],
    [
      ResourceType.SECRETSMANAGER_SECRET,
      new ResourceProperty(
        "Provides a resource to manage AWS Secrets Manager secret metadata. To manage secret rotation, see the `aws.secretsmanager.SecretRotation` resource. To manage a secret value, see the `aws.secretsmanager.SecretVersion` resource.",
        SECRETSMANAGER_Secret.GetTypes(),
      ),
    ],
    [
      ResourceType.SECRETSMANAGER_SECRETPOLICY,
      new ResourceProperty(
        "Provides a resource to manage AWS Secrets Manager secret policy.",
        SECRETSMANAGER_SecretPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.SECRETSMANAGER_SECRETROTATION,
      new ResourceProperty(
        "Provides a resource to manage AWS Secrets Manager secret rotation. To manage a secret, see the `aws.secretsmanager.Secret` resource. To manage a secret value, see the `aws.secretsmanager.SecretVersion` resource.",
        SECRETSMANAGER_SecretRotation.GetTypes(),
      ),
    ],
    [
      ResourceType.SECRETSMANAGER_SECRETVERSION,
      new ResourceProperty(
        "Provides a resource to manage AWS Secrets Manager secret version including its secret value. To manage secret metadata, see the `aws.secretsmanager.Secret` resource.  > --NOTE:-- If the `AWSCURRENT` staging label is present on this version during resource deletion, that label cannot be removed and will be skipped to prevent errors when fully deleting the secret. That label will leave this secret version active even after the resource is deleted from this provider unless the secret itself is deleted. Move the `AWSCURRENT` staging label before or after deleting this resource from this provider to fully trigger version deprecation if necessary.",
        SECRETSMANAGER_SecretVersion.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYHUB_ACCOUNT,
      new ResourceProperty(
        "Enables Security Hub for this AWS account.  > --NOTE:-- Destroying this resource will disable Security Hub for this AWS account.",
        SECURITYHUB_Account.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYHUB_ACTIONTARGET,
      new ResourceProperty(
        "Creates Security Hub custom action.",
        SECURITYHUB_ActionTarget.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYHUB_AUTOMATIONRULE,
      new ResourceProperty(
        "Resource for managing an AWS Security Hub Automation Rule.",
        SECURITYHUB_AutomationRule.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYHUB_CONFIGURATIONPOLICY,
      new ResourceProperty(
        "Manages Security Hub configuration policy  > --NOTE:-- This resource requires `aws.securityhub.OrganizationConfiguration` to be configured of type `CENTRAL`. More information about Security Hub central configuration and configuration policies can be found in the [How Security Hub configuration policies work](https://docs.aws.amazon.com/securityhub/latest/userguide/configuration-policies-overview.html) documentation.",
        SECURITYHUB_ConfigurationPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYHUB_CONFIGURATIONPOLICYASSOCIATION,
      new ResourceProperty(
        "Manages Security Hub configuration policy associations.  > --NOTE:-- This resource requires `aws.securityhub.OrganizationConfiguration` to be configured with type `CENTRAL`. More information about Security Hub central configuration and configuration policies can be found in the [How Security Hub configuration policies work](https://docs.aws.amazon.com/securityhub/latest/userguide/configuration-policies-overview.html) documentation.",
        SECURITYHUB_ConfigurationPolicyAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYHUB_FINDINGAGGREGATOR,
      new ResourceProperty(
        "Manages a Security Hub finding aggregator. Security Hub needs to be enabled in a region in order for the aggregator to pull through findings.",
        SECURITYHUB_FindingAggregator.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYHUB_INSIGHT,
      new ResourceProperty(
        "Provides a Security Hub custom insight resource. See the [Managing custom insights section](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-custom-insights.html) of the AWS User Guide for more information.",
        SECURITYHUB_Insight.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYHUB_INVITEACCEPTER,
      new ResourceProperty(
        "> --Note:-- AWS accounts can only be associated with a single Security Hub master account. Destroying this resource will disassociate the member account from the master account.  Accepts a Security Hub invitation.",
        SECURITYHUB_InviteAccepter.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYHUB_MEMBER,
      new ResourceProperty(
        "Provides a Security Hub member resource.",
        SECURITYHUB_Member.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYHUB_ORGANIZATIONADMINACCOUNT,
      new ResourceProperty(
        "Manages a Security Hub administrator account for an organization. The AWS account utilizing this resource must be an Organizations primary account. More information about Organizations support in Security Hub can be found in the [Security Hub User Guide](https://docs.aws.amazon.com/securityhub/latest/userguide/designate-orgs-admin-account.html).",
        SECURITYHUB_OrganizationAdminAccount.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYHUB_ORGANIZATIONCONFIGURATION,
      new ResourceProperty(
        "Manages the Security Hub Organization Configuration.  > --NOTE:-- This resource requires an `aws.securityhub.OrganizationAdminAccount` to be configured (not necessarily with Pulumi). More information about managing Security Hub in an organization can be found in the [Managing administrator and member accounts](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-accounts.html) documentation.  > --NOTE:-- In order to set the `configuration_type` to `CENTRAL`, the delegated admin must be a member account of the organization and not the management account. Central configuration also requires an `aws.securityhub.FindingAggregator` to be configured.  > --NOTE:-- This is an advanced AWS resource. Pulumi will automatically assume management of the Security Hub Organization Configuration without import and perform no actions on removal from the Pulumi program.  > --NOTE:-- Deleting this resource resets security hub to a local organization configuration with auto enable false.",
        SECURITYHUB_OrganizationConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYHUB_PRODUCTSUBSCRIPTION,
      new ResourceProperty(
        "Subscribes to a Security Hub product.",
        SECURITYHUB_ProductSubscription.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYHUB_STANDARDSCONTROL,
      new ResourceProperty(
        'Disable/enable Security Hub standards control in the current region.  The `aws.securityhub.StandardsControl` behaves differently from normal resources, in that Pulumi does not _create_ this resource, but instead "adopts" it into management. When you _delete_ this resource configuration, Pulumi "abandons" resource as is and just removes it from the state.',
        SECURITYHUB_StandardsControl.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYHUB_STANDARDSSUBSCRIPTION,
      new ResourceProperty(
        "Subscribes to a Security Hub standard.",
        SECURITYHUB_StandardsSubscription.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYLAKE_AWSLOGSOURCE,
      new ResourceProperty(
        "Resource for managing an Amazon Security Lake AWS Log Source.  > --NOTE:-- A single `aws.securitylake.AwsLogSource` should be used to configure a log source across all regions and accounts.  > --NOTE:-- The underlying `aws.securitylake.DataLake` must be configured before creating the `aws.securitylake.AwsLogSource`. Use a `depends_on` statement.",
        SECURITYLAKE_AwsLogSource.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYLAKE_CUSTOMLOGSOURCE,
      new ResourceProperty(
        "Resource for managing an AWS Security Lake Custom Log Source.  > --NOTE:-- The underlying `aws.securitylake.DataLake` must be configured before creating the `aws.securitylake.CustomLogSource`. Use a `depends_on` statement.",
        SECURITYLAKE_CustomLogSource.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYLAKE_DATALAKE,
      new ResourceProperty(
        "Resource for managing an AWS Security Lake Data Lake.  > --NOTE:-- The underlying `aws.securitylake.DataLake` must be configured before creating other Security Lake resources. Use a `depends_on` statement.",
        SECURITYLAKE_DataLake.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYLAKE_SUBSCRIBER,
      new ResourceProperty(
        "Resource for managing an AWS Security Lake Subscriber.  > --NOTE:-- The underlying `aws.securitylake.DataLake` must be configured before creating the `aws.securitylake.Subscriber`. Use a `depends_on` statement.",
        SECURITYLAKE_Subscriber.GetTypes(),
      ),
    ],
    [
      ResourceType.SECURITYLAKE_SUBSCRIBERNOTIFICATION,
      new ResourceProperty(
        "Resource for managing an AWS Security Lake Subscriber Notification.",
        SECURITYLAKE_SubscriberNotification.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVERLESSREPOSITORY_CLOUDFORMATIONSTACK,
      new ResourceProperty(
        "Deploys an Application CloudFormation Stack from the Serverless Application Repository.",
        SERVERLESSREPOSITORY_CloudFormationStack.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICECATALOG_APPREGISTRYAPPLICATION,
      new ResourceProperty(
        'Resource for managing an AWS Service Catalog AppRegistry Application.  > An AWS Service Catalog AppRegistry Application is displayed in the AWS Console under "MyApplications".',
        SERVICECATALOG_AppregistryApplication.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICECATALOG_BUDGETRESOURCEASSOCIATION,
      new ResourceProperty(
        'Manages a Service Catalog Budget Resource Association.  > --Tip:-- A "resource" is either a Service Catalog portfolio or product.',
        SERVICECATALOG_BudgetResourceAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICECATALOG_CONSTRAINT,
      new ResourceProperty(
        "Manages a Service Catalog Constraint.  > --NOTE:-- This resource does not associate a Service Catalog product and portfolio. However, the product and portfolio must be associated (see the `aws.servicecatalog.ProductPortfolioAssociation` resource) prior to creating a constraint or you will receive an error.",
        SERVICECATALOG_Constraint.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICECATALOG_ORGANIZATIONSACCESS,
      new ResourceProperty(
        "Manages Service Catalog AWS Organizations Access, a portfolio sharing feature through AWS Organizations. This allows Service Catalog to receive updates on your organization in order to sync your shares with the current structure. This resource will prompt AWS to set `organizations:EnableAWSServiceAccess` on your behalf so that your shares can be in sync with any changes in your AWS Organizations structure.  > --NOTE:-- This resource can only be used by the management account in the organization. In other words, a delegated administrator is not authorized to use the resource.",
        SERVICECATALOG_OrganizationsAccess.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICECATALOG_PORTFOLIO,
      new ResourceProperty(
        "Provides a resource to create a Service Catalog Portfolio.",
        SERVICECATALOG_Portfolio.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICECATALOG_PORTFOLIOSHARE,
      new ResourceProperty(
        "Manages a Service Catalog Portfolio Share. Shares the specified portfolio with the specified account or organization node. You can share portfolios to an organization, an organizational unit, or a specific account.  If the portfolio share with the specified account or organization node already exists, using this resource to re-create the share will have no effect and will not return an error. You can then use this resource to update the share.  > --NOTE:-- Shares to an organization node can only be created by the management account of an organization or by a delegated administrator. If a delegated admin is de-registered, they can no longer create portfolio shares.  > --NOTE:-- AWSOrganizationsAccess must be enabled in order to create a portfolio share to an organization node.  > --NOTE:-- You can't share a shared resource, including portfolios that contain a shared product.",
        SERVICECATALOG_PortfolioShare.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICECATALOG_PRINCIPALPORTFOLIOASSOCIATION,
      new ResourceProperty(
        "Manages a Service Catalog Principal Portfolio Association.",
        SERVICECATALOG_PrincipalPortfolioAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICECATALOG_PRODUCT,
      new ResourceProperty(
        'Manages a Service Catalog Product.  > --NOTE:-- The user or role that uses this resources must have the `cloudformation:GetTemplate` IAM policy permission. This policy permission is required when using the `template_physical_id` argument.  > A "provisioning artifact" is also referred to as a "version." A "distributor" is also referred to as a "vendor."',
        SERVICECATALOG_Product.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICECATALOG_PRODUCTPORTFOLIOASSOCIATION,
      new ResourceProperty(
        "Manages a Service Catalog Product Portfolio Association.",
        SERVICECATALOG_ProductPortfolioAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICECATALOG_PROVISIONEDPRODUCT,
      new ResourceProperty(
        'This resource provisions and manages a Service Catalog provisioned product.  A provisioned product is a resourced instance of a product. For example, provisioning a product based on a CloudFormation template launches a CloudFormation stack and its underlying resources.  Like this resource, the `aws_servicecatalog_record` data source also provides information about a provisioned product. Although a Service Catalog record provides some overlapping information with this resource, a record is tied to a provisioned product event, such as provisioning, termination, and updating.  > --Tip:-- If you include conflicted keys as tags, AWS will report an error, "Parameter validation failed: Missing required parameter in Tags[N]:Value".  > --Tip:-- A "provisioning artifact" is also referred to as a "version." A "distributor" is also referred to as a "vendor."',
        SERVICECATALOG_ProvisionedProduct.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICECATALOG_PROVISIONINGARTIFACT,
      new ResourceProperty(
        'Manages a Service Catalog Provisioning Artifact for a specified product.  > A "provisioning artifact" is also referred to as a "version."  > --NOTE:-- You cannot create a provisioning artifact for a product that was shared with you.  > --NOTE:-- The user or role that use this resource must have the `cloudformation:GetTemplate` IAM policy permission. This policy permission is required when using the `template_physical_id` argument.',
        SERVICECATALOG_ProvisioningArtifact.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICECATALOG_SERVICEACTION,
      new ResourceProperty(
        "Manages a Service Catalog self-service action.",
        SERVICECATALOG_ServiceAction.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICECATALOG_TAGOPTION,
      new ResourceProperty(
        "Manages a Service Catalog Tag Option.",
        SERVICECATALOG_TagOption.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICECATALOG_TAGOPTIONRESOURCEASSOCIATION,
      new ResourceProperty(
        'Manages a Service Catalog Tag Option Resource Association.  > --Tip:-- A "resource" is either a Service Catalog portfolio or product.',
        SERVICECATALOG_TagOptionResourceAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICEDISCOVERY_HTTPNAMESPACE,
      new ResourceProperty("", SERVICEDISCOVERY_HttpNamespace.GetTypes()),
    ],
    [
      ResourceType.SERVICEDISCOVERY_INSTANCE,
      new ResourceProperty(
        "Provides a Service Discovery Instance resource.",
        SERVICEDISCOVERY_Instance.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICEDISCOVERY_PRIVATEDNSNAMESPACE,
      new ResourceProperty(
        "Provides a Service Discovery Private DNS Namespace resource.",
        SERVICEDISCOVERY_PrivateDnsNamespace.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICEDISCOVERY_PUBLICDNSNAMESPACE,
      new ResourceProperty(
        "Provides a Service Discovery Public DNS Namespace resource.",
        SERVICEDISCOVERY_PublicDnsNamespace.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICEDISCOVERY_SERVICE,
      new ResourceProperty(
        "Provides a Service Discovery Service resource.",
        SERVICEDISCOVERY_Service.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICEQUOTAS_SERVICEQUOTA,
      new ResourceProperty(
        "Manages an individual Service Quota.  > --NOTE:-- Global quotas apply to all AWS regions, but can only be accessed in `us-east-1` in the Commercial partition or `us-gov-west-1` in the GovCloud partition. In other regions, the AWS API will return the error `The request failed because the specified service does not exist.`",
        SERVICEQUOTAS_ServiceQuota.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICEQUOTAS_TEMPLATE,
      new ResourceProperty(
        "Resource for managing an AWS Service Quotas Template.  > Only the management account of an organization can alter Service Quota templates, and this must be done from the `us-east-1` region.",
        SERVICEQUOTAS_Template.GetTypes(),
      ),
    ],
    [
      ResourceType.SERVICEQUOTAS_TEMPLATEASSOCIATION,
      new ResourceProperty(
        "Resource for managing an AWS Service Quotas Template Association.  > Only the management account of an organization can associate Service Quota templates, and this must be done from the `us-east-1` region.",
        SERVICEQUOTAS_TemplateAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.SES_ACTIVERECEIPTRULESET,
      new ResourceProperty(
        "Provides a resource to designate the active SES receipt rule set",
        SES_ActiveReceiptRuleSet.GetTypes(),
      ),
    ],
    [
      ResourceType.SES_CONFIGURATIONSET,
      new ResourceProperty(
        "Provides an SES configuration set resource.",
        SES_ConfigurationSet.GetTypes(),
      ),
    ],
    [
      ResourceType.SES_DOMAINDKIM,
      new ResourceProperty(
        "Provides an SES domain DKIM generation resource.  Domain ownership needs to be confirmed first using ses_domain_identity Resource",
        SES_DomainDkim.GetTypes(),
      ),
    ],
    [
      ResourceType.SES_DOMAINIDENTITY,
      new ResourceProperty(
        "Provides an SES domain identity resource",
        SES_DomainIdentity.GetTypes(),
      ),
    ],
    [
      ResourceType.SES_DOMAINIDENTITYVERIFICATION,
      new ResourceProperty(
        "Represents a successful verification of an SES domain identity.  Most commonly, this resource is used together with `aws.route53.Record` and `aws.ses.DomainIdentity` to request an SES domain identity, deploy the required DNS verification records, and wait for verification to complete.  > --WARNING:-- This resource implements a part of the verification workflow. It does not represent a real-world entity in AWS, therefore changing or deleting this resource on its own has no immediate effect.",
        SES_DomainIdentityVerification.GetTypes(),
      ),
    ],
    [
      ResourceType.SES_EMAILIDENTITY,
      new ResourceProperty(
        "Provides an SES email identity resource",
        SES_EmailIdentity.GetTypes(),
      ),
    ],
    [
      ResourceType.SES_EVENTDESTINATION,
      new ResourceProperty(
        "Provides an SES event destination",
        SES_EventDestination.GetTypes(),
      ),
    ],
    [
      ResourceType.SES_IDENTITYNOTIFICATIONTOPIC,
      new ResourceProperty(
        "Resource for managing SES Identity Notification Topics",
        SES_IdentityNotificationTopic.GetTypes(),
      ),
    ],
    [
      ResourceType.SES_IDENTITYPOLICY,
      new ResourceProperty(
        "Manages a SES Identity Policy. More information about SES Sending Authorization Policies can be found in the [SES Developer Guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-policies.html).",
        SES_IdentityPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.SES_MAILFROM,
      new ResourceProperty(
        "Provides an SES domain MAIL FROM resource.  > --NOTE:-- For the MAIL FROM domain to be fully usable, this resource should be paired with the aws.ses.DomainIdentity resource. To validate the MAIL FROM domain, a DNS MX record is required. To pass SPF checks, a DNS TXT record may also be required. See the [Amazon SES MAIL FROM documentation](https://docs.aws.amazon.com/ses/latest/dg/mail-from.html) for more information.",
        SES_MailFrom.GetTypes(),
      ),
    ],
    [
      ResourceType.SES_RECEIPTFILTER,
      new ResourceProperty(
        "Provides an SES receipt filter resource",
        SES_ReceiptFilter.GetTypes(),
      ),
    ],
    [
      ResourceType.SES_RECEIPTRULE,
      new ResourceProperty(
        "Provides an SES receipt rule resource",
        SES_ReceiptRule.GetTypes(),
      ),
    ],
    [
      ResourceType.SES_RECEIPTRULESET,
      new ResourceProperty(
        "Provides an SES receipt rule set resource.",
        SES_ReceiptRuleSet.GetTypes(),
      ),
    ],
    [
      ResourceType.SES_TEMPLATE,
      new ResourceProperty(
        "Provides a resource to create a SES template.",
        SES_Template.GetTypes(),
      ),
    ],
    [
      ResourceType.SESV2_ACCOUNTVDMATTRIBUTES,
      new ResourceProperty(
        "Resource for managing an AWS SESv2 (Simple Email V2) Account VDM Attributes.",
        SESV2_AccountVdmAttributes.GetTypes(),
      ),
    ],
    [
      ResourceType.SESV2_CONFIGURATIONSET,
      new ResourceProperty(
        "Resource for managing an AWS SESv2 (Simple Email V2) Configuration Set.",
        SESV2_ConfigurationSet.GetTypes(),
      ),
    ],
    [
      ResourceType.SESV2_CONFIGURATIONSETEVENTDESTINATION,
      new ResourceProperty(
        "Resource for managing an AWS SESv2 (Simple Email V2) Configuration Set Event Destination.",
        SESV2_ConfigurationSetEventDestination.GetTypes(),
      ),
    ],
    [
      ResourceType.SESV2_CONTACTLIST,
      new ResourceProperty(
        "Resource for managing an AWS SESv2 (Simple Email V2) Contact List.",
        SESV2_ContactList.GetTypes(),
      ),
    ],
    [
      ResourceType.SESV2_DEDICATEDIPASSIGNMENT,
      new ResourceProperty(
        'Resource for managing an AWS SESv2 (Simple Email V2) Dedicated IP Assignment.  This resource is used with "Standard" dedicated IP addresses. This includes addresses [requested and relinquished manually](https://docs.aws.amazon.com/ses/latest/dg/dedicated-ip-case.html) via an AWS support case, or [Bring Your Own IP](https://docs.aws.amazon.com/ses/latest/dg/dedicated-ip-byo.html) addresses. Once no longer assigned, this resource returns the IP to the [`ses-default-dedicated-pool`](https://docs.aws.amazon.com/ses/latest/dg/managing-ip-pools.html), managed by AWS.',
        SESV2_DedicatedIpAssignment.GetTypes(),
      ),
    ],
    [
      ResourceType.SESV2_DEDICATEDIPPOOL,
      new ResourceProperty(
        "Resource for managing an AWS SESv2 (Simple Email V2) Dedicated IP Pool.",
        SESV2_DedicatedIpPool.GetTypes(),
      ),
    ],
    [
      ResourceType.SESV2_EMAILIDENTITY,
      new ResourceProperty(
        "Resource for managing an AWS SESv2 (Simple Email V2) Email Identity.",
        SESV2_EmailIdentity.GetTypes(),
      ),
    ],
    [
      ResourceType.SESV2_EMAILIDENTITYFEEDBACKATTRIBUTES,
      new ResourceProperty(
        "Resource for managing an AWS SESv2 (Simple Email V2) Email Identity Feedback Attributes.",
        SESV2_EmailIdentityFeedbackAttributes.GetTypes(),
      ),
    ],
    [
      ResourceType.SESV2_EMAILIDENTITYMAILFROMATTRIBUTES,
      new ResourceProperty(
        "Resource for managing an AWS SESv2 (Simple Email V2) Email Identity Mail From Attributes.",
        SESV2_EmailIdentityMailFromAttributes.GetTypes(),
      ),
    ],
    [
      ResourceType.SESV2_EMAILIDENTITYPOLICY,
      new ResourceProperty(
        "Resource for managing an AWS SESv2 (Simple Email V2) Email Identity Policy.",
        SESV2_EmailIdentityPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.SFN_ACTIVITY,
      new ResourceProperty(
        "Provides a Step Function Activity resource",
        SFN_Activity.GetTypes(),
      ),
    ],
    [
      ResourceType.SFN_ALIAS,
      new ResourceProperty(
        "Provides a Step Function State Machine Alias.",
        SFN_Alias.GetTypes(),
      ),
    ],
    [
      ResourceType.SFN_STATEMACHINE,
      new ResourceProperty(
        "Provides a Step Function State Machine resource",
        SFN_StateMachine.GetTypes(),
      ),
    ],
    [
      ResourceType.SHIELD_APPLICATIONLAYERAUTOMATICRESPONSE,
      new ResourceProperty(
        "Resource for managing an AWS Shield Application Layer Automatic Response for automatic DDoS mitigation.",
        SHIELD_ApplicationLayerAutomaticResponse.GetTypes(),
      ),
    ],
    [
      ResourceType.SHIELD_DRTACCESSLOGBUCKETASSOCIATION,
      new ResourceProperty(
        "Resource for managing an AWS Shield DRT Access Log Bucket Association. Up to 10 log buckets can be associated for DRT Access sharing with the Shield Response Team (SRT).",
        SHIELD_DrtAccessLogBucketAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.SHIELD_DRTACCESSROLEARNASSOCIATION,
      new ResourceProperty(
        "Authorizes the Shield Response Team (SRT) using the specified role, to access your AWS account to assist with DDoS attack mitigation during potential attacks. For more information see [Configure AWS SRT Support](https://docs.aws.amazon.com/waf/latest/developerguide/authorize-srt.html)",
        SHIELD_DrtAccessRoleArnAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.SHIELD_PROACTIVEENGAGEMENT,
      new ResourceProperty(
        "Resource for managing a AWS Shield Proactive Engagement. Proactive engagement authorizes the Shield Response Team (SRT) to use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.",
        SHIELD_ProactiveEngagement.GetTypes(),
      ),
    ],
    [
      ResourceType.SHIELD_PROTECTION,
      new ResourceProperty(
        "Enables AWS Shield Advanced for a specific AWS resource. The resource can be an Amazon CloudFront distribution, Elastic Load Balancing load balancer, AWS Global Accelerator accelerator, Elastic IP Address, or an Amazon Route 53 hosted zone.",
        SHIELD_Protection.GetTypes(),
      ),
    ],
    [
      ResourceType.SHIELD_PROTECTIONGROUP,
      new ResourceProperty(
        "Creates a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives. For more information see [Managing AWS Shield Advanced protection groups](https://docs.aws.amazon.com/waf/latest/developerguide/manage-protection-group.html)",
        SHIELD_ProtectionGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.SHIELD_PROTECTIONHEALTHCHECKASSOCIATION,
      new ResourceProperty(
        "Creates an association between a Route53 Health Check and a Shield Advanced protected resource. This association uses the health of your applications to improve responsiveness and accuracy in attack detection and mitigation.  Blog post: [AWS Shield Advanced now supports Health Based Detection](https://aws.amazon.com/about-aws/whats-new/2020/02/aws-shield-advanced-now-supports-health-based-detection/)",
        SHIELD_ProtectionHealthCheckAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.SHIELD_SUBSCRIPTION,
      new ResourceProperty(
        "Resource for managing an AWS Shield Subscription.  > This resource creates a subscription to AWS Shield Advanced, which requires a 1 year subscription commitment with a monthly fee. Refer to the [AWS Shield Pricing](https://aws.amazon.com/shield/pricing/) page for more details.  > Destruction of this resource will set `auto_renew` to `DISABLED`. Automatic renewal can only be disabled during the last 30 days of a subscription. To unsubscribe outside of this window, you must contact AWS Support. Set `skip_destroy` to `true` to skip modifying the `auto_renew` argument during destruction.",
        SHIELD_Subscription.GetTypes(),
      ),
    ],
    [
      ResourceType.SIGNER_SIGNINGJOB,
      new ResourceProperty(
        "Creates a Signer Signing Job.",
        SIGNER_SigningJob.GetTypes(),
      ),
    ],
    [
      ResourceType.SIGNER_SIGNINGPROFILE,
      new ResourceProperty(
        "Creates a Signer Signing Profile. A signing profile contains information about the code signing configuration parameters that can be used by a given code signing user.",
        SIGNER_SigningProfile.GetTypes(),
      ),
    ],
    [
      ResourceType.SIGNER_SIGNINGPROFILEPERMISSION,
      new ResourceProperty(
        "Creates a Signer Signing Profile Permission. That is, a cross-account permission for a signing profile.",
        SIGNER_SigningProfilePermission.GetTypes(),
      ),
    ],
    [
      ResourceType.SIMPLEDB_DOMAIN,
      new ResourceProperty(
        "Provides a SimpleDB domain resource",
        SIMPLEDB_Domain.GetTypes(),
      ),
    ],
    [
      ResourceType.SNS_DATAPROTECTIONPOLICY,
      new ResourceProperty(
        "Provides an SNS data protection topic policy resource",
        SNS_DataProtectionPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.SNS_PLATFORMAPPLICATION,
      new ResourceProperty(
        "Provides an SNS platform application resource",
        SNS_PlatformApplication.GetTypes(),
      ),
    ],
    [
      ResourceType.SNS_SMSPREFERENCES,
      new ResourceProperty(
        "Provides a way to set SNS SMS preferences.",
        SNS_SmsPreferences.GetTypes(),
      ),
    ],
    [
      ResourceType.SNS_TOPIC,
      new ResourceProperty(
        "Provides an SNS topic resource",
        SNS_Topic.GetTypes(),
      ),
    ],
    [
      ResourceType.SNS_TOPICPOLICY,
      new ResourceProperty(
        "Provides an SNS topic policy resource  > --NOTE:-- If a Principal is specified as just an AWS account ID rather than an ARN, AWS silently converts it to the ARN for the root user, causing future deployments to differ. To avoid this problem, just specify the full ARN, e.g. `arn:aws:iam::123456789012:root`",
        SNS_TopicPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.SNS_TOPICSUBSCRIPTION,
      new ResourceProperty(
        "Provides a resource for subscribing to SNS topics. Requires that an SNS topic exist for the subscription to attach to. This resource allows you to automatically place messages sent to SNS topics in SQS queues, send them as HTTP(S) POST requests to a given endpoint, send SMS messages, or notify devices / applications. The most likely use case for provider users will probably be SQS queues.  > --NOTE:-- If the SNS topic and SQS queue are in different AWS regions, the `aws.sns.TopicSubscription` must use an AWS provider that is in the same region as the SNS topic. If the `aws.sns.TopicSubscription` uses a provider with a different region than the SNS topic, this provider will fail to create the subscription.  > --NOTE:-- Setup of cross-account subscriptions from SNS topics to SQS queues requires the provider to have access to BOTH accounts.  > --NOTE:-- If an SNS topic and SQS queue are in different AWS accounts but the same region, the `aws.sns.TopicSubscription` must use the AWS provider for the account with the SQS queue. If `aws.sns.TopicSubscription` uses a Provider with a different account than the SQS queue, this provider creates the subscription but does not keep state and tries to re-create the subscription at every `apply`.  > --NOTE:-- If an SNS topic and SQS queue are in different AWS accounts and different AWS regions, the subscription needs to be initiated from the account with the SQS queue but in the region of the SNS topic.  > --NOTE:-- You cannot unsubscribe to a subscription that is pending confirmation. If you use `email`, `email-json`, or `http`/`https` (without auto-confirmation enabled), until the subscription is confirmed (e.g., outside of this provider), AWS does not allow this provider to delete / unsubscribe the subscription. If you `destroy` an unconfirmed subscription, this provider will remove the subscription from its state but the subscription will still exist in AWS. However, if you delete an SNS topic, SNS [deletes all the subscriptions](https://docs.aws.amazon.com/sns/latest/dg/sns-delete-subscription-topic.html) associated with the topic. Also, you can import a subscription after confirmation and then have the capability to delete it.",
        SNS_TopicSubscription.GetTypes(),
      ),
    ],
    [ResourceType.SQS_QUEUE, new ResourceProperty("", SQS_Queue.GetTypes())],
    [
      ResourceType.SQS_QUEUEPOLICY,
      new ResourceProperty(
        "Allows you to set a policy of an SQS Queue while referencing ARN of the queue within the policy.",
        SQS_QueuePolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.SQS_REDRIVEALLOWPOLICY,
      new ResourceProperty(
        "Provides a SQS Queue Redrive Allow Policy resource.",
        SQS_RedriveAllowPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.SQS_REDRIVEPOLICY,
      new ResourceProperty(
        "Allows you to set a redrive policy of an SQS Queue while referencing ARN of the dead letter queue inside the redrive policy.  This is useful when you want to set a dedicated dead letter queue for a standard or FIFO queue, but need the dead letter queue to exist before setting the redrive policy.",
        SQS_RedrivePolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.SSM_ACTIVATION,
      new ResourceProperty(
        "Registers an on-premises server or virtual machine with Amazon EC2 so that it can be managed using Run Command.",
        SSM_Activation.GetTypes(),
      ),
    ],
    [
      ResourceType.SSM_ASSOCIATION,
      new ResourceProperty(
        "Associates an SSM Document to an instance or EC2 tag.",
        SSM_Association.GetTypes(),
      ),
    ],
    [
      ResourceType.SSM_CONTACTSROTATION,
      new ResourceProperty("", SSM_ContactsRotation.GetTypes()),
    ],
    [
      ResourceType.SSM_DEFAULTPATCHBASELINE,
      new ResourceProperty(
        "Resource for registering an AWS Systems Manager Default Patch Baseline.",
        SSM_DefaultPatchBaseline.GetTypes(),
      ),
    ],
    [
      ResourceType.SSM_DOCUMENT,
      new ResourceProperty(
        "Provides an SSM Document resource  > --NOTE on updating SSM documents:-- Only documents with a schema version of 2.0 or greater can update their content once created, see [SSM Schema Features](http://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-ssm-docs.html#document-schemas-features). To update a document with an older schema version you must recreate the resource. Not all document types support a schema version of 2.0 or greater. Refer to [SSM document schema features and examples](https://docs.aws.amazon.com/systems-manager/latest/userguide/document-schemas-features.html) for information about which schema versions are supported for the respective `document_type`.",
        SSM_Document.GetTypes(),
      ),
    ],
    [
      ResourceType.SSM_MAINTENANCEWINDOW,
      new ResourceProperty(
        "Provides an SSM Maintenance Window resource",
        SSM_MaintenanceWindow.GetTypes(),
      ),
    ],
    [
      ResourceType.SSM_MAINTENANCEWINDOWTARGET,
      new ResourceProperty(
        "Provides an SSM Maintenance Window Target resource",
        SSM_MaintenanceWindowTarget.GetTypes(),
      ),
    ],
    [
      ResourceType.SSM_MAINTENANCEWINDOWTASK,
      new ResourceProperty(
        "Provides an SSM Maintenance Window Task resource",
        SSM_MaintenanceWindowTask.GetTypes(),
      ),
    ],
    [
      ResourceType.SSM_PARAMETER,
      new ResourceProperty(
        "Provides an SSM Parameter resource.  > --Note:-- `overwrite` also makes it possible to overwrite an existing SSM Parameter that's not created by the provider before. This argument has been deprecated and will be removed in v6.0.0 of the provider. For more information on how this affects the behavior of this resource, see this issue comment.",
        SSM_Parameter.GetTypes(),
      ),
    ],
    [
      ResourceType.SSM_PATCHBASELINE,
      new ResourceProperty(
        "Provides an SSM Patch Baseline resource.  > --NOTE on Patch Baselines:-- The `approved_patches` and `approval_rule` are both marked as optional fields, but the Patch Baseline requires that at least one of them is specified.",
        SSM_PatchBaseline.GetTypes(),
      ),
    ],
    [
      ResourceType.SSM_PATCHGROUP,
      new ResourceProperty(
        "Provides an SSM Patch Group resource",
        SSM_PatchGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.SSM_RESOURCEDATASYNC,
      new ResourceProperty(
        "Provides a SSM resource data sync.",
        SSM_ResourceDataSync.GetTypes(),
      ),
    ],
    [
      ResourceType.SSM_SERVICESETTING,
      new ResourceProperty(
        "This setting defines how a user interacts with or uses a service or a feature of a service.",
        SSM_ServiceSetting.GetTypes(),
      ),
    ],
    [
      ResourceType.SSMCONTACTS_CONTACT,
      new ResourceProperty(
        "Resource for managing an AWS SSM Contact.",
        SSMCONTACTS_Contact.GetTypes(),
      ),
    ],
    [
      ResourceType.SSMCONTACTS_CONTACTCHANNEL,
      new ResourceProperty(
        "Resource for managing an AWS SSM Contacts Contact Channel.",
        SSMCONTACTS_ContactChannel.GetTypes(),
      ),
    ],
    [
      ResourceType.SSMCONTACTS_PLAN,
      new ResourceProperty(
        "Resource for managing an AWS SSM Contact Plan.",
        SSMCONTACTS_Plan.GetTypes(),
      ),
    ],
    [
      ResourceType.SSMINCIDENTS_REPLICATIONSET,
      new ResourceProperty(
        "Provides a resource for managing a replication set in AWS Systems Manager Incident Manager.  > --NOTE:-- Deleting a replication set also deletes all Incident Manager related data including response plans, incident records, contacts and escalation plans.",
        SSMINCIDENTS_ReplicationSet.GetTypes(),
      ),
    ],
    [
      ResourceType.SSMINCIDENTS_RESPONSEPLAN,
      new ResourceProperty(
        "Provides a resource to manage response plans in AWS Systems Manager Incident Manager.",
        SSMINCIDENTS_ResponsePlan.GetTypes(),
      ),
    ],
    [
      ResourceType.SSOADMIN_ACCOUNTASSIGNMENT,
      new ResourceProperty(
        "Provides a Single Sign-On (SSO) Account Assignment resource",
        SSOADMIN_AccountAssignment.GetTypes(),
      ),
    ],
    [
      ResourceType.SSOADMIN_APPLICATION,
      new ResourceProperty(
        "Resource for managing an AWS SSO Admin Application.  > The `CreateApplication` API only supports custom OAuth 2.0 applications. Creation of 3rd party SAML or OAuth 2.0 applications require setup to be done through the associated app service or AWS console. See this issue for additional context.",
        SSOADMIN_Application.GetTypes(),
      ),
    ],
    [
      ResourceType.SSOADMIN_APPLICATIONACCESSSCOPE,
      new ResourceProperty(
        "Resource for managing an AWS SSO Admin Application Access Scope.",
        SSOADMIN_ApplicationAccessScope.GetTypes(),
      ),
    ],
    [
      ResourceType.SSOADMIN_APPLICATIONASSIGNMENT,
      new ResourceProperty(
        "Resource for managing an AWS SSO Admin Application Assignment.",
        SSOADMIN_ApplicationAssignment.GetTypes(),
      ),
    ],
    [
      ResourceType.SSOADMIN_APPLICATIONASSIGNMENTCONFIGURATION,
      new ResourceProperty(
        "Resource for managing an AWS SSO Admin Application Assignment Configuration.  By default, applications will require users to have an explicit assignment in order to access an application. This resource can be used to adjust this default behavior if necessary.  > Deleting this resource will return the assignment configuration for the application to the default AWS behavior (ie. `assignment_required = true`).",
        SSOADMIN_ApplicationAssignmentConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.SSOADMIN_CUSTOMERMANAGEDPOLICYATTACHMENT,
      new ResourceProperty(
        "Provides a customer managed policy attachment for a Single Sign-On (SSO) Permission Set resource  > --NOTE:-- Creating this resource will automatically [Provision the Permission Set](https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ProvisionPermissionSet.html) to apply the corresponding updates to all assigned accounts.",
        SSOADMIN_CustomerManagedPolicyAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.SSOADMIN_INSTANCEACCESSCONTROLATTRIBUTES,
      new ResourceProperty(
        "Provides a Single Sign-On (SSO) ABAC Resource: https://docs.aws.amazon.com/singlesignon/latest/userguide/abac.html",
        SSOADMIN_InstanceAccessControlAttributes.GetTypes(),
      ),
    ],
    [
      ResourceType.SSOADMIN_MANAGEDPOLICYATTACHMENT,
      new ResourceProperty(
        "Provides an IAM managed policy for a Single Sign-On (SSO) Permission Set resource  > --NOTE:-- Creating this resource will automatically [Provision the Permission Set](https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ProvisionPermissionSet.html) to apply the corresponding updates to all assigned accounts.",
        SSOADMIN_ManagedPolicyAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.SSOADMIN_PERMISSIONSBOUNDARYATTACHMENT,
      new ResourceProperty(
        "Attaches a permissions boundary policy to a Single Sign-On (SSO) Permission Set resource.  > --NOTE:-- A permission set can have at most one permissions boundary attached; using more than one `aws.ssoadmin.PermissionsBoundaryAttachment` references the same permission set will show a permanent difference.",
        SSOADMIN_PermissionsBoundaryAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.SSOADMIN_PERMISSIONSET,
      new ResourceProperty(
        "Provides a Single Sign-On (SSO) Permission Set resource  > --NOTE:-- Updating this resource will automatically [Provision the Permission Set](https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ProvisionPermissionSet.html) to apply the corresponding updates to all assigned accounts.",
        SSOADMIN_PermissionSet.GetTypes(),
      ),
    ],
    [
      ResourceType.SSOADMIN_PERMISSIONSETINLINEPOLICY,
      new ResourceProperty("", SSOADMIN_PermissionSetInlinePolicy.GetTypes()),
    ],
    [
      ResourceType.SSOADMIN_TRUSTEDTOKENISSUER,
      new ResourceProperty(
        "Resource for managing an AWS SSO Admin Trusted Token Issuer.",
        SSOADMIN_TrustedTokenIssuer.GetTypes(),
      ),
    ],
    [
      ResourceType.STORAGEGATEWAY_CACHE,
      new ResourceProperty(
        "Manages an AWS Storage Gateway cache.  > --NOTE:-- The Storage Gateway API provides no method to remove a cache disk. Destroying this resource does not perform any Storage Gateway actions.",
        STORAGEGATEWAY_Cache.GetTypes(),
      ),
    ],
    [
      ResourceType.STORAGEGATEWAY_CACHESISCSIVOLUME,
      new ResourceProperty(
        "Manages an AWS Storage Gateway cached iSCSI volume.  > --NOTE:-- The gateway must have cache added (e.g., via the `aws.storagegateway.Cache` resource) before creating volumes otherwise the Storage Gateway API will return an error.  > --NOTE:-- The gateway must have an upload buffer added (e.g., via the `aws.storagegateway.UploadBuffer` resource) before the volume is operational to clients, however the Storage Gateway API will allow volume creation without error in that case and return volume status as `UPLOAD BUFFER NOT CONFIGURED`.",
        STORAGEGATEWAY_CachesIscsiVolume.GetTypes(),
      ),
    ],
    [
      ResourceType.STORAGEGATEWAY_FILESYSTEMASSOCIATION,
      new ResourceProperty(
        "Associate an Amazon FSx file system with the FSx File Gateway. After the association process is complete, the file shares on the Amazon FSx file system are available for access through the gateway. This operation only supports the FSx File Gateway type.  [FSx File Gateway requirements](https://docs.aws.amazon.com/filegateway/latest/filefsxw/Requirements.html).",
        STORAGEGATEWAY_FileSystemAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.STORAGEGATEWAY_GATEWAY,
      new ResourceProperty(
        "Manages an AWS Storage Gateway file, tape, or volume gateway in the provider region.  > --NOTE:-- The Storage Gateway API requires the gateway to be connected to properly return information after activation. If you are receiving `The specified gateway is not connected` errors during resource creation (gateway activation), ensure your gateway instance meets the [Storage Gateway requirements](https://docs.aws.amazon.com/storagegateway/latest/userguide/Requirements.html).",
        STORAGEGATEWAY_Gateway.GetTypes(),
      ),
    ],
    [
      ResourceType.STORAGEGATEWAY_NFSFILESHARE,
      new ResourceProperty(
        "Manages an AWS Storage Gateway NFS File Share.",
        STORAGEGATEWAY_NfsFileShare.GetTypes(),
      ),
    ],
    [
      ResourceType.STORAGEGATEWAY_SMBFILESHARE,
      new ResourceProperty(
        "Manages an AWS Storage Gateway SMB File Share.",
        STORAGEGATEWAY_SmbFileShare.GetTypes(),
      ),
    ],
    [
      ResourceType.STORAGEGATEWAY_STOREDISCSIVOLUME,
      new ResourceProperty(
        "Manages an AWS Storage Gateway stored iSCSI volume.  > --NOTE:-- The gateway must have a working storage added (e.g., via the `aws.storagegateway.WorkingStorage` resource) before the volume is operational to clients, however the Storage Gateway API will allow volume creation without error in that case and return volume status as `WORKING STORAGE NOT CONFIGURED`.",
        STORAGEGATEWAY_StoredIscsiVolume.GetTypes(),
      ),
    ],
    [
      ResourceType.STORAGEGATEWAY_TAPEPOOL,
      new ResourceProperty(
        "Manages an AWS Storage Gateway Tape Pool.",
        STORAGEGATEWAY_TapePool.GetTypes(),
      ),
    ],
    [
      ResourceType.STORAGEGATEWAY_UPLOADBUFFER,
      new ResourceProperty(
        "Manages an AWS Storage Gateway upload buffer.  > --NOTE:-- The Storage Gateway API provides no method to remove an upload buffer disk. Destroying this resource does not perform any Storage Gateway actions.",
        STORAGEGATEWAY_UploadBuffer.GetTypes(),
      ),
    ],
    [
      ResourceType.STORAGEGATEWAY_WORKINGSTORAGE,
      new ResourceProperty(
        "Manages an AWS Storage Gateway working storage.  > --NOTE:-- The Storage Gateway API provides no method to remove a working storage disk. Destroying this resource does not perform any Storage Gateway actions.",
        STORAGEGATEWAY_WorkingStorage.GetTypes(),
      ),
    ],
    [
      ResourceType.SWF_DOMAIN,
      new ResourceProperty(
        "Provides an SWF Domain resource.",
        SWF_Domain.GetTypes(),
      ),
    ],
    [
      ResourceType.SYNTHETICS_CANARY,
      new ResourceProperty(
        "Provides a Synthetics Canary resource.  > --NOTE:-- When you create a canary, AWS creates supporting implicit resources. See the Amazon CloudWatch Synthetics documentation on [DeleteCanary](https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DeleteCanary.html) for a full list. Neither AWS nor this provider deletes these implicit resources automatically when the canary is deleted. Before deleting a canary, ensure you have all the information about the canary that you need to delete the implicit resources using the AWS Console, or AWS CLI.",
        SYNTHETICS_Canary.GetTypes(),
      ),
    ],
    [
      ResourceType.SYNTHETICS_GROUP,
      new ResourceProperty(
        "Provides a Synthetics Group resource.",
        SYNTHETICS_Group.GetTypes(),
      ),
    ],
    [
      ResourceType.SYNTHETICS_GROUPASSOCIATION,
      new ResourceProperty(
        "Provides a Synthetics Group Association resource.",
        SYNTHETICS_GroupAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.TIMESTREAMINFLUXDB_DBINSTANCE,
      new ResourceProperty(
        "Resource for managing an Amazon Timestream for InfluxDB database instance.",
        TIMESTREAMINFLUXDB_DbInstance.GetTypes(),
      ),
    ],
    [
      ResourceType.TIMESTREAMWRITE_DATABASE,
      new ResourceProperty(
        "Provides a Timestream database resource.",
        TIMESTREAMWRITE_Database.GetTypes(),
      ),
    ],
    [
      ResourceType.TIMESTREAMWRITE_TABLE,
      new ResourceProperty(
        "Provides a Timestream table resource.",
        TIMESTREAMWRITE_Table.GetTypes(),
      ),
    ],
    [
      ResourceType.TRANSCRIBE_LANGUAGEMODEL,
      new ResourceProperty(
        "Resource for managing an AWS Transcribe LanguageModel.  > This resource can take a significant amount of time to provision. See Language Model [FAQ](https://aws.amazon.com/transcribe/faqs/) for more details.",
        TRANSCRIBE_LanguageModel.GetTypes(),
      ),
    ],
    [
      ResourceType.TRANSCRIBE_MEDICALVOCABULARY,
      new ResourceProperty(
        "Resource for managing an AWS Transcribe MedicalVocabulary.",
        TRANSCRIBE_MedicalVocabulary.GetTypes(),
      ),
    ],
    [
      ResourceType.TRANSCRIBE_VOCABULARY,
      new ResourceProperty(
        "Resource for managing an AWS Transcribe Vocabulary.",
        TRANSCRIBE_Vocabulary.GetTypes(),
      ),
    ],
    [
      ResourceType.TRANSCRIBE_VOCABULARYFILTER,
      new ResourceProperty(
        "Resource for managing an AWS Transcribe VocabularyFilter.",
        TRANSCRIBE_VocabularyFilter.GetTypes(),
      ),
    ],
    [
      ResourceType.TRANSFER_ACCESS,
      new ResourceProperty(
        "Provides a AWS Transfer Access resource.  > --NOTE:-- We suggest using explicit JSON encoding or `aws.iam.getPolicyDocument` when assigning a value to `policy`. They seamlessly translate configuration to JSON, enabling you to maintain consistency within your configuration without the need for context switches. Also, you can sidestep potential complications arising from formatting discrepancies, whitespace inconsistencies, and other nuances inherent to JSON.",
        TRANSFER_Access.GetTypes(),
      ),
    ],
    [
      ResourceType.TRANSFER_AGREEMENT,
      new ResourceProperty(
        "Provides a AWS Transfer AS2 Agreement resource.",
        TRANSFER_Agreement.GetTypes(),
      ),
    ],
    [
      ResourceType.TRANSFER_CERTIFICATE,
      new ResourceProperty(
        "Provides a AWS Transfer AS2 Certificate resource.",
        TRANSFER_Certificate.GetTypes(),
      ),
    ],
    [
      ResourceType.TRANSFER_CONNECTOR,
      new ResourceProperty(
        "Provides a AWS Transfer AS2 Connector resource.",
        TRANSFER_Connector.GetTypes(),
      ),
    ],
    [
      ResourceType.TRANSFER_PROFILE,
      new ResourceProperty(
        "Provides a AWS Transfer AS2 Profile resource.",
        TRANSFER_Profile.GetTypes(),
      ),
    ],
    [
      ResourceType.TRANSFER_SERVER,
      new ResourceProperty(
        "Provides a AWS Transfer Server resource.  > --NOTE on AWS IAM permissions:-- If the `endpoint_type` is set to `VPC`, the `ec2:DescribeVpcEndpoints` and `ec2:ModifyVpcEndpoint` [actions](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2.html#amazonec2-actions-as-permissions) are used.  > --NOTE:-- Use the `aws.transfer.Tag` resource to manage the system tags used for [custom hostnames](https://docs.aws.amazon.com/transfer/latest/userguide/requirements-dns.html#tag-custom-hostname-cdk).",
        TRANSFER_Server.GetTypes(),
      ),
    ],
    [
      ResourceType.TRANSFER_SSHKEY,
      new ResourceProperty(
        "Provides a AWS Transfer User SSH Key resource.",
        TRANSFER_SshKey.GetTypes(),
      ),
    ],
    [
      ResourceType.TRANSFER_TAG,
      new ResourceProperty(
        "Manages an individual Transfer Family resource tag. This resource should only be used in cases where Transfer Family resources are created outside the provider (e.g., Servers without AWS Management Console) or the tag key has the `aws:` prefix.  > --NOTE:-- This tagging resource should not be combined with the resource for managing the parent resource. For example, using `aws.transfer.Server` and `aws.transfer.Tag` to manage tags of the same server will cause a perpetual difference where the `aws.transfer.Server` resource will try to remove the tag being added by the `aws.transfer.Tag` resource.  > --NOTE:-- This tagging resource does not use the provider `ignore_tags` configuration.",
        TRANSFER_Tag.GetTypes(),
      ),
    ],
    [
      ResourceType.TRANSFER_USER,
      new ResourceProperty("", TRANSFER_User.GetTypes()),
    ],
    [
      ResourceType.TRANSFER_WORKFLOW,
      new ResourceProperty(
        "Provides a AWS Transfer Workflow resource.",
        TRANSFER_Workflow.GetTypes(),
      ),
    ],
    [
      ResourceType.VERIFIEDACCESS_ENDPOINT,
      new ResourceProperty(
        "Resource for managing an AWS EC2 (Elastic Compute Cloud) Verified Access Endpoint.",
        VERIFIEDACCESS_Endpoint.GetTypes(),
      ),
    ],
    [
      ResourceType.VERIFIEDACCESS_GROUP,
      new ResourceProperty(
        "Resource for managing a Verified Access Group.",
        VERIFIEDACCESS_Group.GetTypes(),
      ),
    ],
    [
      ResourceType.VERIFIEDACCESS_INSTANCE,
      new ResourceProperty(
        "Resource for managing a Verified Access Instance.",
        VERIFIEDACCESS_Instance.GetTypes(),
      ),
    ],
    [
      ResourceType.VERIFIEDACCESS_INSTANCELOGGINGCONFIGURATION,
      new ResourceProperty(
        "Resource for managing a Verified Access Logging Configuration.",
        VERIFIEDACCESS_InstanceLoggingConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.VERIFIEDACCESS_INSTANCETRUSTPROVIDERATTACHMENT,
      new ResourceProperty(
        "Resource for managing a Verified Access Instance Trust Provider Attachment.",
        VERIFIEDACCESS_InstanceTrustProviderAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.VERIFIEDACCESS_TRUSTPROVIDER,
      new ResourceProperty(
        "Resource for managing a Verified Access Trust Provider.",
        VERIFIEDACCESS_TrustProvider.GetTypes(),
      ),
    ],
    [
      ResourceType.VERIFIEDPERMISSIONS_IDENTITYSOURCE,
      new ResourceProperty(
        "Resource for managing an AWS Verified Permissions Identity Source.",
        VERIFIEDPERMISSIONS_IdentitySource.GetTypes(),
      ),
    ],
    [
      ResourceType.VERIFIEDPERMISSIONS_POLICY,
      new ResourceProperty(
        "Resource for managing an AWS Verified Permissions Policy.",
        VERIFIEDPERMISSIONS_Policy.GetTypes(),
      ),
    ],
    [
      ResourceType.VERIFIEDPERMISSIONS_POLICYSTORE,
      new ResourceProperty("", VERIFIEDPERMISSIONS_PolicyStore.GetTypes()),
    ],
    [
      ResourceType.VERIFIEDPERMISSIONS_POLICYTEMPLATE,
      new ResourceProperty(
        "Resource for managing an AWS Verified Permissions Policy Template.",
        VERIFIEDPERMISSIONS_PolicyTemplate.GetTypes(),
      ),
    ],
    [
      ResourceType.VERIFIEDPERMISSIONS_SCHEMA,
      new ResourceProperty("", VERIFIEDPERMISSIONS_Schema.GetTypes()),
    ],
    [
      ResourceType.VPC_ENDPOINTPRIVATEDNS,
      new ResourceProperty(
        "Resource for enabling private DNS on an AWS VPC (Virtual Private Cloud) Endpoint.  > When using this resource, the `private_dns_enabled` argument should be omitted on the parent `aws.ec2.VpcEndpoint` resource. Setting the value both places can lead to unintended behavior and persistent differences.",
        VPC_EndpointPrivateDns.GetTypes(),
      ),
    ],
    [
      ResourceType.VPC_ENDPOINTSERVICEPRIVATEDNSVERIFICATION,
      new ResourceProperty(
        "Resource for managing an AWS VPC (Virtual Private Cloud) Endpoint Service Private DNS Verification. This resource begins the verification process by calling the [`StartVpcEndpointServicePrivateDnsVerification`](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_StartVpcEndpointServicePrivateDnsVerification.html) API. The service provider should add a record to the DNS server _before_ creating this resource.  For additional details, refer to the AWS documentation on [managing VPC endpoint service DNS names](https://docs.aws.amazon.com/vpc/latest/privatelink/manage-dns-names.html).  > Destruction of this resource will not stop the verification process, only remove the resource from state.",
        VPC_EndpointServicePrivateDnsVerification.GetTypes(),
      ),
    ],
    [
      ResourceType.VPC_SECURITYGROUPEGRESSRULE,
      new ResourceProperty(
        "Manages an outbound (egress) rule for a security group.  When specifying an outbound rule for your security group in a VPC, the configuration must include a destination for the traffic.  > --NOTE:-- Using `aws.vpc.SecurityGroupEgressRule` and `aws.vpc.SecurityGroupIngressRule` resources is the current best practice. Avoid using the `aws.ec2.SecurityGroupRule` resource and the `ingress` and `egress` arguments of the `aws.ec2.SecurityGroup` resource for configuring in-line rules, as they struggle with managing multiple CIDR blocks, and tags and descriptions due to the historical lack of unique IDs.  !> --WARNING:-- You should not use the `aws.vpc.SecurityGroupEgressRule` and `aws.vpc.SecurityGroupIngressRule` resources in conjunction with the `aws.ec2.SecurityGroup` resource with _in-line rules_ (using the `ingress` and `egress` arguments of `aws.ec2.SecurityGroup`) or the `aws.ec2.SecurityGroupRule` resource. Doing so may cause rule conflicts, perpetual differences, and result in rules being overwritten.",
        VPC_SecurityGroupEgressRule.GetTypes(),
      ),
    ],
    [
      ResourceType.VPC_SECURITYGROUPINGRESSRULE,
      new ResourceProperty(
        "Manages an inbound (ingress) rule for a security group.  When specifying an inbound rule for your security group in a VPC, the configuration must include a source for the traffic.  > --NOTE:-- Using `aws.vpc.SecurityGroupEgressRule` and `aws.vpc.SecurityGroupIngressRule` resources is the current best practice. Avoid using the `aws.ec2.SecurityGroupRule` resource and the `ingress` and `egress` arguments of the `aws.ec2.SecurityGroup` resource for configuring in-line rules, as they struggle with managing multiple CIDR blocks, and tags and descriptions due to the historical lack of unique IDs.  !> --WARNING:-- You should not use the `aws.vpc.SecurityGroupEgressRule` and `aws.vpc.SecurityGroupIngressRule` resources in conjunction with the `aws.ec2.SecurityGroup` resource with _in-line rules_ (using the `ingress` and `egress` arguments of `aws.ec2.SecurityGroup`) or the `aws.ec2.SecurityGroupRule` resource. Doing so may cause rule conflicts, perpetual differences, and result in rules being overwritten.",
        VPC_SecurityGroupIngressRule.GetTypes(),
      ),
    ],
    [
      ResourceType.VPCLATTICE_ACCESSLOGSUBSCRIPTION,
      new ResourceProperty(
        "Resource for managing an AWS VPC Lattice Service Network or Service Access log subscription.",
        VPCLATTICE_AccessLogSubscription.GetTypes(),
      ),
    ],
    [
      ResourceType.VPCLATTICE_AUTHPOLICY,
      new ResourceProperty(
        "Resource for managing an AWS VPC Lattice Auth Policy.",
        VPCLATTICE_AuthPolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.VPCLATTICE_LISTENER,
      new ResourceProperty(
        "Resource for managing an AWS VPC Lattice Listener.",
        VPCLATTICE_Listener.GetTypes(),
      ),
    ],
    [
      ResourceType.VPCLATTICE_LISTENERRULE,
      new ResourceProperty(
        "Resource for managing an AWS VPC Lattice Listener Rule.",
        VPCLATTICE_ListenerRule.GetTypes(),
      ),
    ],
    [
      ResourceType.VPCLATTICE_RESOURCEPOLICY,
      new ResourceProperty(
        "Resource for managing an AWS VPC Lattice Resource Policy.",
        VPCLATTICE_ResourcePolicy.GetTypes(),
      ),
    ],
    [
      ResourceType.VPCLATTICE_SERVICE,
      new ResourceProperty(
        "Resource for managing an AWS VPC Lattice Service.",
        VPCLATTICE_Service.GetTypes(),
      ),
    ],
    [
      ResourceType.VPCLATTICE_SERVICENETWORK,
      new ResourceProperty(
        "Resource for managing an AWS VPC Lattice Service Network.",
        VPCLATTICE_ServiceNetwork.GetTypes(),
      ),
    ],
    [
      ResourceType.VPCLATTICE_SERVICENETWORKSERVICEASSOCIATION,
      new ResourceProperty(
        "Resource for managing an AWS VPC Lattice Service Network Service Association.",
        VPCLATTICE_ServiceNetworkServiceAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.VPCLATTICE_SERVICENETWORKVPCASSOCIATION,
      new ResourceProperty(
        "Resource for managing an AWS VPC Lattice Service Network VPC Association.",
        VPCLATTICE_ServiceNetworkVpcAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.VPCLATTICE_TARGETGROUP,
      new ResourceProperty(
        "Resource for managing an AWS VPC Lattice Target Group.",
        VPCLATTICE_TargetGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.VPCLATTICE_TARGETGROUPATTACHMENT,
      new ResourceProperty(
        "Provides the ability to register a target with an AWS VPC Lattice Target Group.",
        VPCLATTICE_TargetGroupAttachment.GetTypes(),
      ),
    ],
    [
      ResourceType.WAF_BYTEMATCHSET,
      new ResourceProperty(
        "Provides a WAF Byte Match Set Resource",
        WAF_ByteMatchSet.GetTypes(),
      ),
    ],
    [
      ResourceType.WAF_GEOMATCHSET,
      new ResourceProperty(
        "Provides a WAF Geo Match Set Resource",
        WAF_GeoMatchSet.GetTypes(),
      ),
    ],
    [
      ResourceType.WAF_IPSET,
      new ResourceProperty(
        "Provides a WAF IPSet Resource",
        WAF_IpSet.GetTypes(),
      ),
    ],
    [
      ResourceType.WAF_RATEBASEDRULE,
      new ResourceProperty(
        "Provides a WAF Rate Based Rule Resource",
        WAF_RateBasedRule.GetTypes(),
      ),
    ],
    [
      ResourceType.WAF_REGEXMATCHSET,
      new ResourceProperty(
        "Provides a WAF Regex Match Set Resource",
        WAF_RegexMatchSet.GetTypes(),
      ),
    ],
    [
      ResourceType.WAF_REGEXPATTERNSET,
      new ResourceProperty(
        "Provides a WAF Regex Pattern Set Resource",
        WAF_RegexPatternSet.GetTypes(),
      ),
    ],
    [
      ResourceType.WAF_RULE,
      new ResourceProperty("Provides a WAF Rule Resource", WAF_Rule.GetTypes()),
    ],
    [
      ResourceType.WAF_RULEGROUP,
      new ResourceProperty(
        "Provides a WAF Rule Group Resource",
        WAF_RuleGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.WAF_SIZECONSTRAINTSET,
      new ResourceProperty(
        "Use the `aws.waf.SizeConstraintSet` resource to manage WAF size constraint sets.",
        WAF_SizeConstraintSet.GetTypes(),
      ),
    ],
    [
      ResourceType.WAF_SQLINJECTIONMATCHSET,
      new ResourceProperty(
        "Provides a WAF SQL Injection Match Set Resource",
        WAF_SqlInjectionMatchSet.GetTypes(),
      ),
    ],
    [
      ResourceType.WAF_WEBACL,
      new ResourceProperty(
        "Provides a WAF Web ACL Resource",
        WAF_WebAcl.GetTypes(),
      ),
    ],
    [
      ResourceType.WAF_XSSMATCHSET,
      new ResourceProperty(
        "Provides a WAF XSS Match Set Resource",
        WAF_XssMatchSet.GetTypes(),
      ),
    ],
    [
      ResourceType.WAFREGIONAL_BYTEMATCHSET,
      new ResourceProperty(
        "Provides a WAF Regional Byte Match Set Resource for use with Application Load Balancer.",
        WAFREGIONAL_ByteMatchSet.GetTypes(),
      ),
    ],
    [
      ResourceType.WAFREGIONAL_GEOMATCHSET,
      new ResourceProperty(
        "Provides a WAF Regional Geo Match Set Resource",
        WAFREGIONAL_GeoMatchSet.GetTypes(),
      ),
    ],
    [
      ResourceType.WAFREGIONAL_IPSET,
      new ResourceProperty(
        "Provides a WAF Regional IPSet Resource for use with Application Load Balancer.",
        WAFREGIONAL_IpSet.GetTypes(),
      ),
    ],
    [
      ResourceType.WAFREGIONAL_RATEBASEDRULE,
      new ResourceProperty(
        "Provides a WAF Rate Based Rule Resource",
        WAFREGIONAL_RateBasedRule.GetTypes(),
      ),
    ],
    [
      ResourceType.WAFREGIONAL_REGEXMATCHSET,
      new ResourceProperty(
        "Provides a WAF Regional Regex Match Set Resource",
        WAFREGIONAL_RegexMatchSet.GetTypes(),
      ),
    ],
    [
      ResourceType.WAFREGIONAL_REGEXPATTERNSET,
      new ResourceProperty(
        "Provides a WAF Regional Regex Pattern Set Resource",
        WAFREGIONAL_RegexPatternSet.GetTypes(),
      ),
    ],
    [
      ResourceType.WAFREGIONAL_RULE,
      new ResourceProperty(
        "Provides an WAF Regional Rule Resource for use with Application Load Balancer.",
        WAFREGIONAL_Rule.GetTypes(),
      ),
    ],
    [
      ResourceType.WAFREGIONAL_RULEGROUP,
      new ResourceProperty(
        "Provides a WAF Regional Rule Group Resource",
        WAFREGIONAL_RuleGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.WAFREGIONAL_SIZECONSTRAINTSET,
      new ResourceProperty(
        "Provides a WAF Regional Size Constraint Set Resource for use with Application Load Balancer.",
        WAFREGIONAL_SizeConstraintSet.GetTypes(),
      ),
    ],
    [
      ResourceType.WAFREGIONAL_SQLINJECTIONMATCHSET,
      new ResourceProperty(
        "Provides a WAF Regional SQL Injection Match Set Resource for use with Application Load Balancer.",
        WAFREGIONAL_SqlInjectionMatchSet.GetTypes(),
      ),
    ],
    [
      ResourceType.WAFREGIONAL_WEBACL,
      new ResourceProperty(
        "Provides a WAF Regional Web ACL Resource for use with Application Load Balancer.",
        WAFREGIONAL_WebAcl.GetTypes(),
      ),
    ],
    [
      ResourceType.WAFREGIONAL_WEBACLASSOCIATION,
      new ResourceProperty(
        "Manages an association with WAF Regional Web ACL.  > --Note:-- An Application Load Balancer can only be associated with one WAF Regional WebACL.",
        WAFREGIONAL_WebAclAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.WAFREGIONAL_XSSMATCHSET,
      new ResourceProperty(
        "Provides a WAF Regional XSS Match Set Resource for use with Application Load Balancer.",
        WAFREGIONAL_XssMatchSet.GetTypes(),
      ),
    ],
    [
      ResourceType.WAFV2_IPSET,
      new ResourceProperty(
        "Provides a WAFv2 IP Set Resource",
        WAFV2_IpSet.GetTypes(),
      ),
    ],
    [
      ResourceType.WAFV2_REGEXPATTERNSET,
      new ResourceProperty(
        "Provides an AWS WAFv2 Regex Pattern Set Resource",
        WAFV2_RegexPatternSet.GetTypes(),
      ),
    ],
    [
      ResourceType.WAFV2_RULEGROUP,
      new ResourceProperty("", WAFV2_RuleGroup.GetTypes()),
    ],
    [
      ResourceType.WAFV2_WEBACL,
      new ResourceProperty("", WAFV2_WebAcl.GetTypes()),
    ],
    [
      ResourceType.WAFV2_WEBACLASSOCIATION,
      new ResourceProperty(
        "Creates a WAFv2 Web ACL Association.",
        WAFV2_WebAclAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.WAFV2_WEBACLLOGGINGCONFIGURATION,
      new ResourceProperty(
        "This resource creates a WAFv2 Web ACL Logging Configuration.  !> --WARNING:-- When logging from a WAFv2 Web ACL to a CloudWatch Log Group, the WAFv2 service tries to create or update a generic Log Resource Policy named `AWSWAF-LOGS`. However, if there are a large number of Web ACLs or if the account frequently creates and deletes Web ACLs, this policy may exceed the maximum policy size. As a result, this resource type will fail to be created. More details about this issue can be found in this issue. To prevent this issue, you can manage a specific resource policy. Please refer to the example below for managing a CloudWatch Log Group with a managed CloudWatch Log Resource Policy.",
        WAFV2_WebAclLoggingConfiguration.GetTypes(),
      ),
    ],
    [
      ResourceType.WORKLINK_FLEET,
      new ResourceProperty("", WORKLINK_Fleet.GetTypes()),
    ],
    [
      ResourceType.WORKLINK_WEBSITECERTIFICATEAUTHORITYASSOCIATION,
      new ResourceProperty(
        "",
        WORKLINK_WebsiteCertificateAuthorityAssociation.GetTypes(),
      ),
    ],
    [
      ResourceType.WORKSPACES_CONNECTIONALIAS,
      new ResourceProperty(
        "Resource for managing an AWS WorkSpaces Connection Alias.",
        WORKSPACES_ConnectionAlias.GetTypes(),
      ),
    ],
    [
      ResourceType.WORKSPACES_DIRECTORY,
      new ResourceProperty(
        "Provides a WorkSpaces directory in AWS WorkSpaces Service.  > --NOTE:-- AWS WorkSpaces service requires [`workspaces_DefaultRole`](https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-access-control.html#create-default-role) IAM role to operate normally.",
        WORKSPACES_Directory.GetTypes(),
      ),
    ],
    [
      ResourceType.WORKSPACES_IPGROUP,
      new ResourceProperty(
        "Provides an IP access control group in AWS WorkSpaces Service",
        WORKSPACES_IpGroup.GetTypes(),
      ),
    ],
    [
      ResourceType.WORKSPACES_WORKSPACE,
      new ResourceProperty(
        "Provides a workspace in [AWS Workspaces](https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces.html) Service  > --NOTE:-- AWS WorkSpaces service requires [`workspaces_DefaultRole`](https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-access-control.html#create-default-role) IAM role to operate normally.",
        WORKSPACES_Workspace.GetTypes(),
      ),
    ],
    [
      ResourceType.XRAY_ENCRYPTIONCONFIG,
      new ResourceProperty(
        "Creates and manages an AWS XRay Encryption Config.  > --NOTE:-- Removing this resource from the provider has no effect to the encryption configuration within X-Ray.",
        XRAY_EncryptionConfig.GetTypes(),
      ),
    ],
    [
      ResourceType.XRAY_GROUP,
      new ResourceProperty(
        "Creates and manages an AWS XRay Group.",
        XRAY_Group.GetTypes(),
      ),
    ],
    [
      ResourceType.XRAY_SAMPLINGRULE,
      new ResourceProperty(
        "Creates and manages an AWS XRay Sampling Rule.",
        XRAY_SamplingRule.GetTypes(),
      ),
    ],
  ]);
}
