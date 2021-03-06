//business configuration data
var APPLICATION_ID="arcDesign_inc";

var idx_aliases = [
    ["idx/oneui/form/CheckBox", "idx/form/CheckBox"],
    ["idx/oneui/form/CheckBoxList", "idx/form/CheckBoxList"],
    ["idx/oneui/form/CheckBoxSelect", "idx/form/CheckBoxSelect"],
    ["idx/form/DropDownMultiSelect", "idx/form/CheckBoxSelect"],
    ["idx/oneui/form/ComboBox", "idx/form/ComboBox"],
    ["idx/oneui/form/CurrencyTextBox", "idx/form/CurrencyTextBox"],
    ["idx/oneui/form/DateTextBox", "idx/form/DateTextBox"],
    ["idx/oneui/form/TimeTextBox", "idx/form/TimeTextBox"],
    ["idx/form/DatePicker", "idx/form/DateTextBox"],
    ["idx/form/TimePicker", "idx/form/TimeTextBox"],
    ["idx/form/DateTimePicker", "idx/form/DateTimeTextBox"],
    ["idx/oneui/form/NumberSpinner", "idx/form/NumberSpinner"],
    ["idx/oneui/form/NumberTextBox", "idx/form/NumberTextBox"],
    ["idx/oneui/form/RadioButtonSet", "idx/form/RadioButtonSet"],
    ["idx/oneui/form/FilteringSelect", "idx/form/FilteringSelect"],
    ["idx/oneui/form/Select", "idx/form/Select"],
    ["idx/oneui/form/Textarea", "idx/form/Textarea"],
    ["idx/oneui/form/TextBox", "idx/form/TextBox"],
    ["idx/oneui/form/TriStateCheckBox", "idx/form/TriStateCheckBox"],
    ["idx/oneui/form/VerticalSlider", "idx/form/VerticalSlider"],
    ["idx/oneui/form/HorizontalSlider", "idx/form/HorizontalSlider"],

    ["idx/oneui/CheckBoxTree", "idx/widget/CheckBoxTree"],
    ["idx/oneui/Dialog", "idx/widget/Dialog"],
    ["idx/oneui/Header", "idx/app/Header"],
    ["idx/oneui/HoverHelpTooltip", "idx/widget/HoverHelpTooltip"],
    ["idx/oneui/_Preview", "idx/widget/_Preview"],
    ["idx/oneui/HoverCard", "idx/widget/HoverCard"],
    ["idx/oneui/Menu", "idx/widget/Menu"],
    ["idx/oneui/MenuBar", "idx/widget/MenuBar"],
    ["idx/oneui/MenuDialog", "idx/widget/MenuDialog"],
    ["idx/oneui/MenuHeading", "idx/widget/MenuHeading"],
    ["idx/widget/ECMBreadcrumb", "idx/widget/Breadcrumb"],
    ["idx/widget/SimpleIconDialog", "idx/widget/ModalDialog"],

    ["idx/oneui/layout/HighLevelTemplate", "idx/app/HighLevelTemplate"],
    ["idx/oneui/layout/ToggleBorderContainer", "idx/layout/BorderContainer"],

    ["idx/oneui/messaging/ConfirmationDialog", "idx/widget/ConfirmationDialog"],
    ["idx/oneui/messaging/ModalDialog", "idx/widget/ModalDialog"],
    ["idx/oneui/messaging/SingleMessage", "idx/widget/SingleMessage"],
    ["idx/oneui/messaging/Toaster", "idx/widget/Toaster"],
    [/^idx\/oneui\/gridx\/(.+)$/, function(match, p1){
        return "idx/gridx/" + p1;
    }],
    ["idx/gridx/Grid", "gridx/Grid"],
    [/^idx\/gridx\/core\/(.+)$/, function(match, p1){
        return "gridx/core/" + p1;
    }],
    [/^idx\/gridx\/modules\/(?!(Sort|dnd\/.*|filter\/(QuickFilter|FilterBar|FilterDialogPane|FilterPane)|pagination\/(PaginationBar(DD)?|GotoPagePane))$)/,
        //Transform all modules except those in oneui
        function(match){
            return match.substr(4);
        }
    ],

    ["dijit/robot", "internal/dijit/robot"],
    ["dijit/robotx", "internal/dijit/robotx"],
    ["dojo/robot", "internal/dojo/robot"],
    ["dojo/robotx", "internal/dojo/robotx"],
    ["dojox/robot/recorder", "internal/dojox/robot/recorder"]
];

