import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { initializeIcons } from '@uifabric/icons';
import {App} from "./App";

export class PatientCheckInTool implements ComponentFramework.StandardControl<IInputs, IOutputs> {
	private container: HTMLDivElement;
	private context: ComponentFramework.Context<IInputs>;
	private notifyOutputChanged: () => void;


	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement) {
		// Add control initialization code
		this.container = container;
		this.context = context;
		this.notifyOutputChanged = notifyOutputChanged;
		initializeIcons();
		this.renderControl();
	}

	private renderControl() {
		ReactDOM.render(React.createElement(App), this.container)
	}


	public updateView(context: ComponentFramework.Context<IInputs>): void {
	}


	public getOutputs(): IOutputs {
		return {};
	}

	public destroy(): void {
		// Add code to cleanup control if necessary
		ReactDOM.unmountComponentAtNode(this.container);

	}
}