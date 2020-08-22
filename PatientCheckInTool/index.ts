import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { initializeIcons } from '@uifabric/icons';
import {App, IAppProps} from "./App";
import {IConfig} from "./interfaces";


initializeIcons();


export class PatientCheckInTool implements ComponentFramework.StandardControl<IInputs, IOutputs> {
	private _container: HTMLDivElement;
	private _context: ComponentFramework.Context<IInputs>;
	private _props: IAppProps;
	private notifyOutputChanged: () => void;


	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement) {
		this._container = container;
		this._context = context;
		this._props = {
			componentContext: context,
		};
		this.notifyOutputChanged = notifyOutputChanged;
		this.renderControl();
	}


	private renderControl() {
		ReactDOM.render(React.createElement(App, this._props), this._container)
	}

	
	public updateView(context: ComponentFramework.Context<IInputs>): void {
		this._props.componentContext = context
		// ReactDOM.render(React.createElement(App, this._props), this._container)
	}

	

	public getOutputs(): IOutputs {
		return {};
	}

	public destroy(): void {
		// Add code to cleanup control if necessary
		ReactDOM.unmountComponentAtNode(this._container);

	}
}