var idx_packages = [
    {name: "dojo", location: "./" },
    {name: "dijit", location: "../dijit" },
    {name: "dojox", location: "../dojox" },
    {name: "gridx", location: "../gridx" },
    {name: "idx", location: "../../ibmjs/idx" },
    {name: "idxx", location: "../../ibmjs/idxx" },
    {name: "ibm", location: "../../ibmjs/ibm" },
    {name: "app", location: "../../app" },
    {name: "vfbam", location: "../../vfbam" }
];

var dojoConfig =  {
    tlmSiblingOfDojo: false,
    parseOnLoad: false,
    async: true,
    has: {
        "dojo-firebug": true,
        "dojo-debug-messages": true
    },
    aliases: idx_aliases,
    packages: idx_packages
};

var modules = [	"dojo.parser",
    "dojo.i18n",
    "dojo/_base/xhr",
    "dojo/store/Observable",
    "dijit.form.TextBox",
    "dojox.timing",
    "idx.ext",
    "idx.app.A11yPrologue",
    "idx.app.AppFrame",
    "idx.app.AppMarquee",
    "idx.string",
    "idx.bus",
    "idx.app.Workspace",
    "idx.app._A11yAreaProvider",
    "idx.app._Launcher",
    "idx.a11y",
    "idx.app.WorkspaceType",
    "idx.app.TabMenuLauncher",
    "idx.form.DropDownLink",
    "idx.form.Link",
    "idx.dialogs",
    "idx.oneui.messaging.Toaster",
    "app.util.Interface",
    "app.ApplicationBaseFunctionImpl",
    "app.AppBaseCore",
    "app.UIOperationBaseCore"
];

/***
 * Handles requiring of modules and i18n modules and does it either using the legacy
 * loader or the AMD loader depending the third paramter.  The first parameter is
 * an array of module names.  Modules names can be given in two forms:
 *   - legacy dot notation (e.g.: "idx.foo.bar")
 *   - AMD slash notation (e.g.: "idx/foo/bar")
 *
 * Any modules given with dot notation will be loaded for both legacy and AMD loaders,
 * however, the dot notation will be converted to slash notation for the AMD loader.
 * Any modules specified with slash notation will ONLY be loaded for the AMD loader.
 *
 * The second parameter is the i18n modules array and must be an array of objects with
 * two fields each:
 * 	  - package: The package containing the bundle specified in dot notation
 *    - bundle: The bundle name to be loaded.
 *
 * When using the legacy loader, the i18n modules are loaded via "dojo.requireLocalization"
 * and then obtained via "dojo.i18n.getLocalization".
 *
 * The third parameter is either true or false to indicate if we should use the AMD asynchronous
 * loader or the legacy synchronous loader, respectively.  Only the legacy synchronous loader
 * is supported for Dojo 1.6.x.
 *
 * The fourth and fifth parameters specify callback functions to call before and after parsing
 * or a boolean flag indicating if parsing should be skipped and then a single callback function
 * to call.  The callback functions (if specified) take a single parameter that is an
 * associative array of module names to the loaded module.  The module names are normalized
 * to the AMD loader format using slashes.  For i18n modules, the names are in the form:
 *    "dojo/i18n!" + package + "/nls/" + bundle
 * Where package is the slash-notation version of the "package" field from the respective
 * i18n module that was specified.  The fourth parameter is referred to as "preParse" because
 * it is typically called PRIOR to parsing the document (assuming the document will be parsed
 * by this function).
 *
 * @param modules
 * @param i18nModules
 * @param async
 * @param preParse
 * @param postParse
 */
