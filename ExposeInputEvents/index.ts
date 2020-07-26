import {IInputs, IOutputs} from "./generated/ManifestTypes";

export class ExposeInputEvents implements ComponentFramework.StandardControl<IInputs, IOutputs> {

	private _context: ComponentFramework.Context<IInputs>;

	// PowerApps component framework framework delegate which will be assigned to this object which would be called whenever an update happens.
	private _notifyOutputChanged: () => void;

	private _value: string;

	// delegated methods from control
	private _onblur: string = "";
    private _onchange: string = ""; 
    private _oncopy: string = "";
    private _oncut: string = "";
	private _onclick: string = "";    
    private _ondblclick: string = "";
	private _onfocus: string = "";
	private _onfocusin: string = "";
	private _onfocusout: string = "";   
	private _oninput: string = "";            
	private _onkeydown: string = "";
	private _onkeyup: string = "";
	private _onkeypress: string = "";
	private _onmousedown: string = "";
	private _onmouseenter: string = "";
	private _onmouseleave: string = "";
	private _onmousemove: string = "";
	private _onmouseover: string = "";
	private _onmouseout: string = "";
	private _onmouseup: string = "";
	private _onpaste: string = "";
	private _onselect: string = "";
	private _onwheel: string = "";

	// input element created as part of this control
	private input: HTMLInputElement;


