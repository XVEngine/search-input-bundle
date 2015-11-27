(function(namespace, app, globals) {

    namespace.searchInputComponent = app.newClass({
        extend: function () {
            return app.core.component.input.abstractInputComponent;
        }
    });
    
    var prototype = namespace.searchInputComponent.prototype;
    

    prototype.getTemplate = function() {
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




    prototype.getDefaultParams = function() {
        return {
            placeholder : "",
            value : null
        };
    };


    prototype.prepare = function() {
        this.initLibs();
        this.initEvents();
    };

    prototype.initLibs = function() {
        var self = this;
        return app.service.ui.jsLoader.load(self.params.libs).then(function () {
            return app.service.ui.cssLoader.load(self.params.libsCss);
        }).then(function () {
            return self.initComponent();
        }).fail(function () {
            console.error(arguments);
        });
    };



    prototype.setPlaceholder = function(value) {
        this.$input.attr("placeholder", value);
        return this;
    };


    prototype.getSearchBoxTemplate = function() {
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

    prototype.getSearchParameterTemplate = function() {
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

    prototype.initComponent = function () {


        VisualSearch.template['search_box'] = _.template(this.getSearchBoxTemplate());
        VisualSearch.template['search_parameter'] =  _.template(this.getSearchParameterTemplate());

        var self = this;

        this.visualSearch = new VisualSearch({
            el		:  this.$input,
            placeholder: this.params.placeholder,
            strict: true,
            search: function(json){
                self._value = json;
                self.onInput();
            },
            parameters: [
                {
                    key: "City",
                    category: "Location",
                    placeholder: "",
                    operators: [
                        "is",
                        "is not"
                    ],
                    values: [
                        'Cleveland',
                        'New York City',
                        'Brooklyn',
                        'Manhattan',
                        'Queens',
                        'The Bronx',
                        'Staten Island',
                        'San Francisco',
                        'Los Angeles',
                        'Seattle',
                        'London',
                        'Portland',
                        'Chicago',
                        'Boston'
                    ]
                },
                {
                    key: "U.S. State",
                    category: "Location",
                    placeholder: "",
                    values: [
                        "Alabama", "Alaska", "Arizona", "Arkansas", "California",
                        "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida",
                        "Georgia", "Guam", "Hawaii", "Idaho", "Illinois",
                        "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
                        "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
                        "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
                        "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina",
                        "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
                        "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee",
                        "Texas", "Utah", "Vermont", "Virginia", "Virgin Islands",
                        "Washington", "West Virginia", "Wisconsin", "Wyoming"
                    ]
                },
                {
                    key: "Filter",
                    placeholder: "Status",
                    values: ['published', 'unpublished', 'draft']
                },
                {
                    key: "Number",
                    placeholder: "Between 1 and 10",
                    type: "number",
                    min: 1,
                    max: 10
                },
                {
                    key: "Date",
                    placeholder: "Any",
                    type: "date",
                    min: 1,
                    max: 10
                }
            ],
            defaultquery	: [
            ]

        });

        return this;
    };

    prototype.initEvents = function () {


        return this;
    };




    return namespace.searchInputComponent;
})(__ARGUMENT_LIST__);