function dojoRequireModules(modules, i18nModules, async, preParse, postParse) {
    // check if "pre-parse" is being used to indicate if parsing should be skipped
    var skipParsing = false;
    if ((preParse === true) || (preParse === false)) {
        skipParsing = preParse;
        preParse = null;
    }
    if (!modules) modules = [];
    if (!i18nModules) i18nModules = [];
    if (!async) {
        var requires = ["dojo.parser"];
        var postModules = {"dojo/parser": null};
        var keys     = [ ];
        if (modules) {
            for (var index = 0; index < modules.length; index++) {
                requires.push(modules[index]);
            }
        }
        var pre1_7 = ((dojo.version.major == 1) && (dojo.version.minor < 7));
        var post1_7 = ((dojo.version.major > 1) || ((dojo.version.major == 1) && (dojo.version.minor >= 7)));
        for (var index = 0; index < requires.length; index++) {
            var dependency = requires[index];
            var dependencyKey = dependency.replace(/\./g,"/");
            if (dependency.indexOf("/") < 0) {
                if ((post1_7) || ((pre1_7) && (!(dependency in _post_1_7_modules)))) {
                    var reqresult = dojo["require"](dependency);
                    postModules[dependencyKey] = dojo.getObject(dependency, false);
                }
            }
        }
        for (var index = 0; index < i18nModules.length; index++) {
            var dependency = i18nModules[index];
            var dependencyKey = "dojo/i18n!" + dependency["package"].replace(/\./g,"/") + "/nls/" + dependency.bundle;
            dojo["requireLocalization"](dependency["package"], dependency.bundle);
            var bundle = dojo.i18n.getLocalization(dependency["package"], dependency.bundle);
            postModules[dependencyKey] = bundle;
        }
        dojo.ready(function() {
            if (preParse) {
                preParse.call(null, postModules);
            }
            if (!skipParsing) dojo.parser.parse();
            if (postParse) {
                postParse.call(null, postModules);
            }
        });
    } else {
        var requires = ["dojo/parser","dojo/_base/declare","dojo/domReady!"];
        var offset = requires.length;
        var i18nArgs = "";
        var postModules = { };
        for (var index = 0; index < requires.length; index++) {
            postModules[requires[index]] = null;
        }
        for (var index = 0; index < modules.length; index++) {
            var dependency = modules[index];
            dependency = dependency.replace(/\./g,"/");
            if (! (dependency in postModules)) {
                requires.push(dependency);
                postModules[dependency] = null;
            }
        }
        var i18nOffset = requires.length;
        for (var index = 0; index < i18nModules.length; index++) {
            var dependency = i18nModules[index];
            dependency = "dojo/i18n!" + dependency["package"].replace(/\./g,"/") + "/nls/" + dependency.bundle;
            if (! (dependency in postModules)) {
                requires.push(dependency);
                postModules[dependency] = null;
            }
        }
        require(requires, function(parser) {
            for (var index = 0; index < requires.length; index++) {
                postModules[requires[index]] = arguments[index];
            }
            if (preParse) {
                preParse.call(null, postModules);
            }
            if (!skipParsing) parser.parse();
            if (postParse) {
                postParse.call(null, postModules);
            }
        });
    }
}

//method to apply theme
var themes = {
    oneui: {label: 'One UI', name: 'One UI', code: 'oneui', cssClass: 'oneui'},
    claro: {label: 'Claro', name: 'Claro', code: 'claro', cssClass: 'claro'},
    vienna: {label: 'Vienna', name: 'Vienna (on Claro)\u200e', code: 'vienna', cssClass: 'claro vienna'}
};

var bidiOptions = {
    def: {label: 'BiDi (default)\u200e', name: null, code: null, direction: null},
    ltr: {label: 'BiDi (LTR)\u200e', name: 'Left to Right', code: 'ltr', direction: 'ltr'},
    rtl: {label: 'BiDi (RTL)\u200e', name: 'Right to Left', code: 'rtl', direction: 'rtl'}
};

var a11yOptions = {
    def: {label: 'A11y (default)\u200e', name: null, code: null, activated: null},
    "true": {label: 'A11y (on)\u200e', name: 'On', code: 'true', activated: true},
    "false": {label: 'A11y (off)\u200e', name: 'Off', code: 'false', activated: false}
};

//permission denied issue for iframe cross domain
var currentTheme = themes.oneui;
try{
    if ((window.parent) && (window.parent.currentTheme)){
        currentTheme = window.parent.currentTheme;
    }
}catch(e){
    //console.log(e.message);
}
var bidiDirection = bidiOptions.def;
try{
    if ((window.parent) && (window.parent.bidiDirection)) {
        bidiDirection = window.parent.bidiDirection;
    }
}catch(e){
    //console.log(e.message);
}

