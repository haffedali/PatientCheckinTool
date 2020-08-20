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
	private context: ComponentFramework.Context<IInputs>;
	private _props: IAppProps;
	private notifyOutputChanged: () => void;


	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement) {
		// Add control initialization code
		this._container = container;
		this.context = context;
		this._props = {
			componentContext: context,
			msalAuthProvider: createMsalAuthProvider({
					appId: context.parameters.azureADAppId.raw!,
					appRedirectUrl: context.parameters.azureADAppRedirectUrl.raw!,
					appAuthority: context.parameters.azureADAppAuthority.raw!,
					appScopes: (context.parameters.azureADAppScopes.raw || "").split(";"),
					cacheLocation: context.parameters.cacheLocation.raw || "sessionStorage"
				} as IConfig),
			forceLogin: context.parameters.forceLogin.raw == "true"
		};
		this.notifyOutputChanged = notifyOutputChanged;
	}




	public updateView(context: ComponentFramework.Context<IInputs>): void {
		this._props.componentContext = context
		ReactDOM.render(React.createElement(App), this._container)
	}

	

	public getOutputs(): IOutputs {
		return {};
	}

	public destroy(): void {
		// Add code to cleanup control if necessary
		ReactDOM.unmountComponentAtNode(this._container);

	}
}