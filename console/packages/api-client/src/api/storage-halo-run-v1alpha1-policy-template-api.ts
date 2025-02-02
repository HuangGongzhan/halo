/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from "../configuration";
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from "axios";
import globalAxios from "axios";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "../base";
// @ts-ignore
import { PolicyTemplate } from "../models";
// @ts-ignore
import { PolicyTemplateList } from "../models";
/**
 * StorageHaloRunV1alpha1PolicyTemplateApi - axios parameter creator
 * @export
 */
export const StorageHaloRunV1alpha1PolicyTemplateApiAxiosParamCreator =
  function (configuration?: Configuration) {
    return {
      /**
       * Create storage.halo.run/v1alpha1/PolicyTemplate
       * @param {PolicyTemplate} [policyTemplate] Fresh policytemplate
       * @param {*} [options] Override http request option.
       * @throws {RequiredError}
       */
      createstorageHaloRunV1alpha1PolicyTemplate: async (
        policyTemplate?: PolicyTemplate,
        options: AxiosRequestConfig = {}
      ): Promise<RequestArgs> => {
        const localVarPath = `/apis/storage.halo.run/v1alpha1/policytemplates`;
        // use dummy base URL string because the URL constructor only accepts absolute URLs.
        const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
        let baseOptions;
        if (configuration) {
          baseOptions = configuration.baseOptions;
        }

        const localVarRequestOptions = {
          method: "POST",
          ...baseOptions,
          ...options,
        };
        const localVarHeaderParameter = {} as any;
        const localVarQueryParameter = {} as any;

        // authentication BasicAuth required
        // http basic authentication required
        setBasicAuthToObject(localVarRequestOptions, configuration);

        // authentication BearerAuth required
        // http bearer authentication required
        await setBearerAuthToObject(localVarHeaderParameter, configuration);

        localVarHeaderParameter["Content-Type"] = "application/json";

        setSearchParams(localVarUrlObj, localVarQueryParameter);
        let headersFromBaseOptions =
          baseOptions && baseOptions.headers ? baseOptions.headers : {};
        localVarRequestOptions.headers = {
          ...localVarHeaderParameter,
          ...headersFromBaseOptions,
          ...options.headers,
        };
        localVarRequestOptions.data = serializeDataIfNeeded(
          policyTemplate,
          localVarRequestOptions,
          configuration
        );

        return {
          url: toPathString(localVarUrlObj),
          options: localVarRequestOptions,
        };
      },
      /**
       * Delete storage.halo.run/v1alpha1/PolicyTemplate
       * @param {string} name Name of policytemplate
       * @param {*} [options] Override http request option.
       * @throws {RequiredError}
       */
      deletestorageHaloRunV1alpha1PolicyTemplate: async (
        name: string,
        options: AxiosRequestConfig = {}
      ): Promise<RequestArgs> => {
        // verify required parameter 'name' is not null or undefined
        assertParamExists(
          "deletestorageHaloRunV1alpha1PolicyTemplate",
          "name",
          name
        );
        const localVarPath =
          `/apis/storage.halo.run/v1alpha1/policytemplates/{name}`.replace(
            `{${"name"}}`,
            encodeURIComponent(String(name))
          );
        // use dummy base URL string because the URL constructor only accepts absolute URLs.
        const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
        let baseOptions;
        if (configuration) {
          baseOptions = configuration.baseOptions;
        }

        const localVarRequestOptions = {
          method: "DELETE",
          ...baseOptions,
          ...options,
        };
        const localVarHeaderParameter = {} as any;
        const localVarQueryParameter = {} as any;

        // authentication BasicAuth required
        // http basic authentication required
        setBasicAuthToObject(localVarRequestOptions, configuration);

        // authentication BearerAuth required
        // http bearer authentication required
        await setBearerAuthToObject(localVarHeaderParameter, configuration);

        setSearchParams(localVarUrlObj, localVarQueryParameter);
        let headersFromBaseOptions =
          baseOptions && baseOptions.headers ? baseOptions.headers : {};
        localVarRequestOptions.headers = {
          ...localVarHeaderParameter,
          ...headersFromBaseOptions,
          ...options.headers,
        };

        return {
          url: toPathString(localVarUrlObj),
          options: localVarRequestOptions,
        };
      },
      /**
       * Get storage.halo.run/v1alpha1/PolicyTemplate
       * @param {string} name Name of policytemplate
       * @param {*} [options] Override http request option.
       * @throws {RequiredError}
       */
      getstorageHaloRunV1alpha1PolicyTemplate: async (
        name: string,
        options: AxiosRequestConfig = {}
      ): Promise<RequestArgs> => {
        // verify required parameter 'name' is not null or undefined
        assertParamExists(
          "getstorageHaloRunV1alpha1PolicyTemplate",
          "name",
          name
        );
        const localVarPath =
          `/apis/storage.halo.run/v1alpha1/policytemplates/{name}`.replace(
            `{${"name"}}`,
            encodeURIComponent(String(name))
          );
        // use dummy base URL string because the URL constructor only accepts absolute URLs.
        const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
        let baseOptions;
        if (configuration) {
          baseOptions = configuration.baseOptions;
        }

        const localVarRequestOptions = {
          method: "GET",
          ...baseOptions,
          ...options,
        };
        const localVarHeaderParameter = {} as any;
        const localVarQueryParameter = {} as any;

        // authentication BasicAuth required
        // http basic authentication required
        setBasicAuthToObject(localVarRequestOptions, configuration);

        // authentication BearerAuth required
        // http bearer authentication required
        await setBearerAuthToObject(localVarHeaderParameter, configuration);

        setSearchParams(localVarUrlObj, localVarQueryParameter);
        let headersFromBaseOptions =
          baseOptions && baseOptions.headers ? baseOptions.headers : {};
        localVarRequestOptions.headers = {
          ...localVarHeaderParameter,
          ...headersFromBaseOptions,
          ...options.headers,
        };

        return {
          url: toPathString(localVarUrlObj),
          options: localVarRequestOptions,
        };
      },
      /**
       * List storage.halo.run/v1alpha1/PolicyTemplate
       * @param {Array<string>} [fieldSelector] Field selector for filtering.
       * @param {Array<string>} [labelSelector] Label selector for filtering.
       * @param {number} [page] The page number. Zero indicates no page.
       * @param {number} [size] Size of one page. Zero indicates no limit.
       * @param {*} [options] Override http request option.
       * @throws {RequiredError}
       */
      liststorageHaloRunV1alpha1PolicyTemplate: async (
        fieldSelector?: Array<string>,
        labelSelector?: Array<string>,
        page?: number,
        size?: number,
        options: AxiosRequestConfig = {}
      ): Promise<RequestArgs> => {
        const localVarPath = `/apis/storage.halo.run/v1alpha1/policytemplates`;
        // use dummy base URL string because the URL constructor only accepts absolute URLs.
        const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
        let baseOptions;
        if (configuration) {
          baseOptions = configuration.baseOptions;
        }

        const localVarRequestOptions = {
          method: "GET",
          ...baseOptions,
          ...options,
        };
        const localVarHeaderParameter = {} as any;
        const localVarQueryParameter = {} as any;

        // authentication BasicAuth required
        // http basic authentication required
        setBasicAuthToObject(localVarRequestOptions, configuration);

        // authentication BearerAuth required
        // http bearer authentication required
        await setBearerAuthToObject(localVarHeaderParameter, configuration);

        if (fieldSelector) {
          localVarQueryParameter["fieldSelector"] = fieldSelector;
        }

        if (labelSelector) {
          localVarQueryParameter["labelSelector"] = labelSelector;
        }

        if (page !== undefined) {
          localVarQueryParameter["page"] = page;
        }

        if (size !== undefined) {
          localVarQueryParameter["size"] = size;
        }

        setSearchParams(localVarUrlObj, localVarQueryParameter);
        let headersFromBaseOptions =
          baseOptions && baseOptions.headers ? baseOptions.headers : {};
        localVarRequestOptions.headers = {
          ...localVarHeaderParameter,
          ...headersFromBaseOptions,
          ...options.headers,
        };

        return {
          url: toPathString(localVarUrlObj),
          options: localVarRequestOptions,
        };
      },
      /**
       * Update storage.halo.run/v1alpha1/PolicyTemplate
       * @param {string} name Name of policytemplate
       * @param {PolicyTemplate} [policyTemplate] Updated policytemplate
       * @param {*} [options] Override http request option.
       * @throws {RequiredError}
       */
      updatestorageHaloRunV1alpha1PolicyTemplate: async (
        name: string,
        policyTemplate?: PolicyTemplate,
        options: AxiosRequestConfig = {}
      ): Promise<RequestArgs> => {
        // verify required parameter 'name' is not null or undefined
        assertParamExists(
          "updatestorageHaloRunV1alpha1PolicyTemplate",
          "name",
          name
        );
        const localVarPath =
          `/apis/storage.halo.run/v1alpha1/policytemplates/{name}`.replace(
            `{${"name"}}`,
            encodeURIComponent(String(name))
          );
        // use dummy base URL string because the URL constructor only accepts absolute URLs.
        const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
        let baseOptions;
        if (configuration) {
          baseOptions = configuration.baseOptions;
        }

        const localVarRequestOptions = {
          method: "PUT",
          ...baseOptions,
          ...options,
        };
        const localVarHeaderParameter = {} as any;
        const localVarQueryParameter = {} as any;

        // authentication BasicAuth required
        // http basic authentication required
        setBasicAuthToObject(localVarRequestOptions, configuration);

        // authentication BearerAuth required
        // http bearer authentication required
        await setBearerAuthToObject(localVarHeaderParameter, configuration);

        localVarHeaderParameter["Content-Type"] = "application/json";

        setSearchParams(localVarUrlObj, localVarQueryParameter);
        let headersFromBaseOptions =
          baseOptions && baseOptions.headers ? baseOptions.headers : {};
        localVarRequestOptions.headers = {
          ...localVarHeaderParameter,
          ...headersFromBaseOptions,
          ...options.headers,
        };
        localVarRequestOptions.data = serializeDataIfNeeded(
          policyTemplate,
          localVarRequestOptions,
          configuration
        );

        return {
          url: toPathString(localVarUrlObj),
          options: localVarRequestOptions,
        };
      },
    };
  };

