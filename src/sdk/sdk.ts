/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Connection } from "./connection";
import { Destination } from "./destination";
import { LinkToken } from "./linktoken";
import * as shared from "./models/shared";
import { ObjectT } from "./object";
import { Source } from "./source";
import { Sync } from "./sync";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["https://api.fabra.io"] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
  /**
   * The security details required to authenticate the SDK
   */
  security?: shared.Security;
  /**
   * Allows overriding the default axios client used by the SDK
   */
  defaultClient?: AxiosInstance;
  /**
   * Allows overriding the default server URL used by the SDK
   */
  serverURL?: string;
};

export class Fabra {
  /**
   * Operations on connections
   */
  public connection: Connection;
  /**
   * Operations on destinations
   */
  public destination: Destination;
  /**
   * Operations on link tokens
   */
  public linkToken: LinkToken;
  /**
   * Operations on objects
   */
  public object: ObjectT;
  /**
   * Operations on sources
   */
  public source: Source;
  /**
   * Operations on syncs
   */
  public sync: Sync;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.19.1";
  private _genVersion = "2.23.4";
  private _globals: any;

  constructor(props?: SDKProps) {
    this._serverURL = props?.serverURL ?? ServerList[0];

    this._defaultClient =
      props?.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props?.security) {
      let security: shared.Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new shared.Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }

    this.connection = new Connection(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.destination = new Destination(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.linkToken = new LinkToken(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.object = new ObjectT(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.source = new Source(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.sync = new Sync(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
