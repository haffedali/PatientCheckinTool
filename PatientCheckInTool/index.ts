import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { initializeIcons } from '@uifabric/icons';
import {App, IAppProps} from "./App";
import {IConfig} from "./interfaces";
import { createMsalAuthProvider } from "./MsalAuthProvider";


initializeIcons();


export class PatientCheckInTool implements ComponentFramework.StandardControl<IInputs, IOutputs> {
	private _container: HTMLDivElement;
	private _context: ComponentFramework.Context<IInputs>;
	private _props: IAppProps;
	private notifyOutputChanged: () => void;


	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement) {
		// Add control initialization code
		this._container = container;
		this._context = context;
		// this._props = {
		// 	componentContext: context,
		// 	msalAuthProvider: createMsalAuthProvider({
		// 			appId: context.parameters.azureADAppId.raw!,
		// 			appRedirectUrl: context.parameters.azureADAppRedirectUrl.raw!,
		// 			appAuthority: context.parameters.azureADAppAuthority.raw!,
		// 			appScopes: (context.parameters.azureADAppScopes.raw || "").split(";"),
		// 			cacheLocation: context.parameters.cacheLocation.raw || "sessionStorage"
		// 		} as IConfig),
		// 	forceLogin: context.parameters.forceLogin.raw == "true"
		// };
		this._props = {
			componentContext: context,
			msalAuthProvider: createMsalAuthProvider({
					appId: "dcf94457-099e-4a7f-81d7-2d13e013004d",
					// appRedirectUrl: "https://hoffman209.crm.dynamics.com/",
					appRedirectUrl: "http://localhost:8181",

					appAuthority: "https://login.microsoftonline.com/8d89d7a4-2ebd-4cbe-b331-93ede20f4a4d/",
					appScopes: ["https://patientcheckintest.azurewebsites.net/user_impersonation"],
					cacheLocation: "localStorage"
				}),
			forceLogin: context.parameters.forceLogin.raw == "true"
		};
		this.notifyOutputChanged = notifyOutputChanged;
		this.renderControl();
	}


	private renderControl() {
		ReactDOM.render(React.createElement(App, this._props), this._container)
	}

	
	public updateView(context: ComponentFramework.Context<IInputs>): void {
		this._props.componentContext = context
		ReactDOM.render(React.createElement(App, this._props), this._container)
	}

	

	public getOutputs(): IOutputs {
		return {};
	}

	public destroy(): void {
		// Add code to cleanup control if necessary
		ReactDOM.unmountComponentAtNode(this._container);

	}
}