/**
 * StorageHaloRunV1alpha1PolicyTemplateApi - functional programming interface
 * @export
 */
export const StorageHaloRunV1alpha1PolicyTemplateApiFp = function (
  configuration?: Configuration
) {
  const localVarAxiosParamCreator =
    StorageHaloRunV1alpha1PolicyTemplateApiAxiosParamCreator(configuration);
  return {
    /**
     * Create storage.halo.run/v1alpha1/PolicyTemplate
     * @param {PolicyTemplate} [policyTemplate] Fresh policytemplate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createstorageHaloRunV1alpha1PolicyTemplate(
      policyTemplate?: PolicyTemplate,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<PolicyTemplate>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createstorageHaloRunV1alpha1PolicyTemplate(
          policyTemplate,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Delete storage.halo.run/v1alpha1/PolicyTemplate
     * @param {string} name Name of policytemplate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deletestorageHaloRunV1alpha1PolicyTemplate(
      name: string,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deletestorageHaloRunV1alpha1PolicyTemplate(
          name,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Get storage.halo.run/v1alpha1/PolicyTemplate
     * @param {string} name Name of policytemplate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getstorageHaloRunV1alpha1PolicyTemplate(
      name: string,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<PolicyTemplate>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getstorageHaloRunV1alpha1PolicyTemplate(
          name,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * List storage.halo.run/v1alpha1/PolicyTemplate
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async liststorageHaloRunV1alpha1PolicyTemplate(
      fieldSelector?: Array<string>,
      labelSelector?: Array<string>,
      page?: number,
      size?: number,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<PolicyTemplateList>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.liststorageHaloRunV1alpha1PolicyTemplate(
          fieldSelector,
          labelSelector,
          page,
          size,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Update storage.halo.run/v1alpha1/PolicyTemplate
     * @param {string} name Name of policytemplate
     * @param {PolicyTemplate} [policyTemplate] Updated policytemplate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updatestorageHaloRunV1alpha1PolicyTemplate(
      name: string,
      policyTemplate?: PolicyTemplate,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<PolicyTemplate>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updatestorageHaloRunV1alpha1PolicyTemplate(
          name,
          policyTemplate,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * StorageHaloRunV1alpha1PolicyTemplateApi - factory interface
 * @export
 */
export const StorageHaloRunV1alpha1PolicyTemplateApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = StorageHaloRunV1alpha1PolicyTemplateApiFp(configuration);
  return {
    /**
     * Create storage.halo.run/v1alpha1/PolicyTemplate
     * @param {StorageHaloRunV1alpha1PolicyTemplateApiCreatestorageHaloRunV1alpha1PolicyTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createstorageHaloRunV1alpha1PolicyTemplate(
      requestParameters: StorageHaloRunV1alpha1PolicyTemplateApiCreatestorageHaloRunV1alpha1PolicyTemplateRequest = {},
      options?: AxiosRequestConfig
    ): AxiosPromise<PolicyTemplate> {
      return localVarFp
        .createstorageHaloRunV1alpha1PolicyTemplate(
          requestParameters.policyTemplate,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Delete storage.halo.run/v1alpha1/PolicyTemplate
     * @param {StorageHaloRunV1alpha1PolicyTemplateApiDeletestorageHaloRunV1alpha1PolicyTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletestorageHaloRunV1alpha1PolicyTemplate(
      requestParameters: StorageHaloRunV1alpha1PolicyTemplateApiDeletestorageHaloRunV1alpha1PolicyTemplateRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<void> {
      return localVarFp
        .deletestorageHaloRunV1alpha1PolicyTemplate(
          requestParameters.name,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Get storage.halo.run/v1alpha1/PolicyTemplate
     * @param {StorageHaloRunV1alpha1PolicyTemplateApiGetstorageHaloRunV1alpha1PolicyTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getstorageHaloRunV1alpha1PolicyTemplate(
      requestParameters: StorageHaloRunV1alpha1PolicyTemplateApiGetstorageHaloRunV1alpha1PolicyTemplateRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<PolicyTemplate> {
      return localVarFp
        .getstorageHaloRunV1alpha1PolicyTemplate(
          requestParameters.name,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * List storage.halo.run/v1alpha1/PolicyTemplate
     * @param {StorageHaloRunV1alpha1PolicyTemplateApiListstorageHaloRunV1alpha1PolicyTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    liststorageHaloRunV1alpha1PolicyTemplate(
      requestParameters: StorageHaloRunV1alpha1PolicyTemplateApiListstorageHaloRunV1alpha1PolicyTemplateRequest = {},
      options?: AxiosRequestConfig
    ): AxiosPromise<PolicyTemplateList> {
      return localVarFp
        .liststorageHaloRunV1alpha1PolicyTemplate(
          requestParameters.fieldSelector,
          requestParameters.labelSelector,
          requestParameters.page,
          requestParameters.size,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Update storage.halo.run/v1alpha1/PolicyTemplate
     * @param {StorageHaloRunV1alpha1PolicyTemplateApiUpdatestorageHaloRunV1alpha1PolicyTemplateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatestorageHaloRunV1alpha1PolicyTemplate(
      requestParameters: StorageHaloRunV1alpha1PolicyTemplateApiUpdatestorageHaloRunV1alpha1PolicyTemplateRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<PolicyTemplate> {
      return localVarFp
        .updatestorageHaloRunV1alpha1PolicyTemplate(
          requestParameters.name,
          requestParameters.policyTemplate,
          options
        )
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for createstorageHaloRunV1alpha1PolicyTemplate operation in StorageHaloRunV1alpha1PolicyTemplateApi.
 * @export
 * @interface StorageHaloRunV1alpha1PolicyTemplateApiCreatestorageHaloRunV1alpha1PolicyTemplateRequest
 */
export interface StorageHaloRunV1alpha1PolicyTemplateApiCreatestorageHaloRunV1alpha1PolicyTemplateRequest {
  /**
   * Fresh policytemplate
   * @type {PolicyTemplate}
   * @memberof StorageHaloRunV1alpha1PolicyTemplateApiCreatestorageHaloRunV1alpha1PolicyTemplate
   */
  readonly policyTemplate?: PolicyTemplate;
}

/**
 * Request parameters for deletestorageHaloRunV1alpha1PolicyTemplate operation in StorageHaloRunV1alpha1PolicyTemplateApi.
 * @export
 * @interface StorageHaloRunV1alpha1PolicyTemplateApiDeletestorageHaloRunV1alpha1PolicyTemplateRequest
 */
export interface StorageHaloRunV1alpha1PolicyTemplateApiDeletestorageHaloRunV1alpha1PolicyTemplateRequest {
  /**
   * Name of policytemplate
   * @type {string}
   * @memberof StorageHaloRunV1alpha1PolicyTemplateApiDeletestorageHaloRunV1alpha1PolicyTemplate
   */
  readonly name: string;
}

/**
 * Request parameters for getstorageHaloRunV1alpha1PolicyTemplate operation in StorageHaloRunV1alpha1PolicyTemplateApi.
 * @export
 * @interface StorageHaloRunV1alpha1PolicyTemplateApiGetstorageHaloRunV1alpha1PolicyTemplateRequest
 */
export interface StorageHaloRunV1alpha1PolicyTemplateApiGetstorageHaloRunV1alpha1PolicyTemplateRequest {
  /**
   * Name of policytemplate
   * @type {string}
   * @memberof StorageHaloRunV1alpha1PolicyTemplateApiGetstorageHaloRunV1alpha1PolicyTemplate
   */
  readonly name: string;
}

/**
 * Request parameters for liststorageHaloRunV1alpha1PolicyTemplate operation in StorageHaloRunV1alpha1PolicyTemplateApi.
 * @export
 * @interface StorageHaloRunV1alpha1PolicyTemplateApiListstorageHaloRunV1alpha1PolicyTemplateRequest
 */
export interface StorageHaloRunV1alpha1PolicyTemplateApiListstorageHaloRunV1alpha1PolicyTemplateRequest {
  /**
   * Field selector for filtering.
   * @type {Array<string>}
   * @memberof StorageHaloRunV1alpha1PolicyTemplateApiListstorageHaloRunV1alpha1PolicyTemplate
   */
  readonly fieldSelector?: Array<string>;

  /**
   * Label selector for filtering.
   * @type {Array<string>}
   * @memberof StorageHaloRunV1alpha1PolicyTemplateApiListstorageHaloRunV1alpha1PolicyTemplate
   */
  readonly labelSelector?: Array<string>;

  /**
   * The page number. Zero indicates no page.
   * @type {number}
   * @memberof StorageHaloRunV1alpha1PolicyTemplateApiListstorageHaloRunV1alpha1PolicyTemplate
   */
  readonly page?: number;

  /**
   * Size of one page. Zero indicates no limit.
   * @type {number}
   * @memberof StorageHaloRunV1alpha1PolicyTemplateApiListstorageHaloRunV1alpha1PolicyTemplate
   */
  readonly size?: number;
}

/**
 * Request parameters for updatestorageHaloRunV1alpha1PolicyTemplate operation in StorageHaloRunV1alpha1PolicyTemplateApi.
 * @export
 * @interface StorageHaloRunV1alpha1PolicyTemplateApiUpdatestorageHaloRunV1alpha1PolicyTemplateRequest
 */
export interface StorageHaloRunV1alpha1PolicyTemplateApiUpdatestorageHaloRunV1alpha1PolicyTemplateRequest {
  /**
   * Name of policytemplate
   * @type {string}
   * @memberof StorageHaloRunV1alpha1PolicyTemplateApiUpdatestorageHaloRunV1alpha1PolicyTemplate
   */
  readonly name: string;

  /**
   * Updated policytemplate
   * @type {PolicyTemplate}
   * @memberof StorageHaloRunV1alpha1PolicyTemplateApiUpdatestorageHaloRunV1alpha1PolicyTemplate
   */
  readonly policyTemplate?: PolicyTemplate;
}

/**
 * StorageHaloRunV1alpha1PolicyTemplateApi - object-oriented interface
 * @export
 * @class StorageHaloRunV1alpha1PolicyTemplateApi
 * @extends {BaseAPI}
 */
export class StorageHaloRunV1alpha1PolicyTemplateApi extends BaseAPI {
  /**
   * Create storage.halo.run/v1alpha1/PolicyTemplate
   * @param {StorageHaloRunV1alpha1PolicyTemplateApiCreatestorageHaloRunV1alpha1PolicyTemplateRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof StorageHaloRunV1alpha1PolicyTemplateApi
   */
  public createstorageHaloRunV1alpha1PolicyTemplate(
    requestParameters: StorageHaloRunV1alpha1PolicyTemplateApiCreatestorageHaloRunV1alpha1PolicyTemplateRequest = {},
    options?: AxiosRequestConfig
  ) {
    return StorageHaloRunV1alpha1PolicyTemplateApiFp(this.configuration)
      .createstorageHaloRunV1alpha1PolicyTemplate(
        requestParameters.policyTemplate,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Delete storage.halo.run/v1alpha1/PolicyTemplate
   * @param {StorageHaloRunV1alpha1PolicyTemplateApiDeletestorageHaloRunV1alpha1PolicyTemplateRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof StorageHaloRunV1alpha1PolicyTemplateApi
   */
  public deletestorageHaloRunV1alpha1PolicyTemplate(
    requestParameters: StorageHaloRunV1alpha1PolicyTemplateApiDeletestorageHaloRunV1alpha1PolicyTemplateRequest,
    options?: AxiosRequestConfig
  ) {
    return StorageHaloRunV1alpha1PolicyTemplateApiFp(this.configuration)
      .deletestorageHaloRunV1alpha1PolicyTemplate(
        requestParameters.name,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get storage.halo.run/v1alpha1/PolicyTemplate
   * @param {StorageHaloRunV1alpha1PolicyTemplateApiGetstorageHaloRunV1alpha1PolicyTemplateRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof StorageHaloRunV1alpha1PolicyTemplateApi
   */
  public getstorageHaloRunV1alpha1PolicyTemplate(
    requestParameters: StorageHaloRunV1alpha1PolicyTemplateApiGetstorageHaloRunV1alpha1PolicyTemplateRequest,
    options?: AxiosRequestConfig
  ) {
    return StorageHaloRunV1alpha1PolicyTemplateApiFp(this.configuration)
      .getstorageHaloRunV1alpha1PolicyTemplate(requestParameters.name, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * List storage.halo.run/v1alpha1/PolicyTemplate
   * @param {StorageHaloRunV1alpha1PolicyTemplateApiListstorageHaloRunV1alpha1PolicyTemplateRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof StorageHaloRunV1alpha1PolicyTemplateApi
   */
  public liststorageHaloRunV1alpha1PolicyTemplate(
    requestParameters: StorageHaloRunV1alpha1PolicyTemplateApiListstorageHaloRunV1alpha1PolicyTemplateRequest = {},
    options?: AxiosRequestConfig
  ) {
    return StorageHaloRunV1alpha1PolicyTemplateApiFp(this.configuration)
      .liststorageHaloRunV1alpha1PolicyTemplate(
        requestParameters.fieldSelector,
        requestParameters.labelSelector,
        requestParameters.page,
        requestParameters.size,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Update storage.halo.run/v1alpha1/PolicyTemplate
   * @param {StorageHaloRunV1alpha1PolicyTemplateApiUpdatestorageHaloRunV1alpha1PolicyTemplateRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof StorageHaloRunV1alpha1PolicyTemplateApi
   */
  public updatestorageHaloRunV1alpha1PolicyTemplate(
    requestParameters: StorageHaloRunV1alpha1PolicyTemplateApiUpdatestorageHaloRunV1alpha1PolicyTemplateRequest,
    options?: AxiosRequestConfig
  ) {
    return StorageHaloRunV1alpha1PolicyTemplateApiFp(this.configuration)
      .updatestorageHaloRunV1alpha1PolicyTemplate(
        requestParameters.name,
        requestParameters.policyTemplate,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }
}
