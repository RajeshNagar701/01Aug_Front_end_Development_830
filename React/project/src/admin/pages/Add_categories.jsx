import React from 'react'
import Aheader from '../component/Aheader'

function Add_categories() {
    return (
        <div id="wrapper">
           <Aheader/>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Forms Page</h2>
                            <h5>Welcome Jhon Deo , Love to see you back. </h5>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <hr />
                    <div className="row">
                        <div className="col-md-12">
                            {/* Form Elements */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Form Element Examples
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h3>Add Categories</h3>
                                            <form role="form">
                                                <div className="form-group">
                                                    <label>Text Input</label>
                                                    <input className="form-control" />
                                                    <p className="help-block">Help text here.</p>
                                                </div>
                                                <div className="form-group">
                                                    <label>Text Input with Placeholder</label>
                                                    <input className="form-control" placeholder="PLease Enter Keyword" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Just A Label Control</label>
                                                    <p className="form-control-static">info@yourdomain.com</p>
                                                </div>
                                                <div className="form-group">
                                                    <label>File input</label>
                                                    <input type="file" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Text area</label>
                                                    <textarea className="form-control" rows={3} defaultValue={""} />
                                                </div>
                                                <div className="form-group">
                                                    <label>Checkboxes</label>
                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox" defaultValue />Checkbox Example One
                                                        </label>
                                                    </div>
                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox" defaultValue />Checkbox Example Two
                                                        </label>
                                                    </div>
                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox" defaultValue />Checkbox Example Three
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Inline Checkboxes Examples</label>
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox" /> One
                                                    </label>
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox" /> Two
                                                    </label>
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox" /> Three
                                                    </label>
                                                </div>
                                                <div className="form-group">
                                                    <label>Radio Button Examples</label>
                                                    <div className="radio">
                                                        <label>
                                                            <input type="radio" name="optionsRadios" id="optionsRadios1" defaultValue="option1" defaultChecked />Radio Example One
                                                        </label>
                                                    </div>
                                                    <div className="radio">
                                                        <label>
                                                            <input type="radio" name="optionsRadios" id="optionsRadios2" defaultValue="option2" />Radio Example Two
                                                        </label>
                                                    </div>
                                                    <div className="radio">
                                                        <label>
                                                            <input type="radio" name="optionsRadios" id="optionsRadios3" defaultValue="option3" />Radio Example Three
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Select Example</label>
                                                    <select className="form-control">
                                                        <option>One Vale</option>
                                                        <option>Two Vale</option>
                                                        <option>Three Vale</option>
                                                        <option>Four Vale</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label>Multiple Select Example</label>
                                                    <select multiple className="form-control">
                                                        <option>One Vale</option>
                                                        <option>Two Vale</option>
                                                        <option>Three Vale</option>
                                                        <option>Four Vale</option>
                                                    </select>
                                                </div>
                                                <button type="submit" className="btn btn-default">Submit Button</button>
                                                <button type="reset" className="btn btn-primary">Reset Button</button>
                                            </form>
                                            <br />
                                            <h3>With radio &amp; checkboxes</h3>
                                            <form>
                                                <div className="form-group input-group">
                                                    <span className="input-group-addon">
                                                        <input type="checkbox" />
                                                    </span>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="form-group input-group">
                                                    <span className="input-group-addon">
                                                        <input type="radio" />
                                                    </span>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </form>
                                        </div>
                                       
                                           
                                        
                                    </div>
                                </div>
                            </div>
                            {/* End Form Elements */}
                        </div>
                    </div>
                </div>
                {/* /. PAGE INNER  */}
            </div>
            {/* /. PAGE WRAPPER  */}
        </div>

    )
}

export default Add_categories