var a11yMode = a11yOptions.def;
try{
    if ((window.parent) && (window.parent.a11yMode)){
        a11yMode = window.parent.a11yMode;
    }
}catch(e){
    //console.log(e.message);
}

function queryToObject(str) {
    // NOTE: The implementation below is taken directly from Dojo 1.7.2's dojo/io-query
    var dec = decodeURIComponent, qp = str.split("&"), ret = {}, name, val;
    for(var i = 0, l = qp.length, item; i < l; ++i){
        item = qp[i];
        if(item.length){
            var s = item.indexOf("=");
            if(s < 0){
                name = dec(item);
                val = "";
            }else{
                name = dec(item.slice(0, s));
                val  = dec(item.slice(s + 1));
            }
            if(typeof ret[name] == "string"){ // inline'd type check
                ret[name] = [ret[name]];
            }

            if(ret[name] && (ret[name] instanceof Array || typeof ret[name] == "array")){
                ret[name].push(val);
            }else{
                ret[name] = val;
            }
        }
    }
    return ret; // Object
}

function parseCurrentURL() {
    var result = {};
    result.wholeURL = "" + document.location;
    var currentURL  = result.wholeURL;
    result.queryParams = null;
    var anchorIndex = currentURL.indexOf('#');
    result.urlAnchors  = "";
    if ((anchorIndex > 0) && (anchorIndex < (currentURL.length - 1))) {
        result.urlAnchors = currentURL.substring(anchorIndex);
        currentURL = currentURL.substring(0, anchorIndex);
    }
    result.baseURL  = currentURL;
    var queryIndex  = currentURL.indexOf('?');
    if ((queryIndex > 0) && (queryIndex < (currentURL.length - 1))) {
        result.baseURL = currentURL.substring(0, queryIndex);
        var suffix = currentURL.substr(queryIndex+1);
        result.queryParams = queryToObject(suffix);
        if (themes[result.queryParams.theme]) {
            result.currentTheme = themes[result.queryParams.theme];
        }

        if (bidiOptions[result.queryParams.dir]) {
            result.bidiDirection = bidiOptions[result.queryParams.dir];
        }
        if (a11yOptions[result.queryParams.a11y]) {
            result.a11yMode = a11yOptions[result.queryParams.a11y];
        }
    }
    return result;
}

var initialURL = parseCurrentURL();
if (initialURL.currentTheme) currentTheme = initialURL.currentTheme;
if (initialURL.bidiDirection) bidiDirection = initialURL.bidiDirection;
if (initialURL.a11yMode) a11yMode = initialURL.a11yMode;

function applyThemeToBody(explicitThemeClass) {
    var doc = window["document"] || null;
    var className = "class";

    // sniffing code pulled from Dojo 1.7.2 dojo/_base/sniff.js
    var userAgent = navigator.userAgent;
    var ieVersion = parseFloat(userAgent.split("MSIE ")[1]) || undefined;

    if (ieVersion == 7) className = "className";

    var themeClass = null;
    if (currentTheme && currentTheme.cssClass) themeClass = currentTheme.cssClass;
    if (explicitThemeClass) themeClass = explicitThemeClass;

    var bodyTag = doc.body || document.getElementsByTagName("body")[0];
    if ((bidiDirection) && (bidiDirection.direction != null)) {
        bodyTag.setAttribute("dir", bidiDirection.direction);
    }
    if (themeClass) {
        var currentClass = bodyTag.getAttribute(className);
        if ( (!currentClass) || (currentClass.length = 0)) {
            currentClass = "";
        } else {
            currentClass = currentClass + " ";
        }
        bodyTag.setAttribute(className, currentClass + themeClass);
    }
    if ((a11yMode) && (a11yMode.code != null)) {
        var currentClass = bodyTag.getAttribute(className);
        if ( (!currentClass) || (currentClass.length = 0)) {
            currentClass = "";
        } else {
            currentClass = currentClass + " ";
        }
        if (a11yMode.activated) {
            if (currentClass.indexOf("dijit_a11y") < 0) {
                bodyTag.setAttribute(className, currentClass + "dijit_a11y");
            }
        } else {
            if (currentClass.indexOf("dijit_a11y") >= 0) {
                bodyTag.setAttribute(className, currentClass.replace("dijit_a11y", ""));
            }
        }
    }
}