	/**
	 * Empty constructor.
	 */
	constructor()
	{

	}

	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
	 */
	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement)
	{
		// Add control initialization code
		this._context = context; // set the context

		// Get the defined event handlers
		this._onblur = context.parameters.onBlurScript.raw === null?"":context.parameters.onBlurScript.raw;
		this._onchange = context.parameters.onChangeScript.raw === null?"":context.parameters.onChangeScript.raw;
		this._oncopy = context.parameters.onCopyScript.raw === null?"":context.parameters.onCopyScript.raw;
		this._oncut = context.parameters.onCutScript.raw === null?"":context.parameters.onCutScript.raw;
		this._onclick = context.parameters.onClickScript.raw === null?"":context.parameters.onClickScript.raw;
		this._ondblclick = context.parameters.ondblClickScript.raw === null?"":context.parameters.ondblClickScript.raw;
		this._onfocus = context.parameters.onFocusScript.raw === null?"":context.parameters.onFocusScript.raw;
		this._onfocusin = context.parameters.onFocusInScript.raw === null?"":context.parameters.onFocusInScript.raw;
		this._onfocusout = context.parameters.onFocusOutScript.raw === null?"":context.parameters.onFocusOutScript.raw;
		this._oninput = context.parameters.onInputScript.raw === null?"":context.parameters.onInputScript.raw;
		this._onkeydown = context.parameters.onKeyDownScript.raw === null?"":context.parameters.onKeyDownScript.raw;
		this._onkeyup = context.parameters.onKeyUpScript.raw === null?"":context.parameters.onKeyUpScript.raw;
		this._onkeypress = context.parameters.onKeyPressScript.raw === null?"":context.parameters.onKeyPressScript.raw;
		this._onmousedown = context.parameters.onMouseDownScript.raw === null?"":context.parameters.onMouseDownScript.raw;
		this._onmouseenter = context.parameters.onMouseEnterScript.raw === null?"":context.parameters.onMouseEnterScript.raw;
		this._onmouseleave = context.parameters.onMouseLeaveScript.raw === null?"":context.parameters.onMouseLeaveScript.raw;
		this._onmousemove = context.parameters.onMouseMoveScript.raw === null?"":context.parameters.onMouseMoveScript.raw;
		this._onmouseover = context.parameters.onMouseOverScript.raw === null?"":context.parameters.onMouseOverScript.raw;
		this._onmouseout = context.parameters.onMouseOutScript.raw === null?"":context.parameters.onMouseOutScript.raw;
		this._onmouseup = context.parameters.onMouseUpScript.raw === null?"":context.parameters.onMouseUpScript.raw;
		this._onpaste = context.parameters.onPasteScript.raw === null?"":context.parameters.onPasteScript.raw;
		this._onselect = context.parameters.onSelectScript.raw === null?"":context.parameters.onSelectScript.raw;
		this._onwheel = context.parameters.onWheelScript.raw === null?"":context.parameters.onWheelScript.raw;

		//Create a textbox
		this.input = document.createElement("input");
		this.input.className = "HtmlInputController";
		this.input.addEventListener("change", this.onChange.bind(this));
	

		this._notifyOutputChanged = notifyOutputChanged;

		//this.input.addEventListener("<eventhandler>", (event) => { this._value = this._value + 1; this._handler();});
		if(typeof (this._onblur) !== "undefined" && typeof (this._onblur) !== "undefined" && this._onblur != null && this._onblur.length > 0) {
			this.input.addEventListener("blur", this.onBlur.bind(this));
		}

		if(typeof (this._oncopy) !== "undefined" && typeof (this._oncopy) !== "undefined" && this._oncopy != null && this._oncopy.length > 0) {
			this.input.addEventListener("copy", this.onCopy.bind(this));
		}

		if(typeof (this._oncut) !== "undefined" && typeof (this._oncut) !== "undefined" && this._oncut != null && this._oncut.length > 0) {
			this.input.addEventListener("cut", this.onCut.bind(this));
		}
		
		if(typeof (this._onclick) !== "undefined" && typeof (this._onclick) !== "undefined" && this._onclick != null && this._onclick.length > 0) {
			this.input.addEventListener("click", this.onClick.bind(this));
		}

		if(typeof (this._ondblclick) !== "undefined" && typeof (this._ondblclick) !== "undefined" && this._ondblclick != null && this._ondblclick.length > 0) {
			this.input.addEventListener("dblclick", this.ondblClick.bind(this));
		}
		
		if(typeof (this._onfocus) !== "undefined" && typeof (this._onfocus) !== "undefined" && this._onfocus != null && this._onfocus.length > 0) {
			this.input.addEventListener("focus", this.onFocus.bind(this));
		}
		
		if(typeof (this._onfocusin) !== "undefined" && typeof (this._onfocusin) !== "undefined" && this._onfocusin != null && this._onfocusin.length > 0) {
			this.input.addEventListener("focusin", this.onFocusIn.bind(this));
		}

		if(typeof (this._onfocusout) !== "undefined" && typeof (this._onfocusout) !== "undefined" && this._onfocusout != null && this._onfocusout.length > 0) {
			this.input.addEventListener("focusout", this.onFocusOut.bind(this));
		}

		if(typeof (this._oninput) !== "undefined" && typeof (this._oninput) !== "undefined" && this._oninput != null && this._oninput.length > 0) {
			this.input.addEventListener("input", this.onInput.bind(this));
		}
		
		if(typeof (this._onkeydown) !== "undefined" && typeof (this._onkeydown) !== "undefined" && this._onkeydown != null && this._onkeydown.length > 0) {
			this.input.addEventListener("keydown", this.onKeyDown.bind(this));
		}

		if(typeof (this._onkeyup) !== "undefined" && typeof (this._onkeyup) !== "undefined" && this._onkeyup != null && this._onkeyup.length > 0) {
			this.input.addEventListener("keyup", this.onKeyUp.bind(this));
		}
		
		if(typeof (this._onkeypress) !== "undefined" && typeof (this._onkeypress) !== "undefined" && this._onkeypress != null && this._onkeypress.length > 0) {
			this.input.addEventListener("keypress", this.onKeyPress.bind(this));
		}

		if(typeof (this._onmousedown) !== "undefined" && typeof (this._onmousedown) !== "undefined" && this._onmousedown != null && this._onmousedown.length > 0) {
			this.input.addEventListener("mousedown", this.onMouseDown.bind(this));
		}

		if(typeof (this._onmouseenter) !== "undefined" && typeof (this._onmouseenter) !== "undefined" && this._onmouseenter != null && this._onmouseenter.length > 0) {
			this.input.addEventListener("mouseenter", this.onMouseEnter.bind(this));
		}

		if(typeof (this._onmouseleave) !== "undefined" && typeof (this._onmouseleave) !== "undefined" && this._onmouseleave != null && this._onmouseleave.length > 0) {
			this.input.addEventListener("mouseleave", this.onMouseLeave.bind(this));
		}
		
		if(typeof (this._onmousemove) !== "undefined" && typeof (this._onmousemove) !== "undefined" && this._onmousemove != null && this._onmousemove.length > 0) {
			this.input.addEventListener("mousemove", this.onMouseMove.bind(this));
		}

		if(typeof (this._onmouseover) !== "undefined" && typeof (this._onmouseover) !== "undefined" && this._onmouseover != null && this._onmouseover.length > 0) {
			this.input.addEventListener("mouseover", this.onMouseOver.bind(this));
		}

		if(typeof (this._onmouseout) !== "undefined" && typeof (this._onmouseout) !== "undefined" && this._onmouseout != null && this._onmouseout.length > 0) {
			this.input.addEventListener("mouseout", this.onMouseOut.bind(this));
		}
		
		if(typeof (this._onmouseup) !== "undefined" && typeof (this._onmouseup) !== "undefined" && this._onmouseup != null && this._onmouseup.length > 0) {
			this.input.addEventListener("mouseup", this.onMouseUp.bind(this));
		}

		if(typeof (this._onpaste) !== "undefined" && typeof (this._onpaste) !== "undefined" && this._onpaste != null && this._onpaste.length > 0) {
			this.input.addEventListener("paste", this.onPaste.bind(this));
		}

		if(typeof (this._onselect) !== "undefined" && typeof (this._onselect) !== "undefined" && this._onselect != null && this._onselect.length > 0) {
			this.input.addEventListener("select", this.onSelect.bind(this));
		}
		
		if(typeof (this._onwheel) !== "undefined" && typeof (this._onwheel) !== "undefined" && this._onwheel != null && this._onwheel.length > 0) {
			this.input.addEventListener("wheel", this.onWheel.bind(this));
		}


		// Adding the label and button created to the container DIV.
		container.appendChild(this.input);
	}

	/**
	 * onkeydown Event handler for the input created as part of this control
	 * @param event
	 */
	private onBlur(event: Event): void {
		eval(this._onblur);
		this._notifyOutputChanged();
	}

	/**
	 * onkeyup Event handler for the input created as part of this control
	 * @param event
	 */
	private onCopy(event: Event): void {
		eval(this._oncopy);
		this._notifyOutputChanged();
	}

	/**
	 * onkeypress Event handler for the input created as part of this control
	 * @param event
	 */
	private onCut(event: Event): void {
		eval(this._oncut);
		this._notifyOutputChanged();
	}

	/**
	 * onkeydown Event handler for the input created as part of this control
	 * @param event
	 */
	private onClick(event: Event): void {
		eval(this._onclick);
		this._notifyOutputChanged();
	}

	/**
	 * onkeyup Event handler for the input created as part of this control
	 * @param event
	 */
	private ondblClick(event: Event): void {
		eval(this._ondblclick);
		this._notifyOutputChanged();
	}

	/**
	 * onkeypress Event handler for the input created as part of this control
	 * @param event
	 */
	private onFocus(event: Event): void {
		eval(this._onfocus);
		this._notifyOutputChanged();
	}

	/**
	 * onkeydown Event handler for the input created as part of this control
	 * @param event
	 */
	private onFocusIn(event: Event): void {
		eval(this._onfocusin);
		this._notifyOutputChanged();
	}

	/**
	 * onkeyup Event handler for the input created as part of this control
	 * @param event
	 */
	private onFocusOut(event: Event): void {
		eval(this._onfocusout);
		this._notifyOutputChanged();
	}

	/**
	 * onkeydown Event handler for the input created as part of this control
	 * @param event
	 */
	private onInput(event: Event): void {
		eval(this._oninput);
		this._notifyOutputChanged();
	}
	
	/**
	 * onkeydown Event handler for the input created as part of this control
	 * @param event
	 */
	private onKeyDown(event: Event): void {
		eval(this._onkeydown);
		this._notifyOutputChanged();
	}

	/**
	 * onkeyup Event handler for the input created as part of this control
	 * @param event
	 */
	private onKeyUp(event: Event): void {
		eval(this._onkeyup);
		this._notifyOutputChanged();
	}

	/**
	 * onkeypress Event handler for the input created as part of this control
	 * @param event
	 */
	private onKeyPress(event: Event): void {
		eval(this._onkeypress);
		this._notifyOutputChanged();
	}

	/**
	 * onkeypress Event handler for the input created as part of this control
	 * @param event
	 */
	private onMouseDown(event: Event): void {
		eval(this._onmousedown);
		this._notifyOutputChanged();
	}

	/**
	 * onkeydown Event handler for the input created as part of this control
	 * @param event
	 */
	private onMouseEnter(event: Event): void {
		eval(this._onmouseenter);
		this._notifyOutputChanged();
	}

	/**
	 * onkeyup Event handler for the input created as part of this control
	 * @param event
	 */
	private onMouseLeave(event: Event): void {
		eval(this._onmouseleave);
		this._notifyOutputChanged();
	}

	/**
	 * onkeypress Event handler for the input created as part of this control
	 * @param event
	 */
	private onMouseMove(event: Event): void {
		eval(this._onmousemove);
		this._notifyOutputChanged();
	}

	/**
	 * onkeydown Event handler for the input created as part of this control
	 * @param event
	 */
	private onMouseOut(event: Event): void {
		eval(this._onmouseout);
		this._notifyOutputChanged();
	}

	/**
	 * onkeyup Event handler for the input created as part of this control
	 * @param event
	 */
	private onMouseOver(event: Event): void {
		eval(this._onmouseover);
		this._notifyOutputChanged();
	}

	/**
	 * onkeypress Event handler for the input created as part of this control
	 * @param event
	 */
	private onMouseUp(event: Event): void {
		eval(this._onmouseup);
		this._notifyOutputChanged();
	}

	/**
	 * onkeydown Event handler for the input created as part of this control
	 * @param event
	 */
	private onPaste(event: Event): void {
		eval(this._onpaste);
		this._notifyOutputChanged();
	}

	/**
	 * onkeyup Event handler for the input created as part of this control
	 * @param event
	 */
	private onSelect(event: Event): void {
		eval(this._onselect);
		this._notifyOutputChanged();
	}

	/**
	 * onkeypress Event handler for the input created as part of this control
	 * @param event
	 */
	private onWheel(event: Event): void {
		eval(this._onwheel);
		this._notifyOutputChanged();
	}


	/**
	 * onchange Event handler for the input created as part of this control
	 * @param event
	 */
	private onChange(event: Event): void {
		
		// Get the target
		const target = event.target as HTMLInputElement;
		//Set the value of our textfield to the input
		this._value = target.value;
		
		eval(this._onchange);

		this._notifyOutputChanged();
	}


	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
	public updateView(context: ComponentFramework.Context<IInputs>): void
	{
		// Add code to update control view
	}

	/** 
	 * It is called by the framework prior to a control receiving new data. 
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
	 */
	public getOutputs(): IOutputs
	{
		return {
			Controller: this._value
		};
	}

	/** 
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
	public destroy(): void
	{
		// Add code to cleanup control if necessary
	}
}