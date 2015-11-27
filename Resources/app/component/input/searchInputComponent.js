(function(namespace, app, globals) {

    namespace.searchInputComponent = app.newClass({
        extend: function () {
            return app.core.component.input.abstractInputComponent;
        }
    });
    

    namespace.searchInputComponent.prototype.getTemplate = function() {
        var tmplString = app.utils.getString(function() {
            //@formatter:off
            /**<string>
                <xv-search-input class="event-insert">
                   <label>
                       <span class="label fcolor-after"></span>
                       <div>
                            <div class="input"></div>
                        </div>
                   </label>
                </xv-search-input>
             </string>*/
            //@formatter:on
        });
        return $(tmplString);
    };




    namespace.searchInputComponent.prototype.getDefaultParams = function() {
        return {
            placeholder : "",
            value : null,
            parameters: [],
            strict : true
        };
    };


    namespace.searchInputComponent.prototype.prepare = function() {
        this._placeholder = "";
        this.setParameters(this.params.parameters);
        this.setStrict(this.params.strict);
        this.setPlaceholder(this.params.placeholder);


        this.initLibs();
    };

    namespace.searchInputComponent.prototype.initLibs = function () {
        var self = this;
        return app.service.ui.jsLoader.load(self.params.libs).then(function () {
            return app.service.ui.cssLoader.load(self.params.libsCss);
        }).then(function () {
            self._initialized = true;
            self.render();
            return true;
        }).fail(function () {
            console.error(arguments);
        });
    };



    namespace.searchInputComponent.prototype.setPlaceholder = function(value) {
        this._placeholder = value;
        return this;
    };


    namespace.searchInputComponent.prototype.getSearchBoxTemplate = function() {
        return app.utils.getString(function() {
            //@formatter:off
            /**<string>
             <div class="VS-search">
                 <div class="VS-search-box-wrapper VS-search-box">
                    <div class="VS-tags-wrapper">
                        <div class="VS-icon VS-icon-search"></div>
                        <div class="VS-placeholder"><%= placeholder %></div>
                        <div class="VS-search-inner"></div>
                    </div>
                    <div class="VS-icon VS-icon-cancel VS-clear-input VS-cancel-search-box" title="clear search">
                        <i class='icon search icon-search'></i>
                        <i class='icon icon-close'></i>
                    </div>
                 </div>
             </div>
             </string>*/
            //@formatter:on
        });
    };

    namespace.searchInputComponent.prototype.getSearchParameterTemplate = function() {
        return app.utils.getString(function() {
            //@formatter:off
            /**<string>
             <div class="VS-search">
                <div class="search_parameter_remove VS-tag-remove VS-icon VS-icon-cancel">
                    <i class='icon icon-close'></i>
                </div>
                <div class="key"><%- model.get('key') %></div>
                <div class="operator"><%- model.get('operator') %></div>
                <div class="value"><%- model.get('value') %></div>
             </div>
             </string>*/
            //@formatter:on
        });
    };




    namespace.searchInputComponent.prototype.setValue = function (value) {
        if(!value){
            value = [];
        }

        this._value = value;

        this.refreshValue();
        this.render();
        return this;
    };


    namespace.searchInputComponent.prototype.getValue = function (value) {
        return  this._value;
    };


    namespace.searchInputComponent.prototype.setParameters = function (parameters) {
        this._parameters = [];

        var self = this;
        parameters.forEach(function(parameter){
            self.addParameter(parameter)
        });

        this.render();
        return this;
    };


    namespace.searchInputComponent.prototype.addParameter = function (parameter) {
        this._parameters.push(parameter);

        this.render();
        return this;
    };

    namespace.searchInputComponent.prototype.setStrict = function (strictValue) {
        this._strict = strictValue;

        this.render();
        return this;
    };


    namespace.searchInputComponent.prototype.render = function () {

        clearTimeout(this._renderTimeout);

        var self = this;
        if(!this._initialized){
            return this;
        }
        this._renderTimeout = setTimeout(function(){
            self._render();
        }, 50);

        return this;
    };


    namespace.searchInputComponent.prototype._render = function () {
        if(!this.visualSearch ){
            VisualSearch.template['search_box'] = _.template(this.getSearchBoxTemplate());
            VisualSearch.template['search_parameter'] =  _.template(this.getSearchParameterTemplate());
        }

        var self = this;

        var config = {
            el		:  this.$input,
            placeholder: this._placeholder,
            strict: this._strict,
            search: function(json){
                self._value = json;
                self.onInput();
                self.refreshValue()
            },
            parameters: self._parameters,
            defaultquery: self._value
        };

        this.visualSearch = new VisualSearch(config);
        return this;
    };



    namespace.searchInputComponent.prototype.refreshValue = function () {
        this.$element[this._value.length > 0 ? 'addClass' : 'removeClass']("has-value");

        return this;
    };




    return namespace.searchInputComponent;
})(__ARGUMENT_LIST__);