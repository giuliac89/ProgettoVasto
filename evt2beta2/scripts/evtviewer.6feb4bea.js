angular.module("templates-main", ["src/analogue/analogue.directive.tmpl.html", "src/analoguesApparatusEntry/analoguesApparatusEntry.directive.tmpl.html", "src/apparatuses/apparatuses.dir.tmpl.html", "src/bibliography/biblElem.directive.tmpl.html", "src/bibliography/bibliography.directive.tmpl.html", "src/box/box.dir.tmpl.html", "src/buttonSwitch/buttonSwitch.dir.tmpl.html", "src/criticalApparatusEntry/criticalApparatusEntry.directive.tmpl.html", "src/criticalApparatusEntry/criticalApparatusEntry.witnessRef.directive.tmpl.html", "src/dialog/dialog.dir.tmpl.html", "src/list/list.dir.tmpl.html", "src/mobile/mobile.dir.tmpl.html", "src/mobile/mobileInfo.dir.tmpl.html", "src/mobile/mobileMenu.dir.tmpl.html", "src/mobile/mobileSearch.dir.tmpl.html", "src/mobile/mobileView.dir.tmpl.html", "src/namedEntity/namedEntity.directive.tmpl.html", "src/namedEntity/namedEntityRef.directive.tmpl.html", "src/navBar/navBar.directive.tmpl.html", "src/popover/popover.directive.tmpl.html", "src/quote/quote.directive.tmpl.html", "src/reading/reading.directive.tmpl.html", "src/reference/ref.dir.tmpl.html", "src/search/searchBox.directive.tmpl.html", "src/search/searchResults.directive.tmpl.html", "src/search/virtualKeyboard.directive.tmpl.html", "src/select/select.directive.tmpl.html", "src/sourcesApparatusEntry/sourceRef.directive.tmpl.html", "src/sourcesApparatusEntry/sourceSeg.directive.tmpl.html", "src/sourcesApparatusEntry/sourcesApparatusEntry.directive.tmpl.html", "src/tabsContainer/tabsContainer.dir.tmpl.html", "src/tdhop/tdhop.directive.tmpl.html", "src/toc/toc.dir.tmpl.html", "src/versionApparatusEntry/versionApparatusEntry.directive.tmpl.html", "src/versionApparatusEntry/versionRef.directive.tmpl.html", "src/versionReading/versionReading.directive.tmpl.html", "src/visColl/visColl.directive.tmpl.html"]), angular.module("src/analogue/analogue.directive.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/analogue/analogue.directive.tmpl.html", '<span\n    class="analogue"\n    ng-mouseover="vm.toggleOverAnalogues($event)"\n    ng-mouseout="vm.toggleOverAnalogues($event)"\n    ng-class="{ \'selected\' : vm.isSelect() && !$parent.vm.state.topBoxOpened,\n                \'expansed\' : (!$parent.vm.state.topBoxOpened && vm.apparatus.opened && vm.apparatus.inline),\n                \'over\'     : vm.over,\n                \'blurred\'  : $parent.vm.state.topBoxOpened}">\n    <i\n        class="iconbis-evt_analogue"\n        title="{{ \'ANALOGUES.ANALOGUE\' | translate}}"\n        ng-click="vm.callbackClick($event)"\n        ng-if="(vm.type !== \'subquote\' && !$parent.vm.selected) || (vm.over && vm.type === \'subquote\' && !$parent.vm.selected)">\n    </i>\n    <span\n        class="analogue__text"\n        ng-click="vm.callbackClick($event)"\n        ng-transclude></span>\n        \n    <evt-analogues-apparatus-entry\n        ng-class="{\'blurred\': $parent.vm.state.topBoxOpened}"\n        ng-if="vm.apparatus._loaded && vm.apparatus.inline"\n        ng-show="vm.isApparatusOpened()"\n        data-analogue-id="{{::vm.analogueId}}"\n        data-scope-wit="{{::vm.scopeWit}}">\n    </evt-analogues-apparatus-entry>\n</span>')
   }]), angular.module("src/analoguesApparatusEntry/analoguesApparatusEntry.directive.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/analoguesApparatusEntry/analoguesApparatusEntry.directive.tmpl.html", '<div class="analogues-apparatus-entry"\n     ng-class="{ \'selected\' : vm.isSelect() && vm.currentViewMode == \'readingTxt\',\n                 \'over\' : vm.currentViewMode === \'readingTxt\' && vm.over}"\n     ng-mouseover="vm.toggleOverAnaloguesEntries($event)"\n     ng-mouseout="vm.toggleOverAnaloguesEntries($event)"\n     ng-click="vm.callbackClick($event)">\n    \n    <div class="analogues-apparatus-entry_main-content">\n        <div\n            class="analogues-apparatus-entry_tools">\n            <button-switch \n                title="{{ \'BUTTONS.ALIGN_ANALOGUES\' | translate }} "\n                ng-if="vm.currentViewMode !== \'imgTxt\' && vm.currentViewMode !== \'srcTxt\'"\n                data-label=""\n                data-icon="v-align"\n                data-type="alignReadings"\n                ng-click="vm.alignAnalogues()"></button-switch>\n        </div>\n        <sup\n            class="iconbis-evt_analogue">\n        </sup>\n        <span class="analogues-apparatus-entry_main-content_header" compile="vm.header"></span>\n        \n    </div>\n    \n    <div class="analogues-apparatus-entry_main-content_list">\n        <span class="analogues-apparatus-entry_main-content_list-label"> {{\'ANALOGUES.PARALLEL_PASSAGES_IN\' | translate}} </span>\n        <ul ng-class="{ \'pointer\' : (vm.over || vm.selected) && vm.sources.length > 1}">\n            <li\n                ng-repeat="source in ::vm.sources"\n                class="source-id"\n                ng-class="{ \'selected\' : vm.selected && vm.sources.length > 1 && source.id == vm._activeSource,\n                            \'over\'   : (vm.over || vm.selected) && vm.sources.length > 1 && source.id == vm._overSource}"\n                ng-mouseover="vm.toggleOverSource($event, source.id)"\n                ng-mouseout="vm.toggleOverSource($event, source.id)"\n                ng-click="vm.toggleSource(source.id)"\n                compile="source.abbr">\n            </li>\n        </ul>\n    </div>\n\n    <div class="analogues-apparatus-entry_other-content"\n         ng-if="vm.tabs._indexes.length > 0">\n        <div class="analogues-apparatus-entry_other-content_headers">\n            <span class="analogues-apparatus-entry_tabLabel" ng-repeat="tab in ::vm.tabs._indexes"\n                  ng-click="vm.toggleSubContent(tab)"\n                  ng-class="{\'active\' : vm._subContentOpened == tab }">\n                {{ vm.tabs[tab].label | translate }}\n            </span>\n        </div>\n        <div class="analogues-apparatus-entry_other-content_panels"\n             ng-class="{\'closed\': vm._subContentOpened === \'\'}">\n            <div class="analogues-apparatus-entry_other-content_panel"\n                 ng-repeat="tab in ::vm.tabs._indexes"\n                 ng-class="{\'active\' : vm._subContentOpened == tab}"\n                 ng-switch="::tab">\n                 <div ng-switch-when="text"\n                      compile="vm.srcList[vm._activeSource].text">\n\n                 </div>\n                 <div ng-switch-when="biblRef"\n                      ng-if="::vm.srcList[vm._activeSource].bibl !== \'\'"\n                      compile="vm.srcList[vm._activeSource].bibl">\n                </div>\n                <!--div ng-switch-when="moreInfo">\n                    TODO\n                </div-->\n                <div ng-switch-when="xmlSource">\n                     <span class="xml-title"> {{ \'ANALOGUES.XML_SOURCE_FOR\' | translate}} {{ \'ANALOGUES.ANALOGUE\' | translate}} </span>\n                     <pre>{{ ::vm.xml | prettyXml}}</pre>\n                     <span class="xml-title">\n                         {{ \'ANALOGUES.XML_SOURCE_FOR\' | translate}} \n                         <span compile="vm.getActiveSourceAbbr(vm._activeSource)">\n                     </span>\n                     <pre>{{ ::vm.srcList[vm._activeSource]._xmlSource | prettyXml }}</pre>\n                </div>\n                <div\n                    ng-switch-default\n                    ng-if="::vm.srcList[vm._activeSource].bibl !== \'\'"\n                    compile="vm.srcList[vm._activeSource].bibl"></div>\n            </div>\n        </div>\n    </div>\n</div>')
   }]), angular.module("src/apparatuses/apparatuses.dir.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/apparatuses/apparatuses.dir.tmpl.html", '<!--BUTTONS TO SWITCH THE VIEW MODE OF THE APPARATUSES-->\n<!--div\n    class="apparatuses_switch-mode-buttons">\n    <button\n        type="button"\n        ng-click="vm.toggleAppStructure(\'tabs\')"\n        class="tabs-button">\n        Switch to tab mode\n    </button>\n    <button\n        type="button"\n        ng-click="vm.toggleAppStructure(\'subBoxes\')"\n        class="subBoxes-button">\n        Switch to boxes mode\n    </button>\n</div-->\n\n<div\n    class="apparatuses_main"\n    id="apparatuses_{{::vm.uid}}"\n    ng-switch="vm.appStructure">\n\n    <div\n        class="apparatuses_tabs"\n        ng-switch-when="tabs">\n        <div class="apparatuses_tabs_header">\n            <span class="appLabel" \n                ng-repeat="apparatusId in vm.apparatuses._indexes" \n                ng-click="vm.setCurrentApparatus(apparatusId)" \n                ng-class="{\'selected\': apparatusId === vm.getCurrentApparatus()}" \n                >{{ vm.apparatuses[apparatusId].label | translate }}</span> \n        </div>\n        <div class="loading" ng-if="vm.isLoading"><i class="fa fa-spinner fa-pulse loader"></i></div>\n        <div class="apparatuses_tabs_fakeTopSpace"></div>\n        <div class="apparatuses_tabs_body apparatuses_content_body">\n            <div infinite-scroll="vm.loadMoreElements()" infinite-scroll-distance="2" infinite-scroll-parent=\'true\' infinite-scroll-immediate-check="false" ng-switch="vm.currentApparatus">\n                <div\n                    class="active-apparatus"\n                    ng-switch-when="criticalApparatus">\n                    <evt-critical-apparatus-entry\n                        ng-repeat="app in vm.getVisibleList(vm.currentApparatus)"\n                        data-app-id="{{::app}}">\n                    </evt-critical-apparatus-entry>\n                </div>\n                <div\n                    class="active-apparatus"\n                    ng-switch-when="sources">\n                    <evt-sources-apparatus-entry\n                        ng-repeat="quote in vm.getVisibleList(vm.currentApparatus)"\n                        data-quote-id="{{::quote}}">\n                    </evt-sources-apparatus-entry>\n                </div>\n                <div\n                    class="active-apparatus"\n                    ng-switch-when="analogues">\n                    <evt-analogues-apparatus-entry\n                        ng-repeat="analogue in vm.getVisibleList(vm.currentApparatus)"\n                        data-analogue-id="{{::analogue}}">\n                    </evt-analogues-apparatus-entry>\n                </div>\n                <div\n                    ng-show="!vm.currentApparatus || vm.currentApparatus === \'\'"\n                    ng-switch-default>\n                    <span> {{ \'MESSAGES.SELECT_AN_APPARATUS\' | translate }} </span>\n                </div>\n                <!--div\n                    ng-switch-when="Commentary Notes">\n                </div-->\n            </div>\n        </div>\n    </div>\n    \n    <div\n        class="apparatuses_sub-boxes"\n        ng-switch-when="subBoxes">\n        <div class="apparatuses_sub-boxes_body">\n            <span>BOXES :)</span>\n        </div>\n    </div>\n    \n</div>')
   }]), angular.module("src/bibliography/biblElem.directive.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/bibliography/biblElem.directive.tmpl.html", '<div class="evtBiblRef" compile="vm.getFormattedBibl()">\n</div>\n')
   }]), angular.module("src/bibliography/bibliography.directive.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/bibliography/bibliography.directive.tmpl.html", '<div class="evt-bibliography">\n	<div class="evt-bibliography__header"\n		ng-if="::vm.biblSortStyleSelectVisibility || vm.biblSortSelectVisibility || vm.biblSortOrderSelectVisibility">\n	\n		<div\n			ng-if="::vm.biblSortStyleSelectVisibility"> \n			<label for="biblStyleSelect"> {{ \'BIBLIOGRAPHY.STYLE\' | translate }} </label>\n			<select id="biblStyleSelect"\n				ng-model="vm.initialSelectedStyle"\n				ng-options="value as (value.label | translate) for (key, value) in vm.styles"/>\n		</div>\n	\n		<div\n			ng-if="::vm.biblSortSelectVisibility"> \n			<label for="biblSortingSelect">{{ \'BIBLIOGRAPHY.SORT_BY\' | translate }}  </label>\n			<select id="biblSortingSelect"\n				ng-model="vm.selectedSorting"\n				ng-options="value as (value | translate) for (key , value) in vm.sortBy"/>\n		</div>\n		\n		<div\n			ng-if="::vm.biblSortOrderSelectVisibility"> \n			<label for="biblSortOrder">{{ \'BIBLIOGRAPHY.ORDER\' | translate }}  </label>\n			<select id="biblSortOrder"\n				ng-model="vm.selectedSortOrder"\n				ng-options="value as (value | translate) for (key , value) in vm.sortOrder"/>\n		</div>\n		\n	</div>\n	<div class="evt-bibliography__content"\n		ng-class="{\'noSorter\': !vm.biblSortStyleSelectVisibility && !vm.biblSortSelectVisibility }">\n		<div class="biblRef"\n			id="{{ ::bibl }}"\n			ng-repeat="bibl in vm.biblRefsCollection._indexes | orderBy: vm.getBibliographicRefById : vm.selectedSortOrder === vm.sortOrder.DESC : vm.myComparator"\n			compile="vm.getFormattedBibl(bibl)"\n			ng-attr-highlight="{{ vm.isEntryHighlighted(bibl) }}"\n			evt-scroll-if="{{ vm.isEntryHighlighted(bibl) }}"\n			ng-attr-pubblicationType="{{ ::vm.pubblicationType(bibl) }}">\n		</div>\n	</div>\n</div>')
   }]), angular.module("src/box/box.dir.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/box/box.dir.tmpl.html", '<section class="box box-{{::vm.type}}"\n         id="{{::vm.uid}}"\n         data-position="left"\n         data-getTotElementsOfType="{{vm.getTotElementsOfType(\'witness\')}}"\n         ng-class="{\'span9of9\' : (vm.type === \'witness\' && vm.getTotElementsOfType(\'witness\') === 1) || (vm.type === \'version\' && vm.getTotElementsOfType(\'version\') === 1),\n                    \'span6of12\': vm.type === \'witness\' && vm.getTotElementsOfType(\'witness\') === 2 || (vm.type === \'version\' && vm.getTotElementsOfType(\'version\') === 2),\n                    \'span6of18\': (vm.type === \'witness\' && vm.getTotElementsOfType(\'witness\') === 3) || (vm.type === \'version\' && vm.getTotElementsOfType(\'version\') === 3) || (vm.type === \'text\' && vm.getTotElementsOfType(\'version\') > 1) || (vm.type === \'text\' && vm.getTotElementsOfType(\'witness\') > 1) || (vm.type === \'critical_apparatus\'),\n                    \'topBoxOpened\': vm.state.topBoxOpened,\n                    \'filterNotActive\': vm.state.filters._totActive <= 0,\n                    \'ITLactive\': vm.isITLactive()}">\n\n    <div class="box-menu"\n        data-position="top"\n        ng-if="::vm.type !== \'critical_apparatus\'  && vm.type !== \'empty\' && vm.type !== \'tdhop\'">\n\n        <evt-select\n            data-id="{{::selector.id}}"\n            data-type="{{::selector.type}}"\n            data-init="{{::selector.initValue}}"\n            ng-repeat="selector in ::vm.topMenuList.selectors track by $index">\n        </evt-select>\n        <button-switch\n            title="{{::button.title}}"\n            data-label="{{::button.label}}"\n            data-icon="{{::button.icon}}"\n            data-icon-pos="{{::button.iconPos}}"\n            data-type="{{::button.type}}"\n            ng-repeat="button in ::vm.topMenuList.buttons track by $index">\n        </button-switch>\n    </div>\n   <!-- add by FS button switch -->\n   <div class="box-menu" data-position="top" ng-if="::vm.type === \'tdhop\'">\n      <!--div ng-controller="TreDHOPCtrl">\n         <select id="modelSelector" class="selector" ng-model="data.model">\n            <option name="modelliscegli" id={{option.id}} ng-repeat="option in data.availableOptions">{{option.name}}</option>\n         </select>\n      </div\n     <evt-select\n         data-id="{{::selector.id}}"\n         data-type="{{::selector.type}}"\n         data-init="{{::selector.initValue}}"\n         ng-repeat="selector in ::vm.topMenuList.selectors track by $index">\n      </evt-select>-->\n\n        <button-switch\n            title="{{::button.title}}"\n            data-label="{{::button.label}}"\n            data-icon="{{::button.icon}}"\n            data-icon-pos="{{::button.iconPos}}"\n            data-type="{{::button.type}}"\n            ng-repeat="button in ::vm.topMenuList.buttons track by $index">\n        </button-switch>\n\n   </div>\n\n    <div\n        class="box-top-box avoidBlur"\n        ng-class="{\'open\': vm.state.topBoxOpened}"\n        compile="::vm.topBoxContent">\n    </div>\n\n    <div ng-if="::vm.type !== \'image\' && vm.type !== \'tdhop\'"\n         class="box-body {{vm.edition}}Edition {{vm.getNamedEntitiesActiveTypes()}} {{vm.getAdditionalClass()}}"\n         style="{{vm.fontSize();}}"\n         id="box_body_{{::vm.uid}}"\n         compile="::vm.content" ng-transclude>\n    </div>\n\n    <div ng-if="::vm.type === \'image\'"\n         class="box-body {{vm.edition}}Edition {{vm.getNamedEntitiesActiveTypes()}} {{vm.getAdditionalClass()}}"\n         style="{{vm.fontSize();}}"\n         id="box_body_{{::vm.uid}}">\n\n         <div ng-app="evtviewer.imageViewer" ng-controller="imageViewerCtrl" style="height:100%">\n            <osd name="osdViewer"></osd>\n            <!--i class="icon icon-evt_imgtxt buttonSwitch-icon"> </i-->\n         </div>\n    </div>\n\n    <div  ng-if="::vm.type === \'tdhop\'"\n     class="box-body {{vm.edition}}Edition {{vm.getNamedEntitiesActiveTypes()}} {{vm.getAdditionalClass()}}" style="padding: 0px;" ng-controller="TreDHOPCtrl">\n      <evt-tredhop id=\'tdhop\' name="tredhopViewer">\n            <!--div  class=\'box-tdhop box-body Edition noBottomMenu\'></div-->\n      </evt-tredhop>\n   </div>\n\n    <!-- <div class="box-body" id="box_body_{{vm.uid}}">{{ vm.content }}</div> -->\n    <div class="loading" ng-if="vm.isLoading"><i class="fa fa-spinner fa-pulse loader"></i></div>\n    <div class="filters-in-box"\n         ng-if="(vm.type==\'witness\' || vm.type==\'text\') && vm.state.filters._totActive > 0">\n        <span\n            class="filter-group"\n            ng-repeat="filter in vm.state.filters track by $index"\n            ng-if="filter.totActive > 0">\n            <span\n                class="filter-value"\n                ng-repeat="value in filter.values track by $index"\n                ng-if="filter.values[value].active"\n                ng-click="vm.toggleCriticalAppFilter(filter.name, filter.values[value].name);"\n                style="background:{{::filter.values[value].color}}"\n                title="Remove \'\'{{::filter.values[value].name}}\'\'">\n                {{::filter.values[value].name}}\n            </span>\n        </span>\n    </div>\n    <!-- <div class="box-bottom-box"> </div> -->\n    <div\n        class="filters-box"\n        ng-if="::vm.type==\'witness\' || vm.type==\'text\'"\n        ng-class="{\'open\': vm.state.filterBox}">\n\n        <div class="filter-group"\n             ng-repeat="filter in vm.appFilters track by $index"\n             ng-if="::(vm.type==\'witness\' && filter.possibleFor.variant) || (vm.type==\'text\' && filter.possibleFor.lemma)">\n            <div class="filters-section-title">{{::filter.name}}</div>\n            <div class="filter-value-outer">\n                <div\n                    class="filter-value">\n                    <span\n                        class="filter-value-label filter-any"\n                        title="Toggle \'\'any\'\'"\n                        ng-class="{\'active\': vm.state.filters[filter.name] === undefined || vm.state.filters[filter.name].totActive === 0}"\n                        ng-click="vm.clearFilter(filter.name);"> any </span>\n                </div>\n            </div>\n            <div class="filter-value-outer" ng-repeat="value in filter.values track by $index">\n                <div\n                    style="background:{{::value.color}}"\n                    class="filter-value">\n                    <span\n                        class="filter-value-label"\n                        title="Toggle \'\'{{::value.name}}\'\'"\n                        ng-class="{\'active\': vm.state.filters[filter.name].values[value.name].active !== undefined && vm.state.filters[filter.name].values[value.name].active}"\n                        ng-click="vm.toggleCriticalAppFilter(filter.name, value.name);">\n                        {{::value.name}}</span>\n                </div>\n            </div>\n        </div>\n    </div>\n\n   <evt-search-box\n        ng-if="vm.type==\'text\'"\n        ng-controller="SearchBoxCtrl as searchBox">\n    </evt-search-box>\n\n   <!--<evt-search-box-index\n      ng-if="vm.type==\'text\'">\n   </evt-search-box-index>-->\n\n    <div\n        class="tools-group-box"\n        ng-if="::vm.type!==\'image\'"\n        ng-class="{\'open\': vm.getState(\'fontSizeBtn\')}">\n        <div\n            class="fontSizeBtnGroup">\n            <button-switch\n                class="no-background"\n                title="{{::button.title}}"\n                data-label="{{::button.label}}"\n                data-icon="{{::button.icon}}"\n                data-icon-pos="{{::button.iconPos}}"\n                data-type="{{::button.type}}"\n                ng-repeat="button in vm.genericTools.fontSizeBtn track by $index">\n            </button-switch>\n        </div>\n    </div>\n\n    <div\n        class="box-menu"\n        data-position="bottom"\n        ng-if="::vm.bottomMenuList.buttons.length > 0 || vm.bottomMenuList.selectors.length > 0">\n        <evt-select\n            data-id="{{::selector.id}}"\n            data-type="{{::selector.type}}"\n            data-init="{{::selector.initValue}}"\n            data-open-up="true"\n            data-multiselect="{{::selector.multiselect}}"\n            ng-repeat="selector in ::vm.bottomMenuList.selectors track by $index">\n        </evt-select>\n\n        <button-switch\n            title="{{::button.title}}"\n            data-label="{{::button.label}}"\n            data-icon="{{::button.icon}}"\n            data-icon-pos="{{::button.iconPos}}"\n            data-type="{{::button.type}}"\n            ng-repeat="button in vm.bottomMenuList.buttons track by $index"\n            ng-if="button.show()">\n        </button-switch>\n    </div>\n</section>\n')
   }]), angular.module("src/buttonSwitch/buttonSwitch.dir.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/buttonSwitch/buttonSwitch.dir.tmpl.html", "<span class=\"buttonSwitch\"\n    title=\"{{vm.title | translate}}\"\n    ng-click=\"vm.doCallback()\"\n    ng-class=\"{'buttonSwitch-active': vm.active,\n               'buttonSwitch-disabled': vm.disabled === true,\n               'only-icon': vm.label === undefined || vm.label === '',\n               'only-text': vm.icon === undefined || vm.icon === '',\n               'iconLeft': vm.iconPos && vm.iconPos === 'left' }\">\n    \n    <i ng-if=\":: vm.iconPos && vm.iconPos === 'left'\" class=\"icon {{ vm.icon }} buttonSwitch-icon\"></i>\n    \n    <span\n      class=\"buttonSwitch-label\"\n      ng-if=\"::vm.label !== undefined && vm.label !== ''\">{{ vm.label | translate}}</span>\n    \n    <i ng-if=\":: !vm.iconPos || vm.iconPos === 'right'\" class=\"icon {{ vm.icon }} buttonSwitch-icon\"></i>\n</span>")
   }]), angular.module("src/criticalApparatusEntry/criticalApparatusEntry.directive.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/criticalApparatusEntry/criticalApparatusEntry.directive.tmpl.html", '<div\n  class="critical-apparatus-entry"\n  ng-mouseover="vm.toggleOverAppEntries($event);"\n  ng-mouseout="vm.toggleOverAppEntries($event)"\n  ng-click="vm.callbackClick($event)"\n  ng-class="{\'noTools\': (scopeViewMode !== \'collation\' && scopeViewMode !== \'readingTxt\') && !vm.isPinAvailable(),\n             \'selected\': vm.isSelected() && !vm.isInline() && scopeViewMode === \'readingTxt\',\n             \'over\': vm.currentViewMode === \'readingTxt\' && vm.over}">\n  <div class="critical-apparatus-entry_main-content">\n\n\n    <div class="critical-apparatus-entry_tools"\n      ng-if="::(scopeViewMode === \'collation\' || scopeVieMode === \'readingTxt\') || vm.isPinAvailable()">\n      <button-switch\n            title="BUTTONS.PIN_REMOVE"\n            ng-if="::vm.isPinAvailable() && vm.type === \'pinned\'"\n            data-label=""\n            data-icon="remove"\n            data-type="pin-off"\n            ng-click="vm.togglePin()"></button-switch>\n      <button-switch\n            title="BUTTONS.PIN_TOGGLE"\n            ng-if="::vm.isPinAvailable() && vm.type === \'default\'"\n            data-label=""\n            data-icon="pin"\n            data-type="pin"\n            ng-class="{\'active\' : vm.isPinned()}"\n            ng-click="vm.togglePin()"></button-switch>\n      <button-switch\n            title="BUTTONS.ALIGN_READINGS"\n            ng-if="::vm.type === \'default\' && (scopeViewMode === \'collation\' || !vm.showInlineCriticalApparatus())"\n            data-label=""\n            data-icon="v-align"\n            data-type="alignReadings"\n            ng-click="vm.alignReadings()"></button-switch>\n    </div>\n    <span class="apparatus_exponent"\n            ng-if="::vm.showExponent"\n            compile="vm.exponent"></span>\n\n      <span\n        class="app_lemma"\n        ng-if="::vm.content.lemma.content !== \'\'"\n        compile="::vm.content.lemma.content"></span>\n    <div class="critical-apparatus-entry_main-content_list">\n            <span\n              class="app_reading"\n              ng-if="::vm.witnessesGroups.length === 0"\n              ng-repeat="reading in ::vm.content.significantReadings track by $index"\n              compile="reading.content">\n              </span>\n              <ul\n                class="app_reading_list"\n                ng-if="::vm.witnessesGroups.length > 0">\n                <li ng-repeat="group in ::vm.witnessesGroups"\n                  ng-if="::group.significantText !== undefined">\n                    <span\n                      class="witGrp_name"\n                      ng_if="::group.groupName !== \'\' && group.significantText !== undefined">{{group.groupName}}:</span>\n                    <span\n                      class="witGrp_content"\n                      compile="group.significantText"></span>\n                </li>\n             </ul>\n        </div>\n  </div>\n  <div class="critical-apparatus-entry_other-content"\n       ng-if="::vm.tabs._indexes.length > 0">\n\n      <div\n        class="critical-apparatus-entry_other-content_headers"\n        ng-class="{\'closed\': vm._subContentOpened === \'\'}">\n          <span ng-repeat="tab in ::vm.tabs._indexes track by $index"\n                ng-click="vm.toggleSubContent(tab)"\n                ng-class="{\'active\' : vm._subContentOpened == tab }">\n                {{ vm.tabs[tab].label | translate }}\n          </span>\n      </div>\n      <div\n        class="critical-apparatus-entry_other-content_panels"\n        ng-class="{\'closed\': vm._subContentOpened === \'\'}">\n          <div class="critical-apparatus-entry_other-content_panel"\n                ng-repeat="tab in ::vm.tabs._indexes track by $index"\n                ng-class="{\'active\' : vm._subContentOpened == tab}"\n                ng-switch="::tab">\n                <div ng-switch-when="notSignificantReadings">\n                  <ul ng-if="::vm.witnessesGroups.length <= 0">\n                      <li ng-repeat="reading in ::vm.content.notSignificantReadings track by $index"\n                          compile="::reading.content"></li>\n                  </ul>\n                  <div\n                    ng-if="::vm.witnessesGroups.length > 0"\n                    ng-repeat="group in ::vm.witnessesGroups">\n                    <span\n                      class="critical-apparatus-entry_other-content_panel_orthographic_title"\n                      ng-if="::group.notSignificantText !== undefined">\n                      {{ \'CRITICAL_APPARATUS.ORTHOGRAPHIC_VARIANTS_FOR\' | translate }} {{::group.groupName}}</span>\n                    <span\n                      class="critical-apparatus-entry_other-content_panel_orthographic_text"\n                      ng-if="::group.notSignificantText !== undefined"\n                      compile="group.notSignificantText"></span>\n                  </div>\n                </div>\n                <div ng-switch-when="moreInfo">\n                  <span class="app_lemma">\n                    {{ \'CRITICAL_APPARATUS.METADATA_FOR_LEMMA\' | translate }} "<em\n                        ng-if="::vm.content.lemma.content !== \'\'"\n                        compile="::vm.content.lemma.content"></em>"\n                  </span>\n                  <ul ng-if="::(vm.content.attributes._keys.length > 1 || vm.content.attributes._keys.length === 1 && vm.content.attributes._keys.indexOf(\'xml:id\') < 0)">\n                      <li ng-repeat="attr in ::vm.content.attributes._keys track by $index"\n                          ng-if="::attr !== \'xml:id\'">\n                          <span class="moreInfo-label">{{ ::attr }}</span> {{ ::vm.content.attributes.values[attr] }}\n                      </li>\n                  </ul>\n                  <ul ng-if="::(vm.content.attributes._keys.length <= 0 || vm.content.attributes._keys.length === 1 && vm.content.attributes._keys.indexOf(\'xml:id\') > 0)">\n                    <li><em>{{ \'CRITICAL_APPARATUS.NO_DATA\' | translate }}</em></li></ul>\n\n                  <span class="moreInfo-metadataTitle">{{ \'CRITICAL_APPARATUS.MORE_INFO\' | translate }}</span>\n                  <ul>\n                      <li\n                        class="app_lemma"\n                        class="app_reading_content"\n                        ng-if="::(vm.content.lemma.attributes._keys.length > 1 || vm.content.lemma.attributes._keys.length === 1 && vm.content.lemma.attributes._keys.indexOf(\'xml:id\') < 0)">\n                          <span>\n                            {{ \'CRITICAL_APPARATUS.METADATA_FOR\' | translate }}\n                            <em\n                                ng-if="::vm.content.lemma.content !== \'\'"\n                                compile="::vm.content.lemma.content"></em>\n                          </span>\n                          <ul>\n                            <li ng-repeat="attr in ::vm.content.lemma.attributes._keys track by $index"\n                                ng-if="::attr !== \'xml:id\'">\n                                <span class="moreInfo-label">{{ ::attr }}</span> {{ ::vm.content.lemma.attributes.values[attr] }}\n                            </li>\n                          </ul>\n                      </li>\n\n                      <li\n                        class="app_reading_content"\n                        ng-repeat="reading in ::vm.content.significantReadings track by $index"\n                        ng-if="::(reading.attributes._keys.length > 1 || reading.attributes._keys.length === 1 && reading.attributes._keys.indexOf(\'xml:id\') < 0)">\n                          <span>\n                           {{ \'CRITICAL_APPARATUS.METADATA_FOR\' | translate }}\n                            <em\n                                class="app_reading"\n                                compile="::reading.content"></em>\n                          </span>\n                          <ul>\n                            <li ng-repeat="attr in ::reading.attributes._keys track by $index"\n                                ng-if="::attr !== \'xml:id\'">\n                                <span class="moreInfo-label">{{ ::attr }}</span> {{ ::reading.attributes.values[attr] }}\n                            </li>\n                          </ul>\n                      </li>\n\n                      <li\n                        class="app_reading_content"\n                        ng-repeat="reading in ::vm.content.notSignificantReadings track by $index"\n                        ng-if="::(reading.attributes._keys.length > 1 || reading.attributes._keys.length === 1 && reading.attributes._keys.indexOf(\'xml:id\') < 0)">\n                          <span>\n                            {{ \'CRITICAL_APPARATUS.METADATA_FOR\' | translate }}\n                            <em\n                                class="app_reading"\n                                compile="::reading.content"></em>\n                          </span>\n                          <ul>\n                            <li ng-repeat="attr in reading.attributes._keys track by $index">\n                                <span class="moreInfo-label">{{ ::attr }}</span> {{ ::reading.attributes.values[attr] }}\n                            </li>\n                          </ul>\n                      </li>\n                  </ul>\n                </div>\n                <div ng-switch-when="xmlSource">\n                  <pre>{{ ::vm.content[tab] | prettyXml }}</pre>\n                </div>\n                <div ng-switch-default\n                     compile="::vm.content[tab]">\n                </div>\n          </div>\n      </div>\n  </div>\n</div>\n');
   }]), angular.module("src/criticalApparatusEntry/criticalApparatusEntry.witnessRef.directive.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/criticalApparatusEntry/criticalApparatusEntry.witnessRef.directive.tmpl.html", '<span class="wit" \n      ng-class="::{\'selected\': witness === scopeWit}"\n      ng-click="openWit()"\n      title="{{ title | translate:translationData }}">{{ ::witness }}</span>')
   }]), angular.module("src/dialog/dialog.dir.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/dialog/dialog.dir.tmpl.html", '<div class="evt-dialog"\n    ng-show="vm.opened"\n    ng-class="::{\'evt-dialog-error\': vm.type === \'error\',\n               \'evt-dialog-small\': vm.type === \'bookmark\' }">\n    <div class="evt-dialog-shadow" ng-click="vm.close()"></div>\n\n\n    <div class="evt-dialog-container">\n        <div class="evt-dialog-container-top">\n            <span class="evt-dialog-container-top-title">{{ vm.title | translate }}</span>\n            <button-switch \n                    class="noPadding"\n                    title="{{ \'DIALOGS.CLOSE\' | translate }}"\n                    data-icon="remove"\n                    data-type="closeDialog">\n            </button-switch>\n        </div>\n        <div ng-switch="vm.type">\n            <div \n                ng-switch-when="error"\n                class="evt-dialog-container-content"\n                compile="::vm.content"></div>\n            <div \n                ng-switch-default\n                class="evt-dialog-container-content" ng-transclude></div>\n        </div>\n    </div>\n</div>')
   }]), angular.module("src/list/list.dir.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/list/list.dir.tmpl.html", '<div class="evt-list">\n    <div ng-if="vm.elements.length > 0">\n        <div class="evt-list__listLetters">\n            <span class="evt-list__listLetters__letter" \n                ng-class="{\'active\': letter === vm.selectedLetter }"\n                ng-repeat="letter in ::vm.listKeys | orderBy track by $index" ng-click="vm.selectLetter(letter)">\n                {{ ::letter }}\n            </span>\n        </div>\n        <div class="evt-list__content">\n            <div class="scrollableDiv" infinite-scroll="vm.loadMoreElements()" infinite-scroll-distance="2" infinite-scroll-parent="true">\n                <evt-named-entity \n                    data-entity-id="{{::element}}" data-entity-type="{{::vm.listType}}"\n                    ng-repeat="element in vm.visibleElements | orderBy ">\n                </evt-named-entity>\n            </div>\n        </div>\n    </div>\n    <div ng-if="vm.elements.length <= 0">\n        {{ \'LISTS.NO_ELEMENTS\' | translate }} \n    </div>\n</div>')
   }]), angular.module("src/mobile/mobile.dir.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/mobile/mobile.dir.tmpl.html", "<menu-mobile></menu-mobile>\n<info-mobile></info-mobile>\n<search-mobile></search-mobile>\n<view-mobile></view-mobile>\n\n")
   }]), angular.module("src/mobile/mobileInfo.dir.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/mobile/mobileInfo.dir.tmpl.html", '<section \n    class="baseTemplate"\n    ng-if="view.currentView === \'info\'" >\n                        \n    <p class="dvbText">\n        When the transcription of the Vercelli Book manuscript (Codex CXVII, Archivio e Biblioteca Capitolare di Vercelli) passed the 50% landmark, \n        researchers working on the project started to think about the best way to visualize the edition.\n        Thanks to the openness and support of the Biblioteca Capitolare, it was decided to abandon the original plan of a CD/DVD publication,\n        largely inspired by digital editions such as the Electronic Beowulf, in favor of a web-based publication.\n        While this decision was critical in that it allowed us to select the most supported and widely-used medium, we soon discovered that it did not make choices any simpler. <br>\n        Since it was originally born as part of the Digital Vercelli Book project, EVT (Edition Visualization Technology) was developed to deal with the XML encoding of texts which had been prepared for that project, namely making use of the XML TEI P5\n        parallel transcription method. When using this method, information about the scan and possibly the coordinates\n        of sensible areas are separated from the transcription and aligned with it thanks to linking attributes.\n    </p>\n    <ul class="dvbList">\n        <li ng-repeat="item in dvb">\n            <a \n                href="{{item.url}}"\n                target="_blank"\n                title="{{item.title}}">\n\n                <span> \n\n                    {{item.description}}\n                    <i class="fa fa-external-link"></i>\n                    \n                </span>\n\n            </a>\n        </li>               \n    </ul>\n\n\n</section>')
   }]), angular.module("src/mobile/mobileMenu.dir.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/mobile/mobileMenu.dir.tmpl.html", '<header role="banner" >\n    <nav \n        class="nav" \n        role="navigation">\n        <ul>\n            <li  \n                class="navItem"\n                ng-class="{\'active\': isActiveButton(item.template)}"\n                ng-click="showSection(item.template); buttonSection(item)" \n                ng-repeat="item in menu">\n                \n                <span>\n                    <i class="{{item.icon}}"></i>\n                </span>\n\n                <span class="title">\n                    <h1>{{item.description}}</h1>\n                </span>   \n                \n            </li>\n\n            <li \n                class="navItem" \n                ng-class="{\'active\': showItems}" \n                ng-click="toggleView()">\n                \n                <span>\n                    <i class="fa fa-eye"></i>\n                </span>\n                \n            </li>\n        </ul>\n        <ul \n            class="dropdown" \n            ng-show="showItems">\n    \n            <li \n                class="{{item.template}}"\n                ng-class="{\'active\': isActiveButton(item.template)}"\n                ng-click="showView(item.template); buttonView(item)"\n                ng-repeat="item in view">\n\n                <span>\n                    <i class="{{item.icon1}}"></i>\n                </span>\n\n                <span>\n                    <i class="{{item.icon2}}"></i>\n                </span>\n                \n            </li>\n        </ul>\n    </nav>\n</header>\n\n\n')
   }]), angular.module("src/mobile/mobileSearch.dir.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/mobile/mobileSearch.dir.tmpl.html", '<section \n    class="baseTemplate"\n    ng-if="view.currentView === \'search\'" >\n\n    <div class="toolbarSearch">\n        <div class= "boxOptions">\n            <button\n                class="buttonOption"\n                ng-repeat="button in buttonsOption"\n                ng-class=\'{"activeOption": isActiveTab(button.tab)}\'\n                ng-click="showTabOptions(button)">\n\n                <span><h2><i class="{{button.icon}}"></i></h2></span>\n                <span><h2 ng-bind-html="button.description"></h2></span>\n\n            </button>\n        </div>\n        <div class="boxSearch">\n            <input \n                type="text"\n                ng-model="Search"\n                ng-click="removeText()">\n\n            <button \n                class="buttonSearch"\n                ng-click="showResults()">\n                <h2><i class="fa fa-search"></i></h2>\n            </button>\n        </div>\n       \n    </div>\n    \n    <div class="toolbarOptions" ng-switch on="currentOption">\n          \n        <div ng-switch-when="tabLetters">\n            <div class="listOptions">\n                <span \n                    class="letters"\n                    ng-repeat="letter in mockSearchLetters"\n                    ng-bind-html="letter">\n                </span>\n            </div>\n        </div>\n\n        <div ng-switch-when="tabFilters">\n            <div class="listOptions">\n                <span \n                    class="filters"\n                    ng-repeat="filter in mockSearchFilters">\n                    <input type="checkbox" id="{{filter.id}}">\n                    <label for="{{filter.id}}">{{filter.content}}</label>                    \n                </span>\n            </div>\n        </div>\n    </div>\n    \n    <div class="listResults" ng-hide="listResults">\n        <h3>Results for {{Search}}</h3>\n\n        <ul>\n            <li ng-repeat="text in mockText">\n                <div class="resultInfo">\n                    <span>{{text.title}}</span>\n                    <span>{{text.page}}</span>\n                </div>\n                <div class="resultText">\n                    <p>{{text.diplomatic}}</p>\n                </div>\n                \n            </li>\n        </ul>\n    </div> \n\n</section>')
   }]), angular.module("src/mobile/mobileView.dir.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/mobile/mobileView.dir.tmpl.html", '<!--  View  -->\n\n<section \n    class="baseTemplate"\n    ng-if="view.currentView === \'image\'" >\n\n    <div class="fullscreen">\n\n        <figure\n            ng-repeat="img in mockImage"\n            ng-swipe-right="prevItem()"\n            ng-swipe-left="nextItem()"\n            ng-show="isActive($index)" >\n\n            <img\n                class="slide"\n                ng-src="{{img.url}}"\n                alt="{{img.title}} {{img.page}}" >\n\n        </figure>\n\n    </div>\n\n    <!-- prev / next controls -->\n\n    <span \n        class="prev"\n        ng-click="prevItem()">\n    </span>\n\n    <span \n        class="next"\n        ng-click="nextItem()">\n    </span>\n\n</section>\n\n\n<section \n    class="baseTemplate"\n    ng-if="view.currentView === \'text\'" >\n\n    <div class="fullscreen">\n\n        <div\n            class="boxText"\n            ng-repeat="text in mockText">\n\n           \n            <div\n                class="information"\n                ng-show="isActive($index)">\n\n                <span class="textPage">{{text.page}}</span>\n                <span class="textTitle">{{text.title}}</span>\n                              \n            </div>\n\n            <div\n                class="contentText"\n                ng-swipe-right="singlePrev()"\n                ng-swipe-left="singleNext()"\n                ng-show="isActive($index)"\n                ng-if="editionDipl.currentEditionDipl === \'diplomatic\'">\n\n                <p ng-include="text.diplomatic"></p>\n\n            </div>\n\n            <div\n                class="contentText"\n                ng-swipe-right="singlePrev()"\n                ng-swipe-left="singleNext()"\n                ng-show="isActive($index)"\n                ng-if="editionDipl.currentEditionDipl === \'interpretative\'">\n\n                <p ng-include="text.interpretative"></p>\n\n            </div>        \n\n        </div>\n\n    </div>   \n    \n    <!-- prev / next controls -->\n\n    <span \n        class="prev"\n        ng-click="prevItem()">\n    </span>\n\n    <span \n        class="next"\n        ng-click="nextItem()">\n    </span>\n\n</section>\n\n\n<section \n    class="baseTemplate"\n    ng-if="view.currentView === \'imageimage\'" >\n\n    <div class="fullscreen">\n\n        <figure\n            ng-repeat="img in mockBook"\n            ng-swipe-right="prevImageImage()"\n            ng-swipe-left="nextImageImage()"\n            ng-show="isActive($index)">\n\n            <img \n                class="slide"\n                ng-src="{{img.url}}"\n                alt="{{img.title}} {{img.page}}">\n\n        </figure>\n\n    </div>\n\n    <!-- prev / next controls -->\n\n    <span \n        class="prev"\n        ng-click="prevImageImage()">\n    </span>\n\n    <span \n        class="next"\n        ng-click="nextImageImage()">\n    </span>\n\n</section>\n\n\n<section \n    class="baseTemplate"\n    ng-if="view.currentView === \'imagetext\'" >\n\n    <div class="halfscreen">\n\n        <figure\n            ng-repeat="img in mockImage"\n            ng-swipe-right="prevItem()"\n            ng-swipe-left="nextItem()"\n            ng-show="isActive($index)">\n\n            <img\n                class="slide"\n                ng-src="{{img.url}}"\n                alt="{{img.title}} {{img.page}}" >\n\n        </figure>\n\n    </div>\n    <div class="halfscreen">\n\n        <div\n            class="boxText"\n            ng-repeat="text in mockText">\n\n            <div\n                class="information"\n                ng-show="isActive($index)">\n\n                <span class="textPage">{{text.page}}</span>\n                <span class="textTitle">{{text.title}}</span>\n                              \n            </div>\n\n            <div\n                class="contentText"\n                ng-swipe-right="singlePrev()"\n                ng-swipe-left="singleNext()"\n                ng-show="isActive($index)"\n                ng-if="editionInt.currentEditionInt === \'diplomatic\'">\n\n                <p ng-include="text.diplomatic"></p>\n\n            </div>\n\n            <div\n                class="contentText"\n                ng-swipe-right="singlePrev()"\n                ng-swipe-left="singleNext()"\n                ng-show="isActive($index)"\n                ng-if="editionInt.currentEditionInt === \'interpretative\'">\n\n                <p ng-include="text.interpretative"></p>\n\n            </div> \n\n\n        </div>\n\n    </div>\n    \n    <!-- prev / next controls -->\n\n    <span \n        class="prev"\n        ng-click="prevItem()">\n    </span>\n\n    <span \n        class="next"\n        ng-click="nextItem()">\n    </span>\n\n</section>\n\n\n<section \n    class="baseTemplate"\n    ng-if="view.currentView === \'texttext\'" >\n\n    <div class="halfscreen">\n\n        <div\n            class="boxText"\n            ng-repeat="text in mockText">\n\n            <div\n                class="information"\n                ng-show="isActive($index)">\n\n                <span class="textPage">{{text.page}}</span>\n                <span class="textTitle">{{text.title}}</span>\n                              \n            </div>\n\n            <div\n                class="contentText"\n                ng-swipe-right="singlePrev()"\n                ng-swipe-left="singleNext()"\n                ng-show="isActive($index)"\n                ng-if="editionDipl.currentEditionDipl === \'diplomatic\'">\n\n                <p ng-include="text.diplomatic"></p>\n\n            </div>\n\n            <div\n                class="contentText"\n                ng-swipe-right="singlePrev()"\n                ng-swipe-left="singleNext()"\n                ng-show="isActive($index)"\n                ng-if="editionDipl.currentEditionDipl === \'interpretative\'">\n\n                <p ng-include="text.interpretative"></p>\n\n            </div> \n\n        </div>\n\n    </div>\n    \n    <div class="halfscreen">\n\n        <div\n            class="boxText"\n            ng-repeat="text in mockText">\n\n            <div\n                class="information"\n                ng-show="isActive($index)">\n\n                <span class="textPage">{{text.page}}</span>\n                <span class="textTitle">{{text.title}}</span>\n                              \n            </div>\n\n            <div\n                class="contentText"\n                ng-swipe-right="singlePrev()"\n                ng-swipe-left="singleNext()"\n                ng-show="isActive($index)"\n                ng-if="editionInt.currentEditionInt === \'diplomatic\'">\n\n                <p ng-include="text.diplomatic"></p>\n\n            </div>\n\n            <div\n                class="contentText"\n                ng-swipe-right="singlePrev()"\n                ng-swipe-left="singleNext()"\n                ng-show="isActive($index)"\n                ng-if="editionInt.currentEditionInt === \'interpretative\'">\n\n                <p ng-include="text.interpretative"></p>\n\n            </div> \n\n        </div>\n\n    </div>\n    \n    <!-- prev / next controls -->\n\n    <span \n        class="prev"\n        ng-click="prevItem()">\n    </span>\n\n    <span \n        class="next"\n        ng-click="nextItem()">\n    </span>\n\n</section>\n\n<!--  end View  -->\n\n<!--  Toolbar  -->\n\n<section class="toolbar">\n\n    <section class="settings">\n        <section \n            class="leftSettings"\n            ng-if="view.currentView === \'text\' || view.currentView === \'texttext\'">\n\n            <div class="contentSettings">\n                <div \n                    class ="leftSetOptions"\n                    ng-show="leftTextOptions">\n                    \n                    <ul class="optionText">\n                        <li \n                            class="{{option.template}}"\n                            ng-class="{\'active\': isActiveButtonDipl(option.template)}"\n                            ng-repeat="option in textEdition"\n                            ng-click="showEditionDipl(option.template); buttonEditionDipl(option)">\n\n                            <span> {{option.description}}</span>\n                        </li>\n                        \n                    </ul>\n\n                </div>\n                <div\n                    class="leftButtonSettings"\n                    ng-class="{\'active\': leftTextOptions}"\n                    ng-click="leftTextSettings()">\n\n                    <span>\n                        <i class="fa fa-cogs"></i>\n                    </span>\n\n                </div>\n                \n            </div>\n\n        </section>\n\n        <section \n            class="rightSettings"\n            ng-if="view.currentView === \'imagetext\' || view.currentView === \'texttext\'">\n\n            <div class="contentSettings">\n                <div \n                    class ="rightSetOptions"\n                    ng-show="rightTextOptions">\n                    \n                    <li \n                        class="{{option.template}}"\n                        ng-class="{\'active\': isActiveButtonInt(option.template)}"\n                        ng-repeat="option in textEdition"\n                        ng-click="showEditionInt(option.template); buttonEditionInt(option)">\n\n                        <span> {{option.description}}</span>\n                    </li>\n\n                </div>\n                <div\n                    class="rightButtonSettings"\n                    ng-class="{\'active\': rightTextOptions}"\n                    ng-click="rightTextSettings()">\n\n                    <span>\n                        <i class="fa fa-cogs"></i>\n                    </span>\n\n                </div>\n                \n            </div>\n\n        </section>\n\n    </section>\n\n\n    <section\n        class="thumbImage"\n        ng-if="view.currentView === \'image\'">\n\n        <div\n            class="buttonThumb"\n            ng-class="{\'active\': navThumb}"\n            ng-click="showThumb()">\n\n            <span>\n                <i class="fa fa-ellipsis-h"></i>\n            </span>\n\n        </div>\n        <div \n            class="navThumb"\n            ng-show="navThumb">\n\n           <figure \n                ng-class="{\'active\': isActive($index)}"\n                ng-click="showImage($index)"\n                ng-repeat="img in thumbnails">\n                \n                <img \n                    ng-src="{{img.url}}"\n                    alt="{{img.page}}">\n\n                <figcaption>{{img.page}}</figcaption>\n\n            </figure> \n          \n        </div>\n\n    </section>\n\n    <section\n        class="thumbImage"\n        ng-if="view.currentView === \'imageimage\'">\n\n        <div\n            class="buttonThumb"\n            ng-class="{\'active\': navThumb}"\n            ng-click="showThumb()">\n\n            <span>\n                <i class="fa fa-ellipsis-h"></i>\n            </span>\n\n        </div>\n        <div \n            class="navThumb"\n            ng-show="navThumb">\n\n           <figure \n                ng-class="{\'active\': isActive($index)}"\n                ng-click="showImage($index)"\n                ng-repeat="img in thumbBook">\n                \n                <img \n                    ng-src="{{img.url}}"\n                    alt="{{img.page}}">\n\n                <figcaption>{{img.page}}</figcaption>\n\n            </figure> \n          \n        </div>\n\n    </section>\n\n    <section\n        class="thumbText"\n        ng-if="view.currentView === \'text\' || view.currentView === \'imagetext\' || view.currentView === \'texttext\'">\n\n        <div\n            class="buttonThumb"\n            ng-class="{\'active\': navThumb}"\n            ng-click="showThumb()">\n\n            <span>\n                <i class="fa fa-ellipsis-h"></i>\n            </span>\n\n        </div>\n        <div \n            class="navThumb"\n            ng-show="navThumb">\n\n           <figure \n                ng-class="{\'active\': isActive($index)}"\n                ng-click="showImage($index)"\n                ng-repeat="img in thumbnails">\n                \n                <img \n                    ng-src="{{img.url}}"\n                    alt="{{img.page}}">\n\n                <figcaption>{{img.page}}</figcaption>\n\n            </figure> \n          \n        </div>\n\n    </section>\n\n</section>\n\n<!--  end Toolbar -->')
   }]), angular.module("src/namedEntity/namedEntity.directive.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/namedEntity/namedEntity.directive.tmpl.html", '<span class="namedEntity namedEntity-{{ ::vm.entityType }} location-{{::vm.location}}"\n     ng-class="::{\'opened\': vm.location === \'mainText\'}">\n	<span class="namedEntity__header">\n        <!-- HEADER -->\n        <div class="namedEntity_tools"\n          ng-if="::vm.isPinAvailable()">\n          <button-switch\n            ng-if="vm.location !== \'list\'"\n            title="BUTTONS.OPEN_LIST"\n            data-label=""\n            data-icon="list"\n            data-type="openEntity"\n            ng-click="vm.openEntity()"></button-switch>\n          <button-switch \n                title="BUTTONS.PIN_REMOVE"\n                ng-if="::vm.isPinAvailable() && vm.location === \'pinned\'"\n                data-label=""\n                data-icon="remove"\n                data-type="pin-off"\n                ng-click="vm.togglePin()"></button-switch>\n          <button-switch \n                title="BUTTONS.PIN_TOGGLE"\n                ng-if="::vm.isPinAvailable() && vm.location !== \'pinned\'"\n                data-label=""\n                data-icon="pin"\n                data-type="pin"\n                ng-class="{\'active\' : vm.isPinned()}"\n                ng-click="vm.togglePin()"></button-switch>\n        </div>\n        <div ng-click="vm.toggle()">\n            <i class="fa opener" ng-if="::vm.location !== \'mainText\'"></i>\n            \n            <i class="fa namedEntity__icon {{::vm.entityTypeIcon}}" ng-if="::vm.location === \'mainText\'"></i>\n\n            <span compile="::vm.entity.label"></span>\n        </div>\n    </span>\n\n    <span class="namedEntity__details">\n        <div class="namedEntity__details-headers closed">\n            <span ng-repeat="tab in ::vm.tabs._indexes track by $index"\n                    ng-click="vm.toggleSubContent(tab)"\n                    class="namedEntity__details-header namedEntity__details-header-{{::tab}}">\n                {{ vm.tabs[tab].label | translate }}\n            </span>\n          </div>\n\n          <div class="namedEntity__details-panels closed"\n               ng-class="{\'largeMap\': vm.location === \'list\' && (vm._subContentOpened === \'map\' || vm._subContentOpened === \'occurrences\')}">\n                  <div class="namedEntity__details-panel"\n                        ng-switch="vm._subContentOpened">\n                        <div ng-switch-when="moreInfo">\n                            \n                            <span ng-if="::vm.entity.content && vm.entity.content._indexes.length > 0" \n                                ng-repeat="contentName in ::vm.entity.content._indexes">\n                                <span class="namedEntity__detail" ng-if="::vm.entity.content[contentName].length > 0">\n                                    <!-- SWITCH to get icon -->\n                                    <span ng-switch="contentName">\n                                        <i ng-switch-when="idno"\n                                            class="fa fa-barcode namedEntity__detail-icon"></i>\n                                        <i ng-switch-when="note"\n                                            class="fa fa-sticky-note namedEntity__detail-icon"></i>\n                                        <i ng-switch-when="occupation"\n                                            class="fa fa-briefcase namedEntity__detail-icon"></i>                                        \n                                        <i ng-switch-when="persName"\n                                            class="fa fa-user namedEntity__detail-icon"></i>\n                                        <i ng-switch-when="sex"\n                                            class="fa fa-venus-mars namedEntity__detail-icon"></i>\n                                        <i ng-switch-when="birth"\n                                            class="fa fa-birthday-cake namedEntity__detail-icon"></i>\n                                        <i ng-switch-when="death"\n                                            class="fa fa-times fa-rotate-45 namedEntity__detail-icon"></i>\n                                        <i ng-switch-when="residence"\n                                            class="fa fa-home namedEntity__detail-icon"></i>\n                                        <i ng-switch-when="orgName"\n                                            class="fa fa-users namedEntity__detail-icon"></i>\n                                        <i ng-switch-when="geoName"\n                                            class="fa fa-map-marker namedEntity__detail-icon"></i>\n                                        <i ng-switch-when="geogFeat"\n                                            class="fa fa-map-marker namedEntity__detail-icon"></i>\n\n                                        <i ng-switch-when="district"\n                                            class="fa fa-map-marker namedEntity__detail-icon"></i>\n                                        <i ng-switch-when="settlement"\n                                            class="fa fa-location-arrow namedEntity__detail-icon"></i>\n                                        <i ng-switch-when="region"\n                                            class="fa fa-map-marker namedEntity__detail-icon"></i>    \n                                        <i ng-switch-when="country"\n                                            class="fa fa-map-marker namedEntity__detail-icon"></i>\n                                        <i ng-switch-when="bloc"\n                                            class="fa fa-map-marker namedEntity__detail-icon"></i>\n                                        \n                                        <i ng-switch-when="relations"\n                                            class="fa fa-share-alt namedEntity__detail-icon"></i>\n                                        <i ng-switch-when="actors"\n                                            class="fa fa-users namedEntity__detail-icon"></i>\n\n                                        <i ng-switch-default\n                                            class="fa fa-info-circle namedEntity__detail-icon"></i>\n                                    </span>\n\n                                    <span class="namedEntity__detail-text"\n                                        ng-repeat="contentObj in ::vm.entity.content[contentName] track by $index">\n                                            <span class="namedEntity__detail-text-attributes">\n                                                <span class="namedEntity__detail-text-attribute" \n                                                    ng-repeat="attribute in ::contentObj.attributes._indexes track by $index"\n                                                >{{::contentObj.attributes[attribute] | translate | camelToSpaces | underscoresToSpaces }}</span>\n                                            </span>\n                                            <span class="namedEntity__detail-text-content" compile="::contentObj.text"></span>\n                                        </span>\n                                </span>\n                            </span>\n\n                            <span ng-if="::vm.entity.content._indexes.length <= 0">\n                                {{ \'MESSAGES.NO_MORE_INFO_AVAILABLE\' | translate }}\n                            </span>\n                        </div>\n                        <div ng-switch-when="occurrences">\n                            <span ng-if="::vm.occurrences && vm.occurrences.length > 0"\n                                class="namedEntity__occurrences-occurrence"\n                                ng-class="{\'active\': vm.isCurrentPageDoc(occurrence) } "\n                                ng-repeat="occurrence in ::vm.occurrences track by $index"\n                                ng-click="vm.goToOccurrence(occurrence)">\n                                {{ \'LISTS.OCCURRENCE\' | translate:occurrence }}\n                            </span>\n                            <span class="italic" ng-if="::vm.occurrences && vm.occurrences.length <= 0">\n                                {{ \'MESSAGES.NO_RESULT_FOUND\' | translate }}\n                            </span>\n                            <span class="italic" ng-if="::!vm.occurrences">\n                                {{ \'MESSAGES.LOADING_OCCURRENCES\' | translate }}\n                            </span>\n                        </div>\n                        <div ng-switch-when="xmlSource">\n                          <pre ng-if="::vm.entity._xmlSource">{{ ::vm.entity._xmlSource | prettyXml }}</pre>\n                          <span ng-if="::!vm.entity._xmlSource">{{ \'MESSAGES.NO_XML_SOURCE\' | translate }}</span>\n                        </div>\n                        <div ng-switch-when="map">\n                            <leaflet\n                                width="100%"\n                                height="300px"\n                                lf-center="vm.lfCenter"\n                                defaults="vm.lfDefaults"\n                                markers="vm.lfMarkers"></leaflet>\n                        </div>\n                  </div>\n              </div>\n          </div>\n    </span>\n\n    <!-- <span class="namedEntity__details">\n        <span class="namedEntity__moreInfo-toggler" ng-click="vm.toggleMoreInfo()">\n            <i class="fa opener"></i> About\n        </span>\n        <span class="namedEntity__moreInfo">\n            \n            <span ng-if="::vm.entity.notes && vm.entity.notes.length > 0" \n                class="{{ ::note.type }}"\n                ng-repeat="note in ::vm.entity.notes track by $index"\n                compile="::note.content">\n            </span>\n\n            <span ng-if="::vm.entity.desc" \n                ng-repeat="desc in ::vm.entity.desc track by $index"\n                compile="::desc.content">\n            </span>\n\n            <span ng-if="::vm.entity.details" \n                compile="::vm.entity.details">\n            </span>            \n\n            <span ng-if="::vm.noMoreInfo">\n                No more information available.\n            </span> -->\n\n            <!-- <span ng-switch="::vm.entityType">\n                <span ng-switch-when="place">\n                </span>\n\n                <span ng-switch-when="person">\n                </span>\n\n                <span ng-switch-when="org">\n                </span>\n\n                <span ng-switch-default>\n                </span>        \n            </span> -->\n        <!-- </span>\n\n        <span class="namedEntity__occurrences-toggler" ng-click="vm.toggleOccurrences()">\n            <i class="fa opener"></i> Occurrences\n        </span>\n        <span class="namedEntity__occurrences">\n            <span ng-if="::vm.occurrences && vm.occurrences.length > 0"\n                class="namedEntity__occurrences-occurrence"\n                ng-repeat="occurrence in ::vm.occurrences track by $index"\n                ng-click="vm.goToOccurrence(occurrence)">\n                {{ ::occurrence.docLabel }} - Fol. {{ ::occurrence.pageLabel }} \n            </span>\n            <span class="italic" ng-if="::vm.occurrences && vm.occurrences.length <= 0">\n                No result found.\n            </span>\n        </span>\n    </span> -->\n</span>');
   }]), angular.module("src/namedEntity/namedEntityRef.directive.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/namedEntity/namedEntityRef.directive.tmpl.html", '<span class="namedEntityRef namedEntityRef-{{ ::vm.entityType }}"\n	ng-class="::{\'fakeEntity\': !vm.realNamedEntity,\n				 \'highlighted\': vm.initHighlight }" title="{{ \'LISTS.ENTITY_TYPE_\'+vm.entityType | uppercase | translate }}"\n	ng-click="vm.goToEntityInList($event)" ng-transclude></span>\n\n<evt-named-entity \n	ng-if="!vm.detailsInPopup && vm.active" \n	data-location=\'mainText\'\n	data-entity-id="{{::vm.entityId}}" data-entity-type="{{::vm.entityType}}"></evt-named-entity>\n\n<!-- <span class="namedEntityRef__details" ng-if="vm.active">\n	<span class="namedEntityRef__details-before"></span>\n	<evt-named-entity data-entity-id="{{::vm.entityId}}" data-entity-type="{{::vm.entityType}}"></evt-named-entity>\n</span> -->')
   }]), angular.module("src/navBar/navBar.directive.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/navBar/navBar.directive.tmpl.html", '<section class="navBarSliderWrapper">\n	<button-switch\n		title="{{ \'BUTTONS.THUMBNAILS\' | translate }}"\n		data-icon="thumb-nails"\n		data-type="thumbNails"\n		class="sliders"></button-switch>\n	<button-switch\n		title="{{ \'BUTTONS.VISCOLL\' | translate }}"		\n		data-icon="viscoll"\n		data-type="visColl"\n		class="sliders"></button-switch>\n	<div class="navBarSlider">\n		<rzslider rz-slider-model="vm.pageSlider.value" rz-slider-options="vm.pageSlider.options" id="slider" data-folio="{{vm.folio}}"></rzslider>\n	</div>\n	\n	<button-switch data-disabled="{{!vm.showNavigator()}}"\n		title="{{ \'BUTTONS.PAGE_FIRST\' | translate }}"\n		data-icon="first-page" \n		data-type="firstPage"\n		class="sliders"></button-switch>\n	<button-switch data-disabled="{{!vm.showNavigator()}}"\n		title="{{ \'BUTTONS.PAGE_PREVIOUS\' | translate }}"\n		data-icon="prev-page"\n		data-type="prevPage"\n		class="sliders"></button-switch>\n	<button-switch data-disabled="{{!vm.showNavigator()}}"\n		title="{{ \'BUTTONS.PAGE_NEXT\' | translate }}"\n		data-icon="next-page" \n		data-type="nextPage"\n		class="sliders"></button-switch>\n	<button-switch data-disabled="{{!vm.showNavigator()}}"\n		title="{{ \'BUTTONS.PAGE_LAST\' | translate }}"\n		data-icon="last-page" \n		data-type="lastPage"\n		class="sliders"></button-switch>\n</section>\n<!-- avanti e fine a sx, dietro e inizio a dx-->')
   }]), angular.module("src/popover/popover.directive.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/popover/popover.directive.tmpl.html", '<span class="popover">\n   <span \n        class="popover_trigger" \n        ng-mouseover="vm.toggleMouseHover($event, vm)" \n        ng-mouseout="vm.toggleMouseHover($event, vm)"\n        ng-click="vm.triggerClick($event, vm);" \n        ng-class="{\'expanded\':vm.expanded, \n                   \'active\': vm.over,\n                   \'blurred\': $parent.vm.state.topBoxOpened}">\n        <span ng-transclude></span>\n   </span>\n   <span \n        class="popover_tooltip" \n        ng-class="{\'expanded\':vm.expanded || (vm.trigger===\'over\' && vm.over)}"\n        ng-mouseover="vm.toggleTooltipHover($event, vm)"\n        ng-mouseout="vm.toggleTooltipHover($event, vm)">\n        <span \n            class="popover__tooltip__before" \n            ng-mouseover="vm.toggleTooltipHover($event, vm)"\n            ng-mouseout="vm.toggleTooltipHover($event, vm)"></span>\n      <span compile="::vm.tooltip"></span>\n   </span>\n</span>')
   }]), angular.module("src/quote/quote.directive.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/quote/quote.directive.tmpl.html", '<span \n    class="quote"\n    ng-mouseover="vm.toggleOverQuotes($event)"\n    ng-mouseout="vm.toggleOverQuotes($event)"\n    ng-class="{ \'selected\' : vm.isSelected() && !$parent.vm.state.topBoxOpened,\n                \'expansed\' : (!$parent.vm.state.topBoxOpened && vm.apparatus.opened && vm.apparatus.inline),\n                \'over\'     : vm.over,\n                \'blurred\'  : $parent.vm.state.topBoxOpened,\n                \'subquote\' : vm.type === \'subquote\',\n                \'noquotes\' : $parent.vm.selected,\n                \'highlight\': vm.hasScopeSource() && vm.scopeViewMode === \'srcTxt\'}">\n    <sup\n        class="iconbis-evt_quote-left"\n        ng-click="vm.callbackClick($event);"\n        title="{{ \'QUOTES.QUOTE_START\' | translate}}"\n        ng-if="(vm.type !== \'subquote\' && !$parent.vm.selected) || (vm.over && vm.type === \'subquote\' && !$parent.vm.selected)">\n    </sup>\n    <span \n        class="quote__text"\n        ng-click="vm.callbackClick($event);"\n        ng-transclude></span>\n    <sup\n        class="iconbis-evt_quote-right"\n        ng-click="vm.callbackClick($event);"\n        title="{{ \'QUOTES.QUOTE_END\' | translate}}"\n        ng-if="(vm.type !== \'subquote\' && !$parent.vm.selected) || (vm.over && vm.type === \'subquote\' && !$parent.vm.selected)">\n    </sup>\n\n    <evt-sources-apparatus-entry\n        ng-class="{\'blurred\': $parent.vm.state.topBoxOpened}"\n        ng-if="vm.apparatus._loaded && vm.apparatus.inline"\n        ng-show="vm.isApparatusOpened()"\n        data-quote-id="{{::vm.quoteId}}"\n        data-scope-wit="{{::vm.scopeWit}}">\n    </evt-sources-apparatus-entry>\n</span>')
   }]), angular.module("src/reading/reading.directive.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/reading/reading.directive.tmpl.html", '<span \n    class="reading"\n    ng-mouseover="vm.toggleOverAppEntries($event);"\n    ng-mouseout="vm.toggleOverAppEntries($event)"\n    ng-click="vm.callbackClick($event);"\n    ng-class="{ \'selected\' : vm.isSelect() && !$parent.vm.state.topBoxOpened,\n                \'expansed\' : (!$parent.vm.state.topBoxOpened && vm.apparatus.opened && vm.apparatus.inline),\n                \'over\'     : vm.over, \n                \'invisible\': !vm.fitFilters(),\n                \'blurred\'  : $parent.vm.state.topBoxOpened}">\n    <span \n        ng-if="!vm.noText" \n        class="reading__text"\n        style="{{vm.backgroundColor()}}"\n        title="{{vm.attributes | translate}}"\n        ng-transclude></span>\n    \n    <span\n        ng-if="::vm.showExponent && vm.position !== \'start\'"\n        style="{{vm.backgroundColor()}}"\n        class="reading_exponent"\n        ng-click="vm.callbackClick($event);"\n        compile="::vm.exponent"></span>\n\n    <evt-critical-apparatus-entry \n      ng-class="{\'blurred\': $parent.vm.state.topBoxOpened}"\n      ng-if="vm.apparatus._loaded && vm.apparatus.inline && vm.isApparatusOpened() && vm.fitFilters()"\n      data-app-id="{{::vm.appId}}"\n      data-reading-id="{{::vm.readingId}}"\n      data-scope-wit="{{::vm.scopeWit}}"\n      data-exponent="{{::vm.exponent}}"></evt-critical-apparatus-entry>\n</span>')
   }]), angular.module("src/reference/ref.dir.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/reference/ref.dir.tmpl.html", '<span ng-click="handleRefClick($event)" ng-transclude></span>')
   }]), angular.module("src/search/searchBox.directive.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/search/searchBox.directive.tmpl.html", '<div class="search-box internal"\n     ng-class="{\'open\' : $parent.vm.getState(\'searchBox\'), \'results-open\' : vm.getState(\'searchResultBox\')} ">\n\n   <!-- search form -->\n   <form ng-submit="vm.doSearchCallback()">\n      <div class="searchBtnGroup">\n         <div class="btn-left">\n\n            <button-switch\n               ng-repeat="button in vm.searchBoxBtn|limitTo: vm.getBtnLimit()"\n               class="no-background"\n               title="{{::button.title}}"\n               data-label="{{::button.label}}"\n               data-icon="{{::button.icon}}"\n               data-type="{{::button.type}}"\n               ng-hide="button.hide">\n            </button-switch>\n         </div>\n         <div class="btn-right">\n            <button-switch\n               ng-repeat="button in vm.searchBoxBtn|limitTo: -4"\n               class="no-background"\n               title="{{::button.title}}"\n               data-label="{{::button.label}}"\n               data-icon="{{::button.icon}}"\n               data-type="{{::button.type}}">\n            </button-switch>\n         </div>\n      </div>\n\n      <input type="text" id="{{::vm.keyboardId}}" ng-model="vm.searchInput" ng-change="vm.highlightSearchResults(vm.parentBoxId, vm.searchInput)" autocomplete="off" autofocus>\n   </form>\n   <evt-virtual-keyboard></evt-virtual-keyboard>\n   <evt-search-results ng-controller="SearchResultsCtrl as searchResults"></evt-search-results>\n</div>\n')
   }]), angular.module("src/search/searchResults.directive.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/search/searchResults.directive.tmpl.html", '<div class="search-results" ng-show="$parent.vm.getState(\'searchResultBox\')">\n\n   <div ng-show="$parent.vm.getSearchedTerm() !== \'\'" infinite-scroll="vm.loadMoreElements()" infinite-scroll-parent="true">\n\n      <div class="search-info">\n         <p>Search for <strong>{{$parent.vm.getSearchedTerm()}}</strong></p>\n         <p>We have found <span>{{vm.getResultsNumber()}}</span> results in the selected edition</p>\n      </div>\n\n      <div class="token-results">\n         <div class="token" ng-repeat="result in vm.visibleRes track by $index">\n            <div ng-click="vm.toggle($event)" class="icon">\n               Results for <span class="result-token">{{result.token}}</span>\n               in <span class="result-doc">{{result.metadata.xmlDocTitle[0]}}</span>\n               <span class="results-number">({{result.resultsNumber}})</span>\n            </div>\n\n            <ul class="search-result">\n               <li ng-repeat="i in vm.range(result.resultsNumber) track by $index">\n                  <span class="original-text" id="{{result.metadata.docId[$index]}}"\n                        ng-bind-html="vm.getHighlightedOriginalText(result.metadata.docId[$index], vm.getCurrentBoxEdition($parent.vm.parentBoxId), result.token, result.metadata.position[$index])">\n                  </span>\n                  <a class="resultInfo" href="#" ng-click="vm.scrollToCurrentResult($event)">\n                     Found in <span class="resultDoc" id="{{result.metadata.xmlDocId[$index]}}">{{result.metadata.xmlDocTitle[$index]}}</span>\n                     <span class="resultSection" ng-if="result.metadata.sectionTitle">({{result.metadata.sectionTitle[$index]}})</span>\n                     <span class="resultPage" id="{{result.metadata.pageId[$index]}}" ng-if="result.metadata.page">page {{result.metadata.page[$index]}}</span>\n                     <span class="resultPar" ng-if="result.metadata.paragraph">paragraph {{result.metadata.paragraph[$index]}}</span>\n                     <span class="resultLine" id="{{result.metadata.lbId[$index]}}" ng-if="result.metadata.line">(line {{result.metadata.line[$index]}})</span>\n                  </a>\n               </li>\n            </ul>\n\n         </div>\n      </div>\n\n   </div>\n\n   <div class="search-info" ng-show="$parent.vm.getInputValue() === \'\'">{{vm.placeholder}}</div>\n\n</div>\n')
   }]), angular.module("src/search/virtualKeyboard.directive.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/search/virtualKeyboard.directive.tmpl.html", '<div class="keyboard-container" id="{{::vm.keyboardId}}"></div>\n')
   }]), angular.module("src/select/select.directive.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/select/select.directive.tmpl.html", '<div class="selector" ng-class="{\'smaller\': vm.smaller}"\n     data-parent="{{ ::vm.parent }}"\n     ng-show="::vm.optionList.length > 0">\n   <span \n      class="label_selected" \n      title="{{ vm.getOptionSelected().title | translate }}"\n      data-value="{{ vm.getOptionSelected().value }}">\n      {{ vm.getOptionSelected().label | translate | camelToSpaces | underscoresToSpaces | capitalize  }}\n   </span>\n   <div \n      class="open_options" \n      ng-click="vm.toggleExpand()">\n      <i class="fa fa-sort-desc"></i>\n   </div>\n   <div \n      class="option_container"\n      ng-class="{ \'expanded\':vm.expanded,\n                  \'openUp\': vm.openUp }" >\n      <div ng-repeat="option in vm.optionList" ng-switch="::option.type">\n         <div ng-switch-when="groupTitle" class="option groupTitle">\n            {{ option.label | translate | camelToSpaces | underscoresToSpaces | capitalize }}\n         </div>\n         <div \n            ng-switch-default\n            class="option {{ ::option.additionalClass }}" \n            title="{{option.title | translate | camelToSpaces | underscoresToSpaces | capitalize  }}" \n            data-value="{{::option.value }}"\n            data-wit="{{::option.ed}}"\n            ng-click="vm.doCallback(vm.optionSelected, option);"\n            ng-class="{\'selected\': vm.isOptionSelected(option)}">\n            <i class="fa {{::option.icon}} option-icon-label" \n               style="color: {{ ::option.color }}"\n               ng-if="::option.icon"></i>\n            {{ option.label  | translate | camelToSpaces | underscoresToSpaces | capitalize }}\n         </div>\n      </div>\n   </div>\n</div>')
   }]), angular.module("src/sourcesApparatusEntry/sourceRef.directive.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/sourcesApparatusEntry/sourceRef.directive.tmpl.html", '<span class="source-ref"\n      ng-click="openSource()">\n      <span class="source-ref_text"\n            ng-transclude></span>\n</span>')
   }]), angular.module("src/sourcesApparatusEntry/sourceSeg.directive.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/sourcesApparatusEntry/sourceSeg.directive.tmpl.html", '<span class="source-seg">\n    <sup\n        class="iconbis-evt_quote-left"\n        title="Quoted in the main text">\n    </sup>\n    <span\n        class="source-seg_text"\n        data-quote-id="{{vm.quoteId}}"\n        ng-mouseover="vm.toggleOverSeg($event, vm.segId)"\n        ng-mouseout="vm.toggleOverSeg($event, vm.segId)"\n        ng-click="vm.callbackClick($event, vm.segId)"\n        ng-class="{ \'over\': vm.over,\n                    \'selected\': vm.selected }"\n        ng-transclude></span>\n    <sup\n        class="iconbis-evt_quote-right"\n        title="Quoted in the main text">\n    </sup>\n    <div\n        class="source-seg_panel"\n        ng-if="vm.selected">\n        <span\n            class="source-seg_panel_label">\n            Related quotes:\n        </span>\n        <ul>\n            <li\n                ng-repeat="quote in ::vm.panel.quotes"\n                class="quoteText inSourceSeg"\n                ng-class="{ \'over\' : vm.panel._quoteOver == quote.id,\n                            \'selected\' : vm.panel._quoteSelected == quote.id}"\n                ng-mouseover="vm.toggleQuoteOver($event, quote.id)"\n                ng-mouseout="vm.toggleQuoteOver($event, quote.id)"\n                ng-click="vm.selectQuote($event, quote.id)"\n                title="Compare texts"\n                compile="quote.text">\n                <!--button-switch\n                    title="Expand text"\n                    data-label="..."\n                    data-type="cropText"\n                    class="cropText_btn"></button-switch-->\n            </li>\n        </ul>\n    </div>\n</span>')
   }]), angular.module("src/sourcesApparatusEntry/sourcesApparatusEntry.directive.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/sourcesApparatusEntry/sourcesApparatusEntry.directive.tmpl.html", '<div\n    class="sources-apparatus-entry"\n    ng-class="{ \'selected\' : vm.isSelect() && vm.currentViewMode == \'readingTxt\',\n                \'over\' : vm.currentViewMode === \'readingTxt\' && vm.over,\n                \'srctxt\' : vm.currentViewMode === \'srcTxt\'}"\n    ng-mouseover="vm.toggleOverSourcesEntries($event)"\n    ng-mouseout="vm.toggleOverSourcesEntries($event)"\n    ng-click="vm.callbackClick($event)">\n\n    <div class="sources-apparatus-entry_main-content"\n        ng-if="vm.currentViewMode !== \'srcTxt\'">\n        <div class="sources-apparatus-entry_tools">\n            <button-switch\n                title=" {{ \'BUTTONS.ALIGN_QUOTES\' | translate }}"\n                ng-if="vm.currentViewMode !== \'imgTxt\' && vm.currentViewMode !== \'srcTxt\'"\n                data-label=""\n                data-icon="v-align"\n                data-type="alignReadings"\n                ng-click="vm.alignQuotes()"></button-switch>\n        </div>\n        <sup\n            class="iconbis-evt_quote-left">\n        </sup>\n        <span class="sources-apparatus-entry_main-content_header" compile="vm.head"></span>\n\n    </div>\n\n    <div class="sources-apparatus-entry_main-content_list"\n        ng-class="{ \'srctxt\' : vm.currentViewMode === \'srcTxt\' }">\n        <span class="sources-apparatus-entry_main-content_list-label"\n          ng-if="vm.sources.length > 1"> {{ \'SOURCES.QUOTED_SOURCES\' | translate }} </span>\n        <ul\n            ng-class="{ \'pointer\' : (vm.over || vm.selected) && vm.sources.length > 1 && vm.currentViewMode !== \'srcTxt\'}">\n            <li\n                ng-repeat-start="source in ::vm.sources"\n                class="source-id"\n                ng-class="{ \'selected\' : vm.selected && vm.sources.length > 1 && source.id == vm._activeSource,\n                            \'over\'   : (vm.over || vm.selected) && vm.sources.length > 1 && source.id == vm._overSource && vm.currentViewMode !== \'srcTxt\'}"\n                ng-mouseover="vm.toggleOverSource($event, source.id)"\n                ng-mouseout="vm.toggleOverSource($event, source.id)"\n                ng-click="vm.toggleSource(source.id)"\n                compile="source.abbr">\n            </li>\n            <span class="compareLabel"\n                ng-if="vm.currentViewMode === \'srcTxt\' && vm.isSourceTextAvailable(source.id)"\n                ng-repeat-end>\n                <evt-source-ref\n                    data-source-id="{{::source.id}}">\n                    {{ \'SOURCES.COMPARE_TEXT\' | translate }}\n                </evt-source-ref>\n            </span>\n        </ul>\n    </div>\n    <div class="sources-apparatus-entry_other-content"\n         ng-if="vm.tabs._indexes.length > 0 && vm.currentViewMode !== \'srcTxt\'">\n        <div\n            class="sources-apparatus-entry_other-content_headers"\n            ng-class="{\'closed\' : vm._subContentOpened === \'\'}">\n            <span ng-repeat="tab in ::vm.tabs._indexes"\n                  ng-click="vm.toggleSubContent(tab)"\n                  ng-class="{\'active\' : vm._subContentOpened == tab }">\n                {{ vm.tabs[tab].label | translate}}\n            </span>\n        </div>\n        <div class="sources-apparatus-entry_other-content_panels"\n             ng-class="{\'closed\': vm._subContentOpened === \'\'}">\n            <div class="sources-apparatus-entry_other-content_panel"\n                 ng-repeat="tab in ::vm.tabs._indexes"\n                 ng-class="{\'active\' : vm._subContentOpened == tab}"\n                 ng-switch="::tab">\n                 <div ng-switch-when="text">\n                      <span\n                        ng-if="::vm.srcList[vm._activeSource].text != \'\'"\n                        compile="vm.srcList[vm._activeSource].text"></span>\n                      <span\n                        ng-if="::vm.srcList[vm._activeSource].url != \'\'"\n                        compile="vm.srcList[vm._activeSource].url"></span>\n                 </div>\n                 <div ng-switch-when="biblRef"\n                      ng-if="::vm.srcList[vm._activeSource].bibl !== \'\'"\n                      compile="vm.srcList[vm._activeSource].bibl">\n                </div>\n                <div ng-switch-when="moreInfo">\n\n                </div>\n                <div ng-switch-when="xmlSource">\n                    {{ \'SOURCES.XML_SOURCE_QUOTE\' | translate }}\n                    <pre>{{ ::vm.xml | prettyXml}}</pre>\n                    {{ \'SOURCES.XML_SOURCE_FOR\' | translate }} <span compile="vm.getActiveSourceAbbr(vm._activeSource)"></span>\n                     <pre>{{ ::vm.srcList[vm._activeSource]._xmlSource | prettyXml }}</pre>\n                </div>\n                <div\n                    ng-switch-default\n                    ng-if="::vm.srcList[vm._activeSource].bibl !== \'\'"\n                    compile="vm.srcList[vm._activeSource].bibl"></div>\n            </div>\n        </div>\n    </div>\n</div>\n')
   }]), angular.module("src/tabsContainer/tabsContainer.dir.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/tabsContainer/tabsContainer.dir.tmpl.html", '<div class="evt-tabs-container {{ ::vm.orientation }}">\n    <div \n        class="evt-tabs-container_headers"\n        ng-class="{\'closed\': vm.subContentOpened === \'\'}">\n        \n        <span \n            class="evt-tabs-container_header"\n            ng-repeat-start="tab in ::vm.tabs._indexes"\n            ng-click="vm.toggleSubTab(tab)"\n            ng-class="{\'active\' : vm.subContentOpened === tab,\n                        \'hasSubTabs\': vm.tabs[tab].showSubTabs }">\n            <i ng-if="vm.tabs[tab].subTabs && vm.tabs[tab].subTabs._indexes.length > 0"\n               class="fa fa-caret-right"\n               id="{{tab + \'_subTabsIcon\'}}"></i>\n            <i ng-if="::vm.tabs[tab].icon" class="fa {{::vm.tabs[tab].icon}} evt-tabs-container_header-icon"></i>\n            {{ ::vm.tabs[tab].label | translate }}\n            {{DIALOGS._BOOKMARK | translate}}\n        </span>\n        <ul ng-repeat-end\n            class="evt-tabs-container_header_subTabs"\n            ng-class="{ \'hide\' : !vm.tabs[tab].subTabs || vm.tabs[tab].subTabs._indexes.length === 0 || !vm.tabs[tab].showSubTabs}">\n            <li class="evt-tabs-container_header_subTabs_tab"\n                ng-repeat="subTab in vm.tabs[tab].subTabs._indexes"\n                ng-click="vm.toggleSubTab(tab, subTab)"\n                ng-class="{\'active\' : vm.subTabOpened === subTab }">\n                <i ng-if="::vm.tabs[tab].subTabs[subTab].icon" class="fa {{::vm.tabs[tab].subTabs[subTab].icon}} evt-tabs-container_header-icon"></i>\n                {{ vm.tabs[tab].subTabs[subTab].label | translate }}\n            </li>\n        </ul>\n    </div>\n    <div \n        class="evt-tabs-container_panels"\n        ng-if="!vm.subTabOpened"\n        ng-class="{\'closed\': vm.subContentOpened === \'\', \'noPadding\' : vm.subContentOpened === \'toc\' || vm.subContentOpened === \'entitiesLists\'}">\n        \n        <div class="evt-tabs-container_panel"\n            id="{{\'subTab_\' + tab}}"\n            ng-repeat="tab in vm.tabs._indexes"\n            ng-class="{\'active\' : vm.subContentOpened === tab,\n                        \'addPadding\': tab === \'intro\',\n                        \'noscroll\': vm.tabs[tab].scrollDisabled,\n                        \'noPadding\': vm.tabs[tab].noPadding }"\n            compile="vm.tabs[tab].content">\n        </div>\n    </div>\n    <div \n        class="evt-tabs-container_panels"\n        ng-if="vm.subTabOpened">\n        <div class="evt-tabs-container_panel"\n            id="{{\'subTab_\' + subTab}}"\n            ng-repeat="subTab in vm.tabs[vm.subContentOpened].subTabs._indexes"\n            ng-class="{\'active\' : vm.subTabOpened === subTab,\n                       \'noscroll\': vm.tabs[vm.subContentOpened].scrollDisabled,\n                       \'noPadding\': vm.tabs[vm.subContentOpened].noPadding }"\n            compile="vm.tabs[vm.subContentOpened].subTabs[subTab].content"></div>\n    </div>\n</div>')
   }]), angular.module("src/tdhop/tdhop.directive.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/tdhop/tdhop.directive.tmpl.html", '<div id="tdhop" class="3dhop" onmousedown="if (event.preventDefault) event.preventDefault()" ng-controller="TreDHOPCtrl">\n   <div style="position:absolute; right:10px; top:10px; z-index:2;">\n      <!--COMPASS-->\n      <br>\n      <div style="background-color:rgba(150, 150, 150, 0.8); border-radius: 5px; font-family:verdana; font-size:15px; padding:3px;">\n      <div style="margin: 0 auto;">\n      <canvas id="compassCanvas" style="margin: 4px auto; display: block; background:#555555; width:100; height:100; border:1px solid #000000;" onclick=\'var currpos = presenter.getTrackballPosition(); currpos[0] = 0.0; presenter.animateToTrackballPosition(currpos);\' width="100" height="100"></canvas>\n      </div>\n      <table style="border: \'1\'">\n       <tbody>\n         <tr><td></td><td>\n            <button style="margin: 0 auto; cursor:hand;" onclick="presenter.animateToTrackballPosition([180.0, 0.0, 0.0, 0.12, 0.0, 3.0]);">North</button>\n         </td><td></td></tr>\n         <tr><td>\n            <button style="margin: 0 auto; cursor:hand;" onclick="presenter.animateToTrackballPosition([-90.0, 0.0, 0.0, 0.12, 0.0, 3.0]);">East</button>\n         </td><td>\n            <button style="margin: 0 auto; display: block; cursor:hand;" onclick="presenter.animateToTrackballPosition([0.0, 90.0, -0.1, 0.0, -0.066, 2.0]);">Top</button>\n         </td><td>\n            <button style="margin: 0 auto; cursor:hand;" onclick="presenter.animateToTrackballPosition([90.0, 0.0, 0.0, 0.12, 0.0, 3.0]);">West</button>\n         </td></tr>\n        <tr><td></td><td>\n            <button style="margin: 0 auto; cursor:hand;" onclick="presenter.animateToTrackballPosition([0.0, 0.0, 0.0, 0.12, 0.0, 3.0]);">South</button>\n         </td><td></td></tr>\n      </tbody>\n   </table>\n   <!--input type="checkbox" style="cursor:hand;" onclick="presenter.toggleCameraType();">\n      Orthographic View-->\n   </div>\n      <!--COMPASS-->\n      <!--PREDEFINED VIEWS-- >\n      </br>\n      <div style="background-color:rgba(150, 150, 150, 0.8); border-radius: 5px; font-family:verdana; font-size:15px; padding:3px;">\n      <B>VIEWS</B></br></br>\n\n      <button style="cursor:hand; width:100%;" onclick="\n         presenter.animateToTrackballPosition([-134.06457816074385, -12.887777440509286, -0.0759087076749807, 0.3412565266806582, -0.27139426466935546, 0.2]);"><span>Occhio</span></button></br>\n\n      <button style="cursor:hand; width:100%;" onclick="\n         presenter.animateToTrackballPosition([-30.932175037195172, 21.48969026734013, -0.10514808884296216, 0.24072568682235757, 0.4103747554925059, 0.47158953820000027]);"><span>Base</span></button></br>\n\n      <button style="cursor:hand; width:100%;" onclick="\n         presenter.animateToTrackballPosition([-78.9460382691582, 23.208563652732604, -0.12881082145875608, -0.14276897621084111, -0.20041195051130686, 0.5021485402753604]);"><span>Ala</span></button></br>\n      </div>-->\n   </div>\n   <div id="toolbar">\n\n      <img ng-if="::vm.isToolHomeAvailable()" id="home" class="viewer3dhopBtn" title="Home" src="js-plugins/tdhop/skins/dark/home.png"/>\n      <!--FULLSCREEN-->\n      <img ng-if="::vm.isToolFullScreenAvailable()" id="full_on"  class="viewer3dhopBtn" ng-click="actionsToolbar(\'full_on\')" title="Exit Full Screen" src="js-plugins/tdhop/skins/dark/full_on.png" style="position:absolute; visibility:hidden;"/>\n      <img ng-if="::vm.isToolFullScreenAvailable()" id="full"  class="viewer3dhopBtn" ng-click="actionsToolbar(\'full\')" title="Full Screen" src="js-plugins/tdhop/skins/dark/full.png"/><br/>\n      <!--FULLSCREEN-->\n      <div ng-if="::vm.isToolArrowsAvailable()" id="arrows">\n         <div id="movement_control">\n            <img class="move_ left" id="move_left" title="Move Leftt" src="js-plugins/tdhop/skins/dark/arrows.png" />\n            <img class="move_ right" id="move_right" title="Move Right" src="js-plugins/tdhop/skins/dark/arrows.png" /><br/>\n            <img class="move_ up" id="move_up" title="Move Up" src="js-plugins/tdhop/skins/dark/arrows.png" />\n            <img class="move_ dawn" id="move_dawn" title="Move Dawn" src="js-plugins/tdhop/skins/dark/arrows.png" />\n         </div>\n      </div>\n      <!--ZOOM-->\n		<img ng-if="::vm.isToolZoominAvailable()" id="zoomin" class="viewer3dhopBtn"  title="Zoom In" src="js-plugins/tdhop/skins/dark/zoomin.png"/>\n		<img ng-if="::vm.isToolZoomoutAvailable()" id="zoomout" class="viewer3dhopBtn" ng-click="actionsToolbar(\'zoomout\')" title="Zoom Out" src="js-plugins/tdhop/skins/dark/zoomout.png"/><br/>\n		<!--ZOOM-->\n      <!--LIGHT-->\n      <img ng-if="::vm.isToolLightingAvailable()" id="lighting_off" class="viewer3dhopBtn" ng-click="actionsToolbar(\'lighting_off\')" title="Enable Lighting" src="js-plugins/tdhop/skins/dark/lighting_off.png" style="position:absolute; visibility:hidden;"/>\n		<img ng-if="::vm.isToolLightingAvailable()" id="lighting" class="viewer3dhopBtn" ng-click="actionsToolbar(\'lighting\')" title="Disable Lighting"  src="js-plugins/tdhop/skins/dark/lighting.png"/>\n	   <img ng-if="::vm.isToolLightControlAvailable()" id="light_off" class="viewer3dhopBtn" ng-click="actionsToolbar(\'light_off\')" title="Disable Light Control" src="js-plugins/tdhop/skins/dark/lightcontrol_on.png" style="position:absolute; visibility:hidden;"/>\n		<img ng-if="::vm.isToolLightControlAvailable()" id="light" class="viewer3dhopBtn" ng-click="actionsToolbar(\'light\')" title="Enable Light Control"  src="js-plugins/tdhop/skins/dark/lightcontrol.png"/><br/>\n      <!--LIGHT-->\n      <img ng-if="::vm.isToolCameraAvailable()" id="perspective" class="viewer3dhopBtn"  ng-click="actionsToolbar(\'perspective\')" title="Perspective Camera"    src="js-plugins/tdhop/skins/dark/perspective.png"     style="position:absolute; visibility:hidden;"/>\n      <img ng-if="::vm.isToolCameraAvailable()" id="orthographic" class="viewer3dhopBtn"  ng-click="actionsToolbar(\'orthographic\')" title="Orthographic Camera"   src="js-plugins/tdhop/skins/dark/orthographic.png"    /><br/>\n      <!--COLOR-->\n		<img ng-if="::vm.isToolSolidColorAvailable()" id="color_on" class="viewer3dhopBtn" ng-click="actionsToolbar(\'color_on\')" title="Model color" src="js-plugins/tdhop/skins/dark/color_on.png" style="position:absolute; visibility:hidden;"/>\n		<img ng-if="::vm.isToolSolidColorAvailable()" id="color" class="viewer3dhopBtn" ng-click="actionsToolbar(\'color\')" title="Solid color" src="js-plugins/tdhop/skins/dark/color.png"/><br/>\n      <!--COLOR-->\n      <!--HOTSPOT-->\n      <img ng-if="::vm.isToolHotspotAvailable()" id="hotspot_on" class="viewer3dhopBtn" ng-click="actionsToolbar(\'hotspot_on\')" title="Hide Hotspots"         src="js-plugins/tdhop/skins/dark/pin_on.png"          style="position:absolute; visibility:hidden;"/>\n      <img ng-if="::vm.isToolHotspotAvailable()" id="hotspot" class="viewer3dhopBtn"  ng-click="actionsToolbar(\'hotspot\')" title="Show Hotspots"         src="js-plugins/tdhop/skins/dark/pin.png"             /><br/>\n      <!--HOTSPOT-->\n		<!--MEASURE-->\n		<img ng-if="::vm.isToolMeasureAvailable()" id="measure_on" class="viewer3dhopBtn" ng-click="actionsToolbar(\'measure_on\')" title="Disable Measure Tool" src="js-plugins/tdhop/skins/dark/measure_on.png" style="position:absolute; visibility:hidden;"/><br/>\n		<img ng-if="::vm.isToolMeasureAvailable()" id="measure" class="viewer3dhopBtn" ng-click="actionsToolbar(\'measure\')" title="Enable Measure Tool" src="js-plugins/tdhop/skins/dark/measure.png"/><br/>\n		<!--MEASURE-->\n		<!--POINT PICKING-->\n		<img ng-if="::vm.isToolPickPointAvailable()" id="pick_on" class="viewer3dhopBtn" ng-click="actionsToolbar(\'pick_on\')" title="Disable PickPoint Mode" src="js-plugins/tdhop/skins/dark/pick_on.png" style="position:absolute; visibility:hidden;"/>\n		<img ng-if="::vm.isToolPickPointAvailable()" id="pick" class="viewer3dhopBtn" ng-click="actionsToolbar(\'pick\')" title="Enable PickPoint Mode" src="js-plugins/tdhop/skins/dark/pick.png"/><br/>\n		<!--POINT PICKING-->\n		<!--SECTIONS-->\n		<img ng-if="::vm.isToolPlaneSectionsAvailable()" id="sections_on" class="viewer3dhopBtn" ng-click="actionsToolbar(\'sections_on\')" title="Disable Plane Sections" src="js-plugins/tdhop/skins/dark/sections_on.png" style="position:absolute; visibility:hidden;"/>\n		<img ng-if="::vm.isToolPlaneSectionsAvailable()" id="sections" class="viewer3dhopBtn" ng-click="actionsToolbar(\'sections\')" title="Enable Plane Sections" src="js-plugins/tdhop/skins/dark/sections.png"/><br/>\n      <!--SECTIONS-->\n      <!--<img ng-if="::vm.isToolSwitchModelAvailable()" ng-click="actionsToolbar(\'Mesh_1_mesh\')" id="Mesh_1_mesh" class="models" title="3D Model 2" src="js-plugins/tdhop/skins/icons/models.png"/><br/>\n      <img ng-if="::vm.isToolSwitchModelAvailable()" ng-click="actionsToolbar(\'Mesh_2_mesh\')" id="Mesh_2_mesh" class="models" title="3D Model 1" src="js-plugins/tdhop/skins/icons/models.png"/><br/-->\n      <div ng-if="::vm.isToolLightControllerAvailable()" ng-click="actionsToolbar" id="lightcontroller">\n         <canvas id="lightcontroller_canvas" width="125" height="125"/>\n      </div>\n   </div>\n      <!--select name="repeatSelect" id="repeatSelect" ng-model="data.model" class="viewer3dhopBtn">\n         <option\n           ng-repeat="option in data.availableOptions"\n           value="{{option.id}}"\n           ng-click={{option.name}}\n           id={{option.id}}>\n           {{option.id}}\n        </option><br/>\n       </select>\n       <img ng-click="actionsToolbar(\'Mesh_2_mesh\')" id=\'Mesh_2_mesh\' class="models" title="3D Model 2" src="js-plugins/tdhop/skins/icons/models.png"/><br/>\n       <img ng-click="actionsToolbar(\'Mesh_1_mesh\')" id=\'Mesh_1_mesh\' class="models" title="3D Model 1" src="js-plugins/tdhop/skins/icons/models.png"/><br/-->\n\n   <div id="tdhlg"></div>\n   <!--MEASURE-->\n   <div id="measure-box" ng-click="onEndMeasure(\'measure-box\')" class="output-box">Measured length<hr/><span id="measure-output" ng-click="onEndMeasure(\'measure-output\')" class="output-text" onmousedown="event.stopPropagation()">0.0</span></div>\n   <!--MEASURE-->\n   <!--POINT PICKING-->\n   <div id="pickpoint-box" ng-click="onEndPick(\'pickpoint-box\')" class="output-box">XYZ picked point<hr/><span id="pickpoint-output" ng-click="onEndMeasure(\'pickpoint-output\')" class="output-text" onmousedown="event.stopPropagation()">[ 0 , 0 , 0 ]</span></div>\n   <!--POINT PICKING-->\n   <!--SECTIONS-->\n   <div id="sections-box" ng-click="sectiontoolInit" class="output-box">\n      <table class="output-table" onmousedown="event.stopPropagation()">\n      <tr><td>Plane</td><td>Position</td><td>Flip</td></tr>\n      <tr>\n         <td><img   id="xplane_on"    title="Disable X Axis Section" src="js-plugins/tdhop/skins/icons/sectionX_on.png" onclick="sectionxSwitch()" style="position:absolute; visibility:hidden; border:1px inset;"/>\n            <img   id="xplane"       title="Enable X Axis Section"  src="js-plugins/tdhop/skins/icons/sectionX.png"  onclick="sectionxSwitch()"/><br/></td>\n         <td><input id="xplaneSlider" class="output-input"  type="range"    title="Move X Axis Section Position"/></td>\n         <td><input id="xplaneFlip"   class="output-input"  type="checkbox" title="Flip X Axis Section Direction"/></td></tr>\n      <tr>\n         <td><img   id="yplane_on"    title="Disable Y Axis Section" src="js-plugins/tdhop/skins/icons/sectionY_on.png" onclick="sectionySwitch()" style="position:absolute; visibility:hidden; border:1px inset;"/>\n            <img   id="yplane"       title="Enable Y Axis Section"  src="js-plugins/tdhop/skins/icons/sectionY.png"  onclick="sectionySwitch()"/><br/></td>\n         <td><input id="yplaneSlider" class="output-input"  type="range"    title="Move Y Axis Section Position"/></td>\n         <td><input id="yplaneFlip"   class="output-input"  type="checkbox" title="Flip Y Axis Section Direction"/></td></tr>\n      <tr>\n         <td><img   id="zplane_on"    title="Disable Z Axis Section" src="js-plugins/tdhop/skins/icons/sectionZ_on.png" onclick="sectionzSwitch()" style="position:absolute; visibility:hidden; border:1px inset;"/>\n            <img   id="zplane"       title="Enable Z Axis Section"  src="js-plugins/tdhop/skins/icons/sectionZ.png"  onclick="sectionzSwitch()"/><br/></td>\n         <td><input id="zplaneSlider" class="output-input"  type="range"    title="Move Y Axis Section Position"/></td>\n         <td><input id="zplaneFlip"   class="output-input"  type="checkbox" title="Flip Z Axis Section Direction"/></td></tr></table>\n      <table class="output-table" onmousedown="event.stopPropagation()" style="text-align:right;">\n      <tr>\n      <td>Show planes<input id="showPlane" class="output-input" type="checkbox" title="Show Section Planes" style="bottom:-3px;"/></td>\n      <td>Show edges<input  id="showBorder" class="output-input" type="checkbox" title="Show Section Edges" style="bottom:-3px;"/></td></tr></table>\n   </div>\n   <canvas id="draw-canvas" style="background-image: url(js-plugins/tdhop/skins/backgrounds/light.jpg);"></canvas>\n</div>\n');
   }]), angular.module("src/toc/toc.dir.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/toc/toc.dir.tmpl.html", '<div class="toc">\n    <div class="toc_doc" ng-repeat="doc in vm.docs" ng-class="{ \'open\' : vm.open[doc.value] }">\n        <span class="toc_doc_head"\n            ng-click="vm.openDetails(doc.value)"\n            ng-class="{ \'open\' : vm.open[doc.value] }">{{doc.title}}</span>\n        <div ng-class="{ \'open\' : vm.open[doc.value] }" class="toc_doc_details">\n            <div ng-if="doc.divs.length > 0">\n                <span class="list_head">{{ \'TOC.DIVS\' | translate }}</span>\n                <ul ng-repeat="key in vm.keys">\n                    <span class="list_head_sub"\n                            ng-if="doc.divs[key].length > 0">{{ \'TOC.\' + key.toUpperCase() | translate }}</span>\n                  <li ng-repeat="div in doc.divs[key]"\n                      ng-click="vm.goToDiv(doc.value, div)">\n                      <span class="indexLink">{{vm.divs[div].title}}</span>\n                      <ul ng-if="vm.subDivs[div].length > 0">\n                          <li ng-repeat="subDiv in vm.subDivs[div]"\n                              ng-click="vm.goToDiv(doc.value, subDiv)">\n                              <span class="indexLink">{{vm.divs[subDiv].title}}</span>\n                          </li>\n                      </ul>\n                  </li>\n                </ul>\n            </div>\n            <div ng-if="doc.pages.length > 0">\n                <span class="list_head">{{ \'TOC.PAGES\' | translate }}</span>\n                <ul>\n                    <li ng-repeat="page in doc.pages"\n                        ng-click="vm.goToPage(doc.value, page)">\n                        <span class="indexLink">{{page}}</span>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>')
   }]), angular.module("src/versionApparatusEntry/versionApparatusEntry.directive.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/versionApparatusEntry/versionApparatusEntry.directive.tmpl.html", '<div\n    class="version-apparatus-entry"\n    ng-class="{ \'noTools\' : (scopeViewMode !== \'collation\' && scopeViewMode !== \'readingTxt\' && scopeViewMode !== \'versions\') && !vm.isPinAvailable()}">\n    <div\n        class="version-apparatus-entry_main-content">\n        \n        <div\n            class="version-apparatus-entry_tools"\n            ng-if="(scopeViewMode === \'collation\' || scopeViewMode === \'readingTxt\' || scopeViewMode === \'versions\')">\n            <!--|| vm.isPinAvailable() ADD HERE-->\n            <!--button-switch \n                title="Remove Pin"\n                ng-if="vm.isPinAvailable() && vm.type === \'pinned\'"\n                data-label=""\n                data-icon="remove"\n                data-type="pinReading"\n                ng-click="vm.togglePin()"></button-switch>\n            <button-switch \n                title="Toggle Pin"\n                ng-if="vm.isPinAvailable() && vm.type === \'default\'"\n                data-label=""\n                data-icon="pin"\n                data-type="pinReading"\n                ng-class="{\'active\' : vm.isPinned()}"\n                ng-click="vm.togglePin()"></button-switch-->\n            <button-switch \n                title="{{ \'BUTTONS.ALIGN_VERSION_READINGS\' | translate }}"\n                ng-if="scopeViewMode === \'collation\' || scopeViewMode === \'versions\'"\n                data-label=""\n                data-icon="v-align"\n                data-type="alignReadings"\n                ng-click="vm.alignReadings()"></button-switch>\n        </div>\n        <div\n            class="versions-lemmas">\n            <span\n                ng-repeat="version in ::vm.content.versions">\n                <!--TODO: change to evt-ref-->\n                <evt-version-ref\n                    data-target="{{::version.value}}"\n                    data-type="version"\n                    data-el-id="{{vm.currentVer}}"\n                    class="version-label"></evt-version-ref>\n                <span\n                    class="version-lem"\n                    compile="version.lem"></span>\n            </span>\n        </div>\n    </div>\n    <div\n        class="version-apparatus-entry_other-content"\n        ng-if="vm.tabs._indexes.length > 0">\n        <div\n            class="version-apparatus-entry_other-content_headers"\n            ng-class="{ \'closed\' : vm._subContentOpened === \'\'}">\n            <span ng-repeat="tab in ::vm.tabs._indexes"\n                ng-click="vm.toggleSubContent(tab)"\n                ng-class="{ \'active\' : vm._subContentOpened == tab }">\n                {{ vm.tabs[tab].label | translate }}\n            </span>\n        </div>\n        <div\n            class="version-apparatus-entry_other-content_panels"\n            ng-class="{ \'closed\' : vm._subContentOpened === \'\'}">\n            <div\n                class="version-apparatus-entry_other-content_panel"\n                ng-repeat="tab in ::vm.tabs._indexes"\n                ng-class="{ \'active\' : vm._subContentOpened == tab}"\n                ng-switch="::tab">\n                <div ng-switch-when="criticalNote"\n                    compile="vm.content.note">\n                </div>\n                <div ng-switch-when="readings">\n                    <div\n                        ng-repeat="version in ::vm.content.versions"\n                        ng-if="::vm.content._readings">\n                        <span compile="version.id"></span>\n                        <span\n                            ng-if="::version.significantReadings.length > 0"\n                            class="significant-readings_label"> {{ \'VERSIONS.SIGNIFICANT_VARIANTS\' | translate}} </span>\n                        <ul ng-if="::version.significantReadings.length > 0">\n                            <li ng-repeat="reading in ::version.significantReadings"\n                                compile="reading.content"></li>\n                        </ul>\n                        <span\n                            ng-if="::version.notSignificantReadings.length > 0"\n                            class="not-significant-readings_label"> {{ \'VERSIONS.ORTHOGRAPHIC_VARIANTS\' | translate}} </span>\n                        <ul ng-if="::version.notSignificantReadings.length > 0">\n                            <li ng-repeat="reading in ::version.notSignificantReadings"\n                                compile="reading.content"></li>\n                        </ul>\n                    </div>\n                </div>\n                <div ng-switch-when="moreInfo">\n                    <!--BEGIN MORE INFO-->\n                    <span\n                        class="app_generic-info"\n                        ng-if="(vm.content.attributes._keys.length > 1 || vm.content.attributes._keys.length === 1 && vm.content.attributes._keys.indexOf(\'xml:id\') < 0)">\n                        {{ \'VERSIONS.METADATA_FOR_APP_ENTRY\' | translate}}\n                    </span>\n                    <ul ng-if="(vm.content.attributes._keys.length > 1 || vm.content.attributes._keys.length === 1 && vm.content.attributes._keys.indexOf(\'xml:id\') < 0)">\n                        <li ng-repeat="attr in ::vm.content.attributes._keys"\n                            ng-if="::attr !== \'xml:id\'">\n                            <span class="moreInfo-label">{{::attr}}</span> {{::vm.content.attributes.values[attr]}}\n                        </li>\n                    </ul>\n                    <span class="moreInfo-metadataTitle">{{ \'VERSIONS.MORE_INFO_ABOUT_READING\' | translate}}</span>\n                    <ul>\n                        <li \n                            class="app_version"\n                            ng-repeat="version in ::vm.content.versions"\n                            ng-if="::version.attributes._keys.length > 0  && version.attributes._keys.indexOf(\'xml:id\') < 0">\n                            <span>\n                                {{ \'VERSIONS.METADATA_FOR\' | translate}} \n                                <em \n                                    compile="version.id"></em> \n                            </span>\n                            <ul>\n                                <li ng-repeat="attr in ::version.attributes._keys"\n                                    ng-if="::attr !== \'xml:id\'">\n                                    <span class="moreInfo-label">{{::attr}}</span> {{::version.attributes.values[attr]}}\n                                </li>\n                            </ul>\n                            <span\n                                ng-if="::version.significantReadings.length > 0"\n                                ng-repeat-start="reading in ::version.significantReadings">{{ \'VERSIONS.METADATA_FOR_SIGNIFICANT_READING\' | translate}}:\n                                <em compile="reading.content"></em>\n                            </span>\n                            <ul ng-repeat-end\n                                ng-if="::version.significantReadings.length > 0">\n                                <li ng-repeat="attr in ::reading.attributes._keys"\n                                    ng-if="::attr !== \'xml:id\'">\n                                    <span class="moreInfo-label">{{::attr}}</span> {{::reading.attributes.values[attr]}}\n                                </li>\n                            </ul>\n                            <span\n                                ng-if="::version.notSignificantReadings.length > 0"\n                                ng-repeat-start="reading in ::version.notSignificantReadings">{{ \'VERSIONS.METADATA_FOR_ORTHOGRAPHIC_READING\' | translate}}:\n                                <em compile="reading.content"></em>\n                            </span>\n                            <ul ng-repeat-end\n                                ng-if="::version.notSignificantReadings.length > 0">\n                                <li ng-repeat="attr in ::reading.attributes._keys"\n                                    ng-if="::attr !== \'xml:id\'">\n                                    <span class="moreInfo-label">{{::attr}}</span> {{::reading.attributes.values[attr]}}\n                                </li>\n                            </ul>\n                      </li>\n                  </ul>\n                  <!--END MORE INFO-->\n                </div>\n                <div ng-switch-when="xmlSource">\n                    <pre>{{ ::vm.content._xmlSource | prettyXml }}</pre>\n                </div>\n                <div ng-switch-default\n                    compile="vm.content[tab]">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>')
   }]), angular.module("src/versionApparatusEntry/versionRef.directive.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/versionApparatusEntry/versionRef.directive.tmpl.html", '<span\n    class="evt-version-ref"\n    title="{{vm.title | translate}}"\n    ng-click="vm.callback()"\n    ng-class="{ \'selected\' : vm.elId === vm.target, \'not-select\': vm.elId === vm.ver }">\n    <span\n        class="evt-version-ref_text"\n        compile="vm.id"\n        ng-class="{ \'selected\' : vm.elId === vm.target, \'not-select\': vm.target === vm.ver }">\n    </span>\n</span>')
   }]), angular.module("src/versionReading/versionReading.directive.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/versionReading/versionReading.directive.tmpl.html", '<span\n    class="version-reading"\n    ng-mouseover="vm.toggleOverAppEntries($event)"\n    ng-mouseout="vm.toggleOverAppEntries($event)"\n    ng-class="{ \'blurred\'  : $parent.vm.state.topBoxOpened,\n                \'over\'     : vm.over,\n                \'selected\' : vm.isSelect() && !$parent.vm.state.topBoxOpened}">\n    <span\n        class="version-reading_text"\n        ng-click="vm.callbackClick($event);"\n        ng-mouseover="vm.highlightOn()"\n        ng-mouseout="vm.highlightOff()"\n        ng-class="{ \'over\'     : vm.over && !vm.isSelect(),\n                    \'selected\' : vm.isSelect() && !$parent.vm.state.topBoxOpened}"\n        ng-transclude>\n    </span>\n    <evt-version-apparatus-entry\n        ng-if="vm.isScopeRecensioAvailable() && vm.apparatus.opened"\n        ng-class="{\'blurred\': $parent.vm.state.topBoxOpened}"\n        data-app-id="{{::vm.appId}}"\n        data-reading-id="{{::vm.readingId}}"\n        data-scope-wit="{{::vm.scopeWit}}"\n        data-scope-ver="{{::vm.scopeVer}}"></evt-version-apparatus-entry>\n</span>')
   }]), angular.module("src/visColl/visColl.directive.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("src/visColl/visColl.directive.tmpl.html", '<!-- <script type="text/javascript" src="./src/visColl/SaxonJS.min.js"></script> -->\n<div class="selectorDiv">\n    <form name="quireForm" class="quireSelector">\n        <label for="quireSelect">{{ \'VISCOLL.SELECT_QUIRE\' | translate }}:</label>\n        <evt-select ng-if="vm.quireOptions && vm.quireOptions.length > 0"\n            data-id="viscoll_quire" data-smaller="true"\n            data-type="generic" data-empty-option="true"\n			data-options="vm.quireOptions" \n			data-init="{{vm.selectedQuire.value}}"\n			on-option-selected="vm.setSelectedQuire(option)">\n        </evt-select>\n	</form>\n</div>\n<div class="viscollItemsContainer">\n    <div class="viscollContainer" id="{{quireId}}"\n		ng-repeat="quireId in vm.svgCollection.quires._indexes track by $index"\n    	ng-show="vm.isSelectedQuire(quireId)"\n    	ng-class="{\'selected\' : vm.isSelectedQuire(quireId) }">\n        <div class="viscollItem-leftContainer">\n			<span class="quireNumber">{{ \'VISCOLL.QUIRE_NUM\' | translate }} {{vm.svgCollection.quires[quireId].n}}</span>\n	        <div class="visCollValue" type="image/svg+xml" \n	            compile="::vm.getSvgByQuire(quireId)">\n	        </div>\n	    </div>\n        <div class="viscollItem-rightContainer">\n	        <div class="selectorViscoll">\n				<span class="viscollNumber">\n					{{ \'VISCOLL.UNIT\' | translate }}:\n				</span>\n				<evt-select ng-if="vm.svgCollection.quires[quireId].leavesList && vm.svgCollection.quires[quireId].leavesList.length > 0"\n					data-id="folioSelect_{{$index}}" data-smaller="true"\n					data-type="generic" data-empty-option="true" \n					data-init="{{vm.selectedFolios[quireId].value}}"\n					data-selected-option="{{vm.selectedFolios[quireId].value}}"\n					data-options="::vm.svgCollection.quires[quireId].leavesList" \n					on-option-selected="vm.setSelectedFolioForQuire(quireId, option)">\n				</evt-select>\n	        </div>\n	        <div class="imgSelectorViscoll" \n	        	ng-if="vm.selectedFolios[quireId]">\n				<figure class="thumbnail thumb_single second_unit {{vm.svgCollection.quires[quireId].leaves[vm.selectedFolios[quireId].conjoin].mode}}" \n					ng-click="vm.updateCurrentPage(vm.selectedFolios[quireId].conjoinId)">\n					<img class="thumb_single_img"\n						onerror="this.setAttribute(\'src\', \'images/empty-image.jpg\')"\n						ng-src="{{vm.selectedFolios[quireId].imgConjoin || \'images/empty-image.jpg\'}}"\n						title="{{ vm.selectedFolios[quireId].conjoinId ? \'BUTTONS.GO_TO_PAGE\' : \'\' | translate }}"\n						></img>\n					<figcaption ng-if="vm.svgCollection.quires[quireId].leaves[vm.selectedFolios[quireId].conjoin].mode !== \'notLeaf\'">\n						{{ vm.selectedFolios[quireId].conjoinId || \n						(vm.svgCollection.quires[quireId].leaves[vm.selectedFolios[quireId].conjoin].mode === \'original\' ? \'NO_INFO\' : vm.svgCollection.quires[quireId].leaves[vm.selectedFolios[quireId].conjoin].mode) || \n						\'NO_INFO\' | translate}}</figcaption>\n					<figcaption ng-if="vm.svgCollection.quires[quireId].leaves[vm.selectedFolios[quireId].conjoin].mode === \'notLeaf\'">\n						<i class="icon fa fa-remove"></i></figcaption>\n				</figure>\n				<figure class="thumbnail thumb_single first_unit {{vm.svgCollection.quires[quireId].leaves[vm.selectedFolios[quireId].value].mode}}" \n					ng-click="vm.updateCurrentPage(vm.selectedFolios[quireId].imageId)">\n					<img class="thumb_single_img" \n						onerror="this.setAttribute(\'src\', \'images/empty-image.jpg\')"\n						ng-src="{{vm.selectedFolios[quireId].img || \'images/empty-image.jpg\'}}"\n						title="{{ vm.selectedFolios[quireId].imageId ? \'BUTTONS.GO_TO_PAGE\' : \'\' | translate }}"></img>\n					<figcaption ng-if="vm.svgCollection.quires[quireId].leaves[vm.selectedFolios[quireId].value].mode !== \'notLeaf\'">{{vm.selectedFolios[quireId].imageId || \n						(vm.svgCollection.quires[quireId].leaves[vm.selectedFolios[quireId].value].mode === \'original\' ? \'NO_INFO\' : vm.svgCollection.quires[quireId].leaves[vm.selectedFolios[quireId].value].mode) || \n						\'NO_INFO\' | translate}}</figcaption>\n					<figcaption ng-if="vm.svgCollection.quires[quireId].leaves[vm.selectedFolios[quireId].value].mode === \'notLeaf\'">\n						<i class="icon fa fa-remove"></i></figcaption>\n				</figure>\n				<figure class="thumbnail thumb_single first_unit {{vm.svgCollection.quires[quireId].leaves[vm.selectedFolios[quireId].value].mode}}" \n					ng-click="vm.updateCurrentPage(vm.selectedFolios[quireId].imageId2)">\n					<img class="thumb_single_img" \n						onerror="this.setAttribute(\'src\', \'images/empty-image.jpg\')"\n						ng-src="{{vm.selectedFolios[quireId].img2 || \'images/empty-image.jpg\'}}"\n						title="{{ vm.selectedFolios[quireId].imageId2 ? \'BUTTONS.GO_TO_PAGE\' : \'\' | translate }}"></img>\n					<figcaption ng-if="vm.svgCollection.quires[quireId].leaves[vm.selectedFolios[quireId].value].mode !== \'notLeaf\'">\n						{{vm.selectedFolios[quireId].imageId2 || \n						(vm.svgCollection.quires[quireId].leaves[vm.selectedFolios[quireId].value].mode === \'original\' ? \'NO_INFO\' : vm.svgCollection.quires[quireId].leaves[vm.selectedFolios[quireId].value].mode) || \n						\'NO_INFO\' | translate}}</figcaption>\n					<figcaption ng-if="vm.svgCollection.quires[quireId].leaves[vm.selectedFolios[quireId].value].mode === \'notLeaf\'">\n						<i class="icon fa fa-remove"></i></figcaption>\n				</figure>\n				<figure class="thumbnail thumb_single second_unit {{vm.svgCollection.quires[quireId].leaves[vm.selectedFolios[quireId].conjoin].mode}}" \n					ng-click="vm.updateCurrentPage(vm.selectedFolios[quireId].conjoinId2)">\n					<img class="thumb_single_img" \n						onerror="this.setAttribute(\'src\', \'images/empty-image.jpg\')"\n						ng-src="{{vm.selectedFolios[quireId].imgConjoin2 || \'images/empty-image.jpg\'}}"\n						title="{{ vm.selectedFolios[quireId].conjoinId2 ? \'BUTTONS.GO_TO_PAGE\' : \'\' | translate }}"></img>\n					<figcaption ng-if="vm.svgCollection.quires[quireId].leaves[vm.selectedFolios[quireId].conjoin].mode !== \'notLeaf\'">\n						{{vm.selectedFolios[quireId].conjoinId2 || \n						(vm.svgCollection.quires[quireId].leaves[vm.selectedFolios[quireId].conjoin].mode === \'original\' ? \'NO_INFO\' : vm.svgCollection.quires[quireId].leaves[vm.selectedFolios[quireId].conjoin].mode) || \n						\'NO_INFO\' | translate}}</figcaption>\n					<figcaption ng-if="vm.svgCollection.quires[quireId].leaves[vm.selectedFolios[quireId].conjoin].mode === \'notLeaf\'">\n						<i class="icon fa fa-remove"></i></figcaption>\n				</figure>\n	        </div>\n	        <div  class="imgSelectorViscoll_empty" \n	        	ng-if="!vm.selectedFolios[quireId]">\n	        	<span>{{ \'VISCOLL.SELECT_UNIT_MSG\' | translate }}</span>\n	        </div>\n	    </div>\n    </div>\n</div>')
   }]), angular.module("evtviewer", ["ngAnimate", "ngCookies", "ngMessages", "ngResource", "ngSanitize", "ngTouch", "templates-main", "ngRoute", "rzModule", "xml", "ngXslt", "prettyXml", "infinite-scroll", "pascalprecht.translate", "oc.lazyLoad", "evtviewer.core", "evtviewer.communication", "evtviewer.translation", "evtviewer.dataHandler", "evtviewer.interface", "evtviewer.box", "evtviewer.select", "evtviewer.buttonSwitch", "evtviewer.popover", "evtviewer.namedEntity", "evtviewer.criticalApparatusEntry", "evtviewer.reading", "evtviewer.dialog", "evtviewer.bibliography", "evtviewer.reference", "evtviewer.list", "evtviewer.quote", "evtviewer.tabsContainer", "evtviewer.sourcesApparatusEntry", "evtviewer.analogue", "evtviewer.analoguesApparatusEntry", "evtviewer.apparatuses", "evtviewer.versionReading", "evtviewer.versionApparatusEntry", "evtviewer.UItools", "evtviewer.navBar", "evtviewer.visColl", "evtviewer.search", "evtviewer.imageViewer", "evtviewer.toc", "ui-leaflet", "evtviewer.tdhop"]), angular.module("evtviewer.core", []), angular.module("evtviewer.core").constant("GLOBALDEFAULTCONF", {
    test: {
     active: !1
    },
    debugAllModules: !0,
    debugConf: {
     log: !0,
     info: !0,
     warn: !0,
     debug: !0
    },
    modules: {
     "interface": {
      active: !0
     }
    },
    configUrl: "config/config.json",
    dataUrl: "",
    logoUrl: "",
    enableXMLdownload: !0,
    sourcesUrl: "",
    sourcesTextsUrl: "",
    visCollSvg: "",
    analoguesUrl: "",
    visCollTextUrl: "",
    visCollImageList: "",
    visCollStyleUrl: "",
    visCollDataModel: "",
    preferredWitness: "A",
    skipWitnesses: "",
    indexTitle: "EVT Critical Viewer",
    webSite: "",
    editionType: "critical",
    defaultEdition: "critical",
    showEditionLevelSelector: !0,
    availableEditionLevel: [{
     value: "critical",
     label: "Critical",
     title: "Critical edition",
     visible: !0
    }, {
     value: "diplomatic",
     label: "Diplomatic",
     title: "Diplomatic edition",
     visible: !0
    }, {
     value: "interpretative",
     label: "Interpretative",
     title: "Interpretative edition",
     visible: !0
    }],
    showDocumentSelector: !0,
    defaultViewMode: "readingTxt",
    availableViewModes: [{
     label: "READING_TEXT",
     icon: "reading-txt",
     viewMode: "readingTxt",
     visible: !0
    }, {
     label: "MULTIPLE_RECENSIONS",
     icon: "mode-versions",
     viewMode: "versions",
     visible: !0
    }, {
     label: "IMAGE_TEXT",
     icon: "mode-imgTxt",
     viewMode: "imgTxt",
     visible: !0
    }, {
     label: "TEXT_TEXT",
     icon: "mode-txtTxt",
     viewMode: "txtTxt",
     visible: !1
    }, {
     label: "COLLATION",
     icon: "mode-collation",
     viewMode: "collation",
     visible: !0
    }, {
     label: "SOURCE_TEXT",
     icon: "mode-srcTxt",
     viewMode: "srcTxt",
     visible: !0
    }, {
     label: "3DHOP",
     icon: "mode-tdhop",
     viewMode: "tdhop",
     visible: !0
    }],
    toolHeatMap: !0,
    toolPinAppEntries: !1,
    toolImageTextLinking: !0,
    listDef: "<listWit>, <listChange>",
    versionDef: "<witness>, <change>",
    fragmentMilestone: "<witStart>, <witEnd>",
    lacunaMilestone: "<lacunaStart>, <lacunaEnd>",
    possibleVariantFilters: "type, cause, hand",
    possibleLemmaFilters: "resp, cert",
    notSignificantVariant: "<orig>, <sic>, [type=orthographic]",
    loadCriticalEntriesImmediately: !0,
    maxWitsLoadTogether: 5,
    versions: [],
    witnessesGroups: [{
     groupName: "Grp_1",
     witnesses: ["V", "P", "N", "M", "G", "C", "R"]
    }, {
     groupName: "Grp_2",
     witnesses: ["F", "D", "O", "W", "M5mg", "B", "U"]
    }],
    quoteDef: "<quote>",
    analogueDef: "<seg>,<ref[type=parallelPassage]>",
    showReadingExponent: !0,
    showInlineCriticalApparatus: !0,
    showInlineSources: !1,
    showInlineAnalogues: !1,
    variantColors: {},
    filterColors: {},
    genericColors: ["rgb(206, 192, 252)", "rgb(238, 194, 66)", "rgb(253, 153, 54)", "rgb(253, 95, 58)", "rgb(235, 77, 153)", "rgb(252, 144, 172)", "rgb(171, 99, 219)", "rgb(67, 135, 217)", "rgb(163, 207, 81)", "rgb(238, 194, 66)", "rgb(228, 99, 220)", "rgb(124, 113, 232)"],
    variantColorLight: "rgb(208, 220, 255)",
    variantColorDark: "rgb(101, 138, 255)",
    heatmapColor: "rgb(255, 108, 63)",
    xsltUrl: "",
    defaultBibliographicStyle: "Chicago",
    allowedBibliographicStyles: {
     Chicago: {
      label: "Chicago",
      enabled: !0
     },
     APA: {
      label: "APA",
      enabled: !1
     },
     MLA: {
      label: "MLA",
      enabled: !0
     }
    },
    bibliographicEntriesSortBy: {
     Author: "BIBLIOGRAPHY.AUTHOR",
     Year: "BIBLIOGRAPHY.YEAR",
     Title: "BIBLIOGRAPHY.TITLE",
     Publisher: "BIBLIOGRAPHY.PUBLISHER"
    },
    bibliographySortOrder: {
     ASC: "BIBLIOGRAPHY.ASC",
     DESC: "BIBLIOGRAPHY.DESC"
    },
    namedEntitiesSelector: !0,
    namedEntitiesToHandle: [],
    otherEntitiesToHandle: [],
    languages: ["en", "it"],
    showObjectSelector: !0,
    tdhopViewerOptions: {
     name: "Bewcastle",
     url: "data/3Dmodels/multires/bewcastle.nxz",
     mesh: "Bewcastle",
     toolHome: !0,
     toolZoomin: !0,
     toolZoomout: !0,
     toolLighting: !0,
     toolLightControl: !0,
     toolMeasure: !0,
     toolPickPoint: !0,
     toolPlaneSections: !0,
     toolSolidColor: !0,
     toolCamera: !0,
     toolFullScreen: !0
    }
   }), angular.module("evtviewer.core").provider("Utils", function() {
    this.deepExtend = function(a, b) {
     for (var c in b) b[c] && b[c].constructor && b[c].constructor === Object ? (a[c] = a[c] || {}, arguments.callee(a[c], b[c])) : a[c] = angular.copy(b[c]);
     return a
    }, this.deepExtendSkipDefault = function(a, b) {
     for (var c in b) b[c] && b[c].constructor && b[c].constructor === Object ? (a[c] = a[c] || {}, arguments.callee(a[c], b[c])) : "dataUrl" === c ? "" !== b[c] && (a[c] = angular.copy(b[c])) : "NONE" === b[c] || "NULL" === b[c] ? a[c] = "" : "" !== b[c] && (a[c] = angular.copy(b[c]));
     return a
    }, this.getElementsBetweenTree = function(a, b) {
     for (var c, d = this.getCommonAncestor(a, b), e = []; a.parentNode !== d;) {
      for (c = a; c.nextSibling;) e.push(c = c.nextSibling);
      a = a.parentNode
     }
     for (var f = []; b.parentNode !== d;) {
      for (c = b; c.previousSibling;) f.push(c = c.previousSibling);
      b = b.parentNode
     }
     for (f.reverse();
      (a = a.nextSibling) !== b;) e.push(a);
     return e.concat(f)
    }, this.getCommonAncestor = function(a, b) {
     for (var c = $(a).parents().andSelf(); b;) {
      var d = c.index(b);
      if (-1 !== d) return b;
      b = b.parentNode
     }
     return null
    }, this.isNestedInElem = function(a, b) {
     return null !== a.parentNode && void 0 !== a.parentNode && a.parentNode.tagName ? "text" === a.parentNode.tagName ? !1 : a.parentNode.tagName.toLowerCase() === b.toLowerCase() ? !0 : this.isNestedInElem(a.parentNode, b) : !1
    }, this.isNestedInClassElem = function(a, b) {
     return null !== a.parentNode && void 0 !== a.parentNode && a.parentNode.className ? "" === a.parentNode.className ? !1 : a.parentNode.className.indexOf(b) >= 0 ? !0 : this.isNestedInElem(a.parentNode, b) : !1
    };
    var a = function() {
     var a = Math.floor(256 * Math.random()).toString(16);
     return ("0" + String(a)).substr(-2)
    };
    this.getRandomColor = function(b) {
     if ("hex" === b) return "#" + a() + a() + a();
     if ("rgb" === b) {
      var c = 5,
       d = [256 * Math.random(), 256 * Math.random(), 256 * Math.random()],
       e = [51 * c, 51 * c, 51 * c],
       f = [d[0] + e[0], d[1] + e[1], d[2] + e[2]].map(function(a) {
        return Math.round(a / 2)
       });
      return "rgb(" + f.join(",") + ")"
     }
    }, this.decodeHTMLEntities = function(a) {
     var b = document.createElement("div");
     return a && "string" == typeof a && (a = a.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, ""), a = a.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, ""), b.innerHTML = a, a = b.textContent, b.textContent = ""), b = void 0, a
    }, this.cleanText = function(a) {
     return a = this.cleanPunctuation(a), a = this.cleanSpace(a)
    }, this.cleanSpace = function(a) {
     for (var b, c = /\s\s/; a.match(c);) b = a.replace(c, " "), a = b;
     return " " === a.charAt(0) && (a = a.substring(1)), a
    }, this.cleanPunctuation = function(a) {
     for (var b, c = /[.,#!$%\^&\*;:{}\[\]\'\"=\-_`~()]/; a.match(c);) b = a.replace(c, ""), a = b;
     return a
    }, this.replaceStringAt = function(a, b, c, d, e) {
     return a.slice(0, d) + a.slice(d, e).replace(b, c) + a.slice(e)
    }, this.$get = function() {
     return {
      deepExtend: this.deepExtend,
      deepExtendSkipDefault: this.deepExtendSkipDefault,
      getRandomColor: this.getRandomColor,
      cleanText: this.cleanText,
      cleanSpace: this.cleanSpace,
      cleanPunctuation: this.cleanPunctuation,
      replaceStringAt: this.replaceStringAt,
      DOMutils: {
       getElementsBetweenTree: this.getElementsBetweenTree,
       getCommonAncestor: this.getCommonAncestor,
       isNestedInElem: this.isNestedInElem,
       isNestedInClassElem: this.isNestedInClassElem,
       decodeHTMLEntities: this.decodeHTMLEntities
      }
     }
    }
   }), angular.module("evtviewer.core").constant("BASECONFIG", {
    debug: !1
   }).provider("config", ["UtilsProvider", "GLOBALDEFAULTCONF", "BASECONFIG", function(a, b, c) {
    var d = {};
    a.deepExtend(d, b), "undefined" != typeof window.globalConfig && angular.isObject(window.globalConfig) && a.deepExtend(d, window.globalConfig), "undefined" == typeof window.GLOBALCONFIG && (window.GLOBALCONFIG = d), this.makeDefaults = function(b, e) {
     var f = angular.copy(c);
     return "undefined" != typeof e && a.deepExtend(f, e), "undefined" != typeof d.modules[b] && a.deepExtend(f, d.modules[b]), d.modules[b] = f, f
    }, this.isValid = function() {
     return !0
    }, this.isModuleActive = function(a) {
     return angular.isObject(d.modules[a]) && d.modules[a].active === !0
    }, this.extendDefault = function(b) {
     a.deepExtendSkipDefault(d, b)
    }, this.$get = function() {
     return d.isValid = this.isValid, d.isModuleActive = this.isModuleActive, d.extendDefault = this.extendDefault, d
    }
   }]), angular.module("evtviewer.core").run(["$log", "config", function(a, b) {
    function c(c, d, e) {
     return function() {
      var f, g = a.enabledContexts[e],
       h = b.modules[e];
      if (b.debugConf[d] !== !1 && (f = "undefined" != typeof g ? g : "undefined" != typeof h && "undefined" != typeof h.debug ? h.debug : !1, b.debugAllModules === !0 || f === !0)) {
       var i = Array.prototype.slice.call(arguments);
       i.unshift("#" + e + "#"), c.apply(null, i)
      }
     }
    }
  
    function d(a, b) {
     return function() {
      var c = function() {
        try {
         throw Error("")
        } catch (a) {
         return a
        }
       },
       d = c(),
       e = d.stack.split("\n")[4],
       f = Array.prototype.slice.call(arguments);
      f.unshift("#EVTViewer " + b + "#"), f.push(e), a.apply(null, f)
     }
    }
    a.enabledContexts = [], a.getInstance = function(b) {
     return {
      log: c(a.log, "log", b),
      info: c(a.info, "info", b),
      warn: c(a.warn, "warn", b),
      debug: c(a.debug, "debug", b),
      error: d(a.error, b),
      enableLogging: function(c) {
       a.enabledContexts[b] = c
      }
     }
    }
   }]), angular.module("evtviewer.core").service("eventDispatcher", ["$q", function(a) {
    var b = {},
     c = {};
    return b.sendEvent = function(b, d) {
     var e, f = [],
      g = [],
      h = 0;
     return c[b] && angular.forEach(c[b], function(b) {
      "undefined" != typeof b && (e = {
       args: d,
       resolve: function(a) {
        h < g.length && (g[h].resolve(a), h++)
       },
       reject: function(a) {
        h < g.length && (g[h].reject(a), h++)
       }
      }, g.push(a.defer()), b.apply(null, [e]))
     }), f = g.map(function(a) {
      return a.promise
     }), a.all(f)
    }, b.addListener = function(a, b) {
     return c[a] || (c[a] = []), c[a].push(b), [a, b]
    }, b.addListeners = function(a, c) {
     var d = [];
     for (var e in a) d.push(b.addListener(a[e], c));
     return d
    }, b.removeListener = function(a) {
     var b = a[0],
      d = a[1];
     c[b] && angular.forEach(c[b], function(a, e) {
      a === d && (c[b].splice(e, 1), 0 === c[b].length && delete c[b])
     })
    }, b.getListeners = function() {
     var a = [];
     for (var b in c) a.push(b);
     return a
    }, b
   }]), angular.module("evtviewer.core").config(["$compileProvider", function(a) {
    a.directive("compile", ["$compile", function(a) {
     return function(b, c, d) {
      b.$watch(function(a) {
       return a.$eval(d.compile)
      }, function(d) {
       c.html(d), a(c.contents())(b)
      })
     }
    }])
   }]), angular.module("evtviewer.core").filter("capitalize", function() {
    return function(a, b) {
     var c = b ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
     return a && a.replace ? a.replace(c, function(a) {
      return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase()
     }) : ""
    }
   }).filter("camelToSpaces", function() {
    return function(a, b) {
     return a && a.replace ? a.replace(/\s+/g, " ").replace(/([a-z\d])([A-Z])/g, "$1 $2") : ""
    }
   }).filter("underscoresToSpaces", function() {
    return function(a, b) {
     return a && a.replace ? a.replace(/\_+/g, " ") : ""
    }
   }).filter("uppercase", function() {
    return function(a, b) {
     return a && a.toUpperCase ? a.toUpperCase() : ""
    }
   }).filter("stringtohtml", function() {
    return function(a, b) {
     return a && a.replace ? a.replace(/="[^"]+"/g, function(a) {
      return a.replace(/&lt;/g, "<").replace(/&gt;/g, ">")
     }) : ""
    }
   }), angular.module("evtviewer.core").constant("XPATH", {
    getLineNodes: ".//node()[self::lb or self::p or self::pb or self::head]",
    getParLineNodes: ".//node()[self::p or self:l or self::pb or self::head]",
    getPrevLb: "count(.//preceding::lb[ancestor::body])",
    getPrevBody: "count(.//preceding::body)",
    getPrevPb: "count(.//preceding::pb)",
    getDiplomaticNodes: ".//node()[self::lb or self::pb or self::g or self::text()][not((ancestor::corr or ancestor::reg or ancestor::expan or ancestor::ex))]",
    getDiplomaticChildNodes: ".//node()[self::g or self::pb or self::text()][not((ancestor::corr or ancestor::reg or ancestor::expan or ancestor::ex))]",
    getInterpretativeNodes: "//body//node()[self::lb or self::pb or self::g or self::text()][not(ancestor::sic or ancestor::orig or ancestor::abbr or ancestor::am)]",
    getInterpretativeChildNodes: ".//node()[self::g or self::pb or self::text()][not(ancestor::sic or ancestor::orig or ancestor::abbr or ancestor::am)]",
    getChildNodes: ".//node()[self::g or self::pb or self::text()]",
    getTextGlyphNodes: ".//node()[self::g or self::lb or self::pb or self::text()]",
    getGlyphNodes: ".//node()[self::g]",
    getCurrentTextNode: ".//ancestor::text[1]",
    ns: {
     getLineNodes: ".//node()[self::ns:lb or self::ns:p or self::ns:pb or self::ns:head]",
     getParLineNodes: ".//node()[self::ns:p or self::ns:l or self::ns:pb or self::ns:head]",
     getPrevLb: "count(.//preceding::ns:lb[ancestor::ns:body])",
     getPrevBody: "count(.//preceding::ns:body)",
     getPrevP: "count(.//preceding::ns:p)",
     getDiplomaticNodes: ".//node()[self::ns:lb or self::ns:pb or self::ns:g or self::text()][not((ancestor::ns:corr or ancestor::ns:reg or ancestor::ns:expan or ancestor::ns:ex))]",
     getDiplomaticChildNodes: ".//node()[self::ns:g or self::ns:pb or self::text()][not((ancestor::ns:corr or ancestor::ns:reg or ancestor::ns:expan or ancestor::ns:ex))]",
     getInterpretativeNodes: ".//node()[self::ns:lb or self::ns:pb or self::ns:g or self::text()][not(ancestor::ns:sic or ancestor::ns:orig or ancestor::ns:abbr or ancestor::ns:am)]",
     getInterpretativeChildNodes: ".//node()[self::ns:g or self::ns:pb or self::text()][not(ancestor::ns:sic or ancestor::ns:orig or ancestor::ns:abbr or ancestor::ns:am)]",
     getChildNodes: ".//node()[self::ns:g or self::ns:pb or self::text()]",
     getTextGlyphNodes: ".//node()[self::ns:g or self::ns:lb or self::ns:pb or self::text()]",
     getGlyphNodes: ".//node()[self::ns:g]",
     getCurrentTextNode: ".//ancestor::ns:text[1]"
    }
   }), angular.module("evtviewer.dataHandler", []), angular.module("evtviewer.dataHandler").service("baseData", ["$log", "$q", "$http", "config", "xmlParser", "evtParser", "evtCriticalApparatusParser", "evtSourcesParser", "evtProjectInfoParser", "evtPrimarySourcesParser", "evtAnaloguesParser", "evtDialog", "evtBibliographyParser", "evtNamedEntitiesParser", "evtSearch", "evtHotSpotParser", "parsedData", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
    var r, s = {},
     t = {
      XMLDocuments: [],
      XMLExtDocuments: [],
      XMLSrcDocuments: [],
      XMLStrings: []
     },
     u = a.getInstance("baseData"),
     v = {};
    s.addXMLString = function(a) {
     var c = [];
     return c.push(w(a).promise), b.all(c)
    }, s.getXML = function() {
     return r
    }, s.getXMLDocuments = function() {
     return t.XMLDocuments
    }, s.getXMLStrings = function() {
     return t.XMLStrings
    };
    var w = function(a) {
     var c = b.defer();
     return a = a.replace(/<!--.*-->/gm, ""), r = e.parse(a), t.XMLStrings.push(a), y(r).promise.then(function() {
      t.XMLDocuments.push(r), x(r), u.log("XML TEI parsed and stored ", t.XMLDocuments), c.resolve("success")
     }), c.resolve("success"), c
    };
    s.addXMLExtDocument = function(a, b) {
     var c = e.parse(a);
     try {
      t.XMLStrings.push(a), t.XMLExtDocuments[b] = c, t.XMLExtDocuments.length++;
      f.parseExternalDocuments(c, b);
      u.log("External Files parsed and stored", t.XMLExtDocuments)
     } catch (d) {
      u.log("Something wrong with the supplementary XML files " + d)
     }
    }, s.addXMLSrcDocument = function(a, b) {
     var c = e.parse(a);
     try {
      t.XMLStrings.push(a), t.XMLSrcDocuments[b] = c, t.XMLSrcDocuments.length++;
      f.parseExternalDocuments(c, b);
      u.log("Source file parsed and stored", t.XMLSrcDocuments)
     } catch (d) {
      u.log("Something wrong with the supplementary XML files " + d)
     }
    }, s.handleViscollSvg = function(a, b) {
     var c = e.parse(a);
     f.parseSvgsForViscoll(c, b)
    }, s.addViscollDataModel = function(a) {
     var b = e.parse(a);
     f.parseViscollDatamodel(b)
    }, s.addViscollImageList = function(a) {
     var b = e.parse(a);
     f.parseViscollImageList(b)
    };
    var x = function(a) {
      if (f.analyzeEncoding(a), j.parseZones(a), p.parseHotSpots(a), f.parseDocuments(a), g.parseWitnesses(a), "" !== d.quoteDef) {
       var c = [];
       c.push(h.parseQuotes(a)), b.all(c).then(function() {
        "" === d.sourcesUrl ? h.parseSources(a) : h.parseSources(a, t.XMLExtDocuments.sources)
       })
      }
      "" !== d.analogueDef && ("" === d.analoguesUrl ? k.parseAnalogues(a, "") : k.parseAnalogues(a, t.XMLExtDocuments.analogues)), n.parseEntities(a), i.parseProjectInfo(a), m.parseBiblInfo(a), f.parseGlyphs(a), "internal" !== q.getEncodingDetail("variantEncodingLocation") && (d.loadCriticalEntriesImmediately && g.parseCriticalEntries(a), d.versions.length > 1 && g.parseVersionEntries(a))
     },
     y = function(a) {
      var f = b.defer(),
       g = d.dataUrl,
       h = 0,
       i = a.getElementsByTagName("xi:include");
      if (g = g.substring(0, g.lastIndexOf("/") + 1), i && i.length > 0) {
       var j = i.length;
       angular.forEach(i, function(a) {
        var b = g + a.getAttribute("href"),
         d = a.getAttribute("xpointer");
        c.get(b).then(function(b) {
         h++;
         var c, g = e.parse(b.data);
         if (d) {
          var i = angular.element(g)[0];
          z(d, i), c = v[d]
         } else c = g.getElementsByTagName("text")[0];
         a.parentNode.replaceChild(c, a), h === j && f.resolve("success")
        }, function(b) {
         var c = a.getElementsByTagName("fallback")[0],
          e = l.getById("errorMsg"),
          g = c ? c.innerHTML : "";
         g += '<div style="text-align:center;">Warning! <br/> EVT could not work properly.</div>', e.updateContent(g), e.setTitle(d + " - XI:INCLUDE ERROR"), e.open(), f.resolve("success")
        })
       })
      } else f.resolve("success");
      return f
     },
     z = function(a, b) {
      b.childNodes.forEach(function(b) {
       return b.attributes && b.hasAttribute("xml:id") && b.getAttribute("xml:id") === a ? (v[a] = b, b) : b.childNodes && b.childNodes.length > 0 ? z(a, b) : void 0
      })
     };
    return s
   }]), angular.module("evtviewer.dataHandler").service("parsedData", ["$log", "config", "Utils", function(a, b, c) {
    var d = {},
     e = a.getInstance("dataHandler");
    e.log("parsedData running");
    var f = {},
     g = {
      fileDescription: "",
      encodingDescription: "",
      textProfile: "",
      outsideMetadata: "",
      revisionHistory: "",
      msDesc: ""
     },
     h = {
      _indexes: []
     },
     i = {
      length: 0,
      _indexes: []
     },
     j = [],
     k = {
      svgs: {
       _indexes: []
      },
      quires: {
       _indexes: []
      },
      imglist: {
       _indexes: []
      },
      svgToLoad: [],
      loaded: !1
     },
     l = {
      _indexes: [],
      length: 0
     },
     m = {
      length: 0
     },
     n = {
      length: 0
     },
     o = {
      length: 0,
      _indexes: {
       corresp: {},
       subDivs: {},
       main: {}
      }
     },
     p = {
      _indexes: {
       witnesses: [],
       groups: [],
       encodingStructure: []
      }
     },
     q = b.genericColors,
     r = {
      filtersCollection: {
       filters: {},
       length: 0,
       forLemmas: 0,
       forVariants: 0,
       colors: []
      },
      __allLoaded: !1,
      _maxVariance: 0,
      _indexes: {
       encodingStructure: [],
       appEntries: [],
       exponents: [],
       depa: {
        start: {},
        end: {}
       }
      }
     },
     s = {},
     t = [],
     u = {
      _indexes: {
       encodingStructure: [],
       versionWitMap: {},
       versionId: {
        _name: {}
       }
      }
     },
     v = {},
     w = !1,
     x = {
      _indexes: []
     },
     y = {
      _indexes: []
     },
     z = {
      _indexes: []
     },
     A = {
      _collections: {
       _indexes: []
      },
      _indexes: []
     };
    d.getEncodingDetail = function(a) {
     return f[a]
    }, d.setEncodingDetail = function(a, b) {
     f[a] = b
    }, d.getNamedEntityTypeIcon = function(a) {
     var b;
     switch (a) {
      case "place":
      case "placeName":
       b = "fa-map-marker";
       break;
      case "person":
      case "pers":
      case "persName":
       b = "fa-user";
       break;
      case "org":
      case "orgName":
       b = "fa-users";
       break;
      case "relation":
       b = "fa-share-alt";
       break;
      default:
       b = "fa-list-ul"
     }
     return b
    }, d.addNamedEntitiesCollection = function(a) {
     var b = a.id;
     if (void 0 === A._collections[b]) {
      var c = a && a.type ? a.type : "generic",
       e = d.getNamedEntityTypeIcon(c);
      A._collections[b] = {
       _indexes: [],
       _listKeys: [],
       _title: a && a.title ? a.title : "",
       _type: c,
       _icon: e
      }, A._collections._indexes.push(b)
     }
    }, d.addNamedEntityInCollection = function(a, b, c) {
     var d = a.id;
     void 0 === A._collections[d] && this.addNamedEntitiesCollection(a), void 0 === A._collections[d][c] && (A._collections[d][c] = {
      _indexes: []
     }, A._collections[d]._listKeys.push(c));
     var e = b.id;
     A._collections[d][c][e] = b, A[e] = {
      collectionId: d,
      listKey: c
     }, A._indexes.push(e), A._collections[d]._indexes.push(e), A._collections[d][c]._indexes.push(e)
    }, d.getNamedEntities = function() {
     return A
    }, d.getNamedEntitiesCollection = function() {
     return A._collections
    }, d.getNamedEntitiesCollectionByName = function(a) {
     return A._collections[a]
    }, d.getNamedEntitiesCollectionByNameAndPos = function(a, b) {
     return A._collections[a][b]
    }, d.getNamedEntity = function(a) {
     var b;
     if (a) {
      var c = A[a];
      void 0 !== c && void 0 !== c.collectionId && void 0 !== c.listKey && void 0 !== A._collections[c.collectionId] && void 0 !== A._collections[c.collectionId][c.listKey] && (b = A._collections[c.collectionId][c.listKey][a])
     }
     return b
    }, d.getNamedEntityType = function(a) {
     var b = a && A[a] ? A[a].collectionId : void 0,
      c = d.getNamedEntitiesCollectionByName(b);
     return c ? c._type : "generic"
    };
    var B = {
      _indexes: {
       encodingStructure: [],
       sourcesRef: {
        _id: []
       }
      }
     },
     C = {
      _indexes: {
       encodingStructure: [],
       quotesRef: {
        _id: []
       },
       availableTexts: [],
       correspId: {}
      }
     },
     D = {
      _indexes: {
       encodingStructure: []
      },
      _refId: {
       _indexes: []
      }
     };
    d.addPage = function(a, b) {
     var c = a.value;
     if (void 0 === i.length && (i.length = 0), "" === a.value && (c = a.value = "page_" + (i.length + 1)), void 0 === i[c]) a.docs = [b], i[i.length] = c, a.indexInCollection = i.length, i[c] = a, i.length++, i._indexes.push(c);
     else {
      var d = i[c];
      d.docs && d.docs.indexOf(b) < 0 && d.docs.push(b)
     }
     b && "" !== b && void 0 !== l[b] && l[b].pages.push(c), j[i.length - 1] = {
      value: a.value,
      image: a.image,
      label: a.label,
      docs: a.docs
     }
    }, d.getPages = function() {
     return i
    }, d.getThumbnails = function() {
     return j
    }, d.getPage = function(a) {
     return i[a]
    }, d.setPageText = function(a, b, c, d) {
     var e = i[a];
     if (e) {
      e.text || (e.text = {});
      var f = e.text[b];
      void 0 !== f && void 0 !== f[c] ? f[c] += d : void 0 !== f ? f[c] = d : (e.text[b] = {}, e.text[b][c] = d), e.docs && e.docs.indexOf(b) < 0 && e.docs.push(b)
     }
    }, d.getPageText = function(a, b, c) {
     var d = i[a];
     return d && d.text && d.text[b] ? d.text[b][c] : void 0
    }, d.getPageImage = function(a) {
     for (var b = [], c = 0; c < b.length && b[c].page !== a;) c++;
     return {}
    }, d.addViscollSvg = function(a) {
     var b = a.id || "svg_" + k.svgs._indexes.length;
     k.svgs[b] = a, k.quires[b] && (k.quires[b].svg = a), k.svgs._indexes.push(b)
    }, d.addViscollImageList = function(a) {
     var b = a.id;
     k.imglist[b] = a, k.imglist._indexes.push(b)
    }, d.addViscollQuire = function(a) {
     var b = a.value;
     k.quires[b] = a, k.quires._indexes.push(b)
    }, d.addViscollLeaf = function(a) {
     var b = a.value,
      c = a.quire;
     k.quires[c].leaves[b] = a, k.quires[c].leaves._indexes.push(b)
    }, d.setViscollSVGToLoad = function(a) {
     k.svgToLoad = a
    }, d.getViscollSVGToLoad = function() {
     return k.svgToLoad
    }, d.updateLeafDataInQuire = function(a, b) {
     if (k.quires[a].leaves[b.id])
      for (var c in b) k.quires[a].leaves[b.id][c] = b[c]
    }, d.getViscollSvgs = function() {
     return k
    }, d.setViscollSvgsLoaded = function(a) {
     k.loaded = a
    }, d.areViscollSvgsLoaded = function() {
     return k.loaded
    }, d.getViscollSvg = function(a) {
     return k[a]
    }, d.addDocument = function(a) {
     var b = a.value;
     "" === a.value && (b = a.value = "doc_" + (l._indexes.length + 1)), void 0 === l[b] && (l._indexes.push(b), l[b] = a)
    }, d.getDocuments = function() {
     return l
    }, d.getDocument = function(a) {
     return l[a]
    }, d.getPreviousDocument = function(a) {
     var b = l._indexes.indexOf(a),
      c = l._indexes[b - 1];
     return l[c]
    }, d.addExternalDocument = function(a) {
     var b = a.value;
     void 0 === m.length && (m.length = 0), "" === a.value && (b = a.value = "extDoc_" + (m.length + 1)), void 0 === m[b] && (m[m.length] = b, m[b] = a, m.length++)
    }, d.getExternalDocuments = function() {
     return m
    }, d.getExternalDocument = function(a) {
     return m[a]
    }, d.addSourceDocument = function(a, b) {
     var c = a.value;
     void 0 === n.length && (n.length = 0), "" === a.value && (c = a.value = b), void 0 === n[c] && (n[n.length] = c, n[c] = a, n.length++)
    }, d.getSourceDocuments = function() {
     return n
    }, d.getSourceDocument = function(a) {
     return n[a]
    }, d.addDiv = function(a, b) {
     var c = a.value;
     o[o.length] = c, o[c] = a, o.length++, l[b].divs.push(c), a.corresp && angular.forEach(a.corresp, function(b) {
      o._indexes.corresp[b] || (o._indexes.corresp[b] = []), o._indexes.corresp[b].push(a.value)
     }), a._isSubDiv || (o._indexes.subDivs[a.value] = a.subDivs || [], o._indexes.main[a.doc] || (o._indexes.main[a.doc] = []), o._indexes.main[a.doc].push(a.value))
    }, d.getDivs = function() {
     return o
    }, d.getDiv = function(a) {
     return o[a]
    }, d.setCriticalEditionAvailability = function(a) {
     w = a
    }, d.isCriticalEditionAvailable = function() {
     return w
    }, d.setEditions = function(a) {
     t = a
    }, d.addEdition = function(a) {
     t.push(a)
    }, d.getEditions = function() {
     return t
    }, d.getEdition = function(a) {
     for (var b, c = 0; c < t.length && void 0 === b;) t[c].value === a && (b = t[c]), c++;
     return b
    }, d.addElementInWitnessCollection = function(a) {
     var c = b.skipWitnesses.split(",").filter(function(a) {
      return 0 !== a.length
     });
     a && a.id && c.indexOf(a.id) < 0 && void 0 === p[a.id] && (p[a.id] = a, "group" === a._type ? p._indexes.groups.push(a.id) : p._indexes.witnesses.push(a.id), void 0 === a._group && p._indexes.encodingStructure.push(a.id))
    }, d.addWitnessText = function(a, b, c) {
     void 0 !== p[a] && (void 0 === p[a].text && (p[a].text = {}), p[a].text[b] = c)
    }, d.getWitnessText = function(a, b) {
     return void 0 !== p[a] && void 0 !== p[a].text && void 0 !== p[a].text[b] ? p[a].text[b] : void 0
    }, d.getWitnessesList = function() {
     return p._indexes.witnesses
    }, d.getWitnesses = function() {
     return p
    }, d.getWitness = function(a) {
     return p[a]
    }, d.getWitnessPages = function(a) {
     if (void 0 !== p[a]) {
      if (void 0 === p[a].pages) {
       for (var b = {
         length: 0
        }, c = 0; c < i.length; c++) {
        var d = i[i[c]];
        d.ed === "#" + a && (b[b.length] = i[c], b[i[c]] = d, b.length++)
       }
       p[a].pages = b
      }
      return p[a].pages
     }
    }, d.isWitnessesGroup = function(a) {
     return void 0 !== p[a] && "group" === p[a]._type
    }, d.getWitnessesInGroup = function(a) {
     var b = [];
     if (void 0 !== p[a] && "group" === p[a]._type) {
      var c = p[a].content;
      for (var e in c) {
       var f = c[e];
       d.isWitnessesGroup(f) ? b.push.apply(b, d.getWitnessesInGroup(f)) : b.push(f)
      }
     }
     return b
    }, d.getWitnessesListFormatted = function() {
     var a, b = p._indexes.encodingStructure;
     a = "<ul>";
     for (var c = 0; c < b.length; c++) {
      var d = p[b[c]];
      a += E(d)
     }
     return a += "</ul>"
    };
    var E = function(a) {
     var b = "",
      c = "";
     if ("witness" === a._type) b += "<li><div>", a.attributes && a.attributes.n ? c = a.attributes.n : a.sigla && "" !== a.sigla && (c = a.sigla), b += "<strong>" + c + "</strong>", a.description && (3 === a.description.nodeType ? ("" !== a.description.textContent && "" !== c && (b += ": "), b += a.description.textContent) : ("" !== a.description.innerHTML && "" !== c && (b += ": "), b += a.description.innerHTML)), b += "</div></li>";
     else {
      b += "<li><div>", a.attributes && a.attributes.n ? c = a.attributes.n : a.sigla && "" !== a.sigla && (c = a.sigla), b += "<strong>" + c + "</strong>", "" !== c && "" !== a.name && (b += ": "), b += a.name, b += "</div><ul>";
      for (var d = a.content ? a.content.length : 0, e = 0; d > e; e++) {
       var f = p[a.content[e]];
       b += E(f)
      }
      b += "</ul>", b += "</li>"
     }
     return b
    };
    d.getCriticalTextsCollection = function() {
     return s
    }, d.addCriticalText = function(a, b) {
     s[b] = a
    }, d.getCriticalText = function(a) {
     return s[a]
    }, d.resetCriticalEntries = function() {
     r = {
      filtersCollection: {
       filters: {},
       length: 0,
       forLemmas: 0,
       forVariants: 0,
       colors: []
      },
      __allLoaded: !1,
      _maxVariance: 0,
      _indexes: {
       encodingStructure: [],
       appEntries: [],
       exponents: []
      }
     }
    };
    var F = function() {
     var a, b, c, d = r._indexes.appEntries.length;
     return d > 26 ? (b = Math.floor(d / 26) + 96, d % 26 === 0 ? a = "&#" + (b - 1) + ";z" : (c = d % 26 + 96, a = "&#" + b + ";&#" + c + ";")) : a = "&#" + (d + 96) + ";", a
    };
    return d.addCriticalEntry = function(a) {
     if (void 0 === r[a.id]) {
      r[a.id] = a, r._indexes.appEntries.push(a.id), a._subApp || r._indexes.encodingStructure.push(a.id);
      var b = F();
      r._indexes.exponents.push({
       appId: a.id,
       exponent: b
      }), r[a.id].exponent = b
     }
     a._variance > r._maxVariance && (r._maxVariance = a._variance), "double-end-point" === f.variantEncodingMethod && d.addCriticalEntryDepaInfo(a)
    }, d.addCriticalEntryDepaInfo = function(a) {
     if (r._indexes.depa || (r._indexes.depa = {
       start: {},
       end: {}
      }), a.attributes.from) {
      var b = "#" === a.attributes.from.charAt(0) ? a.attributes.from.substr(1) : a.attributes.from;
      r._indexes.depa.start[a.id] = b
     }
     if (a.attributes.to) {
      var c = "#" === a.attributes.to.charAt(0) ? a.attributes.to.substr(1) : a.attributes.to;
      r._indexes.depa.end[a.id] = c
     } else "internal" === f.variantEncodingLocation ? r._indexes.depa.end[a.id] = a.id : "external" === f.variantEncodingLocation && a.attributes.from && (r._indexes.depa.end[a.id] = a.attributes.from.substr(1))
    }, d.setCriticalEntriesLoaded = function(a) {
     r.__allLoaded = a
    }, d.getCriticalEntries = function() {
     return r
    }, d.getCriticalEntryById = function(a) {
     return r[a]
    }, d.getCriticalEntryExponent = function(a) {
     var b = d.getCriticalEntryById(a);
     return b ? b.exponent : ""
    }, d.getCriticalEntriesMaxVariance = function() {
     return r._maxVariance
    }, d.getReadingAttributes = function(a, b) {
     var c = [];
     if (void 0 !== r[b].content[a]) {
      c = r[b].attributes;
      var d = r[b].content[a].attributes;
      for (var e in d) c[e] = d[e]
     }
     return c
    }, d.isSubApp = function(a) {
     return r[a]._subApp
    }, d.getGenericColorForAppEntry = function(a) {
     var b = r.filtersCollection,
      e = q[a];
     if (void 0 === b.colors || b.colors.indexOf(e) < 0) e = q[a], q.splice(a, 1);
     else {
      if (a >= b.colors.length - 1) {
       for (var f = c.getRandomColor("rgb"); b.colors.indexOf(f) >= 0;) f = c.getRandomColor("rgb");
       b.colors.push(f)
      }
      e = d.getGenericColorForAppEntry(a + 1)
     }
     return e
    }, d.addCriticalEntryFilter = function(a, c) {
     var e = b.possibleVariantFilters,
      f = b.possibleLemmaFilters,
      g = r.filtersCollection;
     if ((e.indexOf(a) >= 0 || f.indexOf(a) >= 0) && (void 0 === g.filters[a] && (g.filters[a] = {
       name: a,
       possibleFor: {
        lemma: f.indexOf(a) >= 0,
        variant: e.indexOf(a) >= 0
       },
       values: {}
      }), void 0 === g.filters[a].values[c])) {
      var h;
      void 0 !== b.variantColors[a] && void 0 !== b.variantColors[a][c] && "" !== b.variantColors[a][c] ? (h = b.variantColors[a][c], q.indexOf(h) >= 0 && q.splice(q.indexOf(h), 1)) : h = d.getGenericColorForAppEntry(0), h && g.colors.push(h);
      var i = {
       name: c,
       color: h
      };
      g.filters[a].values[c] = i, g.length++, e.indexOf(a) >= 0 && g.forVariants++, f.indexOf(a) >= 0 && g.forLemmas++
     }
    }, d.getCriticalEntriesFiltersCollection = function() {
     return r.filtersCollection
    }, d.getCriticalEntriesFilters = function() {
     return r.filtersCollection.filters
    }, d.getCriticalEntriesFilterValues = function(a) {
     return r.filtersCollection.filters[a]
    }, d.getCriticalEntriesFilterColor = function(a, b) {
     return r.filtersCollection.filters[a].values[b].color
    }, d.addBibliographicRef = function(a) {
     void 0 === h[a.id] && (h[a.id] = a, h._indexes.push(a.id))
    }, d.getBibliographicRefsCollection = function() {
     return h
    }, d.getBibliographicRefById = function(a) {
     return h[a]
    }, d.addVersionEntry = function(a) {
     void 0 === u[a.id] && (u._indexes.encodingStructure.push(a.id), u[a.id] = a)
    }, d.getVersionEntries = function() {
     return u
    }, d.getVersionEntry = function(a) {
     return u[a]
    }, d.addVersionWitness = function(a, c) {
     var d = u._indexes.versionWitMap;
     void 0 === d[a] ? (d[a] = [], d[a].push(c)) : d[a].indexOf(c) < 0 && d[a].push(c);
     var e = u._indexes.versionId,
      f = u._indexes.versionId._name;
     if (void 0 === e[a]) {
      var g = b.versions.indexOf(a),
       h = "Version &#" + (65 + g) + ";";
      e[a] = h, f[h] = a
     }
    }, d.addVersionText = function(a, b, c) {
     void 0 === v[b] ? (v[b] = {}, v[b][c] = a) : void 0 === v[b][c] && (v[b][c] = a)
    }, d.getVersionText = function(a, b) {
     return v[b][a]
    }, d.updateProjectInfoContent = function(a, b) {
     g[b] = a
    }, d.getProjectInfo = function() {
     return g
    }, d.addGlyph = function(a) {
     var b, c = x._indexes;
     b = a && "" !== a.id ? a.id : a.id = "glyph_" + (c + 1), void 0 === x[b] && (c[c.length] = b, x[b] = a, c.length++)
    }, d.getGlyphs = function() {
     return x
    }, d.getGlyph = function(a) {
     return x[a]
    }, d.getGlyphMappingForEdition = function(a, b) {
     return x[a] ? x[a].mapping[b] : void 0
    }, d.addZone = function(a) {
     var b, c = y._indexes;
     b = a && "" !== a.id ? a.id : a.id = "zone_" + (c + 1), void 0 === y[b] && (c[c.length] = b, y[b] = a, c.length++)
    }, d.getZones = function() {
     return y
    }, d.getZone = function(a) {
     return y[a]
    }, d.addHotSpot = function(a) {
     var b, c = z._indexes;
     b = a && "" !== a.id ? a.id : a.id = "hotspot_" + (c + 1), void 0 === z[b] && (c[c.length] = b, z[b] = a, c.length++)
    }, d.getHotSpots = function() {
     return z
    }, d.getHotSpot = function(a) {
     return z[a]
    }, d.isITLAvailable = function() {
     return b.toolImageTextLinking && y._indexes.length > 0
    }, d.addQuote = function(a) {
     void 0 === B[a.id] && (B[a.id] = a, B._indexes.encodingStructure.push(a.id));
     var b = a._indexes.sourceRefId,
      c = (a._indexes.sourceId, d.getQuotes()._indexes.sourcesRef);
     if (b.length > 0)
      for (var e = 0; e < b.length; e++) void 0 === c[b[e]] && c._id.indexOf(b[e]) < 0 ? (c[b[e]] = [], c[b[e]].push(a.id), c._id.push(b[e])) : c[b[e]].indexOf(a.id) < 0 && c[b[e]].push(a.id);
     var f = a._indexes.correspId,
      g = C._indexes.correspId;
     if (Object.keys(f).length > 0)
      for (var h = 0; h < Object.keys(f).length; h++)
       for (var i = Object.keys(f)[h], j = 0; j < f[i].length; j++) void 0 === g[i] ? (g[i] = {}, g[i][f[i][j]] = [a.id]) : void 0 === g[i][f[i][j]] ? g[i][f[i][j]] = [a.id] : g[i][f[i][j]].indexOf(a.id) < 0 && g[i][f[i][j]].push(a.id)
    }, d.getQuotes = function() {
     return B
    }, d.getQuote = function(a) {
     return B[a]
    }, d.addSource = function(a) {
     void 0 === C[a.id] && (C[a.id] = a, C._indexes.encodingStructure.push(a.id));
     var b = a.quotesEntriesId,
      c = d.getSources()._indexes.quotesRef;
     if (b.length > 0)
      for (var e = 0; e < b.length; e++) void 0 === c[b[e]] && c._id.indexOf(b[e]) < 0 ? (c[b[e]] = [], c[b[e]].push(a.id), c._id.push(b[e])) : c[b[e]].indexOf(a.id) < 0 && c[b[e]].push(a.id);
     a._textAvailable && C._indexes.availableTexts.push({
      id: a.id,
      abbr: a.abbr
     })
    }, d.getSources = function() {
     return C
    }, d.getSource = function(a) {
     return C[a]
    }, d.getAnalogue = function(a) {
     return D[a]
    }, d.getAnalogues = function() {
     return D
    }, d.addAnalogue = function(a) {
     if (void 0 === D[a.id]) {
      D[a.id] = a, D._indexes.encodingStructure.push(a.id);
      for (var b = a._indexes.sourceRefId, c = D._refId, d = 0; d < b.length; d++) c._indexes.indexOf(b[d]) < 0 ? (c._indexes.push(b[d]), c[b[d]] = [], c[b[d]].push(a.id)) : c[b[d]].indexOf(a.id) < 0 && c[b[d]].push(a.id)
     }
    }, d
   }]), angular.module("evtviewer.dataHandler").service("evtParser", ["$q", "xmlParser", "parsedData", "config", function(a, b, c, d) {
    var e = {},
     f = 0,
     g = (d.visCollSvg, "pb"),
     h = "<lb>",
     i = "<l>",
     j = "<placeName>, <geogName>, <persName>, <orgName>",
     k = "image",
     l = {
      leaf: "leaf",
      leafMode: "mode",
      folioNumber: "folioNumber",
      quire: "quire",
      quireInfo: "q",
      imageList: "image",
      svgElements: "g"
     },
     m = {
      sectionHeaders: "<sourceDesc>, ",
      sectionSubHeaders: "",
      blockLabels: "",
      inlineLabels: "<authority>, <settlement>, <publisher>, <pubPlace>, <availability>, <author>, <editor>, <idno>, <date>, <repository>, <msName>, <textLang>",
      changeDef: "<change>",
      changeWhenDef: "[when]",
      changeByDef: "[who]"
     };
    return m.sectionSubHeaders += "<projectDesc>, <refsDecl>, <notesStmt>, <seriesStmt>, <publicationStmt>, <respStmt>, <funder>, <sponsor>, <msContents>, <revisionDesc>, ", m.sectionSubHeaders += "<principal>, <langUsage>, <particDesc>, <textClass>, <variantEncoding>, <editorialDecl>, <msIdentifier>, <physDesc>, <history>, <extent>, <editionStmt>", m.blockLabels += "<edition>, <correction>, <hyphenation>, <interpretation>, <normalization>, <punctuation>, <interpGrp>", m.blockLabels += "<quotation>, <segmentation>, <stdVals>, <colophon>, <handDesc>, <decoDesc>, <supportDesc>, <origin>", e.parserProperties = {}, e.isNestedInElem = function(a, b) {
     return null !== a.parentNode ? "text" === a.parentNode.tagName ? !1 : a.parentNode.tagName === b ? !0 : e.isNestedInElem(a.parentNode, b) : !1
    }, e.capitalize = function(a, b) {
     var c = b ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
     return a ? a.replace(c, function(a) {
      return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase()
     }) : ""
    }, e.camelToSpace = function(a) {
     return a ? a.replace(/\W+/g, " ").replace(/([a-z\d])([A-Z])/g, "$1 $2") : ""
    }, e.camelToUnderscore = function(a) {
     return a ? a.replace(/\W+/g, " ").replace(/([a-z\d])([A-Z])/g, "$1_$2") : ""
    }, e.isInMainVersion = function(a) {
     return null !== a.parentNode ? "text" === a.parentNode.tagName ? !0 : "rdgGrp" === a.parentNode.tagName ? d.versions && d.versions.length > 0 ? a.parentNode.hasAttribute("ana") && a.parentNode.getAttribute("ana").replace(/#/, "") === d.versions[0] ? !0 : !1 : !0 : e.isInMainVersion(a.parentNode) : void 0
    }, e.parseXMLElement = function(a, b, f) {
     var g, h = f.skip || "",
      i = f.exclude || void 0,
      k = !1;
     if (3 === b.nodeType) g = b, g.textContent && (g.textContent = g.textContent.replace("__SPACE__", " "));
     else if (void 0 !== b.tagName && (h.toLowerCase().indexOf("<" + b.tagName.toLowerCase() + ">") >= 0 || b.className.indexOf("depaAnchor") >= 0 || b.className.indexOf("depaContent") >= 0)) g = b, k = !0;
     else if (void 0 !== b.tagName && void 0 !== i && i.toLowerCase().indexOf("<" + b.tagName.toLowerCase() + ">") >= 0) g = document.createTextNode("");
     else {
      var l = void 0 !== b.tagName ? b.tagName.toLowerCase() : "";
      if (void 0 !== b.attributes && void 0 !== b.attributes.copyOf && "" !== b.attributes.copyOf.value) {
       g = document.createElement("span"), g.className = b.tagName + " copy";
       var n = b.attributes.copyOf.value.replace("#", ""),
        o = "<" + b.tagName + ' xml:id="' + n + ".*</" + b.tagName + ">",
        p = new RegExp(o, "ig"),
        q = a.outerHTML.match(p);
       if (q) {
        var r = angular.element(q[0])[0];
        g.appendChild(e.parseXMLElement(a, r, f))
       }
      } else if (c.getEncodingDetail("usesLineBreaks") || "l" !== l)
       if ("note" === l && h.indexOf("<evtNote>") < 0) g = e.parseNote(b);
       else if ("date" === l && (!b.childNodes || b.childNodes.length <= 0)) {
       g = document.createElement("span"), g.className = b.tagName;
       for (var s = "", t = 0; t < b.attributes.length; t++) {
        var u = b.attributes[t];
        if (u.specified && "xml:id" !== u.name) {
         var v = new Date(u.value),
          w = v && !isNaN(v) ? v.toLocaleDateString() : u.value;
         s += e.camelToSpace(u.name.replace(":", "-")).toLowerCase() + ": " + w + ", "
        }
       }
       g.textContent = s.slice(0, -1)
      } else if (d.namedEntitiesSelector && j.toLowerCase().indexOf("<" + l + ">") >= 0 && void 0 !== b.getAttribute("ref")) g = e.parseNamedEntity(a, b, h);
      else {
       if (g = document.createElement("span"), g.className = void 0 !== b.tagName ? b.tagName : "", b.attributes)
        for (var x = 0; x < b.attributes.length; x++) {
         var y = b.attributes[x];
         y.specified && "xml:id" !== y.name && g.setAttribute("data-" + y.name.replace(":", "-"), y.value)
        }
       if ("div" === b.tagName) {
        var z;
        z = b.attributes && b.getAttribute("xml:id") ? b.getAttribute("xml:id") : e.xpath(b).substr(1), g.setAttribute("id", z)
       }
       if (b.childNodes)
        for (var A = 0; A < b.childNodes.length; A++) {
         var B = b.childNodes[A].cloneNode(!0);
         g.appendChild(e.parseXMLElement(a, B, f))
        } else g.innerHTML = b.innerHTML + " ";
       if (f.context && "projectInfo" === f.context && "" !== g.innerHTML.replace(/\s/g, "")) {
        var C = document.createElement("span"),
         D = !1;
        if (C.className = "label-" + b.tagName, C.innerHTML = "{{ 'PROJECT_INFO." + e.camelToUnderscore(b.tagName).toUpperCase() + "' | translate }}", m.sectionHeaders.toLowerCase().indexOf("<" + l + ">") >= 0 ? (C.className += " projectInfo-sectionHeader", D = !0) : m.sectionSubHeaders.toLowerCase().indexOf("<" + l + ">") >= 0 ? (C.className += " projectInfo-sectionSubHeader", D = !0) : m.blockLabels.toLowerCase().indexOf("<" + l + ">") >= 0 ? (C.className += " projectInfo-blockLabel", D = !0) : m.inlineLabels.toLowerCase().indexOf("<" + l + ">") >= 0 && (C.className += " projectInfo-inlineLabel", C.innerHTML += ": ", D = !0), m.changeDef.toLowerCase().indexOf("<" + l + ">") >= 0) {
         var E = "",
          F = b.getAttribute(m.changeWhenDef.replace(/[\[\]]/g, ""));
         F && (E += F + " ");
         var G = b.getAttribute(m.changeByDef.replace(/[\[\]]/g, ""));
         G && (E += "[" + G + "]"), "" !== E && (g.innerHTML = E + " - " + g.innerHTML)
        }
        D && g.insertBefore(C, g.childNodes[0])
       }
       if ("lb" === l) {
        g.id = b.getAttribute("xml:id"), g.appendChild(document.createElement("br"));
        var H = document.createElement("span");
        H.className = "lineN";
        var I = b.getAttribute("n");
        H.textContent = I, I && g.appendChild(H)
       }
      } else g = e.parseLine(a, b, f)
     }
     return k || 3 === b.nodeType || g.innerHTML && "" !== g.innerHTML.replace(/\s/g, "") || g.className && (g.className.indexOf("depaAnchor") >= 0 || g.className.indexOf("depaContent") >= 0) ? g : document.createTextNode("")
    }, e.parseElementAttributes = function(a) {
     var b = {
      _indexes: []
     };
     if (a && a.attributes)
      for (var c = 0; c < a.attributes.length; c++) {
       var d = a.attributes[c];
       if (d.specified) {
        var e = d.name.replace(":", "-");
        b[e] = d.value, b._indexes.push(e)
       }
      }
     return b
    }, e.parseExternalDocuments = function(a, b) {
     var d = {
      value: b,
      content: a
     };
     "analogues" !== b && "sources" !== b ? c.addSourceDocument(d, b) : c.addExternalDocument(d, b), console.log("## Source Documents ##", c.getSourceDocuments()), console.log("## External Documents ##", c.getExternalDocuments())
    }, e.createRegExpr = function(a) {
     for (var b = "(", c = a.split(","), d = 0; d < c.length; d++) {
      if (c[d].indexOf("[") < 0) b += c[d].replace(/[>]/g, "");
      else {
       var e = c[d].indexOf("[");
       "[" !== c[d].substring(1, e) && (b += c[d].substring(0, e)), b += "[^<>]*?";
       var f = c[d].indexOf("]"),
        g = c[d].indexOf("=");
       b += c[d].substring(e + 1, g), b += "\\s*?=\\s*?['\"]\\s*?", b += c[d].substring(g + 1, f)
      }
      d < c.length - 1 ? b += "|" : d === c.length - 1 && (b += ")")
     }
     var h = new RegExp(b, "i");
     return h
    }, e.createAbbreviation = function(a, b) {
     var c = b / 2,
      d = a.substring(0, c),
      e = a.substring(a.length - c - 1, a.length - 1),
      f = d.lastIndexOf("", d.length - 1),
      g = e.indexOf("", 1),
      h = d.substring(0, f),
      i = d.substring(f, d.length),
      j = e.substring(g, e.length),
      k = e.substring(0, g),
      l = '<span class="textNode">' + h + '<span class="blurredText">' + i + '</span> [...] <span class="blurredText">' + k + "</span>" + j + "</span>";
     return l
    }, e.balanceXHTML = function(a) {
     if (a) {
      a.lastIndexOf("<") > a.lastIndexOf(">") && (a = a.substring(0, a.lastIndexOf("<")));
      var b = a.match(/<(?!\!)[^>]+>/g),
       c = [],
       d = [];
      for (var e in b)
       if (1 === b[e].search("/")) {
        var f = b[e].replace(/[<\/>]/gi, ""),
         g = c[c.length - 1];
        g && (g.search("<" + f + " ") >= 0 || g.search("<" + f + ">") >= 0) ? c.pop() : d.push(f)
       } else b[e].search("/>") <= 0 && c.push(b[e]);
      for (; c.length > 0;) {
       var h = c.pop();
       h = h.substring(1, h.search(/[ >]/)), a += "</" + h + ">"
      }
      for (; d.length > 0;) {
       var i = d.shift();
       a = "<" + i + ">" + a
      }
     }
     return a ? a : ""
    }, e.analyzeEncoding = function(a) {
     var b = angular.element(a),
      d = b.find("body " + h.replace(/[<>]/g, ""));
     c.setEncodingDetail("usesLineBreaks", d.length > 0);
     var e = b.find(i.replace(/[<>]/g, "") + "[n]");
     c.setEncodingDetail("lineNums", e.length > 0)
    }, e.parseNote = function(a) {
     var b = document.createElement("evt-popover"),
      c = a.getAttribute("n") ? a.getAttribute("n") : "",
      d = a.getAttribute("type");
     return b.setAttribute("data-trigger", "click"), b.setAttribute("data-tooltip", a.innerHTML), b.setAttribute("data-n", c), b.setAttribute("data-type", d), b.innerHTML = '<i class="icon-evt_note"><span class="' + d + '">' + c + "</span></i>", b
    }, e.parseNamedEntity = function(a, b, c) {
     var d = document.createElement("evt-named-entity-ref"),
      f = b.getAttribute("ref"),
      g = f ? f.replace("#", "") : void 0;
     g && "" !== g && d.setAttribute("data-entity-id", g);
     var h = b.tagName ? b.tagName : "generic";
     d.setAttribute("data-entity-type", h);
     for (var i = 0; i < b.childNodes.length; i++) {
      var j, k = b.childNodes[i].cloneNode(!0);
      j = e.parseXMLElement(a, k, {
       skip: c
      }), d.appendChild(j)
     }
     return d
    }, e.parseLines = function(a) {
     for (var b = a.getElementsByTagName("l"), c = 0; c < b.length;) {
      var d = b[c],
       f = e.parseLine(a, d, {});
      d.parentNode.replaceChild(f, d)
     }
    }, e.parseLine = function(a, b, d) {
     var f = document.createElement("div");
     f.className = b.tagName + " l-block";
     for (var g = 0; g < b.attributes.length; g++) {
      var h = b.attributes[g];
      h.specified && f.setAttribute("data-" + h.name.replace(":", "-"), h.value)
     }
     f.innerHTML = b.innerHTML;
     var i = b.getAttribute("n");
     if (i && "" !== i) {
      var j = document.createElement("span");
      j.className = "lineN", j.textContent = i, f.className += " l-hasLineN";
      var k = e.parseXMLElement(a, f, d);
      f.innerHTML = j.outerHTML + '<span class="lineContent">' + k.outerHTML + "</span>"
     } else c.getEncodingDetail("lineNums") && (f.className += " l-indent");
     return f
    }, e.parseGlyphs = function(a) {
     var b = angular.element(a);
     angular.forEach(b.find("glyph, char"), function(b) {
      var d = {};
      d.id = b.getAttribute("xml:id") || "", d.xmlCode = b.outerHTML, d.mapping = {}, angular.forEach(angular.element(b).find("mapping"), function(a) {
       var b = a.getAttribute("type");
       d.mapping[b] = {
        element: a.outerHTML,
        content: a.innerHTML,
        attributes: []
       };
       for (var c = 0; c < a.attributes.length; c++) {
        var e = a.attributes[c];
        e.specified && d.mapping[b].attributes.push({
         name: e.name.replace(":", "-"),
         value: e.value
        })
       }
      });
      var f = e.parseXMLElement(a, b, {
       skip: ""
      });
      d.parsedXml = f ? f.outerHTML : "", c.addGlyph(d)
     }), console.log("# GLYPHS #", c.getGlyphs())
    }, e.xpath = function(a) {
     try {
      if ("string" == typeof a) return document.evaluate(a, document, null, 0, null);
      if (!a || 1 !== a.nodeType) return "";
      var b = [];
      a.parentNode && (b = [].filter.call(a.parentNode.children, function(b) {
       return b.tagName === a.tagName
      }));
      var c = b.length > 1 ? [].indexOf.call(b, a) + 1 : "";
      c = c > 1 ? c - 1 : "";
      var d = "tei" !== a.tagName.toLowerCase() ? "-" + a.tagName.toLowerCase() : "";
      return e.xpath(a.parentNode) + d + c
     } catch (g) {
      return f++, "-id" + f
     }
    }, e.parsePages = function(a, b) {
     var e = angular.element(a);
     angular.forEach(e.find(g), function(a) {
      var e = {};
      a.getAttribute("ed") ? e.value = a.getAttribute("xml:id") || a.getAttribute("ed").replace("#", "") + "-" + a.getAttribute("n") || "page_" + (c.getPages().length + 1) : e.value = a.getAttribute("xml:id") || "page_" + (c.getPages().length + 1), e.image = a.getAttribute("src") || d.singleImagesUrl + e.value + ".jpg", e.svgId = a.getAttribute("svg:id") || c.getPages().length + 1, e.label = a.getAttribute("n") || "Page " + (c.getPages().length + 1), e.title = a.getAttribute("n") || "Page " + (c.getPages().length + 1);
      for (var f = 0; f < a.attributes.length; f++) {
       var g = a.attributes[f];
       g.specified && (e[g.name.replace(":", "-")] = g.value)
      }
      a.getAttribute("facs") ? e.source = a.getAttribute("facs") : e.source = d.singleImagesUrl + e.value + ".jpg", c.addPage(e, b)
     })
    }, e.parseSvgsForViscoll = function(a, b) {
     var d = angular.element(a),
      e = a.lastChild,
      f = "";
     try {
      f = e.firstElementChild.innerHTML.match(/quire\s\d*\sfor/)[0].match(/\d+/)[0]
     } catch (g) {}
     var h = {
       id: b,
       quireN: f,
       svgLeaves: [],
       textSvg: e
      },
      i = c.getViscollSvgs();
     angular.forEach(d.find(l.svgElements), function(a) {
      if (a.hasAttribute("id")) {
       var d = {
        id: a.id.replace("#", ""),
        value: a.id.replace("#", ""),
        label: a.id.replace("#", "")
       };
       angular.forEach(i.imglist._indexes, function(a) {
        if (d.id === a.slice(0, -2))
         if (void 0 == d.img) {
          if (d.img = i.imglist[a].url, d.imgConjoin = i.imglist[a].conjoinUrl, d.imageId = i.imglist[a].value, void 0 !== i.imglist[a].conjoinUrl)
           for (var b in i.imglist) i.imglist[a].id === i.imglist[b].conjoin && (d.conjoinId = i.imglist[b].value)
         } else if (d.img2 = i.imglist[a].url, d.imgConjoin2 = i.imglist[a].conjoinUrl, d.imageId2 = i.imglist[a].value, void 0 !== i.imglist[a].conjoinUrl)
         for (var c in i.imglist) i.imglist[a].id == i.imglist[c].conjoin && (d.conjoinId2 = i.imglist[c].value)
       }), h.svgLeaves.push(d), c.updateLeafDataInQuire(b, d)
      }
     }), c.addViscollSvg(h)
    }, e.parseViscollDatamodel = function(a) {
     var b = angular.element(a),
      d = angular.element(b.find("shelfmark")),
      e = [];
     angular.forEach(b.find(l.quire), function(a) {
      var b = {
       value: a.getAttribute("xml:id") || "",
       n: a.getAttribute("n") || "quire" + (c.getViscollQuires().length + 1),
       leaves: {
        length: 0,
        _indexes: []
       }
      };
      c.addViscollQuire(b), d && e.push({
       fileName: "id-" + d.text() + "-" + b.n + ".svg",
       id: b.value
      })
     }), angular.forEach(b.find(l.leaf), function(a) {
      var b = angular.element(a).find(l.quireInfo);
      if (b = b ? b[0] : void 0) {
       var d = angular.element(a).find(l.leafMode),
        e = b.childNodes,
        f = void 0 == e[1] ? e[0] : e[1],
        g = {
         value: a.getAttribute("xml:id") || "",
         leafno: b.getAttribute("leafno") || "",
         quire: b.getAttribute("target").replace("#", "") || "target",
         conjoin: f.getAttribute("target").replace("#", "") || "target",
         mode: d && d[0] ? d[0].getAttribute("val") : ""
        };
       c.addViscollLeaf(g)
      }
     }), c.setViscollSVGToLoad(e), console.log("## parseViscollDatamodel ##", c.getViscollSvgs())
    }, e.parseViscollImageList = function(a) {
     var b = angular.element(a),
      d = c.getViscollSvgs();
     angular.forEach(b.find(k), function(a) {
      var b = {
        value: a.getAttribute("val") || "val",
        url: a.getAttribute("url") || "url",
        id: a.getAttribute("id") || "id"
       },
       e = b.id.slice(0, -2);
      angular.forEach(d.quires._indexes, function(a) {
       var c = d.quires[a].leaves;
       angular.forEach(c._indexes, function(a) {
        var d = c[a];
        e === d.value && (b.conjoin = d.conjoin, "v" === b.id.substr(b.id.length - 1) ? b.conjoin += "-r" : b.conjoin += "-v")
       })
      }), c.addViscollImageList(b)
     }), angular.forEach(d.imglist._indexes, function(a) {
      angular.forEach(d.imglist._indexes, function(b) {
       b === d.imglist[a].conjoin && (d.imglist[a].conjoinUrl = d.imglist[b].url);
      })
     })
    }, e.parseDocuments = function(a) {
     var b, f = angular.element(a),
      g = "body";
     return f.find("text group text").length > 0 ? (b = "text group text", checkMainFront = !0) : f.find("text").length > 0 ? b = "text" : f.find('div[subtype="edition_text"]').length > 0 && (b = 'div[subtype="edition_text"]', g = "div"), e.parserProperties.defDocElement = b, e.parserProperties.defContentEdition = g, c.setCriticalEditionAvailability(f.find(d.listDef.replace(/[<>]/g, "")).length > 0), angular.forEach(f.find(b), function(b) {
      e.parseDocument(b, a)
     }), console.log("## PAGES ##", c.getPages()), console.log("## Documents ##", c.getDocuments()), console.log("## DIVS ##", c.getDivs()), c.getDocuments()
    }, e.parseDocument = function(a, b) {
     for (var f = {
       value: a.getAttribute("xml:id") || e.xpath(b).substr(1) || "doc_" + (c.getDocuments()._indexes.length + 1),
       label: "",
       title: "",
       content: a,
       front: void 0,
       pages: [],
       divs: []
      }, g = 0; g < a.attributes.length; g++) {
      var h = a.attributes[g];
      h.specified && (f[h.name.replace(":", "-")] = h.value)
     }
     if (void 0 === f["xml-id"] ? e.createTitle(f, "Doc") : e.createTitle(f, ""), e.parseFront(f, a), c.addDocument(f), e.parsePages(a, f.value), "body" === e.parserProperties.defContentEdition) {
      var i = a.querySelector("front"),
       j = a.querySelector("body");
      i && e.parseDivs(i, f.value, "front"), e.parseDivs(j, f.value, "body")
     } else e.parseDivs(a, f.value, "body");
     if ("critical" !== d.defaultEdition || !c.isCriticalEditionAvailable()) {
      d.defaultEdition = "diplomatic";
      var k = c.getPages(),
       l = f.pages;
      angular.forEach(angular.element(a).find(e.parserProperties.defContentEdition), function(a) {
       e.splitPages(k, a, f.value, e.parserProperties.defContentEdition, l)
      })
     }
    }, e.parseDivs = function(a, b, c) {
     var d = a.getAttribute("xml:lang") ? a.getAttribute("xml:lang") : "",
      f = angular.element(a);
     angular.forEach(f.children("div"), function(a) {
      e.parseDiv(a, b, c, d)
     })
    }, e.parseDiv = function(a, b, d) {
     var f = {
      doc: b,
      section: d,
      subDivs: [],
      title: "",
      _isSubDiv: e.isNestedInElem(a, "div")
     };
     angular.forEach(Object.values(a.attributes), function(a) {
      a.specified && (f[a.name.replace(":", "-")] = a.value)
     }), f.corresp && (f.corresp = f.corresp.replace("#", "").split(" ")), f.value = f["xml-id"] || "div_" + (c.getDivs().length + 1), e.createTitle(f, "Div");
     var g = angular.element(a);
     return angular.forEach(g.children("div"), function(a) {
      f.subDivs.push(e.parseDiv(a, b, d).value)
     }), c.addDiv(f, b), f
    }, e.createTitle = function(a, b) {
     switch (a.type ? a.title += a.type.substr(0, 1).toUpperCase() + a.type.substr(1) : a.title += b, a.subtype && (a.title += " - " + a.subtype.substr(0, 1).toUpperCase() + a.subtype.substr(1)), a.title += " ", b) {
      case "Div":
       a.title += a.n || c.getDivs().length + 1;
       break;
      case "Doc":
       var d, e = c.getWitnessesList().find(function(b) {
        return d = b, c.getWitness(b).corresp === a.value
       });
       e ? a.title += d : a.title += a.n || c.getDocuments()._indexes.length + 1;
       break;
      default:
       a.title = a.n || a["xml-id"]
     }
     a.label = a.title
    }, e.parseFront = function(a, b) {
     var c = "<front>",
      d = "<biblStruct>",
      f = b.querySelectorAll(c.replace(/[<\/>]/gi, ""));
     if (f && f[0]) {
      var g = f[0].cloneNode(!0),
       h = g.querySelectorAll(d.replace(/[<\/>]/gi, ""));
      if (h)
       for (var i = h.length - 1; i >= 0; i--) {
        var j = document.createElement("evt-bibl-elem"),
         k = h[i],
         l = k.getAttribute("xml:id") || e.xpath(k).substr(1);
        j.setAttribute("data-bibl-id", l), k.parentNode.replaceChild(j, k)
       }
      var m = e.parseXMLElement(b, g, {
        skip: d + "<evt-bibl-elem>"
       }),
       n = e.parseElementAttributes(g);
      a.front = {
       attributes: n,
       parsedContent: m && m.outerHTML ? m.outerHTML.trim() : "",
       originalContent: g.outerHTML
      }
     }
    }, e.splitLineBreaks = function(a, b) {
     var c = "",
      d = "<" + b + "(.|[\r\n])*?>",
      f = d + "(.|[\r\n])*?<lb(.|[\r\n])*?/>",
      g = new RegExp(f, "ig"),
      h = a.outerHTML.match(g);
     if (h && h.length > 0) {
      var i = new RegExp(d, "ig"),
       j = h[0].replace(i, "");
      j = e.balanceXHTML(j), c += "<evtLB>" + j + "</evtLB>"
     }
     for (var k = "<lb(.|[\r\n])*?(?=(<lb|</" + b + ">))", l = new RegExp(k, "ig"), m = a.outerHTML.match(l), n = m ? m.length : 0, o = 0; n > o; o++) {
      var p = e.balanceXHTML(m[o]);
      c += "<evtLB>" + p + "</evtLB>"
     }
     return c
    }, e.splitPages = function(a, b, d, e, f) {
     var g, h = "<body(.|[\r\n])*?(?=<pb)",
      i = new RegExp(h, "ig"),
      j = b.outerHTML.match(i),
      k = "<pb(.|[\r\n])*?(?=(<pb|</" + e + ">))",
      l = new RegExp(k, "ig"),
      m = b.outerHTML.match(l);
     if (j && j.length > 0) {
      var n = c.getPreviousDocument(d);
      if (n && n.pages && n.pages.length > 0) {
       var o = n.pages[n.pages.length - 1],
        p = a.length - f.length;
       if (o && "" !== o)
        for (var q = 0, r = p; r < a.length; r++) g = a[r], g && "" !== g && (c.setPageText(g, d, "original", m[q]), q++)
      } else
       for (var s = 0; s < a.length; s++) g = a[s], g && "" !== g && c.setPageText(g, d, "original", m[s])
     }
    }, e.parseTextForEditionLevel = function(d, f, g, h) {
     var i = e.balanceXHTML(h);
     i = i.replace(/>\s+</g, ">__SPACE__<");
     var j = a.defer(),
      k = i,
      l = b.parse('<div id="mainContentToTranform" class="' + g + '">' + i + "</div>");
     if (void 0 !== l) {
      for (var m, n = l.getElementById("mainContentToTranform"), o = n.getElementsByTagName("pb"), p = 0; p < o.length;) m = o[p], m.parentNode.removeChild(m);
      var q;
      if ("diplomatic" === g ? q = "_reg" : "interpretative" === g && (q = "_orig"), q) {
       var r = n.getElementsByTagName("lb");
       for (p = 0; p < r.length;) {
        var s = r[p],
         t = s.getAttribute("xml:id");
        t && null !== t && t.indexOf(q) >= 0 ? s.parentNode.removeChild(s) : p++
       }
      }
      var u = n.getElementsByTagName("g");
      for (p = 0; p < u.length;) {
       var v = u[p],
        w = v.getAttribute("ref"),
        x = document.createElement("span");
       if (x.className = "glyph", w && "" !== w) {
        w = w.replace("#", "");
        var y = g;
        y = "interpretative" === y ? "normalized" : y, (e.isNestedInElem(v, "abbr") || e.isNestedInElem(v, "orig")) && (y = "diplomatic");
        var z = c.getGlyphMappingForEdition(w, y);
        z && x.appendChild(angular.element(z.element)[0])
       }
       x && v.parentNode.insertBefore(x, v.nextSibling), v.parentNode.removeChild(v)
      }
      n.innerHTML = n.innerHTML.replace(/>[\s\r\n]*?</g, "><"), angular.forEach(n.children, function(a) {
       var b = "<pb>,<g>";
       a.parentNode.replaceChild(e.parseXMLElement(l, a, {
        skip: b
       }), a)
      }), k = n.outerHTML
     } else k = "<span> {{ 'TEXT_NOT_AVAILABLE' | translate }}</span>";
     if (void 0 === k) {
      var A = "<span class=\"alert-msg alert-msg-error\">{{'MESSAGES.ERROR_IN_PARSING_TEXT' | translate}} <br />{{'MESSAGES.TRY_DIFFERENT_BROWSER_OR_CONTACT_DEVS' | translate}}</span>";
      k = A
     }
     return k = k.replace(/__SPACE__/g, " "), c.setPageText(d, f, g, k), j.resolve("success"), j
    }, e
   }]), angular.module("evtviewer.dataHandler").service("evtCriticalApparatusParser", ["$q", "parsedData", "evtParser", "xmlParser", "config", "evtCriticalElementsParser", "evtDepaParser", function(a, b, c, d, e, f, g) {
    var h = {},
     i = "<app>";
    e.quoteDef || "<quote>", e.skipWitnesses.split(",").filter(function(a) {
     return 0 !== a.length
    });
    h.findCriticalEntryById = function(a, b) {
     if (void 0 !== a) {
      var c = b.replace(/\w-/g, "$&0>").replace(/[0-9]+/g, ":eq($&)").replace(/-:eq/g, ":eq"),
       d = $(a).find(c);
      f.handleAppEntry(d.get(0))
     } else console.log("ERROR")
    };
    var j = function(a, d) {
     var f, g = e.skipWitnesses.split(",").filter(function(a) {
       return 0 !== a.length
      }),
      h = {
       id: d.getAttribute("xml:id") || c.xpath(d).substr(1),
       sigla: d.getAttribute("xml:id"),
       name: "",
       content: [],
       _type: "group",
       _group: void 0,
       text: {}
      };
     if (void 0 !== e.versions && e.versions.length > 1 && d.hasAttribute("ana")) {
      var i = d.getAttribute("ana").replace("#", "");
      e.versions.indexOf(i) >= 0 && (f = i)
     }
     return angular.forEach(d.childNodes, function(d) {
      if (1 === d.nodeType)
       if ("head" === d.tagName) h.name = d.innerHTML;
       else if (e.listDef.indexOf("<" + d.tagName + ">") >= 0) {
       if (g.indexOf(h.id) < 0) {
        var i = j(a, d);
        i._group = h.id, b.addElementInWitnessCollection(i), h.content.push(i.id)
       }
      } else if (e.versionDef.indexOf("<" + d.tagName + ">") >= 0) {
       var k = {
        id: d.getAttribute("xml:id") || c.xpath(d).substr(0),
        sigla: d.getAttribute("xml:id"),
        attributes: c.parseElementAttributes(d),
        description: c.parseXMLElement(a, d, {
         skip: ""
        }),
        _group: h.id,
        _type: "witness"
       };
       g.indexOf(k.id) < 0 && (b.addElementInWitnessCollection(k), h.content.push(k.id), void 0 !== f && b.addVersionWitness(f, k.id))
      }
     }), h
    };
    return h.parseWitnesses = function(a) {
     var d = e.skipWitnesses.split(",").filter(function(a) {
       return 0 !== a.length
      }),
      f = angular.element(a),
      g = f.find(e.listDef.replace(/[<>]/g, ""));
     g.length > 0 ? angular.forEach(g, function(f) {
      c.isNestedInElem(f, f.tagName) || angular.forEach(f.childNodes, function(f) {
       if (1 === f.nodeType) {
        var g = {};
        if (g.id = f.getAttribute("xml:id"), d.indexOf(g.id) < 0) {
         if (e.listDef.indexOf("<" + f.tagName + ">") >= 0) g = j(a, f);
         else if (e.versionDef.indexOf("<" + f.tagName + ">") >= 0) {
          g = {
           id: f.getAttribute("xml:id") || c.xpath(f).substr(0),
           sigla: f.getAttribute("xml:id"),
           description: c.parseXMLElement(a, f, {
            skip: ""
           }),
           _group: void 0,
           _type: "witness",
           text: {}
          };
          var h;
          if (void 0 !== e.versions && e.versions.length > 1 && f.hasAttribute("ana")) {
           var i = f.getAttribute("ana").replace("#", "");
           e.versions.indexOf(i) >= 0 && (h = i)
          }
          void 0 !== h && b.addVersionWitness(h, g.id)
         }
         b.addElementInWitnessCollection(g)
        }
       }
      })
     }) : console.log("WARNING: " + e.listDef + " missing. Please add this element to make EVT work properly with different witnesses."), console.log("## Witnesses ##", b.getWitnesses())
    }, h.parseCriticalEntries = function(c) {
     b.resetCriticalEntries();
     var d = a.defer(),
      h = angular.element(c);
     return angular.forEach(h.find(i.replace(/[<>]/g, "")), function(a) {
      if (!a.hasAttribute("type") || "recensio" !== a.getAttribute("type")) {
       var d = f.handleAppEntry(a);
       d.lemma || "double-end-point" !== b.getEncodingDetail("variantEncodingMethod") || g.getLemma(d, c)
      }
     }), b.setCriticalEntriesLoaded(e.loadCriticalEntriesImmediately), console.log("## Critical entries ##", b.getCriticalEntries()), d.resolve("success"), d
    }, h.parseVersionEntries = function(c) {
     var d = a.defer(),
      e = angular.element(c);
     return angular.forEach(e.find(i.replace(/[<>]/g, "") + "[type=recensio]"), function(a) {
      f.handleVersionEntry(a)
     }), console.log("## Version Entries ##", b.getVersionEntries()), d.resolve("success"), d
    }, h.containsWitnessElement = function(a, b) {
     return null === a ? !1 : void 0 !== b.group && a.indexOf("#" + b.group) >= 0 || a.indexOf("#") >= 0 && a.indexOf("#" + b.id) >= 0 || a.indexOf(b.id) >= 0
    }, h.parseWitnessPageBreaks = function(a, b) {
     for (var c = a.getElementsByTagName("pb"), d = 0; d < c.length;) {
      var e = c[d];
      if (h.containsWitnessElement(e.getAttribute("ed"), b)) {
       var f, g = document.createElement("span");
       f = e.getAttribute("ed") ? e.getAttribute("xml:id") || e.getAttribute("ed").replace("#", "") + "-" + e.getAttribute("n") || "page_" + d : e.getAttribute("xml:id") || "page_" + d, g.className = "pb", g.setAttribute("data-wit", e.getAttribute("ed")), g.setAttribute("data-id", f), g.setAttribute("id", "pb_" + f), g.textContent = e.getAttribute("n"), e.parentNode.replaceChild(g, e)
      } else e.parentNode.removeChild(e)
     }
    }, h.parseWitnessLacunas = function(a, d) {
     for (var e, f, g, h = a.getElementsByTagName("lacunaStart"), i = a.getElementsByTagName("lacunaEnd"), j = [], k = [], l = 0; l < h.length; l++) e = h[l].parentNode.getAttribute("data-app-id"), f = h[l].parentNode.getAttribute("data-reading-id"), g = b.getCriticalEntryById(e).content[f].wits, void 0 !== g && g.indexOf(d) >= 0 && j.push(h[l]);
     for (var m = 0; m < i.length; m++) e = i[m].parentNode.getAttribute("data-app-id"), f = i[m].parentNode.getAttribute("data-reading-id"), g = b.getCriticalEntryById(e).content[f].wits, void 0 !== g && g.indexOf(d) >= 0 && k.push(i[m]);
     if (j.length === k.length)
      for (var n = j.length - 1; n >= 0; n--) {
       var o = j[n].parentNode,
        p = k[n].parentNode,
        q = o.getAttribute("data-app-id"),
        r = p.getAttribute("data-app-id"),
        s = "<evt-reading.*data-app-id.*" + q + ".*</evt-reading>(.|[\r\n])*?<evt-reading.*data-app-id.*" + r + ".*</evt-reading>",
        t = new RegExp(s, "ig"),
        u = '<span data-app-id-start="' + q + '" data-app-id-end="' + r + '" class="lacuna">[LACUNA]</span>';
       a.innerHTML = a.innerHTML.replace(t, u), a.innerHTML = c.balanceXHTML(a.innerHTML)
      } else a.innerHTML = "<span class=\"error\">{{ 'MESSAGES.ERROR_IN_PARSING_LACUNA' | translate }}</span>"
    }, h.isFragmentaryWitness = function(a, b) {
     try {
      return a.querySelectorAll("witStart[wit*='#" + b + "']").length > 0 ? !0 : a.querySelectorAll("rdg[wit*='#" + b + "'] witStart:not([wit]").length > 0 || a.querySelectorAll("lem[wit*='#" + b + "'] witStart:not([wit]").length > 0 ? !0 : !1
     } catch (c) {
      return !1
     }
    }, h.parseFragmentaryWitnessText = function(a, c) {
     for (var d, e, f, g = a.getElementsByTagName("witStart"), h = a.getElementsByTagName("witEnd"), i = [], j = [], k = 0; k < g.length; k++) d = g[k].parentNode.getAttribute("data-app-id"), e = g[k].parentNode.getAttribute("data-reading-id"), f = b.getCriticalEntryById(d).content[e].wits, void 0 !== f && f.indexOf(c) >= 0 && i.push(g[k]);
     for (var l = 0; l < h.length; l++) d = h[l].parentNode.getAttribute("data-app-id"), e = h[l].parentNode.getAttribute("data-reading-id"), f = b.getCriticalEntryById(d).content[e].wits, void 0 !== f && f.indexOf(c) >= 0 && j.push(h[l]);
     var m = "";
     if (g.length === h.length) {
      for (var n = i.length - 1; n >= 0; n--) {
       var o = i[n].parentNode,
        p = j[n].parentNode,
        q = o.getAttribute("data-app-id"),
        r = p.getAttribute("data-app-id"),
        s = '<evt-reading data-app-id="' + q + ".*</evt-reading>(.|[\r\n])*?<evt-reading data-app-id.*" + r + ".*</evt-reading>",
        t = new RegExp(s, "ig");
       m = '<span class="fragment fragment-start"></span>' + a.innerHTML.match(t) + '<span class="fragment fragment-end"></span>' + m
      }
      return m
     }
     return "<span class=\"error\">{{ 'MESSAGES.ERROR_IN_PARSING_FRAGMENTARY_TEXT' | translate }}</span>"
    }, h
   }]), angular.module("evtviewer.dataHandler").service("evtCriticalApparatus", ["parsedData", "evtParser", "config", function(a, b, c) {
    var d = {},
     e = c.skipWitnesses.split(",").filter(function(a) {
      return 0 !== a.length
     });
    d.getContent = function(a, b, e) {
     var f = {
      attributes: {
       values: a.attributes || {},
       _keys: Object.keys(a.attributes) || []
      },
      lemma: {
       content: "",
       attributes: {
        values: {},
        _keys: []
       }
      },
      significantReadings: [],
      notSignificantReadings: [],
      readingGroups: [],
      criticalNote: "",
      witnessesGroups: JSON.parse(JSON.stringify(c.witnessesGroups))
     };
     d.getWitnessesGroups(a, e, f.witnessesGroups);
     var g = a.content[a.lemma];
     void 0 !== g && (f.lemma.content += '<span class="app_lemma_content">' + d.getLemma(g, e) + "</span>", f.lemma.attributes.values = g.attributes || {}, f.lemma.attributes._keys = Object.keys(g.attributes) || []);
     for (var h = a._indexes.readings, i = h._indexes, j = 0; j < i.length; j++) {
      var k = a.content[i[j]];
      if (void 0 !== k) {
       var l = d.getSignificantReading(k, e);
       h._significant.indexOf(k.id) >= 0 ? f.significantReadings.push(l) : f.notSignificantReadings.push(l)
      }
     }
     if (!b && a._indexes.groups.length > 0)
      for (var m = 0; m < a._indexes.groups.length; m++) {
       var n = a.content[a._indexes.groups[m]];
       if (void 0 !== n) {
        var o = [];
        for (var p in n.attributes) o.push({
         label: p,
         values: n.attributes[p]
        });
        for (var q = [], r = 0; r < n.content.length; r++) {
         var s = a.content[n.content[r]];
         void 0 !== s && q.push(d.getSignificantReading(s, e))
        }
        q.length > 0 && f.readingGroups.push({
         header: o,
         readings: q
        })
       }
      }
     return f.criticalNote += a.note, f
    }, d.getWitnessesGroups = function(a, b, c) {
     for (var e in c) {
      c[e].wits = [], c[e].significant = {}, c[e].significantContent = {}, c[e].notSignificant = {}, c[e].notSignificantContent = {};
      for (var f in a._indexes.witMap) c[e].witnesses.indexOf(f) >= 0 && c[e].wits.push(f);
      delete c[e].witnesses;
      for (var g in c[e].wits) {
       var h = a._indexes.witMap[c[e].wits[g]],
        i = a.content[h];
       i._significant ? (c[e].significantContent[h] = i, void 0 === c[e].significant[h] ? (c[e].significant[h] = [], c[e].significant[h].push(c[e].wits[g])) : c[e].significant[h].push(c[e].wits[g])) : (c[e].notSignificantContent[h] = i, void 0 === c[e].notSignificant[h] ? (c[e].notSignificant[h] = [], c[e].notSignificant[h].push(c[e].wits[g])) : c[e].notSignificant[h].push(c[e].wits[g]))
      }
      var j, k, l, m;
      if (0 === Object.keys(c[e].significant).length) delete c[e].significant, delete c[e].significantContent;
      else {
       c[e].significantText = "";
       for (j in c[e].significant) {
        k = '<span class="', k += j === a.lemma ? 'lem inWitGrp">' : 'rdg inWitGrp">', k += d.getReadingForGroup(c[e].significantContent[j], b) + '</span><span class="witnesses">';
        for (l in c[e].significant[j]) m = c[e].significant[j][l], k += '<evt-witness-ref witness="' + m + '" data-scope-wit="' + b + '"></evt-witness-ref>';
        k += "</span>", c[e].significantText += k
       }
       delete c[e].significant, delete c[e].significantContent
      }
      if (0 === Object.keys(c[e].notSignificant).length) delete c[e].notSignificant, delete c[e].notSignificantContent;
      else {
       c[e].notSignificantText = "";
       for (j in c[e].notSignificant) {
        k = '<span class="', k += j === a.lemma ? 'lem inWitGrp">' : 'rdg inWitGrp">', k += d.getReadingForGroup(c[e].notSignificantContent[j], b) + '</span><span class="witnesses">';
        for (l in c[e].notSignificant[j]) m = c[e].notSignificant[j][l], k += '<evt-witness-ref witness="' + m + '" data-scope-wit="' + b + '"></evt-witness-ref>';
        k += "</span>", c[e].notSignificantText += k
       }
       delete c[e].notSignificant, delete c[e].notSignificantContent
      }
     }
    }, d.getReadingForGroup = function(a, b) {
     for (var c = "", e = 0; e < a.content.length; e++) c += "string" == typeof a.content[e] ? a.content[e] : "subApp" === a.content[e].type ? d.getSubApparatus(a.content[e].id, b) : "genericElement" === a.content[e].type ? d.getGenericContent(a.content[e], b) : "quote" === a.content[e].type || "analogue" === a.content[e].type ? d.getCriticalElementContent(a.content[e], b) : a.content[e].outerHTML;
     return "" === c && (c = " <i>om.</i> "), c = d.transformCriticalEntryLacunaMilestones(c), c = c.replace(/ xmlns="http:\/\/www\.tei-c\.org\/ns\/1\.0"/g, ""), c = d.transformCriticalEntryFragmentMilestones(c)
    }, d.getGenericContent = function(a, b) {
     var c;
     c = ' <span class="' + a.tagName + ' inApparatus">';
     for (var e = 0; e < a.content.length; e++) c += "string" == typeof a.content[e] ? a.content[e] : "subApp" === a.content[e].type ? d.getSubApparatus(a.content[e].id, b) : "genericElement" === a.content[e].type ? d.getGenericContent(a.content[e], b) : a.content[e].outerHTML;
     return c += "</span>"
    }, d.getLemma = function(a, b) {
     for (var c = "", e = 0; e < a.content.length; e++) c += "subApp" === a.content[e].type ? d.getSubApparatus(a.content[e].id, b) : "quote" === a.content[e].type || "analogue" === a.content[e].type ? d.getCriticalElementContent(a.content[e], b) : "genericElement" === a.content[e].type ? d.getGenericContent(a.content[e], b) : a.content[e];
     return c = d.transformCriticalEntryLacunaMilestones(c), "" !== c && (c += d.getCriticalEntryWitnesses(a, "lem", b)), c = c.replace(/ xmlns="http:\/\/www\.tei-c\.org\/ns\/1\.0"/g, ""), c = d.transformCriticalEntryFragmentMilestones(c)
    }, d.getSubApparatus = function(b, c) {
     var e = "",
      f = a.getCriticalEntryById(b),
      g = d.getContent(f, !0, c);
     e += '<span class="sub_app"> ((' + g.lemma.content + " ";
     for (var h = 0; h < g.significantReadings.length; h++) e += g.significantReadings[h].content, h < g.significantReadings.length - 1 && (e += "; ");
     return e += ")) </span>"
    }, d.getSignificantReading = function(a, b) {
     for (var c = "", e = {}, f = 0; f < a.content.length; f++) c += "string" == typeof a.content[f] ? a.content[f] : "subApp" === a.content[f].type ? d.getSubApparatus(a.content[f].id, b) : "genericElement" === a.content[f].type ? d.getGenericContent(a.content[f], b) : "quote" === a.content[f].type || "analogue" === a.content[f].type ? d.getCriticalElementContent(a.content[f], b) : a.content[f].outerHTML;
     "" === c && (c = " <i>om.</i> "), c = d.transformCriticalEntryLacunaMilestones(c);
     var g = d.getCriticalEntryWitnesses(a, "rdg", b);
     return (void 0 === a.wits || "" !== g) && (c += g, c = c.replace(/ xmlns="http:\/\/www\.tei-c\.org\/ns\/1\.0"/g, ""), c = d.transformCriticalEntryFragmentMilestones(c), e = {
      content: c,
      attributes: {
       values: a.attributes || {},
       _keys: Object.keys(a.attributes) || []
      }
     }), e
    }, d.getCriticalElementContent = function(a, b) {
     var c = a.content || [],
      e = '<span class="' + a.type + ' inApparatus">';
     for (var g in c)
      if ("string" == typeof c[g]) e += '<span class="textNode">' + c[g] + "</span>";
      else {
       var h = ["EVT-POPOVER", "lb", "ptr", "link", "linkGrp", "pb"];
       if (h.indexOf(c[g].tagName) >= 0) e += "";
       else if ("app" === c[g].type) {
        var i = f(c[g], b);
        e += i
       } else "analogue" === c[g].type ? e += d.getCriticalElementContent(c[g], b) : "quote" === c[g].type ? e += d.getCriticalElementContent(c[g], b) : void 0 !== c[g].content && (e += d.getText(c[g]))
      } return e += "</span>"
    }, d.getText = function(a) {
     var b = "",
      c = a.content;
     if (void 0 !== c)
      for (var e = 0; e < c.length; e++) "string" == typeof c[e] ? b += '<span class="textNode">' + c[e] + "</span>" : void 0 !== c[e].content && (b += d.getText(c[e]));
     return b
    };
    var f = function(a, b) {
     var c = "";
     if ("" === b || void 0 === b || void 0 === a._indexes.witMap[b]) {
      var e = a.lemma;
      c += d.getText(a.content[e])
     } else {
      var f = a._indexes.witMap[b];
      c += d.getText(a.content[f])
     }
     return c
    };
    return d.getCriticalEntryWitnesses = function(a, b, c) {
     var d = "";
     if (void 0 !== a.wits && a.wits.length > 0)
      for (var f in a.wits) f && a.wits[f] && e.indexOf(f) < 0 && (d += '<evt-witness-ref witness="' + a.wits[f] + '" data-scope-wit="' + c + '"></evt-witness-ref>');
     else if ("lem" === b && void 0 !== a.autoWits && a.autoWits.length > 0)
      for (var g in a.autoWits) g && a.autoWits[g] && e.indexOf(g) < 0 && (d += '<evt-witness-ref witness="' + a.autoWits[g] + '" data-scope-wit="' + c + '"></evt-witness-ref>');
     return "" !== d && (d = '<span class="witnesses witnesses-' + b + '">' + d + "</span>"), d
    }, d.getCriticalEntryAttributes = function(a, b) {
     var c = "";
     if (void 0 !== a.attributes)
      for (var d in a.attributes) "wit" !== d && "xml:id" !== d && (c += '<span class="' + d + '">' + d + ": " + a.attributes[d] + "</span>");
     return "" !== c && (c = '<span class="attributes" style="display:none">' + c + "</span>"), c
    }, d.transformCriticalEntryLacunaMilestones = function(a) {
     return a = a.replace(/<lacunaStart(.|[\r\n])*?\/>/gi, "<i> {{ 'CRITICAL_APPARATUS.LACUNA_START' | translate }} </i>"), a = a.replace(/<lacunaEnd(.|[\r\n])*?\/>/gi, "<i> {{ 'CRITICAL_APPARATUS.LACUNA_END' | translate }} </i>")
    }, d.transformCriticalEntryFragmentMilestones = function(a) {
     var b = a.match(/<witStart(.|[\r\n])*?\/>/gi);
     if (null !== b)
      for (var c = 0; c < b.length; c++) {
       var d = b[c],
        e = d.match(/"#.*"/g);
       e = null !== e ? " of " + e[0].replace(/["#]/g, "") : "";
       var f = new RegExp(d, "ig");
       a = a.replace(f, "<i> [beginning of fragment" + e + "] </i>")
      }
     var g = a.match(/<witEnd(.|[\r\n])*?\/>/gi);
     if (null !== g)
      for (var h = 0; h < g.length; h++) {
       var i = g[h],
        j = i.match(/"#.*"/g);
       j = null !== j ? " of " + j[0].replace(/["#]/g, "") : "";
       var k = new RegExp(i, "ig");
       a = a.replace(k, "<i> [end of fragment" + j + "] </i>")
      }
     return a
    }, d
   }]), angular.module("evtviewer.dataHandler").service("evtNamedEntitiesParser", ["parsedData", "evtParser", "config", function(a, b, c) {
    var d = {},
     e = "<sourceDesc>",
     f = [{
      listDef: "<listPlace>",
      contentDef: "<place>",
      contentForLabelDef: "<placeName>",
      type: "place"
     }, {
      listDef: "<listPerson>",
      contentDef: "<person>",
      contentForLabelDef: "<persName>",
      type: "person"
     }, {
      listDef: "<listOrg>",
      contentDef: "<org>",
      contentForLabelDef: "<orgName>",
      type: "org"
     }, {
      listDef: "<list>",
      contentDef: "<item>",
      contentForLabelDef: "",
      type: "generic"
     }],
     g = "xml:id",
     h = "type",
     i = "<head>",
     j = "<listRelation>",
     k = "<relation>",
     l = "name",
     m = "active",
     n = "passive",
     o = "mutual",
     p = "type";
    d.parseEntities = function(c) {
     for (var h = angular.element(c), i = "", j = 0; j < f.length; j++) {
      var l = e.replace(/[<>]/g, "") + " > " + f[j].listDef.replace(/[<>]/g, ""),
       m = f[j].contentDef.replace(/[<>]/g, ""),
       n = f[j].type || "generic",
       o = "LISTS." + n.toUpperCase();
      i += l + " " + k.replace(/[<>]/g, "") + ", ", angular.forEach(h.find(l), function(c) {
       if (!b.isNestedInElem(c, c.tagName)) {
        var e = c.getAttribute(g) || void 0;
        if ("generic" !== n || "generic" === n && void 0 !== e) {
         var h = {
          id: e || b.xpath(c),
          type: n,
          title: o
         };
         angular.forEach(c.childNodes, function(b) {
          if (1 === b.nodeType) {
           var c = t(b, h),
            e = {};
           f[j].listDef.indexOf("<" + b.tagName + ">") >= 0 ? d.parseDirectSubList(b, f[j], h) : m.indexOf(b.tagName) >= 0 && (e = q(b, f[j]), a.addNamedEntityInCollection(c, e, e.id.substr(0, 1).toLowerCase()))
          }
         }), c.parentNode.removeChild(c)
        }
       }
      })
     }
     var p = h.find(i.slice(0, -2));
     if (p && p.length > 0) {
      var r = {
       id: "parsedRelations",
       type: "relation",
       title: "LISTS.RELATION"
      };
      angular.forEach(p, function(a) {
       d.parseRelationsInList(a, r)
      })
     }
     console.log("## parseEntities ##", a.getNamedEntitiesCollection())
    }, d.parseDirectSubList = function(b, c, d) {
     var e = c.contentDef;
     f.listDef;
     angular.forEach(b.childNodes, function(b) {
      if (1 === b.nodeType) {
       var f = t(b, d),
        g = {};
       e.indexOf(b.tagName) >= 0 && (g = q(b, c), a.addNamedEntityInCollection(f, g, g._listPos))
      }
     })
    }, d.parseRelationsInList = function(c, d) {
     var e = b.parseXMLElement(c, c, {
       skip: "<evtNote>"
      }),
      f = c.getAttribute(m),
      h = c.getAttribute(o),
      i = c.getAttribute(n),
      k = c.getAttribute(l),
      q = c.getAttribute(p);
     !q && c.parentNode && j.indexOf("<" + c.parentNode.tagName + ">") >= 0 && (q = c.parentNode.getAttribute(p)), k = k ? b.camelToSpace(k) : k;
     var r = c.getAttribute(g) || b.xpath(c),
      s = {
       id: r,
       label: "",
       content: {
        _indexes: []
       },
       _listPos: "",
       _xmlSource: c.outerHTML.replace(/ xmlns="http:\/\/www\.tei-c\.org\/ns\/1\.0"/g, "")
      };
     s.content.name = [{
      attributes: {
       _indexes: []
      },
      text: k
     }], s.content._indexes.push("name"), s.label = k ? k.toLowerCase() : "", k && (s.label += " ("), s.label += q ? q : "generic", s.label += " relation", k && (s.label += ")");
     var t = '<span class="relation">',
      u = "",
      v = "",
      w = "",
      x = f ? f.split("#").filter(function(a) {
       return 0 !== a.length
      }) : [],
      y = h ? h.split("#").filter(function(a) {
       return 0 !== a.length
      }) : [],
      z = i ? i.split("#").filter(function(a) {
       return 0 !== a.length
      }) : [];
     if (f || h || i || k) {
      for (var A, B, C = 0; C < x.length; C++) A = document.createElement("evt-named-entity-ref"), B = x[C].trim(), B && "" !== B && A.setAttribute("data-entity-id", B), A.textContent = "#" + B, t += A.outerHTML + " ", u += A.outerHTML.trim() + ", ";
      for (var D = 0; D < y.length; D++) 0 === D && f && "" !== f && (t += "{{ 'AND' | translate}} "), A = document.createElement("evt-named-entity-ref"), B = y[D].trim(), B && "" !== B && A.setAttribute("data-entity-id", B), A.textContent = "#" + B, t += A.outerHTML + " ", v += A.outerHTML.trim() + ", ";
      t += k ? '<span class="relation-name">' + k + " </span>" : "";
      for (var E = 0; E < z.length; E++) A = document.createElement("evt-named-entity-ref"), B = z[E].trim(), B && "" !== B && A.setAttribute("data-entity-id", B), A.textContent = "#" + B, t += A.outerHTML + " ", w += A.outerHTML.trim() + ", "
     }
     t += "</span>", t += e ? e.innerHTML : c.innerHTML;
     for (var F = 0; F < x.length; F++) {
      var G = a.getNamedEntity(x[F].trim());
      G && "" !== t && (G.content.relations || (G.content.relations = [], G.content._indexes.push("relations")), G.content.relations.push({
       text: "{{ 'LISTS.RELATION_ACTIVE_ROLE ' | translate:'{relationType:\"" + q + "\"}'}}: " + t,
       attributes: []
      }), G._xmlSource += c.outerHTML.replace(/ xmlns="http:\/\/www\.tei-c\.org\/ns\/1\.0"/g, ""))
     }
     for (var H = 0; H < y.length; H++) {
      var I = a.getNamedEntity(y[H].trim());
      I && "" !== t && (I.content.relations || (I.content.relations = [], I.content._indexes.push("relations")), I.content.relations.push({
       text: "{{ 'LISTS.RELATION_MUTUAL_ROLE ' | translate:'{relationType:\"" + q + "\"}'}}: " + t,
       attributes: []
      }), I._xmlSource += c.outerHTML.replace(/ xmlns="http:\/\/www\.tei-c\.org\/ns\/1\.0"/g, ""))
     }
     for (var J = 0; J < z.length; J++) {
      var K = a.getNamedEntity(z[J].trim());
      K && "" !== t && (K.content.relations || (K.content.relations = [], K.content._indexes.push("relations")), K.content.relations.push({
       text: "{{ 'LISTS.RELATION_PASSIVE_ROLE ' | translate:'{relationType:\"" + q + "\"}'}}: " + t,
       attributes: []
      }), K._xmlSource += c.outerHTML.replace(/ xmlns="http:\/\/www\.tei-c\.org\/ns\/1\.0"/g, ""))
     }
     if (s.label = b.capitalize(s.label + ": " + t), s._listPos = s.label.substr(0, 1).toLowerCase(), "" !== u || "" !== v || "" !== w) {
      var L = [];
      "" !== u && L.push({
       attributes: {
        type: "LISTS.RELATION_ACTIVE",
        _indexes: ["type"]
       },
       text: u.slice(0, -2)
      }), "" !== v && L.push({
       attributes: {
        type: "LISTS.RELATION_MUTUAL",
        _indexes: ["type"]
       },
       text: v.slice(0, -2)
      }), "" !== w && L.push({
       attributes: {
        type: "LISTS.RELATION_PASSIVE",
        _indexes: ["type"]
       },
       text: w.slice(0, -2)
      }), s.content.actors = L, s.content._indexes.push("actors")
     }
     a.addNamedEntityInCollection(d, s, s._listPos)
    };
    var q = function(a, c) {
      var d = c.contentDef,
       e = c.listDef,
       f = c.contentForLabelDef,
       h = a.getAttribute(g) || b.xpath(a),
       i = {
        id: h,
        label: "",
        content: {
         _indexes: []
        },
        _listPos: h.substr(0, 1).toLowerCase(),
        _xmlSource: a.outerHTML.replace(/ xmlns="http:\/\/www\.tei-c\.org\/ns\/1\.0"/g, "")
       },
       j = a.getElementsByTagName(f.replace(/[<>]/g, ""));
      if (j && j.length > 0) {
       var k = b.parseXMLElement(j[0], j[0], {
        skip: "<evtNote>"
       });
       i.label = k ? k.innerHTML : h
      } else i.label = h;
      return angular.forEach(a.childNodes, function(a) {
       1 === a.nodeType && (f.indexOf("<" + a.tagName + ">") >= 0 && a.children && a.children.length > 0 ? angular.forEach(a.children, function(a) {
        1 === a.nodeType && r(i, a, d, e)
       }) : r(i, a, d, e))
      }), "<placeName>" === f && s(i, a), i
     },
     r = function(a, c, e, f) {
      void 0 === a.content[c.tagName] && (a.content[c.tagName] = [], a.content._indexes.push(c.tagName));
      var g;
      g = e.indexOf("<" + c.tagName + ">") >= 0 ? d.parseSubEntity(c, e, f) : b.parseXMLElement(c, c, {
       skip: "<evtNote>"
      }), a.content[c.tagName].push({
       text: g ? g.innerHTML : c.innerHTML,
       attributes: b.parseElementAttributes(c)
      })
     },
     s = function(a, b) {
      var c = b.outerHTML.search("<geo");
      if (c >= 0) {
       var d = b.outerHTML.search("</geo>"),
        e = b.outerHTML.substring(c, d);
       e = e.substring(e.indexOf(">") + 1);
       var f = e.split(", ");
       2 === f.length && (a.map = {
        lat: f[0],
        lng: f[1]
       })
      }
     };
    d.parseSubEntity = function(a, c, e) {
     var f = document.createElement("evt-named-entity-ref"),
      g = a.getAttribute("ref"),
      h = g ? g.replace("#", "") : void 0;
     h && "" !== h && f.setAttribute("data-entity-id", h);
     var i = a.tagName ? a.tagName : "generic";
     f.setAttribute("data-entity-type", i);
     for (var j = 0; j < a.childNodes.length; j++) {
      var k, l = a.childNodes[j].cloneNode(!0);
      k = 1 === l.nodeType && e.toLowerCase().indexOf("<" + l.tagName.toLowerCase() + ">") >= 0 ? d.parseNamedEntitySubList(l, l, "<evtNote>") : b.parseXMLElement(l, l, {
       skip: "<evtNote>"
      }), f.appendChild(k)
     }
     return f
    }, d.parseNamedEntitySubList = function(a, c, d) {
     var e = document.createElement("span"),
      f = document.createElement("span"),
      g = "";
     e.className = c.tagName.toLowerCase(), f.className = c.tagName.toLowerCase() + "-attributes";
     for (var h = 0; h < c.attributes.length; h++) {
      var i = c.attributes[h];
      i.specified && (e.setAttribute("data-" + i.name.replace(":", "-"), i.value), g += b.camelToSpace(i.value) + ", ")
     }
     "" !== g && (f.textContent = g.slice(0, -2), e.appendChild(f));
     for (var j = 0; j < c.childNodes.length; j++) {
      var k = c.childNodes[j].cloneNode(!0),
       l = b.parseXMLElement(a, k, {
        skip: d
       });
      e.appendChild(l)
     }
     return e
    };
    var t = function(a, c) {
      var d = c;
      if (a.previousElementSibling && i.indexOf("<" + a.previousElementSibling.tagName + ">") >= 0) d.id = a.previousElementSibling.textContent.trim().replace(/\s/g, ""), d.title = a.previousElementSibling.textContent.trim();
      else {
       var e, f = a.parentNode;
       if (f && f.getAttribute(g) && (e = f.getAttribute(g).trim().replace(/\s/g, ""), d.id = e, d.title = e), f && f.getAttribute(h)) {
        var j = f.getAttribute(h).trim();
        e && void 0 !== e || (d.id = j), j = b.camelToSpace(j), d.title = j.substr(0, 1).toUpperCase() + j.substr(1)
       }
      }
      return d
     },
     u = function(a) {
      var b = 'xml:id=".*"',
       c = new RegExp(b, "ig"),
       d = a.match(c);
      c = new RegExp('xml:id=(?:"[^"]*"|^[^"]*$)', "ig");
      var e = d ? d[0].match(c) : void 0,
       f = e ? e[0].replace(/xml:id/, "").replace(/(=|\"|\')/gi, "") : "";
      return f
     };
    return d.parseEntitiesOccurrences = function(b, c) {
     var d = b && b.content ? b.content : void 0,
      e = d ? d.outerHTML : void 0,
      f = [];
     if (e && c && "" !== c)
      for (var g = "<pb(.|[\r\n])*?/>(.|[\r\n])*?(?=#" + c + ")", h = new RegExp(g, "ig"), i = e.match(h), j = i ? i.length : 0, k = 0; j > k; k++) {
       var l = "<pb(.|[\r\n])*?/>",
        m = new RegExp(l, "ig"),
        n = i[k].match(m),
        o = n && n.length > 0 ? n[n.length - 1] : "",
        p = u(o);
       if (p) {
        var q = a.getPage(p);
        f.push({
         pageId: p,
         pageLabel: q ? q.label : p,
         docId: b ? b.value : "",
         docLabel: b ? b.label : ""
        })
       }
      }
     return f
    }, d
   }]), angular.module("evtviewer.dataHandler").service("evtPrimarySourcesParser", ["$q", "xmlParser", "evtParser", "parsedData", "config", function(a, b, c, d, e) {
    var f = {},
     g = "surface",
     h = "zone";
    return f.parseZones = function(a) {
     var b = angular.element(a);
     angular.forEach(b.find(g), function(a) {
      var b = (a.getAttribute("xml:id"), a.getAttribute("corresp"));
      b = b ? b.replace("#", "") : b, angular.forEach(a.childNodes, function(a) {
       if (a.tagName === h) {
        var c = {};
        if (a.attributes)
         for (var e = 0; e < a.attributes.length; e++) {
          var f = a.attributes[e];
          if (f.specified) {
           var g = "xml:id" === f.name ? "id" : f.name.replace(":", "-");
           c[g] = f.value
          }
         }
        c.page = b, d.addZone(c)
       }
      })
     }), console.log("## ZONES ##", d.getZones())
    }, f
   }]), angular.module("evtviewer.dataHandler").service("evtProjectInfoParser", ["$q", "parsedData", "evtParser", "xmlParser", function(a, b, c, d) {
    var e = {},
     f = "<teiHeader>",
     g = "<fileDesc>",
     h = "<encodingDesc>",
     i = "<profileDesc>",
     j = "<xenoData>",
     k = "<revisionDesc>",
     l = "<msDesc>",
     m = "<evtNote>",
     n = "<listBibl>, <listWit>";
    e.parseProjectInfo = function(a) {
     var c = angular.element(a);
     angular.forEach(c.find(f.replace(/[<>]/g, "")), function(a) {
      e.parseEditionReference(a), e.parseFileDescription(a), e.parseEncodingDescription(a), e.parseTextProfile(a), e.parseOutsideMetadata(a), e.parseRevisionHistory(a), e.parseMsDescription(a)
     }), console.log("## parseProjectInfo ##", b.getProjectInfo())
    };
    var o = "<publicationStmt>",
     p = "<titleStmt>";
    return e.parseEditionReference = function(a) {
     var c = angular.element(a),
      d = c.find(p.replace(/[<>]/g, "") + " title")[0],
      e = c.find(p.replace(/[<>]/g, "") + " author")[0],
      f = c.find(o.replace(/[<>]/g, "") + " publisher")[0],
      g = {
       title: d ? d.textContent : "",
       author: e ? e.textContent : "",
       publisher: f ? f.textContent : ""
      };
     b.updateProjectInfoContent(g, "editionReference")
    }, e.parseFileDescription = function(a) {
     var d = angular.element(a);
     angular.forEach(d.find(g.replace(/[<>]/g, "")), function(d) {
      if (d.children.length > 0) {
       var e = c.parseXMLElement(a, d, {
        skip: m,
        exclude: n,
        context: "projectInfo"
       }).outerHTML;
       b.updateProjectInfoContent(e, "fileDescription")
      }
     })
    }, e.parseEncodingDescription = function(a) {
     var d = angular.element(a);
     angular.forEach(d.find(h.replace(/[<>]/g, "")), function(d) {
      if (d.children.length > 0) {
       var f = "",
        g = angular.element(d).find("variantEncoding")[0];
       if (g) {
        var h = c.parseXMLElement(a, d, {
         skip: m,
         exclude: n,
         context: "projectInfo"
        }).outerHTML;
        f = h ? h : "", f += "<span class=\"variantEncoding\">{{ 'PROJECT_INFO.ENCODING_METHOD_USED' | translate:'{ method:  \"" + g.getAttribute("method") + "\" }' }}</span>", e.parseVariantEncodingInfo(g)
       }
       b.updateProjectInfoContent(f, "encodingDescription")
      }
     })
    }, e.parseVariantEncodingInfo = function(a) {
     a.hasAttribute("method") && b.setEncodingDetail("variantEncodingMethod", a.getAttribute("method")), a.hasAttribute("location") && b.setEncodingDetail("variantEncodingLocation", a.getAttribute("location"))
    }, e.parseTextProfile = function(a) {
     var d = angular.element(a);
     angular.forEach(d.find(i.replace(/[<>]/g, "")), function(d) {
      if (d.children.length > 0) {
       var e = c.parseXMLElement(a, d, {
        skip: m,
        exclude: n,
        context: "projectInfo"
       }).outerHTML;
       b.updateProjectInfoContent(e, "textProfile")
      }
     })
    }, e.parseOutsideMetadata = function(a) {
     var d = angular.element(a);
     angular.forEach(d.find(j.replace(/[<>]/g, "")), function(d) {
      if (d.children.length > 0) {
       var e = c.parseXMLElement(a, d, {
        skip: m,
        exclude: n,
        context: "projectInfo"
       }).outerHTML;
       b.updateProjectInfoContent(e, "outsideMetadata")
      }
     })
    }, e.parseRevisionHistory = function(a) {
     var d = angular.element(a);
     angular.forEach(d.find(k.replace(/[<>]/g, "")), function(d) {
      var e = c.parseXMLElement(a, d, {
       skip: m,
       exclude: n,
       context: "projectInfo"
      }).outerHTML;
      b.updateProjectInfoContent(e, "revisionHistory")
     })
    }, e.parseMsDescription = function(a) {
     var d = angular.element(a);
     angular.forEach(d.find(l.replace(/[<>]/g, "")), function(d) {
      var e = c.parseXMLElement(a, d, {
       skip: m,
       exclude: n,
       context: "projectInfo"
      }).outerHTML;
      b.updateProjectInfoContent(e, "msDesc")
     })
    }, e
   }]), angular.module("evtviewer.dataHandler").service("evtCriticalParser", ["$q", "parsedData", "evtParser", "evtCriticalApparatusParser", "evtSourcesParser", "evtAnaloguesParser", "evtCriticalElementsParser", "xmlParser", "config", "evtDepaParser", function(a, b, c, d, e, f, g, h, i, j) {
    var l = {},
     m = "<app>",
     n = "<lem>",
     o = n + ", <rdg>",
     p = "<rdgGrp>",
     q = i.quoteDef,
     r = i.analogueDef,
     s = (c.createRegExpr(r), "<evt-reading>,<pb>," + m + "," + o + "," + p + "," + q + "," + r + ",<evt-quote>,<evt-analogue>,<evt-version-reading>");
    i.skipWitnesses.split(",").filter(function(a) {
     return 0 !== a.length
    });
    return l.parseWitnessText = function(e, f, g) {
     var h, j = a.defer();
     if (void 0 !== e) {
      var k = l.getDocToParse(e),
       m = k.getElementsByTagName("body")[0],
       n = b.getWitness(g);
      if (l.parseCriticalElementsInText(m, k, g, null), m.innerHTML = m.innerHTML.replace(/>[\s\r\n]*?</g, "><"), angular.forEach(m.querySelectorAll("[exclude]"), function(a) {
        var b = a.getAttribute("exclude");
        b && b.indexOf("#" + g) >= 0 && a.parentNode.removeChild(a)
       }), angular.forEach(m.children, function(a) {
        var b = s + "," + i.lacunaMilestone + "," + i.fragmentMilestone;
        a.parentNode.replaceChild(c.parseXMLElement(k, a, {
         skip: b
        }), a)
       }), d.parseWitnessPageBreaks(m, n), d.parseWitnessLacunas(m, g), d.isFragmentaryWitness(m, g)) {
       m.innerHTML = m.innerHTML.replace(/xmlns="http:\/\/www\.w3\.org\/1999\/xhtml"/g, "");
       var o = d.parseFragmentaryWitnessText(m, g);
       h = c.balanceXHTML(o)
      } else h = m.innerHTML;
      h = c.balanceXHTML(h)
     } else h = "<span> {{ 'MESSAGES.TEXT_NOT_AVAILABLE' | translate }}</span>";
     return b.addWitnessText(g, f, h), j.resolve("success"), j
    }, l.parseCriticalText = function(d, e, f) {
     var g, h = a.defer();
     if (void 0 !== d) {
      var j = l.getDocToParse(d),
       m = j.getElementsByTagName("body")[0];
      l.parseCriticalElementsInText(m, j, "", f);
      var n = m.getElementsByTagName("pb");
      for (k = 0; k < n.length;) {
       var o = n[k];
       o.parentNode.removeChild(o)
      }
      angular.forEach(m.children, function(a) {
       var b = s + "," + i.lacunaMilestone + "," + i.fragmentMilestone;
       a.parentNode.replaceChild(c.parseXMLElement(j, a, {
        skip: b
       }), a)
      }), g = m.outerHTML
     } else g = "<span>Text not available.</span>";
     if (void 0 === g) {
      var p = "<span class=\"alert-msg alert-msg-error critical-text-error\"># Critical Text Error. # <br/>{{'MESSAGES.ERROR_IN_PARSING_TEXT' | translate}} <br />{{'MESSAGES.TRY_DIFFERENT_BROWSER_OR_CONTACT_DEVS' | translate}}</span>";
      g = p
     }
     return ("" === f || void 0 === f || f === i.versions[0]) && b.addCriticalText(g, e), void 0 !== f && b.addVersionText(g, e, f), h.resolve("success"), h
    }, l.getDocRoot = function(a) {
     if (a && a.tagName && "tei" === a.tagName.toLowerCase()) return a;
     if (a && a.parentNode) return l.getDocRoot(a.parentNode);
     var b = a ? a.querySelector("tei") : a;
     return b ? l.getDocRoot(b) : a
    }, l.getDocToParse = function(a) {
     var b, d = l.getDocRoot(a),
      e = d.cloneNode(!0);
     return angular.forEach(angular.element(e).find(c.parserProperties.defDocElement), function(c) {
      0 === c.outerHTML.localeCompare(a.outerHTML) && (b = c)
     }), b ? b : a
    }, l.parseCriticalElementsInText = function(a, d, e, f) {
     for (var g = a.getElementsByTagName(m.replace(/[<>]/g, "")) || [], h = g.length - 1; h < g.length && h >= 0;) c.isNestedInElem(g[h], m.replace(/[<>]/g, "")) || l.appendAppNode(g[h], d, e, f), h--;
     if ("double-end-point" === b.getEncodingDetail("variantEncodingMethod") && "external" === b.getEncodingDetail("variantEncodingLocation")) {
      var k = Object.values(b.getCriticalEntries()._indexes.depa.start),
       n = [];
      k.map(function(a) {
       n.indexOf(a) < 0 && n.push(a)
      });
      for (var o = n.length - 1; o >= 0;) {
       var p = a.querySelector("[*|id=" + n[o] + "]");
       p && j.setAppInText(p, e, a), o--
      }
     }
     if (i.quoteDef) {
      var s = [],
       t = q.split(",");
      angular.forEach(t, function(b) {
       var c = a.getElementsByTagName(b.replace(/[<>]/g, "")) || [];
       s = s.concat(c)
      });
      for (var u = s.length - 1; u < s.length && u >= 0;) l.appendQuoteNode(s[u], d, e), u--
     }
     if (i.analogueDef) {
      var v = [],
       w = r.split(",") || [];
      angular.forEach(w, function(b) {
       var c = a.querySelectorAll(b.replace("<", "").replace(">", ""));
       angular.forEach(c, function(a) {
        v.push(a)
       })
      });
      for (var x = v.length - 1; x < v.length && x >= 0;) l.appendAnalogueNode(v[x], d, e), x--
     }
    }, l.appendAnalogueNode = function(a, c, d) {
     var e, f = l.getParsedNodeId(a),
      h = b.getAnalogue(f);
     h && (e = g.getAnalogueText(h, d, c)), e && a.parentNode.replaceChild(e, a)
    }, l.appendQuoteNode = function(a, c, d) {
     var e, f = l.getParsedNodeId(a),
      h = b.getQuote(f);
     h && (e = g.getQuoteText(h, d, c)), e && a.parentNode.replaceChild(e, a)
    }, l.appendAppNode = function(a, c, d, e) {
     var f, h = l.getParsedNodeId(a),
      k = "recensio" === a.getAttribute("type") ? b.getVersionEntry(h) : b.getCriticalEntryById(h);
     if (!i.loadCriticalEntriesImmediately || void 0 === k)
      if ("recensio" === a.getAttribute("type")) g.handleVersionEntry(a), k = b.getVersionEntry(h);
      else {
       g.handleAppEntry(a);
       var n = a.getElementsByTagName(m.replace(/[<>]/g, ""));
       angular.forEach(Object.values(n), function(a) {
        g.handleAppEntry(a)
       }), k = b.getCriticalEntryById(h)
      } if (k) switch (d) {
      case "":
       "double-end-point" === b.getEncodingDetail("variantEncodingMethod") ? j.setInternalAppInText(a, k, d, c) : f = "recensioApp" === k.type ? g.getVersionEntryLemma(k, d, e) : g.getEntryLemmaText(k, d);
       break;
      default:
       "double-end-point" === b.getEncodingDetail("variantEncodingMethod") ? j.setInternalAppInText(a, k, d, c) : f = "recensioApp" === k.type ? g.getVersionEntryReadingText(k, d) : g.getEntryWitnessReadingText(k, d)
     } else f = l.createErrorElement(null, "encodingError");
     f ? a.parentNode.replaceChild(f, a) : "double-end-point" === b.getEncodingDetail("variantEncodingMethod") && a.parentNode.removeChild(a)
    }, l.createErrorElement = function(a, b) {
     var c = document.createElement("span");
     return c.className = a || "errorMsg", c.textContent = b || "ERROR", c
    }, l.getParsedNodeId = function(a) {
     var b;
     return a.attributes && a.getAttribute("xml:id") ? (b = a.getAttribute("xml:id"), b = "app" === a.tagName ? "app_" + b : b) : b = c.xpath(a).substr(1), b
    }, l.parseSourceText = function(d, e) {
     var f, g = a.defer();
     angular.element(m);
     if (void 0 !== d) {
      for (var h, i, j, k, m = l.getDocToParse(d), n = m.getElementsByTagName("body")[0], o = n.getElementsByTagName("seg"), p = o.length - 1, q = b.getSources()._indexes.correspId[e]; p >= 0;) h = o[p], h.hasAttribute("type") && "srcTxtLink" === h.getAttribute("type") && (h.hasAttribute("xml:id") && (i = h.getAttribute("xml:id")), void 0 !== q[i] && (j = document.createElement("evt-source-seg"), j.setAttribute("data-seg-id", i), j.setAttribute("data-source-id", e), k = h.innerHTML, j.innerHTML = k, h.parentNode.replaceChild(j, h))), p--;
      angular.forEach(n.children, function(a) {
       var b = s + "<evt-source-seg>";
       a.parentNode.replaceChild(c.parseXMLElement(m, a, {
        skip: b
       }), a)
      }), f = n.outerHTML
     } else f = "<span>Text not available.</span>";
     if (void 0 === f) {
      var r = "<span class=\"alert-msg alert-msg-error\">{{'MESSAGES.ERROR_IN_PARSING_TEXT' | translate}} <br />{{'MESSAGES.TRY_DIFFERENT_BROWSER_OR_CONTACT_DEVS' | translate}}</span>";
      f = r
     }
     return b.getSource(e).text = f, g.resolve("success"), g
    }, l
   }]), angular.module("evtviewer.dataHandler").service("evtSourcesParser", ["$q", "parsedData", "evtParser", "evtCriticalElementsParser", "xmlParser", "config", function(a, b, c, d, e, f) {
    var g = {},
     h = f.quoteDef || "<quote>",
     i = function(a) {
      var c = b.getQuotes()._indexes.sourcesRef._id;
      if (3 !== a.nodeType && 1 === a.nodeType)
       if (a.attributes.length > 0) {
        for (var e = 0; e < a.attributes.length; e++)
         if ("xml:id" === a.attributes[e].name) {
          var f = a.attributes[e].value;
          c.indexOf(f) >= 0 && d.parseSource(a)
         }
       } else if (a.childNodes.length > 0)
       for (var g = 0; g < a.childNodes.length; g++) i(a.childNodes[g])
     };
    g.parseQuotes = function(e) {
     var f = a.defer(),
      g = angular.element(e);
     return angular.forEach(g.find(h.replace(/[<>]/g, "")), function(a) {
      var e = c.isNestedInElem(a, "body");
      if (e) {
       var f = d.parseQuote(a);
       b.addQuote(f)
      }
     }), console.log("## Quotes ##", b.getQuotes()), f.resolve("success"), f
    };
    var j = function() {
     for (var a = b.getSources()._indexes.quotesRef._id, c = b.getQuotes()._indexes.encodingStructure, d = [], e = 0; e < c.length; e++) a.indexOf(c[e]) < 0 && (d.push(c[e]), c.splice(e, 1));
     for (var f = 0; f < d.length; f++) delete b.getQuotes()[d[f]]
    };
    return g.parseSources = function(c, d) {
     var e = a.defer();
     if (b.getQuotes()._indexes.sourcesRef._id.length > 0)
      if ("" === f.sourcesUrl) {
       var h, k = angular.element(c);
       k.find("text group text").length > 0 ? h = "text group text" : k.find("text").length > 0 ? h = "text" : k.find('div[subtype="edition_text"]').length > 0 && (h = 'div[subtype="edition_text"]'), angular.forEach(k.find(h), function(a) {
        i(a)
       }), console.log("## Sources ##", b.getSources()), j()
      } else d && g.parseExternalSources(d);
     return e.resolve("success"), e
    }, g.parseExternalSources = function(c) {
     for (var d = a.defer(), e = 0; e < c.childNodes.length; e++) i(c.childNodes[e]);
     return console.log("## External Sources ##", b.getSources()), j(), d.resolve("success"), d
    }, g
   }]), angular.module("evtviewer.dataHandler").service("evtSourcesApparatus", ["parsedData", "evtParser", "config", "evtSourcesParser", "evtCriticalApparatus", "evtCriticalApparatusParser", function(a, b, c, d, e, f) {
    var g = {};
    return g.getContent = function(b, c) {
     for (var d, e, f = {
       attributes: {
        values: b.attributes || {},
        _keys: Object.keys(b.attributes) || []
       },
       sources: [],
       quote: "",
       abbrQuote: {
        begin: "",
        end: ""
       },
       quoteCorresp: b._indexes.correspId,
       _xmlSource: b._xmlSource.replace(/ xmlns="http:\/\/www\.tei-c\.org\/ns\/1\.0"/g, "")
      }, h = b._indexes.sourceId || [], i = b._indexes.sourceRefId || [], j = 0; j < h.length; j++) d = a.getSource(h[j]), e = g.getSource(d), e && f.sources.push(e);
     for (var k = 0; k < i.length; k++) d = a.getSource(i[k]), e = g.getSource(d), e && f.sources.push(e);
     if (f.quote = g.getQuote(b, c), f.quote.length >= 140) {
      var l = f.quote.indexOf(" ", 20),
       m = f.quote.lastIndexOf(" ");
      f.abbrQuote.begin = '<span class="beginQuote">' + f.quote.substring(0, l) + "</span>", f.abbrQuote.end = '<span class="endQuote">' + f.quote.substring(m) + "</span>"
     }
     return f
    }, g.getSource = function(a) {
     if (!a) return void 0;
     var b = {
      id: a.id,
      abbr: "",
      text: "",
      bibl: "",
      url: "",
      _xmlSource: a._xmlSource.replace(/ xmlns="http:\/\/www\.tei-c\.org\/ns\/1\.0"/g, "")
     };
     if (a.abbr.msId.length > 0)
      for (var c = 0; c < a.abbr.msId.length; c++) b.abbr += '<span class="msId inSource">' + g.getText(a.abbr.msId[c]) + "</span>";
     else a.abbr.author.length > 0 && (b.abbr += '<span class="author inSource">' + g.getText(a.abbr.author[0]) + "</span>", a.abbr.author.length > 1 ? b.abbr += "et al., " : b.abbr += ", "), a.abbr.title.length > 0 && (b.abbr += '<span class="title inSource">' + g.getText(a.abbr.title[0]) + "</span>");
     "" === b.abbr && (b.abbr = a.id);
     for (var d = a.bibl, e = 0; e < d.length; e++) b.bibl += g.getText(d[e]);
     var f = "";
     if (a.quote.length > 0) {
      for (var h = 0; h < a.quote.length; h++) f += g.getText(a.quote[h]);
      "" !== f && (b.text = f)
     }
     for (var i = 0; i < a.url.length; i++) a.url[i].indexOf("http") >= 0 ? b.url += '<span class="linkLabel">{{ \'CRITICAL_APPARATUS.SEE_FULL_SOURCE_WEB\' | translate }}</span><a target="_blank" href="' + a.url[i] + '">' + a.url[i] + "</a><br/>" : a.url[i].indexOf(a.id) >= 0 && (b.url += '<span class="linkLabel"><evt-source-ref data-source-id="' + a.id + "\">{{ 'CRITICAL_APPARATUS.SEE_FULL_SOURCE' | translate }}</evt-source-ref></span>");
     return b
    }, g.getSourceAbbr = function(a) {
     var b = "";
     if (a.abbr)
      if (a.abbr.msId && a.abbr.msId.length > 0)
       for (var c = 0; c < a.abbr.msId.length; c++) b += g.getText(a.abbr.msId[c]) + " ";
      else a.abbr.author && a.abbr.author.length > 0 && (b += g.getText(a.abbr.author[0]), b += a.abbr.author.length > 1 ? "et al., " : ", "), a.abbr.title && a.abbr.title.length > 0 && (b += g.getText(a.abbr.title[0]));
     return "" === b && (b = a.id), b
    }, g.getQuote = function(a, b) {
     var c = a.content || [],
      d = "";
     for (var f in c)
      if ("string" == typeof c[f]) d += " " + c[f];
      else {
       var h = ["EVT-POPOVER", "lb", "ptr", "link", "linkGrp", "pb"];
       d += h.indexOf(c[f].tagName) >= 0 ? "" : "app" === c[f].type ? g.getAppText(c[f], b) : "analogue" === c[f].type ? e.getCriticalElementContent(c[f], b) : "quote" === c[f].type ? " ((" + g.getQuote(c[f], b) + "))" : void 0 !== c[f].content ? g.getText(c[f]) : g.getQuote(c[f])
      } return d
    }, g.getText = function(a) {
     var b = "",
      c = a.content;
     if (void 0 !== c)
      for (var d = 0; d < c.length; d++) "string" == typeof c[d] ? b += " " + c[d] : void 0 !== c[d].content && (b += g.getText(c[d]));
     return b
    }, g.getAppText = function(a, b) {
     var c = "";
     if ("" === b || void 0 === b || void 0 === a._indexes.witMap[b]) {
      var d = a.lemma;
      c += g.getText(a.content[d])
     } else {
      var e = a._indexes.witMap[b];
      c += g.getText(a.content[e])
     }
     return c
    }, g
   }]), angular.module("evtviewer.dataHandler").service("evtAnaloguesParser", ["$q", "evtParser", "parsedData", "evtCriticalElementsParser", "config", "xmlParser", function(a, b, c, d, e, f) {
    var g = {},
     h = (e.quoteDef || "<quote>", e.analoguesUrl || ""),
     i = e.analogueDef || "<seg>,<ref[type=parallelPassage]>";
    return g.parseAnalogues = function(e, f) {
     var j = a.defer(),
      k = angular.element(e);
     if (angular.forEach(k.find(i.replace(/[<>]/g, "")), function(a) {
       var e = b.isNestedInElem(a, "body");
       if (e) {
        var f = d.parseAnalogue(a);
        (f._indexes.sourceId.length > 0 || f._indexes.sourceRefId.length > 0) && c.addAnalogue(f)
       }
      }), c.getAnalogues()._refId._indexes.length > 0)
      if ("" === h || void 0 === h) {
       var l;
       k.find("text group text").length > 0 ? l = "text group text" : k.find("text").length > 0 ? l = "text" : k.find('div[subtype="edition_text"]').length > 0 && (l = 'div[subtype="edition_text"]'), angular.forEach(k.find(l), function(a) {
        g.handleAnalogue(a)
       }), g.updateAnalogues()
      } else void 0 !== f && g.parseExternalAnalogues(f);
     return console.log("## Analogues ##", c.getAnalogues()), j.resolve("success"), j
    }, g.handleAnalogue = function(a) {
     var b = c.getAnalogues()._refId,
      e = c.getAnalogues()._refId._indexes;
     if (3 !== a.nodeType && 1 === a.nodeType)
      if (a.attributes.length > 0) {
       for (var f = 0; f < a.attributes.length; f++)
        if ("xml:id" === a.attributes[f].name) {
         var h = a.attributes[f].value;
         if (e.indexOf(h) >= 0)
          for (var i = d.parseAnalogueSource(a), j = 0; j < b[h].length; j++) {
           var k = c.getAnalogue(b[h][j]);
           k.sources.push(i)
          }
        }
      } else if (a.childNodes.length > 0)
      for (var l = 0; l < a.childNodes.length; l++) g.handleAnalogue(a.childNodes[l])
    }, g.updateAnalogues = function() {
     for (var a = c.getAnalogues(), b = c.getAnalogues()._indexes.encodingStructure, d = 0; d < b.length; d++) {
      var e = c.getAnalogue(b[d]);
      e.sources.length <= 0 && (delete a[b[d]], b.splice(b.indexOf(e.id), 1))
     }
    }, g.parseExternalAnalogues = function(b) {
     for (var d = a.defer(), e = 0; e < b.childNodes.length; e++) g.handleAnalogue(b.childNodes[e]);
     return console.log("## External Analogues Received ##", c.getAnalogues()), g.updateAnalogues(), d.resolve("success"), d
    }, g
   }]), angular.module("evtviewer.dataHandler").service("evtAnaloguesApparatus", ["parsedData", "evtParser", "config", "evtSourcesParser", "evtCriticalApparatusParser", "evtAnaloguesParser", "evtSourcesApparatus", function(a, b, c, d, e, f, g) {
    var h = {};
    return h.getContent = function(a, b) {
     for (var c = {
       attributes: {
        values: a.attributes || {},
        _keys: Object.keys(a.attributes) || []
       },
       sources: [],
       header: "",
       _xmlSource: a._xmlSource.replace(/ xmlns="http:\/\/www\.tei-c\.org\/ns\/1\.0"/g, "")
      }, d = 0; d < a.sources.length; d++) {
      var e = h.getSource(a.sources[d]);
      e && c.sources.push(e)
     }
     return c.header = h.getHeader(a, b), c
    }, h.getSource = function(a) {
     var b = {
      id: a.id,
      abbr: "",
      text: "",
      bibl: "",
      url: a.url,
      _xmlSource: a._xmlSource.replace(/ xmlns="http:\/\/www\.tei-c\.org\/ns\/1\.0"/g, "")
     };
     if (a.abbr)
      if (a.abbr.msId && a.abbr.msId.length > 0)
       for (var c = 0; c < a.abbr.msId.length; c++) b.abbr += '<span class="msId inSource">' + h.getText(a.abbr.msId[c]) + "</span>";
      else a.abbr.author && a.abbr.author.length > 0 && (b.abbr += '<span class="author inSource">' + h.getText(a.abbr.author[0]) + "</span>", a.abbr.author.length > 1 ? b.abbr += "et al., " : b.abbr += ", "), a.abbr.title && a.abbr.title.length > 0 && (b.abbr += '<span class="title inSource">' + h.getText(a.abbr.title[0]) + "</span>");
     "" === b.abbr && (b.abbr = a.id);
     for (var d = a.bibl, e = 0; e < d.length; e++) b.bibl += h.getText(d[e]);
     var f = "";
     if (a.text.length > 0) {
      for (var g = 0; g < a.text.length; g++) f += h.getText(a.text[g]);
      "" !== f && (b.text = f)
     }
     return b
    }, h.getHeader = function(a, b) {
     var c = a.content || [],
      d = '<span class="analogue-header">';
     for (var e in c)
      if ("string" == typeof c[e]) d += '<span class="textNode inAnalogueHeader">' + c[e] + "</span>";
      else {
       var f = ["EVT-POPOVER", "lb", "ptr", "link", "linkGrp", "pb"];
       if (f.indexOf(c[e].tagName) >= 0) d += "";
       else if ("app" === c[e].type) {
        var i = h.getAppText(c[e], b);
        d += '<span class="app inAnalogueHeader">' + i + "</span>"
       } else "analogue" === c[e].type ? d += '<span class="subAnalogue inAnalogueHeader">((' + h.getHeader(c[e], b) + "))</span>" : "quote" === c[e].type ? d += '<span class="quote inAnalogueHeader">' + g.getQuote(c[e], b) + "</span>" : "analogueContent" === c[e].type ? d += h.getHeader(c[e], b) : void 0 !== c[e].content && (d += '<span class="textNode inAnalogueHeader">' + h.getText(c[e]) + "</span>")
      } return d += "</span>"
    }, h.getText = function(a) {
     var b = "",
      c = a.content;
     if (void 0 !== c)
      for (var d = 0; d < c.length; d++) "string" == typeof c[d] ? b += " " + c[d] : void 0 !== c[d].content && (b += h.getText(c[d]));
     return b
    }, h.getAppText = function(a, b) {
     var c = "";
     if ("" === b || void 0 === b || void 0 === a._indexes.witMap[b]) {
      var d = a.lemma;
      c += h.getText(a.content[d])
     } else {
      var e = a._indexes.witMap[b];
      c += h.getText(a.content[e])
     }
     return c
    }, h
   }]), angular.module("evtviewer.dataHandler").service("evtCriticalElementsParser", ["evtParser", "parsedData", "config", "xmlParser", function(a, b, c, d) {
    var e = {},
     f = "<app>",
     g = "<lem>",
     h = g + ", <rdg>",
     i = "<rdgGrp>",
     j = c.quoteDef || "<quote>",
     k = c.analogueDef || "<seg>,<ref[type=parallelPassage]>",
     l = a.createRegExpr(k),
     m = function(a) {
      if (c.lacunaMilestone.indexOf("<" + a.tagName + ">") < 0 && c.fragmentMilestone.indexOf("<" + a.tagName + ">") < 0) {
       var b = {
        tagName: a.tagName,
        type: "genericElement",
        attributes: [],
        content: []
       };
       if (a.attributes)
        for (var d = 0; d < a.attributes.length; d++) {
         var g = a.attributes[d];
         g.specified && (b.attributes[g.name] = g.value)
        }
       return angular.forEach(a.childNodes, function(d) {
        if (3 === d.nodeType) "" !== d.textContent.trim() && b.content.push(d.textContent.trim());
        else if ("<" + d.tagName + ">" === f) {
         var g = e.handleAppEntry(d);
         b.content.push({
          id: g.id,
          type: "subApp"
         })
        } else {
         var h = angular.element(d)[0].innerHTML.replace(/ xmlns="http:\/\/www\.tei-c\.org\/ns\/1\.0"/g, ""),
          i = angular.element(d)[0].outerHTML.replace(h, "");
         if (c.fragmentMilestone.indexOf(d.tagName) >= 0 && null === d.getAttribute("wit")) {
          var k = a.getAttribute("wit");
          d.setAttribute("wit", k)
         }
         if (c.lacunaMilestone.indexOf(d.tagName) >= 0 && null === d.getAttribute("wit")) {
          var n = a.getAttribute("wit");
          d.setAttribute("wit", n)
         }
         j.indexOf("<" + d.tagName + ">") >= 0 && b.content.push(e.parseQuote(d)), l.test(i) && b.content.push(e.parseAnalogue(d)), angular.element(d).find(f.replace(/[<>]/g, "")) ? b.content.push(m(d)) : b.content.push(d.cloneNode(!0))
        }
       }), b
      }
      return a
     },
     n = function(d, g) {
      var h, i = {
       id: "",
       attributes: [],
       content: [],
       note: "",
       _significant: !0,
       _group: void 0,
       _xmlTagName: g.tagName,
       _xmlSource: g.outerHTML
      };
      h = g.getAttribute("xml:id") ? "rdg_" + g.getAttribute("xml:id") : a.xpath(g).substr(1), i.id = h;
      for (var k = 0; k < g.attributes.length; k++) {
       var n = g.attributes[k];
       if (n.specified) {
        if (i.attributes[n.name] = n.value, "wit" === n.name || "source" === n.name) {
         var o = n.value.split("#").filter(function(a) {
          return 0 !== a.length
         });
         i.wits = [];
         for (var p in o) {
          var q = o[p].replace(" ", "");
          if (void 0 !== b.getWitness(q))
           if (b.isWitnessesGroup(q)) {
            var r = b.getWitnessesInGroup(q);
            i.wits.push.apply(i.wits, r);
            for (var s in r) void 0 === d._indexes.witMap[r[s]] && (d._indexes.witMap[r[s]] = h)
           } else i.wits.push(q), void 0 === d._indexes.witMap[q] && (d._indexes.witMap[q] = h)
         }
        }
        i._significant && c.notSignificantVariant.indexOf("[" + n.name + "=" + n.value + "]") >= 0 && (i._significant = !1), b.addCriticalEntryFilter(n.name, n.value)
       }
      }
      return angular.forEach(g.childNodes, function(a) {
       if (3 === a.nodeType) "" !== a.textContent.trim() && i.content.push(a.textContent.trim());
       else if (1 === a.nodeType)
        if ("note" === a.tagName) i.note = a.innerHTML;
        else if (f.indexOf("<" + a.tagName + ">") >= 0) {
        var b = e.handleAppEntry(a, d.id);
        if ("recensioApp" === d.type && "rdgGrp" === g.parentNode.tagName) {
         var h = e.handleAppEntry(a, g);
         i.content.push(h)
        } else i.content.push({
         id: b.id,
         type: "subApp"
        }), d._indexes.subApps.push(b.id)
       } else {
        var k = "",
         n = "";
        if (void 0 !== angular.element(a)[0].innerHTML && (k = angular.element(a)[0].innerHTML.replace(/ xmlns="http:\/\/www\.tei-c\.org\/ns\/1\.0"/g, ""), n = angular.element(a)[0].outerHTML.replace(k, "")), i._significant && c.notSignificantVariant.indexOf("<" + a.tagName + ">") >= 0 && (i._significant = !1), c.fragmentMilestone.indexOf(a.tagName) >= 0 && null === a.getAttribute("wit")) {
         var o = g.getAttribute("wit");
         a.setAttribute("wit", o)
        }
        if (c.lacunaMilestone.indexOf(a.tagName) >= 0 && null === a.getAttribute("wit")) {
         var p = g.getAttribute("wit");
         a.setAttribute("wit", p)
        }
        j.indexOf("<" + a.tagName + ">") >= 0 ? i.content.push(e.parseQuote(a)) : l.test(n) ? i.content.push(e.parseAnalogue(a)) : angular.element(a).find(f.replace(/[<>]/g, "")) ? i.content.push(m(a)) : i.content.push(a.cloneNode(!0))
       }
      }), i
     },
     o = function(d, e) {
      var f, g = {
       attributes: [],
       content: []
      };
      f = e.getAttribute("xml:id") ? "rdg_" + e.getAttribute("xml:id") : a.xpath(e).substr(1), g.id = f, angular.forEach(e.childNodes, function(a) {
       if (h.indexOf("<" + a.tagName + ">") >= 0) {
        var f = n(d, a);
        f._group = g.id, g.content.push(f.id);
        for (var j = 0; j < e.attributes.length; j++) {
         var k = e.attributes[j];
         k.specified && (g.attributes[k.name] = k.value, void 0 === f.attributes[k.name] && (f.attributes[k.name] = k.value, f._significant && c.notSignificantVariant.indexOf("[" + k.name + "=" + k.value + "]") >= 0 && (f._significant = !1)), b.addCriticalEntryFilter(k.name, k.value))
        }
        d._indexes.readings._indexes.push(f.id), d.content[f.id] = f, (f._significant || "lem" === a.tagName) && d._indexes.readings._significant.push(f.id)
       } else i.indexOf("<" + a.tagName + ">") >= 0
      }), d._indexes.groups.push(g.id), d.content[g.id] = g, d._indexes.encodingStructure.push(g.id)
     },
     p = function(d) {
      var j, k = {
       type: "app",
       id: "",
       attributes: [],
       lemma: "",
       note: "",
       content: {},
       _indexes: {
        encodingStructure: [],
        readings: {
         _indexes: [],
         _significant: []
        },
        groups: [],
        subApps: [],
        witMap: {}
       },
       _subApp: !1,
       _xmlSource: d.outerHTML || ""
      };
      if (j = d.getAttribute("xml:id") ? "app_" + d.getAttribute("xml:id") : a.xpath(d).substr(1), k.id = j, d.attributes)
       for (var l = 0; l < d.attributes.length; l++) {
        var m = d.attributes[l];
        m.specified && (k.attributes[m.name] = m.value, b.addCriticalEntryFilter(m.name, m.value))
       }
      return "app" === d.parentNode.parentNode.parentNode.tagName && "recensio" === d.parentNode.parentNode.parentNode.getAttribute("type") ? k._subApp = !1 : k._subApp = a.isNestedInElem(d, f.replace(/[<>]/g, "")), c.versions.length > 0 && (k._isInMainVersion = a.isInMainVersion(d)), angular.forEach(d.childNodes, function(a) {
       if (1 === a.nodeType)
        if (h.indexOf("<" + a.tagName + ">") >= 0) {
         var b = n(k, a);
         g.indexOf("<" + a.tagName + ">") >= 0 ? k.lemma = b.id : (k._indexes.readings._indexes.push(b.id), b._significant && k._indexes.readings._significant.indexOf(b.id) < 0 && k._indexes.readings._significant.push(b.id)), k.content[b.id] = b, k._indexes.encodingStructure.push(b.id)
        } else if (i.indexOf("<" + a.tagName + ">") >= 0) o(k, a);
       else if (f.indexOf("<" + a.tagName + ">") >= 0) {
        var c = e.handleAppEntry(a, j),
         d = {
          id: c.id,
          type: "subApp"
         };
        k.content[c.id] = d, k._indexes.encodingStructure.push(c.id), k._indexes.subApp.push(c.id)
       } else "note" === a.tagName && (k.note = a.innerHTML)
      }), k
     };
    e.handleAppEntry = function(a, c) {
     var d = p(a) || void 0;
     (a.querySelectorAll("rdg lacunaStart").length > 0 || a.querySelectorAll("rdg lacunaEnd").length > 0) && (d._lacuna = !0), (a.querySelectorAll("rdg witStart").length > 0 || a.querySelectorAll("rdg witEnd").length > 0) && (d._fragment = !0);
     var e = d._indexes.readings._significant,
      f = e.length;
     "" !== d.lemma && e.indexOf(d.lemma) >= 0 && (f -= 1);
     var g = b.getWitnessesList(),
      h = f / g.length;
     d._variance = h;
     var i = Object.keys(d._indexes.witMap),
      j = [];
     if (i.length < g.length)
      for (var k in g) i.indexOf(g[k]) < 0 && j.push(g[k]);
     d._indexes.missingWits = j;
     var l = d.content[d.lemma];
     return l && (l.wits && 0 !== l.wits.length || (l.autoWits = j)), c && (d._indexes._parentEntry = c), b.addCriticalEntry(d), d
    };
    var q = function(a, d) {
     var e = {
       id: "",
       versionId: "",
       attributes: [],
       content: {},
       lemma: ""
      },
      f = "";
     if (d.attributes)
      for (var g = 0; g < d.attributes.length; g++) {
       var h = d.attributes[g];
       if (h.specified && (e.attributes[h.name] = h.value, e.attributes.length++, "ana" === h.name)) {
        f = h.value.replace("#", ""), e.id = f;
        var i = c.versions.indexOf(f);
        i >= 0 && (e.versionId = "Version &#" + (i + 65) + ";")
       }
      }
     return angular.forEach(d.childNodes, function(c) {
      if (1 === c.nodeType) {
       var d = n(a, c);
       if (void 0 === d.wits) {
        var g = b.getVersionEntries()._indexes.versionWitMap[f];
        if (void 0 !== g && g.length > 0) {
         d.wits = [];
         for (var h = 0; h < g.length; h++) d.wits.push(g[h])
        }
       }
       "lem" === c.tagName && (e.lemma = d.id), e.content[d.id] = d
      }
     }), a.content[f] = e, e
    };
    e.handleVersionEntry = function(d) {
     var e = {
      type: "recensioApp",
      id: "",
      attributes: [],
      lemma: "",
      content: {},
      _indexes: {
       witMap: {}
      },
      _xmlSource: d.outerHTML || ""
     };
     if (d.hasAttribute("xml:id") ? e.id = d.getAttribute("xml:id") : e.id = a.xpath(d).substr(1), d.attributes)
      for (var f = 0; f < d.attributes.length; f++) {
       var g = d.attributes[f];
       g.specified && (e.attributes[g.name] = g.value, e.attributes.length++)
      }
     return angular.forEach(d.childNodes, function(a) {
      if (1 === a.nodeType)
       if ("note" === a.tagName) e.note = a.innerHTML;
       else if (i.indexOf("<" + a.tagName + ">") >= 0) {
       var b = q(e, a);
       "" !== b.lemma;
       b.id === c.versions[0] && "" !== b.lemma && (e.lemma = b.lemma)
      }
     }), b.addVersionEntry(e), e
    }, e.getEntryWitnessReadingText = function(a, c) {
     var d;
     if (null !== a) {
      var f = a._indexes.readings._indexes;
      if (d = document.createElement("evt-reading"), "" !== a.lemma && !a._lacuna && 1 === f.length) {
       var g = a.content[f[0]].wits || [];
       g.length === b.getWitnessesList().length && (d = document.createElement("span"), d.className = a.content[f[0]]._xmlTagName)
      }
      d.setAttribute("data-app-id", a.id), d.setAttribute("data-scope-wit", c);
      var h = a._indexes.witMap[c];
      if (void 0 !== h && "" !== h) {
       d.setAttribute("data-reading-id", h);
       var i = a.content[h].content;
       if (i.length > 0)
        for (var j in i)
         if ("string" == typeof i[j]) d.appendChild(document.createTextNode(i[j]));
         else if ("subApp" === i[j].type) {
        var k = b.getCriticalEntryById(i[j].id),
         l = e.getEntryWitnessReadingText(k, c),
         m = k._indexes.witMap[c] || "";
        l.setAttribute("data-reading-id", m), null !== l && d.appendChild(l)
       } else if ("quote" === i[j].type) {
        var n = e.getQuoteText(i[j], c);
        d.appendChild(n)
       } else if ("analogue" === i[j].type) {
        var o = e.getAnalogueText(i[j], c);
        d.appendChild(o)
       } else if ("genericElement" === i[j].type) {
        var p = r(i[j], c);
        d.appendChild(p)
       } else d.appendChild(i[j]);
       else if (a._lacuna) {
        var q = document.createElement("span");
        q.className = "lacunaApp icon-evt_note", d.appendChild(q)
       } else {
        var s = document.createElement("span");
        s.className = "omission", d.appendChild(s)
       }
      } else if (a.lemma && a.lemma.indexOf("depa-lem") < 0) d = e.getEntryLemmaText(a, c);
      else if ("double-end-point" !== b.getEncodingDetail("variantEncodingMethod")) {
       var t = document.createElement("span");
       t.className = "empty", t.setAttribute("title", "noRdg"), d.appendChild(t)
      }
     } else {
      var u = document.createElement("span");
      u.className = "encodingError", u.setAttribute("title", "General error"), d.appendChild(u)
     }
     return d.setAttribute("data-type", "variant"), d.childNodes.length <= 0 && (d.innerHTML = '<span class="emptyText"></span>'), d
    };
    var r = function(a, c) {
     var d = document.createElement("span");
     d.className = a.tagName;
     var f = Object.keys(a.attributes);
     for (var g in f) {
      var h = f[g],
       i = a.attributes[h];
      "xml:id" !== h && d.setAttribute("data-" + h.replace(":", "-"), i)
     }
     var j = a.content;
     for (var k in j)
      if ("string" == typeof j[k]) d.appendChild(document.createTextNode(j[k]));
      else if ("subApp" === j[k].type) {
      var l = b.getCriticalEntryById(j[k].id),
       m = "" === c ? e.getEntryLemmaText(l, c) : e.getEntryWitnessReadingText(l, c),
       n = l._indexes.witMap[c] || "";
      m.setAttribute("data-reading-id", n), null !== m && d.appendChild(m)
     } else if ("quote" === j[k].type) {
      var o = e.getQuoteText(j[k], c);
      d.appendChild(o)
     } else if ("analogue" === j[k].type) {
      var p = e.getAnalogueText(j[k], c);
      d.appendChild(p)
     } else if ("genericElement" === j[k].type) {
      var q = r(j[k], c);
      d.appendChild(q)
     }
     return d
    };
    e.getVersionEntryReadingText = function(a, c) {
     var d, f, g, h, i, j = "",
      k = [];
     if (null !== a) {
      d = document.createElement("evt-version-reading"), d.setAttribute("data-app-id", a.id);
      var l = document.createElement("i");
      l.className = "iconbis-evt_fork", l.setAttribute("title", "There are alternative versions of this part of text"), d.appendChild(l);
      var m, n, o;
      if (0 !== Object.keys(a._indexes.witMap).length) {
       if (j = a._indexes.witMap[c], "" !== j) {
        for (f in a.content)
         for (g in a.content[f].content) g === j && (k = a.content[f].content[g].content);
        if (void 0 !== k && k.length > 0)
         for (h in k)
          if ("string" == typeof k[h]) d.appendChild(document.createTextNode(k[h]));
          else if ("app" === k[h].type) {
         var p = b.getCriticalEntryById(k[h].id),
          q = e.getEntryWitnessReadingText(p, c);
         null !== q && d.appendChild(q)
        } else if ("quote" === k[h].type) m = e.getQuoteText(k[h], c), d.appendChild(m);
        else if ("analogue" === k[h].type) n = e.getAnalogueText(k[h], c), d.appendChild(n);
        else if ("genericElement" === k[h].type) o = r(k[h], c), d.appendChild(o);
        else if ("recensioApp" === k[h].type) {
         var s = e.getVersionEntryReadingText(k[h], c);
         d.appendChild(s)
        } else d.appendChild(k[h])
       }
      } else {
       var t, u = b.getVersionEntries()._indexes.versionWitMap;
       for (f in u) u[f].indexOf(c) >= 0 && (t = f);
       if (void 0 !== t) {
        if (d.setAttribute("data-scope-version", t), void 0 === a.content[t]) return null;
        var v = a.content[t].lemma,
         w = Object.keys(a.content[t].content)[0],
         x = a.content[t].content[w];
        if (void 0 !== v && "" !== v) {
         var y = a.content[t].content[v].content;
         for (g in y)
          if ("string" == typeof y[g]) d.appendChild(document.createTextNode(y[g]));
          else if ("subApp" === y[g].type || "app" === y[g].type) {
          var z = b.getCriticalEntryById(y[g].id),
           A = "" === c ? e.getEntryLemmaText(z, c) : e.getEntryWitnessReadingText(z, c),
           B = z._indexes.witMap[c] || "";
          A.setAttribute("data-reading-id", B), null !== A && d.appendChild(A)
         } else "quote" === y[g].type ? (m = e.getQuoteText(y[g], c), d.appendChild(m)) : "analogue" === y[g].type ? (n = e.getAnalogueText(y[g], c), d.appendChild(n)) : "genericElement" === y[g].type && (o = r(y[g], c), d.appendChild(o));
         j = v
        } else if (void 0 !== x && "" !== x) {
         var k = x.content;
         for (g in k)
          if ("string" == typeof k[g]) d.appendChild(document.createTextNode(k[g]));
          else if ("subApp" === k[g].type || "app" === k[g].type) {
          var z = b.getCriticalEntryById(k[g].id),
           A = "" === c ? e.getEntryWitnessReadingText(z, c) : e.getEntryWitnessReadingText(z, c),
           B = z._indexes.witMap[c] || "";
          A.setAttribute("data-reading-id", B), null !== A && d.appendChild(A)
         } else "quote" === k[g].type ? (m = e.getQuoteText(k[g], c), d.appendChild(m)) : "analogue" === k[g].type ? (n = e.getAnalogueText(k[g], c), d.appendChild(n)) : "genericElement" === k[g].type && (o = r(k[g], c), d.appendChild(o));
         j = v
        }
       } else {
        var C = document.createTextNode("Warning: no version has been defined for the current witness. Please check your encoded file.");
        i = document.createElement("span"), i.className = "encodingError", i.appendChild(C), d.appendChild(i)
       }
      }
      d.setAttribute("data-reading-id", j), d.setAttribute("data-scope-wit", c)
     } else i = document.createElement("span"), i.className = "encodingError", i.setAttribute("title", "General error"), d.appendChild(i);
     return d.setAttribute("data-type", "versionVariant"), d
    }, e.getEntryLemmaText = function(a, d) {
     var f, g;
     if (null !== a) {
      if (f = document.createElement("evt-reading"), f.setAttribute("data-app-id", a.id), f.setAttribute("data-scope-wit", d), f.setAttribute("data-type", "lemma"), a._lacuna) {
       var h = document.createElement("span");
       h.className = "lacunaApp icon-evt_note", f.appendChild(h)
      } else if (a.lemma && a.lemma.indexOf("depa-lem") < 0) {
       f.setAttribute("data-reading-id", a.lemma);
       var i = a.content[a.lemma].content;
       for (var j in i)
        if ("string" == typeof i[j]) f.appendChild(document.createTextNode(i[j]));
        else if ("subApp" === i[j].type) {
        var k = b.getCriticalEntryById(i[j].id),
         l = "" === d ? e.getEntryLemmaText(k, d) : e.getEntryWitnessReadingText(k, d),
         m = k._indexes.witMap[d] || "";
        l.setAttribute("data-reading-id", m), null !== l && f.appendChild(l)
       } else if ("quote" === i[j].type) {
        var n = e.getQuoteText(i[j], d);
        f.appendChild(n)
       } else if ("analogue" === i[j].type) {
        var o = e.getAnalogueText(i[j], d);
        f.appendChild(o)
       } else if ("genericElement" === i[j].type) {
        var p = r(i[j], d);
        f.appendChild(p)
       }
      } else "" !== c.preferredWitness ? (f = e.getEntryWitnessReadingText(a, c.preferredWitness), null !== f && (f.className = "autoLemma")) : "double-end-point" !== b.getEncodingDetail("variantEncodingMethod") && (g = document.createElement("span"), g.className = "encodingError", g.setAttribute("title", "General error"), f.appendChild(g));
      if (null !== f) {
       var q = Object.keys(a.attributes);
       for (var s in q) {
        var t = q[s],
         u = a.attributes[t];
        "xml:id" !== t && f.setAttribute("data-" + t.replace(":", "-"), u)
       }
       void 0 !== a._variance && f.setAttribute("data-variance", a._variance)
      }
     } else g = document.createElement("span"), g.className = "encodingError", g.setAttribute("title", "General error"), f.appendChild(g);
     return f.childNodes.length <= 0 && (f.innerHTML = '<span class="emptyText"></span>'), f
    }, e.getVersionEntryLemma = function(a, c, d) {
     var f, g;
     if (null !== a) {
      f = document.createElement("evt-version-reading"),
       f.setAttribute("data-app-id", a.id), f.setAttribute("data-type", "versionLemma"), f.setAttribute("data-scope-version", d);
      var h = document.createElement("i");
      if (h.className = "iconbis-evt_fork", h.setAttribute("title", "There are alternative versions of this part of text"), f.appendChild(h), void 0 !== a.content[d]) {
       var i = a.content[d].lemma,
        j = Object.keys(a.content[d].content)[0],
        k = a.content[d].content[j];
       if (void 0 !== i && "" !== i) {
        f.setAttribute("data-reading-id", i);
        var l = a.content[d].content[a.content[d].lemma].content;
        for (var m in l)
         if ("string" == typeof l[m]) f.appendChild(document.createTextNode(l[m]));
         else if ("app" === l[m].type) {
         var n = b.getCriticalEntryById(l[m].id),
          o = e.getEntryLemmaText(n, "");
         null !== o && f.appendChild(o)
        } else if ("quote" === l[m].type) {
         var p = e.getQuoteText(l[m], c);
         f.appendChild(p)
        } else if ("analogue" === l[m].type) {
         var q = e.getAnalogueText(l[m], c);
         f.appendChild(q)
        } else if ("recensioApp" === l[m].type) {
         var r = e.getVersionEntryLemma(l[m], c, d);
         f.appendChild(r)
        }
       } else if (void 0 !== k && "" !== k) {
        f.setAttribute("data-reading-id", j);
        var s = k.content;
        for (var m in s)
         if ("string" == typeof s[m]) f.appendChild(document.createTextNode(s[m]));
         else if ("app" === s[m].type) {
         var n = b.getCriticalEntryById(s[m].id),
          o = e.getEntryWitnessReadingText(n, "");
         null !== o && f.appendChild(o)
        } else if ("quote" === s[m].type) {
         var p = e.getQuoteText(s[m], c);
         f.appendChild(p)
        } else if ("analogue" === s[m].type) {
         var q = e.getAnalogueText(s[m], c);
         f.appendChild(q)
        } else if ("recensioApp" === s[m].type) {
         var r = e.getVersionEntryLemma(s[m], c, d);
         f.appendChild(r)
        }
       } else g = document.createElement("span"), g.className = "encodingError", g.setAttribute("title", "lem missing inside of the version rdgGrp"), f.appendChild(g)
      } else g = document.createElement("span"), g.className = "encodingError", g.setAttribute("title", "Wrong version id"), f.appendChild(g);
      if (null !== f) {
       var t = Object.keys(a.attributes);
       for (var u in t) {
        var v = t[u],
         w = a.attributes[v];
        "xml:id" !== v && f.setAttribute("data-" + v.replace(":", "-"), w)
       }
      }
     } else g = document.createElement("span"), g.className = "encodingError", g.setAttribute("title", "General error"), f.appendChild(g);
     return f
    };
    var s = function(b) {
     var c = {
      tagName: b.tagName,
      type: "quoteContent",
      attributes: [],
      content: [],
      _xmlSource: b.outerHTML
     };
     if (b.attributes)
      for (var d = 0; d < b.attributes.length; d++) {
       var g = b.attributes[d];
       g.specified && (c.attributes[g.name] = g.value)
      }
     return angular.forEach(b.childNodes, function(b) {
      if (3 === b.nodeType) "" !== b.textContent.trim() && c.content.push(b.textContent.trim());
      else if (1 === b.nodeType) {
       var d = angular.element(b)[0].innerHTML.replace(/ xmlns="http:\/\/www\.tei-c\.org\/ns\/1\.0"/g, ""),
        g = angular.element(b)[0].outerHTML.replace(d, "");
       if (j.indexOf("<" + b.tagName + ">") >= 0) c.content.push(e.parseQuote(b));
       else if (f.indexOf("<" + b.tagName + ">") >= 0) c.content.push(e.handleAppEntry(b));
       else if (l.test(g)) c.content.push(e.parseAnalogue(b));
       else if ("note" === b.tagName) c.content.push(a.parseNote(b));
       else if (b.children.length > 0)
        for (var h = 0; h < b.children.length; h++) c.content.push(b.children[h].cloneNode(!0)), s(b.children[h]);
       else c.content.push(s(b))
      }
     }), c
    };
    e.parseQuote = function(d) {
     var g, h, i, k = {
      type: "quote",
      id: "",
      attributes: [],
      content: [],
      _indexes: {
       sourceId: [],
       sourceRefId: [],
       correspId: {},
       subQuotes: []
      },
      _subQuote: !1,
      _xmlSource: d.outerHTML
     };
     if (i = d.getAttribute("xml:id") ? d.getAttribute("xml:id") : a.xpath(d).substr(1), k.id = i, c.versions.length > 0 && (k._isInMainVersion = a.isInMainVersion(d)), d.attributes)
      for (g = 0; g < d.attributes.length; g++) {
       var m, n = d.attributes[g];
       if (n.specified && (k.attributes[n.name] = n.value), "source" === n.name && (m = n.value.replace(/#/g, "").split(" "), k._indexes.sourceRefId = m), "ref" === n.name && (m = n.value.replace(/#/g, "").split(" "), k._indexes.sourceRefId = m), "corresp" === n.name) {
        m = n.value.replace(/#/g, "").split(" ");
        for (h in m) {
         var o = m[h].indexOf("/"),
          p = m[h].substring(0, o);
         void 0 === k._indexes.correspId[p] ? (k._indexes.correspId[p] = [], k._indexes.correspId[p].push(m[h].substring(o + 1))) : k._indexes.correspId[p].push(m[h].substring(o + 1))
        }
       }
      }
     var q = j.split(",");
     for (g = 0; g < q.length && !k._subQuote;) k._subQuote = a.isNestedInElem(d, q[g].replace(/[<>]/g, "")), g++;
     return angular.forEach(d.childNodes, function(b) {
      if (3 === b.nodeType) "" !== b.textContent.trim() && k.content.push(b.textContent.trim());
      else if (1 === b.nodeType) {
       var c = angular.element(b)[0].innerHTML.replace(/ xmlns="http:\/\/www\.tei-c\.org\/ns\/1\.0"/g, ""),
        h = angular.element(b)[0].outerHTML.replace(c, ""),
        i = ["bibl", "biblStruct", "biblFull", "msDesc"],
        m = ["ptr", "ref", "link"];
       if ("listBibl" === b.tagName)
        for (g = 0; g < b.children.length; g++)
         if (i.indexOf(b.children[g].tagName) >= 0) {
          var n = e.parseSource(b.children[g], d);
          k._indexes.sourceId.push(n.id), k.content.push(n)
         } else k.content.push(s(b.children[g]));
       else if (i.indexOf(b.tagName) >= 0) {
        var o = e.parseSource(b, d);
        k._indexes.sourceId.push(o.id), k.content.push(o)
       } else if (m.indexOf(b.tagName) >= 0) {
        if (k.content.push(s(b)), b.hasAttribute("target")) {
         var p = b.getAttribute("target"),
          q = p.replace(/#/g, "").split(" ");
         for (g = 0; g < q.length; g++) k._indexes.sourceRefId.push(q[g])
        }
       } else if ("linkGrp" === b.tagName) {
        for (g = 0; g < b.children.length; g++)
         if (m.indexOf(b.children[g].tagName) >= 0 && (k.content.push(s(b.children[g])), b.children[g].hasAttribute("target"))) {
          var r = b.children[g].getAttribute("target"),
           t = r.replace(/#/g, "").split(" ");
          for (g = 0; g < t.length; g++) k._indexes.sourceRefId.push(t[g])
         }
       } else if (f.indexOf("<" + b.tagName + ">") >= 0) k.content.push(e.handleAppEntry(b));
       else if (j.indexOf("<" + b.tagName + ">") >= 0) {
        var u = e.parseQuote(b);
        k.content.push(u), k._indexes.subQuotes.push(u.id)
       } else l.test(h) ? k.content.push(e.parseAnalogue(b)) : "note" === b.tagName ? k.content.push(a.parseNote(b)) : k.content.push(s(b))
      }
     }), b.addQuote(k), k
    };
    var t = function(a, b) {
     var c = {
      tagName: a.tagName,
      type: "sourceContent",
      attributes: [],
      content: [],
      url: []
     };
     if (a.attributes)
      for (var d = 0; d < a.attributes.length; d++) {
       var e = a.attributes[d];
       e.specified && (c.attributes[e.name] = e.value)
      }
     return angular.forEach(a.childNodes, function(a) {
      if (3 === a.nodeType) "" !== a.textContent.trim() && c.content.push(a.textContent.trim());
      else if (1 === a.nodeType)
       if ("citedRange" === a.tagName) null !== a.getAttribute("target") && "" !== a.getAttribute("target") && c.url.push(a.getAttribute("target")), c.content.push(t(a));
       else if (a.children.length > 0)
       for (var b = 0; b < a.children.length; b++) c.content.push(t(a.children[b]));
      else c.content.push(t(a))
     }), c
    };
    e.parseSource = function(c, d) {
     var e, f, g, h = {
      id: "",
      abbr: {
       title: [],
       author: [],
       msId: []
      },
      attributes: [],
      quotesEntriesId: [],
      bibl: [],
      quote: [],
      url: [],
      text: {},
      _textAvailable: !1,
      _xmlSource: c.outerHTML
     };
     if (c.attributes)
      for (e = 0; e < c.attributes.length; e++) {
       var i = c.attributes[e];
       if (i.specified) {
        if ("xml:id" === i.name && (g = i.value), "target" === i.name || "source" === i.name || "ref" === i.name) {
         var j = i.value.replace(/#/g, "").split(" ");
         for (f = 0; f < j.length; f++) h.url.push(j[f])
        }
        h.attributes[i.name] = i.value, h.attributes.length++
       }
      }
     void 0 === g && (g = a.xpath(c).substr(1)), h.id = g, void 0 !== b.getQuotes()._indexes.sourcesRef[h.id] ? h.quotesEntriesId = b.getQuotes()._indexes.sourcesRef[h.id] : d.hasAttribute("xml:id") ? h.quotesEntriesId.push(d.getAttribute("xml:id")) : h.quotesEntriesId.push(a.xpath(d).substr(1));
     var k = angular.element(c);
     "msDesc" === c.tagName ? angular.forEach(k.find("idno"), function(a) {
      h.abbr.msId.push(t(a))
     }) : (angular.forEach(k.find("author"), function(a) {
      h.abbr.author.push(t(a))
     }), angular.forEach(k.find("title"), function(a) {
      h.abbr.title.push(t(a))
     })), angular.forEach(c.childNodes, function(a) {
      if (3 === a.nodeType) "" !== a.textContent.trim() && h.bibl.push(a.textContent.trim());
      else if (1 === a.nodeType) {
       var b, d, g = ["ptr", "ref", "link"];
       if ("cit" === c.tagName && "quote" === a.tagName) {
        var i = t(a);
        h.quote.push(i)
       } else if (g.indexOf(a.tagName) >= 0) {
        if ("ref" === a.tagName ? h.bibl.push(t(a)) : h.bibl.push(a), a.hasAttribute("target"))
         for (b = a.getAttribute("target"), d = b.replace(/#/g, "").split(" "), e = 0; e < d.length; e++) h.url.push(d[e])
       } else if ("linkGrp" === a.tagName) {
        for (e = 0; e < a.children.length; e++)
         if (g.indexOf(a.children[e].tagName) >= 0 && ("ref" === a.tagName ? h.bibl.push(t(a)) : h.bibl.push(a.children[e]), a.children[e].hasAttribute("target")))
          for (b = a.children[e].getAttribute("target"), d = b.replace(/#/g, "").split(" "), f = 0; f < d.length; f++) h.url.push(d[f])
       } else if ("citedRange" === a.tagName) {
        if (null !== a.getAttribute("target") && "" !== a.getAttribute("target"))
         for (b = a.getAttribute("target"), d = b.replace(/#/g, "").split(" "), e = 0; e < d.length; e++) h.url.push(d[e]);
        h.bibl.push(t(a))
       } else {
        var j = t(a, c);
        for (h.bibl.push(j), e = 0; e < j.url.length; e++) h.url.push(j.url[e])
       }
      }
     });
     for (e in h.url) h.url[e].indexOf(".xml") >= 0 && (h._textAvailable = !0);
     return b.addSource(h), h
    };
    var u = function(b, c, f) {
     var g;
     if (void 0 !== b.content)
      if (0 === b.content.length) {
       var h = d.parse(b._xmlSource.replace(/ xmlns="http:\/\/www\.tei-c\.org\/ns\/1\.0"/g, "")),
        i = h.children[0];
       if ("pb" === b.tagName) {
        if ("" !== c && i.getAttribute("ed").indexOf(c) >= 0) {
         var j, k = document.createElement("span");
         j = i.getAttribute("ed") ? i.getAttribute("xml:id") || i.getAttribute("ed").replace("#", "") + "-" + i.getAttribute("n") : i.getAttribute("xml:id"), k.className = "pb", k.setAttribute("data-wit", i.getAttribute("ed")), k.setAttribute("data-id", j), k.setAttribute("id", "pb_" + j), k.textContent = i.getAttribute("n"), g = k
        }
       } else g = a.parseXMLElement(f, i, {
        skip: ""
       })
      } else if (1 === b.content.length && "string" == typeof b.content[0]) {
      var l = d.parse(b._xmlSource.replace(/ xmlns="http:\/\/www\.tei-c\.org\/ns\/1\.0"/g, "")),
       m = l.children[0];
      g = a.parseXMLElement(f, m, {
       skip: ""
      })
     } else {
      g = document.createElement("span"), g.className = b.tagName;
      var n = Object.keys(b.attributes);
      for (var o in n) {
       var p = n[o],
        q = b.attributes[p];
       "xml:id" !== p && g.setAttribute("data-" + p.replace(":", "-"), q)
      }
      var r = b.content;
      for (var s in r) {
       var t;
       "string" == typeof r[s] ? (t = document.createElement("span"), t.setAttribute("class", "textNode"), t.appendChild(document.createTextNode(r[s])), g.appendChild(t)) : "quote" === r[s].type ? g.appendChild(e.getQuoteText(r[s])) : "EVT-POPOVER" === r[s].tagName ? g.appendChild(r[s]) : "app" === r[s].type ? "" === c ? g.appendChild(e.getEntryLemmaText(r[s])) : g.appendChild(e.getEntryWitnessReadingText(r[s], c)) : "analogue" === r[s].type ? g.appendChild(e.getAnalogueText(r[s])) : (t = u(r[s], c, f), void 0 !== t && g.appendChild(t))
      }
     }
     return g
    };
    e.getQuoteText = function(a, b, c) {
     var d;
     d = document.createElement("evt-quote"), d.setAttribute("data-quote-id", a.id), a._subQuote ? d.setAttribute("data-type", "subquote") : d.setAttribute("data-type", "quote"), "" !== b && void 0 !== b && d.setAttribute("data-scope-wit", b);
     var f = a.content,
      g = ["link", "ptr", "linkGrp"];
     for (var h in f) {
      var i;
      "string" == typeof f[h] ? (i = document.createElement("span"), i.setAttribute("class", "textNode"), i.appendChild(document.createTextNode(f[h])), d.appendChild(i)) : "EVT-POPOVER" === f[h].tagName ? d.appendChild(f[h]) : "app" === f[h].type ? "" === b ? d.appendChild(e.getEntryLemmaText(f[h])) : d.appendChild(e.getEntryWitnessReadingText(f[h], b)) : "quote" === f[h].type ? d.appendChild(e.getQuoteText(f[h], b, c)) : "analogue" === f[h].type ? d.appendChild(e.getAnalogueText(f[h], b, c)) : "quoteContent" === f[h].type && g.indexOf(f[h].tagName) < 0 && (i = u(f[h], b, c), void 0 !== i && d.appendChild(i))
     }
     return d
    };
    var v = function(b) {
     var c = {
      tagName: b.tagName,
      type: "analogueContent",
      attributes: [],
      content: [],
      _xmlSource: b.outerHTML
     };
     if (b.attributes)
      for (var d = 0; d < b.attributes.length; d++) {
       var g = b.attributes[d];
       g.specified && (c.attributes[g.name] = g.value)
      }
     return angular.forEach(b.childNodes, function(b) {
      if (3 === b.nodeType) "" !== b.textContent.trim() && c.content.push(b.textContent.trim());
      else if (1 === b.nodeType) {
       var d = angular.element(b)[0].innerHTML.replace(/ xmlns="http:\/\/www\.tei-c\.org\/ns\/1\.0"/g, ""),
        g = angular.element(b)[0].outerHTML.replace(d, "");
       if (j.indexOf("<" + b.tagName + ">") >= 0) c.content.push(e.parseQuote(b));
       else if (f.indexOf("<" + b.tagName + ">") >= 0) c.content.push(e.handleAppEntry(b));
       else if (a.createRegExpr(k).test(g)) c.content.push(e.parseAnalogue(b));
       else if ("note" === b.tagName) c.content.push(a.parseNote(b));
       else if (b.children.length > 0)
        for (var h = 0; h < b.children.length; h++) c.content.push(b.children[h].cloneNode(!0)), v(b.children[h]);
       else c.content.push(v(b))
      }
     }), c
    };
    e.parseAnalogue = function(b) {
     var d, g, h = {
       id: "",
       type: "",
       attributes: [],
       content: [],
       sources: [],
       _indexes: {
        sourceId: [],
        sourceRefId: [],
        subAnalogues: []
       },
       _subAnalogue: !1,
       _xmlSource: b.outerHTML || ""
      },
      i = b.getAttribute("xml:id") || a.xpath(b).substr(1);
     if (h.id = i, c.versions.length > 0 && (h._isInMainVersion = a.isInMainVersion(b)), b.attributes)
      for (d = 0; d < b.attributes.length; d++) {
       var l, m = b.attributes[d];
       m.specified && (h.attributes[m.name] = m.value), "source" === m.name && (l = m.value.replace(/#/g, "").split(" "), h._indexes.sourceRefId = l), "corresp" === m.name && (l = m.value.replace(/#/g, "").split(" "), h._indexes.sourceRefId = l), "ref" === m.name && (l = m.value.replace(/#/g, "").split(" "), h._indexes.sourceRefId = l)
      }
     return angular.forEach(b.childNodes, function(c) {
      if (3 === c.nodeType) "" !== c.textContent.trim() && h.content.push(c.textContent.trim());
      else if (1 === c.nodeType) {
       var i = angular.element(c)[0].innerHTML.replace(/ xmlns="http:\/\/www\.tei-c\.org\/ns\/1\.0"/g, ""),
        l = angular.element(c)[0].outerHTML.replace(i, ""),
        m = ["bibl", "biblStruct", "biblFull", "msDesc"],
        n = ["ptr", "ref", "link"];
       if ("listBibl" === c.tagName)
        for (d = 0; d < c.children.length; d++)
         if (m.indexOf(c.children[d].tagName) >= 0) {
          var o = e.parseAnalogueSource(c.children[d], b);
          h._indexes.sourceId.push(o.id), h.sources.push(o)
         } else h.content.push(v(c.children[d]));
       else if (m.indexOf(c.tagName) >= 0) {
        var p = e.parseAnalogueSource(c, b);
        h._indexes.sourceId.push(p.id), h.sources.push(p)
       } else if (n.indexOf(c.tagName) >= 0) {
        if (h.content.push(v(c)), c.hasAttribute("target")) {
         var q = c.getAttribute("target"),
          r = q.replace(/#/g, "").split(" ");
         for (d = 0; d < r.length; d++) h._indexes.sourceRefId.push(r[d])
        }
       } else if ("linkGrp" === c.tagName) {
        for (d = 0; d < c.children.length; d++)
         if (n.indexOf(c.children[d].tagName) >= 0 && (h.content.push(v(c.children[d])), c.children[d].hasAttribute("target"))) {
          var s = c.children[d].getAttribute("target"),
           t = s.replace(/#/g, "").split(" ");
          for (g = 0; g < t.length; g++) h._indexes.sourceRefId.push(t[g])
         }
       } else f.indexOf("<" + c.tagName + ">") >= 0 ? h.content.push(e.handleAppEntry(c)) : j.indexOf("<" + c.tagName + ">") >= 0 ? h.content.push(e.parseQuote(c)) : a.createRegExpr(k).test(l) ? h.content.push(e.parseAnalogue(c)) : "note" === c.tagName ? h.content.push(a.parseNote(c)) : h.content.push(v(c))
      }
     }), (0 !== h._indexes.sourceId.length || 0 !== h._indexes.sourceRefId.length) && (h.type = "analogue"), h
    }, e.parseAnalogueSource = function(b) {
     var c, d, e, f = {
      id: "",
      abbr: {
       title: [],
       author: [],
       msId: []
      },
      attributes: [],
      bibl: [],
      text: [],
      url: [],
      _xmlSource: b.outerHTML || ""
     };
     if (b.attributes)
      for (c = 0; c < b.attributes.length; c++) {
       var g = b.attributes[c];
       if (g.specified) {
        if ("xml:id" === g.name && (e = g.value), "target" === g.name || "source" === g.name || "ref" === g.name) {
         var h = g.value.replace(/#/g, "").split(" ");
         for (d = 0; d < h.length; d++) f.url.push(h[d])
        }
        f.attributes[g.name] = g.value, f.attributes.length++
       }
      }
     void 0 === e && (e = a.xpath(b).substr(1)), f.id = e;
     var i = angular.element(b);
     return "msDesc" === b.tagName ? angular.forEach(i.find("idno"), function(a) {
      f.abbr.msId.push(w(a))
     }) : (angular.forEach(i.find("author"), function(a) {
      f.abbr.author.push(w(a))
     }), angular.forEach(i.find("title"), function(a) {
      f.abbr.title.push(w(a))
     })), angular.forEach(b.childNodes, function(a) {
      if (3 === a.nodeType) "" !== a.textContent.trim() && f.bibl.push(a.textContent.trim());
      else if (1 === a.nodeType) {
       var e, g, h = ["ptr", "ref", "link"];
       if ("cit" === b.tagName && "quote" === a.tagName) {
        var i = w(a);
        f.text.push(i)
       } else if (h.indexOf(a.tagName) >= 0) {
        if ("ref" === a.tagName ? f.bibl.push(w(a)) : f.bibl.push(a), a.hasAttribute("target"))
         for (e = a.getAttribute("target"), g = e.replace(/#/g, "").split(" "), c = 0; c < g.length; c++) f.url.push(g[c])
       } else if ("linkGrp" === a.tagName) {
        for (c = 0; c < a.children.length; c++)
         if (h.indexOf(a.children[c].tagName) >= 0 && ("ref" === a.tagName ? f.bibl.push(w(a)) : f.bibl.push(a.children[c]), a.children[c].hasAttribute("target")))
          for (e = a.children[c].getAttribute("target"), g = e.replace(/#/g, "").split(" "), d = 0; d < g.length; d++) f.url.push(g[d])
       } else if ("citedRange" === a.tagName) {
        if (null !== a.getAttribute("target") && "" !== a.getAttribute("target"))
         for (e = a.getAttribute("target"), g = e.replace(/#/g, "").split(" "), c = 0; c < g.length; c++) f.url.push(g[c]);
        f.bibl.push(t(a))
       } else {
        var j = w(a, b);
        for (f.bibl.push(j), c = 0; c < j.url.length; c++) f.url.push(j.url[c])
       }
      }
     }), f
    };
    var w = function(a) {
      var b = {
       tagName: a.tagName,
       type: "sourceContent",
       attributes: [],
       content: [],
       url: []
      };
      if (a.attributes)
       for (var c = 0; c < a.attributes.length; c++) {
        var d = a.attributes[c];
        d.specified && (b.attributes[d.name] = d.value)
       }
      return angular.forEach(a.childNodes, function(a) {
       if (3 === a.nodeType) "" !== a.textContent.trim() && b.content.push(a.textContent.trim());
       else if (1 === a.nodeType)
        if ("citedRange" === a.tagName) null !== a.getAttribute("target") && "" !== a.getAttribute("target") && b.url.push(a.getAttribute("target")), b.content.push(t(a));
        else if (a.children.length > 0)
        for (var c = 0; c < a.children.length; c++) b.content.push(w(a.children[c]));
       else b.content.push(w(a))
      }), b
     },
     x = function(b, c, f) {
      var g;
      if (void 0 !== b.content)
       if (0 === b.content.length) {
        var h = d.parse(b._xmlSource.replace(/ xmlns="http:\/\/www\.tei-c\.org\/ns\/1\.0"/g, "")),
         i = h.children[0];
        if ("pb" === b.tagName) {
         if ("" !== c && i.getAttribute("ed").indexOf(c) >= 0) {
          var j, k = document.createElement("span");
          j = i.getAttribute("ed") ? i.getAttribute("xml:id") || i.getAttribute("ed").replace("#", "") + "-" + i.getAttribute("n") : i.getAttribute("xml:id"), k.className = "pb", k.setAttribute("data-wit", i.getAttribute("ed")), k.setAttribute("data-id", j), k.setAttribute("id", "pb_" + j), k.textContent = i.getAttribute("n"), g = k
         }
        } else g = a.parseXMLElement(f, i, {
         skip: ""
        })
       } else if (1 === b.content.length && "string" == typeof b.content[0]) {
       var l = d.parse(b._xmlSource.replace(/ xmlns="http:\/\/www\.tei-c\.org\/ns\/1\.0"/g, "")),
        m = l.children[0];
       g = a.parseXMLElement(f, m, {
        skip: ""
       })
      } else {
       g = document.createElement("span"), g.className = b.tagName;
       var n = Object.keys(b.attributes);
       for (var o in n) {
        var p = n[o],
         q = b.attributes[p];
        "xml:id" !== p && g.setAttribute("data-" + p.replace(":", "-"), q)
       }
       var r = b.content;
       for (var s in r)
        if ("string" == typeof r[s]) g.appendChild(document.createTextNode(r[s]));
        else if ("quote" === r[s].type) g.appendChild(e.getQuoteText(r[s]));
       else if ("EVT-POPOVER" === r[s].tagName) g.appendChild(r[s]);
       else if ("app" === r[s].type) "" === c ? g.appendChild(e.getEntryLemmaText(r[s])) : g.appendChild(e.getEntryWitnessReadingText(r[s], c));
       else if ("analogue" === r[s].type) g.appendChild(e.getAnalogueText(r[s]));
       else {
        var t = x(r[s], c, f);
        void 0 !== t && g.appendChild(t)
       }
      }
      return g
     };
    return e.getAnalogueText = function(a, b, c) {
     var d;
     d = document.createElement("evt-analogue"), d.setAttribute("data-analogue-id", a.id), d.setAttribute("data-type", "analogue"), "" !== b && void 0 !== b && d.setAttribute("data-scope-wit", b);
     var f = a.content,
      g = ["link", "ptr", "linkGrp"];
     for (var h in f) {
      var i;
      "string" == typeof f[h] ? (i = document.createElement("span"), i.setAttribute("class", "textNode"), i.appendChild(document.createTextNode(f[h])), d.appendChild(i)) : "EVT-POPOVER" === f[h].tagName ? d.appendChild(f[h]) : "app" === f[h].type ? "" === b ? d.appendChild(e.getEntryLemmaText(f[h])) : d.appendChild(e.getEntryWitnessReadingText(f[h], b)) : "quote" === f[h].type ? d.appendChild(e.getQuoteText(f[h], b, c)) : "analogue" === f[h].type ? d.appendChild(e.getAnalogueText(f[h])) : "analogueContent" === f[h].type && g.indexOf(f[h].tagName) < 0 ? (i = x(f[h], b, c), void 0 !== i && d.appendChild(i)) : void 0 !== f[h].content && 0 !== f[h].content.length && (i = x(f[h], b, c), void 0 !== i && d.appendChild(i))
     }
     return d
    }, e
   }]), angular.module("evtviewer.dataHandler").service("evtVersionApparatus", ["config", "parsedData", "evtCriticalApparatus", "evtParser", function(a, b, c, d) {
    var e = {};
    return e.getContent = function(b, c, d) {
     var f = {
      attributes: {
       values: b.attributes || {},
       _keys: Object.keys(b.attributes) || []
      },
      versions: [],
      note: "",
      _readings: !1,
      _xmlSource: b._xmlSource.replace('xmlns="http://www.tei-c.org/ns/1.0"', "")
     };
     for (var g in b.content) {
      var h = e.getVersionContent(b.content[g], c, d),
       i = a.versions.indexOf(h.value);
      f.versions.splice(i, 0, h)
     }
     return void 0 !== b.note && "" !== b.note && (f.note += b.note), (h.significantReadings.length > 0 || h.notSignificantReadings.length > 0) && (f._readings = !0), f
    }, e.getVersionContent = function(a, b, e) {
     var f = {
       id: a.versionId,
       value: a.id,
       lem: "",
       significantReadings: [],
       notSignificantReadings: [],
       attributes: {
        values: a.attributes || {},
        _keys: Object.keys(a.attributes) || []
       }
      },
      g = a.content[a.lemma];
     if (void 0 !== g) {
      var h = c.getLemma(g, b),
       i = c.getText(g).replace(/<span class="textNode">|<\/span>/g, ""),
       j = i.length;
      if (70 >= j) f.lem += '<span class="versionApp_lemma_content">' + h + "</span>";
      else {
       var k = h.substring(0, h.indexOf('<span class="witnesses')),
        l = h.substring(h.indexOf('<span class="witnesses'), h.length);
       f.lem = d.createAbbreviation(k, 70) + l
      }
     }
     for (var m in a.content)
      if (m !== a.lemma) {
       var n = c.getSignificantReading(a.content[m]);
       a.content[m]._significant ? f.significantReadings.push(n) : f.notSignificantReadings.push(n)
      } return f
    }, e
   }]), angular.module("evtviewer.dataHandler").service("evtBibliographyParser", ["$q", "parsedData", "evtParser", "xmlParser", "config", function(a, b, c, d, e) {
    const f = e.allowedBibliographicStyles.Chicago.label,
     g = e.allowedBibliographicStyles.APA.label,
     h = e.allowedBibliographicStyles.MLA.label;
    var i = (e.defaultBibliographicStyle, !1),
     j = !1,
     k = !1,
     l = !1,
     m = !1,
     n = "<monogr>",
     o = "<analytic>",
     p = "<imprint>",
     q = "<series>",
     r = "<biblScope>",
     s = "<citedRange>",
     t = "<editor>",
     u = "<idno>",
     v = "<listBibl>",
     w = {
      biblStruct: "<biblStruct>",
      bibl: "<bibl>"
     },
     x = {};
    x.parseBiblInfo = function(a) {
     var c = angular.element(a);
     for (var d in w) y(d, c);
     console.log("## parseBiblInfo ##", b.getBibliographicRefsCollection())
    };
    var y = function(a, c) {
     var d = c.find(v.replace(/[<>]/g, "")),
      e = d.find(">" + w[a].replace(/[<>]/g, ""));
     angular.forEach(e, function(a) {
      var c = x.extractInfo(a);
      O(c);
      b.addBibliographicRef(c)
     })
    };
    x.extractInfo = function(a) {
     for (var b = {
       id: "",
       type: "",
       author: [],
       titleAnalytic: "",
       titleMonogr: "",
       editionMonogr: "",
       date: "",
       editor: [],
       publisher: "",
       pubPlace: "",
       biblScope: {},
       note: {},
       idno: {},
       outputs: {},
       plainText: ""
      }, d = angular.element(a), e = !1, f = d[0].childNodes, g = 0; g < f.length; g++) 3 === f[g].nodeType && "" !== f[g].textContent.trim() && (e = !0);
     if (b.id = d.attr("xml:id") ? d.attr("xml:id") : c.xpath(a), e) f = d.find("*"), f = f.sort(function(a, b) {
      return $(b).parents().length - $(a).parents().length
     }), f.replaceWith(function() {
      return '<span class="unstructuredBibl ' + this.tagName + '">' + $(this).html() + "</span>"
     }), b.plainText = $(d).html();
     else {
      F(d, b);
      var h = d.find(o.replace(/[<>]/g, ""));
      if (B(angular.element(h), b), z(d.find("author"), b.author), z(d.find(t.replace(/[<>]/g, "")), b.editor), d[0].tagName === w.bibl.replace(/[<>]/g, "")) {
       D(d[0], b), E(d.find(r.replace(/[<>]/g, "")), b.biblScope), E(d.find(s.replace(/[<>]/g, "")), b.biblScope);
       var i = d.children();
       i = $(i).filter(function(a, b) {
        return b.tagName === w.bibl.replace(/[<>]/g, "")
       }), angular.forEach(i, function(a) {
        D(a, b)
       })
      } else E(d.find(s.replace(/[<>]/g, "")), b.biblScope), C(d, b);
      var j = d.find(n.replace(/[<>]/g, ""));
      if (j) {
       j = angular.element(j), B(j, b);
       var k = (j.find(t.replace(/[<>]/g, "")), j.find("edition"));
       b.editionMonogr = k && k.length > 0 ? k[0].textContent : b.editionMonogr;
       var l = k.find("date");
       "" === b.date && (b.date = l && l.length > 0 ? l[0].textContent : ""), E(j.find(r.replace(/[<>]/g, "")), b.biblScope), F(j, b);
       var v = angular.element(j.find(p.replace(/[<>]/g, "")));
       if (v && v.length > 0) {
        var x = angular.element(v[0]);
        E(x.find(r.replace(/[<>]/g, "")), b.biblScope);
        var y = v.find("date");
        b.date = y && y.length > 0 ? y[0].textContent : "";
        var A = v.find("publisher");
        "" === b.publisher && (b.publisher = A && A.length > 0 ? A[0].textContent : "");
        var G = v.find("pubPlace");
        "" === b.pubPlace && (b.pubPlace = G && G.length > 0 ? G[0].textContent : ""), F(v, b)
       }
      }
      var H = angular.element(d.find(q.replace(/[<>]/g, "")));
      if (H && H.length > 0) {
       var I = H.find("date");
       "" === b.date && (b.date = I && I.length > 0 ? I[0].textContent : "");
       var L = H.find("publisher");
       "" === b.publisher && (b.publisher = L && L.length > 0 ? L[0].textContent : "");
       var M = H.find("pubPlace");
       "" === b.pubPlace && (b.pubPlace = M && M.length > 0 ? M[0].textContent : ""), F(H, b), E(H.find(r.replace(/[<>]/g, "")), b.biblScope)
      }
      angular.forEach(d.find(u.replace(/[<>]/g, "")), function(a) {
       var c = a.getAttribute("type");
       null !== c && (b.idno[c] = a.textContent || "")
      }), K(b) || (b.plainText = d[0].textContent), P(b) && R(b) && (m = !0)
     }
     return J(b, !0, !0), b
    };
    var z = function(a, b) {
      angular.forEach(a, function(a) {
       var c = {
        name: "",
        surname: "",
        forename: ""
       };
       if (A(a, a, c), "" !== c.name && "" === c.surname) {
        var d = L(c.name);
        c.surname = "" !== d.surname ? d.surname : c.surname, c.name = "" !== d.name ? d.name : c.name
       }
       b.push(c)
      })
     },
     A = function(a, b, c) {
      if (3 === a.nodeType) {
       var d = a.textContent.substr(0, 1).toUpperCase() + a.textContent.substr(1);
       if (b) switch (b.tagName) {
        case "author":
        case "editor":
        case "name":
         c.name += d + " ";
         break;
        case "surname":
         c.surname += d + " ";
         break;
        case "forename":
         c.forename += d + " "
       }
      }
      angular.forEach(a.childNodes, function(a) {
       switch (a.tagName) {
        case "author":
        case "editor":
        case "name":
        case "surname":
        case "forename":
         A(a, a, c);
         break;
        default:
         A(a, b, c)
       }
      })
     },
     B = function(a, b) {
      var c = a.find("title");
      if (c && c.length > 0) {
       var d = c[0].getAttribute("level") || "";
       d = null !== d ? d.substr(0, 1) : "", a[0].tagName === n.replace(/[<>]/g, "") ? (d = "" === d ? "m" : d, b.titleMonogr = c[0].textContent, b.type += d) : a[0].tagName === o.replace(/[<>]/g, "") && (d = "" === d ? "a" : d, b.titleAnalytic = c[0].textContent, b.type += d)
      }
     },
     C = function(a, b) {
      angular.forEach(a.children(), function(a) {
       "date" === a.tagName ? b.date = a.innerText : "pubPlace" === a.tagName ? b.pubPlace = "" === b.pubPlace ? a.innerText : b.pubPlace : "publisher" === a.tagName && (b.publisher = "" === b.publisher ? a.innerText : b.publisher)
      })
     },
     D = function(a, b) {
      for (var c, d = a.children, e = 0; e < d.length; e++)
       if ("title" === d[e].tagName && (c = d[e].getAttribute("level"), null !== c && "undefined" != typeof c && (c = c.substring(0, 1)), ("m" === c || "j" === c || "u" === c || null === c || "undefined" == typeof c) && (b.titleMonogr = d[e].textContent, b.type += c), "a" === c && null !== c && "undefined" != typeof c && (b.titleAnalytic = d[e].textContent, b.type += c)), "undefined" == typeof c || null === c || "m" === c)
        if ("date" === d[e].tagName) b.date = d[e].textContent;
        else if ("pubPlace" === d[e].tagName) b.pubPlace = "" === b.pubPlace ? d[e].textContent : b.pubPlace;
      else if ("publisher" === d[e].tagName) b.publisher = "" === b.publisher ? d[e].textContent : b.publisher;
      else if ("edition" === d[e].tagName) {
       b.editionMonogr = "" === b.editionMonogr ? d[e].textContent : b.editionMonogr;
       var f = angular.element(d[e]).find("date");
       f && f.length > 0 && (b.date = "" === b.date ? f[0].textContent : b.date)
      }
     },
     E = function(a, b) {
      angular.forEach(a, function(a) {
       angular.forEach(["type", "unit"], function(c) {
        var d = a.getAttribute(c),
         e = a.getAttribute("from"),
         f = a.getAttribute("to");
        null !== d && !d in b && (null !== f && null !== e && "" !== f && "" !== e ? b[d] = e + "-" + f : "" !== a.textContent && (b[d] = a.textContent))
       })
      })
     },
     F = function(a, b) {
      angular.forEach(a.find("note"), function(a) {
       var c = a.getAttribute("type");
       if (null === c) {
        var d = 1;
        for (c = "note-" + d; c in b.note;) c = "note" + ++d
       }
       b.note[c] = a.textContent
      })
     },
     G = function(a) {
      return a && "object" === (typeof a).toLowerCase()
     },
     H = function(a) {
      return G(a) && a instanceof Array
     },
     I = function(a) {
      return "string" === (typeof a).toLowerCase()
     },
     J = function(a, b, c) {
      if ("string" == typeof a) return b && (a = a.replace(/\.$/, "")), c && (a = a.trim(), a = a.replace(/\s+/g, " ")), a;
      if (H(a))
       for (var d = 0, e = a.length; e > d; d++) J(a[d], !0, !0);
      else if (G(a))
       for (var f in a) {
        var g;
        g = "author" !== f ? J(a[f], !0, !0) : J(a[f], !1, !0), "undefined" != typeof g && (a[f] = g)
       }
     },
     K = function(a) {
      var b = !1;
      if (I(a)) "" !== a && (b = !0);
      else if (H(a)) a.length > 0 && (b = !0);
      else if (G(a))
       for (var c in a) "id" !== c && (b = b ? b : K(a[c])), "author" === c && a[c].length > 0 && (j = !0), "date" === c && "" !== a[c] && (i = !0), "titleAnalytic" !== c && "titleMonogr" !== c || "" === a[c] || (k = !0), "publisher" === c && "" !== a[c] && (l = !0);
      return b
     };
    x.formatResult = function(a, b) {
     if (!b.outputs[a]) {
      var c, d, e, i = "";
      if (null === a || "undefined" == typeof a || "" === a) "" !== b.plainText && (i += '<span data-style="unstructuredBibl">' + b.plainText + "<span>");
      else if (a === f) {
       if ("" !== b.plainText && (i += '<span data-style="chicago">' + b.plainText + "<span>"), b.author && b.author.length > 0) {
        if (i += '<span data-style="chicago" class="authors">', c = b.author[0], d = "" !== c.name ? c.name : c.forename, e = c.surname, "" !== d && "" === e) {
         var j = L(d);
         e = "" !== j.surname ? j.surname : e, d = "" !== j.name ? j.name : d
        }
        i += '<span data-style="chicago" class="author">', "" !== e && (i += '<span data-style="chicago" class="surname">' + e + "</span>"), "" !== d && "" !== e ? i += '<span data-style="chicago" class="name">' + N(d) + "</span>" : "" !== d && (i += '<span data-style="chicago" class="name">' + d + "</span>"), i += "</span>", angular.forEach(b.author, function(a, b) {
         if (b > 0) {
          var c = "" !== a.name ? a.name : a.forename,
           d = a.surname;
          if ("" !== c && "" === d) {
           var e = L(c);
           d = "" !== e.surname ? e.surname : d, c = "" !== e.name ? e.name : c
          }
          i += '<span data-style="chicago" class="author">', "" !== c && "" !== d ? i += '<span data-style="chicago" class="name">' + N(c) + "</span>" : "" !== c && (i += '<span data-style="chicago" class="name">' + c + "</span>"), "" !== d && (i += '<span data-style="chicago" class="surname">' + d + "</span>"), i += "</span>"
         }
        })
       }
       i += "</span>", aa(b) ? (U(b) && (i += '<span data-style="chicago" class="date">' + U(b) + "</span>"), Q(b) && (i += '<span data-style="chicago" data-attr="titolo" class="titleAnalytic">' + Q(b) + "</span>"), R(b) && (i += '<span data-style="chicago" data-attr="titolo" class="titleMonogr">' + R(b) + "</span>"), S(b) && (i += '<span data-style="chicago" data-attr="titolo" class="edition">' + S(b) + "</span>"), T(b) && (i += '<span data-style="chicago" class="pubPlace">' + T(b) + "</span>"), ba(b) && (i += '<span data-style="chicago" class="publisher">' + ba(b) + "</span>"), W(b) && (i += '<span data-style="chicago" class="url">' + W(b) + "</span>")) : (U(b) && (i += '<span data-style="chicago" class="date">' + U(b) + "</span>"), Q(b) && (i += '<span data-style="chicago" class="titleAnalytic">' + Q(b) + "</span>"), R(b) && (i += '<span data-style="chicago" class="titleMonogr">' + R(b) + "</span>"), ca(b) && (i += '<span data-style="chicago" class="editors">', angular.forEach(ca(b), function(a, b) {
        i += '<span data-style="chicago" class="editor">';
        var c = "" !== a.name ? a.name : a.forename,
         d = a.surname;
        if ("" !== c && "" === d) {
         var e = L(c);
         d = "" !== e.surname ? e.surname : d, c = "" !== e.name ? e.name : c
        }
        "" !== d && (i += '<span data-style="chicago" class="editor surname">' + d + "</span>"), "" !== c && (i += '<span data-style="chicago" class="editor name">' + c + "</span>"), i += "</span>"
       }), i += "</span>"), T(b) && (i += '<span data-style="chicago" class="pubPlace">' + T(b) + "</span>"), ba(b) && (i += '<span data-style="chicago" class="publisher">' + ba(b) + "</span>"), V(b) && (i += '<span data-style="chicago" class="pp">' + V(b) + "</span>"))
      } else if (a === g)
       if ("" !== b.plainText && (i += '<span data-style="apa">' + b.plainText + "<span>"), aa(b)) b.author && b.author.length > 0 && (i += '<span data-style="apa" class="authors">', c = b.author[0], d = "" !== c.name ? c.name : c.forename, e = c.surname, i += '<span data-style="apa" class="author">', "" !== e && (i += '<span data-style="apa" class="surname">' + e + "</span>"), "" !== d && "" !== e && (i += '<span data-style="apa" class="name">' + M(d) + "</span>"), "" !== d && "" === e && (i += '<span data-style="apa" class="name">' + d + "</span>"), i += "</span>", angular.forEach(b.author, function(a, b) {
        if (b > 0) {
         var d = "" !== a.name ? a.name : c.forename,
          e = "" !== a.surname ? a.surname : "";
         i += '<span data-style="apa" class="author">', "" !== e && (i += '<span data-style="apa" class="surname">' + e + "</span>"), "" !== d && "" !== e && (i += '<span data-style="apa" class="name">' + M(d) + "</span>"), "" !== d && "" === e && (i += '<span data-style="apa" class="name">' + d + "</span>"), i += "</span>"
        }
       }), i += "</span>"), U(b) && (i += '<span data-style="apa" class="date">' + U(b) + "</span>"), R(b) && (i += '<span data-style="apa" data-attr="titolo" class="titleMonogr">' + R(b) + "</span>"), V(b) && (i += '<span data-style="apa" class="pp">' + V(b) + "</span>"), T(b) && (i += '<span data-style="apa" class="pubPlace">' + T(b) + "</span>"), ba(b) && (i += '<span data-style="apa" class="publisher">' + ba(b) + "</span>");
       else {
        if (b.author && b.author.length > 0 && (i += '<span data-style="apa" class="authors">', c = b.author[0], d = "" !== c.name ? c.name : c.forename, e = c.surname, i += '<span data-style="apa" class="author">', "" !== e && (i += '<span data-style="apa" class="surname">' + e + "</span>"), "" !== d && "" !== e && (i += '<span data-style="apa" class="name">' + M(d) + "</span>"), "" !== d && "" === e && (i += '<span data-style="apa" class="name">' + d + "</span>"), i += "</span>", angular.forEach(b.author, function(a, b) {
          if (b > 0) {
           var d = "" !== a.name ? a.name : c.forename,
            e = "" !== a.surname ? a.surname : "";
           if ("" !== d && "" === e) {
            var f = L(d);
            e = "" !== f.surname ? f.surname : e, d = "" !== f.name ? f.name : d
           }
           i += '<span data-style="apa" class="author">', "" !== e && (i += '<span data-style="apa" class="surname">' + e + "</span>"), "" !== d && "" !== e && (i += '<span data-style="apa" class="name">' + M(d) + "</span>"), "" !== d && "" === e && (i += '<span data-style="apa" class="name">' + d + "</span>"), i += "</span>"
          }
         }), i += "</span>"), U(b) && (i += '<span data-style="apa" class="date">' + U(b) + "</span>"), Q(b) && (i += '<span data-style="apa" data-attr="titolo" class="titleAnalytic">' + Q(b) + "</span>"), R(b) && (i += '<span data-style="apa" data-attr="titolo" class="titleMonogr">' + R(b) + "</span>"), X(b)) {
         var k = X(b);
         if (Y(b)) {
          var l = Y(b);
          i += '<span data-style="apa" class="vol">' + k + "(" + l + ")</span>"
         } else i += '<span data-style="apa" class="vol">' + k + "</span>"
        }
        V(b) && (i += '<span data-style="apa" class="pp">' + V(b) + "</span>"), T(b) && (i += '<span data-style="apa" class="pubPlace">' + T(b) + "</span>"), ba(b) && (i += '<span data-style="apa" class="publisher">' + ba(b) + "</span>")
       }
      else a === h && ("" !== b.plainText && (i += '<span data-style="mla">' + b.plainText + "<span>"), !aa(b), b.author && b.author.length > 0 && (i += '<span data-style="mla" class="authors">', c = b.author[0], d = "" !== c.name ? c.name : c.forename, e = c.surname, i += '<span data-style="mla" class="author">', "" !== e && (i += '<span data-style="mla" class="surname">' + e + "</span>"), "" !== d && "" !== e ? i += '<span data-style="mla" class="name">' + N(d) + "</span>" : "" !== d && (i += '<span data-style="mla" class="name">' + d + "</span>"), i += "</span>", angular.forEach(b.author, function(a, b) {
       if (b > 0) {
        var c = "" !== a.name ? a.name : a.forename,
         d = a.surname;
        i += '<span data-style="mla" class="author">', "" !== c && "" !== d ? i += '<span data-style="mla" class="name">' + N(c) + "</span>" : "" !== c && (i += '<span data-style="mla" class="name">' + c + "</span>"), "" !== d && (i += '<span data-style="mla" class="surname">' + d + "</span>"), i += "</span>"
       }
      }), i += "</span>"), Q(b) && (i += '<span data-style="mla" data-attr="titolo" class="titleAnalytic">' + Q(b) + "</span>"), R(b) && (i += '<span data-style="mla" data-attr="titolo" class="titleMonogr">' + R(b) + "</span>"), T(b) && (i += '<span data-style="mla" class="pubPlace">' + T(b) + "</span>"), ba(b) && (i += '<span data-style="mla" class="publisher">' + ba(b) + "</span>"), U(b) && (i += '<span data-style="mla" class="date">' + U(b) + "</span>"), V(b) && (i += '<span data-style="mla" class="pp">' + V(b) + "</span>"), W(b) && (i += '<span data-style="mla" class="generic">Web</span>'));
      if ("" !== i && _(b)) {
       var m = "";
       angular.forEach(_(b), function(a) {
        m += "<p>" + a + "</p>"
       }), i += '<evt-popover data-trigger="click"  data-tooltip="' + m + '"><i class="icon-evt_note"></i></evt-popover>'
      }
      b.outputs[a] = i
     }
    };
    var L = function(a) {
      for (var b = {
        surname: "",
        name: ""
       }, c = 0, d = 0, e = 0; e < a.length; e++) "," === a[e] && (c++, d = e);
      return 1 === c && d > 0 && (b.surname = a.substr(0, d), b.name = a.substr(d + 1, a.length - 1)), b
     },
     M = function(a) {
      for (var b = "", c = 0; c < a.length; c++) 0 !== c && " " !== a[c - 1] && "." !== a[c - 1] || " " === a[c] || a[c] !== a[c].toUpperCase() || (b += "", b += a[c], b += ".");
      var d = b.length;
      return "." === b[d - 1] && (b = b.substr(0, d - 1)), b
     },
     N = function(a) {
      for (var b = -1, c = 0, d = 0; d < a.length; d++)
       if (-1 === b && " " !== a[d] && a[d] === a[d].toUpperCase() && (b = d, c = d), -1 !== b) {
        if (" " === a[d] || "." === a[d]) break;
        c++
       } var e = a.substr(b, c),
       f = M(a.substr(c + 1));
      return "" !== f && (e += " "), e + f
     };
    x.yearInfoDetected = function() {
     return i
    }, x.authorInfoDetected = function() {
     return j
    }, x.titleInfoDetected = function() {
     return k
    }, x.publisherInfoDetected = function() {
     return l
    }, x.bibliographicStyleInfoDetected = function() {
     return m
    }, x.getType = function(a) {
     return Z(a)
    };
    var O = function(a) {
      return "" !== a.id ? a.id : void 0
     },
     P = function(a) {
      return a.author && a.author.length > 0 ? a.author : void 0
     },
     Q = function(a) {
      return "" !== a.titleAnalytic ? a.titleAnalytic : void 0
     },
     R = function(a) {
      return "" !== a.titleMonogr ? a.titleMonogr : void 0
     },
     S = function(a) {
      return "" !== a.editionMonogr ? a.editionMonogr : void 0
     },
     T = function(a) {
      return "" !== a.pubPlace ? a.pubPlace : void 0
     },
     U = function(a) {
      return "" !== a.date ? a.date : void 0
     },
     V = function(a) {
      var b;
      return "undefined" != typeof a.note && ("undefined" != typeof a.note.pp ? b = a.note.pp : "undefined" != typeof a.note.pages && (b = a.note.pages)), "undefined" != typeof a.biblScope.pages ? b = a.biblScope.pages : "undefined" != typeof a.biblScope.pp ? b = a.biblScope.pp : "undefined" != typeof a.biblScope.page && (b = a.biblScope.page), b
     },
     W = function(a) {
      return "undefined" != typeof a.note.url ? '<a href="' + a.note.url + '" target="_blank">' + a.note.url + "</a>" : void 0
     },
     X = function(a) {
      return "undefined" != typeof a.biblScope.vol ? a.biblScope.vol : "undefined" != typeof a.biblScope.volume ? a.biblScope.volume : "undefined" != typeof a.biblScope.volumes ? a.biblScope.volumes : void 0
     },
     Y = function(a) {
      return "undefined" != typeof a.biblScope.issue ? a.biblScope.issue : void 0
     },
     Z = function(a) {
      return "" !== a.type ? ("am" === a.type || "ma" === a.type || ("aj" === a.type || "ja" === a.type ? a.type = "j" : a.type.includes("a") ? a.type = "a" : a.type = a.type.substr(0, 1)), a.type) : void 0
     },
     _ = function(a) {
      return a.note && Object.keys(a.note).length > 0 ? a.note : void 0
     },
     aa = function(a) {
      return Z(a) && "m" === Z(a).toLowerCase().substr(0, 1)
     },
     ba = function(a) {
      return "" !== a.publisher ? a.publisher : void 0
     },
     ca = function(a) {
      return a.editor && a.editor.length > 0 ? a.editor : void 0
     };
    return x
   }]), angular.module("evtviewer.dataHandler").service("evtHotSpotParser", ["$q", "xmlParser", "evtParser", "parsedData", "config", function(a, b, c, d, e) {
    var f = {};
    return f.parseHotSpots = function(a) {
     var b = angular.element(a);
     angular.forEach(b.find("div[type='hotspot']"), function(a) {
      angular.forEach(a.childNodes, function(a) {
       if ("div" === a.tagName) {
        var b = {};
        if (a.attributes)
         for (var c = 0; c < a.attributes.length; c++) {
          var e = a.attributes[c];
          if (e.specified) {
           var f = "xml:id" === e.name ? "id" : e.name.replace(":", "-");
           b[f] = e.value
          }
         }
        b.content = angular.element(a).text(), b.images = angular.element(a).find("graphic"), d.addHotSpot(b)
       }
      })
     }), console.log("## HOTSPOTS ##", d.getHotSpots())
    }, f
   }]), angular.module("evtviewer.dataHandler").service("evtGlyph", ["parsedData", function a(b) {
    function c(a) {
     var c, d = b.getGlyphs(),
      e = a.getAttribute("ref");
     try {
      e = e.replace("#", ""), c = d[e].mapping, c.id = e
     } catch (f) {
      return console.log(f), !0
     }
     return c
    }
    a.prototype.getGlyph = function(a, b) {
     var d = c(a),
      e = d.runic,
      f = {};
     return f = e ? {
      diplomatic: function() {
       return void 0 !== d.runic ? d.runic.content : ""
      },
      interpretative: function() {
       return void 0 !== d.transliterated ? d.transliterated.content : ""
      }
     } : {
      diplomatic: function() {
       return void 0 !== d.diplomatic ? d.diplomatic.content : ""
      },
      interpretative: function() {
       return void 0 !== d.normalized ? d.normalized.content : ""
      }
     }, f[b]()
    }
   }]), angular.module("evtviewer.dataHandler").service("evtDepaParser", ["parsedData", "evtCriticalElementsParser", "Utils", "evtParser", "config", "xmlParser", function(a, b, c, d, e, f) {
    var g = {},
     h = "<app>",
     i = "<lem>",
     j = i + ", <rdg>",
     k = "<rdgGrp>",
     l = e.quoteDef,
     m = e.analogueDef,
     n = "<evt-reading>,<pb>," + h + "," + j + "," + k + "," + l + "," + m + ",<evt-quote>,<evt-analogue>,<evt-version-reading>";
    return g.setAppInText = function(d, e, f) {
     if (a.getCriticalEntries()._indexes.depa) {
      var h = a.getCriticalEntries()._indexes.depa.start,
       i = d.getAttribute("xml:id"),
       j = Object.keys(h).filter(function(a) {
        return h[a] === i
       }) || [];
      angular.forEach(j, function(h) {
       var i = a.getCriticalEntryById(h);
       if (i) {
        var j = a.getCriticalEntries()._indexes.depa.end[h],
         k = f.querySelector('[*|id="' + j + '"]');
        if (k) {
         var l = e ? b.getEntryWitnessReadingText(i, e) : b.getEntryLemmaText(i, e),
          m = a.getEncodingDetail("variantEncodingMethod");
         if (l.setAttribute("data-method", m || "double-end-point"), !l.firstChild || !l.firstChild.className || l.firstChild.className.indexOf("empty") < 0) {
          if (d === k) g.removeChildNodes(d);
          else {
           if (d.childNodes && d.childNodes.length > 0 || g.isDescendant(d, k)) {
            var n = document.createTextNode("");
            d.parentNode.insertBefore(n, d), d = n
           }
           var o = c.DOMutils.getElementsBetweenTree(d, k);
           angular.forEach(o, function(a) {
            a.parentNode.removeChild(a)
           })
          }
          d.parentNode.insertBefore(l, d)
         } else {
          var p = g.createAnchorElement(i, e);
          d.parentNode.insertBefore(p, d), l.setAttribute("data-no-text", !0), k.parentNode.insertBefore(l, k.nextSibling)
         }
        }
       }
      })
     }
    }, g.setInternalAppInText = function(a, d, e, f) {
     var h = e ? b.getEntryWitnessReadingText(d, e) : b.getEntryLemmaText(d, e),
      i = d.attributes.from.replace("#", ""),
      j = d.attributes.to ? d.attributes.to.replace("#", "") : null,
      k = i ? f.querySelector('[*|id="' + i + '"]') || null : null,
      l = j ? f.querySelector('[*|id="' + j + '"]') || null : a;
     if (k && l) {
      if (k.childNodes && k.childNodes.length > 0 || g.isDescendant(k, l)) {
       var m = document.createTextNode("");
       k.parentNode.insertBefore(m, k), k = m
      }
      var n = c.DOMutils.getElementsBetweenTree(k, l);
      if (!h.firstChild || !h.firstChild.className || h.firstChild.className.indexOf("empty") < 0) angular.forEach(n, function(a) {
       var b = document.createTextNode("");
       a.parentNode.replaceChild(b, a)
      }), k.parentNode.insertBefore(h, k.nextSibling);
      else {
       h.setAttribute("data-overlap", !0);
       var o = g.createAnchorElement(d, e);
       k.parentNode.insertBefore(o, k.nextSibling), angular.forEach(n, function(a) {
        var b = g.createDepaContentNode(a, f);
        b && a.parentNode.replaceChild(b, a)
       }), h.setAttribute("data-no-text", !0), l.parentNode.insertBefore(h, l.nextSibling)
      }
      return h
     }
    }, g.getLemma = function(b, c) {
     c = c.documentElement || c;
     var e = "",
      f = a.getCriticalEntries()._indexes.depa.start,
      h = a.getCriticalEntries()._indexes.depa.end,
      i = f[b.id],
      j = h[b.id];
     if (i) {
      if (i === j) {
       var k = c.querySelector("[*|id=" + i + "]");
       k && (e = k.outerHTML)
      } else {
       var l = c.outerHTML.replace(/ xmlns="http:\/\/www\.tei-c\.org\/ns\/1\.0"/g, "");
       e = g.findReadingString(l, j, i, b), e = d.balanceXHTML(e)
      }
      e = e.replace(/ xmlns="http:\/\/www\.tei-c\.org\/ns\/1\.0"/g, "").trim(), g.parseLemma(b, e, c)
     }
    }, g.findReadingString = function(b, c, d, e) {
     var f, g = b.indexOf('xml:id="' + d),
      h = b.substring(0, g).lastIndexOf("<"),
      i = 0,
      j = a.getEncodingDetail("variantEncodingLocation");
     if ("internal" === j) {
      var k = e._xmlSource.replace(/ xmlns="http:\/\/www\.tei-c\.org\/ns\/1\.0"/g, "");
      i = b.indexOf(k, h)
     } else i = b.indexOf('xml:id="' + c + '"');
     return f = b.substring(h, i), f = f.substring(f.indexOf(">") + 1), "external" === j && (f = f.substring(0, f.lastIndexOf("<"))), f
    }, g.parseLemma = function(a, b, c) {
     var e;
     content = b, "string" != typeof b && (e = f.parse(b), content = d.parseXMLElement(c, e, {
      skip: n
     }), content = content.textContent ? content.textContent : e.textContent);
     var g = {
      id: a.id + "-depa-lem",
      attributes: [],
      content: [content],
      note: "",
      _significant: !0,
      _group: void 0,
      _xmlTagName: "",
      _xmlSource: b
     };
     a.content[g.id] = g, a.lemma = g.id
    }, g.removeChildNodes = function(a) {
     if (a.childNodes && !(a.childNodes.length <= 0))
      for (var b = a.childNodes.length - 1; b >= 0;) a.removeChild(a.childNodes[b]), b--
    }, g.isDescendant = function(a, b) {
     if (b) {
      for (var c = b.parentNode; c;) return c === a ? !0 : g.isDescendant(a, c.parentNode);
      return !1
     }
    }, g.createAnchorElement = function(a, b) {
     var c = document.createElement("span");
     return c.setAttribute("data-app-id", a.id), c.setAttribute("class", "depaAnchor"), c.setAttribute("id", "depaAnchor-" + a.id + "-" + b), c
    }, g.createDepaContentNode = function(a, b) {
     var c;
     return 3 === a.nodeType ? (c = document.createElement("span"), c.setAttribute("class", "depaContent"), c.textContent = a.textContent) : (!a.className || a.className.indexOf("depaContent") < 0) && (c = d.parseXMLElement(b, a, {
      skip: n
     }), c.className += " depaContent"), c
    }, g
   }]), angular.module("evtviewer.dataHandler").service("evtBuilder", ["EvtParagraphLineParser", "EvtLbParser", "evtSearchDocument", "evtAbstractSearchParserInterface", function b(a, c, d, e) {
    function f(a, b) {
     if (arguments.length < 2) throw new Error("Function Interface.ensureImplements called with " + arguments.length + " arguments, but expected at least 2.");
     for (var c = 1; c < arguments.length; c++) {
      var d = arguments[c];
      if (d.constructor !== b.constructor) throw new Error("Function Interface.ensureImplements expects arguments two and above to be instances of Interface.");
      d.methods.forEach(function(b) {
       if (!a.prototype[b] || "function" != typeof a.prototype[b]) throw new Error("Function Interface.ensureImplements: object does not implement the " + d.name + " interface. Method " + b + " was not found.")
      })
     }
    }
    b.prototype.createParser = function(b) {
     var g = d.hasLbElement(b);
     return g ? (f(c, e), new c(b)) : g ? void 0 : (f(a, e), new a(b))
    }
   }]), angular.module("evtviewer.dataHandler").service("evtSearch", ["evtSearchDocument", "evtBuilder", "evtSearchIndex", function c(a, b, d) {
    var e = 0,
     f = {};
    c.prototype.initSearch = function(c) {
     var g, h = {},
      i = a.getXmlDocBody(c);
     a.removeNoteElements(c), a.removeAddElements(c);
     for (var j = 0; j < i.length; j++) h = b.createParser(i[j]), g = h.parseElements(e), e = h.getPrevDocsLines(), f = angular.extend(f, g);
     d.createIndex(f)
    }, c.prototype.getParsedElementsForIndexing = function() {
     return f
    }, c.prototype.getPrevDocsLines = function() {
     return e
    }
   }]), angular.module("evtviewer.dataHandler").factory("EvtSearchInterface", function() {
    function a(a, b) {
     if (2 !== arguments.length) throw new Error("Interface constructor called with " + arguments.length + " arguments, but expected exactly 2.");
     this.name = a, this.methods = b.map(function(a) {
      if ("string" != typeof a) throw new Error("Interface constructor expects method names to be passed in as a string.");
      return a
     })
    }
    return a
   }), angular.module("evtviewer.dataHandler").service("evtSearchDocument", ["parsedData", "evtGlyph", "XPATH", "Utils", "config", function d(a, b, c, e, f) {
    function g() {
     var b = a.getDocuments(),
      c = b._indexes,
      d = [],
      e = {};
     return c.forEach(function(a) {
      e.id = a, e.title = b[e.id].title, e.textNode = b[e.id].content, d.push(e), e = {}
     }), d
    }
    var h = this;
    h.ns = !1, h.nsResolver = "", d.prototype.hasNamespace = function(a) {
     var b = a.documentElement.namespaceURI;
     return null !== b && (h.ns = !0, h.nsResolver = function(b) {
      return "ns" === b ? a.documentElement.namespaceURI : void 0
     }), h.ns
    }, d.prototype.isAlsoInterpEdition = function() {
     var a, b, c = f.availableEditionLevel;
     return c.forEach(function(c) {
      "diplomatic" === c.value && (a = c.visible), "interpretative" === c.value && (b = c.visible)
     }), a && b
    }, d.prototype.hasLbElement = function(a) {
     return 0 !== a.getElementsByTagName("lb").length
    }, d.prototype.getXmlDocBody = function(a) {
     return a.getElementsByTagName("body")
    }, d.prototype.getCurrentXmlDoc = function(a, b, d, e) {
     var f = g(),
      h = d ? a.evaluate(c.ns.getCurrentTextNode, b, e, XPathResult.ANY_TYPE, null) : a.evaluate(c.getCurrentTextNode, b, null, XPathResult.ANY_TYPE, null);
     h = h.iterateNext();
     for (var i in f)
      if (h === f[i].textNode) return f[i]
    }, d.prototype.getCurrentPage = function(a) {
     return a.getAttribute("n")
    }, d.prototype.getCurrentPageId = function(a) {
     return a.getAttribute("xml:id") || "page_" + a.getAttribute("n")
    }, d.prototype.getCurrentPageNodes = function(a, b) {
     for (var c = [], d = 0; d < b.length;) {
      if ("pb" === b[d].nodeName) return c;
      c.push(b[d]), b.splice(0, 1)
     }
     return c
    }, d.prototype.getLineNodes = function(a, b, d, e, f, g) {
     for (var h, i, j, k, l, m, n = [], o = 0; o < b.length;) {
      if (h = f ? a.evaluate(c.ns.getPrevBody, b[o], g, XPathResult.ANY_TYPE, null) : a.evaluate(c.getPrevBody, b[o], null, XPathResult.ANY_TYPE, null), i = f ? a.evaluate(c.ns.getPrevLb, b[o], g, XPathResult.ANY_TYPE, null) : a.evaluate(c.getPrevLb, b[o], null, XPathResult.ANY_TYPE, null), m = h.numberValue >= 1 ? i.numberValue - d : i.numberValue, j = 0 !== m, k = "lb" === b[o].nodeName, l = "pb" === b[o].nodeName, j || k) {
       for (; k || l;) {
        if (b.splice(0, 1), 0 === b.length) return;
        k = "lb" === b[o].nodeName, l = "pb" === b[o].nodeName
       }
       for (; void 0 !== b[o] && "lb" !== b[o].nodeName && "pb" !== b[o].nodeName;) n.push(b[o]), b.splice(0, 1);
       return n
      }
      b.splice(0, 1)
     }
     return n
    }, d.prototype.removeEmptyTextNodes = function(a) {
     return a.filter(function(a) {
      var b = "#text" === a.nodeName && "" === a.textContent.trim(),
       c = "#text" === a.nodeName;
      return !b || !c
     })
    }, d.prototype.getChildNodes = function(a, b, d, e) {
     var f, g = [],
      h = d ? a.evaluate(c.ns.getChildNodes, b, e, XPathResult.ANY_TYPE, null) : a.evaluate(c.getChildNodes, b, null, XPathResult.ANY_TYPE, null);
     for (f = h.iterateNext(); null !== f;) g.push(f), f = h.iterateNext();
     return g
    }, d.prototype.getBodyTextGlyphNodes = function(a, b, d, e) {
     var f, g = [],
      h = d ? a.evaluate(c.ns.getTextGlyphNodes, b, e, XPathResult.ANY_TYPE, null) : a.evaluate(c.getTextGlyphNodes, b, null, XPathResult.ANY_TYPE, null);
     for (f = h.iterateNext(); null !== f;) g.push(f), f = h.iterateNext();
     return g
    }, d.prototype.getParagraph = function(a, b) {
     return a.getAttribute("n") || b.toString()
    }, d.prototype.getLine = function(a, b) {
     return a.getAttribute("n") || b.toString()
    }, d.prototype.getContent = function(a, c) {
     var d, f, g = "";
     return a.forEach(function(a) {
      d = {
       g: function() {
        f = b.getGlyph(a, c), g += f
       },
       "#text": function() {
        g += a.textContent
       }
      }, d[a.nodeName]()
     }), e.cleanSpace(g)
    }, d.prototype.removeNoteElements = function(a) {
     for (var b = a.getElementsByTagName("note"); b.length > 0;) b[0].parentNode.removeChild(b[0])
    }, d.prototype.removeAddElements = function(a) {
     for (var b = a.getElementsByTagName("add"); b.length > 0;) b[0].parentNode.removeChild(b[0])
    }
   }]), angular.module("evtviewer.dataHandler").factory("evtAbstractSearchParserInterface", ["EvtSearchInterface", function(a) {
    return new a("evtAbstractSearchParserInterface", ["parseElements", "getPrevDocsLines"])
   }]), angular.module("evtviewer.dataHandler").factory("EvtParagraphLineParser", ["evtSearchDocument", "evtSearchDiplomaticParLineHandler", "XPATH", function e(a, b, c) {
    function e(a) {
     this.parsedElementsForIndexing = {}, this.xmlDocBody = a
    }
  
    function d(a, b, c, d) {
     var e = f(a, b, c, d);
     return g(a, b, e, c, d)
    }
  
    function f(a, b, d, e) {
     return d ? a.evaluate(c.ns.getParLineNodes, b, e, XPathResult.ANY_TYPE, null) : a.evaluate(c.getParLineNodes, b, null, XPathResult.ANY_TYPE, null)
    }
  
    function g(a, c, d, e, f) {
     return b.getParLineInfo(a, c, d, e, f)
    }
    return e.prototype.getPrevDocsLines = function() {}, e.prototype.parseElements = function() {
     var b, c, e = this.xmlDocBody.ownerDocument;
     return a.hasNamespace(e), b = a.ns, c = a.nsResolver, this.parsedElementsForIndexing = d(e, this.xmlDocBody, b, c), this.parsedElementsForIndexing
    }, e
   }]), angular.module("evtviewer.dataHandler").factory("EvtLbParser", ["evtSearchDocument", "evtDiplomaticEditionHandler", "evtInterpretativeEditionHandler", "evtSearchDiplomaticLbHandler", "evtGlyph", "Utils", "XPATH", function(a, b, c, d, e, f, g) {
    function h(a) {
     this.parsedElementsForIndexing = {}, this.xmlDocBody = a
    }
  
    function i(a, b, c, d, e) {
     var f = [],
      g = j(a, b, d, e);
     return f = k(a, b, g, c, d, e)
    }
  
    function j(a, b, c, d) {
     return c ? a.evaluate(g.ns.getLineNodes, b, d, XPathResult.ANY_TYPE, null) : a.evaluate(g.getLineNodes, b, null, XPathResult.ANY_TYPE, null)
    }
  
    function k(a, b, c, e, f, g) {
     return d.getLineInfo(a, b, c, e, f, g)
    }
    return h.prototype.getPrevDocsLines = function() {
     return this.parsedElementsForIndexing.countAllLines
    }, h.prototype.parseElements = function(b) {
     var c, d, e = this.xmlDocBody.ownerDocument;
     return a.hasNamespace(e), c = a.ns, d = a.nsResolver, this.parsedElementsForIndexing = i(this.xmlDocBody.ownerDocument, this.xmlDocBody, b, c, d), this.parsedElementsForIndexing
    }, h
   }]), angular.module("evtviewer.dataHandler").service("evtDiplomaticEditionHandler", ["XPATH", function f(a) {
    f.prototype.getDiplomaticNodes = function(b, c, d, e) {
     for (var f = [], g = d ? b.evaluate(a.ns.getDiplomaticNodes, c, e, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null) : b.evaluate(a.getDiplomaticNodes, c, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null), h = 0; h < g.snapshotLength; h++) f.push(g.snapshotItem(h));
     return f
    }, f.prototype.getDiplomaticChildNodes = function(b, c, d, e) {
     for (var f = [], g = d ? b.evaluate(a.ns.getDiplomaticChildNodes, c, e, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null) : b.evaluate(a.getDiplomaticChildNodes, c, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null), h = 0; h < g.snapshotLength; h++) f.push(g.snapshotItem(h));
     return f
    }
   }]), angular.module("evtviewer.dataHandler").service("evtInterpretativeEditionHandler", ["XPATH", function g(a) {
    g.prototype.getInterpretativeNodes = function(b, c, d, e) {
     for (var f = [], g = d ? b.evaluate(a.ns.getInterpretativeNodes, c, e, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null) : b.evaluate(a.getInterpretativeNodes, c, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null), h = 0; h < g.snapshotLength; h++) f.push(g.snapshotItem(h));
     return f
    }, g.prototype.getInterpretativeChildNodes = function(b, c, d, e) {
     for (var f = [], g = d ? b.evaluate(a.ns.getInterpretativeChildNodes, c, e, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null) : b.evaluate(a.getInterpretativeChildNodes, c, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null), h = 0; h < g.snapshotLength; h++) f.push(g.snapshotItem(h));
     return f
    }
   }]), angular.module("evtviewer.dataHandler").service("evtSearchDiplomaticParLineHandler", ["evtSearchDocument", "evtDiplomaticEditionHandler", "evtInterpretativeEditionHandler", "XPATH", "Utils", function h(a, b, c, d, e) {
    h.prototype.getParLineInfo = function(d, e, f, g, h) {
     for (var i, j, k = a.getCurrentXmlDoc(d, e, g, h), l = a.isAlsoInterpEdition(), m = 1, n = 1, o = 1, p = {}, q = {}, r = f.iterateNext(); null !== r;) {
      var s = {
       head: function() {},
       pb: function() {
        i = a.getCurrentPage(r) || m, j = a.getCurrentPageId(r, m), m++
       },
       "default": function() {
        var e = b.getDiplomaticChildNodes(d, r, g, h);
        if (l) var f = c.getInterpretativeChildNodes(d, r, g, h);
        e.forEach(function(b) {
         var c, g;
         "pb" === b.nodeName && (i = a.getCurrentPage(b), j = a.getCurrentPageId(b, m), m++, e.splice(0, 1), l && f.splice(0, 1)), i && (p.page = i, p.pageId = j), p.xmlDocTitle = k.title, p.xmlDocId = k.id;
         var h = {
          p: function() {
           p.paragraph = a.getParagraph(r, n), p.docId = p.xmlDocId + "-" + p.page + "-" + p.paragraph, n++
          },
          l: function() {
           p.line = a.getLine(r, o), p.docId = p.xmlDocId + "-" + p.page + "-" + p.line, o++
          }
         };
         if (h[r.nodeName](), p.content = {}, c = a.getCurrentPageNodes(d, e), g = a.removeEmptyTextNodes(c), 0 === g.length) return void(p = {});
         if (p.content.diplomatic = a.getContent(g, "diplomatic"), l) {
          var s = a.getCurrentPageNodes(d, f),
           t = a.removeEmptyTextNodes(s);
          if (0 === t.length) return void(p = {});
          p.content.interpretative = a.getContent(t, "interpretative")
         }
         q[p.docId] = p, p = {}, c = [], l && (s = [])
        })
       }
      };
      (s[r.nodeName] || s["default"])(), r = f.iterateNext()
     }
     return q
    }
   }]), angular.module("evtviewer.dataHandler").service("evtSearchDiplomaticLbHandler", ["evtSearchDocument", "evtDiplomaticEditionHandler", "evtInterpretativeEditionHandler", function i(a, b, c) {
    var d = 0;
    i.prototype.getLineInfo = function(e, f, g, h, i, j) {
     var k, l, m, n = a.getCurrentXmlDoc(e, f, i, j),
      o = b.getDiplomaticNodes(e, f, i, j),
      p = a.isAlsoInterpEdition(),
      q = [],
      r = [],
      s = 1,
      t = 1,
      u = {},
      v = 1,
      w = 0,
      x = {},
      y = {},
      z = 1,
      A = 0,
      B = g.iterateNext();
     if (p) var C = c.getInterpretativeNodes(e, f, i, j);
     for (; null !== B;) {
      var D = {
       pb: function() {
        k = a.getCurrentPage(B) || s, l = a.getCurrentPageId(B, s), s++, v = 0
       },
       p: function() {
        m = a.getParagraph(B, t), t++
       },
       "default": function() {
        if (u.line = B.getAttribute("n") || v.toString(), w !== u.line) {
         k && (u.page = k, u.pageId = l), m && (u.paragraph = m), u.xmlDocTitle = n.title, u.xmlDocId = n.id, u.docId = u.xmlDocId + "-" + u.pageId + "-" + u.line, u.lbId = B.getAttribute("xml:id");
         do x.diplomatic = a.getLineNodes(e, o, h, z, i, j), q = a.removeEmptyTextNodes(x.diplomatic), p && (x.interpretative = a.getLineNodes(e, C, h, z, i, j), r = a.removeEmptyTextNodes(x.interpretative)); while (0 === q.length && 0 === r.length && 0 !== x.diplomatic.length && 0 !== x.interpretative.length);
         u.content = {}, u.content.diplomatic = a.getContent(x.diplomatic, "diplomatic"), p && (u.content.interpretative = a.getContent(x.interpretative, "interpretative")), v++, z++, d++, w = u.line, y[u.docId] = u, x = []
        } else A++
       }
      };
      (D[B.nodeName] || D["default"])(), B = g.iterateNext(), u = {}
     }
     return y.countAllLines = d, y
    }
   }]), angular.module("evtviewer.dataHandler").service("evtKeyboard", ["evtSearchDocument", "baseData", "parsedData", "XPATH", function j(a, b, c, d) {
    function e() {
     return b.getXML()
    }
  
    function f(b) {
     var c = {};
     return a.hasNamespace(b), c.ns = a.ns, c.nsResolver = a.nsResolver, c
    }
  
    function g(a, b, c) {
     return b ? a.evaluate(d.ns.getGlyphNodes, a, c, XPathResult.ANY_TYPE, null) : a.evaluate(d.getGlyphNodes, a, null, XPathResult.ANY_TYPE, null)
    }
  
    function h(a) {
     for (var b, c, d, e = {}, f = 0; f < a.length - 1; f++) b = a[f], c = a[f + 1], 0 === Object.keys(e).length && (e[a[0]] = 1), d = i(c, e), b === c ? e[b]++ : d ? e[c]++ : e[c] = 1;
     return e
    }
  
    function i(a, b) {
     for (var c in b)
      if (c === a) return !0;
     return !1
    }
  
    function k(a) {
     return Object.keys(a).sort(function(b, c) {
      return a[c] - a[b]
     })
    }
  
    function l(a) {
     for (var b = [], c = a.length, d = 30; d > c;) d--;
     for (var e = 0; d > e; e++) b.push(a[e]);
     return b
    }
  
    function m(a) {
     var b, d = c.getGlyphs(),
      e = {};
     for (var f in d)
      for (var g = 0; g < a.length; g++) a[g] === f && (b = d[f].mapping.runic, b ? e[a[g]] = d[f].mapping.runic.content : e[a[g]] = d[f].mapping.diplomatic.content);
     return e
    }
    j.prototype.getDefaultKeyboardKeys = function() {
     var a = j.prototype.getGlyphInXmlDoc(),
      b = h(a),
      c = k(b),
      d = l(c);
     return m(d)
    }, j.prototype.getConfigKeyboardKeys = function(a) {
     var b = c.getGlyphs(),
      d = {};
     for (var e in b)
      for (var f = 0; f < a.length; f++) e === a[f] && (d[a[f]] = b[e].mapping.diplomatic.content);
     return d
    }, j.prototype.getGlyphInXmlDoc = function() {
     for (var a, b = e(), d = f(b), h = g(b, d.ns, d.nsResolver), i = c.getGlyphs(), j = h.iterateNext(), k = []; null !== j;) {
      a = j.getAttribute("ref").replace("#", "");
      for (var l in i) a === l && k.push(a);
      j = h.iterateNext()
     }
     return k
    }
   }]),
   function(a) {
    function b(d) {
     if (c[d]) return c[d].exports;
     var e = c[d] = {
      exports: {},
      id: d,
      loaded: !1
     };
     return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
    }
    var c = {};
    return b.m = a, b.c = c, b.p = "", b(0)
   }([function(a, b, c) {
    c(1), c(3), a.exports = c(4)
   }, function(a, b, c) {
    var d = c(2);
    angular.module("evtviewer.dataHandler").service("evtSearchIndex", ["evtSearchDocument", function e(a) {
     function b(a) {
      var b = {
       xmlDocId: a.xmlDocId,
       diplomaticText: a.content.diplomatic,
       interpretativeText: a.content.interpretative,
       content: a.content
      };
      return b
     }
  
     function c(a, b) {
      var c = function(c) {
       var d = a.documentCount - 1;
       return c.metadata.xmlDocTitle = b[Object.keys(b)[d]].xmlDocTitle, c
      };
      d.Pipeline.registerFunction(c, "xmlDocTitle"), a.pipeline.add(c), a.metadataWhitelist.push("xmlDocTitle")
     }
  
     function f(a, b) {
      var c = function(c) {
       var d = a.documentCount - 1;
       return c.metadata.xmlDocId = b[Object.keys(b)[d]].xmlDocId, c
      };
      d.Pipeline.registerFunction(c, "xmlDocId"), a.pipeline.add(c), a.metadataWhitelist.push("xmlDocId")
     }
  
     function g(a, b) {
      var c = 0,
       e = function(d) {
        return c = a.documentCount - 1, d.metadata.sectionTitle = b[Object.keys(b)[c]].sectionTitle, d
       };
      void 0 !== b[Object.keys(b)[c]].sectionTitle && (d.Pipeline.registerFunction(e, "sectionTitle"), a.pipeline.add(e), a.metadataWhitelist.push("sectionTitle"))
     }
  
     function h(a, b) {
      var c = 0,
       e = function(d) {
        return c = a.documentCount - 1, d.metadata.paragraph = b[Object.keys(b)[c]].paragraph, d
       };
      void 0 !== b[Object.keys(b)[c]].paragraph && (d.Pipeline.registerFunction(e, "paragraph"), a.pipeline.add(e), a.metadataWhitelist.push("paragraph"))
     }
  
     function i(a, b) {
      var c = 0,
       e = function(c) {
        var d = a.documentCount - 1;
        return c.metadata.page = b[Object.keys(b)[d]].page, c
       };
      void 0 !== b[Object.keys(b)[c]].page && (d.Pipeline.registerFunction(e, "page"), a.pipeline.add(e), a.metadataWhitelist.push("page"))
     }
  
     function j(a, b) {
      var c = 0,
       e = function(c) {
        var d = a.documentCount - 1;
        return c.metadata.pageId = b[Object.keys(b)[d]].pageId, c
       };
      void 0 !== b[Object.keys(b)[c]].page && (d.Pipeline.registerFunction(e, "pageId"), a.pipeline.add(e), a.metadataWhitelist.push("pageId"))
     }
  
     function k(a, b) {
      var c = 0,
       e = function(c) {
        var d = a.documentCount - 1;
        return c.metadata.line = b[Object.keys(b)[d]].line, c
       };
      void 0 !== b[Object.keys(b)[c]].line && (d.Pipeline.registerFunction(e, "line"), a.pipeline.add(e), a.metadataWhitelist.push("line"))
     }
  
     function l(a, b) {
      var c = 0,
       e = function(c) {
        var d = a.documentCount - 1;
        return c.metadata.lbId = b[Object.keys(b)[d]].lbId, c
       };
      void 0 !== b[Object.keys(b)[c]].lbId && (d.Pipeline.registerFunction(e, "lbId"), a.pipeline.add(e), a.metadataWhitelist.push("lbId"))
     }
  
     function m(a, b) {
      var c = function(c) {
       var d = a.documentCount - 1;
       return c.metadata.docId = b[Object.keys(b)[d]].docId, c
      };
      d.Pipeline.registerFunction(c, "docId"), a.pipeline.add(c), a.metadataWhitelist.push("docId")
     }
  
     function n(a) {
      a.metadataWhitelist.push("position")
     }
  
     function o(a) {
      a.metadataWhitelist.push("originalToken")
     }
     this.index = {}, e.prototype.createIndex = function(e) {
      console.time("INDEX TIME");
      var q;
      return this.index = d(function() {
       this.pipeline.remove(d.trimmer), this.pipeline.remove(d.stemmer), this.pipeline.remove(d.stopWordFilter), this.tokenizer = p, this.tokenizer.separator = /[\s,.;:\/?!()\'\"]+/, this.ref("xmlDocId"), void 0 !== e[Object.keys(e)[0]].content.diplomatic ? (this.field("diplomaticText"), a.isAlsoInterpEdition() && this.field("interpretativeText")) : this.field("content"), this.use(c, e), this.use(f, e), this.use(g, e), this.use(h, e), this.use(i, e), this.use(j, e), this.use(k, e), this.use(l, e), this.use(m, e), this.use(n, e), this.use(o, e);
       for (var r in e) "countAllLines" !== r && (q = b(e[r]) || void 0, this.add(q))
      }), console.timeEnd("INDEX TIME"), this.index
     }, e.prototype.getIndex = function() {
      return this.index
     };
     var p = function(a) {
      for (var b, c, e, f, g, h, i = a.toString().trim(), j = i.length, k = [], l = 0, m = 0; j >= l; l++)
       if (b = i.charAt(l), f = l - m, "-" === b && (c = i.slice(m, l), g = l, k.push(new d.Token(c, {
         position: [m, f],
         index: k.length,
         originalToken: c
        }))), b.match(this.tokenizer.separator) || l === j) {
        if (c = i.slice(m, l), e = c, c = c.toLowerCase(), h = -1 !== c.indexOf("-")) {
         var n = i.slice(g + 1, l);
         k.push(new d.Token(n, {
          position: [g + 1, f],
          index: k.length,
          originalToken: n
         }))
        }
        f > 0 && k.push(new d.Token(c, {
         position: [m, f],
         index: k.length,
         originalToken: e
        })), m = l + 1
       } return k
     }
    }])
   }, function(a, b, c) {
    var d, e;
    ! function() {
     var f = function(a) {
      var b = new f.Builder;
      return b.pipeline.add(f.trimmer, f.stopWordFilter, f.stemmer), b.searchPipeline.add(f.stemmer), a.call(b, b), b.build()
     };
     f.version = "2.3.8", f.utils = {}, f.utils.warn = function(a) {
       return function(b) {
        a.console && console.warn && console.warn(b)
       }
      }(this), f.utils.asString = function(a) {
       return void 0 === a || null === a ? "" : a.toString()
      }, f.utils.clone = function(a) {
       if (null === a || void 0 === a) return a;
       for (var b = Object.create(null), c = Object.keys(a), d = 0; d < c.length; d++) {
        var e = c[d],
         f = a[e];
        if (Array.isArray(f)) b[e] = f.slice();
        else {
         if ("string" != typeof f && "number" != typeof f && "boolean" != typeof f) throw new TypeError("clone is not deep and does not support nested objects");
         b[e] = f
        }
       }
       return b
      }, f.FieldRef = function(a, b, c) {
       this.docRef = a, this.fieldName = b, this._stringValue = c
      }, f.FieldRef.joiner = "/", f.FieldRef.fromString = function(a) {
       var b = a.indexOf(f.FieldRef.joiner);
       if (-1 === b) throw "malformed field ref string";
       var c = a.slice(0, b),
        d = a.slice(b + 1);
       return new f.FieldRef(d, c, a)
      }, f.FieldRef.prototype.toString = function() {
       return void 0 == this._stringValue && (this._stringValue = this.fieldName + f.FieldRef.joiner + this.docRef), this._stringValue
      }, f.Set = function(a) {
       if (this.elements = Object.create(null), a) {
        this.length = a.length;
        for (var b = 0; b < this.length; b++) this.elements[a[b]] = !0
       } else this.length = 0
      }, f.Set.complete = {
       intersect: function(a) {
        return a
       },
       union: function(a) {
        return a
       },
       contains: function() {
        return !0
       }
      }, f.Set.empty = {
       intersect: function() {
        return this
       },
       union: function(a) {
        return a
       },
       contains: function() {
        return !1
       }
      }, f.Set.prototype.contains = function(a) {
       return !!this.elements[a]
      }, f.Set.prototype.intersect = function(a) {
       var b, c, d, e = [];
       if (a === f.Set.complete) return this;
       if (a === f.Set.empty) return a;
       this.length < a.length ? (b = this, c = a) : (b = a, c = this), d = Object.keys(b.elements);
       for (var g = 0; g < d.length; g++) {
        var h = d[g];
        h in c.elements && e.push(h)
       }
       return new f.Set(e)
      }, f.Set.prototype.union = function(a) {
       return a === f.Set.complete ? f.Set.complete : a === f.Set.empty ? this : new f.Set(Object.keys(this.elements).concat(Object.keys(a.elements)))
      }, f.idf = function(a, b) {
       var c = 0;
       for (var d in a) "_index" != d && (c += Object.keys(a[d]).length);
       var e = (b - c + .5) / (c + .5);
       return Math.log(1 + Math.abs(e))
      }, f.Token = function(a, b) {
       this.str = a || "", this.metadata = b || {}
      }, f.Token.prototype.toString = function() {
       return this.str
      }, f.Token.prototype.update = function(a) {
       return this.str = a(this.str, this.metadata), this
      }, f.Token.prototype.clone = function(a) {
       return a = a || function(a) {
        return a
       }, new f.Token(a(this.str, this.metadata), this.metadata)
      }, f.tokenizer = function(a, b) {
       if (null == a || void 0 == a) return [];
       if (Array.isArray(a)) return a.map(function(a) {
        return new f.Token(f.utils.asString(a).toLowerCase(), f.utils.clone(b))
       });
       for (var c = a.toString().toLowerCase(), d = c.length, e = [], g = 0, h = 0; d >= g; g++) {
        var i = c.charAt(g),
         j = g - h;
        if (i.match(f.tokenizer.separator) || g == d) {
         if (j > 0) {
          var k = f.utils.clone(b) || {};
          k.position = [h, j], k.index = e.length, e.push(new f.Token(c.slice(h, g), k))
         }
         h = g + 1
        }
       }
       return e
      }, f.tokenizer.separator = /[\s\-]+/, f.Pipeline = function() {
       this._stack = []
      }, f.Pipeline.registeredFunctions = Object.create(null), f.Pipeline.registerFunction = function(a, b) {
       b in this.registeredFunctions && f.utils.warn("Overwriting existing registered function: " + b), a.label = b, f.Pipeline.registeredFunctions[a.label] = a
      }, f.Pipeline.warnIfFunctionNotRegistered = function(a) {
       var b = a.label && a.label in this.registeredFunctions;
       b || f.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n", a)
      }, f.Pipeline.load = function(a) {
       var b = new f.Pipeline;
       return a.forEach(function(a) {
        var c = f.Pipeline.registeredFunctions[a];
        if (!c) throw new Error("Cannot load unregistered function: " + a);
        b.add(c)
       }), b
      }, f.Pipeline.prototype.add = function() {
       var a = Array.prototype.slice.call(arguments);
       a.forEach(function(a) {
        f.Pipeline.warnIfFunctionNotRegistered(a), this._stack.push(a)
       }, this)
      }, f.Pipeline.prototype.after = function(a, b) {
       f.Pipeline.warnIfFunctionNotRegistered(b);
       var c = this._stack.indexOf(a);
       if (-1 == c) throw new Error("Cannot find existingFn");
       c += 1, this._stack.splice(c, 0, b)
      }, f.Pipeline.prototype.before = function(a, b) {
       f.Pipeline.warnIfFunctionNotRegistered(b);
       var c = this._stack.indexOf(a);
       if (-1 == c) throw new Error("Cannot find existingFn");
       this._stack.splice(c, 0, b)
      }, f.Pipeline.prototype.remove = function(a) {
       var b = this._stack.indexOf(a); - 1 != b && this._stack.splice(b, 1)
      }, f.Pipeline.prototype.run = function(a) {
       for (var b = this._stack.length, c = 0; b > c; c++) {
        for (var d = this._stack[c], e = [], f = 0; f < a.length; f++) {
         var g = d(a[f], f, a);
         if (null !== g && void 0 !== g && "" !== g)
          if (Array.isArray(g))
           for (var h = 0; h < g.length; h++) e.push(g[h]);
          else e.push(g)
        }
        a = e
       }
       return a
      }, f.Pipeline.prototype.runString = function(a, b) {
       var c = new f.Token(a, b);
       return this.run([c]).map(function(a) {
        return a.toString()
       })
      }, f.Pipeline.prototype.reset = function() {
       this._stack = []
      }, f.Pipeline.prototype.toJSON = function() {
       return this._stack.map(function(a) {
        return f.Pipeline.warnIfFunctionNotRegistered(a), a.label
       })
      }, f.Vector = function(a) {
       this._magnitude = 0, this.elements = a || []
      }, f.Vector.prototype.positionForIndex = function(a) {
       if (0 == this.elements.length) return 0;
       for (var b = 0, c = this.elements.length / 2, d = c - b, e = Math.floor(d / 2), f = this.elements[2 * e]; d > 1 && (a > f && (b = e), f > a && (c = e), f != a);) d = c - b, e = b + Math.floor(d / 2), f = this.elements[2 * e];
       return f == a ? 2 * e : f > a ? 2 * e : a > f ? 2 * (e + 1) : void 0
      }, f.Vector.prototype.insert = function(a, b) {
       this.upsert(a, b, function() {
        throw "duplicate index"
       })
      }, f.Vector.prototype.upsert = function(a, b, c) {
       this._magnitude = 0;
       var d = this.positionForIndex(a);
       this.elements[d] == a ? this.elements[d + 1] = c(this.elements[d + 1], b) : this.elements.splice(d, 0, a, b)
      }, f.Vector.prototype.magnitude = function() {
       if (this._magnitude) return this._magnitude;
       for (var a = 0, b = this.elements.length, c = 1; b > c; c += 2) {
        var d = this.elements[c];
        a += d * d
       }
       return this._magnitude = Math.sqrt(a)
      }, f.Vector.prototype.dot = function(a) {
       for (var b = 0, c = this.elements, d = a.elements, e = c.length, f = d.length, g = 0, h = 0, i = 0, j = 0; e > i && f > j;) g = c[i], h = d[j], h > g ? i += 2 : g > h ? j += 2 : g == h && (b += c[i + 1] * d[j + 1], i += 2, j += 2);
       return b
      }, f.Vector.prototype.similarity = function(a) {
       return this.dot(a) / this.magnitude() || 0
      }, f.Vector.prototype.toArray = function() {
       for (var a = new Array(this.elements.length / 2), b = 1, c = 0; b < this.elements.length; b += 2, c++) a[c] = this.elements[b];
       return a
      }, f.Vector.prototype.toJSON = function() {
       return this.elements
      }, f.stemmer = function() {
       var a = {
         ational: "ate",
         tional: "tion",
         enci: "ence",
         anci: "ance",
         izer: "ize",
         bli: "ble",
         alli: "al",
         entli: "ent",
         eli: "e",
         ousli: "ous",
         ization: "ize",
         ation: "ate",
         ator: "ate",
         alism: "al",
         iveness: "ive",
         fulness: "ful",
         ousness: "ous",
         aliti: "al",
         iviti: "ive",
         biliti: "ble",
         logi: "log"
        },
        b = {
         icate: "ic",
         ative: "",
         alize: "al",
         iciti: "ic",
         ical: "ic",
         ful: "",
         ness: ""
        },
        c = "[^aeiou]",
        d = "[aeiouy]",
        e = c + "[^aeiouy]*",
        f = d + "[aeiou]*",
        g = "^(" + e + ")?" + f + e,
        h = "^(" + e + ")?" + f + e + "(" + f + ")?$",
        i = "^(" + e + ")?" + f + e + f + e,
        j = "^(" + e + ")?" + d,
        k = new RegExp(g),
        l = new RegExp(i),
        m = new RegExp(h),
        n = new RegExp(j),
        o = /^(.+?)(ss|i)es$/,
        p = /^(.+?)([^s])s$/,
        q = /^(.+?)eed$/,
        r = /^(.+?)(ed|ing)$/,
        s = /.$/,
        t = /(at|bl|iz)$/,
        u = new RegExp("([^aeiouylsz])\\1$"),
        v = new RegExp("^" + e + d + "[^aeiouwxy]$"),
        w = /^(.+?[^aeiou])y$/,
        x = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
        y = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
        z = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,
        A = /^(.+?)(s|t)(ion)$/,
        B = /^(.+?)e$/,
        C = /ll$/,
        D = new RegExp("^" + e + d + "[^aeiouwxy]$"),
        E = function(c) {
         var d, e, f, g, h, i, j;
         if (c.length < 3) return c;
         if (f = c.substr(0, 1), "y" == f && (c = f.toUpperCase() + c.substr(1)), g = o, h = p, g.test(c) ? c = c.replace(g, "$1$2") : h.test(c) && (c = c.replace(h, "$1$2")), g = q, h = r, g.test(c)) {
          var E = g.exec(c);
          g = k, g.test(E[1]) && (g = s, c = c.replace(g, ""))
         } else if (h.test(c)) {
          var E = h.exec(c);
          d = E[1], h = n, h.test(d) && (c = d, h = t, i = u, j = v, h.test(c) ? c += "e" : i.test(c) ? (g = s, c = c.replace(g, "")) : j.test(c) && (c += "e"))
         }
         if (g = w, g.test(c)) {
          var E = g.exec(c);
          d = E[1], c = d + "i"
         }
         if (g = x, g.test(c)) {
          var E = g.exec(c);
          d = E[1], e = E[2], g = k, g.test(d) && (c = d + a[e])
         }
         if (g = y, g.test(c)) {
          var E = g.exec(c);
          d = E[1], e = E[2], g = k, g.test(d) && (c = d + b[e])
         }
         if (g = z, h = A, g.test(c)) {
          var E = g.exec(c);
          d = E[1], g = l, g.test(d) && (c = d)
         } else if (h.test(c)) {
          var E = h.exec(c);
          d = E[1] + E[2], h = l, h.test(d) && (c = d)
         }
         if (g = B, g.test(c)) {
          var E = g.exec(c);
          d = E[1], g = l, h = m, i = D, (g.test(d) || h.test(d) && !i.test(d)) && (c = d)
         }
         return g = C, h = l, g.test(c) && h.test(c) && (g = s, c = c.replace(g, "")), "y" == f && (c = f.toLowerCase() + c.substr(1)), c
        };
       return function(a) {
        return a.update(E)
       }
      }(), f.Pipeline.registerFunction(f.stemmer, "stemmer"), f.generateStopWordFilter = function(a) {
       var b = a.reduce(function(a, b) {
        return a[b] = b, a
       }, {});
       return function(a) {
        return a && b[a.toString()] !== a.toString() ? a : void 0
       }
      }, f.stopWordFilter = f.generateStopWordFilter(["a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your"]), f.Pipeline.registerFunction(f.stopWordFilter, "stopWordFilter"), f.trimmer = function(a) {
       return a.update(function(a) {
        return a.replace(/^\W+/, "").replace(/\W+$/, "")
       })
      }, f.Pipeline.registerFunction(f.trimmer, "trimmer"), f.TokenSet = function() {
       this["final"] = !1, this.edges = {}, this.id = f.TokenSet._nextId, f.TokenSet._nextId += 1
      }, f.TokenSet._nextId = 1, f.TokenSet.fromArray = function(a) {
       for (var b = new f.TokenSet.Builder, c = 0, d = a.length; d > c; c++) b.insert(a[c]);
       return b.finish(), b.root
      }, f.TokenSet.fromClause = function(a) {
       return "editDistance" in a ? f.TokenSet.fromFuzzyString(a.term, a.editDistance) : f.TokenSet.fromString(a.term)
      }, f.TokenSet.fromFuzzyString = function(a, b) {
       for (var c = new f.TokenSet, d = [{
         node: c,
         editsRemaining: b,
         str: a
        }]; d.length;) {
        var e = d.pop();
        if (e.str.length > 0) {
         var g, h = e.str.charAt(0);
         h in e.node.edges ? g = e.node.edges[h] : (g = new f.TokenSet, e.node.edges[h] = g), 1 == e.str.length && (g["final"] = !0), d.push({
          node: g,
          editsRemaining: e.editsRemaining,
          str: e.str.slice(1)
         })
        }
        if (0 != e.editsRemaining) {
         if ("*" in e.node.edges) var i = e.node.edges["*"];
         else {
          var i = new f.TokenSet;
          e.node.edges["*"] = i
         }
         if (0 == e.str.length && (i["final"] = !0), d.push({
           node: i,
           editsRemaining: e.editsRemaining - 1,
           str: e.str
          }), e.str.length > 1 && d.push({
           node: e.node,
           editsRemaining: e.editsRemaining - 1,
           str: e.str.slice(1)
          }), 1 == e.str.length && (e.node["final"] = !0), e.str.length >= 1) {
          if ("*" in e.node.edges) var j = e.node.edges["*"];
          else {
           var j = new f.TokenSet;
           e.node.edges["*"] = j
          }
          1 == e.str.length && (j["final"] = !0), d.push({
           node: j,
           editsRemaining: e.editsRemaining - 1,
           str: e.str.slice(1)
          })
         }
         if (e.str.length > 1) {
          var k, l = e.str.charAt(0),
           m = e.str.charAt(1);
          m in e.node.edges ? k = e.node.edges[m] : (k = new f.TokenSet, e.node.edges[m] = k), 1 == e.str.length && (k["final"] = !0), d.push({
           node: k,
           editsRemaining: e.editsRemaining - 1,
           str: l + e.str.slice(2)
          })
         }
        }
       }
       return c
      }, f.TokenSet.fromString = function(a) {
       for (var b = new f.TokenSet, c = b, d = 0, e = a.length; e > d; d++) {
        var g = a[d],
         h = d == e - 1;
        if ("*" == g) b.edges[g] = b, b["final"] = h;
        else {
         var i = new f.TokenSet;
         i["final"] = h, b.edges[g] = i, b = i
        }
       }
       return c
      }, f.TokenSet.prototype.toArray = function() {
       for (var a = [], b = [{
         prefix: "",
         node: this
        }]; b.length;) {
        var c = b.pop(),
         d = Object.keys(c.node.edges),
         e = d.length;
        c.node["final"] && (c.prefix.charAt(0), a.push(c.prefix));
        for (var f = 0; e > f; f++) {
         var g = d[f];
         b.push({
          prefix: c.prefix.concat(g),
          node: c.node.edges[g]
         })
        }
       }
       return a
      }, f.TokenSet.prototype.toString = function() {
       if (this._str) return this._str;
       for (var a = this["final"] ? "1" : "0", b = Object.keys(this.edges).sort(), c = b.length, d = 0; c > d; d++) {
        var e = b[d],
         f = this.edges[e];
        a = a + e + f.id
       }
       return a
      }, f.TokenSet.prototype.intersect = function(a) {
       for (var b = new f.TokenSet, c = void 0, d = [{
         qNode: a,
         output: b,
         node: this
        }]; d.length;) {
        c = d.pop();
        for (var e = Object.keys(c.qNode.edges), g = e.length, h = Object.keys(c.node.edges), i = h.length, j = 0; g > j; j++)
         for (var k = e[j], l = 0; i > l; l++) {
          var m = h[l];
          if (m == k || "*" == k) {
           var n = c.node.edges[m],
            o = c.qNode.edges[k],
            p = n["final"] && o["final"],
            q = void 0;
           m in c.output.edges ? (q = c.output.edges[m], q["final"] = q["final"] || p) : (q = new f.TokenSet, q["final"] = p, c.output.edges[m] = q), d.push({
            qNode: o,
            output: q,
            node: n
           })
          }
         }
       }
       return b
      }, f.TokenSet.Builder = function() {
       this.previousWord = "", this.root = new f.TokenSet, this.uncheckedNodes = [], this.minimizedNodes = {}
      }, f.TokenSet.Builder.prototype.insert = function(a) {
       var b, c = 0;
       if (a < this.previousWord) throw new Error("Out of order word insertion");
       for (var d = 0; d < a.length && d < this.previousWord.length && a[d] == this.previousWord[d]; d++) c++;
       this.minimize(c), b = 0 == this.uncheckedNodes.length ? this.root : this.uncheckedNodes[this.uncheckedNodes.length - 1].child;
       for (var d = c; d < a.length; d++) {
        var e = new f.TokenSet,
         g = a[d];
        b.edges[g] = e, this.uncheckedNodes.push({
         parent: b,
         "char": g,
         child: e
        }), b = e
       }
       b["final"] = !0, this.previousWord = a
      }, f.TokenSet.Builder.prototype.finish = function() {
       this.minimize(0)
      }, f.TokenSet.Builder.prototype.minimize = function(a) {
       for (var b = this.uncheckedNodes.length - 1; b >= a; b--) {
        var c = this.uncheckedNodes[b],
         d = c.child.toString();
        d in this.minimizedNodes ? c.parent.edges[c["char"]] = this.minimizedNodes[d] : (c.child._str = d, this.minimizedNodes[d] = c.child), this.uncheckedNodes.pop()
       }
      }, f.Index = function(a) {
       this.invertedIndex = a.invertedIndex, this.fieldVectors = a.fieldVectors, this.tokenSet = a.tokenSet, this.fields = a.fields, this.pipeline = a.pipeline
      }, f.Index.prototype.search = function(a) {
       return this.query(function(b) {
        var c = new f.QueryParser(a, b);
        c.parse()
       })
      }, f.Index.prototype.query = function(a) {
       for (var b = new f.Query(this.fields), c = Object.create(null), d = Object.create(null), e = Object.create(null), g = Object.create(null), h = Object.create(null), i = 0; i < this.fields.length; i++) d[this.fields[i]] = new f.Vector;
       a.call(b, b);
       for (var i = 0; i < b.clauses.length; i++) {
        var j = b.clauses[i],
         k = null,
         l = f.Set.complete;
        k = j.usePipeline ? this.pipeline.runString(j.term, {
         fields: j.fields
        }) : [j.term];
        for (var m = 0; m < k.length; m++) {
         var n = k[m];
         j.term = n;
         var o = f.TokenSet.fromClause(j),
          p = this.tokenSet.intersect(o).toArray();
         if (0 === p.length && j.presence === f.Query.presence.REQUIRED) {
          for (var q = 0; q < j.fields.length; q++) {
           var r = j.fields[q];
           g[r] = f.Set.empty
          }
          break
         }
         for (var s = 0; s < p.length; s++)
          for (var t = p[s], u = this.invertedIndex[t], v = u._index, q = 0; q < j.fields.length; q++) {
           var r = j.fields[q],
            w = u[r],
            x = Object.keys(w),
            y = t + "/" + r,
            z = new f.Set(x);
           if (j.presence == f.Query.presence.REQUIRED && (l = l.union(z), void 0 === g[r] && (g[r] = f.Set.complete)), j.presence != f.Query.presence.PROHIBITED) {
            if (d[r].upsert(v, j.boost, function(a, b) {
              return a + b
             }), !e[y]) {
             for (var A = 0; A < x.length; A++) {
              var B, C = x[A],
               D = new f.FieldRef(C, r),
               E = w[C];
              void 0 === (B = c[D]) ? c[D] = new f.MatchData(t, r, E) : B.add(t, r, E)
             }
             e[y] = !0
            }
           } else void 0 === h[r] && (h[r] = f.Set.empty), h[r] = h[r].union(z)
          }
        }
        if (j.presence === f.Query.presence.REQUIRED)
         for (var q = 0; q < j.fields.length; q++) {
          var r = j.fields[q];
          g[r] = g[r].intersect(l)
         }
       }
       for (var F = f.Set.complete, G = f.Set.empty, i = 0; i < this.fields.length; i++) {
        var r = this.fields[i];
        g[r] && (F = F.intersect(g[r])), h[r] && (G = G.union(h[r]))
       }
       var H = Object.keys(c),
        I = [],
        J = Object.create(null);
       if (b.isNegated()) {
        H = Object.keys(this.fieldVectors);
        for (var i = 0; i < H.length; i++) {
         var D = H[i],
          K = f.FieldRef.fromString(D);
         c[D] = new f.MatchData
        }
       }
       for (var i = 0; i < H.length; i++) {
        var K = f.FieldRef.fromString(H[i]),
         L = K.docRef;
        if (F.contains(L) && !G.contains(L)) {
         var M, N = this.fieldVectors[K],
          O = d[K.fieldName].similarity(N);
         if (void 0 !== (M = J[L])) M.score += O, M.matchData.combine(c[K]);
         else {
          var P = {
           ref: L,
           score: O,
           matchData: c[K]
          };
          J[L] = P, I.push(P)
         }
        }
       }
       return I.sort(function(a, b) {
        return b.score - a.score
       })
      }, f.Index.prototype.toJSON = function() {
       var a = Object.keys(this.invertedIndex).sort().map(function(a) {
         return [a, this.invertedIndex[a]]
        }, this),
        b = Object.keys(this.fieldVectors).map(function(a) {
         return [a, this.fieldVectors[a].toJSON()]
        }, this);
       return {
        version: f.version,
        fields: this.fields,
        fieldVectors: b,
        invertedIndex: a,
        pipeline: this.pipeline.toJSON()
       }
      }, f.Index.load = function(a) {
       var b = {},
        c = {},
        d = a.fieldVectors,
        e = Object.create(null),
        g = a.invertedIndex,
        h = new f.TokenSet.Builder,
        i = f.Pipeline.load(a.pipeline);
       a.version != f.version && f.utils.warn("Version mismatch when loading serialised index. Current version of lunr '" + f.version + "' does not match serialized index '" + a.version + "'");
       for (var j = 0; j < d.length; j++) {
        var k = d[j],
         l = k[0],
         m = k[1];
        c[l] = new f.Vector(m)
       }
       for (var j = 0; j < g.length; j++) {
        var k = g[j],
         n = k[0],
         o = k[1];
        h.insert(n), e[n] = o
       }
       return h.finish(), b.fields = a.fields, b.fieldVectors = c, b.invertedIndex = e, b.tokenSet = h.root, b.pipeline = i, new f.Index(b)
      }, f.Builder = function() {
       this._ref = "id", this._fields = Object.create(null), this._documents = Object.create(null), this.invertedIndex = Object.create(null), this.fieldTermFrequencies = {}, this.fieldLengths = {}, this.tokenizer = f.tokenizer, this.pipeline = new f.Pipeline, this.searchPipeline = new f.Pipeline, this.documentCount = 0, this._b = .75, this._k1 = 1.2, this.termIndex = 0, this.metadataWhitelist = []
      }, f.Builder.prototype.ref = function(a) {
       this._ref = a
      }, f.Builder.prototype.field = function(a, b) {
       if (/\//.test(a)) throw new RangeError("Field '" + a + "' contains illegal character '/'");
       this._fields[a] = b || {}
      }, f.Builder.prototype.b = function(a) {
       0 > a ? this._b = 0 : a > 1 ? this._b = 1 : this._b = a
      }, f.Builder.prototype.k1 = function(a) {
       this._k1 = a
      }, f.Builder.prototype.add = function(a, b) {
       var c = a[this._ref],
        d = Object.keys(this._fields);
       this._documents[c] = b || {}, this.documentCount += 1;
       for (var e = 0; e < d.length; e++) {
        var g = d[e],
         h = this._fields[g].extractor,
         i = h ? h(a) : a[g],
         j = this.tokenizer(i, {
          fields: [g]
         }),
         k = this.pipeline.run(j),
         l = new f.FieldRef(c, g),
         m = Object.create(null);
        this.fieldTermFrequencies[l] = m, this.fieldLengths[l] = 0, this.fieldLengths[l] += k.length;
        for (var n = 0; n < k.length; n++) {
         var o = k[n];
         if (void 0 == m[o] && (m[o] = 0), m[o] += 1, void 0 == this.invertedIndex[o]) {
          var p = Object.create(null);
          p._index = this.termIndex, this.termIndex += 1;
          for (var q = 0; q < d.length; q++) p[d[q]] = Object.create(null);
          this.invertedIndex[o] = p
         }
         void 0 == this.invertedIndex[o][g][c] && (this.invertedIndex[o][g][c] = Object.create(null));
         for (var r = 0; r < this.metadataWhitelist.length; r++) {
          var s = this.metadataWhitelist[r],
           t = o.metadata[s];
          void 0 == this.invertedIndex[o][g][c][s] && (this.invertedIndex[o][g][c][s] = []), this.invertedIndex[o][g][c][s].push(t)
         }
        }
       }
      }, f.Builder.prototype.calculateAverageFieldLengths = function() {
       for (var a = Object.keys(this.fieldLengths), b = a.length, c = {}, d = {}, e = 0; b > e; e++) {
        var g = f.FieldRef.fromString(a[e]),
         h = g.fieldName;
        d[h] || (d[h] = 0), d[h] += 1, c[h] || (c[h] = 0), c[h] += this.fieldLengths[g]
       }
       for (var i = Object.keys(this._fields), e = 0; e < i.length; e++) {
        var j = i[e];
        c[j] = c[j] / d[j]
       }
       this.averageFieldLength = c
      }, f.Builder.prototype.createFieldVectors = function() {
       for (var a = {}, b = Object.keys(this.fieldTermFrequencies), c = b.length, d = Object.create(null), e = 0; c > e; e++) {
        for (var g = f.FieldRef.fromString(b[e]), h = g.fieldName, i = this.fieldLengths[g], j = new f.Vector, k = this.fieldTermFrequencies[g], l = Object.keys(k), m = l.length, n = this._fields[h].boost || 1, o = this._documents[g.docRef].boost || 1, p = 0; m > p; p++) {
         var q, r, s, t = l[p],
          u = k[t],
          v = this.invertedIndex[t]._index;
         void 0 === d[t] ? (q = f.idf(this.invertedIndex[t], this.documentCount), d[t] = q) : q = d[t], r = q * ((this._k1 + 1) * u) / (this._k1 * (1 - this._b + this._b * (i / this.averageFieldLength[h])) + u), r *= n, r *= o, s = Math.round(1e3 * r) / 1e3, j.insert(v, s)
        }
        a[g] = j
       }
       this.fieldVectors = a
      }, f.Builder.prototype.createTokenSet = function() {
       this.tokenSet = f.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())
      }, f.Builder.prototype.build = function() {
       return this.calculateAverageFieldLengths(), this.createFieldVectors(), this.createTokenSet(), new f.Index({
        invertedIndex: this.invertedIndex,
        fieldVectors: this.fieldVectors,
        tokenSet: this.tokenSet,
        fields: Object.keys(this._fields),
        pipeline: this.searchPipeline
       })
      }, f.Builder.prototype.use = function(a) {
       var b = Array.prototype.slice.call(arguments, 1);
       b.unshift(this), a.apply(this, b)
      }, f.MatchData = function(a, b, c) {
       for (var d = Object.create(null), e = Object.keys(c || {}), f = 0; f < e.length; f++) {
        var g = e[f];
        d[g] = c[g].slice()
       }
       this.metadata = Object.create(null), void 0 !== a && (this.metadata[a] = Object.create(null), this.metadata[a][b] = d)
      }, f.MatchData.prototype.combine = function(a) {
       for (var b = Object.keys(a.metadata), c = 0; c < b.length; c++) {
        var d = b[c],
         e = Object.keys(a.metadata[d]);
        void 0 == this.metadata[d] && (this.metadata[d] = Object.create(null));
        for (var f = 0; f < e.length; f++) {
         var g = e[f],
          h = Object.keys(a.metadata[d][g]);
         void 0 == this.metadata[d][g] && (this.metadata[d][g] = Object.create(null));
         for (var i = 0; i < h.length; i++) {
          var j = h[i];
          void 0 == this.metadata[d][g][j] ? this.metadata[d][g][j] = a.metadata[d][g][j] : this.metadata[d][g][j] = this.metadata[d][g][j].concat(a.metadata[d][g][j])
         }
        }
       }
      }, f.MatchData.prototype.add = function(a, b, c) {
       if (!(a in this.metadata)) return this.metadata[a] = Object.create(null), void(this.metadata[a][b] = c);
       if (!(b in this.metadata[a])) return void(this.metadata[a][b] = c);
       for (var d = Object.keys(c), e = 0; e < d.length; e++) {
        var f = d[e];
        f in this.metadata[a][b] ? this.metadata[a][b][f] = this.metadata[a][b][f].concat(c[f]) : this.metadata[a][b][f] = c[f]
       }
      }, f.Query = function(a) {
       this.clauses = [], this.allFields = a
      }, f.Query.wildcard = new String("*"), f.Query.wildcard.NONE = 0, f.Query.wildcard.LEADING = 1, f.Query.wildcard.TRAILING = 2, f.Query.presence = {
       OPTIONAL: 1,
       REQUIRED: 2,
       PROHIBITED: 3
      }, f.Query.prototype.clause = function(a) {
       return "fields" in a || (a.fields = this.allFields), "boost" in a || (a.boost = 1), "usePipeline" in a || (a.usePipeline = !0), "wildcard" in a || (a.wildcard = f.Query.wildcard.NONE), a.wildcard & f.Query.wildcard.LEADING && a.term.charAt(0) != f.Query.wildcard && (a.term = "*" + a.term), a.wildcard & f.Query.wildcard.TRAILING && a.term.slice(-1) != f.Query.wildcard && (a.term = "" + a.term + "*"), "presence" in a || (a.presence = f.Query.presence.OPTIONAL), this.clauses.push(a), this
      }, f.Query.prototype.isNegated = function() {
       for (var a = 0; a < this.clauses.length; a++)
        if (this.clauses[a].presence != f.Query.presence.PROHIBITED) return !1;
       return !0
      }, f.Query.prototype.term = function(a, b) {
       if (Array.isArray(a)) return a.forEach(function(a) {
        this.term(a, f.utils.clone(b))
       }, this), this;
       var c = b || {};
       return c.term = a.toString(), this.clause(c), this
      }, f.QueryParseError = function(a, b, c) {
       this.name = "QueryParseError", this.message = a, this.start = b, this.end = c
      }, f.QueryParseError.prototype = new Error, f.QueryLexer = function(a) {
       this.lexemes = [], this.str = a, this.length = a.length, this.pos = 0, this.start = 0, this.escapeCharPositions = []
      }, f.QueryLexer.prototype.run = function() {
       for (var a = f.QueryLexer.lexText; a;) a = a(this)
      }, f.QueryLexer.prototype.sliceString = function() {
       for (var a = [], b = this.start, c = this.pos, d = 0; d < this.escapeCharPositions.length; d++) c = this.escapeCharPositions[d], a.push(this.str.slice(b, c)), b = c + 1;
       return a.push(this.str.slice(b, this.pos)), this.escapeCharPositions.length = 0, a.join("")
      }, f.QueryLexer.prototype.emit = function(a) {
       this.lexemes.push({
        type: a,
        str: this.sliceString(),
        start: this.start,
        end: this.pos
       }), this.start = this.pos
      }, f.QueryLexer.prototype.escapeCharacter = function() {
       this.escapeCharPositions.push(this.pos - 1), this.pos += 1
      }, f.QueryLexer.prototype.next = function() {
       if (this.pos >= this.length) return f.QueryLexer.EOS;
       var a = this.str.charAt(this.pos);
       return this.pos += 1, a
      }, f.QueryLexer.prototype.width = function() {
       return this.pos - this.start
      }, f.QueryLexer.prototype.ignore = function() {
       this.start == this.pos && (this.pos += 1), this.start = this.pos
      }, f.QueryLexer.prototype.backup = function() {
       this.pos -= 1
      }, f.QueryLexer.prototype.acceptDigitRun = function() {
       var a, b;
       do a = this.next(), b = a.charCodeAt(0); while (b > 47 && 58 > b);
       a != f.QueryLexer.EOS && this.backup()
      }, f.QueryLexer.prototype.more = function() {
       return this.pos < this.length
      }, f.QueryLexer.EOS = "EOS", f.QueryLexer.FIELD = "FIELD", f.QueryLexer.TERM = "TERM", f.QueryLexer.EDIT_DISTANCE = "EDIT_DISTANCE", f.QueryLexer.BOOST = "BOOST", f.QueryLexer.PRESENCE = "PRESENCE", f.QueryLexer.lexField = function(a) {
       return a.backup(), a.emit(f.QueryLexer.FIELD), a.ignore(), f.QueryLexer.lexText
      }, f.QueryLexer.lexTerm = function(a) {
       return a.width() > 1 && (a.backup(), a.emit(f.QueryLexer.TERM)), a.ignore(), a.more() ? f.QueryLexer.lexText : void 0
      }, f.QueryLexer.lexEditDistance = function(a) {
       return a.ignore(), a.acceptDigitRun(), a.emit(f.QueryLexer.EDIT_DISTANCE), f.QueryLexer.lexText
      }, f.QueryLexer.lexBoost = function(a) {
       return a.ignore(), a.acceptDigitRun(), a.emit(f.QueryLexer.BOOST), f.QueryLexer.lexText
      }, f.QueryLexer.lexEOS = function(a) {
       a.width() > 0 && a.emit(f.QueryLexer.TERM)
      }, f.QueryLexer.termSeparator = f.tokenizer.separator, f.QueryLexer.lexText = function(a) {
       for (;;) {
        var b = a.next();
        if (b == f.QueryLexer.EOS) return f.QueryLexer.lexEOS;
        if (92 != b.charCodeAt(0)) {
         if (":" == b) return f.QueryLexer.lexField;
         if ("~" == b) return a.backup(), a.width() > 0 && a.emit(f.QueryLexer.TERM), f.QueryLexer.lexEditDistance;
         if ("^" == b) return a.backup(), a.width() > 0 && a.emit(f.QueryLexer.TERM), f.QueryLexer.lexBoost;
         if ("+" == b && 1 === a.width()) return a.emit(f.QueryLexer.PRESENCE), f.QueryLexer.lexText;
         if ("-" == b && 1 === a.width()) return a.emit(f.QueryLexer.PRESENCE), f.QueryLexer.lexText;
         if (b.match(f.QueryLexer.termSeparator)) return f.QueryLexer.lexTerm
        } else a.escapeCharacter()
       }
      }, f.QueryParser = function(a, b) {
       this.lexer = new f.QueryLexer(a), this.query = b, this.currentClause = {}, this.lexemeIdx = 0
      }, f.QueryParser.prototype.parse = function() {
       this.lexer.run(), this.lexemes = this.lexer.lexemes;
       for (var a = f.QueryParser.parseClause; a;) a = a(this);
       return this.query
      }, f.QueryParser.prototype.peekLexeme = function() {
       return this.lexemes[this.lexemeIdx]
      }, f.QueryParser.prototype.consumeLexeme = function() {
       var a = this.peekLexeme();
       return this.lexemeIdx += 1, a
      }, f.QueryParser.prototype.nextClause = function() {
       var a = this.currentClause;
       this.query.clause(a), this.currentClause = {}
      }, f.QueryParser.parseClause = function(a) {
       var b = a.peekLexeme();
       if (void 0 != b) switch (b.type) {
        case f.QueryLexer.PRESENCE:
         return f.QueryParser.parsePresence;
        case f.QueryLexer.FIELD:
         return f.QueryParser.parseField;
        case f.QueryLexer.TERM:
         return f.QueryParser.parseTerm;
        default:
         var c = "expected either a field or a term, found " + b.type;
         throw b.str.length >= 1 && (c += " with value '" + b.str + "'"), new f.QueryParseError(c, b.start, b.end)
       }
      }, f.QueryParser.parsePresence = function(a) {
       var b = a.consumeLexeme();
       if (void 0 != b) {
        switch (b.str) {
         case "-":
          a.currentClause.presence = f.Query.presence.PROHIBITED;
          break;
         case "+":
          a.currentClause.presence = f.Query.presence.REQUIRED;
          break;
         default:
          var c = "unrecognised presence operator'" + b.str + "'";
          throw new f.QueryParseError(c, b.start, b.end)
        }
        var d = a.peekLexeme();
        if (void 0 == d) {
         var c = "expecting term or field, found nothing";
         throw new f.QueryParseError(c, b.start, b.end)
        }
        switch (d.type) {
         case f.QueryLexer.FIELD:
          return f.QueryParser.parseField;
         case f.QueryLexer.TERM:
          return f.QueryParser.parseTerm;
         default:
          var c = "expecting term or field, found '" + d.type + "'";
          throw new f.QueryParseError(c, d.start, d.end)
        }
       }
      }, f.QueryParser.parseField = function(a) {
       var b = a.consumeLexeme();
       if (void 0 != b) {
        if (-1 == a.query.allFields.indexOf(b.str)) {
         var c = a.query.allFields.map(function(a) {
           return "'" + a + "'"
          }).join(", "),
          d = "unrecognised field '" + b.str + "', possible fields: " + c;
         throw new f.QueryParseError(d, b.start, b.end)
        }
        a.currentClause.fields = [b.str];
        var e = a.peekLexeme();
        if (void 0 == e) {
         var d = "expecting term, found nothing";
         throw new f.QueryParseError(d, b.start, b.end)
        }
        switch (e.type) {
         case f.QueryLexer.TERM:
          return f.QueryParser.parseTerm;
         default:
          var d = "expecting term, found '" + e.type + "'";
          throw new f.QueryParseError(d, e.start, e.end)
        }
       }
      }, f.QueryParser.parseTerm = function(a) {
       var b = a.consumeLexeme();
       if (void 0 != b) {
        a.currentClause.term = b.str.toLowerCase(), -1 != b.str.indexOf("*") && (a.currentClause.usePipeline = !1);
        var c = a.peekLexeme();
        if (void 0 == c) return void a.nextClause();
        switch (c.type) {
         case f.QueryLexer.TERM:
          return a.nextClause(), f.QueryParser.parseTerm;
         case f.QueryLexer.FIELD:
          return a.nextClause(), f.QueryParser.parseField;
         case f.QueryLexer.EDIT_DISTANCE:
          return f.QueryParser.parseEditDistance;
         case f.QueryLexer.BOOST:
          return f.QueryParser.parseBoost;
         case f.QueryLexer.PRESENCE:
          return a.nextClause(), f.QueryParser.parsePresence;
         default:
          var d = "Unexpected lexeme type '" + c.type + "'";
          throw new f.QueryParseError(d, c.start, c.end)
        }
       }
      }, f.QueryParser.parseEditDistance = function(a) {
       var b = a.consumeLexeme();
       if (void 0 != b) {
        var c = parseInt(b.str, 10);
        if (isNaN(c)) {
         var d = "edit distance must be numeric";
         throw new f.QueryParseError(d, b.start, b.end)
        }
        a.currentClause.editDistance = c;
        var e = a.peekLexeme();
        if (void 0 == e) return void a.nextClause();
        switch (e.type) {
         case f.QueryLexer.TERM:
          return a.nextClause(), f.QueryParser.parseTerm;
         case f.QueryLexer.FIELD:
          return a.nextClause(), f.QueryParser.parseField;
         case f.QueryLexer.EDIT_DISTANCE:
          return f.QueryParser.parseEditDistance;
         case f.QueryLexer.BOOST:
          return f.QueryParser.parseBoost;
         case f.QueryLexer.PRESENCE:
          return a.nextClause(), f.QueryParser.parsePresence;
         default:
          var d = "Unexpected lexeme type '" + e.type + "'";
          throw new f.QueryParseError(d, e.start, e.end)
        }
       }
      }, f.QueryParser.parseBoost = function(a) {
       var b = a.consumeLexeme();
       if (void 0 != b) {
        var c = parseInt(b.str, 10);
        if (isNaN(c)) {
         var d = "boost must be numeric";
         throw new f.QueryParseError(d, b.start, b.end)
        }
        a.currentClause.boost = c;
        var e = a.peekLexeme();
        if (void 0 == e) return void a.nextClause();
        switch (e.type) {
         case f.QueryLexer.TERM:
          return a.nextClause(), f.QueryParser.parseTerm;
         case f.QueryLexer.FIELD:
          return a.nextClause(), f.QueryParser.parseField;
         case f.QueryLexer.EDIT_DISTANCE:
          return f.QueryParser.parseEditDistance;
         case f.QueryLexer.BOOST:
          return f.QueryParser.parseBoost;
         case f.QueryLexer.PRESENCE:
          return a.nextClause(), f.QueryParser.parsePresence;
         default:
          var d = "Unexpected lexeme type '" + e.type + "'";
          throw new f.QueryParseError(d, e.start, e.end)
        }
       }
      },
      function(f, g) {
       d = g, e = "function" == typeof d ? d.call(b, c, b, a) : d, !(void 0 !== e && (a.exports = e))
      }(this, function() {
       return f
      })
    }()
   }, function(a, b, c) {
    var d = c(2);
    angular.module("evtviewer.dataHandler").service("evtSearchQuery", function e() {
     var a, b;
     e.prototype.query = function(c, e) {
      return b = d.tokenizer(e), a = c.query(function(a) {
       a.term(b, {
        usePipeline: !1,
        wildcard: d.Query.wildcard.LEADING | d.Query.wildcard.TRAILING
       })
      })
     }, e.prototype.exactMatchQuery = function(c, e) {
      return b = e.match("-") ? e : d.tokenizer(e), a = c.query(function(a) {
       a.term(b, {
        usePipeline: !1
       })
      })
     }
    })
   }, function(a, b, c) {
    var d = c(5);
    angular.module("evtviewer.dataHandler").service("evtSearchResults", ["evtSearchQuery", "evtSearchIndex", "evtSearch", "evtSearchBox", "Utils", function e(a, b, c, f, g) {
     function h() {
      return b.getIndex()
     }
  
     function i(a, b, c) {
      var d, e = {};
      return d = j(a.toLowerCase(), c), d.forEach(function(c) {
       var d, f, g = c.matchData.metadata,
        h = {};
       for (var i in g) g[i].diplomaticText || g[i].interpretativeText ? (h.diplomatic = {}, h.interpretative = {}, h.diplomatic = g[i].diplomaticText || {}, h.interpretative = g[i].interpretativeText || {}, f = n(h), d = b ? {
        diplomatic: k(a, f.diplomatic),
        interpretative: k(a, f.interpretative)
       } : {
        diplomatic: m(f.diplomatic),
        interpretative: m(f.interpretative)
       }, d.diplomatic && (e.diplomatic || (e.diplomatic = []), e.diplomatic = e.diplomatic.concat(d.diplomatic)), d.interpretative && (e.interpretative || (e.interpretative = []), e.interpretative = e.interpretative.concat(d.interpretative))) : (f = n(g[i]), d = b ? {
        content: k(a, f.content)
       } : {
        content: m(f.content)
       }, e.diplomatic = [], e.diplomatic = e.diplomatic.concat(d.content))
      }), e
     }
  
     function j(b, c) {
      var d = h();
      return c ? a.exactMatchQuery(d, b) : a.query(d, b)
     }
  
     function k(a, b) {
      var c = [],
       d = a.match(/[*]/);
      for (var e in b) {
       if (d) {
        a.toLowerCase();
        var f = l(a, e, b, d);
        f && c.push(f)
       }(a === e.toString() || e.toString().includes(a) || a.includes(e.toString())) && c.push({
        token: e.toString(),
        metadata: b[e],
        resultsNumber: b[e].xmlDocId.length
       })
      }
      return c
     }
  
     function l(a, b, c, d) {
      var e, f, g = a.length,
       h = d.index,
       i = b.toString().slice(0, h),
       j = a.slice(0, h),
       k = {
        token: b.toString(),
        metadata: c[b],
        resultsNumber: c[b].xmlDocId.length
       };
      return g === h + 1 && i === j ? k : 0 === h && (e = b.toString().slice(-g + 1), f = a.slice(1, g), e === f) ? k : i === j && (f = a.slice(h + 1, a.length), e = b.toString().slice(-f.length), e === f) ? k : void 0
     }
  
     function m(a) {
      var b = [];
      for (var c in a) b.push({
       token: c.toString(),
       metadata: a[c],
       resultsNumber: a[c].xmlDocId.length
      });
      return b
     }
  
     function n(a) {
      var b, c;
      return a.content ? (b = {
       content: a.content.originalToken
      }, c = {
       content: b.content.map(o)
      }, {
       content: p(a.content, c.content)
      }) : (b = {
       diplomatic: a.diplomatic.originalToken || [],
       interpretative: a.interpretative.originalToken || []
      }, c = {
       diplomatic: b.diplomatic.map(o),
       interpretative: b.interpretative.map(o)
      }, {
       diplomatic: p(a.diplomatic, c.diplomatic),
       interpretative: p(a.interpretative, c.interpretative)
      })
     }
  
     function o(a, b) {
      return {
       token: a,
       position: b
      }
     }
  
     function p(a, b) {
      for (var c, d, e = {}, f = {}, g = 0; g < b.length; g++) {
       c = b[g].token, d = !e[b[g].token];
       for (var h in a) f[h.toString()] = a[h].filter(q, b[g]);
       if (d) e[c] = f, f = {};
       else
        for (var i in f) e[c][i].push(f[i][0])
      }
      return e
     }
  
     function q(a, b) {
      return this.position === b
     }
  
     function r(a, b, c) {
      a.mark(b, {
       wildcards: "enable",
       acrossElements: !0,
       caseSensitive: c,
       accuracy: {
        value: "exactly",
        limiters: [".", ",", ";", ":", "\\", "/", "!", "?", "#", "$", "%", "^", "&", "*", "{", "}", "=", "-", "_", "`", "~", "(", ")"]
       },
       filter: function() {
        return b.match(t) ? !1 : !0
       },
       exclude: [".lineN"]
      })
     }
  
     function s(a, b, c) {
      a.mark(b, {
       wildcards: "enable",
       acrossElements: !0,
       caseSensitive: c,
       accuracy: {
        value: "partially",
        limiters: [".", ",", ";", ":", "\\", "/", "!", "?", "#", "$", "%", "^", "&", "*", "{", "}", "=", "-", "_", "`", "~", "(", ")"]
       },
       filter: function(a) {
        return b.match(t) ? !1 : !0
       },
       exclude: [".lineN"]
      })
     }
     var t = /[.,\/#!$%\^&;:{}=_`~()]/;
     e.prototype.getSearchResults = function(a, b, c) {
      var d, e = {
       "": function() {
        d = "Enter your query into the search box above"
       },
       "default": function() {
        d = i(a, b, c)
       }
      };
      return (e[a] || e["default"])(), d
     }, e.prototype.getVisibleResults = function(a) {
      for (var b = [], c = 0; 20 > c && c < a.length;) b.push(a[c]), c++;
      return b
     }, e.prototype.getCurrentEditionResults = function(a, b) {
      var c = [],
       d = {
        diplomatic: function() {
         var b = a.diplomatic;
         b.forEach(function(a) {
          c.push(a)
         })
        },
        interpretative: function() {
         var b = a.interpretative;
         b.forEach(function(a) {
          c.push(a)
         })
        }
       };
      return 0 !== Object.keys(a).length && d[b](), c
     }, e.prototype.getOriginalText = function(a, b) {
      var d = c.getParsedElementsForIndexing(),
       e = {
        diplomatic: function() {
         return d[a].content.diplomatic || d[a].content
        },
        interpretative: function() {
         return d[a].content.interpretative
        }
       };
      return e[b]()
     }, e.prototype.getTextPreview = function(a, b) {
      for (var c, d, e, f, h = a.split(/[\s]+/), i = 0; g.cleanPunctuation(h[i]) !== b && i < h.length - 1;) c = i, i++;
      return e = h.slice(c, c + 10), d = 10 > c ? h.slice(0, c) : h.slice(c - 10, c), f = d.length < 10 ? d.join(" ") + " " + e.join(" ") + "..." : "..." + d.join(" ") + " " + e.join(" ") + "...", h.length < 15 && (f = d.join(" ") + " " + e.join(" ")), f
     }, e.prototype.highlightSearchResults = function(a, b) {
      var c = new d(document.querySelector("#" + a + " #mainContentToTranform")),
       e = f.getStatus(a, "searchCaseSensitive"),
       g = f.getStatus(a, "searchExactWord");
      c.unmark(b), g ? r(c, b, e) : s(c, b, e)
     }
    }])
   }, function(a, b, c) {
    ! function(b, c) {
     a.exports = c()
    }(this, function() {
     "use strict";
  
     function a(a) {
      var b = this,
       c = new g(a);
      return this.mark = function(a, d) {
       return c.mark(a, d), b
      }, this.markRegExp = function(a, d) {
       return c.markRegExp(a, d), b
      }, this.markRanges = function(a, d) {
       return c.markRanges(a, d), b
      }, this.unmark = function(a) {
       return c.unmark(a), b
      }, this
     }
     var b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
       return typeof a
      } : function(a) {
       return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
      },
      c = function(a, b) {
       if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
      },
      d = function() {
       function a(a, b) {
        for (var c = 0; c < b.length; c++) {
         var d = b[c];
         d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
        }
       }
       return function(b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b
       }
      }(),
      e = Object.assign || function(a) {
       for (var b = 1; b < arguments.length; b++) {
        var c = arguments[b];
        for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
       }
       return a
      },
      f = function() {
       function a(b) {
        var d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !0,
         e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
         f = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 5e3;
        c(this, a), this.ctx = b, this.iframes = d, this.exclude = e, this.iframesTimeout = f
       }
       return d(a, [{
        key: "getContexts",
        value: function() {
         var a = void 0,
          b = [];
         return a = "undefined" != typeof this.ctx && this.ctx ? NodeList.prototype.isPrototypeOf(this.ctx) ? Array.prototype.slice.call(this.ctx) : Array.isArray(this.ctx) ? this.ctx : "string" == typeof this.ctx ? Array.prototype.slice.call(document.querySelectorAll(this.ctx)) : [this.ctx] : [], a.forEach(function(a) {
          var c = b.filter(function(b) {
           return b.contains(a)
          }).length > 0; - 1 !== b.indexOf(a) || c || b.push(a)
         }), b
        }
       }, {
        key: "getIframeContents",
        value: function(a, b) {
         var c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {},
          d = void 0;
         try {
          var e = a.contentWindow;
          if (d = e.document, !e || !d) throw new Error("iframe inaccessible")
         } catch (f) {
          c()
         }
         d && b(d)
        }
       }, {
        key: "isIframeBlank",
        value: function(a) {
         var b = "about:blank",
          c = a.getAttribute("src").trim(),
          d = a.contentWindow.location.href;
         return d === b && c !== b && c
        }
       }, {
        key: "observeIframeLoad",
        value: function(a, b, c) {
         var d = this,
          e = !1,
          f = null,
          g = function h() {
           if (!e) {
            e = !0, clearTimeout(f);
            try {
             d.isIframeBlank(a) || (a.removeEventListener("load", h), d.getIframeContents(a, b, c))
            } catch (g) {
             c()
            }
           }
          };
         a.addEventListener("load", g), f = setTimeout(g, this.iframesTimeout)
        }
       }, {
        key: "onIframeReady",
        value: function(a, b, c) {
         try {
          "complete" === a.contentWindow.document.readyState ? this.isIframeBlank(a) ? this.observeIframeLoad(a, b, c) : this.getIframeContents(a, b, c) : this.observeIframeLoad(a, b, c)
         } catch (d) {
          c()
         }
        }
       }, {
        key: "waitForIframes",
        value: function(a, b) {
         var c = this,
          d = 0;
         this.forEachIframe(a, function() {
          return !0
         }, function(a) {
          d++, c.waitForIframes(a.querySelector("html"), function() {
           --d || b()
          })
         }, function(a) {
          a || b()
         })
        }
       }, {
        key: "forEachIframe",
        value: function(b, c, d) {
         var e = this,
          f = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {},
          g = b.querySelectorAll("iframe"),
          h = g.length,
          i = 0;
         g = Array.prototype.slice.call(g);
         var j = function() {
          --h <= 0 && f(i)
         };
         h || j(), g.forEach(function(b) {
          a.matches(b, e.exclude) ? j() : e.onIframeReady(b, function(a) {
           c(b) && (i++, d(a)), j()
          }, j)
         })
        }
       }, {
        key: "createIterator",
        value: function(a, b, c) {
         return document.createNodeIterator(a, b, c, !1)
        }
       }, {
        key: "createInstanceOnIframe",
        value: function(b) {
         return new a(b.querySelector("html"), this.iframes)
        }
       }, {
        key: "compareNodeIframe",
        value: function(a, b, c) {
         var d = a.compareDocumentPosition(c),
          e = Node.DOCUMENT_POSITION_PRECEDING;
         if (d & e) {
          if (null === b) return !0;
          var f = b.compareDocumentPosition(c),
           g = Node.DOCUMENT_POSITION_FOLLOWING;
          if (f & g) return !0
         }
         return !1
        }
       }, {
        key: "getIteratorNode",
        value: function(a) {
         var b = a.previousNode(),
          c = void 0;
         return c = null === b ? a.nextNode() : a.nextNode() && a.nextNode(), {
          prevNode: b,
          node: c
         }
        }
       }, {
        key: "checkIframeFilter",
        value: function(a, b, c, d) {
         var e = !1,
          f = !1;
         return d.forEach(function(a, b) {
          a.val === c && (e = b, f = a.handled)
         }), this.compareNodeIframe(a, b, c) ? (e !== !1 || f ? e === !1 || f || (d[e].handled = !0) : d.push({
          val: c,
          handled: !0
         }), !0) : (e === !1 && d.push({
          val: c,
          handled: !1
         }), !1)
        }
       }, {
        key: "handleOpenIframes",
        value: function(a, b, c, d) {
         var e = this;
         a.forEach(function(a) {
          a.handled || e.getIframeContents(a.val, function(a) {
           e.createInstanceOnIframe(a).forEachNode(b, c, d)
          })
         })
        }
       }, {
        key: "iterateThroughNodes",
        value: function(a, b, c, d, e) {
         for (var f = this, g = this.createIterator(b, a, d), h = [], i = [], j = void 0, k = void 0, l = function() {
           var a = f.getIteratorNode(g);
           return k = a.prevNode, j = a.node
          }; l();) this.iframes && this.forEachIframe(b, function(a) {
          return f.checkIframeFilter(j, k, a, h)
         }, function(b) {
          f.createInstanceOnIframe(b).forEachNode(a, function(a) {
           return i.push(a)
          }, d)
         }), i.push(j);
         i.forEach(function(a) {
          c(a)
         }), this.iframes && this.handleOpenIframes(h, a, c, d), e()
        }
       }, {
        key: "forEachNode",
        value: function(a, b, c) {
         var d = this,
          e = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {},
          f = this.getContexts(),
          g = f.length;
         g || e(), f.forEach(function(f) {
          var h = function() {
           d.iterateThroughNodes(a, f, b, c, function() {
            --g <= 0 && e()
           })
          };
          d.iframes ? d.waitForIframes(f, h) : h()
         })
        }
       }], [{
        key: "matches",
        value: function(a, b) {
         var c = "string" == typeof b ? [b] : b,
          d = a.matches || a.matchesSelector || a.msMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.webkitMatchesSelector;
         if (d) {
          var e = !1;
          return c.every(function(b) {
           return d.call(a, b) ? (e = !0, !1) : !0
          }), e
         }
         return !1
        }
       }]), a
      }(),
      g = function() {
       function a(b) {
        c(this, a), this.ctx = b, this.ie = !1;
        var d = window.navigator.userAgent;
        (d.indexOf("MSIE") > -1 || d.indexOf("Trident") > -1) && (this.ie = !0)
       }
       return d(a, [{
        key: "log",
        value: function g(a) {
         var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "debug",
          g = this.opt.log;
         this.opt.debug && "object" === ("undefined" == typeof g ? "undefined" : b(g)) && "function" == typeof g[c] && g[c]("mark.js: " + a)
        }
       }, {
        key: "escapeStr",
        value: function(a) {
         return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        }
       }, {
        key: "createRegExp",
        value: function(a) {
         return "disabled" !== this.opt.wildcards && (a = this.setupWildcardsRegExp(a)), a = this.escapeStr(a), Object.keys(this.opt.synonyms).length && (a = this.createSynonymsRegExp(a)), (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) && (a = this.setupIgnoreJoinersRegExp(a)), this.opt.diacritics && (a = this.createDiacriticsRegExp(a)), a = this.createMergedBlanksRegExp(a), (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) && (a = this.createJoinersRegExp(a)), "disabled" !== this.opt.wildcards && (a = this.createWildcardsRegExp(a)), a = this.createAccuracyRegExp(a)
        }
       }, {
        key: "createSynonymsRegExp",
        value: function(a) {
         var b = this.opt.synonyms,
          c = this.opt.caseSensitive ? "" : "i",
          d = this.opt.ignoreJoiners || this.opt.ignorePunctuation.length ? "\x00" : "";
         for (var e in b)
          if (b.hasOwnProperty(e)) {
           var f = b[e],
            g = "disabled" !== this.opt.wildcards ? this.setupWildcardsRegExp(e) : this.escapeStr(e),
            h = "disabled" !== this.opt.wildcards ? this.setupWildcardsRegExp(f) : this.escapeStr(f);
           "" !== g && "" !== h && (a = a.replace(new RegExp("(" + this.escapeStr(g) + "|" + this.escapeStr(h) + ")", "gm" + c), d + ("(" + this.processSynomyms(g) + "|") + (this.processSynomyms(h) + ")") + d))
          } return a
        }
       }, {
        key: "processSynomyms",
        value: function(a) {
         return (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) && (a = this.setupIgnoreJoinersRegExp(a)), a
        }
       }, {
        key: "setupWildcardsRegExp",
        value: function(a) {
         return a = a.replace(/(?:\\)*\?/g, function(a) {
          return "\\" === a.charAt(0) ? "?" : ""
         }), a.replace(/(?:\\)*\*/g, function(a) {
          return "\\" === a.charAt(0) ? "*" : ""
         })
        }
       }, {
        key: "createWildcardsRegExp",
        value: function(a) {
         var b = "withSpaces" === this.opt.wildcards;
         return a.replace(/\u0001/g, b ? "[\\S\\s]?" : "\\S?").replace(/\u0002/g, b ? "[\\S\\s]*?" : "\\S*")
        }
       }, {
        key: "setupIgnoreJoinersRegExp",
        value: function(a) {
         return a.replace(/[^(|)\\]/g, function(a, b, c) {
          var d = c.charAt(b + 1);
          return /[(|)\\]/.test(d) || "" === d ? a : a + "\x00"
         })
        }
       }, {
        key: "createJoinersRegExp",
        value: function(a) {
         var b = [],
          c = this.opt.ignorePunctuation;
         return Array.isArray(c) && c.length && b.push(this.escapeStr(c.join(""))), this.opt.ignoreJoiners && b.push("\\u00ad\\u200b\\u200c\\u200d"), b.length ? a.split(/\u0000+/).join("[" + b.join("") + "]*") : a
        }
       }, {
        key: "createDiacriticsRegExp",
        value: function(a) {
         var b = this.opt.caseSensitive ? "" : "i",
          c = this.opt.caseSensitive ? ["aàáảãạăằắẳẵặâầấẩẫậäåāą", "AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ", "cçćč", "CÇĆČ", "dđď", "DĐĎ", "eèéẻẽẹêềếểễệëěēę", "EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ", "iìíỉĩịîïī", "IÌÍỈĨỊÎÏĪ", "lł", "LŁ", "nñňń", "NÑŇŃ", "oòóỏõọôồốổỗộơởỡớờợöøō", "OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ", "rř", "RŘ", "sšśșş", "SŠŚȘŞ", "tťțţ", "TŤȚŢ", "uùúủũụưừứửữựûüůū", "UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ", "yýỳỷỹỵÿ", "YÝỲỶỸỴŸ", "zžżź", "ZŽŻŹ"] : ["aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ", "cçćčCÇĆČ", "dđďDĐĎ", "eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ", "iìíỉĩịîïīIÌÍỈĨỊÎÏĪ", "lłLŁ", "nñňńNÑŇŃ", "oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ", "rřRŘ", "sšśșşSŠŚȘŞ", "tťțţTŤȚŢ", "uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ", "yýỳỷỹỵÿYÝỲỶỸỴŸ", "zžżźZŽŻŹ"],
          d = [];
         return a.split("").forEach(function(e) {
          c.every(function(c) {
           if (-1 !== c.indexOf(e)) {
            if (d.indexOf(c) > -1) return !1;
            a = a.replace(new RegExp("[" + c + "]", "gm" + b), "[" + c + "]"), d.push(c)
           }
           return !0
          })
         }), a
        }
       }, {
        key: "createMergedBlanksRegExp",
        value: function(a) {
         return a.replace(/[\s]+/gim, "[\\s]+")
        }
       }, {
        key: "createAccuracyRegExp",
        value: function(a) {
         var b = this,
          c = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿",
          d = this.opt.accuracy,
          e = "string" == typeof d ? d : d.value,
          f = "string" == typeof d ? [] : d.limiters,
          g = "";
         switch (f.forEach(function(a) {
          g += "|" + b.escapeStr(a)
         }), e) {
          case "partially":
          default:
           return "()(" + a + ")";
          case "complementary":
           return g = "\\s" + (g ? g : this.escapeStr(c)), "()([^" + g + "]*" + a + "[^" + g + "]*)";
          case "exactly":
           return "(^|\\s" + g + ")(" + a + ")(?=$|\\s" + g + ")"
         }
        }
       }, {
        key: "getSeparatedKeywords",
        value: function(a) {
         var b = this,
          c = [];
         return a.forEach(function(a) {
          b.opt.separateWordSearch ? a.split(" ").forEach(function(a) {
           a.trim() && -1 === c.indexOf(a) && c.push(a)
          }) : a.trim() && -1 === c.indexOf(a) && c.push(a)
         }), {
          keywords: c.sort(function(a, b) {
           return b.length - a.length
          }),
          length: c.length
         }
        }
       }, {
        key: "isNumeric",
        value: function(a) {
         return Number(parseFloat(a)) == a
        }
       }, {
        key: "checkRanges",
        value: function(a) {
         var b = this;
         if (!Array.isArray(a) || "[object Object]" !== Object.prototype.toString.call(a[0])) return this.log("markRanges() will only accept an array of objects"), this.opt.noMatch(a), [];
         var c = [],
          d = 0;
         return a.sort(function(a, b) {
          return a.start - b.start
         }).forEach(function(a) {
          var e = b.callNoMatchOnInvalidRanges(a, d),
           f = e.start,
           g = e.end,
           h = e.valid;
          h && (a.start = f, a.length = g - f, c.push(a), d = g)
         }), c
        }
       }, {
        key: "callNoMatchOnInvalidRanges",
        value: function(a, b) {
         var c = void 0,
          d = void 0,
          e = !1;
         return a && "undefined" != typeof a.start ? (c = parseInt(a.start, 10), d = c + parseInt(a.length, 10), this.isNumeric(a.start) && this.isNumeric(a.length) && d - b > 0 && d - c > 0 ? e = !0 : (this.log("Ignoring invalid or overlapping range: " + JSON.stringify(a)), this.opt.noMatch(a))) : (this.log("Ignoring invalid range: " + JSON.stringify(a)), this.opt.noMatch(a)), {
          start: c,
          end: d,
          valid: e
         }
        }
       }, {
        key: "checkWhitespaceRanges",
        value: function(a, b, c) {
         var d = void 0,
          e = !0,
          f = c.length,
          g = b - f,
          h = parseInt(a.start, 10) - g;
         return h = h > f ? f : h, d = h + parseInt(a.length, 10), d > f && (d = f, this.log("End range automatically set to the max value of " + f)), 0 > h || 0 > d - h || h > f || d > f ? (e = !1, this.log("Invalid range: " + JSON.stringify(a)), this.opt.noMatch(a)) : "" === c.substring(h, d).replace(/\s+/g, "") && (e = !1, this.log("Skipping whitespace only range: " + JSON.stringify(a)), this.opt.noMatch(a)), {
          start: h,
          end: d,
          valid: e
         }
        }
       }, {
        key: "getTextNodes",
        value: function(a) {
         var b = this,
          c = "",
          d = [];
         this.iterator.forEachNode(NodeFilter.SHOW_TEXT, function(a) {
          d.push({
           start: c.length,
           end: (c += a.textContent).length,
           node: a
          })
         }, function(a) {
          return b.matchesExclude(a.parentNode) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
         }, function() {
          a({
           value: c,
           nodes: d
          })
         })
        }
       }, {
        key: "matchesExclude",
        value: function(a) {
         return f.matches(a, this.opt.exclude.concat(["script", "style", "title", "head", "html"]))
        }
       }, {
        key: "wrapRangeInTextNode",
        value: function(a, b, c) {
         var d = this.opt.element ? this.opt.element : "mark",
          e = a.splitText(b),
          f = e.splitText(c - b),
          g = document.createElement(d);
         return g.setAttribute("data-markjs", "true"), this.opt.className && g.setAttribute("class", this.opt.className), g.textContent = e.textContent, e.parentNode.replaceChild(g, e), f
        }
       }, {
        key: "wrapRangeInMappedTextNode",
        value: function(a, b, c, d, e) {
         var f = this;
         a.nodes.every(function(g, h) {
          var i = a.nodes[h + 1];
          if ("undefined" == typeof i || i.start > b) {
           if (!d(g.node)) return !1;
           var j = b - g.start,
            k = (c > g.end ? g.end : c) - g.start,
            l = a.value.substr(0, g.start),
            m = a.value.substr(k + g.start);
           if (g.node = f.wrapRangeInTextNode(g.node, j, k), a.value = l + m, a.nodes.forEach(function(b, c) {
             c >= h && (a.nodes[c].start > 0 && c !== h && (a.nodes[c].start -= k), a.nodes[c].end -= k)
            }), c -= k, e(g.node.previousSibling, g.start), !(c > g.end)) return !1;
           b = g.end
          }
          return !0
         })
        }
       }, {
        key: "wrapMatches",
        value: function(a, b, c, d, e) {
         var f = this,
          g = 0 === b ? 0 : b + 1;
         this.getTextNodes(function(b) {
          b.nodes.forEach(function(b) {
           b = b.node;
           for (var e = void 0; null !== (e = a.exec(b.textContent)) && "" !== e[g];)
            if (c(e[g], b)) {
             var h = e.index;
             if (0 !== g)
              for (var i = 1; g > i; i++) h += e[i].length;
             b = f.wrapRangeInTextNode(b, h, h + e[g].length), d(b.previousSibling), a.lastIndex = 0
            }
          }), e()
         })
        }
       }, {
        key: "wrapMatchesAcrossElements",
        value: function(a, b, c, d, e) {
         var f = this,
          g = 0 === b ? 0 : b + 1;
         this.getTextNodes(function(b) {
          for (var h = void 0; null !== (h = a.exec(b.value)) && "" !== h[g];) {
           var i = h.index;
           if (0 !== g)
            for (var j = 1; g > j; j++) i += h[j].length;
           var k = i + h[g].length;
           f.wrapRangeInMappedTextNode(b, i, k, function(a) {
            return c(h[g], a)
           }, function(b, c) {
            a.lastIndex = c, d(b)
           })
          }
          e()
         })
        }
       }, {
        key: "wrapRangeFromIndex",
        value: function(a, b, c, d) {
         var e = this;
         this.getTextNodes(function(f) {
          var g = f.value.length;
          a.forEach(function(a, d) {
           var h = e.checkWhitespaceRanges(a, g, f.value),
            i = h.start,
            j = h.end,
            k = h.valid;
           k && e.wrapRangeInMappedTextNode(f, i, j, function(c) {
            return b(c, a, f.value.substring(i, j), d)
           }, function(b) {
            c(b, a)
           })
          }), d()
         })
        }
       }, {
        key: "unwrapMatches",
        value: function(a) {
         for (var b = a.parentNode, c = document.createDocumentFragment(); a.firstChild;) c.appendChild(a.removeChild(a.firstChild));
         b.replaceChild(c, a), this.ie ? this.normalizeTextNode(b) : b.normalize()
        }
       }, {
        key: "normalizeTextNode",
        value: function(a) {
         if (a) {
          if (3 === a.nodeType)
           for (; a.nextSibling && 3 === a.nextSibling.nodeType;) a.nodeValue += a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling);
          else this.normalizeTextNode(a.firstChild);
          this.normalizeTextNode(a.nextSibling)
         }
        }
       }, {
        key: "markRegExp",
        value: function(a, b) {
         var c = this;
         this.opt = b, this.log('Searching with expression "' + a + '"');
         var d = 0,
          e = "wrapMatches",
          f = function(a) {
           d++, c.opt.each(a)
          };
         this.opt.acrossElements && (e = "wrapMatchesAcrossElements"), this[e](a, this.opt.ignoreGroups, function(a, b) {
          return c.opt.filter(b, a, d)
         }, f, function() {
          0 === d && c.opt.noMatch(a), c.opt.done(d)
         })
        }
       }, {
        key: "mark",
        value: function(a, b) {
         var c = this;
         this.opt = b;
         var d = 0,
          e = "wrapMatches",
          f = this.getSeparatedKeywords("string" == typeof a ? [a] : a),
          g = f.keywords,
          h = f.length,
          i = this.opt.caseSensitive ? "" : "i",
          j = function k(a) {
           var b = new RegExp(c.createRegExp(a), "gm" + i),
            f = 0;
           c.log('Searching with expression "' + b + '"'), c[e](b, 1, function(b, e) {
            return c.opt.filter(e, a, d, f)
           }, function(a) {
            f++, d++, c.opt.each(a)
           }, function() {
            0 === f && c.opt.noMatch(a), g[h - 1] === a ? c.opt.done(d) : k(g[g.indexOf(a) + 1])
           })
          };
         this.opt.acrossElements && (e = "wrapMatchesAcrossElements"), 0 === h ? this.opt.done(d) : j(g[0])
        }
       }, {
        key: "markRanges",
        value: function(a, b) {
         var c = this;
         this.opt = b;
         var d = 0,
          e = this.checkRanges(a);
         e && e.length ? (this.log("Starting to mark with the following ranges: " + JSON.stringify(e)), this.wrapRangeFromIndex(e, function(a, b, d, e) {
          return c.opt.filter(a, b, d, e)
         }, function(a, b) {
          d++, c.opt.each(a, b)
         }, function() {
          c.opt.done(d)
         })) : this.opt.done(d)
        }
       }, {
        key: "unmark",
        value: function(a) {
         var b = this;
         this.opt = a;
         var c = this.opt.element ? this.opt.element : "*";
         c += "[data-markjs]", this.opt.className && (c += "." + this.opt.className), this.log('Removal selector "' + c + '"'), this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT, function(a) {
          b.unwrapMatches(a)
         }, function(a) {
          var d = f.matches(a, c),
           e = b.matchesExclude(a);
          return !d || e ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
         }, this.opt.done)
        }
       }, {
        key: "opt",
        set: function(a) {
         this._opt = e({}, {
          element: "",
          className: "",
          exclude: [],
          iframes: !1,
          iframesTimeout: 5e3,
          separateWordSearch: !0,
          diacritics: !0,
          synonyms: {},
          accuracy: "partially",
          acrossElements: !1,
          caseSensitive: !1,
          ignoreJoiners: !1,
          ignoreGroups: 0,
          ignorePunctuation: [],
          wildcards: "disabled",
          each: function() {},
          noMatch: function() {},
          filter: function() {
           return !0
          },
          done: function() {},
          debug: !1,
          log: window.console
         }, a)
        },
        get: function() {
         return this._opt
        }
       }, {
        key: "iterator",
        get: function() {
         return new f(this.ctx, this.opt.iframes, this.opt.exclude, this.opt.iframesTimeout)
        }
       }]), a
      }();
     return a
    })
   }]), angular.module("evtviewer.bibliography", []), angular.module("evtviewer.bibliography").directive("evtScrollIf", ["$timeout", function(a) {
    return function(b, c, d) {
     d.$observe("evtScrollIf", function(b) {
      "true" === b && a(function() {
       c[0].scrollIntoView()
      }, 100)
     })
    }
   }]), angular.module("evtviewer.bibliography").service("evtHighlight", function() {
    var a = {},
     b = "";
    return a.setHighlighted = function(a) {
     b = a
    }, a.getHighlighted = function() {
     return b
    }, a
   }), angular.module("evtviewer.bibliography").provider("evtBibliography", function() {
    var a = this.defaults;
    this.setDefaults = function(b) {
     a = b
    }, this.$get = ["$log", "config", "parsedData", "evtBibliographyParser", "evtHighlight", function(a, b, c, d, e) {
     var f = {},
      g = {},
      h = [],
      i = 0,
      j = (a.getInstance("bibliography"), function(a) {
       var b = this,
        c = b.getBibliographicRefById(a);
       return b.initialSelectedStyle ? (c.outputs[b.initialSelectedStyle.label] || d.formatResult(b.initialSelectedStyle.label, c), c.outputs[b.initialSelectedStyle.label] ? c.outputs[b.initialSelectedStyle.label] : c.plainText) : c.plainText
      }),
      k = function(a) {
       var b = this,
        c = b.getBibliographicRefById(a),
        e = d.getType(c);
       return e = e ? e : "unknown"
      },
      l = function(a) {
       return "" !== e.getHighlighted() && e.getHighlighted() === a
      },
      m = function(a) {
       return c.getBibliographicRefById(a)
      };
     return f.build = function(a) {
      var e, f, n, o, p, q, r = a.id || i++,
       s = b.allowedBibliographicStyles || {},
       t = !0,
       u = !0,
       v = !0;
      "" !== b.defaultBibliographicStyle && void 0 !== s[b.defaultBibliographicStyle] && s[b.defaultBibliographicStyle].enabled && (f = s[b.defaultBibliographicStyle]);
      for (var w in s) f || !s[w].enabled || f || (f = s[w]), s[w].enabled || delete s[w];
      if ("undefined" == typeof g[r]) {
       if (d.bibliographicStyleInfoDetected() || (u = !1, f = ""), o = b.bibliographicEntriesSortBy || {}, d.authorInfoDetected() || delete o.Author, d.yearInfoDetected() || delete o.Year, d.titleInfoDetected() || delete o.Title, d.publisherInfoDetected() || delete o.Publisher, o && Object.keys(o).length > 0) {
        t = !0;
        var x = Object.keys(o)[0];
        n = o[x]
       } else t = !1;
       p = b.bibliographySortOrder, q = p.ASC, t || (v = !1), e = c.getBibliographicRefsCollection();
       var y = {};
       if ("undefined" == typeof g[r]) return y = {
        uid: r,
        biblRefsCollection: e,
        styles: s,
        initialSelectedStyle: f,
        selectedSorting: n,
        biblSortStyleSelectVisibility: u,
        biblSortSelectVisibility: t,
        biblSortOrderSelectVisibility: v,
        sortBy: o,
        sortOrder: p,
        selectedSortOrder: q,
        getFormattedBibl: j,
        pubblicationType: k,
        isEntryHighlighted: l,
        getBibliographicRefById: m
       }, g[r] = angular.extend(a.vm, y), h.push({
        id: r
       }), g[r]
      }
     }, f.destroy = function(a) {
      delete g[a]
     }, f
    }]
   }), angular.module("evtviewer.bibliography").controller("BibliographyCtrl", ["$log", "$scope", "evtBibliography", function(a, b, c) {
    var d = (a.getInstance("BibliographyCtrl"), this);
    this.myComparator = function(a, b) {
     var c = "",
      e = "";
     switch (d.selectedSorting) {
      case d.sortBy.Author:
       "undefined" != typeof a.value.author && a.value.author.length > 0 && (c = "" !== a.value.author[0].name ? a.value.author[0].name : "", c = "" !== a.value.author[0].surname ? a.value.author[0].surname : c), "undefined" != typeof b.value.author && b.value.author.length > 0 && (e = "" !== b.value.author[0].name ? b.value.author[0].name : "", e = "" !== b.value.author[0].surname ? b.value.author[0].surname : e);
       break;
      case d.sortBy.Year:
       "undefined" != typeof a.value.date && (c = "" !== a.value.date && Number(a.value.date) ? Number(a.value.date) : ""), "undefined" != typeof b.value.date && (e = "" !== a.value.date && Number(b.value.date) ? Number(b.value.date) : "");
       break;
      case d.sortBy.Title:
       "undefined" != typeof a.value.titleAnalytic && (c = "" !== a.value.titleAnalytic && "" === c ? a.value.titleAnalytic : c), "undefined" != typeof a.value.titleMonogr && (c = "" !== a.value.titleMonogr && "" === c ? a.value.titleMonogr : c), "undefined" != typeof b.value.titleAnalytic && (e = "" !== b.value.titleAnalytic && "" === e ? b.value.titleAnalytic : e), "undefined" != typeof b.value.titleMonogr && (e = "" !== b.value.titleMonogr && "" === e ? b.value.titleMonogr : e);
       break;
      case d.sortBy.Publisher:
       "undefined" != typeof a.value.publisher && (c = "" !== a.value.publisher ? a.value.publisher : ""), "undefined" != typeof b.value.publisher && (e = "" !== b.value.publisher ? b.value.publisher : "")
     }
     return c.toString().localeCompare(e.toString())
    }, this.destroy = function() {
     c.destroy(this.uid)
    }
   }]), angular.module("evtviewer.bibliography").directive("evtBibliography", ["evtBibliography", function(a) {
    return {
     restrict: "E",
     templateUrl: "src/bibliography/bibliography.directive.tmpl.html",
     scope: {
      id: "@"
     },
     controllerAs: "vm",
     controller: "BibliographyCtrl",
     link: function(b, c, d) {
      var e = a.build(b);
      b.$on("$destroy", function() {
       e && e.destroy()
      })
     }
    }
   }]), angular.module("evtviewer.bibliography").controller("BiblElemCtrl", ["$scope", "$log", "parsedData", "config", "evtBibliographyParser", function(a, b, c, d, e) {
    var f = (b.getInstance("BiblElemCtrl"), this);
    f.styles = d.allowedBibliographicStyles, f.initialSelectedStyle = d.defaultBibliographicStyle, f.getFormattedBibl = function() {
     var b = c.getBibliographicRefById(a.biblId);
     return b ? (b.outputs[f.initialSelectedStyle] || e.formatResult(f.initialSelectedStyle, b), b.outputs[f.initialSelectedStyle]) : ""
    }
   }]), angular.module("evtviewer.bibliography").directive("evtBiblElem", function() {
    return {
     restrict: "E",
     scope: {
      biblId: "@"
     },
     transclude: !0,
     templateUrl: "src/bibliography/biblElem.directive.tmpl.html",
     controllerAs: "vm",
     controller: "BiblElemCtrl"
    }
   }), angular.module("evtviewer.interface", []), angular.module("evtviewer.interface").config(["$routeProvider", "$locationProvider", "$translateProvider", function(a, b, c) {
    b.hashPrefix(""), a.when("/:viewMode", {
     template: "index.html",
     controller: "InterfaceCtrl",
     reloadOnSearch: !1
    }).otherwise({
     redirectTo: "/",
     reloadOnSearch: !1
    }), c.useStaticFilesLoader({
     prefix: "i18n/",
     suffix: ".json"
    }), c.fallbackLanguage("en").preferredLanguage("en")
   }]).run(["$injector", "config", function(a, b) {
    if (b.isValid() && b.isModuleActive("interface")) {
     var c = a.get("evtInterface");
     c.boot()
    }
   }]), angular.module("evtviewer.interface").controller("InterfaceCtrl", ["$log", "$timeout", "$injector", "$scope", "$route", "evtInterface", "evtTranslation", "evtPinnedElements", "evtButtonSwitch", "evtBox", "evtApparatuses", "parsedData", "evtSelect", "evtPopover", "evtCommunication", "evtDialog", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    var q = a.getInstance("interface");
    d.getCurrentViewMode = function() {
     return f.getState("currentViewMode")
    }, d.getCurrentPage = function() {
     return f.getState("currentPage")
    }, d.getCurrentDocument = function() {
     return f.getState("currentDoc")
    }, d.getCurrentEdition = function() {
     return f.getState("currentEdition")
    }, d.getCurrentComparingEdition = function() {
     return f.getState("currentComparingEdition")
    }, d.getAvailableWitnesses = function() {
     return f.getProperty("availableWitnesses")
    }, d.isWitnessSelectorActive = function() {
     return f.getProperty("witnessSelector")
    }, d.addWitness = function(a) {
     void 0 !== a && (f.addWitness(a), f.updateUrl()), b(function() {
      var a = window.getComputedStyle(document.getElementsByClassName("box")[0]).width.replace("px", "");
      document.getElementById("compareWits_box").scrollLeft = a * (f.getState("currentWits").length + 1)
     }), f.updateProperty("witnessSelector", !1)
    }, d.getWitness = function(a) {
     var b = a + " - " + l.getWitness(a).description.textContent.trim() || a;
     return b = b.length > 30 ? b.substr(0, 30) + "..." : b
    }, d.getCurrentWitnesses = function() {
     return f.getState("currentWits")
    }, d.getCurrentWitnessPage = function(a) {
     return f.getCurrentWitnessPage(a)
    }, d.getAvailableViewModes = function() {
     return f.getProperty("availableViewModes")
    }, d.existCriticalText = function() {
     return f.existCriticalText()
    }, d.getCurrentAppEntry = function() {
     return f.getState("currentAppEntry")
    }, d.updateCurrentAppEntry = function(a) {
     f.updateState("currentAppEntry", a), "readingTxt" === f.getState("currentViewMode") && (j.alignScrollToApp(a), k.alignScrollToApp(a)), f.updateUrl()
    }, d.updateCurrentQuote = function(a) {
     f.updateState("currentQuote", a)
    }, d.getCurrentApparatus = function() {
     return f.getState("currentApparatus")
    }, d.evtPinnedElements = h, d.isLoading = function() {
     var a = o.getError();
     return f.isLoading() && "" === a.title
    }, d.isPinnedAppBoardOpened = function() {
     return f.getState("isPinnedAppBoardOpened")
    }, d.isToolAvailable = function(a) {
     return f.isToolAvailable(a)
    }, d.getSecondaryContentOpened = function() {
     return f.getState("secondaryContent")
    }, d.getProjectInfo = function() {
     return l.getProjectInfo()
    }, d.getWitnessesListFormatted = function() {
     return l.getWitnessesListFormatted()
    }, d.getAvailableLists = function() {
     return l.getNamedEntitiesCollection()._indexes
    }, d.getProperty = function(a) {
     return f.getProperty(a)
    }, d.getState = function(a) {
     return f.getState(a)
    }, d.getWebSite = function() {
     var a = f.getProperty("webSite");
     return a.indexOf("http://") < 0 ? "http://" + a : a
    }, d.handleGenericClick = function(a) {
     var b = a.target;
     if (0 === angular.element(b).parents("evt-select").length && m.closeAll(), 0 === angular.element(b).parents("button-switch").length) {
      var c = ["standAlone", "toggler"];
      i.unselectAllSkipByBtnType("", c), f.updateState("mainMenu", !1)
     }
     0 === angular.element(b).parents("evt-popover").length && n.closeAll(), 0 === angular.element(b).parents(".witnessSelector").length && f.getProperty("witnessSelector") && f.updateProperty("witnessSelector", !1)
    }, d.handleKeydownEvent = function(a) {
     27 === a.keyCode ? p.closeAll() : 37 === a.keyCode ? d.isVisCollOpened() || d.isThumbNailsOpened() || (a.metaKey ? f.goToFirstPage() : f.goToPrevPage()) : 39 === a.keyCode && (d.isVisCollOpened() || d.isThumbNailsOpened() || (a.metaKey ? f.goToLastPage() : f.goToNextPage()))
    }, d.getBookmark = function() {
     var a = l.getProjectInfo().editionReference || {},
      b = '<div class="bookmark">';
     return b += a.author ? a.author + ". " : "", b += a.title ? "<em>" + a.title + "</em>. " : "", b += a.publisher ? "{{ 'PUBLISHED_BY' | translate }} " + a.publisher + ". " : "", b += '<<a href="' + window.location + '" target="blank">' + window.location + "</a>>", b += "</div>"
    }, d.getErrorMsg = function() {
     return o.getError()
    }, d.getAvailableSourcesTexts = function() {
     return f.getProperty("availableSourcesTexts")
    }, d.getCurrentSourceText = function() {
     return f.getState("currentSourceText")
    }, d.isApparatusBoxOpen = function() {
     return f.getState("isApparatusBoxOpen")
    }, d.showApparatusesBox = function() {
     return f.getState("isApparatusBoxOpen") && "critical" === f.getState("currentEdition")
    }, d.getCurrentVersions = function() {
     return f.getState("currentVersions")
    }, d.getAvailableVersions = function() {
     return f.getProperty("availableVersions")
    }, d.isVersionSelectorActive = function() {
     return f.getProperty("versionSelector")
    }, d.getAllVersionsNumber = function() {
     return f.getAllVersionsNumber()
    }, d.getVersion = function(a) {
     var b = l.getVersionEntries(),
      c = b ? b._indexes : {};
     return c && c.versionId ? c.versionId[a] : ""
    }, d.addVersion = function(a) {
     void 0 !== a && f.addVersion(a), b(function() {
      var a = window.getComputedStyle(document.getElementsByClassName("box")[0]).width.replace("px", "");
      document.getElementById("compareVer_box").scrollLeft = a * (f.getState("currentVersions").length + 1)
     }), f.updateProperty("versionSelector", !1)
    }, d.openGlobalDialogInfo = function() {
     f.updateState("secondaryContent", "globalInfo"), p.openByType("globalInfo")
    }, d.openGlobalDialogLists = function() {
     f.updateState("secondaryContent", "entitiesList"), p.openByType("entitiesList")
    }, d.openToc = function() {
     f.updateState("secondaryContent", "toc"), p.openByType("toc")
    }, d.generateBookmark = function() {
     f.updateState("secondaryContent", "bookmark"), p.openByType("bookmark")
    }, d.downloadXML = function() {
     window.open(f.getProperty("dataUrl"), "_blank")
    }, d.getAvailableLanguages = function() {
     return g.getLanguages()
    }, d.getCurrentLanguage = function() {
     return g.getCurrentLanguage()
    }, d.setLanguage = function(a) {
     g.setLanguage(a)
    }, d.isNavBarOpened = function() {
     return f.getProperty("enableNavBar") && f.getState("isNavBarOpened")
    }, d.isVisCollOpened = function() {
     return f.getState("isVisCollOpened")
    }, d.isThumbNailsOpened = function() {
     return f.getState("isThumbNailsOpened")
    }, d.getThumbnails = function() {
     return l.getThumbnails()
    }, d.goToPageFromThumb = function(a) {
     f.getState("currentPage") !== a.value && (f.updateState("isThumbNailsOpened", !1), f.setCurrentPage(a))
    }, d.toggleNavBar = function() {
     var a = f.getState("isNavBarOpened");
     f.updateState("isNavBarOpened", !a), b(function() {
      d.$broadcast("rzSliderForceRender")
     })
    }, q.log("InterfaceCtrl running")
   }]).directive("evt-g", ["parsedData", function(a) {
    return {
     restrict: "E",
     scope: {
      ref: "@"
     },
     template: '<span class="glyph" compile="::content"></span>',
     replace: !0,
     link: function(b, c, d) {
      var e = b.ref,
       f = "[" + b.ref + "]";
      if (e && "" !== e) {
       e = e.replace("#", "");
       var g = a.getGlyph(e);
       g && "" !== g.parsedXml && (f = g.parsedXml)
      }
      b.content = f
     }
    }
   }]), angular.module("evtviewer.interface").service("evtInterface", ["$rootScope", "$timeout", "evtTranslation", "evtCommunication", "evtCriticalApparatusParser", "evtCriticalParser", "evtPinnedElements", "evtCriticalApparatusEntry", "evtAnaloguesParser", "config", "$routeParams", "parsedData", "evtReading", "$q", "$http", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    var p = {},
     q = {
      currentViewMode: void 0,
      currentDoc: void 0,
      currentPage: void 0,
      currentDivs: {},
      currentWits: void 0,
      currentWitsPages: void 0,
      currentEdition: void 0,
      currentComparingEdition: void 0,
      currentAppEntry: void 0,
      currentHighlightedZone: void 0,
      isLoading: !0,
      isPinnedAppBoardOpened: !1,
      isNavBarOpened: !0,
      isVisCollOpened: !1,
      isThumbNailsOpened: !1,
      indexingInProgress: !1,
      secondaryContent: "",
      dialog: {
       home: ""
      },
      isApparatusBoxOpen: !0,
      currentApparatus: void 0,
      currentQuote: void 0,
      currentAnalogue: void 0,
      currentSource: void 0,
      currentSourceText: void 0,
      currentVersions: void 0,
      currentVersionEntry: void 0,
      currentVersion: void 0,
      mainMenu: !1
     },
     r = {
      indexTitle: "",
      webSite: "",
      dataUrl: "",
      logoUrl: "",
      enableXMLdownload: !1,
      toolHome: !0,
      availableViewModes: [],
      availableWitnesses: [],
      witnessSelector: !1,
      namedEntitiesLists: !1,
      availableSourcesTexts: [],
      isSourceLoading: !1,
      parsedSourcesTexts: [],
      availableVersions: [],
      versionSelector: !1,
      tabsContainerOpenedContent: "",
      tabsContainerOpenedTab: "",
      visCollTextUrl: "",
      visCollStyleUrl: "",
      enableNavBar: !0
     },
     s = {};
    return p.boot = function() {
     d.getExternalConfig(j.configUrl).then(function() {
      r.indexTitle = j.indexTitle, r.logoUrl = j.logoUrl, r.webSite = j.webSite, r.enableXMLdownload = j.enableXMLdownload, r.toolHome = j.toolHome, r.availableViewModes = j.availableViewModes, r.visCollTextUrl = j.visCollTextUrl, r.visCollStyleUrl = j.visCollStyleUrl, r.enableNavBar = angular.isDefined(j.enableNavBar) ? j.enableNavBar : q.enableNavBar, q.isNavBarOpened = angular.isDefined(j.initNavBarOpened) ? j.initNavBarOpened : q.isNavBarOpened, c.setLanguages(j.languages);
      var h = c.getUserLanguage(),
       i = c.getFallbackLanguage();
      c.setFallbackLanguage(i), c.setLanguage(h), "" !== j.sourcesUrl && d.getExternalData(j.sourcesUrl), "" !== j.analoguesUrl && d.getExternalData(j.analoguesUrl), p.updateProperty("dataUrl", j.dataUrl), "" === j.dataUrl ? (d.err("", "", "dataUrlEmpty", !1), a.$applyAsync(q.isLoading = !1)) : d.getData(j.dataUrl).then(function() {
       for (var c = 0, h = r.availableViewModes.length; h > c; c++) {
        var i = r.availableViewModes[c].viewMode;
        "collation" === i && 0 === l.getWitnessesList().length && (r.availableViewModes[c].visible = !1), "versions" === i && p.getAllVersionsNumber() < 2 && (r.availableViewModes[c].visible = !1), "srcTxt" !== i || l.getSources()._indexes.availableTexts && 0 !== l.getSources()._indexes.availableTexts.length || (r.availableViewModes[c].visible = !1)
       }
       if (r.namedEntitiesLists = l.getNamedEntitiesCollection()._indexes.length > 0, j.availableEditionLevel)
        for (var m = 0; m < j.availableEditionLevel.length; m++) {
         var o = j.availableEditionLevel[m];
         o.visible && l.addEdition(o)
        }
       p.updateParams(k);
       var s = [];
       "" !== j.sourcesUrl && s.push(d.getExternalData(j.sourcesUrl)), "" !== j.analoguesUrl && s.push(d.getExternalData(j.analoguesUrl));
       var t = l.getDocument(q.currentDoc);
       void 0 !== t && ("internal" === l.getEncodingDetail("variantEncodingLocation") && (j.loadCriticalEntriesImmediately && s.push(e.parseCriticalEntries(t.content).promise), j.versions.length > 1 && s.push(e.parseVersionEntries(t.content).promise)), "critical" !== j.editionType && "multiple" !== j.editionType || !l.isCriticalEditionAvailable() || (j.versions.length > 0 && void 0 !== j.versions[0] ? s.push(f.parseCriticalText(t.content, q.currentDoc, j.versions[0]).promise) : s.push(f.parseCriticalText(t.content, q.currentDoc).promise)), n.all(s).then(function() {
        var c = [];
        "" !== j.visCollDataModel && (c.push(d.getViscollDataModel(j.visCollDataModel)), "" !== j.visCollImageList && c.push(d.getViscollImageList(j.visCollImageList)), n.all(c).then(function() {
         var a = [],
          b = l.getViscollSVGToLoad();
         "" !== j.visCollSvg && b.length > 0 && b.forEach(function(b) {
          a.push(d.getViscollSvgs(j.visCollSvg + b.fileName, b.id))
         }), n.all(a).then(function() {
          l.setViscollSvgsLoaded(!0)
         })
        })), void 0 !== q.currentAppEntry && void 0 === l.getCriticalEntryById(q.currentAppEntry) && p.updateState("currentAppEntry", "");
        var e = l.getSources()._indexes.availableTexts;
        if (0 !== Object.keys(e).length) {
         for (var f in e) r.availableSourcesTexts.push(e[f].id);
         p.updateCurrentSourceText(r.availableSourcesTexts[0])
        }
        if (q.currentVersions = [], 2 === j.versions.length) q.currentVersions.push(j.versions[1]);
        else
         for (var h = 1; h < j.versions.length; h++) r.availableVersions.push(j.versions[h]);
        p.updateUrl();
        var i = l.getQuotes()._indexes.encodingStructure || [],
         k = !j.showInlineSources && i.length > 0,
         m = l.getAnalogues()._indexes.encodingStructure || [],
         o = !j.showInlineAnalogues && m.length > 0;
        q.isApparatusBoxOpen = !j.showInlineCriticalApparatus || k || o, a.$applyAsync(q.isLoading = !1), b(function() {
         g.getElementsFromCookies()
        }, 10)
       }))
      })
     })
    }, p.setTabContainerPanel = function(a) {
     q.dialog.tabContainerPanel = a
    }, p.getTabContainerPanel = function() {
     return q.dialog.tabContainerPanel
    }, p.setHomePanel = function(a) {
     q.dialog.home = a
    }, p.getHomePanel = function() {
     return q.dialog.home
    }, p.isLoading = function() {
     return q.isLoading
    }, p.isToolAvailable = function(a) {
     return j[a]
    }, p.getToolState = function(a) {
     return s[a] ? s[a].status : void 0
    }, p.getStates = function() {
     return q
    }, p.getProperties = function() {
     return r
    }, p.getProperty = function(a) {
     return r[a]
    }, p.getStates = function() {
     return q
    }, p.getState = function(a) {
     return q[a]
    }, p.getCurrentWitnessPage = function(a) {
     return q.currentWitsPages[a]
    }, p.existCriticalText = function() {
     return void 0 !== l.getCriticalText(q.currentDoc)
    }, p.isCriticalApparatusInline = function() {
     return j.showInlineCriticalApparatus || "readingTxt" !== p.getState("currentViewMode")
    }, p.isSourcesInline = function() {
     return j.showInlineSources || "readingTxt" !== p.getState("currentViewMode")
    }, p.isAnaloguesInline = function() {
     return j.showInlineAnalogues || "readingTxt" !== p.getState("currentViewMode")
    }, p.setToolStatus = function(a, b) {
     s[a] || (s[a] = {}), s[a].status = b
    }, p.updateProperty = function(a, b) {
     r[a] = b
    }, p.updateState = function(a, b) {
     q[a] = b
    }, p.toggleState = function(a) {
     q[a] = !q[a]
    }, p.updateCurrentHighlightedZone = function(a) {
     var b = q.currentHighlightedZone;
     b && a && b.id === a.id && b.name === a.name || (q.currentHighlightedZone = a)
    }, p.updateCurrentSourceText = function(a) {
     var b = l.getSource(a),
      c = void 0 !== b && b._textAvailable;
     if (c) {
      var e = Object.keys(l.getSource(a).text).length > 0;
      e || (r.isSourceLoading = !r.isSourceLoading, d.getSourceTextFile(j.sourcesTextsUrl + a + ".xml", a).then(function() {
       r.isSourceLoading = !r.isSourceLoading, r.parsedSourcesTexts.push(a)
      }))
     }
     q.currentSourceText = a
    }, p.removeAvailableVersion = function(a) {
     var b = r.availableVersions.indexOf(a);
     void 0 !== b && r.availableVersions.splice(b, 1)
    }, p.addAvailableVersion = function(a) {
     var b = r.availableVersions.indexOf(a); - 1 === b && r.availableVersions.push(a)
    }, p.addVersion = function(a, b) {
     void 0 === b ? q.currentVersions.push(a) : q.currentVersions.splice(b, 0, a), p.removeAvailableVersion(a);
    }, p.removeVersion = function(a) {
     var b = q.currentVersions.indexOf(a);
     b >= 0 && q.currentVersions.splice(b, 1), r.availableVersions.indexOf(a) < 0 && r.availableVersions.push(a)
    }, p.switchVersions = function(a, b) {
     var c = q.currentVersions.indexOf(b),
      d = q.currentVersions.indexOf(a);
     c >= 0 ? q.currentVersions[c] = a : p.addAvailableVersion(a), q.currentVersions[d] = b, p.removeAvailableVersion(b)
    }, p.getAllVersionsNumber = function() {
     return j.versions ? j.versions.length : 0
    }, p.updateCurrentVersionEntry = function(a) {
     void 0 !== a && (q.currentVersionEntry = a)
    }, p.getCurrentVersionEntry = function(a) {
     return q.currentVersionEntry
    }, p.updateCurrentVersion = function(a) {
     void 0 !== a && -1 !== j.versions.indexOf(a) && (q.currentVersion = a)
    }, p.getCurrentVersion = function(a) {
     return q.currentVersion
    }, p.removeAvailableWitness = function(a) {
     var b = r.availableWitnesses.indexOf(a);
     void 0 !== b && r.availableWitnesses.splice(b, 1)
    }, p.updateWitnessesPage = function(a, b) {
     q.currentWitsPages[a] = b
    }, p.updateDiv = function(a, b) {
     q.currentDivs[a] = b
    }, p.addWitness = function(a) {
     q.currentWits.push(a), p.removeAvailableWitness(a)
    }, p.addWitnessAtIndex = function(a, b) {
     q.currentWits.splice(b, 0, a), p.removeAvailableWitness(a)
    }, p.removeWitness = function(a) {
     var b = q.currentWits.indexOf(a);
     b >= 0 && (q.currentWits.splice(b, 1), delete q.currentWitsPages[a]), r.availableWitnesses.indexOf(a) < 0 && r.availableWitnesses.push(a)
    }, p.switchWitnesses = function(a, b) {
     var c = q.currentWits.indexOf(b),
      d = q.currentWits.indexOf(a);
     c >= 0 && (q.currentWits[c] = a), d >= 0 && (q.currentWits[d] = b)
    }, p.updateAvailableWitnessesByVersion = function(a) {
     var b = l.getVersionEntries()._indexes.versionWitMap[a],
      c = [],
      d = [];
     if (void 0 !== b && b.length > 0) {
      for (var e = 0; e < q.currentWits.length; e++) b.indexOf(q.currentWits[e]) >= 0 && c.push(q.currentWits[e]);
      q.currentWits = c;
      for (var f = 0; f < b.length; f++) c.indexOf(b[f]) < 0 && d.push(b[f]);
      r.availableWitnesses = d
     } else if (a === j.versions[0]) {
      for (var g = l.getWitnessesList(), h = 0; h < q.currentWits.length; h++) g.indexOf(q.currentWits[h]) >= 0 && c.push(q.currentWits[h]);
      q.currentWits = c;
      for (var i = 0; i < g.length; i++) c.indexOf(g[i]) < 0 && d.push(g[i]);
      r.availableWitnesses = d
     }
     p.updateUrl()
    }, p.isViewModeAvailable = function(a) {
     for (var b = 0, c = r.availableViewModes.length; c > b; b++)
      if (r.availableViewModes[b].viewMode === a) return r.availableViewModes[b].visible
    }, p.setCurrentPage = function(a) {
     if (void 0 !== a) {
      var b = p.getState("currentDoc");
      p.updateState("currentPage", a.value), a.docs.length > 0 && a.docs.indexOf(b) < 0 && p.updateState("currentDoc", a.docs[0]), p.updateUrl()
     }
    }, p.goToNextPage = function() {
     var a = l.getPages(),
      b = p.getState("currentPage"),
      c = a[b].indexInCollection,
      d = p.getState("currentDoc"),
      e = a[c + 1];
     if (e) {
      var f = a[e];
      p.updateState("currentPage", e), f.docs.length > 0 && f.docs.indexOf(d) < 0 && p.updateState("currentDoc", f.docs[0]), f.docs.length > 1 && p.updateState("currentDoc", f.docs[0]), p.updateUrl()
     }
     return {
      newPageId: e,
      isFirst: e === a[0],
      isLast: e === a[a.length - 1]
     }
    }, p.goToPrevPage = function() {
     var a = l.getPages(),
      b = p.getState("currentPage"),
      c = a[b].indexInCollection,
      d = p.getState("currentDoc"),
      e = a[c - 1];
     if (e) {
      var f = a[e];
      p.updateState("currentPage", e), f.docs.length > 0 && f.docs.indexOf(d) < 0 && p.updateState("currentDoc", f.docs[0]), f.docs.length > 1 && p.updateState("currentDoc", f.docs[0]), p.updateUrl()
     }
     return {
      newPageId: e,
      isFirst: e === a[0],
      isLast: e === a[a.length - 1]
     }
    }, p.goToFirstPage = function() {
     var a = l.getPages(),
      b = p.getState("currentPage"),
      c = a[b].indexInCollection,
      d = p.getState("currentDoc"),
      e = a[c - c];
     if (e) {
      var f = a[e];
      p.updateState("currentPage", e), f.docs.length > 0 && f.docs.indexOf(d) < 0 && p.updateState("currentDoc", f.docs[0]), f.docs.length > 1 && p.updateState("currentDoc", f.docs[0]), p.updateUrl()
     }
     return {
      newPageId: e,
      isFirst: e === a[0],
      isLast: e === a[a.length - 1]
     }
    }, p.goToLastPage = function() {
     var a = l.getPages(),
      b = p.getState("currentDoc"),
      c = a[a.length - 1];
     if (c) {
      var d = a[c];
      p.updateState("currentPage", c), d.docs.length > 0 && d.docs.indexOf(b) < 0 && p.updateState("currentDoc", d.docs[0]), d.docs.length > 1 && p.updateState("currentDoc", d.docs[0]), p.updateUrl()
     }
     return {
      newPageId: c,
      isFirst: c === a[0],
      isLast: c === a[a.length - 1]
     }
    }, p.isCurrentPageFirst = function() {
     var a = p.getState("currentPage"),
      b = l.getPages();
     return a === b[0]
    }, p.isCurrentPageLast = function() {
     var a = p.getState("currentPage"),
      b = l.getPages();
     return a === b[b.length - 1]
    }, p.updateParams = function(a) {
     var b, c, d, e, f, g, h = j.defaultViewMode,
      i = j.defaultEdition,
      k = [],
      n = {};
     void 0 !== a.viewMode && p.isViewModeAvailable(a.viewMode) && (h = a.viewMode);
     var o = l.getEditions();
     if (void 0 !== a.e ? l.getEdition(a.e) ? i = a.e : o && o.length > 0 && (i = o[0].value) : l.getEdition(i) ? "readingTxt" === h && "critical" === i && l.isCriticalEditionAvailable() && (i = l.getEdition("critical") ? "critical" : o[0].value) : o && o.length > 0 && (i = o[0].value), void 0 !== a.ce) b = a.ce;
     else
      for (var q = 0; !b && q < o.length;) o[q].value !== i && (b = o[q].value), q++;
     if (void 0 !== a.p && l.getEdition(a.ce)) c = a.p;
     else {
      var s = l.getPages();
      s.length > 0 && (c = s[s[0]].value || void 0)
     }
     if (void 0 !== a.d && void 0 !== l.getDocument(a.d)) d = a.d;
     else {
      var t = l.getDocuments();
      t._indexes.length > 0 && (d = t[t._indexes[0]].value || void 0)
     }
     a.s && l.getDiv(a.s) ? g = a.s : l && l.getDocument(d) && (g = l.getDocument(d).divs[0]);
     var u;
     if (void 0 !== a.ws) {
      e = a.ws.split(",").filter(function(a) {
       return 0 !== a.length
      }), u = l.getWitnessesList(), r.availableWitnesses = u.slice(0, u.length);
      for (var v in e) {
       var w = e[v].split("@")[0],
        x = e[v].split("@")[1];
       void 0 !== l.getWitness(w) && (k.push(w), p.removeAvailableWitness(w), void 0 !== x && void 0 !== l.getPage(w + "-" + x) && (n[w] = x))
      }
     } else if ("collation" === h) j.versions.length > 1 ? k = l.getVersionEntries()._indexes.versionWitMap[j.versions[0]] : (k = l.getWitnessesList(), void 0 !== k && k.length > j.maxWitsLoadTogether ? (r.availableWitnesses = k.slice(j.maxWitsLoadTogether), k = k.slice(0, j.maxWitsLoadTogether)) : r.availableWitnesses = []);
     else if (j.versions.length > 1) {
      var y = l.getVersionEntries()._indexes.versionWitMap[j.versions[0]];
      void 0 !== y && y.length > 0 && (r.availableWitnesses = y.slice(0, y.length))
     } else u = l.getWitnessesList(), r.availableWitnesses = u.slice(0, u.length);
     void 0 !== a.app && (f = a.app), void 0 !== h && p.updateState("currentViewMode", h), void 0 !== i ? p.updateState("currentEdition", i) : "collation" === h && p.updateState("currentEdition", "critical"), p.updateState("currentComparingEdition", b), void 0 !== c && p.updateState("currentPage", c), g && d && p.updateDiv(d, g), void 0 !== d && p.updateState("currentDoc", d), void 0 !== k && p.updateState("currentWits", k), n !== {} && p.updateState("currentWitsPages", n), void 0 !== f && (p.updateState("currentAppEntry", f), m.setCurrentAppEntry(f)), p.updateUrl()
    }, p.updateUrl = function() {
     var a = q.currentViewMode,
      b = q.currentDoc,
      c = "";
     if (c += void 0 === q.currentDoc ? "" : ("" === c ? "" : "&") + "d=" + q.currentDoc, c += void 0 === q.currentPage ? "" : ("" === c ? "" : "&") + "p=" + q.currentPage, c += q.currentDivs[b] ? ("" === c ? "" : "&") + "s=" + q.currentDivs[b] : "", c += void 0 === q.currentEdition ? "" : ("" === c ? "" : "&") + "e=" + q.currentEdition, c += void 0 === q.currentComparingEdition ? "" : ("" === c ? "" : "&") + "ce=" + q.currentComparingEdition, "collation" === a && void 0 !== q.currentWits && q.currentWits.length > 0) {
      "" !== c && (c += "&"), c += "ws=";
      for (var d in q.currentWits) {
       c += c.indexOf("ws=") < 0 ? "ws=" : "";
       var e = q.currentWits[d],
        f = p.getCurrentWitnessPage(e);
       c += e, void 0 !== f && (c += "@" + f), d < q.currentWits.length - 1 && (c += ",")
      }
     }
     void 0 !== q.currentAppEntry && "" !== q.currentAppEntry && ("" !== c && (c += "&"), c += "app=" + q.currentAppEntry), void 0 !== a && (window.location = "#/" + a + "?" + c)
    }, p
   }]), angular.module("evtviewer.reference", []), angular.module("evtviewer.reference").constant("REFDEFAULTS", {}).config(["evtRefProvider", "configProvider", "REFDEFAULTS", function(a, b, c) {
    var d = b.makeDefaults("ref", c);
    a.setDefaults(d)
   }]), angular.module("evtviewer.reference").provider("evtRef", function() {
    var a = this.defaults;
    this.setDefaults = function(b) {
     a = b
    }, this.$get = ["$log", function(b) {
     var c = {},
      d = {},
      e = [],
      f = 0;
     b.getInstance("reference");
     return c.build = function(b) {
      var c = b.id || f++,
       g = b.type || "link",
       h = b.target || "",
       i = {};
      return "undefined" == typeof d[c] ? (i = {
       uid: c,
       defaults: angular.copy(a),
       type: g,
       target: h
      }, d[c] = angular.extend(b.vm, i), e.push({
       id: c,
       type: g
      }), d[c]) : void 0
     }, c.destroy = function(a) {
      delete d[a]
     }, c.getListByType = function(a) {
      var b = [];
      for (var c in d) d[c].type === a && b.push(d[c]);
      return b
     }, c.getById = function(a) {
      angular.forEach(d, function(b) {
       return b.uid === a ? b : void 0
      })
     }, c
    }]
   }), angular.module("evtviewer.reference").controller("RefCtrl", ["$log", "evtRef", "parsedData", "evtDialog", "evtHighlight", "evtInterface", "$timeout", "evtCommunication", "evtTabsContainer", function(a, b, c, d, e, f, g, h, i) {
    var j = this;
    a.getInstance("reference");
    j.handleRefClick = function(a) {
     if ("biblRef" === j.type || "biblio" === j.type || "#" === j.target.substr(0, 1)) {
      var b = j.target.replace("#", ""),
       i = c.getBibliographicRefById(b);
      i ? (f.updateState("secondaryContent", "toc"), d.openByType("toc"), f.updateProperty("tabsContainerOpenedContent", "bibliography"), e.setHighlighted(b), g(function() {
       e.setHighlighted("")
      }, 2500)) : h.err("MESSAGES.REFERENCE_NOT_FOUND", "", "405", !0)
     } else if (j.target && "" !== j.target) {
      var k = j.target.indexOf("http") < 0 ? "http://" + j.target : j.target;
      window.open(k, "_blank")
     }
    }, j.destroy = function() {
     var a = j.uid;
     b.destroy(a)
    }
   }]), angular.module("evtviewer.reference").directive("ref", ["evtRef", function(a) {
    return {
     restrict: "C",
     scope: {
      target: "@",
      type: "@"
     },
     replace: !0,
     transclude: !0,
     controllerAs: "vm",
     controller: "RefCtrl",
     template: '<span class="evtRef" ng-click="vm.handleRefClick($event)" ng-transclude></span>',
     link: function(b) {
      var c = a.build(b);
      b.$on("$destroy", function() {
       c && c.destroy && c.destroy()
      })
     }
    }
   }]), angular.module("evtviewer.communication", []), angular.module("evtviewer.communication").constant("COMMUNICATIONDEFAULTS", {
    mode: "xml",
    errorMsgs: {
     404: {
      title: "MESSAGES.FILE_NOT_FOUND",
      code: "404",
      msg: "MESSAGES.SOMETHING_WRONG_DURING_FILE_LOADING"
     },
     405: {
      title: "MESSAGES.MISSING_PARAMETERS",
      code: "405",
      msg: "MESSAGES.BIBL_REF_NOT_FOUND"
     },
     dataUrlEmpty: {
      title: "MESSAGES.MISSING_PARAMETERS",
      code: "404",
      msg: "MESSAGES.PATH_TO_EDITION_EMPTY"
     }
    }
   }).service("evtCommunication", ["$http", "$log", "$q", "baseData", "config", "evtDialog", "COMMUNICATIONDEFAULTS", function(a, b, c, d, e, f, g) {
    var h = {},
     i = g,
     j = b.getInstance("communication"),
     k = {
      code: "",
      title: "",
      msg: ""
     };
    return h.getExternalConfig = function(b) {
     return a.get(b).then(function(a) {
      e.extendDefault(a.data)
     }, function(a) {
      h.err("Something wrong while loading configuration file", "", a, !0)
     })
    }, h.getData = function(b) {
     return a.get(b).then(function(a) {
      return "string" == typeof a.data ? (j.log("XML Data received"), d.addXMLString(a.data)) : void 0
     }, function(a) {
      i.errorMsgs[a.status] ? h.err(i.errorMsgs[a.status].msg, b, a.status, !0) : h.err(i.errorMsgs[404].msg, b, a.status, !0)
     })
    }, h.getViscollSvgs = function(b, c) {
     return a.get(b).then(function(a) {
      return d.handleViscollSvg(a.data, c)
     }, function(a) {})
    }, h.getViscollDataModel = function(b) {
     return a.get(b).then(function(a) {
      return "string" == typeof a.data ? (j.log("XML Data received"), d.addViscollDataModel(a.data)) : void 0
     }, function(a) {
      i.errorMsgs[a.status] ? h.err(i.errorMsgs[a.status].msg, b, a.status, !0) : h.err(i.errorMsgs[404].msg, b, a.status, !0)
     })
    }, h.getViscollImageList = function(b) {
     return a.get(b).then(function(a) {
      return "string" == typeof a.data ? (j.log("XML Data received"), d.addViscollImageList(a.data)) : void 0
     }, function(a) {
      i.errorMsgs[a.status] ? h.err(i.errorMsgs[a.status].msg, b, a.status, !0) : h.err(i.errorMsgs[404].msg, b, a.status, !0)
     })
    }, h.getExternalData = function(b) {
     return a.get(b).then(function(a) {
      if ("string" == typeof a.data) {
       var c = "";
       b === e.sourcesUrl ? c = "sources" : b === e.analoguesUrl && (c = "analogues"), d.addXMLExtDocument(a.data, c), j.log("XML Data received")
      }
     }, function(a) {
      i.errorMsgs[a] ? h.err(i.errorMsgs[a].msg, b, a, !0) : h.err(i.errorMsgs[404].msg, b, a, !0)
     })
    }, h.getSourceTextFile = function(b, c) {
     return a.get(b).then(function(a) {
      "string" == typeof a.data && (d.addXMLSrcDocument(a.data, c), j.log("XML Data received"))
     }, function(a) {
      i.errorMsgs[a] ? h.err(i.errorMsgs[a].msg, b, a, !0) : h.err(i.errorMsgs[404].msg, b, a, !0)
     })
    }, h.getError = function() {
     return k
    }, h.updateError = function(a) {
     k = a
    }, h.err = function(a, b, c, d) {
     c = void 0 !== c ? c : "";
     var e = i.errorMsgs[c],
      g = {
       code: e ? e.code : c,
       msg: a && "" !== a || !e ? a : e.msg,
       info: b,
       title: e ? e.title : "MESSAGES.COMMUNICATION_ERROR "
      };
     if (h.updateError(g), d) {
      var j = f.getById("errorMsg");
      j.updateContent('{{ "' + k.msg + '" | translate }} ' + k.info), j.setTitle(k.title), j.open()
     }
    }, h
   }]), angular.module("evtviewer.translation", []), angular.module("evtviewer.translation").constant("TRANSLATIONDEFAULTS", {}).service("evtTranslation", ["TRANSLATIONDEFAULTS", "$translate", function(a, b) {
    var c, d = {},
     e = ["en", "it"];
    return d.setLanguage = function(a) {
     c = a, b.use(a)
    }, d.setLanguages = function(a) {
     e = a
    }, d.setFallbackLanguage = function(a) {
     b.fallbackLanguage(a)
    }, d.getLanguages = function() {
     return e
    }, d.getCurrentLanguage = function() {
     return c
    }, d.getUserLanguage = function() {
     var a, b, c = navigator.language;
     return c.indexOf("_") >= 0 && (b = c.split("_"), a = b[0]), c.indexOf("-") >= 0 ? (b = c.split("-"), a = b[0]) : a = c, a
    }, d.getFallbackLanguage = function() {
     return e && e.length > 0 ? e[0] : "en"
    }, d
   }]), angular.module("evtviewer.UItools", []), angular.module("evtviewer.UItools").service("evtImageTextLinking", ["evtInterface", "Utils", "parsedData", "imageViewerHandler", function(a, b, c, d) {
    var e = {};
    const f = /lb/,
     g = "line";
    e.turnOnITL = function() {
     this.activateITL(), a.setToolStatus("ITL", "active")
    }, e.turnOnHTS = function() {
     this.activateHotSpots(), a.setToolStatus("HTS", "active")
    }, e.turnOffITL = function() {
     this.deactivateITL(), a.setToolStatus("ITL", "inactive"), a.updateCurrentHighlightedZone(void 0), this.switchingOffHighlightInImage(), this.switchingOffHighlightInImageSelected()
    }, e.turnOffHTS = function() {
     this.deactivateHotSpots(), a.setToolStatus("HTS", "inactive"), a.updateCurrentHighlightedZone(void 0), this.switchingOffHighlightInImage(), this.switchingOffHighlightInImageSelected()
    }, e.activateITL = function() {
     this.prepareLines(), this.prepareZoneInImgInteractions()
    }, e.activateHotSpots = function() {
     var b = e.prepareHotSpotZones(),
      c = b.filter(function(b) {
       return b.page === a.getState("currentPage")
      });
     d.showHotSpot(c)
    }, e.prepareHotSpotZones = function() {
     for (var a = c.getZones(), b = a._indexes, d = [], e = 0; e < b.length; e++) {
      var f = b[e];
      if (f) {
       var g, h = a[f],
        i = h.corresp ? h.corresp.replace("#", "") : h.start ? h.start.replace("#", "") : f;
       g = c.getHotSpot(i), g && (h.content = g.content), d.push(h)
      }
     }
     var j = d.filter(function(a) {
      return "HotSpot" === a.rendition
     });
     return j
    }, e.deactivateITL = function() {
     var b = a.getState("currentHighlightedZone");
     b && this.changeLinesHighlightStatus(b.id, "unselect"), this.resetTextNodes()
    }, e.deactivateHotSpots = function() {
     var a = e.prepareHotSpotZones();
     d.hiddenHotSpot(a)
    }, e.prepareLines = function() {
     for (var a = document.getElementsByClassName("lb"), c = 0; c < a.length; c++) {
      var d;
      if (c === a.length - 1) {
       var e = a[c].nextSibling;
       for (d = a[c].id; e && (3 === e.nodeType || e.className && e.className.indexOf("inLine") < 0);) {
        if (3 === e.nodeType) {
         var f = document.createElement("span");
         f.className = "textNode", f.textContent = e.textContent, e.parentElement.replaceChild(f, e), e = f
        }
        this.preapareElementInLine(e, d), e = e.nextSibling || a[c].parentNode.nextSibling || void 0
       }
      } else {
       var g = a[c],
        h = a[c + 1];
       if (d = g.id, d && g && h) {
        var i = b.DOMutils.getElementsBetweenTree(g, h);
        for (var j in i) {
         var k = i[j];
         if (3 === k.nodeType) {
          var l = document.createElement("span");
          l.className = "textNode", l.textContent = k.textContent, k.parentElement.replaceChild(l, k), k = l
         }
         this.preapareElementInLine(k, d)
        }
       }
      }
     }
    }, e.preapareElementInLine = function(b, c) {
     b.className && b.className.indexOf("inLine") < 0 && (b.className += " inLine", b.setAttribute("data-line", c), b.onmouseover = function() {
      var a = this.getAttribute("data-line");
      e.changeLinesHighlightStatus(a, "over");
      var b = a.replace(f, g);
      e.highlightZoneInImage(b)
     }, b.onmouseout = function() {
      var a = this.getAttribute("data-line");
      e.changeLinesHighlightStatus(a, "out"), e.switchingOffHighlightInImage()
     }, b.onclick = function() {
      var b = this.getAttribute("data-line"),
       c = a.getState("currentHighlightedZone");
      c && "Line" === c.name && (e.changeLinesHighlightStatus(c.id, "unselect"), e.switchingOffHighlightInImage(), e.switchingOffHighlightInImageSelected()), !c || "Line" === c.name && c.id !== b ? (a.updateCurrentHighlightedZone({
       name: "Line",
       id: b
      }), e.changeLinesHighlightStatus(b, "select"), e.selectHighlightedZone(b)) : a.updateCurrentHighlightedZone(void 0)
     })
    }, e.resetTextNodes = function() {
     var a = document.getElementsByClassName("textNode");
     for (var b in a) {
      var c = a[b];
      if (c && c.textContent) {
       var d = document.createTextNode(c.textContent);
       c.parentElement.replaceChild(d, c)
      }
     }
    }, e.changeLinesHighlightStatus = function(b, c) {
     var d = "active" === a.getToolState("ITL"),
      e = a.getState("currentViewMode");
     if (d && "imgTxt" === e)
      for (var f = document.querySelectorAll("[data-line='" + b + "']"), g = 0; g < f.length; g++) switch (c) {
       case "over":
        f[g].className += " lineHover";
        break;
       case "out":
        f[g].className = f[g].className.replace(" lineHover", "") || "";
        break;
       case "select":
        f[g].className += " lineSelected";
        break;
       case "unselect":
        f[g].className = f[g].className.replace(" lineSelected", "") || ""
      }
    }, e.prepareZoneInImgInteractions = function() {
     var b = document.getElementsByClassName("line-overlay");
     if (0 == b.length)
      for (var e = c.getZones(), f = e._indexes, g = f.filter(function(a) {
        return a.includes("line")
       }), h = 0; h < g.length; h++) {
       var i = g[h],
        j = c.getZone(i);
       if (j.page === a.getState("currentPage")) {
        d.lineZone(c.getZone(i))
       }
      }
    };
    return e.highlightZoneInImage = function(b) {
     var e = "active" === a.getToolState("ITL");
     if (e) {
      var f = c.getZone(b);
      f && d.highlightOverlay(f)
     }
    }, e.switchingOffHighlightInImage = function() {
     d.turnOffOverlay()
    }, e.switchingOffHighlightInImageSelected = function() {
     d.turnOffOverlaySelected()
    }, e.selectHighlightedZone = function(b) {
     var e = "active" === a.getToolState("ITL");
     if (e) {
      var h = c.getZone(b.replace(f, g));
      d.turnOffOverlaySelected(), d.highlightSelectedOverlay(h, b.replace(f, g)), d.moveToZone(h)
     }
    }, e
   }]), angular.module("evtviewer.UItools").service("evtPinnedElements", ["Utils", "parsedData", function(a, b) {
    var c = {},
     d = {
      _indexes: [],
      _indexesByType: {
       _types: []
      }
     },
     e = [];
    return c.getElementsFromCookies = function() {
     var a = document.cookie.split(";");
     for (var d in a) {
      var e = a[d].split("=");
      if ("pinned" === e[0].trim())
       for (var f = JSON.parse(e[1]), g = 0; g < f._indexes.length; g++) {
        var h = f._indexes[g],
         i = f[h],
         j = !1;
        i && ("criticalApparatusEntry" === i.type ? j = void 0 !== b.getCriticalEntryById(h) : i.type.indexOf("namedEntity") >= 0 && (j = void 0 !== b.getNamedEntity(h)), j && c.addElement(f[h]))
       }
     }
    }, c.addElement = function(a) {
     d[a.id] = a, d._indexes.push(a.id), void 0 === d._indexesByType[a.type] && (d._indexesByType[a.type] = [], d._indexesByType._types.push(a.type)), d._indexesByType[a.type].push(a.id), document.cookie = "pinned=" + JSON.stringify(d) + "; 1"
    }, c.removeElement = function(a) {
     var b = d._indexes.indexOf(a.id);
     if (d._indexes.splice(b, 1), d._indexesByType[a.type]) {
      var c = d._indexesByType[a.type].indexOf(a.id);
      if (d._indexesByType[a.type].splice(c, 1), 0 === d._indexesByType[a.type].length) {
       delete d._indexesByType[a.type];
       var e = d._indexesByType._types.indexOf(a.type);
       d._indexesByType._types.splice(e, 1)
      }
     }
     delete d[a.id], document.cookie = "pinned=" + JSON.stringify(d) + "; 1"
    }, c.getPinnedData = function() {
     return d
    }, c.getPinned = function() {
     return d._indexes
    }, c.getAvailablePinnedTypes = function() {
     return d._indexesByType._types
    }, c.getPinnedByType = function(a) {
     return d._indexesByType[a]
    }, c.getPinnedElement = function(a) {
     return d[a]
    }, c.getPinnedElementType = function(a) {
     return d[a].type
    }, c.isPinned = function(a) {
     return void 0 !== d[a]
    }, c.addVisibleType = function(a) {
     e.indexOf(a) < 0 && e.push(a)
    }, c.removeVisibleType = function(a) {
     var b = e.indexOf(a);
     b >= 0 && e.splice(b, 1)
    }, c.setAllTypesVisible = function() {
     e = c.getAvailablePinnedTypes()
    }, c.resetVisibleTypes = function() {
     e = []
    }, c.getVisibleTypes = function() {
     return e
    }, c
   }]), angular.module("evtviewer.box", []), angular.module("evtviewer.box").constant("BOXDEFAULTS", {
    menuClosed: !1
   }).config(["evtBoxProvider", "configProvider", "BOXDEFAULTS", function(a, b, c) {
    var d = b.makeDefaults("box", c);
    a.setDefaults(d)
   }]), angular.module("evtviewer.box").provider("evtBox", function() {
    var a = this.defaults;
    this.setDefaults = function(b) {
     a = b
    }, this.$get = ["$log", "$q", "$timeout", "config", "parsedData", "evtParser", "evtCriticalParser", "evtCriticalApparatusParser", "xmlParser", "evtInterface", "evtImageTextLinking", "evtNamedEntityRef", "evtGenericEntity", "evtApparatuses", "evtSourcesApparatus", function(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
     var q = {},
      r = {},
      s = [],
      t = 0,
      u = b.getInstance("box"),
      v = function(a, b) {
       var c = this;
       return c.state[a] = b, c.state[a]
      },
      w = function(a) {
       var b = this;
       return b.state[a]
      },
      x = function() {
       var a = this.uid;
       delete r[a]
      },
      y = function(a, b) {
       var c = this,
        d = c.state.filters;
       void 0 === d[a] && (d[a] = {
        name: a,
        any: !0,
        totActive: 0,
        values: {
         length: 0
        }
       }), void 0 === d[a].totActive && (d[a].totActive = 0);
       var e = d[a].values;
       void 0 === e[b] ? (e[e.length] = b, e[b] = {
        name: b,
        active: !0,
        color: f.getCriticalEntriesFilterColor(a, b)
       }, e.length++) : e[b].active = !e[b].active, e[b].active ? (d[a].totActive++, d._totActive++) : (d[a].totActive--, d._totActive--), d[a].any = 0 === d[a].totActive
      },
      z = function(a) {
       var b = this;
       b.state.filters[a].values = {
        length: 0
       }, b.state.filters._totActive -= b.state.filters[a].totActive, b.state.filters[a].totActive = 0
      },
      A = function() {
       var a = this;
       void 0 !== a.state.topBoxOpened && (a.state.topBoxOpened = !a.state.topBoxOpened)
      },
      B = function() {
       var a = this;
       void 0 !== a.state.filterBox && (a.state.filterBox = !a.state.filterBox)
      },
      C = function(a) {
       var b = this;
       b && (b.topBoxContent = a)
      },
      D = function() {
       var a = this;
       return "font-size:" + a.state.fontSize + "%" || ""
      },
      E = function() {
       var a = this;
       a.state.fontSize = parseInt(a.state.fontSize) + 4
      },
      F = function() {
       var a = this;
       a.state.fontSize = parseInt(a.state.fontSize) - 4
      },
      G = function() {
       var a = this;
       a.state.fontSize = "100"
      },
      H = function() {
       return "active" === k.getToolState("ITL")
      },
      I = function() {
       for (var a = m.getActiveEntityTypes(), b = "", c = 0; c < a.length; c++) b += a[c] + "-active ";
       return b
      },
      J = function() {
       var a = this,
        b = "";
       return 0 === a.bottomMenuList.buttons.length && 0 === a.bottomMenuList.selectors.length && (b = "noBottomMenu"), b
      };
     return q.build = function(b, i) {
      var j, m, o = i.id || t++,
       q = i.model,
       K = i.type || "default",
       L = i.edition,
       M = {
        selectors: [],
        buttons: [],
        appLabels: []
       },
       N = {
        selectors: [],
        buttons: []
       },
       O = '<span class="alert-msg">No info available</span>',
       P = {
        topBoxOpened: !1,
        fontSizeBtn: !1,
        fontSize: "100",
        topBoxContent: "",
        searchBox: !1
       },
       Q = [],
       R = !0,
       S = {
        fontSizeBtn: [{
         title: "BUTTONS.FONT_RESET",
         label: "",
         icon: "font-size-reset",
         type: "fontSizeReset"
        }, {
         title: "BUTTONS.FONT_DECREASE",
         label: "",
         icon: "font-size-minus",
         type: "fontSizeDecrease"
        }, {
         title: "BUTTONS.FONT_INCREASE",
         label: "",
         icon: "font-size-plus",
         type: "fontSizeIncrease"
        }]
       },
       T = {
        osdBtn: [{
         title: "BUTTONS.ZOOM-RESET",
         label: "",
         icon: "zoom-reset",
         type: "zoomReset"
        }, {
         title: "BUTTONS.ZOOM-OUT",
         label: "",
         icon: "zoom-out",
         type: "zoomOut"
        }, {
         title: "BUTTONS.ZOOM-IN",
         label: "",
         icon: "zoom-in",
         type: "zoomIn"
        }]
       },
       U = {};
      if ("undefined" == typeof r[o]) {
       var V;
       switch (K) {
        case "image":
         M.selectors.push({
          id: "page_" + o,
          type: "page",
          initValue: k.getState("currentPage")
         }), f.isITLAvailable() && (M.buttons.push({
          title: "BUTTONS.IMAGE_TEXT_LINKING",
          label: "",
          icon: "itl",
          type: "itl"
         }), M.buttons.push({
          title: "BUTTONS.HOTSPOTS",
          label: "",
          icon: "hts",
          type: "hts"
         })), M.buttons.push({
          title: "BUTTONS.MS",
          label: "BUTTONS.MSD",
          type: "msDesc"
         }), m = function() {
          b.vm.isLoading = !0;
          var a = k.getState("currentPage"),
           c = a ? f.getPage(a) : void 0,
           d = c ? c.source : "";
          d = "" === d ? e.singleImagesUrl + a + ".jpg" : d, b.vm.content = '<img src="' + d + '" alt="Image of page ' + a + " of " + k.getState("currentDoc") + "\" onerror=\"this.setAttribute('src', 'images/fol_214v.jpg')\"/>";
          var g = "",
           h = f.getZones();
          for (var i in h._indexes) {
           var j = h[h._indexes[i]];
           if (j && j.page === a) {
            if (g += '<div class="zoneInImg" data-zone-id="' + j.id + '" data-zone-name="' + j.rendition + '"', j.corresp && "" !== j.corresp) {
             var l = j.corresp.replace("#", "");
             g += ' data-corresp-id="' + l + '"', "Line" === j.rendition ? g += ' data-line="' + l + '"' : "HotSpot" === j.rendition && (g += ' data-hs="' + l + '"')
            }
            g += ">" + j.id + " (" + j.lrx + ", " + j.lry + ") (" + j.ulx + ", " + j.uly + ") </div>"
           }
          }
          b.vm.content += g, b.vm.isLoading = !1
         };
         break;
        case "text":
         if ("mainText" === o || "mainText1" === o ? (N.buttons.push({
           title: "Search",
           label: "Search",
           icon: "search",
           type: "searchInternal",
           show: function() {
            return !0
           },
           disabled: function() {
            return !0
           }
          }), N.buttons.push({
           title: "Create index for enable search",
           label: "Create index",
           icon: "",
           type: "searchIndex",
           show: function() {
            return !0
           }
          })) : N.buttons.push({
           title: "Search",
           label: "Search",
           icon: "search",
           type: "searchInternal",
           show: function() {
            return !0
           },
           disabled: function() {
            return !0
           }
          }), (e.showDocumentSelector && f.getDocuments()._indexes.length > 0 || f.getDocuments()._indexes.length > 1) && M.selectors.push({
           id: "document_" + o,
           type: "document",
           initValue: k.getState("currentDoc")
          }), f.isCriticalEditionAvailable()) {
          if (f.getDivs().length > 0) {
           var W = k.getState("currentDocument"),
            X = W ? k.getState("currentDivs")[W] || f.getDocument(W).divs.find(function(a) {
             return "body" === f.getDiv(a).section
            }) : f.getDocument(f.getDocuments()._indexes[0]).divs.find(function(a) {
             return "body" === f.getDiv(a).section
            });
           X && M.selectors.push({
            id: "div_" + o,
            type: "div",
            initValue: X
           })
          }
          M.buttons.push({
           title: "BUTTONS.WITNESSES_LIST",
           label: "",
           icon: "witnesses",
           type: "witList"
          }), "collation" === k.getState("currentViewMode") && e.versions.length > 1 && Object.keys(f.getVersionEntries()._indexes.versionWitMap > 0) && M.selectors.push({
           id: "version_" + o,
           type: "version",
           initValue: k.getState("currentVersion")
          })
         } else M.selectors.push({
          id: "page_" + o,
          type: "page",
          initValue: k.getState("currentPage")
         });
         (e.showEditionLevelSelector && e.availableEditionLevel.length > 0 || e.availableEditionLevel.length > 1) && ("comparing" === b.subtype ? M.selectors.push({
          id: "comparingEditionLevel_" + o,
          type: "comparingEdition",
          initValue: k.getState("currentComparingEdition")
         }) : M.selectors.push({
          id: "editionLevel_" + o,
          type: "edition",
          initValue: k.getState("currentEdition")
         })), M.buttons.push({
          title: "BUTTONS.INFO_ABOUT_TEXT",
          label: "BUTTONS.INFO",
          icon: "info-alt",
          type: "front"
         }), Q = f.getCriticalEntriesFiltersCollection(), Q.forLemmas > 0 && (M.buttons.push({
          title: "BUTTONS.COLOR_KEY",
          label: "",
          icon: "color-legend",
          type: "colorLegend"
         }), N.buttons.push({
          title: "BUTTONS.FILTERS",
          label: "BUTTONS.FILTERS",
          icon: "filters",
          type: "toggleFilterApp",
          show: function() {
           return "critical" === i.edition
          }
         }), Q = Q.filters), e.namedEntitiesSelector && N.selectors.push({
          id: "namedEntities_" + o,
          type: "named-entities",
          initValue: "NONE",
          multiselect: !0
         }), P.filters = {
          _totActive: 0
         }, P.filterBox = !1, P.docId = k.getState("currentDoc"), e.toolHeatMap && N.buttons.push({
          title: "BUTTONS.HEAT_MAP",
          label: "BUTTONS.HEAT_MAP",
          icon: "heatmap",
          type: "heatmap",
          show: function() {
           return "text" === i.type && "critical" === i.edition
          }
         }), N.buttons.push({
          title: "BUTTONS.FONT_CHANGE",
          label: "",
          icon: "font-size",
          type: "fontSizeTools",
          show: function() {
           return !0
          }
         }), m = function() {
          b.vm.isLoading = !0;
          var a, j = [],
           m = "active" === k.getToolState("ITL"),
           o = "<span class=\"alert-msg alert-msg-error\">{{ 'MESSAGES.ERROR_IN_PARSING_TEXT' | translate }} <br /> {{ 'MESSAGES.TRY_DIFFERENT_BROWSER_OR_CONTACT_DEVS' | translate }}</span>",
           p = "<span class=\"alert-msg alert-msg-error\">{{ 'MESSAGES.TEXT_NOT_AVAILABLE' | translate }}</span>";
          if (b.vm.edition && "critical" === b.vm.edition && !i.version) {
           if (a = f.getCriticalText(b.vm.state.docId)) b.vm.content = a || p, b.vm.isLoading = !1, d(function() {
            n.highlightActiveTypes()
           });
           else if (a = f.getDocument(b.vm.state.docId), void 0 !== a) try {
            e.versions.length > 2 ? j.push(h.parseCriticalText(a.content, b.vm.state.docId, e.versions[0]).promise) : j.push(h.parseCriticalText(a.content, b.vm.state.docId).promise), c.all(j).then(function() {
             b.vm.content = f.getCriticalText(b.vm.state.docId) || p, b.vm.isLoading = !1, d(function() {
              n.highlightActiveTypes()
             })
            })
           } catch (q) {
            u.log(q), V = o, b.vm.isLoading = !1
           }
          } else if (b.vm.edition && "critical" === b.vm.edition && b.vm.version) {
           var r = k.getState("currentDoc");
           if (a = b.vm.version === e.versions[0] ? f.getCriticalText(r) || void 0 : f.getVersionText(i.version, r) || void 0, void 0 === a) {
            a = f.getDocument(b.vm.state.docId);
            try {
             j.push(h.parseCriticalText(a.content, b.vm.state.docId, b.vm.version).promise), c.all(j).then(function() {
              e.versions[0] === b.vm.version ? b.vm.content = f.getCriticalText(b.vm.state.docId) || p : b.vm.content = f.getVersionText(i.version, r) || p, b.vm.isLoading = !1
             })
            } catch (q) {
             u.log(q), V = o, b.vm.isLoading = !1
            }
           } else b.vm.content = a || p, b.vm.isLoading = !1
          } else {
           var s = k.getState("currentPage"),
            t = k.getState("currentDoc"),
            v = "comparing" === b.subtype ? k.getState("currentComparingEdition") : k.getState("currentEdition");
           if (a = f.getPageText(s, t, v), void 0 === a) {
            a = f.getPageText(s, t, "original");
            try {
             j.push(g.parseTextForEditionLevel(s, t, v, a).promise), c.all(j).then(function() {
              b.vm.content = f.getPageText(s, t, v) || p, b.vm.isLoading = !1, m && d(function() {
               l.prepareLines(), l.prepareZoneInImgInteractions()
              }), d(function() {
               n.highlightActiveTypes()
              })
             })
            } catch (q) {
             u.log(q), V = o, b.vm.isLoading = !1
            }
           } else b.vm.content = a || p, b.vm.isLoading = !1, m && d(function() {
            l.prepareLines(), l.prepareZoneInImgInteractions()
           }), d(function() {
            n.highlightActiveTypes()
           });
           b.vm.isLoading = !1
          }
         };
         break;
        case "witness":
         var Y = void 0 !== i.witPage && "" !== i.witPage ? i.witness + "-" + i.witPage : "";
         if (M.selectors.push({
           id: "witnesses_" + o,
           type: "witness",
           initValue: i.witness
          }, {
           id: "page_" + o,
           type: "witness-page",
           initValue: Y
          }), f.getDivs().length > 0) {
          var W = k.getState("currentDocument"),
           X = W ? k.getState("currentDivs")[W] || f.getDocument(W).divs.find(function(a) {
            return "body" === f.getDiv(a).section
           }) : f.getDocument(f.getDocuments()._indexes[0]).divs.find(function(a) {
            return "body" === f.getDiv(a).section
           });
          X && M.selectors.push({
           id: "div_" + o + "_" + i.witness,
           type: "div",
           initValue: X
          })
         }
         M.buttons.push({
          title: "BUTTONS.INFO_ABOUT_TEXT",
          label: "BUTTONS.INFO",
          icon: "info-alt",
          type: "toggleInfoWit"
         }, {
          title: "BUTTONS.WITNESS_CLOSE",
          label: "",
          icon: "remove",
          type: "removeWit"
         }), Q = f.getCriticalEntriesFiltersCollection(), Q.forVariants > 0 && (N.buttons.push({
          title: "BUTTONS.FILTERS",
          label: "BUTTONS.FILTERS",
          icon: "filters",
          type: "toggleFilterApp",
          show: function() {
           return "true"
          }
         }), Q = Q.filters), P.filters = {
          _totActive: 0
         }, P.filterBox = !1, N.buttons.push({
          title: "BUTTONS.FONT_CHANGE",
          label: "",
          icon: "font-size",
          type: "fontSizeTools",
          show: function() {
           return !0
          }
         }), m = function() {
          b.vm.isLoading = !0;
          var a = "<span class=\"alert-msg alert-msg-error\">{{ 'MESSAGES.ERROR_IN_PARSING_TEXT' | translate }} <br /> {{ 'MESSAGES.TRY_DIFFERENT_BROWSER_OR_CONTACT_DEVS' | translate }}</span>",
           d = "<span class=\"alert-msg alert-msg-error\">{{ 'MESSAGES.TEXT_OF_WITNESS_NOT_AVAILABLE' | translate:'{ witness:  \"" + i.witness + "\" }' }}</span>";
          if (void 0 !== i.witness) {
           var e = k.getState("currentDoc"),
            g = f.getWitnessText(i.witness, e) || void 0;
           if (void 0 === g) {
            var j = f.getDocuments(),
             l = "";
            if (j._indexes.length > 0 && (l = j[e]), void 0 !== l) try {
             var m = [];
             m.push(h.parseWitnessText(l.content, e, i.witness).promise), c.all(m).then(function() {
              b.vm.content = f.getWitnessText(i.witness, e) || d, b.vm.isLoading = !1
             })
            } catch (n) {
             u.log(n), b.vm.content = a, b.vm.isLoading = !1
            } else b.vm.content = d, b.vm.isLoading = !1
           } else b.vm.content = g, b.vm.isLoading = !1
          }
         };
         break;
        case "source":
         M.selectors.push({
          id: "sources_" + o,
          type: "source",
          initValue: k.getState("currentSourceText")
         }), M.buttons.push({
          title: "BUTTONS.BIBLIOGRAPHIC_REF",
          label: "",
          icon: "info",
          type: "toggleInfoSrc"
         }), N.buttons.push({
          title: "BUTTONS.FONT_CHANGE",
          label: "",
          icon: "font-size",
          type: "fontSizeTools",
          show: function() {
           return !0
          }
         }), m = function() {
          b.vm.isLoading = !0;
          var a = "<span class=\"alert-msg alert-msg-error\">{{ 'MESSAGES.ERROR_IN_PARSING_TEXT' | translate }} <br /> {{ 'MESSAGES.TRY_DIFFERENT_BROWSER_OR_CONTACT_DEVS' | translate }}</span>",
           d = "<span class=\"alert-msg alert-msg-error\">{{ 'MESSAGES.TEXT_OF_SOURCE_NOT_AVAILABLE' | translate:'{ source:  \"" + b.vm.source + "\" }' }}</span>",
           e = f.getSource(b.vm.source),
           g = e ? e.text : void 0;
          if (e && 0 !== Object.keys(e.text).length && void 0 !== g) b.vm.content = g, b.vm.isLoading = !1;
          else {
           var i = f.getSourceDocument(b.vm.source);
           if (void 0 !== i) try {
            var j = [];
            j.push(h.parseSourceText(i.content, b.vm.source).promise), c.all(j).then(function() {
             b.vm.content = f.getSource(b.vm.source).text || d, b.vm.isLoading = !1
            });
            var l = p.getSource(f.getSource(k.getState("currentSourceText")));
            l && C(l)
           } catch (m) {
            u.log(m), b.vm.content = a, b.vm.isLoading = !1
           } else b.vm.content = a, b.vm.isLoading = !1
          }
         };
         break;
        case "version":
         f.getVersionEntries()._indexes.versionId[i.version];
         M.selectors.push({
          id: "version_" + o,
          type: "version",
          initValue: i.version
         }), k.getAllVersionsNumber() > 2 && M.buttons.push({
          title: "BUTTONS.VERSION_CLOSE",
          label: "",
          icon: "remove",
          type: "removeVer"
         }), N.buttons.push({
          title: "BUTTONS.FONT_CHANGE",
          label: "",
          icon: "font-size",
          type: "fontSizeTools",
          show: function() {
           return !0
          }
         }), m = function() {
          b.vm.isLoading = !0;
          var a = "<span class=\"alert-msg alert-msg-error\">{{ 'MESSAGES.ERROR_IN_PARSING_TEXT' | translate }} <br /> {{ 'MESSAGES.TRY_DIFFERENT_BROWSER_OR_CONTACT_DEVS' | translate }}</span>",
           d = "<span class=\"alert-msg alert-msg-error\">{{ 'MESSAGES.TEXT_OF_VERSION_NOT_AVAILABLE' | translate:'{ version:  \"" + i.version + "\" }' }}</span>";
          if (void 0 !== i.version) {
           var e = k.getState("currentDoc"),
            g = f.getVersionText(i.version, e) || void 0;
           if (void 0 === g) {
            var j = f.getDocuments(),
             l = "";
            if (j._indexes.length > 0 && (l = j[e]),
             void 0 !== l) try {
             var m = [];
             m.push(h.parseCriticalText(l.content, e, i.version).promise), c.all(m).then(function() {
              b.vm.content = f.getVersionText(i.version, e) || d, b.vm.isLoading = !1
             })
            } catch (n) {
             u.log(n), b.vm.content = a, b.vm.isLoading = !1
            } else b.vm.content = d, b.vm.isLoading = !1
           } else b.vm.content = g, b.vm.isLoading = !1
          }
         };
         break;
        case "tdhop":
         if (M.buttons.push({
           title: "BUTTONS.IMAGE_TEXT_LINKING",
           label: "",
           icon: "itl",
           type: "itl"
          }), M.buttons.push({
           title: "BUTTONS.HOTSPOTS",
           label: "",
           icon: "hts",
           type: "hts"
          }), M.buttons.push({
           title: "BUTTONS.3D",
           label: "BUTTONS.OBJ",
           type: "objDesc"
          }), e.showObjectSelector) {
          var Z = JSON.stringify(e.tdhopViewerOptions.Models);
          M.selectors.push({
           id: "model_" + q,
           type: "model",
           initValue: Z
          })
         }
         m = function() {
          b.vm.isLoading = !0;
          "<span class=\"alert-msg alert-msg-error\">{{ 'MESSAGES.TEXT_OF_SOURCE_NOT_AVAILABLE' | translate:'{ source:  \"" + b.vm.source + "\" }' }}</span>";
          b.vm.content = V, b.vm.isLoading = !1
         };
         break;
        default:
         R = !1, "pinnedBoard" === K ? (M.buttons.push({
          title: "BUTTONS.BOARD_CLOSE",
          label: "",
          icon: "remove",
          type: "closePinned"
         }), e.toolPinAppEntries && N.selectors.push({
          id: "pinnedFilter_" + o,
          type: "pinned-filter",
          initValue: "NONE",
          multiselect: !0
         })) : M.buttons.push({
          title: "BUTTONS.BOX_CLOSE",
          label: "",
          icon: "remove",
          type: "removeBox"
         }), m = function(a) {
          b.vm.content = a
         }
       }
       return U = {
        currentEdition: L,
        uid: o,
        defaults: angular.copy(a),
        topMenuList: M,
        bottomMenuList: N,
        content: j,
        topBoxContent: O,
        state: P,
        appFilters: Q,
        isLoading: R,
        genericTools: S,
        osdTools: T,
        updateContent: m,
        updateTopBoxContent: C,
        updateState: v,
        getState: w,
        destroy: x,
        toggleCriticalAppFilter: y,
        toggleFilterBox: B,
        toggleTopBox: A,
        clearFilter: z,
        fontSize: D,
        fontSizeIncrease: E,
        fontSizeDecrease: F,
        fontSizeReset: G,
        getNamedEntitiesActiveTypes: I,
        getAdditionalClass: J,
        isITLactive: H
       }, r[o] = angular.extend(i, U), s.push({
        id: o,
        type: K
       }), r[o]
      }
     }, q.getById = function(a) {
      return "undefined" !== r[a] ? r[a] : void 0
     }, q.getList = function() {
      return s
     }, q.getListByType = function(a) {
      var b = [];
      for (var c in r) r[c].type === a && b.push(r[c]);
      return b
     }, q.getElementByValueOfParameter = function(a, b) {
      var c;
      for (var d in r) r[d][a] === b && (c = r[d]);
      return c
     }, q.alignScrollToApp = function(a) {
      for (var b in r) void 0 !== r[b].scrollToAppEntry && r[b].scrollToAppEntry(a)
     }, q.alignScrollToQuote = function(a, b) {
      for (var c in r) void 0 !== r[c].scrollToQuotesEntry && ("source" === r[c].type ? r[c].scrollToQuotesEntry(b) : r[c].scrollToQuotesEntry(a))
     }, q.alignScrollToAnalogue = function(a) {
      for (var b in r) void 0 !== r[b].scrollToAnaloguesEntry && r[b].scrollToAnaloguesEntry(a)
     }, q.getEditionById = function(a) {
      return r[a].edition
     }, q.getState = function(a, b) {
      return r[a].state[b]
     }, q.updateState = function(a, b, c) {
      r[a].state[b] = c
     }, q
    }]
   }), angular.module("evtviewer.box").directive("box", ["$timeout", "evtBox", "evtInterface", "xmlParser", "config", "parsedData", "evtSearchResults", "evtSearchBox", "evtVirtualKeyboard", "evtButtonSwitch", function(a, b, c, d, e, f, g, h, i, j) {
    return {
     restrict: "E",
     scope: {
      id: "@",
      type: "@",
      subtype: "@",
      witness: "@",
      witpage: "@",
      edition: "@",
      source: "@",
      version: "@"
     },
     transclude: !0,
     templateUrl: "src/box/box.dir.tmpl.html",
     link: function(k, l, m) {
      k.vm = {
       id: k.id,
       type: k.type,
       subtype: k.subtype,
       witness: k.witness,
       witPage: k.witpage,
       edition: k.edition,
       source: k.source,
       version: k.version
      };
      var n, o, p = b.build(k, k.vm),
       q = angular.element(l).find(".box")[0];
      a(function() {
       if (n = angular.element(l).find(".box-body")[0], o = angular.element(l).find(".box-top-box")[0], p.updateContent(), "witness" === p.type || "text" === p.type) {
        var a, b = q.scrollTop + 42,
         d = b + angular.element(q).height(),
         g = function() {
          if ("text" === p.type) {
           for (var a = angular.element(l).find(".div"), e = 0, g = !1, h = ""; e < a.length && !g;) {
            h = a[e].getAttribute("id");
            var i, j = $("span.div[id='" + h + "']").offset();
            j && (i = j.top), i && d >= i && i >= b ? g = !0 : e++
           }
           g && f.getDiv(h) && (c.updateDiv(f.getDiv(h).doc, h), c.updateUrl())
          }
         },
         h = function() {
          if ("witness" === p.type) {
           for (var a = angular.element(l).find(".pb"), e = 0, f = !1, g = ""; e < a.length && !f;) {
            g = a[e].getAttribute("data-id");
            var h, i = $("span.pb[data-id='" + g + "']").offset();
            i && (h = i.top), h && d >= h && h >= b ? f = !0 : e++
           }
           f && c.getCurrentWitnessPage(k.witness) !== id.split("-")[1] && (c.updateWitnessPage(k.witness, id.split("-")[1]), c.updateUrl())
          }
         },
         i = function() {
          f.getDivs().length > 0 && g(), f.getPages().length > 0 && h()
         };
        angular.element(n).on("DOMMouseScroll mousewheel scroll", function() {
         a && window.clearTimeout(a), a = window.setTimeout(i(), 1e3)
        });
        var j;
        angular.element(o).on("DOMMouseScroll mousewheel scroll", function() {
         j && window.clearTimeout(j), j = window.setTimeout(i(), 1e3)
        })
       }
       "witness" === p.type, s(k, e.xsltUrl)
      });
      var r = function(a) {
        var b;
        b = window.ActiveXObject ? new ActiveXObject("Msxml2.XMLHTTP") : new XMLHttpRequest, b.open("GET", a, !1);
        try {
         b.responseType = "msxml-document"
        } catch (c) {}
        return b.send(""), b.responseXML
       },
       s = function(a, b) {
        if ("" !== b) {
         var c = d.parse(k.vm.content),
          e = r(b);
         if (window.ActiveXObject) {
          var f = c.transformNode(e);
          k.vm.content = f
         } else if (document.implementation && document.implementation.createDocument) {
          var g = new XSLTProcessor;
          g.importStylesheet(e);
          var h = g.transformToFragment(c, document);
          k.vm.content = h
         }
        }
       };
      if (k.vm.getTotElementsOfType = function(a) {
        return b.getListByType(a).length
       }, "witness" === p.type || "text" === p.type || "version" === p.type) {
       k.vm.scrollToPage = function(b) {
        a(function() {
         var a = $("#" + p.uid).find("#pb_" + b),
          c = 1 * window.getComputedStyle(n, null).getPropertyValue("padding-top").replace("px", "");
         a.length > 0 && void 0 !== a[0] && (n.scrollTop = a[0].offsetTop - c)
        })
       }, k.vm.scrollToAppEntry = function(b) {
        a(function() {
         var a = $("#" + p.uid).find("[data-app-id='" + b + "']"),
          c = 1 * window.getComputedStyle(n, null).getPropertyValue("padding-top").replace("px", "");
         a.length > 0 && void 0 !== a[0] && (n.scrollTop = a[0].offsetTop - c)
        })
       };
       var t, u = c.getState("currentAppEntry");
       "witness" === p.type ? t = k.vm.witness + "-" + c.getCurrentWitnessPage(k.vm.witness) : "text" === p.type && (t = c.getState("currentPage")), k.vm.scrollToPage(t), k.vm.scrollToAppEntry(u)
      }("witness" === p.type || "text" === p.type) && (k.$watch(function() {
       return c.getState("currentDoc")
      }, function(a, b) {
       if (b !== a && k.vm.state.docId !== a)
        if (k.vm.state.docId = a, k.vm.isLoading = !0, p.updateContent(), "text" === k.vm.currentType) {
         var c = f.getDocument(a),
          d = c ? c.front : void 0,
          e = d && d.parsedContent ? d.parsedContent : "<div class=\"warningMsg\">{{ 'MESSAGES.FRONT_NOT_AVAILABLE' | translate }}</div>";
         k.vm.updateTopBoxContent(e)
        } else if ("image" === k.vm.currentType) {
        var g = f.getProjectInfo().msDesc ? f.getProjectInfo().msDesc : "<div class=\"warningMsg\">{{ 'MESSAGES.FRONT_NOT_AVAILABLE' | translate }}</div>";
        k.vm.updateTopBoxContent(g)
       }
      }, !0), k.$watch(function() {
       return k.vm.state.filters._totActive
      }, function(b, c) {
       c !== b && a(function() {
        var a = angular.element(l).find(".filters-in-box")[0],
         b = angular.element(a).height(),
         c = angular.element(l).find(".box-body > *:last-child")[0];
        angular.element(c).css("margin-bottom", b + 20 + "px")
       })
      }, !0)), ("witness" === p.type || "text" === p.type || "version" === p.type) && (k.vm.scrollToQuotesEntry = function(b) {
       a(function() {
        var a = $("#" + p.uid).find("[data-quote-id='" + b + "']"),
         c = 1 * window.getComputedStyle(n, null).getPropertyValue("padding-top").replace("px", "");
        a.length > 0 && void 0 !== a[0] && (n.scrollTop = a[0].offsetTop - c)
       })
      }, k.vm.scrollToAnaloguesEntry = function(b) {
       a(function() {
        var a = $("#" + p.uid).find("[data-analogue-id='" + b + "']"),
         c = 1 * window.getComputedStyle(n, null).getPropertyValue("padding-top").replace("px", "");
        a.length > 0 && void 0 !== a[0] && (n.scrollTop = a[0].offsetTop - c)
       })
      }, k.vm.scrollToVersionApparatus = function(b) {
       a(function() {
        var a = $("#" + p.uid).find("evt-version-apparatus-entry[data-app-id='" + b + "']");
        1 * window.getComputedStyle(n, null).getPropertyValue("padding-top").replace("px", "");
        if (a.length > 0 && void 0 !== a[0]) {
         var c = angular.element(a[0]).position().top,
          d = a[0].offsetParent.clientHeight,
          e = $("#" + p.uid).find("div[class='version-apparatus-entry']"),
          f = angular.element(e).outerHeight() || 0;
         c + f > d && (n.scrollTop += c - d + f)
        }
       })
      }), "source" === p.type && (k.vm.scrollToQuotesEntry = function(b) {
       a(function() {
        var a = $("#" + p.uid).find("[data-seg-id='" + b + "']"),
         c = 1 * window.getComputedStyle(n, null).getPropertyValue("padding-top").replace("px", "");
        a.length > 0 && void 0 !== a[0] && (n.scrollTop = a[0].offsetTop - c)
       })
      }), "text" === p.type && ("comparing" === p.subtype ? k.$watch(function() {
       return c.getState("currentComparingEdition")
      }, function(b, c) {
       c !== b && k.vm.edition !== b && (k.vm.edition = b, p.updateContent(), i.unselectCurrentKeyboard(j, p.id), a(function() {
        var a = k.id,
         b = h.getInputValue(a);
        "" !== b && g.highlightSearchResults(a, b)
       }))
      }, !0) : k.$watch(function() {
       return c.getState("currentEdition")
      }, function(b, c) {
       c !== b && k.vm.edition !== b && (k.vm.edition = b, p.updateContent(), i.unselectCurrentKeyboard(j, p.id), a(function() {
        var a = k.id,
         b = h.getInputValue(a);
        "" !== b && g.highlightSearchResults(a, b)
       }))
      }, !0), k.$watch(function() {
       var a = k.id;
       return b.getState(a, "searchBox")
      }, function(b, c) {
       b === !0 && a(function() {
        $("input").trigger("focus")
       }, 100)
      }, !0), k.$watch(function() {
       return c.getState("currentPage")
      }, function(b, c) {
       p.updateContent(), a(function() {
        var a = k.id,
         b = h.getInputValue(a);
        "" !== b && g.highlightSearchResults(a, b)
       })
      }, !0)), "image" === p.type && k.$watch(function() {
       return c.getState("currentPage")
      }, function(a, b) {
       b !== a && k.vm.state.docId !== a && (k.vm.state.pageId = a, p.updateContent())
      }, !0), "source" === p.type && (k.$watch(function() {
       return c.getProperty("isSourceLoading")
      }, function(a, b) {
       b !== a && (a || (k.vm.source = c.getState("currentSourceText"), p.updateContent()))
      }), k.$watch(function() {
       return c.getState("currentSourceText")
      }, function(a, b) {
       b !== a && c.getProperty("parsedSourcesTexts").indexOf(a) >= 0 && (k.vm.source = a, p.updateContent())
      })), "text" === p.type && "collation" === c.getState("currentViewMode") && k.$watch(function() {
       return c.getState("currentVersion")
      }, function(a, b) {
       k.vm.version = a, p.updateContent()
      }), k.$on("$destroy", function() {
       p && p.destroy()
      })
     }
    }
   }]), angular.module("evtviewer.select", []), angular.module("evtviewer.select").constant("SELECTORDEFAULTS", {
    expanded: !1,
    elementWidth: 150,
    containerMaxHeight: 170
   }).config(["evtSelectProvider", "configProvider", "SELECTORDEFAULTS", function(a, b, c) {
    var d = b.makeDefaults("select", c);
    a.setDefaults(d)
   }]), angular.module("evtviewer.select").provider("evtSelect", function() {
    var a = this.defaults;
    this.setDefaults = function(b) {
     a = b
    }, this.$get = ["$log", "config", "Utils", "parsedData", "evtInterface", "evtNamedEntityRef", "evtGenericEntity", "evtPinnedElements", "evtSourcesApparatus", function(b, c, d, e, f, g, h, i, j) {
     var k = {},
      l = {},
      m = [],
      n = 0;
     b.getInstance("select");
     return k.build = function(b, k) {
      var o, p, q, r, s, t, u = b.id || n++,
       v = b.type || "default",
       w = b.init || void 0,
       x = b.openUp || !1,
       y = b.multiselect || !1,
       z = [],
       A = {};
      if ("undefined" == typeof l[u]) {
       switch (v) {
        case "page":
         q = function(a, b) {
          if (void 0 !== b) {
           k.selectOption(b);
           var c = f.getState("currentDoc");
           f.updateState("currentPage", b.value), b.docs.length > 0 && b.docs.indexOf(c) < 0 && f.updateState("currentDoc", b.docs[0]), f.updateUrl()
          }
         }, r = function(a) {
          for (var b = [], c = 0; c < a.length; c++) b.push(a[a[c]]);
          return b
         }, s = function(a) {
          return a
         }, z = r(e.getPages());
         break;
        case "document":
         q = function(a, b) {
          if (void 0 !== b) {
           k.selectOption(b);
           var c = f.getState("currentPage");
           f.updateState("currentDoc", b.value), b.pages.length > 0 && b.pages.indexOf(c) < 0 && f.updateState("currentPage", b.pages[0]), b.divs.length > 0 && f.updateDiv(b.value, b.divs[0]), f.updateUrl()
          }
         }, r = function(a) {
          for (var b = [], c = 0; c < a._indexes.length; c++) b.push(a[a._indexes[c]]);
          return b
         }, s = function(a) {
          return a
         }, z = r(e.getDocuments());
         break;
        case "div":
         q = function(a, b) {
          if (b) {
           k.selectOption(b);
           var c = b.doc;
           f.updateDiv(c, b.value), f.updateUrl()
          }
         }, r = function(a, b, c) {
          var d = e.getDivs();
          angular.forEach(a, function(a) {
           d[a].section === c && (!d[a]._isSubDiv && d[a].subDivs.length > 0 && (d[a].type = "groupTitle"), b.push(d[a]), e.getDivs()._indexes.subDivs[a] && e.getDivs()._indexes.subDivs[a].length > 0 && r(d[a].subDivs, b, c))
          })
         }, s = function(a) {
          return a
         };
         var B = f.getState("currentDoc"),
          C = e.getDiv(f.getState("currentDivs")[B]),
          D = C ? C.section : "body";
         r(e.getDivs()._indexes.main[B], z, D);
         break;
        case "edition":
        case "comparingEdition":
         q = function(a, b) {
          if (void 0 !== b && void 0 !== a && void 0 !== a[0] && b.value !== a[0].value) {
           k.selectOption(b);
           var c, d;
           "edition" === v ? (c = "currentEdition", d = "currentComparingEdition") : "comparingEdition" === v && (c = "currentComparingEdition", d = "currentEdition");
           var e = f.getState(d);
           e === b.value && f.updateState(d, a[0].value), f.updateState(c, b.value), f.updateUrl()
          }
         }, r = function(a) {
          return a
         }, s = function(a) {
          return a
         }, z = r(e.getEditions());
         break;
        case "named-entities":
         p = w, t = {
          value: "ALL",
          label: "SELECTS.SELECT_ALL",
          title: "SELECTS.SELECT_ALL_NAMED_ENTITIES",
          additionalClass: "doubleBorderTop"
         }, q = function(a, b) {
          if (void 0 !== b)
           if (k.selectOption(b), "ALL" === b.value) {
            for (var c = z && z.length > 3 ? z.length - 2 : 0, d = 0; c > d; d++) {
             var e = z[d];
             k.isOptionSelected(e) || (k.selectOption(e), "namedEntity" === e.type ? g.addActiveType(e.value) : "groupTitle" !== e.type && h.addActiveType(e.value, e.color))
            }
            k.selectOption(b)
           } else if ("NONE" === b.value) {
           for (var f = k.optionSelected ? k.optionSelected : [], i = 0; i < f.length; i++) {
            var j = z[i];
            "ALL" !== j.value && ("namedEntity" === j.type ? g.removeActiveType(j.value) : h.removeActiveType(j.value, j.color))
           }
           k.optionSelected = [], k.selectOption(b)
          } else "namedEntity" === b.type ? k.isOptionSelected(b) ? g.addActiveType(b.value) : g.removeActiveType(b.value) : k.isOptionSelected(b) ? h.addActiveType(b.value, b.color) : h.removeActiveType(b.value, b.color)
         }, r = function(a, b) {
          var c = [];
          if (a)
           for (var d = 0; d < a.length; d++) {
            var f = a[d];
            if (f.available) {
             var g = "fa-circle";
             "namedEntity" === b && (g = e.getNamedEntityTypeIcon(f.tagName) || g);
             var h = {
              icon: g,
              type: b,
              value: f.tagName,
              label: f.label,
              title: f.label,
              color: f.color
             };
             c.push(h)
            }
           }
          return c
         }, s = function(a) {
          return a
         };
         var E = r(c.namedEntitiesToHandle, "namedEntity"),
          F = r(c.otherEntitiesToHandle, "");
         z = [], E.length > 0 && (z.push({
          label: "SELECTS.NAMED_ENTITIES",
          type: "groupTitle"
         }), z = z.concat(E)), F.length > 0 && (z.push({
          label: "SELECTS.OTHER_ENTITIES",
          type: "groupTitle"
         }), z = z.concat(F)), z.length > 0 && (z.push(t), z.push({
          value: "NONE",
          label: "SELECTS.CLEAR",
          title: "SELECTS.CLEAR_SELECTION"
         }));
         break;
        case "witness":
         p = w, q = function(a, b) {
          k.collapse(), void 0 !== a && void 0 !== a[0] ? void 0 !== b && (f.switchWitnesses(a[0].value, b.value), f.updateUrl()) : void 0 !== b && (f.addWitness(b.value), f.updateUrl())
         }, r = function(a) {
          for (var b = [], d = a._indexes.witnesses, e = 0; e < d.length; e++) {
           var g = a[d[e]],
            h = {
             value: g.id,
             label: g.id,
             title: g.description
            };
           c.versions.length > 0 && f.getProperty("availableWitnesses").indexOf(d[e]) >= 0 ? b.push(h) : c.versions.length <= 0 && b.push(h)
          }
          return b
         }, s = function(a) {
          var b = {};
          return b = {
           value: a.id,
           label: a.id,
           title: a.description
          }
         }, z = r(e.getWitnesses());
         break;
        case "witness-page":
         var G = b.$parent.vm.witness;
         p = w, q = function(a, c) {
          void 0 !== c && (k.selectOption(c), f.updateWitnessesPage(G, c.value.split("-")[1]), f.updateUrl(), b.$parent.vm.scrollToPage(c.value))
         }, r = function(a) {
          for (var b = [], c = 0; c < a.length; c++) b.push(a[a[c]]);
          return b
         }, s = function(a) {
          return a
         }, z = r(e.getWitnessPages(G));
         break;
        case "pinned-filter":
         p = w, o = [], t = {
          value: "ALL",
          label: "SELECTS.SELECT_ALL",
          title: "SELECTS.SELECT_ALL_TYPES",
          additionalClass: "doubleBorderTop"
         }, q = function(a, b) {
          if (void 0 !== b)
           if (k.selectOption(b), "ALL" === b.value) {
            for (var c = z && z.length > 3 ? z.length - 2 : 0, d = 0; c > d; d++) {
             var e = z[d];
             k.isOptionSelected(e) || k.selectOption(e)
            }
            i.setAllTypesVisible(), k.selectOption(b)
           } else "NONE" === b.value ? (k.optionSelected = [], k.selectOption(b), i.resetVisibleTypes()) : k.isOptionSelected(b) ? i.addVisibleType(b.value) : i.removeVisibleType(b.value)
         }, r = function(a) {
          var b = [];
          if (a)
           for (var c = 0; c < a.length; c++) {
            var d = a[c],
             e = {
              value: d,
              label: d,
              title: d
             };
            b.push(e)
           }
          return b.length > 0 && (b.push(t), b.push({
           value: "NONE",
           label: "SELECTS.CLEAR",
           title: "SELECTS.CLEAR_SELECTION"
          })), b
         }, s = function(a) {
          return a
         };
         var H = i.getAvailablePinnedTypes();
         z = r(H);
         break;
        case "source":
         q = function(a, b) {
          void 0 !== b && (k.selectOption(b), f.updateCurrentSourceText(b.value), f.updateState("currentSource", b.value))
         }, r = function(a) {
          for (var b = [], c = 0; c < a.length; c++) {
           var d = a[c],
            e = {
             value: d.id,
             label: j.getSourceAbbr(d),
             title: "SELECTS.SEE_FULL_TEXT"
            };
           b.push(e)
          }
          return b
         }, s = function(a) {
          var b = {};
          return b = {
           value: a.id,
           label: j.getSourceAbbr(a),
           title: "SELECTS.SEE_FULL_TEXT"
          }
         }, z = r(e.getSources()._indexes.availableTexts);
         break;
        case "version":
         p = w, q = function(a, b) {
          k.collapse(), "collation" !== f.getState("currentViewMode") ? void 0 !== a ? void 0 !== b && f.switchVersions(a[0].value, b.value) : void 0 !== b && f.addVersion(b.value) : void 0 !== b && (f.updateCurrentVersion(b.value), f.updateAvailableWitnessesByVersion(b.value))
         }, r = function(a) {
          var b = [],
           g = a._indexes.versionId;
          for (var h in g) {
           var i, j;
           if ("collation" !== f.getState("currentViewMode")) h !== c.versions[0] && "_name" !== h && (i = g[h], j = {
            value: h,
            label: d.DOMutils.decodeHTMLEntities(i),
            title: "MESSAGES.SEE_VERSION_TEXT"
           }, b.push(j));
           else {
            var k = e.getVersionEntries()._indexes.versionWitMap[h];
            void 0 !== k && k.length > 0 && (i = g[h], j = {
             value: h,
             label: d.DOMutils.decodeHTMLEntities(i),
             title: "MESSAGES.SEE_WITNESS"
            }, b.push(j))
           }
          }
          return b
         }, s = function(a) {
          var b = {},
           c = e.getVersionEntries()._indexes.versionId[a];
          return b = {
           value: a,
           label: d.DOMutils.decodeHTMLEntities(c),
           title: "MESSAGES.SEE_VERSION_TEXT"
          }
         }, z = r(e.getVersionEntries());
         break;
        case "generic":
         z = b.options, p = w, q = function(a, b) {
          k.collapse(), k.selectOption(b)
         }
       }
       return b.emptyOption && z && (!z[0] || z[0].value) && z.unshift({
        value: "",
        label: "---",
        title: ""
       }), A = {
        uid: u,
        defaults: angular.copy(a),
        callback: q,
        initValue: w,
        currentType: v,
        multiselect: y,
        openUp: x,
        smaller: b.smaller,
        selectedOption: b.selectedOption,
        optionList: z,
        optionSelected: o,
        optionSelectedValue: p,
        formatOptionList: r,
        formatOption: s
       }, l[u] = angular.extend(k, A), m.push({
        id: u,
        type: v
       }), l[u]
      }
     }, k.getById = function(a) {
      return void 0 !== l[a] ? l[a] : void 0
     }, k.getList = function() {
      return m
     }, k.expandById = function(a, b) {
      "undefined" !== l[a] && (l[a].expand(), b && k.closeAll())
     }, k.closeAll = function(a) {
      angular.forEach(l, function(b, c) {
       c !== a && b.collapse()
      })
     }, k.addOption = function(a, b) {
      "undefined" !== l[a] && l[a].optionList.push(b)
     }, k.setCallback = function(a, b) {
      "undefined" !== l[a] && (l[a].callback = b)
     }, k.destroy = function(a) {
      delete l[a]
     }, k
    }]
   }), angular.module("evtviewer.select").controller("SelectCtrl", ["$log", "$element", "$scope", "evtSelect", "parsedData", function(a, b, c, d, e) {
    var f = this;
    a.getInstance("select");
    f.expand = function() {
     f.expanded = !0
    }, f.collapse = function() {
     f.expanded = !1
    }, f.toggleExpand = function(a) {
     a || d.closeAll(f.uid), f.openUp && f.updateContainerPosition(f.currentType), f.expanded = !f.expanded
    }, f.getOptionSelected = function() {
     var a;
     return a = f.optionSelected && f.optionSelected.length > 0 ? 1 === f.optionSelected.length ? f.optionSelected[0] : {
      value: "MULTI",
      label: "SELECTS.MULTIPLE_SELECTION",
      title: "SELECTS.MULTIPLE_OPTIONS_SELECTED"
     } : {
      value: "",
      label: "SELECTS.NO_SELECTION",
      title: "SELECTS.OPEN_TO_SELECT_ELEMENT"
     }
    }, f.selectOption = function(a) {
     if (a) {
      if (f.expanded && f.toggleExpand(), "NONE" === a.value && f.multiselect && (a = {
        value: "",
        label: "SELECTS.NO_SELECTION",
        title: "SELECTS.OPEN_TO_SELECT_ELEMENT"
       }), f.multiselect) {
       var b = f.getSelectedOptionIndex(a);
       b >= 0 ? f.optionSelected.splice(b, 1) : (void 0 === f.optionSelected ? f.optionSelected = [] : f.optionSelected.length > 0 && ("" === f.optionSelected[0].value || "ALL" === f.optionSelected[0].value || "NONE" === f.optionSelected[0].value) && f.optionSelected.splice(0, 1), f.optionSelected.push(a))
      } else f.optionSelected = [a];
      f.optionSelected && f.optionSelected.length > 1 ? f.optionSelectedValue = "SELECTS.MULTIPLE_SELECTION" : f.optionSelectedValue = void 0 !== a ? a.value : void 0
     }
    }, f.getSelectedOptionIndex = function(a) {
     for (var b = f.optionSelected || [], c = 0, d = !1; c < b.length && !d;) d = b[c].value === a.value, c++;
     return d ? c - 1 : -1
    }, f.selectOptionByValue = function(a) {
     var b;
     if (void 0 !== a && "" !== a) switch (f.currentType) {
      case "page":
       b = f.formatOption(e.getPage(a));
       break;
      case "document":
       b = f.formatOption(e.getDocument(a));
       break;
      case "div":
       b = f.formatOption(e.getDiv(a));
       break;
      case "edition":
      case "comparingEdition":
       b = f.formatOption(e.getEdition(a));
       break;
      case "witness":
       b = f.formatOption(e.getWitness(a));
       break;
      case "witness-page":
       b = f.formatOption(e.getPage(a));
       break;
      case "source":
       var c, d = e.getSources()._indexes.availableTexts;
       for (var g in d) d[g].id === a && (c = d[g]);
       b = f.formatOption(c);
       break;
      case "version":
       b = f.formatOption(a);
       break;
      case "generic":
       if (f.optionList) {
        var h;
        h = f.optionList.filter(function(b) {
         return b.value === a
        }), b = h ? h[0] : void 0
       }
       break;
      default:
       if ("NONE" === a && f.multiselect) b = {
        value: "",
        label: "SELECTS.NO_SELECTION",
        title: "SELECTS.OPEN_TO_SELECT_ELEMENT"
       };
       else if (f.optionList) {
        var h;
        h = f.optionList.filter(function(b) {
         return b && b.value === a
        }), b = h && h[0] ? h[0] : f.optionList[0]
       }
     } else b = "NONE" === a && f.multiselect ? {
      value: "",
      label: "SELECTS.NO_SELECTION",
      title: "SELECTS.OPEN_TO_SELECT_ELEMENT"
     } : f.optionList[0];
     void 0 !== b && f.selectOption(b)
    }, f.isOptionSelected = function(a) {
     if (void 0 !== a) {
      if ("undefined" == typeof f.optionSelected) return;
      if (f.multiselect) {
       for (var b = f.optionSelected || [], c = 0, d = !1; c < b.length && !d;) d = b[c].value === a.value, c++;
       return d
      }
      return f.optionSelected && 1 === f.optionSelected.length && f.optionSelected[0].value === a.value
     }
    }, f.doCallback = function(a, b) {
     f.callback(a, b), c.onOptionSelected({
      option: b
     })
    }, f.destroy = function() {
     var a = f.uid;
     d.destroy(a)
    }
   }]), angular.module("evtviewer.select").directive("evtSelect", ["$timeout", "evtSelect", "evtInterface", "evtPinnedElements", "parsedData", function(a, b, c, d, e) {
    return {
     restrict: "E",
     scope: {
      id: "@",
      type: "@",
      init: "@",
      openUp: "@",
      multiselect: "@",
      options: "=",
      smaller: "@",
      emptyOption: "@",
      selectedOption: "@",
      onOptionSelected: "&"
     },
     templateUrl: "src/select/select.directive.tmpl.html",
     controllerAs: "vm",
     controller: "SelectCtrl",
     link: function(f, g) {
      var h = b.build(f, f.vm);
      if (f.vm.updateContainerPosition = function(a) {
        var b = g.find(".option_container");
        g.find(".selector"), g.find(".label_selected");
        b.css("position", "absolute");
        var c;
        c = b.height() + 2, b.css("margin-top", -c + "px")
       }, a(function() {
        if (h.openUp && h.updateContainerPosition(f.type), void 0 !== h)
         if (void 0 !== f.init && "" !== f.init) h.selectOptionByValue(f.init);
         else if (!f.multiselect) {
         var a = f.vm.optionList ? f.vm.optionList[0] : void 0;
         h.callback(void 0, a)
        }
       }), f.$watch(function() {
        return f.selectedOption
       }, function(a, b) {
        b !== a && h.selectOptionByValue(f.selectedOption)
       }, !0), "witness-page" === f.type) {
       var i = f.$parent.vm.witness;
       f.$watch(function() {
        return c.getCurrentWitnessPage(i)
       }, function(a, b) {
        b !== a && h.selectOptionByValue(i + "-" + a)
       }, !0)
      }
      "page" === f.type && f.$watch(function() {
       return c.getState("currentPage")
      }, function(a, b) {
       b !== a && h.selectOptionByValue(a)
      }, !0), "edition" === f.type && f.$watch(function() {
       return c.getState("currentEdition")
      }, function(a, b) {
       b !== a && h.selectOptionByValue(a)
      }, !0), "comparingEdition" === f.type && f.$watch(function() {
       return c.getState("currentComparingEdition")
      }, function(a, b) {
       b !== a && h.selectOptionByValue(a)
      }, !0), "source" === f.type && f.$watch(function() {
       return c.getState("currentSource")
      }, function(a, b) {
       b !== a && h.selectOptionByValue(a)
      }, !0), "document" === f.type && f.$watch(function() {
       return c.getState("currentDoc")
      }, function(a, b) {
       b !== a && h.selectOptionByValue(a)
      }, !0), "div" === f.type && f.$watch(function() {
       var a = c.getState("currentDoc");
       return c.getState("currentDivs")[a]
      }, function(a, b) {
       if (b !== a) {
        var c = e.getDiv(b),
         d = e.getDiv(a);
        c && d && (h.optionList = [], h.formatOptionList(e.getDivs()._indexes.main[d.doc], h.optionList, d.section)), h.selectOptionByValue(a)
       }
      }, !0), "version" === f.type && "collation" === c.getState("currentViewMode") && f.$watch(function() {
       return c.getState("currentVersion")
      }, function(a, b) {
       b !== a && h.selectOptionByValue(a)
      }, !0), "pinned-filter" === f.type && f.$watch(function() {
       return d.getAvailablePinnedTypes()
      }, function(b, c) {
       if (c !== b) {
        h.optionList = h.formatOptionList(b);
        var d = g.find(".selector");
        h.optionList.length > 0 ? d.show() : d.hide(), a(function() {
         var a = h.getOptionSelected();
         if ("ALL" === a.value || "MULTI" === a.value) {
          var b = {
           value: "ALL",
           label: "SELECTS.SELECTS_ALL",
           title: "SELECTS.SELECTS_ALL_TYPES",
           additionalClass: "doubleBorderTop"
          };
          h.callback(a, b)
         }
         h.updateContainerPosition(h.type)
        })
       }
      }, !0), f.$on("$destroy", function() {
       h && h.destroy()
      })
     }
    }
   }]), angular.module("evtviewer.buttonSwitch", []), angular.module("evtviewer.buttonSwitch").provider("evtButtonSwitch", function() {
    var a = this.defaults;
    this.setDefaults = function(b) {
     a = b
    }, this.$get = ["$q", "$timeout", "$log", "config", "baseData", "parsedData", "evtInterface", "evtDialog", "evtSelect", "Utils", "evtImageTextLinking", "evtSourcesApparatus", "evtBox", "evtSearch", "evtSearchBox", "evtSearchResults", "evtSearchResult", "evtVirtualKeyboard", "evtNavbar", function(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
     var u = {},
      v = {},
      w = [],
      x = 0,
      y = (d.getInstance("buttonSwitch"), function() {
       var a = this;
       a.active = !a.active
      }),
      z = function(a) {
       var b = this;
       b.active = a
      },
      A = function() {
       var a = this;
       a.disabled = !0
      },
      B = function() {
       var a = this;
       a.disabled = !1
      },
      C = function() {
       var a = this.uid;
       delete v[a]
      },
      D = function(a) {
       var b = "";
       if (!a) return "";
       switch (a.toLowerCase()) {
        case "add":
         b = "icon-evt_add";
         break;
        case "bookmark":
         b = "icon-evt_bookmark";
         break;
        case "case-sensitive":
         b = "icon-evt_case-sensitive";
         break;
        case "color-legend":
         b = "icon-evt_color-legend";
         break;
        case "close":
         b = "icon-evt_close";
         break;
        case "download":
         b = "fa fa-download";
         break;
        case "download-xml":
         b = "fa fa-file-code-o";
         break;
        case "exact-word":
         b = "icon-evt_exact-match";
         break;
        case "filter":
        case "filters":
         b = "icon-evt_filter";
         break;
        case "font-size":
         b = "icon-evt_font-size";
         break;
        case "font-size-minus":
         b = "icon-evt_font-size-minus-alt";
         break;
        case "font-size-plus":
         b = "icon-evt_font-size-plus-alt";
         break;
        case "font-size-reset":
         b = "icon-evt_font-size-reset-alt";
         break;
        case "heatmap":
         b = "icon-evt_heatmap-alt";
         break;
        case "info":
         b = "icon-evt_info";
         break;
        case "info-alt":
         b = "icon-evt_info-alt";
         break;
        case "itl":
         b = "icon-evt_link";
         break;
        case "keyboard":
         b = "icon-evt_keyboard";
         break;
        case "hts":
         b = "icon-evt_hts";
         break;
        case "language":
         b = "fa fa-language";
         break;
        case "list":
         b = "icon-evt_list";
         break;
        case "list-alt":
         b = "fa fa-list-alt";
         break;
        case "menu":
        case "menu-vert":
         b = "icon-evt_more-vert";
         break;
        case "mode-imgtxt":
         b = "icon-evt_imgtxt";
         break;
        case "mode-txttxt":
         b = "icon-evt_txttxt";
         break;
        case "reading-txt":
         b = "icon-evt_txt";
         break;
        case "mode-collation":
         b = "icon-evt_collation";
         break;
        case "mode-srctxt":
         b = "iconbis-evt_srctxt";
         break;
        case "mode-versions":
         b = "iconbis-evt_versions";
         break;
        case "mode-viscoll":
         b = "iconbis-evt_srctxt";
         break;
        case "mode-bookreader":
         b = "icon-evt_bookreader";
         break;
        case "next":
         b = "icon-evt_next";
         break;
        case "pin":
         b = "icon-evt_pin-alt-on";
         break;
        case "pin-off":
         b = "icon-evt_pin-off";
         break;
        case "pin-on":
         b = "icon-evt_pin-on";
         break;
        case "previous":
         b = "icon-evt_previous";
         break;
        case "remove":
         b = "icon-evt_close";
         break;
        case "search":
         b = "icon-evt_search";
         break;
        case "search-advanced":
         b = "icon-evt_advanced-search";
         break;
        case "search-results-hide":
         b = "icon-evt_search-results-close";
         break;
        case "search-results-show":
         b = "icon-evt_search-results-open";
         break;
        case "txt":
         b = "icon-evt_txt";
         break;
        case "v-align":
         b = "icon-evt_align";
         break;
        case "witnesses":
         b = "icon-evt_books";
         break;
        case "zoom-in":
         b = "icon-evt_zoom-in";
         break;
        case "zoom-out":
         b = "icon-evt_zoom-out";
         break;
        case "zoom-reset":
         b = "icon-evt_zoom-reset";
         break;
        case "next-page":
         b = "fa fa-caret-right";
         break;
        case "prev-page":
         b = "fa fa-caret-left";
         break;
        case "first-page":
         b = "fa fa-step-backward";
         break;
        case "last-page":
         b = "fa fa-step-forward";
         break;
        case "hide-bar":
         b = "fa fa-caret-down";
         break;
        case "show-bar":
         b = "fa fa-caret-up";
         break;
        case "thumb-nails":
         b = "fa fa-th";
         break;
        case "viscoll":
         b = "fa fa-stack-overflow";
         break;
        case "tdhop":
        case "mode-tdhop":
         b = "fa fa-cube"
       }
       return b
      };
     return u.build = function(c, d) {
      function k() {
       var a = b.defer();
       return h.updateState("indexingInProgress", !0), setTimeout(function() {
        a.resolve()
       }, 100), a.promise
      }
  
      function t() {
       var a = k();
       a.then(function() {
        var a, b, c = f.getXML();
        b = u.getByType("searchIndex")[0], b.active = !1, b.disable(), o.initSearch(c), h.setToolStatus("isDocumentIndexed", "true"), a = u.getByType("searchInternal");
        for (var d in a) a[d].disabled = !1;
        h.updateState("indexingInProgress", !1)
       })
      }
      var E = c.id || x++,
       F = c.type || "default",
       G = c.title || "",
       H = c.label || "",
       I = D(c.icon) || "",
       J = c.iconPos || "right",
       K = c.type || "",
       L = c.value || "",
       M = c.active || !1,
       N = c.disabled || !1,
       O = c.btnType || "",
       P = function() {
        console.log("TODO " + K)
       },
       Q = function() {},
       R = {};
      switch (K) {
       case "addWit":
        O = "standAlone", P = function() {
         h.updateProperty("witnessSelector", !0), c.vm.active = !1
        };
        break;
       case "alignReadings":
        break;
       case "bookmark":
        P = function() {
         var a = this;
         h.updateState("secondaryContent", "bookmark"), i.openByType("bookmark"), a.active = !a.active
        };
        break;
       case "changeViewMode":
        O = "standAlone", P = function() {
         var a = this;
         if (void 0 !== a.value) {
          if ("srcTxt" === a.value) {
           var b = h.getState("currentSourceText");
           h.updateCurrentSourceText(b)
          }
          h.updateState("currentViewMode", a.value), h.updateUrl(), "active" === h.getToolState("ITL") && ("imgTxt" === a.value ? l.activateITL() : l.deactivateITL())
         }
        };
        break;
       case "colorLegend":
        O = "toggler", P = function() {
         var a = c.$parent.vm;
         if (a.getState("topBoxOpened") && "colorLegend" === a.getState("topBoxContent")) a.toggleTopBox();
         else {
          var b = g.getCriticalEntriesFiltersCollection(),
           d = "";
          if (b.length > 0) {
           d += '<div class="colorLegend">';
           for (var e in b.filters) {
            var f = b.filters[e],
             h = "";
            for (var i in f.values) {
             var j = f.values[i].name,
              k = '<i class="colorLegend-filter-color" style="background:' + f.values[i].color + '"></i>';
             h += '<span class="colorLegend-filter-value">' + k + j + "</span>";
             www = "" ;
             www += '<span> COLOR LEGEND DIPLOMATIC EDITION</span>' 
            }
            "" !== h && (d += '<span class="colorLegend-filter-name">' + e + "</span>" + h)
           }
           d += "</div>"
          } else d = "<span>No filters available</span>";
          var l = d || "<span class=\"errorMsg\">{{ 'MESSAGES.GENERIC_ERROR' | translate }}</span>";
          a.updateTopBoxContent(l), a.updateState("topBoxContent", "colorLegend"), a.getState("topBoxOpened") || a.toggleTopBox()
         }
        }, Q = function() {
         var a = c.$parent.vm;
         a.updateState("topBoxOpened", !1)
        };
        break;
       case "closeDialog":
        P = function() {
         var a = this;
         i.closeAll(), h.updateState("secondaryContent", ""), a.active = !a.active
        };
        break;
       case "closePinned":
        P = function() {
         h.toggleState("isPinnedAppBoardOpened")
        };
        break;
       case "download-xml":
        P = function() {
         window.open(e.dataUrl, "_blank")
        };
        break;
       case "fontSizeDecrease":
        O = "standAlone", P = function() {
         var a = this;
         c.$parent.vm.fontSizeDecrease(), a.active = !a.active
        };
        break;
       case "fontSizeIncrease":
        O = "standAlone", P = function() {
         var a = this;
         c.$parent.vm.fontSizeIncrease(), a.active = !a.active
        };
        break;
       case "fontSizeReset":
        O = "standAlone", P = function() {
         var a = this;
         c.$parent.vm.fontSizeReset(), a.active = !a.active
        };
        break;
       case "fontSizeTools":
        P = function() {
         var a = c.$parent.vm.getState("fontSizeBtn") || !1;
         c.$parent.vm.updateState("fontSizeBtn", !a)
        }, Q = function() {
         c.$parent.vm.updateState("fontSizeBtn", !1)
        };
        break;
       case "front":
        O = "standAlone", P = function() {
         var a = c.$parent.vm;
         if (a.getState("topBoxOpened") && "front" === a.getState("topBoxContent")) a.toggleTopBox();
         else {
          var b, d = h.getState("currentDoc");
          if (d) {
           var e = g.getDocument(d),
            f = e ? e.front : void 0;
           b = f && f.parsedContent ? f.parsedContent : "<div class=\"warningMsg\">{{ 'MESSAGES.FRONT_NOT_AVAILABLE' | translate }}</div>", c.$parent.vm.updateTopBoxContent(b), c.$parent.vm.toggleTopBox()
          }
          var i = b || "<span class=\"errorMsg\">{{ 'MESSAGES.GENERIC_ERROR' | translate }}</span>";
          a.updateTopBoxContent(i), a.updateState("topBoxContent", "front"), a.getState("topBoxOpened") || a.toggleTopBox()
         }
        }, Q = function() {
         var a = c.$parent.vm;
         a.updateState("topBoxOpened", !1)
        };
        break;
       case "msDesc":
        O = "standAlone", P = function() {
         var a = c.$parent.vm,
          b = document.getElementsByClassName("box-top-box");
         if (b[0].setAttribute("id", "msDesc"), a.getState("topBoxOpened") && "msDesc" === a.getState("topBoxContent")) a.toggleTopBox();
         else {
          var d, e = h.getState("currentDoc");
          e && (d = g.getProjectInfo().msDesc ? g.getProjectInfo().msDesc : "<div class=\"warningMsg\">{{ 'MESSAGES.FRONT_NOT_AVAILABLE' | translate }}</div>", c.$parent.vm.updateTopBoxContent(d), c.$parent.vm.toggleTopBox());
          var f = d || "<span class=\"errorMsg\">{{ 'MESSAGES.GENERIC_ERROR' | translate }}</span>";
          a.updateTopBoxContent(f), a.updateState("topBoxContent", "msDesc"), a.getState("topBoxOpened") || a.toggleTopBox()
         }
        }, Q = function() {
         var a = c.$parent.vm;
         a.updateState("topBoxOpened", !1)
        };
        break;
       case "heatmap":
        O = "standAlone", P = function() {
         var a = c.$parent.vm.getState("heatmap") || !1;
         c.$parent.vm.updateState("heatmap", !a)
        };
        break;
       case "itl":
        M = "active" === h.getToolState("ITL"), O = "standAlone", P = function() {
         var a = this;
         a.active ? l.turnOnITL() : l.turnOffITL()
        };
        break;
       case "hts":
        M = "active" === h.getToolState("HTS"), O = "standAlone", P = function() {
         var a = this;
         a.active ? l.turnOnHTS() : l.turnOffHTS()
        };
        break;
       case "mainMenu":
        O = "standAlone", P = function() {
         var a = h.getState("mainMenu");
         h.updateState("mainMenu", !a)
        };
        break;
       case "openEntity":
        P = function() {
         var a = this;
         a.active = !a.active
        };
        break;
       case "openGlobalDialogInfo":
        P = function() {
         var a = this;
         h.updateState("secondaryContent", "globalInfo"), i.openByType("globalInfo"), a.active = !a.active
        };
        break;
       case "openGlobalDialogWitnesses":
        P = function() {
         var a = this;
         h.updateState("secondaryContent", "witnessesList"), i.openByType("witnessesList"), a.active = !a.active
        };
        break;
       case "openGlobalDialogLists":
        P = function() {
         var a = this;
         h.updateState("secondaryContent", "entitiesList"), i.openByType("entitiesList"), a.active = !a.active
        };
        break;
       case "openToc":
        O = "standAlone", P = function() {
         var a = this;
         h.updateState("secondaryContent", "toc"), i.openByType("toc"), a.active = !a.active
        };
        break;
       case "pin":
       case "pin-on":
       case "pin-off":
        P = function() {};
        break;
       case "removeWit":
        P = function() {
         var a = c.$parent.vm.witness;
         h.removeWitness(a), h.updateUrl()
        };
        break;
       case "search":
        P = function() {
         var a, b = c.$parent.id,
          d = p.getInputValue(b),
          e = "";
         r.setPlaceholder(b, e), p.setSearchedTerm(b, d), a = {
          "": function() {
           e = "Enter your query in the search box above", r.setVisibleRes(b, []), r.setPlaceholder(b, e)
          },
          "default": function() {
           var a = p.getStatus(b, "searchCaseSensitive"),
            c = p.getStatus(b, "searchExactWord"),
            e = q.getSearchResults(d, a, c),
            f = n.getEditionById(b),
            g = q.getCurrentEditionResults(e, f),
            h = q.getVisibleResults(g);
           r.setCurrentEditionResults(b, g), r.setVisibleRes(b, h)
          }
         }, (a[d] || a["default"])(), p.setStatus(b, "searchResultBox", !0), p.hideBtn(b, "searchResultsShow"), p.showBtn(b, "searchResultsHide"), s.unselectCurrentKeyboard(u, b)
        };
        break;
       case "searchIndex":
        O = "standAlone", N = function() {
         return "true" === h.getToolState("isDocumentIndexed") ? !0 : void 0
        }(), M = function() {
         return "true" === h.getToolState("isDocumentIndexed") ? !1 : void 0
        }(), P = function() {
         return "true" !== h.getToolState("isDocumentIndexed") ? t() : void(c.vm.active = !1)
        };
        break;
       case "searchResultsShow":
        P = function() {
         var a = c.$parent.id,
          b = "Enter your query in the search box above";
         r.setPlaceholder(a, b), p.updateStatus(a, "searchResultBox"), p.hideBtn(a, "searchResultsShow"), p.showBtn(a, "searchResultsHide"), s.unselectCurrentKeyboard(u, a)
        };
        break;
       case "searchResultsHide":
        P = function() {
         var a = c.$parent.id;
         p.updateStatus(a, "searchResultBox"), p.hideBtn(a, "searchResultsHide"), p.showBtn(a, "searchResultsShow"), s.unselectCurrentKeyboard(u, a)
        };
        break;
       case "searchCaseSensitive":
        O = "standAlone", P = function() {
         var a = c.$parent.id,
          b = p.getInputValue(a);
         p.updateStatus(a, "searchCaseSensitive"), q.highlightSearchResults(a, b)
        };
        break;
       case "searchInternal":
        O = "standAlone", N = function() {
         return "true" === h.getToolState("isDocumentIndexed") ? !1 : !0
        }();
        var S = function() {
         var a = c.$parent.id,
          b = n.getState(a, "searchBox");
         n.updateState(a, "searchBox", !b), p.closeBox(a, "searchResultBox"), p.showBtn(a, "searchResultsShow"), p.hideBtn(a, "searchResultsHide")
        };
        P = function() {
         return "true" === h.getToolState("isDocumentIndexed") ? S() : void(c.vm.active = !1)
        };
        break;
       case "searchAdvanced":
        O = "standAlone", P = function() {
         window.alert("Advanced search coming soon!")
        };
        break;
       case "searchVirtualKeyboard":
        O = "standAlone", P = function() {
         var a = this,
          b = c.$parent.id,
          d = s.getKeyboardId(b),
          e = $("#" + d).getkeyboard(),
          f = u.getByType("searchVirtualKeyboard");
         if (e.isOpen || a.active === !1) e.close();
         else if (e.reveal(), f.length > 1)
          for (var g in f) f[g].uid !== a.currentId && f[g].setActive(!1)
        };
        break;
       case "searchExactWord":
        O = "standAlone", P = function() {
         var a = c.$parent.id,
          b = p.getInputValue(a);
         p.updateStatus(a, "searchExactWord"), q.highlightSearchResults(a, b)
        };
        break;
       case "searchPrevResult":
        N = !0, P = function() {};
        break;
       case "searchNextResult":
        N = !0, P = function() {};
        break;
       case "searchClear":
        O = "standAlone", P = function() {
         var a, b = c.$parent.id;
         p.clearInputValue(b), a = p.getInputValue(b), q.highlightSearchResults(b, a)
        };
        break;
       case "share":
        P = function() {
         alert(window.location)
        };
        break;
       case "toggleInfoWit":
        O = "toggler", P = function() {
         var a = g.getWitness(c.$parent.vm.witness),
          b = a.description || c.$parent.vm.topBoxContent;
         c.$parent.vm.updateTopBoxContent(b), c.$parent.vm.toggleTopBox()
        }, Q = function() {
         c.$parent.vm.updateState("topBoxOpened", !1)
        };
        break;
       case "toggleFilterApp":
        P = function() {
         c.$parent.vm.toggleFilterBox()
        }, Q = P;
        break;
       case "togglePinned":
        O = "toggler", P = function() {
         h.toggleState("isPinnedAppBoardOpened")
        };
        break;
       case "witList":
        O = "toggler", P = function() {
         var a = c.$parent.vm;
         if (a.getState("topBoxOpened") && "witList" === a.getState("topBoxContent")) a.toggleTopBox();
         else {
          var b = g.getWitnessesListFormatted(),
           d = b || "<span class=\"errorMsg\">{{ 'MESSAGES.GENERIC_ERROR' | translate }}</span>";
          a.updateTopBoxContent(d), a.updateState("topBoxContent", "witList"), a.getState("topBoxOpened") || a.toggleTopBox()
         }
        }, Q = function() {
         var a = c.$parent.vm;
         a.updateState("topBoxOpened", !1)
        };
        break;
       case "toggleInfoSrc":
        O = "toggler", P = function() {
         var a = m.getSource(g.getSource(h.getState("currentSourceText")));
         if (a) {
          var b = a.bibl || c.$parent.vm.topBoxContent;
          c.$parent.vm.updateTopBoxContent(b), c.$parent.vm.toggleTopBox()
         }
        }, Q = function() {
         c.$parent.vm.updateState("topBoxOpened", !1)
        };
        break;
       case "addVer":
        O = "standAlone", P = function() {
         h.updateProperty("versionSelector", !0), c.vm.active = !1
        };
        break;
       case "removeVer":
        P = function() {
         var a = c.$parent.vm.version;
         h.removeVersion(a)
        };
        break;
       case "cropText":
        O = "toggler", P = function() {
         var a = c.$parent.vm;
         return a
        };
        break;
       case "prevPage":
       case "nextPage":
       case "firstPage":
       case "lastPage":
        P = function() {
         var a = this;
         a.active = !1, "prevPage" === K ? h.goToPrevPage() : "nextPage" === K ? h.goToNextPage() : "firstPage" === K ? h.goToFirstPage() : "lastPage" === K && h.goToLastPage()
        }, "prevPage" === K || "firstPage" === K ? N = h.isCurrentPageFirst() : ("nextPage" === K || "lastPage" === K) && (N = h.isCurrentPageLast());
        break;
       case "hideBar":
        P = function() {
         var a = this,
          b = h.getState("isNavBarOpened");
         h.updateState("isNavBarOpened", !b), a.active = !a.active
        };
        break;
       case "thumbNails":
        O = "toggler", P = function() {
         h.updateState("isVisCollOpened", !1);
         var a = u.getByType("visColl");
         a && a.forEach(function(a) {
          a.setActive(!1)
         });
         var b = h.getState("isThumbNailsOpened");
         h.updateState("isThumbNailsOpened", !b)
        };
        break;
       case "visColl":
        O = "toggler", P = function() {
         h.updateState("isThumbNailsOpened", !1);
         var a = u.getByType("thumbNails");
         a && a.forEach(function(a) {
          a.setActive(!1)
         });
         var b = h.getState("isVisCollOpened");
         h.updateState("isVisCollOpened", !b)
        }
      }
      var T = function() {
       var a = this;
       a.disabled && "false" !== a.disabled || (u.unselectAllSkipByBtnType(a.uid, "standAlone"), j.closeAll(), a.toggleActive(), a.callback && a.callback(), a.onBtnClicked && a.onBtnClicked())
      };
      return R = {
       uid: E,
       defaults: angular.copy(a),
       currentId: E,
       currentType: F,
       title: G,
       label: H,
       icon: I,
       iconPos: J,
       type: K,
       value: L,
       active: M,
       disabled: N,
       btnType: O,
       callback: P,
       onBtnClicked: c.onBtnClicked,
       doCallback: T,
       fakeCallback: Q,
       toggleActive: y,
       setActive: z,
       disable: A,
       enable: B,
       destroy: C
      }, v[E] = angular.extend(d, R), w.push({
       id: E,
       type: F
      }), v[E]
     }, u.getById = function(a) {
      return "undefined" !== v[a] ? v[a] : void 0
     }, u.getList = function() {
      return w
     }, u.getByType = function(a) {
      var b = [];
      for (var c in v) v[c].type === a && b.push(v[c]);
      return b
     }, u.unselectAll = function() {
      angular.forEach(v, function(a) {
       a.setActive(!1)
      })
     }, u.unselectAllSkipByBtnType = function(a, b) {
      angular.forEach(v, function(c) {
       c.uid !== a && b.indexOf(c.btnType) < 0 && (c.active && c.fakeCallback(), c.setActive(!1))
      })
     }, u.selectById = function(a) {
      "undefined" !== v[a] && v[a].setActive(!0)
     }, u.destroy = function(a) {
      delete v[a]
     }, u
    }]
   }), angular.module("evtviewer.buttonSwitch").directive("buttonSwitch", ["$rootScope", "evtButtonSwitch", "evtInterface", function(a, b, c) {
    return {
     restrict: "E",
     scope: {
      title: "@",
      label: "@",
      icon: "@",
      type: "@",
      value: "@",
      iconPos: "@",
      disabled: "@",
      onBtnClicked: "&"
     },
     templateUrl: "src/buttonSwitch/buttonSwitch.dir.tmpl.html",
     link: function(d, e) {
      d.vm = {};
      var f = b.build(d, d.vm);
      d.$watch(function() {
       return d.disabled
      }, function(a, b) {
       a !== b && (d.vm.disabled = a)
      }), "addWit" === d.type && (0 === c.getProperty("availableWitnesses").length && (d.vm.disabled = !0, d.vm.title = "BUTTONS.NO_WITNESSES_AVAILABLE"), d.$watch(function() {
       return c.getProperty("availableWitnesses")
      }, function(a, b) {
       a !== b && (0 === a.length ? (d.vm.disabled = !0, d.vm.title = "BUTTONS.NO_WITNESSES_AVAILABLE") : (d.vm.disabled = !1, d.vm.title = "BUTTONS.ADD_WITNESS"))
      }, !0)), "addVer" === d.type && (0 === c.getProperty("availableVersions").length && (d.vm.disabled = !0, d.vm.title = "BUTTONS.NO_VERSION_AVAILABLE"), d.$watch(function() {
       return c.getProperty("availableVersions")
      }, function(a, b) {
       a !== b && (0 === a.length ? (d.vm.disabled = !0, d.vm.title = "BUTTONS.NO_VERSION_AVAILABLE") : (d.vm.disabled = !1, d.vm.title = "BUTTONS.ADD_VERSION"))
      }, !0)), "changeViewMode" === d.type && d.$watch(function() {
       return c.getState("currentViewMode")
      }, function(a, b) {
       a === d.vm.value ? d.vm.active = !0 : d.vm.active = !1
      }, !0);
      var g;
      "search" === d.type && (g = d.$parent.id, a.$broadcast("searchBtn", {
       parentId: g,
       btn: f
      })), "searchVirtualKeyboard" === d.type && (g = d.$parent.id, a.$broadcast("keyboardBtn", {
       parentId: g,
       btn: f
      })), ("prevPage" === d.type || "firstPage" === d.type) && d.$watch(function() {
       return c.isCurrentPageFirst()
      }, function(a, b) {
       a !== b && (d.vm.disabled = a)
      }, !0), ("nextPage" === d.type || "lastPage" === d.type) && d.$watch(function() {
       return c.isCurrentPageLast()
      }, function(a, b) {
       a !== b && (d.vm.disabled = a)
      }, !0), d.$on("$destroy", function() {
       f && f.destroy()
      })
     }
    }
   }]), angular.module("evtviewer.popover", []), angular.module("evtviewer.popover").constant("POPOVERDEFAULTS", {
    expanded: !1,
    tooltipOver: !1,
    tooltipMaxHeight: 170,
    tooltipMaxWidth: 200,
    openTriggerEvent: "click"
   }).config(["evtPopoverProvider", "configProvider", "POPOVERDEFAULTS", function(a, b, c) {
    var d = b.makeDefaults("popover", c);
    a.setDefaults(d)
   }]), angular.module("evtviewer.popover").provider("evtPopover", function() {
    var a = this.defaults;
    this.setDefaults = function(b) {
     a = b
    }, this.$get = function() {
     var b = {},
      c = {},
      d = [],
      e = 0;
     return b.build = function(b, f, g) {
      var h = e++,
       i = b || "",
       j = f || "",
       k = {};
      return "undefined" == typeof c[h] ? (k = {
       uid: h,
       trigger: i,
       tooltip: j,
       expanded: angular.copy(a.expanded),
       tooltipOver: angular.copy(a.tooltipOver),
       defaults: angular.copy(a)
      }, c[h] = angular.extend(g, k), d.push({
       id: h
      }), c[h]) : void 0
     }, b.getById = function(a) {
      return "undefined" !== c[a] ? c[a] : void 0
     }, b.getList = function() {
      return d
     }, b.expandById = function(a, d) {
      "undefined" !== c[a] && (c[a].expand(), d && b.closeAll(a))
     }, b.closeAll = function(a) {
      angular.forEach(c, function(b, c) {
       void 0 === a ? b.collapse() : c !== a.toString() && b.collapse()
      })
     }, b.mouseOutAll = function(a) {
      angular.forEach(c, function(b, c) {
       c !== a.toString() && b.mouseOut()
      })
     }, b.getIdTooltipOvered = function() {
      var a = -1;
      return angular.forEach(c, function(b) {
       b.tooltipOver && (a = b.uid)
      }), a
     }, b.destroy = function(a) {
      delete c[a]
     }, b
    }
   }), angular.module("evtviewer.popover").controller("PopoverCtrl", ["$log", "$scope", "evtPopover", function(a, b, c) {
    var d = this;
    d.parentRef = ".box-body";
    a.getInstance("popover");
    this.expand = function() {
     d.expanded = !0
    }, this.collapse = function() {
     d.expanded = !1
    }, this.mouseOver = function() {
     d.over = !0
    }, this.mouseOut = function() {
     d.over = !1
    }, this.tooltipMouseOver = function() {
     d.tooltipOver = !0
    }, this.tooltipMouseOut = function() {
     d.tooltipOver = !1
    }, this.toggleExpand = function(a) {
     a || c.closeAll(d.uid), d.expanded = !d.expanded
    }, this.toggleOver = function(a) {
     a || c.mouseOutAll(d.uid), d.over = !d.over
    }, this.toggleTooltipOver = function() {
     d.tooltipOver = !d.tooltipOver
    }, this.destroy = function() {
     var a = d.uid;
     c.destroy(a)
    }, this.toggleMouseHover = function() {}, this.toggleTooltipHover = function() {}, this.triggerClick = function() {}, this.resizeTooltip = function() {}
   }]), angular.module("evtviewer.popover").directive("evtPopover", ["evtPopover", function(a) {
    return {
     restrict: "E",
     scope: {
      trigger: "@",
      tooltip: "@",
      parentRef: "@"
     },
     transclude: !0,
     templateUrl: "src/popover/popover.directive.tmpl.html",
     controllerAs: "vm",
     controller: "PopoverCtrl",
     link: function(b, c) {
      b.vm.toggleTooltipHover = function(a, b) {
       a.stopPropagation(), b.toggleTooltipOver()
      }, b.vm.toggleMouseHover = function(c, d) {
       c.stopPropagation(), "over" !== d.trigger || d.over || d.expanded || b.vm.resizeTooltip(c, d.defaults);
       var e = a.getIdTooltipOvered();
       (0 > e || e === d.uid) && d.toggleOver()
      }, b.vm.triggerClick = function(b, c) {
       b.stopPropagation(), "over" === c.trigger || c.expanded || c.resizeTooltip(b, c.defaults);
       var d = a.getIdTooltipOvered();
       (0 > d || d === c.uid) && c.toggleExpand()
      }, b.vm.resizeTooltip = function(a, d) {
       a.stopPropagation();
       var e = b.vm.parentRef;
       "undefined" != typeof b.parentRef && (e = b.parentRef);
       var f = c,
        g = angular.element(c).find("span.popover_tooltip").last(),
        h = angular.element(g).find(".popover__tooltip__before"),
        i = a.clientX,
        j = a.clientY;
       g.removeAttr("style");
       var k = f.height(),
        l = 1 * f.css("font-size").substr(0, 2) + 1,
        m = (f.width(), f.position().top),
        n = (f.position().left, g.offset().top, g.outerWidth()),
        o = g.outerHeight();
       n > d.tooltipMaxWidth && g.css({
        width: d.tooltipMaxWidth + "px",
        "max-width": d.tooltipMaxWidth + "px"
       }), g.css({
        position: "absolute"
       }), n = g.outerWidth(), o = g.outerHeight();
       var p = c.parents(e);
       0 === p.length && "undefined" == typeof b.parentRef && (e = c.parent());
       var q, r = c.parents(e).offset().left,
        s = c.parents(e).innerWidth(),
        t = i - r - n / 2;
       g.css({
        left: t + "px"
       }), t + n > s && (q = t + n - s, t = t - q - 20, g.css({
        left: t + "px"
       })), 0 > t && (t = 0, g.css({
        left: t + "px"
       }));
       var u, v, w = c.parents(e).outerHeight(),
        x = m + k + o;
       x > w ? (u = o + k + 10, k > l && (v = j - f.offset().top, u = u - v + 10), g.css({
        "margin-top": -u + "px"
       }).addClass("open-up"), h.css({
        top: g.outerHeight() + 2 + "px"
       })) : (g.removeClass("open-up"), k > l ? (v = j - f.offset().top, q = k - l - v, g.css({
        "margin-top": -q + "px"
       })) : g.css({
        "margin-top": "5px"
       }));
       var y = i - t - r - 20;
       y = 0 > y ? 0 : y, h.css({
        left: y + "px"
       }), n = g.width(), n > d.tooltipMaxWidth && g.css({
        width: d.tooltipMaxWidth + "px",
        "max-width": d.tooltipMaxWidth + "px"
       })
      };
      var d = a.build(b.trigger, b.tooltip, b.vm);
      b.$on("$destroy", function() {
       d && d.destroy()
      })
     }
    }
   }]), angular.module("evtviewer.list", []), angular.module("evtviewer.list").provider("evtList", function() {
    var a = this.defaults;
    this.setDefaults = function(b) {
     a = b
    };
    this.$get = ["parsedData", "evtInterface", function(a, b) {
     var c = {},
      d = [],
      e = function() {
       var a = this.uid;
       delete c[a]
      },
      f = function() {
       for (var a = this, b = a.visibleElements.length, c = 0; 10 > c && c < a.elementsInListKey.length;) {
        var d = a.elementsInListKey[b + c];
        d && a.visibleElements.indexOf(d) < 0 && a.visibleElements.push(d), c++
       }
      },
      g = function(b, c) {
       var d = [];
       return c && (d = a.getNamedEntitiesCollectionByNameAndPos(b, c), d = d ? d._indexes : []), d
      },
      h = function(a) {
       var b = this;
       b.selectedLetter = a, b.elementsInListKey = g(b.uid, a), b.visibleElements = b.elementsInListKey ? b.elementsInListKey.slice(0, 40) : []
      };
     return d.build = function(i, j) {
      var k = i,
       l = j.listType || "generic",
       m = {};
      if ("undefined" == typeof c[k]) {
       var n, o = b.getState("currentNamedEntity"),
        p = o ? a.getNamedEntity(o) : void 0,
        q = a.getNamedEntitiesCollectionByName(k);
       n = p && l === a.getNamedEntityType(o) ? p._listPos || void 0 : q ? q._listKeys[0] : void 0;
       var r = g(k, n),
        s = 0,
        t = p && l === a.getNamedEntityType(o) ? r.indexOf(o) : void 0,
        u = t ? t + 10 : s + 41,
        v = r ? r.slice(s, u) : [];
       return m = {
        uid: k,
        listType: l,
        listKeys: q ? q._listKeys : [],
        elements: q ? q._indexes : [],
        elementsInListKey: r,
        visibleElements: v,
        selectedLetter: n,
        loadMoreElements: f,
        selectLetter: h,
        destroy: e
       }, c[k] = angular.extend(j.vm, m), d.push({
        id: k
       }), c[k]
      }
     }, d.destroy = function(a) {
      delete c[a]
     }, d.scrollToElemById = function(a, b) {
      angular.forEach(d, function(d) {
       d.id === a && c[a].scrollToElement(b)
      })
     }, d
    }]
   }), angular.module("evtviewer.list").directive("evtList", ["$timeout", "evtList", "parsedData", "evtInterface", function(a, b, c, d) {
    return {
     restrict: "E",
     scope: {
      listId: "@",
      listType: "@"
     },
     transclude: !0,
     templateUrl: "src/list/list.dir.tmpl.html",
     link: function(a, c, e) {
      a.vm = {
       listId: a.listId,
       listType: a.listType
      };
      var f = b.build(a.listId, a);
      a.vm.scrollToElement = function(a) {
       var b = angular.element(c).find(".scrollableDiv")[0],
        d = angular.element(b).find('[data-entity-id="' + a + '"]');
       d.length > 0 && d[0] && (b.scrollTop = d[0].offsetTop), console.log(b.scrollTop)
      }, a.$watch(function() {
       return d.getState("currentNamedEntity")
      }, function(a, b) {
       a !== b && f.selectLetter(a.charAt(0))
      }), a.$on("$destroy", function() {
       f && f.destroy()
      })
     }
    }
   }]), angular.module("evtviewer.namedEntity", []), angular.module("evtviewer.namedEntity").constant("NAMEDENTITYDEFAULTS", {
    allowedTabs: ["moreInfo", "occurrences", "map"]
   }).config(["evtNamedEntityProvider", "configProvider", "NAMEDENTITYDEFAULTS", function(a, b, c) {
    var d = b.makeDefaults("namedEntity", c);
    a.setDefaults(d)
   }]), angular.module("evtviewer.namedEntity").provider("evtNamedEntity", function() {
    var a = this.defaults;
    this.setDefaults = function(b) {
     a = b
    }, this.$get = ["$timeout", "config", "parsedData", "evtNamedEntitiesParser", "baseData", "evtInterface", "evtNamedEntityRef", "evtPinnedElements", "evtDialog", "evtList", function(b, c, d, e, f, g, h, i, j, k) {
     var l = {},
      m = {},
      n = [],
      o = 0,
      p = function() {
       var a = this,
        b = d.getNamedEntity(a.entityId);
       return b.output
      },
      q = function() {
       var a = this;
       "mainText" !== a.location && (a.toggleSubContent(a._firstSubContentOpened), a.opened = !a.opened, a.toggleState())
      },
      r = function() {
       var a = this;
       a.occurrences || (a.occurrences = l.getOccurrences(a.entityId)), a.occurrencesOpened = !a.occurrencesOpened, a.toggleSection("occurrencesOpened")
      },
      s = function() {
       var a = this;
       a.moreInfoOpened = !a.moreInfoOpened, a.toggleSection("moreInfoOpened")
      },
      t = function(a) {
       var c = this;
       g.updateState("currentPage", a.pageId), g.updateState("currentDoc", a.docId), g.updateUrl(), "entitiesList" === g.getState("secondaryContent") && g.updateState("secondaryContent", ""), b(function() {
        h.highlightByEntityId(c.entityId)
       }, 500)
      },
      u = function(a) {
       var b = this;
       "occurrences" !== a || b.occurrences || (b.occurrences = l.getOccurrences(b.entityId)), b._subContentOpened !== a ? b._subContentOpened = a : b._subContentOpened = "", b.toggleSubContentClass()
      },
      v = function() {
       return c.toolPinAppEntries
      },
      w = function() {
       var a = this;
       return i.isPinned(a.entityId)
      },
      x = function() {
       var a = this;
       return a.isPinned() ? "pin-on" : "pin-off"
      },
      y = function() {
       var a = this;
       if (a.isPinned()) i.removeElement({
        id: a.entityId,
        type: "namedEntity_" + a.entityType
       });
       else {
        i.addElement({
         id: a.entityId,
         type: "namedEntity_" + a.entityType
        });
        var b = i.getPinned();
        b && 1 === b.length && g.updateState("isPinnedAppBoardOpened", !0)
       }
      },
      z = function() {
       var a = this,
        b = "toc";
       g.updateState("secondaryContent", b), j.openByType(b);
       var c = d.getNamedEntities()[a.entityId].collectionId;
       g.updateProperty("tabsContainerOpenedContent", "entitiesLists"), g.updateProperty("tabsContainerOpenedTab", c), g.updateState("currentNamedEntity", a.entityId), setTimeout(function() {
        k.scrollToElemById(c, a.entityId)
       }, 1e3)
      },
      A = function(a) {
       var b = g.getState("currentDoc"),
        c = g.getState("currentPage");
       return b === a.docId && c === a.pageId
      };
     return l.build = function(b, c) {
      var e = o++,
       f = b || void 0,
       g = c.entityType || d.getNamedEntityType(f) || "generic",
       h = c.location || "list",
       i = {};
      if ("undefined" == typeof m[e]) {
       var j = d.getNamedEntity(f),
        k = !0,
        l = d.getNamedEntityTypeIcon(g);
       switch (k = void 0 !== j && void 0 !== j.notes && j.notes.length > 0, g) {
        case "place":
        case "placeName":
        case "person":
        case "pers":
        case "persName":
         break;
        case "org":
        case "orgName":
         k = k || void 0 !== j && void 0 !== j.desc;
         break;
        default:
         k = k || void 0 !== j && void 0 !== j.details
       }
       var B;
       j && j.occurrences && (B = j.occurrences);
       var C = {
        _indexes: []
       };
       a.allowedTabs.indexOf("moreInfo") >= 0 && (C._indexes.push("moreInfo"), C.moreInfo = {
        label: "NAMED_ENTITIES.MORE_INFO"
       }), "relation" !== g && (C._indexes.push("occurrences"), C.occurrences = {
        label: "NAMED_ENTITIES.OCCURRENCES"
       });
       var D = {
         zoom: 8
        },
        E = {
         focus: !0,
         draggable: !1
        },
        F = {
         tileLayer: "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",
         tileLayerOptions: {
          opacity: .9,
          detectRetina: !0,
          reuseTiles: !0
         }
        };
       if (a.allowedTabs.indexOf("map") >= 0 && ("place" === g || "placeName" === g) && j.map) {
        C._indexes.push("map"), C.map = {
         label: "NAMED_ENTITIES.MAP"
        };
        var G = parseFloat(j.map.lat),
         H = parseFloat(j.map.lng);
        D.lat = G, D.lng = H, E.lat = G, E.lng = H
       }
       a.allowedTabs.indexOf("xmlSource") >= 0 && (C._indexes.push("xmlSource"), C.xmlSource = {
        label: "NAMED_ENTITIES.XML"
       });
       var I = C && C._indexes && C._indexes.length > 0 ? C._indexes[0] : "";
       return i = {
        uid: e,
        entityId: f,
        entityType: g,
        entityTypeIcon: l,
        location: h,
        entity: j ? j : {},
        occurrences: B,
        opened: !1,
        moreInfoOpened: k,
        occurrencesOpened: !1,
        noMoreInfo: !k,
        _firstSubContentOpened: I,
        _subContentOpened: "",
        over: !1,
        tabs: C,
        defaults: angular.copy(a),
        getElementContent: p,
        toggle: q,
        toggleMoreInfo: s,
        toggleOccurrences: r,
        goToOccurrence: t,
        toggleSubContent: u,
        isCurrentPageDoc: A,
        isPinAvailable: v,
        isPinned: w,
        getPinnedState: x,
        togglePin: y,
        openEntity: z,
        lfCenter: D,
        lfDefaults: F,
        lfMarkers: {
         mainMarker: E
        }
       }, m[e] = angular.extend(c.vm, i), n.push({
        id: e,
        entityId: f
       }), m[e]
      }
     }, l.getOccurrences = function(a) {
      for (var b = d.getDocuments(), c = b._indexes || [], f = [], g = 0; g < c.length; g++) {
       var h = b[c[g]],
        i = e.parseEntitiesOccurrences(h, a);
       f = f.concat(i)
      }
      return f
     }, l.getById = function(a) {
      var b;
      return angular.forEach(m, function(c) {
       c.entityId === a && (b = c)
      }), b
     }, l.getList = function() {
      return n
     }, l.getPinned = function() {
      return i.getPinnedByType("namedEntity")
     }, l.destroy = function(a) {
      delete m[a]
     }, l
    }]
   }), angular.module("evtviewer.namedEntity").directive("evtNamedEntity", ["evtNamedEntity", function(a) {
    return {
     restrict: "E",
     scope: {
      entityId: "@",
      entityType: "@",
      location: "@"
     },
     transclude: !0,
     templateUrl: "src/namedEntity/namedEntity.directive.tmpl.html",
     link: function(b, c, d) {
      b.vm = {
       entityId: b.entityId,
       entityType: b.entityType,
       location: b.location
      };
      var e = (a.build(b.entityId, b), c.find(".namedEntity")),
       f = c.find(".namedEntity__details");
      b.vm.toggleState = function() {
       b.vm.opened ? e.addClass("opened") : e.removeClass("opened")
      }, b.vm.toggleSection = function(a) {
       b.vm[a] ? f.addClass(a) : f.removeClass(a)
      };
      var g = c.find(".namedEntity__details-headers"),
       h = c.find(".namedEntity__details-panels");
      b.vm.toggleSubContentClass = function() {
       var a = b.vm._subContentOpened,
        d = c.find(".namedEntity__details-header.active");
       if (d.removeClass("active"), "" !== a) {
        var e = c.find(".namedEntity__details-header-" + a);
        e.addClass("active"), g.removeClass("closed"), h.removeClass("closed")
       } else g.addClass("closed"), h.addClass("closed")
      }, b.$on("$destroy", function() {
       b.vm.uid && a.destroy(b.vm.uid)
      })
     }
    }
   }]), angular.module("evtviewer.namedEntity").provider("evtNamedEntityRef", function() {
    var a = this.defaults;
    this.setDefaults = function(b) {
     a = b
    }, this.$get = ["$timeout", "parsedData", "evtNamedEntitiesParser", "baseData", "Utils", function(b, c, d, e, f) {
     var g, h, i = {},
      j = {},
      k = {},
      l = [],
      m = 0,
      n = [],
      o = function(a) {
       a.stopPropagation();
       var c = a.target;
       if (c && !f.DOMutils.isNestedInElem(c, "evt-named-entity") || f.DOMutils.isNestedInElem(c, "evt-list")) {
        var d = this;
        d.realNamedEntity && (i.getCurrentHighlighted() !== d.entityId && i.highlightByEntityId(void 0), d.active = !d.active, d.active ? i.setActiveEntity(d.uid) : i.setActiveEntity(void 0), d.toggleActive(), d.detailsInPopup && b(function() {
         d.updateDetailsPosition(a, d)
        }, 20))
       }
      };
     return i.build = function(b, d) {
      var e = m++,
       f = b || void 0,
       g = d.entityType ? d.entityType : c.getNamedEntityType(f),
       h = void 0 !== b,
       n = !1,
       p = {};
      if ("undefined" == typeof j[e]) {
       switch (g) {
        case "persName":
         g = "person";
         break;
        case "placeName":
        case "orgName":
         g = g.replace("Name", "");
         break;
        default:
         g = g
       }
       return p = {
        uid: e,
        entityId: f,
        entityType: g,
        detailsInPopup: n,
        realNamedEntity: h,
        initHighlight: h && i.getCurrentHighlighted() === f,
        defaults: angular.copy(a),
        goToEntityInList: o
       }, j[e] = angular.extend(d.vm, p), l.push({
        id: e,
        entityId: f
       }), k[f] || (k[f] = []), k[f].push(e), j[e]
      }
     }, i.getActiveEntityTypes = function() {
      return n
     }, i.addActiveType = function(a) {
      n.indexOf(a) < 0 && n.push(a)
     }, i.removeActiveType = function(a) {
      var b = n.indexOf(a);
      n.splice(b, 1)
     }, i.getActiveEntity = function() {
      return g
     }, i.setActiveEntity = function(a) {
      i.deactivateEntity(g), g = a
     }, i.deactivateEntity = function(a) {
      void 0 !== a && void 0 !== j[a] && (j[a].active = !1, j[a].toggleActive())
     }, i.highlightByEntityId = function(a) {
      i.setCurrentHighlighted(a), angular.forEach(j, function(b) {
       b.toggleHighlight && (b.realNamedEntity && b.entityId === a ? b.toggleHighlight(!0) : b.toggleHighlight(!1))
      })
     }, i.getCurrentHighlighted = function() {
      return h
     }, i.setCurrentHighlighted = function(a) {
      h = a
     }, i.getById = function(a) {
      var b;
      return angular.forEach(j, function(c) {
       c.entityId === a && (b = c)
      }), b
     }, i.getList = function() {
      return l
     }, i.destroy = function(a) {
      delete j[a]
     }, i
    }]
   }), angular.module("evtviewer.namedEntity").directive("evtNamedEntityRef", ["evtNamedEntityRef", function(a) {
    return {
     restrict: "E",
     scope: {
      entityId: "@",
      entityType: "@"
     },
     transclude: !0,
     templateUrl: "src/namedEntity/namedEntityRef.directive.tmpl.html",
     link: function(b, c, d) {
      b.vm = {
       entityId: b.entityId,
       entityType: b.entityType
      };
      var e = (a.build(b.entityId, b), c.find(".namedEntityRef")),
       f = c.find(".namedEntityRef__details");
      b.vm.toggleActive = function() {
       b.vm.active ? (e.addClass("active"), f.addClass("active")) : (e.removeClass("active"), f.removeClass("active"))
      }, b.vm.toggleHighlight = function(a) {
       a ? e.addClass("highlighted") : e.removeClass("highlighted")
      }, b.vm.updateDetailsPosition = function(a, b) {
       if (b.active) {
        a.stopPropagation();
        var d = c,
         e = angular.element(c).find("span.namedEntityRef__details").last(),
         f = angular.element(e).find(".namedEntityRef__details-before"),
         g = a.clientX,
         h = a.clientY;
        e.removeAttr("style");
        var i = d.height(),
         j = 1 * d.css("font-size").substr(0, 2) + 1,
         k = (d.width(), d.position().top),
         l = (d.position().left, e.offset().top, e.outerWidth()),
         m = e.outerHeight(),
         n = 200;
        l > n && e.css({
         width: n + "px",
         "max-width": n + "px"
        }), e.css({
         position: "absolute"
        }), l = e.outerWidth(), m = e.outerHeight();
        var o, p = c.parent(),
         q = c.parents(p).offset().left,
         r = c.parents(p).innerWidth(),
         s = g - q - l / 2;
        e.css({
         left: s + "px"
        }), s + l > r && (o = s + l - r, s = s - o - 10, e.css({
         left: s + "px"
        })), 0 > s && (s = 0, e.css({
         left: s + "px"
        }));
        var t, u, v = c.parents(p).outerHeight(),
         w = k + i + m;
        w > v ? (t = m + i + 10, i > j && (u = h - d.offset().top, t = t - u + 10), e.css({
         "margin-top": -t + "px"
        }).addClass("open-up"), f.css({
         top: e.outerHeight() + 2 + "px"
        })) : (e.removeClass("open-up"), i > j ? (u = h - d.offset().top, o = i - j - u, e.css({
         "margin-top": -o + "px"
        })) : e.css({
         "margin-top": "5px"
        }));
        var x = g - s - q;
        f.css({
         left: x + "px"
        }), l = e.width(), l > n && e.css({
         width: n + "px",
         "max-width": n + "px"
        })
       }
      }, b.$on("$destroy", function() {
       b.vm.uid && a.destroy(b.vm.uid)
      })
     }
    }
   }]), angular.module("evtviewer.namedEntity").service("evtGenericEntity", function() {
    var a = {},
     b = {};
    a.addActiveType = function(c, d) {
     void 0 === b[c] && (a.highlightElementsByType(c, d), b[c] = {
      type: c,
      color: d
     })
    }, a.removeActiveType = function(c, d) {
     void 0 !== b[c] && (a.deEmphasizeElementsByType(c, d), b[c] = void 0)
    }, a.highlightElementsByType = function(a, b) {
     var d = document.getElementsByClassName(a);
     angular.forEach(d, function(a) {
      c(a, b, !0)
     })
    }, a.deEmphasizeElementsByType = function(a, b) {
     var d = document.getElementsByClassName(a);
     angular.forEach(d, function(a) {
      c(a, b, !1)
     })
    }, a.highlightActiveTypes = function() {
     for (var c in b) {
      var d = b[c];
      d && a.highlightElementsByType(d.type, d.color)
     }
    };
    var c = function(a, b, c) {
     c ? (b ? angular.element(a).css("background", b) : angular.element(a).addClass("highlighted"), angular.element(a).addClass("entityHighlighted")) : (b ? angular.element(a).css("background", "") : angular.element(a).removeClass("highlighted"), angular.element(a).removeClass("entityHighlighted"))
    };
    return a
   }), angular.module("evtviewer.mobile", ["ngRoute", "ngAnimate", "ngTouch"]), angular.module("evtviewer.mobile").directive("mainMobile", function() {
    return {
     restrict: "E",
     scope: {
      id: "@"
     },
     templateUrl: "src/mobile/mobile.dir.tmpl.html"
    }
   }), angular.module("evtviewer.mobile").provider("mobile", function() {
    var a = this.defaults;
    this.setDefaults = function(b) {
     a = b
    }, this.$get = ["$log", function(a) {
     var b = {},
      c = a.getInstance("mobile"),
      d = {
       currentView: "image"
      },
      e = {
       currentEditionDipl: "diplomatic"
      },
      f = {
       currentEditionInt: "interpretative"
      };
     return b.getState = function() {
      return d
     }, b.getStateEditionDipl = function() {
      return e
     }, b.getStateEditionInt = function() {
      return f
     }, b.getCurrentView = function() {
      return d.currentView
     }, b.getCurrentEditionDipl = function() {
      return e.currentEditionDipl
     }, b.getCurrentEditionInt = function() {
      return f.currentEditionInt
     }, b.switchView = function(a) {
      d.currentView = a, c.log("Switch of current view in: " + a)
     }, b.switchEditionDipl = function(a) {
      e.currentEditionDipl = a, c.log("Switch of current edition in: " + a)
     }, b.switchEditionInt = function(a) {
      f.currentEditionInt = a, c.log("Switch of current edition in: " + a)
     }, b
    }]
   }), angular.module("evtviewer.mobile").controller("MobileMenuCtrl", ["$scope", "mobile", function(a, b) {
    var c, d = !1,
     e = b.getCurrentView();
    a.currentButton = "image", a.showItems = !1, a.menu = [{
     template: "info",
     description: "The Digital Vercelli Book"
    }, {
     template: "search",
     icon: "fa fa-search"
    }], a.view = [{
     template: "image",
     icon1: "fa fa-picture-o"
    }, {
     template: "text",
     icon1: "fa fa-align-left"
    }, {
     template: "imageimage",
     icon1: "fa fa-file-image-o",
     icon2: "fa fa-file-image-o"
    }, {
     template: "imagetext",
     icon1: "fa fa-file-image-o",
     icon2: "fa fa-file-text-o"
    }, {
     template: "texttext",
     icon1: "fa fa-file-text-o",
     icon2: "fa fa-file-text-o"
    }], a.showView = function(a) {
     e = a, b.switchView(a), console.log("Switch mode " + a)
    }, a.showSection = function(a) {
     d && a === c ? (b.switchView(e), d = !1) : (b.switchView(a), c = a, d = !0), console.log("Switch section " + a)
    }, a.buttonSection = function(b) {
     a.currentButton === b.template ? a.currentButton = !a.currentButton : a.currentButton = b.template
    }, a.buttonView = function(b) {
     a.currentButton = b.template
    }, a.isActiveButton = function(b) {
     return b === a.currentButton
    }, a.toggleView = function() {
     a.showItems = !a.showItems
    }
   }]), angular.module("evtviewer.mobile").directive("menuMobile", function() {
    return {
     restrict: "E",
     scope: {
      id: "@"
     },
     templateUrl: "src/mobile/mobileMenu.dir.tmpl.html",
     controller: "MobileMenuCtrl"
    }
   }), angular.module("evtviewer.mobile").controller("MobileInfoCtrl", ["$scope", "mobile", function(a, b) {
    a.view = b.getState(), a.dvb = [{
     url: "http://vbd.humnet.unipi.it/",
     title: "Digital Vercelli Book project",
     description: "Digital Vercelli Book project"
    }, {
     url: "http://sourceforge.net/projects/evt-project/",
     title: "Edition Visualization Technology on SourceForge",
     description: "Edition Visualization Technology"
    }, {
     url: "https://visualizationtechnology.wordpress.com/",
     title: "EVT Blog",
     description: "EVT Blog"
    }, {
     url: "mailto: editionvisualizationtechnology@gmail.com",
     title: "Contact",
     description: "Contact"
    }]
   }]), angular.module("evtviewer.mobile").directive("infoMobile", function() {
    return {
     restrict: "E",
     scope: {
      id: "@"
     },
     templateUrl: "src/mobile/mobileInfo.dir.tmpl.html",
     controller: "MobileInfoCtrl"
    }
   }), angular.module("evtviewer.mobile").controller("MobileSearchCtrl", ["$scope", "mobile", "parsedData", function(a, b, c) {
    a.view = b.getState(), a.mockSearchLetters = c.getSearchLetters(), a.mockSearchFilters = c.getSearchFilters(), a.mockText = c.getText1(), a.listResults = !0, a.Search = ["Search..."], a.buttonsOption = [{
     description: "&#198;",
     tab: "tabLetters"
    }, {
     icon: "fa fa-cogs",
     tab: "tabFilters"
    }], a.removeText = function() {
     a.Search = null
    }, a.showTabOptions = function(b) {
     a.currentOption === b.tab ? a.currentOption = !a.currentOption : a.currentOption = b.tab
    }, a.isActiveTab = function(b) {
     return b === a.currentOption
    }, a.showResults = function() {
     a.listResults = !a.listResults
    }
   }]), angular.module("evtviewer.mobile").directive("searchMobile", function() {
    return {
     restrict: "E",
     scope: {
      id: "@"
     },
     templateUrl: "src/mobile/mobileSearch.dir.tmpl.html",
     controller: "MobileSearchCtrl"
    }
   }), angular.module("evtviewer.mobile").controller("MobileViewCtrl", ["$scope", "mobile", "parsedData", function(a, b, c) {
    a.view = b.getState(), a.mockText = c.getText2(), a.mockImage = c.getImage2(), a.mockBook = c.getBook2();
    var d = b.getCurrentEditionDipl(),
     e = b.getCurrentEditionInt();
    a.editionDipl = b.getStateEditionDipl(), a.editionInt = b.getStateEditionInt(), a.currentButtonDipl = "diplomatic", a.currentButtonInt = "interpretative", a.leftTextOptions = !1, a.rightTextOptions = !1, a.imageOptions = !1, a.navThumb = !1, a.thumbnails = c.getThumb2(), a.thumbBook = c.getThumbBook2(), a.currentIndex = 0, a.isActive = function(b) {
     return a.currentIndex === b
    }, a.prevItem = function() {
     a.currentIndex > 0 ? a.currentIndex = --a.currentIndex : a.currentIndex = a.mockImage.length - 1
    }, a.nextItem = function() {
     a.currentIndex < a.mockImage.length - 1 ? a.currentIndex = ++a.currentIndex : a.currentIndex = 0
    }, a.prevImageImage = function() {
     a.currentIndex > 0 ? a.currentIndex = --a.currentIndex : a.currentIndex = a.mockBook.length - 1
    }, a.nextImageImage = function() {
     a.currentIndex < a.mockBook.length - 1 ? a.currentIndex = ++a.currentIndex : a.currentIndex = 0
    }, a.textEdition = [{
     template: "diplomatic",
     description: "Diplomatic"
    }, {
     template: "interpretative",
     description: "Interpretative"
    }], a.showEditionDipl = function(a) {
     d = a, b.switchEditionDipl(a), console.log("Switch edition " + a)
    }, a.showEditionInt = function(a) {
     e = a, b.switchEditionInt(a), console.log("Switch edition " + a)
    }, a.buttonEditionDipl = function(b) {
     a.currentButtonDipl = b.template
    }, a.buttonEditionInt = function(b) {
     a.currentButtonInt = b.template
    }, a.isActiveButtonDipl = function(b) {
     return b === a.currentButtonDipl
    }, a.isActiveButtonInt = function(b) {
     return b === a.currentButtonInt
    }, a.leftTextSettings = function() {
     a.leftTextOptions = !a.leftTextOptions
    }, a.rightTextSettings = function() {
     a.rightTextOptions = !a.rightTextOptions
    }, a.showImageSettings = function() {
     a.imageOptions = !a.imageOptions
    }, a.showThumb = function() {
     a.navThumb = !a.navThumb
    }, a.showImage = function(b) {
     a.currentIndex = b
    }
   }]), angular.module("evtviewer.mobile").directive("viewMobile", function() {
    return {
     restrict: "E",
     scope: {
      id: "@"
     },
     templateUrl: "src/mobile/mobileView.dir.tmpl.html",
     controller: "MobileViewCtrl"
    }
   }), angular.module("evtviewer.criticalApparatusEntry", []), angular.module("evtviewer.criticalApparatusEntry").constant("APPENTRYDEFAULTS", {
    firstSubContentOpened: ""
   }).config(["evtCriticalApparatusEntryProvider", "configProvider", "APPENTRYDEFAULTS", function(a, b, c) {
    var d = b.makeDefaults("criticalApparatusEntry", c);
    a.setDefaults(d)
   }]), angular.module("evtviewer.criticalApparatusEntry").provider("evtCriticalApparatusEntry", function() {
    var a = this.defaults;
    this.setDefaults = function(b) {
     a = b
    };
    var b = "";
    this.$get = ["config", "parsedData", "baseData", "evtCriticalApparatusParser", "evtCriticalApparatus", "evtPinnedElements", function(c, d, e, f, g, h) {
     var i = {},
      j = {},
      k = [],
      l = 0;
     return i.build = function(b, h) {
      var i = l++,
       m = b || void 0,
       n = h.scopeWit || "",
       o = h.type || "default",
       p = c.showReadingExponent,
       q = {};
      if ("undefined" == typeof j[i]) {
       var r, s = "",
        t = "",
        u = {
         _indexes: []
        },
        v = d.getCriticalEntryById(b);
       if (void 0 === v) {
        var w = e.getXMLDocuments()[0];
        w = w.cloneNode(!0), f.findCriticalEntryById(w, b), v = d.getCriticalEntryById(b)
       }
       void 0 !== v && (r = g.getContent(v, v._subApp, n), s = r.witnessesGroups, "" !== r.criticalNote && (u._indexes.push("criticalNote"), u.criticalNote = {
        label: "CRITICAL_APPARATUS.TABS.CRITICAL_NOTE"
       }), r.notSignificantReadings.length > 0 && (u._indexes.push("notSignificantReadings"), u.notSignificantReadings = {
        label: "CRITICAL_APPARATUS.TABS.ORTHOGRAPHIC_VARIANTS"
       }), u._indexes.push("moreInfo"), u.moreInfo = {
        label: "CRITICAL_APPARATUS.TABS.MORE_INFO"
       }, "" !== v._xmlSource && (u._indexes.push("xmlSource"), u.xmlSource = {
        label: "CRITICAL_APPARATUS.TABS.XML"
       }, r.xmlSource = v._xmlSource.replace(/ xmlns="http:\/\/www\.tei-c\.org\/ns\/1\.0"/g, "")), u._indexes.length > 0 && "" !== a.firstSubContentOpened && (t = u._indexes.indexOf(a.firstSubContentOpened) < 0 ? u._indexes[0] : a.firstSubContentOpened));
       var x = void 0 === h.exponent ? d.getCriticalEntryExponent(h.appId) : h.exponent;
       return q = {
        uid: i,
        scopeWit: n,
        appId: m,
        readingId: h.readingId,
        content: r,
        type: o,
        _subContentOpened: t,
        over: !1,
        selected: !1,
        tabs: u,
        exponent: x,
        showExponent: p,
        witnessesGroups: s,
        currentViewMode: h.scopeViewMode
       }, j[i] = angular.extend(h.vm, q), k.push({
        id: i
       }), j[i]
      }
     }, i.getById = function(a) {
      return "undefined" !== j[a] ? j[a] : void 0
     }, i.getList = function() {
      return k
     }, i.destroy = function(a) {
      delete j[a]
     }, i.getPinned = function() {
      return h.getPinnedByType("criticalApparatusEntry")
     }, i.setCurrentAppEntry = function(a) {
      b !== a && (b = a)
     }, i.getCurrentAppEntry = function() {
      return b
     }, i.mouseOutAll = function() {
      angular.forEach(j, function(a) {
       a.mouseOut()
      })
     }, i.mouseOverByAppId = function(a) {
      angular.forEach(j, function(b) {
       b.appId === a ? b.mouseOver() : b.mouseOut()
      })
     }, i.unselectAll = function() {
      angular.forEach(j, function(a) {
       a.unselect()
      }), i.setCurrentAppEntry("")
     }, i.selectById = function(a) {
      angular.forEach(j, function(b) {
       b.appId === a ? b.setSelected() : b.unselect()
      }), i.setCurrentAppEntry(a)
     }, i
    }]
   }), angular.module("evtviewer.criticalApparatusEntry").controller("CriticalApparatusEntryCtrl", ["$log", "$scope", "config", "Utils", "evtCriticalApparatusEntry", "evtInterface", "evtReading", "evtBox", "evtApparatuses", "evtPinnedElements", function(a, b, c, d, e, f, g, h, i, j) {
    b.content = {};
    var k = this;
    this.toggleSubContent = function(a) {
     k._subContentOpened !== a ? k._subContentOpened = a : k._subContentOpened = ""
    }, this.toggleOverAppEntries = function(a) {
     a.stopPropagation(), void 0 === k.readingId && (k.over === !1 ? (e.mouseOverByAppId(k.appId), g.mouseOverByAppId(k.appId)) : (e.mouseOutAll(), g.mouseOutAll()))
    }, this.isPinAvailable = function() {
     return c.toolPinAppEntries
    }, this.isPinned = function() {
     return j.isPinned(k.appId)
    }, this.getPinnedState = function() {
     return k.isPinned() ? "pin-on" : "pin-off"
    }, this.togglePin = function() {
     if (k.isPinned()) j.removeElement({
      id: k.appId,
      type: "criticalApparatusEntry"
     });
     else {
      j.addElement({
       id: k.appId,
       type: "criticalApparatusEntry"
      });
      var a = j.getPinned();
      a && 1 === a.length && f.updateState("isPinnedAppBoardOpened", !0)
     }
    }, this.alignReadings = function() {
     h.alignScrollToApp(k.appId), i.alignScrollToApp(k.appId)
    }, this.destroy = function() {
     var a = this.uid;
     e.destroy(a)
    }, this.mouseOver = function() {
     k.over = !0
    }, this.mouseOut = function() {
     k.over = !1
    }, this.setSelected = function() {
     k.selected = !0
    }, this.unselect = function() {
     k.selected = !1, k.closeSubContent()
    }, this.isSelected = function() {
     return k.selected
    }, this.isInline = function() {
     return f.isCriticalApparatusInline()
    }, this.closeSubContent = function() {
     k._subContentOpened = ""
    }, this.callbackClick = function(a) {
     a.stopPropagation();
     var b = a.target;
     "readingTxt" === k.currentViewMode && (k.isSelected() ? b && b.className.indexOf("critical-apparatus-entry_other-content_headers") < 0 && !d.DOMutils.isNestedInClassElem(b, "critical-apparatus-entry_other-content_headers") && (e.unselectAll(), g.unselectAll(), f.updateState("currentAppEntry", "")) : (g.selectById(k.appId), f.updateState("currentAppEntry", k.appId), e.selectById(k.appId), k.isInline() || h.alignScrollToApp(k.appId)), f.updateUrl())
    }, this.showInlineCriticalApparatus = function() {
     return c.showInlineCriticalApparatus
    }
   }]), angular.module("evtviewer.criticalApparatusEntry").directive("evtCriticalApparatusEntry", ["evtCriticalApparatusEntry", "parsedData", "evtInterface", function(a, b, c) {
    return {
     restrict: "E",
     scope: {
      appId: "@",
      readingId: "@",
      scopeWit: "@",
      type: "@",
      exponent: "@"
     },
     transclude: !0,
     templateUrl: "src/criticalApparatusEntry/criticalApparatusEntry.directive.tmpl.html",
     controllerAs: "vm",
     controller: "CriticalApparatusEntryCtrl",
     link: function(b, d, e) {
      b.scopeViewMode = c.getState("currentViewMode");
      var f = a.build(b.appId, b);
      c.isCriticalApparatusInline() || (f.selected = c.getState("currentAppEntry") === b.appId), b.$on("$destroy", function() {
       f && f.destroy()
      })
     }
    }
   }]), angular.module("evtviewer.criticalApparatusEntry").directive("evtWitnessRef", ["evtCriticalApparatusEntry", "evtBox", "parsedData", "evtInterface", "config", function(a, b, c, d, e) {
    return {
     restrict: "E",
     require: "^?evtCriticalApparatusEntry",
     scope: {
      witness: "@",
      scopeWit: "@"
     },
     transclude: !0,
     templateUrl: "src/criticalApparatusEntry/criticalApparatusEntry.witnessRef.directive.tmpl.html",
     link: function(a, f, g) {
      a.translationData = {
       witness: a.witness
      }, a.scopeWit === a.witness ? a.title = "CRITICAL_APPARATUS.WITNESS_REF_CURRENT" : a.title = "CRITICAL_APPARATUS.WITNESS_REF_OPEN", a.openWit = function() {
       var f = a.witness,
        g = a.scopeWit;
       if (f !== g) {
        if (e.versions.length > 0) {
         var h, i = d.getState("currentVersion"),
          j = c.getVersionEntries()._indexes.versionWitMap;
         for (var k in j) j[k].indexOf(f) >= 0 && (h = k);
         i !== h && (d.updateCurrentVersion(h), d.updateState("currentWits", []), d.updateAvailableWitnessesByVersion(h))
        }
        var l = d.getState("currentWits"),
         m = l.indexOf(g);
        l.indexOf(f) >= 0 && d.removeWitness(f), void 0 !== m && d.addWitnessAtIndex(f, m + 1), "collation" !== d.getCurrentView && d.updateState("currentViewMode", "collation"), d.updateUrl();
        var n = d.getState("currentAppEntry") || "";
        if ("" !== n) {
         var o = b.getElementByValueOfParameter("witness", f);
         void 0 !== o && o.scrollToAppEntry(n)
        }
       }
      }
     }
    }
   }]), angular.module("evtviewer.reading", []), angular.module("evtviewer.reading").constant("READINGDEFAULTS", {
    tooltipMaxHeight: 170,
    tooltipMaxWidth: 200,
    openTriggerEvent: "click"
   }).config(["evtReadingProvider", "configProvider", "READINGDEFAULTS", function(a, b, c) {
    var d = b.makeDefaults("reading", c);
    a.setDefaults(d)
   }]), angular.module("evtviewer.reading").provider("evtReading", function() {
    var a = this.defaults;
    this.setDefaults = function(b) {
     a = b
    };
    var b = "";
    this.$get = ["config", "parsedData", function(c, d) {
     var e = {},
      f = {},
      g = [],
      h = 0;
     return e.build = function(b, i) {
      var j, k = h++,
       l = b || void 0,
       m = "",
       n = c.showReadingExponent,
       o = {};
      if ("undefined" == typeof f[k]) {
       var p = d.getCriticalEntryExponent(i.appId);
       if (void 0 !== i.readingId) {
        var q = d.getReadingAttributes(i.readingId, b) || [];
        for (var r in q) "wit" !== r && "xml:id" !== r && (m += r.toUpperCase() + ": " + q[r] + " - ");
        "" !== m && (m = m.slice(0, -3))
       }
       var s = d.getCriticalEntryById(l);
       s && s._subApp && (j = s._indexes._parentEntry || "");
       var t, u = l === e.getCurrentAppEntry();
       return o = {
        uid: k,
        scopeWit: i.scopeWit || "",
        appId: l,
        parentAppId: j,
        readingId: i.readingId,
        readingType: i.readingType,
        variance: i.variance,
        type: i.type,
        overlap: i.overlap,
        noText: i.noText,
        range: t,
        attributes: m,
        exponent: p,
        showExponent: n,
        over: !1,
        apparatus: {
         opened: !1,
         content: {},
         _loaded: !1,
         _subContentOpened: "criticalNote",
         inline: i.inlineApparatus
        },
        selected: u,
        openTriggerEvent: angular.copy(a.openTriggerEvent),
        defaults: angular.copy(a)
       }, f[k] = angular.extend(i.vm, o), g.push({
        id: k,
        entryId: l
       }), f[k]
      }
     }, e.getById = function(a) {
      var b;
      return angular.forEach(f, function(c) {
       c.appId === a && (b = c)
      }), b
     }, e.getList = function() {
      return g
     }, e.setCurrentAppEntry = function(a) {
      b = a
     }, e.getCurrentAppEntry = function() {
      return b
     }, e.mouseOutAll = function() {
      angular.forEach(f, function(a) {
       a.mouseOut()
      })
     }, e.mouseOverByAppId = function(a) {
      angular.forEach(f, function(b) {
       b.appId === a ? b.mouseOver() : b.mouseOut()
      })
     }, e.unselectAll = function() {
      angular.forEach(f, function(a) {
       a.unselect()
      })
     }, e.closeAllApparatus = function(a) {
      angular.forEach(f, function(b) {
       void 0 === a ? b.closeApparatus() : b.uid !== a && b.closeApparatus()
      })
     }, e.selectById = function(a) {
      angular.forEach(f, function(b) {
       b.appId === a ? b.setSelected() : b.unselect()
      }), e.setCurrentAppEntry(a)
     }, e.destroy = function(a) {
      delete f[a]
     }, e
    }]
   }), angular.module("evtviewer.reading").controller("ReadingCtrl", ["config", "$log", "$scope", "evtReading", "parsedData", "evtPopover", "evtCriticalApparatusParser", "baseData", "evtInterface", "evtCriticalApparatusEntry", "evtApparatuses", "evtBox", function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = this,
     n = (b.getInstance("reading"), function(a, b) {
      angular.forEach(m.range, function(c) {
       a && c.className.indexOf(b) < 0 ? c.className += " " + b : !a && c.className.indexOf(b) >= 0 && (c.className = c.className.replace(" " + b, ""))
      })
     });
    this.mouseOver = function() {
     m.over = !0, m.overlap && m.range && n(m.over, "over")
    }, this.mouseOut = function() {
     m.over = !1, m.overlap && m.range && n(m.over, "over")
    }, this.setSelected = function() {
     m.selected = !0, m.overlap && m.range && n(m.selected, "selected")
    }, this.unselect = function() {
     m.selected = !1, m.overlap && m.range && n(m.selected, "selected")
    }, this.isSelect = function() {
     return void 0 !== m.parentAppId ? m.selected || i.getState("currentAppEntry") === m.parentAppId : m.selected
    }, this.isApparatusOpened = function() {
     return m.apparatus.opened && !c.$parent.vm.state.topBoxOpened
    }, this.closeApparatus = function() {
     m.apparatus.opened = !1
    }, this.openApparatus = function() {
     m.apparatus.opened = !0, m.apparatus._loaded = !0
    }, this.toggleOverAppEntries = function(a) {
     a.stopPropagation(), m.hidden || (m.over === !1 ? (d.mouseOverByAppId(m.appId), j.mouseOverByAppId(m.appId)) : (d.mouseOutAll(), j.mouseOutAll()))
    }, this.toggleSelectAppEntries = function(a) {
     m.hidden || (m.selected === !1 ? (d.selectById(m.appId), j.selectById(m.appId), m.apparatus.inline || (k.setCurrentApparatus("criticalApparatus"), k.alignScrollToApp(m.appId)), i.updateState("currentAppEntry", m.appId)) : (i.updateState("currentAppEntry", ""), d.unselectAll(), j.unselectAll())), i.updateUrl()
    }, this.toggleApparatus = function(a) {
     f.closeAll(), !m.hidden && m.over && (m.apparatus._loaded || (m.apparatus._loaded = !0), d.closeAllApparatus(m.uid), m.apparatus.opened = !m.apparatus.opened)
    }, this.callbackClick = function(a) {
     a && a.stopPropagation(), m.over && (m.toggleSelectAppEntries(a), (!m.isSelect() || m.apparatus.inline && !m.apparatus.opened) && m.toggleApparatus(a))
    }, this.openApparatusSubContent = function(a) {
     m.apparatus._subContentOpened = a
    }, this.backgroundColor = function() {
     return "variant" === m.type ? p() : o()
    };
    var o = function() {
      var b;
      if (c.$parent.vm.state.heatmap) {
       var d = e.getCriticalEntriesMaxVariance();
       b = m.over && !c.$parent.vm.state.topBoxOpened ? "1" : m.variance / d;
       var f = a.heatmapColor.replace("rgb", "rgba").slice(0, -1) + "," + b + ")";
       return "background: " + f
      }
      return p()
     },
     p = function() {
      var b, f, g, h, i, j, k = a.possibleVariantFilters,
       l = a.possibleLemmaFilters,
       n = !1;
      if (m.parentAppId) {
       var o = d.getById(m.parentAppId);
       n = o ? o.over || o.isSelect() : !1
      }
      if (void 0 !== m.appId && (h = e.getCriticalEntryById(m.appId), i = void 0 !== m.readingId ? h.content[m.readingId] : h.content[h.lemma], void 0 !== i && (j = e.getReadingAttributes(m.readingId, m.appId) || {}, f = e.getCriticalEntriesFilters(), g = "witness" === c.$parent.vm.type ? k : l, Object.keys(j).length > 0))) {
       var p = "",
        q = (m.over || m.isSelect() || n) && !c.$parent.vm.state.topBoxOpened ? "1" : ".4";
       for (var r in f) {
        var s = f[r].name;
        if (g.indexOf(s) >= 0 && void 0 !== j && void 0 !== j[s])
         for (var t in f[r].values) {
          var u = f[r].values[t].color,
           v = f[r].values[t].name;
          if (j[s] === v) {
           var w = u.replace("rgb", "rgba");
           p += w.slice(0, -1) + "," + q + "),"
          }
         }
       }
       "" !== p && (p = p.slice(0, -1), p.match(/rgb/gi) && p.match(/rgb/gi).length > 1 || p.match(/#/gi) && p.match(/#/gi).length > 1 ? (b = "background: -moz-linear-gradient(left," + p + ");", b += "background: -webkit-linear-gradient(left," + p + ");", b += "background: ms-linear-gradient(left," + p + ");", b += "background: linear-gradient(left," + p + ");") : b = "background: " + p)
      }
      return void 0 === b && (c.$parent.vm.state.topBoxOpened || (b = m.over || m.isSelect() || n ? "background: " + a.variantColorDark : "background: " + a.variantColorLight)), b
     };
    this.fitFilters = function() {
     var a, b, d, f, g, h, i, j, k, l = e.getCriticalEntryById(m.appId),
      n = "OR",
      o = !1,
      p = 0;
     if (b = e.getReadingAttributes(m.readingId, m.appId) || {}, void 0 !== l && (a = void 0 !== m.readingId ? l.content[m.readingId] : l.content[l.lemma], void 0 !== a)) {
      var q = c.$parent.vm.state.filters || {},
       r = Object.keys(q);
      if ("OR" === n) {
       d = !1;
       for (k in r) {
        if (g = r[k], f = q[g], f.totActive > 0 && (p++, void 0 !== b && void 0 !== b[g]))
         for (h = 0, i = f.values; h < i.length && !d;) i[i[h]].active && (j = i[i[h]].name, d = d || b[g] === j), h++;
        if (d) break
       }
       o = d
      } else {
       var s = !0;
       for (k in r)
        if (g = r[k], f = q[g], f.totActive > 0) {
         if (p++, d = !1, void 0 !== b && void 0 !== b[g])
          for (i = f.values, h = 0; h < i.length; h++) j = i[i[h]].name, d = d || b[g] === j;
         s = s && d
        } o = s
      }
     }
     return 0 === p && (o = !0), m.hidden = !o, o
    }, this.destroy = function() {
     var a = this.uid;
     d.destroy(a)
    }
   }]), angular.module("evtviewer.reading").directive("evtReading", ["evtReading", "parsedData", "evtInterface", function(a, b, c) {
    return {
     restrict: "E",
     scope: {
      appId: "@",
      readingId: "@",
      readingType: "@",
      variance: "@",
      scopeWit: "@",
      type: "@",
      overlap: "@",
      noText: "@"
     },
     transclude: !0,
     templateUrl: "src/reading/reading.directive.tmpl.html",
     controllerAs: "vm",
     controller: "ReadingCtrl",
     link: function(b, d, e) {
      b.currentViewMode = c.getState("currentViewMode"), b.inlineApparatus = c.isCriticalApparatusInline();
      var f = a.build(b.appId, b);
      b.inlineApparatus && c.getState("currentAppEntry") === b.appId && f.openApparatus(), b.vm.overlap && b.vm.range && angular.forEach(b.vm.range, function(a) {
       a.onmouseover = function() {
        f.toggleOverAppEntries()
       }, a.onmouseout = function() {
        f.toggleOverAppEntries()
       }, a.onclick = function() {
        f.callbackClick()
       }
      }), b.$on("$destroy", function() {
       f && f.destroy()
      })
     }
    }
   }]), angular.module("evtviewer.dialog", []), angular.module("evtviewer.dialog").constant("DIALOGDEFAULTS", {}).config(["evtDialogProvider", "configProvider", "DIALOGDEFAULTS", function(a, b, c) {
    var d = b.makeDefaults("dialog", c);
    a.setDefaults(d)
   }]), angular.module("evtviewer.dialog").provider("evtDialog", function() {
    var a = this.defaults;
    this.setDefaults = function(b) {
     a = b
    }, this.$get = ["$log", function(b) {
     var c = {},
      d = {},
      e = [],
      f = 0,
      g = (b.getInstance("dialog"), function() {
       var a = this;
       a.opened = !0
      }),
      h = function() {
       var a = this;
       a.opened = !1
      },
      i = function(a) {
       var b = this;
       b.title = a
      },
      j = function(a) {
       var b = this;
       b.content = a
      },
      k = function() {
       var a = this.uid;
       delete d[a]
      };
     return c.build = function(b) {
      var c, l = b.id || f++,
       m = b.type || "default",
       n = b.title || "",
       o = b.opened || !1,
       p = {};
      return "undefined" == typeof d[l] ? (p = {
       uid: l,
       defaults: angular.copy(a),
       type: m,
       content: c,
       title: n,
       opened: o,
       open: g,
       close: h,
       setTitle: i,
       updateContent: j,
       destroy: k
      }, d[l] = angular.extend(b.vm, p), e.push({
       id: l,
       type: m
      }), d[l]) : void 0
     }, c.getById = function(a) {
      return "undefined" !== d[a] ? d[a] : void 0
     }, c.getList = function() {
      return e
     }, c.getListByType = function(a) {
      var b = [];
      for (var c in d) d[c].type === a && b.push(d[c]);
      return b
     }, c.openByType = function(a) {
      for (var b in d) d[b].type === a && d[b].open()
     }, c.closeByType = function(a) {
      for (var b in d) d[b].type === a && d[b].close()
     }, c.closeAll = function() {
      for (var a in d) void 0 !== d[a].close() && d[a].close()
     }, c
    }]
   }), angular.module("evtviewer.dialog").directive("evtDialog", ["evtDialog", "evtInterface", function(a, b) {
    return {
     restrict: "E",
     scope: {
      id: "@",
      type: "@",
      title: "@",
      opened: "@"
     },
     replace: !0,
     transclude: !0,
     templateUrl: "src/dialog/dialog.dir.tmpl.html",
     link: function(b, c, d) {
      b.vm = {
       id: b.id,
       type: b.type,
       title: b.title,
       opened: b.opened
      };
      var e = a.build(b);
      b.$on("$destroy", function() {
       e && e.destroy()
      })
     }
    }
   }]), angular.module("evtviewer.tabsContainer", []), angular.module("evtviewer.tabsContainer").provider("evtTabsContainer", function() {
    var a = this.defaults;
    this.setDefaults = function(b) {
     a = b
    }, this.$get = ["$log", "parsedData", "evtInterface", function(b, c, d) {
     var e = {},
      f = {},
      g = [],
      h = 0,
      i = (b.getInstance("tabsContainer"), function() {
       var a = this.uid;
       delete f[a]
      }),
      j = function(a) {
       var b = this;
       b.subContentOpened = b.subContentOpened !== a ? a : ""
      },
      k = function(a, b) {
       a.tabs[b].showSubTabs = !a.tabs[b].showSubTabs;
       var c = document.getElementById(b + "_subTabsIcon");
       c && (c.className = a.tabs[b].showSubTabs ? "fa fa-caret-down" : "fa fa-caret-right")
      },
      l = function(a, b) {
       vm = this, vm.subContentOpened = a, b ? vm.subTabOpened = b : vm.tabs[a].subTabs ? (k(vm, a), vm.tabs[a].subTabs._indexes.indexOf(vm.subTabOpened) < 0 && (vm.subTabOpened = vm.tabs[a].subTabs._indexes[0] || "")) : vm.subTabOpened = ""
      };
     return e.build = function(b) {
      var e = b.id || h++,
       m = b.type || "",
       n = b.orientation || "vertical",
       o = {};
      if ("undefined" == typeof f[e]) {
       var p = "<span>No content</span>",
        q = {
         _indexes: []
        };
       switch (m) {
        case "projectInfo":
         var r = c.getProjectInfo().fileDescription || "";
         r && "" !== r && (q.fileDescription = {
          label: "PROJECT_INFO.FILE_DESCRIPTION",
          name: "fileDescription",
          content: r || p
         }, q._indexes.push("fileDescription"));
         var s = c.getProjectInfo().encodingDescription || "";
         s && "" !== s && (q.encodingDescription = {
          label: "PROJECT_INFO.ENCODING_DESCRIPTION",
          name: "encodingDescription",
          content: s || p
         }, q._indexes.push("encodingDescription"));
         var t = c.getProjectInfo().textProfile || "";
         t && "" !== t && (q.textProfile = {
          label: "PROJECT_INFO.TEXT_PROFILE",
          name: "textProfile",
          content: t || p
         }, q._indexes.push("textProfile"));
         var u = c.getProjectInfo().outsideMetadata || "";
         u && "" !== u && (q.outsideMetadata = {
          label: "PROJECT_INFO.OUTSIDE_METADATA",
          name: "outsideMetadata",
          content: u || p
         }, q._indexes.push("outsideMetadata"));
         var v = c.getProjectInfo().revisionHistory || "";
         if (v && "" !== v && (q.revisionHistory = {
           label: "PROJECT_INFO.REVISION_HISTORY",
           name: "revisionHistory",
           content: v || p
          }, q._indexes.push("revisionHistory")), c.getBibliographicRefsCollection()._indexes.length > 0) {
          var w = '<evt-bibliography data-id="mainBibliography"></evt-bibliography>';
          q.bibliography = {
           label: "PROJECT_INFO.BIBLIOGRAPHY",
           name: "bibliography",
           content: w || p,
           scrollDisabled: !0
          }, q._indexes.push("bibliography")
         }
         break;
        case "entitiesList":
         var x = c.getNamedEntitiesCollection();
         q._indexes = x._indexes;
         for (var y = 0; y < x._indexes.length; y++) {
          var z = x._indexes[y],
           A = x[z] && x[z]._icon ? x[z]._icon : "fa-list-ul",
           B = x[z] && x[z]._type ? x[z]._type : z,
           C = x[z] && x[z]._title ? x[z]._title : z;
          q[z] = {
           label: C,
           icon: A,
           name: z,
           content: '<evt-list data-list-id="' + z + '" data-list-type="' + B + '"></evt-list>',
           scrollDisabled: !0,
           noPadding: !0
          }
         }
         break;
        case "toc":
         q.toc = {
          label: "TOC.TITLE",
          name: "toc",
          content: "<evt-toc></evt-toc>"
         }, q._indexes.push("toc");
         var x = c.getNamedEntitiesCollection();
         if (x && x._indexes && x._indexes.length > 0) {
          q.entitiesLists = {
           label: "DIALOGS.NAMED_ENTITIES",
           name: "entitiesLists",
           content: "",
           subTabs: {
            _indexes: []
           },
           showSubTabs: !1,
           noPadding: !0
          }, q.entitiesLists.subTabs._indexes = x._indexes;
          for (var y = 0; y < x._indexes.length; y++) {
           var z = x._indexes[y],
            A = x[z] && x[z]._icon ? x[z]._icon : "fa-list-ul",
            B = x[z] && x[z]._type ? x[z]._type : z,
            C = x[z] && x[z]._title ? x[z]._title : z;
           q.entitiesLists.subTabs[z] = {
            label: C,
            icon: A,
            name: z,
            content: '<evt-list data-list-id="' + z + '" data-list-type="' + B + '"></evt-list>',
            scrollDisabled: !0,
            noPadding: !0
           }
          }
          q._indexes.push("entitiesLists")
         }
         if (c.getBibliographicRefsCollection()._indexes.length > 0) {
          var w = '<evt-bibliography data-id="mainBibliography"></evt-bibliography>';
          q.bibliography = {
           label: "PROJECT_INFO.BIBLIOGRAPHY",
           name: "bibliography",
           content: w || p,
           scrollDisabled: !0
          }, q._indexes.push("bibliography")
         }
         q.projectInfo = {
          label: "DIALOGS.PROJECT_INFO",
          name: "projectInfo",
          content: "",
          subTabs: {
           _indexes: []
          },
          showSubTabs: !1
         };
         var r = c.getProjectInfo().fileDescription || "";
         r && "" !== r && (q.projectInfo.subTabs.fileDescription = {
          label: "PROJECT_INFO.FILE_DESCRIPTION",
          name: "fileDescription",
          content: r || p
         }, q.projectInfo.subTabs._indexes.push("fileDescription"));
         var s = c.getProjectInfo().encodingDescription || "";
         s && "" !== s && (q.projectInfo.subTabs.encodingDescription = {
          label: "PROJECT_INFO.ENCODING_DESCRIPTION",
          name: "encodingDescription",
          content: s || p
         }, q.projectInfo.subTabs._indexes.push("encodingDescription"));
         var t = c.getProjectInfo().textProfile || "";
         t && "" !== t && (q.projectInfo.subTabs.textProfile = {
          label: "PROJECT_INFO.TEXT_PROFILE",
          name: "textProfile",
          content: t || p
         }, q.projectInfo.subTabs._indexes.push("textProfile"));
         var u = c.getProjectInfo().outsideMetadata || "";
         u && "" !== u && (q.projectInfo.subTabs.outsideMetadata = {
          label: "PROJECT_INFO.OUTSIDE_METADATA",
          name: "outsideMetadata",
          content: u || p
         }, q.projectInfo.subTabs._indexes.push("outsideMetadata"));
         var v = c.getProjectInfo().revisionHistory || "";
         v && "" !== v && (q.projectInfo.subTabs.revisionHistory = {
          label: "PROJECT_INFO.REVISION_HISTORY",
          name: "revisionHistory",
          content: v || p
         }, q.projectInfo.subTabs._indexes.push("revisionHistory")), q._indexes.push("projectInfo")
       }
       var D, E, F = d.getProperty("tabsContainerOpenedContent"),
        G = d.getProperty("tabsContainerOpenedTab");
       return D = F ? F : q._indexes.length > 0 ? q._indexes[0] : "", E = G ? G : q[D].subTabs && q[D].subTabs._indexes.length > 0 ? q[D].subTabs._indexes[0] : "", E && (q[D].showSubTabs = !0), o = {
        uid: e,
        type: m,
        orientation: n,
        defaults: angular.copy(a),
        tabs: q,
        subContentOpened: D,
        subTabOpened: E,
        toggleSubTabs: k,
        toggleSubContent: j,
        toggleSubTab: l,
        destroy: i
       }, f[e] = angular.extend(b.vm, o), g.push({
        id: e,
        type: m
       }), f[e]
      }
     }, e.setSubContentOpenedByType = function(a, b) {
      angular.forEach(f, function(c) {
       c.type === a && (c.subContentOpened = b)
      })
     }, e.setSubTabOpened = function(a, b, c) {
      angular.forEach(f, function(d) {
       d.type === a && (d.subContentOpened = b, d.subTabOpened = c)
      })
     }, e
    }]
   }), angular.module("evtviewer.tabsContainer").controller("TabsContainerCtrl", ["$log", "$scope", "parsedData", "evtInterface", function(a, b, c, d) {
    var e = a.getInstance("tabsContainer");
    e.log("TabsContainerCtrl running")
   }]), angular.module("evtviewer.tabsContainer").directive("evtTabsContainer", ["evtTabsContainer", "evtInterface", function(a, b) {
    return {
     restrict: "E",
     scope: {
      type: "@",
      orientation: "@"
     },
     templateUrl: "src/tabsContainer/tabsContainer.dir.tmpl.html",
     link: function(c, d, e) {
      c.vm = {
       id: c.id,
       type: c.type,
       orientation: c.orientation
      };
      var f = a.build(c);
      b.setTabContainerPanel(f.tabs), c.$watch(function() {
       return b.getHomePanel()
      }, function(b, c) {
       "" !== c && a.setSubContentOpenedByType("projectInfo", c)
      }), c.$on("$destroy", function() {
       f && ("projectInfo" === f.type && b.setHomePanel(""), f.destroy())
      })
     }
    }
   }]), angular.module("evtviewer.toc", []), angular.module("evtviewer.toc").provider("evtToc", function() {
    var a = this.defaults;
    this.setDefaults = function(b) {
     a = b
    }, this.$get = ["$log", "parsedData", "evtInterface", function(a, b, c) {
     var d = {},
      e = {},
      f = [],
      g = 0;
     a.getInstance("toc");
     return d.build = function(a) {
      var c = g++,
       d = {};
      if (!e[c]) {
       var h = b.getDocuments()._indexes,
        i = b.getDivs(),
        j = b.getDivs()._indexes.main,
        k = b.getDivs()._indexes.subDivs,
        l = b.getPages(),
        m = {},
        n = h.map(function(a) {
         var c = b.getDocument(a),
          d = {
           value: c.value,
           title: c.title,
           pages: c.pages,
           divs: {
            front: [],
            body: [],
            back: [],
            length: 0
           }
          };
         return angular.forEach(j[a], function(a) {
          var c = b.getDiv(a);
          d.divs[c.section].push(a), d.divs.length++
         }), m[a] = !1, d
        });
       return d = {
        currentId: c,
        docs: n,
        docsId: h,
        divs: i,
        mainDivs: j,
        subDivs: k,
        pages: l,
        keys: ["front", "body", "back"],
        open: m
       }, e[c] = angular.extend(a.vm, d), f.push({
        id: c
       }), e[c]
      }
     }, d.destroy = function(a) {
      delete e[a]
     }, d
    }]
   }), angular.module("evtviewer.toc").controller("TocCtrl", ["$log", "evtInterface", "parsedData", "config", function(a, b, c, d) {
    var e = a.getInstance("toc"),
     f = this,
     g = function() {
      for (var a = c.getEditions(), b = [], d = 0; d < a.length; d++) a[d].visible && b.push(a[d].value);
      return b
     };
    this.goToDiv = function(a, c) {
     var d = g();
     "critical" !== b.getState("currentEdition") && d.indexOf("critical") > -1 && b.updateState(currentEdition, "critical"), b.updateState("currentDoc", a), b.updateDiv(a, c), b.updateState("secondaryContent", ""), b.updateUrl()
    }, this.goToPage = function(a, c) {
     var e = g();
     if ("critical" === b.getState("currentEdition") && e > 0) {
      var f = e.indexOf(d.defaultEdition) > -1 ? d.defaultEdition : e[0];
      b.updateState(currentEdition, f)
     }
     b.updateState("currentDoc", a), b.updateState("currentPage", c), b.updateState("secondaryContent", ""), b.updateUrl()
    }, this.openDetails = function(a) {
     f.open[a] = !f.open[a]
    }, e.log("TocCtrl running")
   }]), angular.module("evtviewer.toc").directive("evtToc", ["evtToc", "evtInterface", function(a, b) {
    return {
     restrict: "E",
     scope: {},
     transclude: !0,
     templateUrl: "src/toc/toc.dir.tmpl.html",
     controllerAs: "vm",
     controller: "TocCtrl",
     link: function(b, c, d) {
      var e = a.build(b);
      b.$on("$destroy", function() {
       e && a.destroy(e.currentId)
      })
     }
    }
   }]), angular.module("evtviewer.quote", []), angular.module("evtviewer.quote").constant("QUOTEDEFAULTS", {
    openTriggerEvent: "click"
   }).config(["evtQuoteProvider", "configProvider", "QUOTEDEFAULTS", function(a, b, c) {
    var d = b.makeDefaults("quote", c);
    a.setDefaults(d)
   }]), angular.module("evtviewer.quote").provider("evtQuote", function() {
    var a = this.defaults;
    this.setDefaults = function(b) {
     a = b
    };
    var b = "";
    this.$get = ["parsedData", "evtInterface", "evtSourcesApparatus", function(c, d, e) {
     var f = {},
      g = {},
      h = [],
      i = 0;
     return f.build = function(b) {
      var c = i++,
       e = b.quoteId || void 0;
      if (void 0 === g[c]) {
       var j = {
        uid: c,
        scopeWit: b.scopeWit || "",
        quoteId: e,
        scopeViewMode: d.getState("currentViewMode"),
        type: b.type || "",
        over: !1,
        apparatus: {
         opened: !1,
         content: {},
         _loaded: !1,
         inline: b.inlineApparatus
        },
        selected: e === f.getCurrentSourcesEntry(),
        openTriggerEvent: angular.copy(a.openTriggerEvent),
        defaults: angular.copy(a)
       };
       return g[c] = angular.extend(b.vm, j), h.push({
        id: c
       }), g[c]
      }
     }, f.getById = function(a) {
      return void 0 !== g[a] ? g[a] : void 0
     }, f.getList = function() {
      return h
     }, f.setCurrentSourcesEntry = function(a) {
      d.getState("currentQuote") !== a && d.updateState("currentQuote", a), b = a
     }, f.getCurrentSourcesEntry = function() {
      return b
     }, f.mouseOutAll = function() {
      angular.forEach(g, function(a) {
       a.mouseOut()
      })
     }, f.mouseOverByQuoteId = function(a) {
      angular.forEach(g, function(b) {
       b.quoteId === a ? b.mouseOver() : b.mouseOut()
      })
     }, f.unselectAll = function() {
      angular.forEach(g, function(a) {
       a.unselect()
      }), d.updateState("currentQuote", "")
     }, f.closeAllApparatus = function(a) {
      angular.forEach(g, function(b) {
       void 0 === a ? b.closeApparatus() : b.uid !== a && b.closeApparatus()
      })
     }, f.selectById = function(a) {
      angular.forEach(g, function(b) {
       b.quoteId === a ? b.setSelected() : b.unselect()
      }), d.updateState("currentQuote", a), f.setCurrentSourcesEntry(a)
     }, f.destroy = function(a) {
      delete g[a]
     }, f
    }]
   }), angular.module("evtviewer.quote").controller("QuoteCtrl", ["$log", "$scope", "evtQuote", "evtPopover", "evtInterface", "evtApparatuses", "evtBox", "evtSourcesApparatusEntry", "evtSourceSeg", "parsedData", function(a, b, c, d, e, f, g, h, i, j) {
    var k = this;
    a.getInstance("quote");
    this.mouseOver = function() {
     k.over = !0
    }, this.mouseOut = function() {
     k.over = !1
    }, this.setSelected = function() {
     k.selected = !0
    }, this.unselect = function() {
     k.selected = !1
    }, this.isSelected = function() {
     return k.selected
    }, this.isApparatusOpened = function() {
     return k.apparatus.opened && !b.$parent.vm.state.topBoxOpened
    }, this.closeApparatus = function() {
     k.apparatus.opened = !1
    }, this.openApparatus = function() {
     k.apparatus.opened = !0, k.apparatus._loaded = !0
    }, this.toggleOverQuotes = function(a) {
     a.stopPropagation(), k.over === !1 ? (c.mouseOverByQuoteId(k.quoteId), h.mouseOverByQuoteId(k.quoteId)) : (c.mouseOutAll(), h.mouseOutAll())
    }, this.toggleSelectQuotes = function(a) {
     k.selected === !1 ? (c.selectById(k.quoteId), h.selectById(k.quoteId), k.apparatus.inline || (f.setCurrentApparatus("sources"), f.alignScrollToQuote(k.quoteId)), e.updateState("currentQuote", k.quoteId)) : (c.unselectAll(), e.updateState("currentQuote", ""), h.unselectAll()), e.updateUrl()
    }, this.toggleApparatus = function(a) {
     d.closeAll(), k.over && (k.apparatus._loaded || (k.apparatus._loaded = !0), c.closeAllApparatus(k.uid), k.apparatus.opened = !k.apparatus.opened)
    }, this.callbackClick = function(a) {
     a.stopPropagation(), k.over && (k.toggleSelectQuotes(a), (!k.isSelected() || k.apparatus.inline && !k.apparatus.opened) && k.toggleApparatus(a))
    }, this.openApparatusSubContent = function(a) {
     k.apparatus._subContentOpened = a
    }, this.hasScopeSource = function() {
     var a = j.getSources()._indexes.quotesRef[k.quoteId] || void 0,
      b = e.getState("currentSourceText");
     return void 0 !== a && a.indexOf(b) >= 0 ? !0 : !1
    }, this.destroy = function() {
     c.destroy(this.uid)
    }
   }]), angular.module("evtviewer.quote").directive("evtQuote", ["evtQuote", "parsedData", "evtInterface", function(a, b, c) {
    return {
     restrict: "E",
     scope: {
      quoteId: "@",
      scopeWit: "@",
      type: "@"
     },
     transclude: !0,
     templateUrl: "src/quote/quote.directive.tmpl.html",
     controllerAs: "vm",
     controller: "QuoteCtrl",
     link: function(b, d, e) {
      b.inlineApparatus = c.isSourcesInline();
      var f = a.build(b);
      b.$on("$destroy", function() {
       f && f.destroy()
      })
     }
    }
   }]), angular.module("evtviewer.sourcesApparatusEntry", []), angular.module("evtviewer.sourcesApparatusEntry").constant("SOURCESAPPENTRY", {
    firstSubContentOpened: ""
   }).config(["evtSourcesApparatusEntryProvider", "configProvider", "SOURCESAPPENTRY", function(a, b, c) {
    var d = b.makeDefaults("sourcesApparatusEntry", c);
    a.setDefaults(d)
   }]), angular.module("evtviewer.sourcesApparatusEntry").provider("evtSourcesApparatusEntry", function() {
    var a = this.defaults;
    this.setDefaults = function(b) {
     a = b
    };
    var b = "";
    this.$get = ["parsedData", "evtSourcesApparatus", "$log", "evtInterface", function(c, d, e, f) {
     var g = {},
      h = {},
      i = [],
      j = 0;
     return g.build = function(b) {
      var e = j++,
       g = (b.quoteId || void 0, b.scopeWit || "");
      if (void 0 === h[e]) {
       var k, l, m, n, o = "",
        p = {
         _indexes: []
        },
        q = {
         _indexes: []
        },
        r = c.getQuote(b.quoteId);
       if (void 0 !== r) {
        k = d.getContent(r, g), l = k.quote, m = k.sources, m.length = k.sources.length;
        for (var s in m) p._indexes.push(m[s].id), p[m[s].id] = m[s], p[m[s].id].tabs = {
         _indexes: []
        }, ("" !== p[m[s].id].text || "" !== p[m[s].id].url) && (p[m[s].id].tabs._indexes.push("text"), p[m[s].id].tabs.text = {
         label: "SOURCES.TEXT"
        }), "" !== p[m[s].id].bibl && (p[m[s].id].tabs._indexes.push("biblRef"), p[m[s].id].tabs.biblRef = {
         label: "SOURCES.BIBLIOGRAPHIC_REFERENCE"
        }), "" !== p[m[s].id]._xmlSource && (p[m[s].id].tabs._indexes.push("xmlSource"), p[m[s].id].tabs.xmlSource = {
         label: "SOURCES.XML"
        });
        for (var t = m && m[0] && p[m[0].id] ? p[m[0].id].tabs : {
          _indexes: []
         }, u = 0; u < t._indexes.length; u++) {
         var v = t._indexes[u];
         q._indexes.push(t._indexes[u]), q[v] = t[v]
        }
        "" !== r._xmlSource && (n = k._xmlSource), q._indexes.length > 0 && "" !== a.firstSubContentOpened && (o = q._indexes.indexOf(a.firstSubContentOpened) < 0 ? q._indexes[0] : a.firstSubContentOpened)
       }
       var w = {
        uid: e,
        quoteId: b.quoteId,
        head: l,
        xml: n,
        sources: m,
        srcList: p,
        _activeSource: m[0] ? m[0].id : void 0,
        _overSource: "",
        tabs: q,
        _subContentOpened: o,
        over: !1,
        selected: !1,
        currentViewMode: f.getState("currentViewMode")
       };
       return h[e] = angular.extend(b.vm, w), i.push({
        id: e
       }), h[e]
      }
     }, g.getById = function(a) {
      return void 0 !== h[a] ? h[a] : void 0
     }, g.getList = function() {
      return i
     }, g.setCurrentSourcesEntry = function(a) {
      f.getCurrentQuote !== a && f.updateState("currentQuote", a), b = a
     }, g.getCurrentSourcesEntry = function() {
      return b
     }, g.mouseOutAll = function() {
      angular.forEach(h, function(a) {
       a.mouseOut()
      })
     }, g.mouseOverByQuoteId = function(a) {
      angular.forEach(h, function(b) {
       b.quoteId === a ? b.mouseOver() : b.mouseOut()
      })
     }, g.unselectAll = function() {
      angular.forEach(h, function(a) {
       a.unselect()
      })
     }, g.selectById = function(a) {
      angular.forEach(h, function(b) {
       b.quoteId === a ? b.setSelected() : (b.unselect(), b.closeSubContent())
      }), g.setCurrentSourcesEntry(a)
     }, g.destroy = function(a) {
      delete h[a]
     }, g
    }]
   }), angular.module("evtviewer.sourcesApparatusEntry").controller("sourcesApparatusEntryCtrl", ["$scope", "evtSourcesApparatusEntry", "evtQuote", "evtBox", "evtApparatuses", "evtInterface", "parsedData", function(a, b, c, d, e, f, g) {
    a.content = {};
    var h = this;
    this.toggleSource = function(a) {
     if (h._activeSource !== a) {
      h._activeSource = a, h.tabs = {
       _indexes: []
      };
      for (var b = h.srcList[h._activeSource].tabs, c = 0; c < b._indexes.length; c++) {
       var d = b._indexes[c];
       h.tabs._indexes.push(b._indexes[c]), h.tabs[d] = b[d]
      }
     }
    }, this.toggleOverSource = function(a, b) {
     h._overSource !== b ? h._overSource = b : h._overSource = ""
    }, this.getActiveSourceAbbr = function(a) {
     for (var b = 0; b < h.sources.length; b++)
      if (h.sources[b].id === a) return h.sources[b].abbr
    }, this.mouseOver = function() {
     h.over = !0
    }, this.mouseOut = function() {
     h.over = !1
    }, this.setSelected = function() {
     h.selected = !0
    }, this.unselect = function() {
     h.selected = !1, h.closeSubContent()
    }, this.isSelect = function() {
     return f.getState("currentQuote") === h.quoteId ? !0 : h.selected
    }, this.closeSubContent = function() {
     h._subContentOpened = ""
    }, this.toggleSubContent = function(a) {
     h._subContentOpened !== a ? h._subContentOpened = a : h._subContentOpened = ""
    }, this.toggleOverSourcesEntries = function(a) {
     a.stopPropagation(), h.over ? (b.mouseOutAll(), "readingTxt" === h.currentViewMode && c.mouseOutAll()) : (b.mouseOverByQuoteId(h.quoteId), "readingTxt" === h.currentViewMode && c.mouseOverByQuoteId(h.quoteId))
    }, this.callbackClick = function(a) {
     a.stopPropagation(), "readingTxt" === h.currentViewMode && (b.selectById(h.quoteId), c.selectById(h.quoteId))
    }, this.alignQuotes = function() {
     d.alignScrollToQuote(h.quoteId), e.alignScrollToQuote(h.quoteId), c.selectById(h.quoteId)
    }, this.isSourceTextAvailable = function(a) {
     for (var b = g.getSources()._indexes.availableTexts, c = !1, d = 0; d < b.length; d++) b[d].id === a && (c = !0);
     return c
    }, this.destroy = function() {
     b.destroy(this.uid)
    }
   }]), angular.module("evtviewer.sourcesApparatusEntry").directive("evtSourcesApparatusEntry", ["evtSourcesApparatusEntry", "parsedData", "evtInterface", function(a, b, c) {
    return {
     restrict: "E",
     scope: {
      quoteId: "@",
      scopeWit: "@"
     },
     transclude: !0,
     templateUrl: "src/sourcesApparatusEntry/sourcesApparatusEntry.directive.tmpl.html",
     controllerAs: "vm",
     controller: "sourcesApparatusEntryCtrl",
     link: function(b, d, e) {
      b.scopeViewMode = c.getState("currentViewMode");
      var f = a.build(b);
      b.$on("$destroy", function() {
       f && f.destroy()
      })
     }
    }
   }]), angular.module("evtviewer.sourcesApparatusEntry").directive("evtSourceRef", ["evtSourcesApparatusEntry", "evtBox", "evtInterface", "parsedData", "evtSourceSeg", "evtApparatuses", function(a, b, c, d, e, f) {
    return {
     restrict: "E",
     scope: {
      sourceId: "@",
      sourceAbbr: "@"
     },
     transclude: !0,
     templateUrl: "src/sourcesApparatusEntry/sourceRef.directive.tmpl.html",
     link: function(a, e, g) {
      a.openSource = function() {
       var e = a.sourceId;
       c.getState("currentSourceText") !== e && (c.updateCurrentSourceText(e), c.updateState("currentSource", e)), "srcTxt" !== c.getState("currentViewMode") && c.updateState("currentViewMode", "srcTxt");
       var g = "",
        h = "",
        i = c.getState("currentQuote") || "",
        j = d.getSources()._indexes.correspId[a.sourceId] || [];
       for (var k in Object.keys(j))
        for (var l = 0; l < j[Object.keys(j)[k]].length; l++) j[Object.keys(j)[k]][l] === i && (g = j[Object.keys(j)[k]][l], h = Object.keys(j)[k]);
       "" !== g && "" !== h && (b.alignScrollToQuote(g, h), f.alignScrollToQuote(g, h))
      }
     }
    }
   }]), angular.module("evtviewer.sourcesApparatusEntry").provider("evtSourceSeg", function() {
    var a = "";
    this.$get = ["parsedData", "evtSourcesApparatus", "evtInterface", function(b, c, d) {
     var e = {},
      f = {},
      g = [],
      h = 0;
     return e.build = function(a) {
      var e, i = h++,
       j = a.segId || void 0,
       k = a.sourceId || void 0;
      if (void 0 === f[i]) {
       for (var l, m = d.getState("currentQuote") || "", n = [], o = b.getSources()._indexes.correspId[k][j], p = 0; p < o.length; p++) l = c.getContent(b.getQuote(o[p]), "").quote, n.push({
        id: o[p],
        text: l
       });
       o.indexOf(m) >= 0 && (e = m);
       var q = {
        uid: i,
        segId: j,
        quoteId: e,
        sourceId: k,
        over: !1,
        selected: !1,
        panel: {
         quotes: n,
         _quoteOver: "",
         _quoteSelected: e || ""
        }
       };
       return f[i] = angular.extend(a.vm, q), g.push({
        id: i
       }), f[i]
      }
     }, e.getById = function(a) {
      return void 0 !== f[a] ? f[a] : void 0
     }, e.getList = function() {
      return g
     }, e.mouseOutAll = function() {
      angular.forEach(f, function(a) {
       a.mouseOut()
      })
     }, e.mouseOverBySegId = function(a) {
      angular.forEach(f, function(b) {
       b.segId === a ? b.mouseOver() : b.mouseOut()
      })
     }, e.selectBySegId = function(a) {
      angular.forEach(f, function(b) {
       b.segId === a ? b.setSelected() : (b.unselect(), b.unselectQuote())
      })
     }, e.unselectAll = function() {
      angular.forEach(f, function(a) {
       a.unselect(), a.unselectQuote()
      })
     }, e.updateCurrentQuote = function(b) {
      a !== b && angular.forEach(f, function(c) {
       for (var d = c.panel.quotes, e = 0; e < d.length; e++) d[e].id === b && c.getQuoteId() !== b && (c.setQuoteId(b), a = b)
      })
     }, e.getCurrentQuote = function() {
      return a
     }, e.destroy = function(a) {
      delete f[a]
     }, e
    }]
   }), angular.module("evtviewer.sourcesApparatusEntry").controller("sourceSegCtrl", ["evtInterface", "evtSourceSeg", "evtBox", "evtQuote", "evtApparatuses", function(a, b, c, d, e) {
    var f = this;
    this.mouseOver = function() {
     f.over = !0
    }, this.mouseOut = function() {
     f.over = !1
    }, this.setSelected = function() {
     f.selected = !0
    }, this.unselect = function() {
     f.selected = !1
    }, this.getQuoteId = function() {
     return f.quoteId
    }, this.setQuoteId = function(a) {
     f.quoteId !== a && (f.quoteId = a)
    }, this.unselectQuote = function() {
     f.panel._quoteOver = "", f.panel._quoteSelected = ""
    }, this.toggleOverSeg = function(a, c) {
     a.stopPropagation(), f.over === !1 ? b.mouseOverBySegId(c) : b.mouseOutAll()
    }, this.callbackClick = function(a, c) {
     a.stopPropagation(), f.selected ? b.unselectAll() : b.selectBySegId(c)
    }, this.toggleQuoteOver = function(a, c) {
     a.stopPropagation(), f.panel._quoteOver !== c ? (b.mouseOutAll(), f.panel._quoteOver = c) : f.panel._quoteOver = ""
    }, this.selectQuote = function(a, g) {
     a.stopPropagation(), f.quoteId = g, f.panel._quoteSelected = g, b.updateCurrentQuote(g), d.selectById(g), c.alignScrollToQuote(g, f.segId), e.alignScrollToQuote(g, f.segId)
    }, this.destroy = function() {
     b.destroy(this.uid)
    }
   }]), angular.module("evtviewer.sourcesApparatusEntry").directive("evtSourceSeg", ["evtSourceSeg", function(a) {
    return {
     restrict: "E",
     scope: {
      segId: "@",
      sourceId: "@"
     },
     transclude: !0,
     templateUrl: "src/sourcesApparatusEntry/sourceSeg.directive.tmpl.html",
     controllerAs: "vm",
     controller: "sourceSegCtrl",
     link: function(b, c, d) {
      var e = a.build(b);
      b.$on("$destroy", function() {
       e && e.destroy()
      })
     }
    }
   }]), angular.module("evtviewer.analogue", []), angular.module("evtviewer.analogue").constant("ANALOGUEDEFAULTS", {}).config(["evtAnalogueProvider", "configProvider", "ANALOGUEDEFAULTS", function(a, b, c) {
    var d = b.makeDefaults("analogue", c);
    a.setDefaults(d)
   }]), angular.module("evtviewer.analogue").provider("evtAnalogue", function() {
    var a = this.defaults;
    this.setDefaults = function(b) {
     a = b
    };
    var b = "";
    this.$get = ["parsedData", "evtInterface", function(c, d) {
     var e = {},
      f = {},
      g = [],
      h = 0;
     return e.build = function(b) {
      var c = h++,
       i = b.analogueId || void 0;
      if (void 0 === f[c]) {
       var j = {
        uid: c,
        scopeWit: b.scopeWit || "",
        analogueId: i,
        scopeViewMode: d.getState("currentViewMode"),
        over: !1,
        selected: i === e.getCurrentAnaloguesEntry(),
        apparatus: {
         opened: !1,
         content: {},
         _loaded: !1,
         inline: b.inlineApparatus
        },
        openTriggerEvent: angular.copy(a.openTriggerEvent),
        defaults: angular.copy(a)
       };
       return f[c] = angular.extend(b.vm, j), g.push({
        id: c
       }), f[c]
      }
     }, e.getById = function(a) {
      return void 0 !== f[a] ? f[a] : void 0
     }, e.getList = function() {
      return g
     }, e.setCurrentAnaloguesEntry = function(a) {
      d.getState("currentAnalogue") !== a && d.updateState("currentAnalogue", a), b = a
     }, e.getCurrentAnaloguesEntry = function() {
      return b
     }, e.mouseOutAll = function() {
      angular.forEach(f, function(a) {
       a.mouseOut()
      })
     }, e.mouseOverByAnalogueId = function(a) {
      angular.forEach(f, function(b) {
       b.analogueId === a ? b.mouseOver() : b.mouseOut()
      })
     }, e.unselectAll = function() {
      angular.forEach(f, function(a) {
       a.unselect()
      }), d.updateState("currentAnalogue", "")
     }, e.closeAllApparatus = function(a) {
      angular.forEach(f, function(b) {
       void 0 === a ? b.closeApparatus() : b.uid !== a && b.closeApparatus()
      })
     }, e.selectById = function(a) {
      angular.forEach(f, function(b) {
       b.analogueId === a ? b.setSelected() : b.unselect()
      }), d.updateState("currentAnalogue", a), e.setCurrentAnaloguesEntry(a)
     }, e.destroy = function(a) {
      delete f[a]
     }, e
    }]
   }), angular.module("evtviewer.analogue").controller("AnalogueCtrl", ["$log", "$scope", "evtAnalogue", "evtPopover", "evtInterface", "evtApparatuses", "evtBox", "evtAnaloguesApparatusEntry", function(a, b, c, d, e, f, g, h) {
    var i = this;
    a.getInstance("analogue");
    this.mouseOver = function() {
     i.over = !0
    }, this.mouseOut = function() {
     i.over = !1
    }, this.setSelected = function() {
     i.selected = !0
    }, this.unselect = function() {
     i.selected = !1
    }, this.isSelect = function() {
     return i.selected
    }, this.isApparatusOpened = function() {
     return i.apparatus.opened && !b.$parent.vm.state.topBoxOpened
    }, this.closeApparatus = function() {
     i.apparatus.opened = !1
    }, this.openApparatus = function() {
     i.apparatus.opened = !0
    }, this.toggleOverAnalogues = function(a) {
     a.stopPropagation(), i.over === !1 ? (c.mouseOverByAnalogueId(i.analogueId), h.mouseOverByAnalogueId(i.analogueId)) : (c.mouseOutAll(), h.mouseOutAll())
    }, this.toggleSelectAnalogues = function(a) {
     i.selected === !1 ? i.apparatus.opened || c.selectById(i.analogueId) : i.apparatus.opened && (c.unselectAll(), c.closeAllApparatus()), e.updateUrl()
    }, this.toggleApparatus = function(a) {
     d.closeAll(), i.over && (i.apparatus.inline ? i.apparatus._loaded || (i.apparatus._loaded = !0) : ("analogues" !== f.getCurrentApparatus() && f.setCurrentApparatus("analogues"), h.selectById(i.analogueId), f.alignScrollToAnalogue(i.analogueId)), c.closeAllApparatus(i.uid), i.apparatus.opened = !i.apparatus.opened)
    }, this.callbackClick = function(a) {
     a.stopPropagation(), i.over && (i.toggleSelectAnalogues(a), i.isSelect() && !i.apparatus.opened ? i.toggleApparatus(a) : h.unselectAll())
    }, this.destroy = function() {
     c.destroy(this.uid)
    }
   }]), angular.module("evtviewer.analogue").directive("evtAnalogue", ["evtAnalogue", "evtInterface", function(a, b) {
    return {
     restrict: "E",
     scope: {
      analogueId: "@",
      scopeWit: "@"
     },
     transclude: !0,
     templateUrl: "src/analogue/analogue.directive.tmpl.html",
     controllerAs: "vm",
     controller: "AnalogueCtrl",
     link: function(c, d, e) {
      c.inlineApparatus = b.isAnaloguesInline();
      var f = a.build(c);
      c.$on("$destroy", function() {
       f && f.destroy()
      })
     }
    }
   }]), angular.module("evtviewer.analoguesApparatusEntry", []), angular.module("evtviewer.analoguesApparatusEntry").constant("ANALOGUESAPPENTRY", {
    firstSubContentOpened: ""
   }).config(["evtAnaloguesApparatusEntryProvider", "configProvider", "ANALOGUESAPPENTRY", function(a, b, c) {
    var d = b.makeDefaults("analoguesApparatusEntry", c);
    a.setDefaults(d)
   }]), angular.module("evtviewer.analoguesApparatusEntry").provider("evtAnaloguesApparatusEntry", function() {
    var a = this.defaults;
    this.setDefaults = function(b) {
     a = b
    };
    var b = "";
    this.$get = ["parsedData", "$log", "evtAnaloguesApparatus", "evtInterface", function(c, d, e, f) {
     var g = {},
      h = {},
      i = [],
      j = 0;
     return g.build = function(b) {
      var d = j++,
       g = (b.analogueId || void 0, b.scopeWit || "");
      if (void 0 === h[d]) {
       var k, l, m, n, o, p = "",
        q = {
         _indexes: []
        },
        r = {
         _indexes: []
        },
        s = c.getAnalogue(b.analogueId);
       if (void 0 !== s) {
        k = e.getContent(s, g), l = k.header, m = k.sources, m.length = k.sources.length;
        for (var t in m) q._indexes.push(m[t].id), q[m[t].id] = m[t], q[m[t].id].tabs = {
         _indexes: []
        }, "" !== q[m[t].id].text && (q[m[t].id].tabs._indexes.push("text"), q[m[t].id].tabs.text = {
         label: "ANALOGUES.TEXT"
        }), "" !== q[m[t].id].bibl && (q[m[t].id].tabs._indexes.push("biblRef"), q[m[t].id].tabs.biblRef = {
         label: "ANALOGUES.BIBLIOGRAPHIC_REFERENCE"
        }), "" !== q[m[t].id]._xmlSource && (q[m[t].id].tabs._indexes.push("xmlSource"), q[m[t].id].tabs.xmlSource = {
         label: "ANALOGUES.XML"
        });
        for (var u = q[m[0].id].tabs, v = 0; v < u._indexes.length; v++) {
         var w = u._indexes[v];
         r._indexes.push(u._indexes[v]), r[w] = u[w]
        }
        "" !== s._xmlSource && (o = k._xmlSource), r._indexes.length > 0 && "" !== a.firstSubContentOpened && (p = r._indexes.indexOf(a.firstSubContentOpened) < 0 ? r._indexes[0] : a.firstSubContentOpened)
       }
       n = void 0 !== m && void 0 !== m[0].id ? m[0].id : void 0;
       var x = {
        uid: d,
        analogueId: b.analogueId,
        header: l,
        xml: o,
        sources: m,
        srcList: q,
        _activeSource: n,
        _overSource: "",
        tabs: r,
        _subContentOpened: p,
        over: !1,
        selected: !1,
        currentViewMode: f.getState("currentViewMode")
       };
       return h[d] = angular.extend(b.vm, x), i.push({
        id: d
       }), h[d]
      }
     }, g.getById = function(a) {
      return void 0 !== h[a] ? h[a] : void 0
     }, g.getList = function() {
      return i
     }, g.setCurrentAnaloguesEntry = function(a) {
      f.getCurrentAnalogue !== a && f.updateState("currentAnalogue", a), b = a
     }, g.getCurrentAnaloguesEntry = function() {
      return b
     }, g.mouseOutAll = function() {
      angular.forEach(h, function(a) {
       a.mouseOut()
      })
     }, g.mouseOverByAnalogueId = function(a) {
      angular.forEach(h, function(b) {
       b.analogueId === a ? b.mouseOver() : b.mouseOut()
      })
     }, g.unselectAll = function() {
      angular.forEach(h, function(a) {
       a.unselect()
      })
     }, g.selectById = function(a) {
      angular.forEach(h, function(b) {
       b.analogueId === a ? b.setSelected() : (b.unselect(), b.closeSubContent())
      }), g.setCurrentAnaloguesEntry(a)
     }, g.destroy = function(a) {
      delete h[a]
     }, g
    }]
   }), angular.module("evtviewer.analoguesApparatusEntry").controller("analoguesApparatusEntryCtrl", ["evtAnaloguesApparatusEntry", "evtInterface", "evtAnalogue", "evtBox", "evtApparatuses", "parsedData", function(a, b, c, d, e, f) {
    var g = this;
    this.toggleSource = function(a) {
     if (g._activeSource !== a) {
      g._activeSource = a, g.tabs = {
       _indexes: []
      };
      for (var b = g.srcList[g._activeSource].tabs, c = 0; c < b._indexes.length; c++) {
       var d = b._indexes[c];
       g.tabs._indexes.push(b._indexes[c]), g.tabs[d] = b[d]
      }
     }
    }, this.toggleOverSource = function(a, b) {
     g._overSource !== b ? g._overSource = b : g._overSource = ""
    }, this.getActiveSourceAbbr = function(a) {
     for (var b = 0; b < g.sources.length; b++)
      if (g.sources[b].id === a) return g.sources[b].abbr
    }, this.toggleSubContent = function(a) {
     g._subContentOpened !== a ? g._subContentOpened = a : g._subContentOpened = ""
    }, this.mouseOver = function() {
     g.over = !0
    }, this.mouseOut = function() {
     g.over = !1
    }, this.setSelected = function() {
     g.selected = !0
    }, this.unselect = function() {
     g.selected = !1, g.closeSubContent()
    }, this.isSelect = function() {
     return b.getState("currentAnalogue") === g.analogueId ? !0 : g.selected
    }, this.closeSubContent = function() {
     g._subContentOpened = ""
    }, this.toggleOverAnaloguesEntries = function(b) {
     b.stopPropagation(), g.over ? (a.mouseOutAll(), "readingTxt" === g.currentViewMode && c.mouseOutAll()) : (a.mouseOverByAnalogueId(g.analogueId), "readingTxt" === g.currentViewMode && c.mouseOverByAnalogueId(g.analogueId))
    }, this.callbackClick = function(b) {
     b.stopPropagation(), "readingTxt" === g.currentViewMode && (a.selectById(g.analogueId), c.selectById(g.analogueId))
    }, this.alignAnalogues = function() {
     d.alignScrollToAnalogue(g.analogueId), e.alignScrollToAnalogue(g.analogueId), c.selectById(g.analogueId)
    }, this.destroy = function() {
     a.destroy(this.uid)
    }
   }]), angular.module("evtviewer.analoguesApparatusEntry").directive("evtAnaloguesApparatusEntry", ["evtAnaloguesApparatusEntry", "parsedData", "evtInterface", function(a, b, c) {
    return {
     restrict: "E",
     scope: {
      analogueId: "@",
      scopeWit: "@"
     },
     transclude: !0,
     templateUrl: "src/analoguesApparatusEntry/analoguesApparatusEntry.directive.tmpl.html",
     controllerAs: "vm",
     controller: "analoguesApparatusEntryCtrl",
     link: function(b, d, e) {
      b.scopeViewMode = c.getState("currentViewMode");
      var f = a.build(b);
      b.$on("$destroy", function() {
       f && f.destroy()
      })
     }
    }
   }]), angular.module("evtviewer.apparatuses", []), angular.module("evtviewer.apparatuses").constant("APPARATUSESDEFAULTS", {
    currentApparatus: "Critical Apparatus",
    apparatusesOrder: ["Sources", "Critical Apparatus", "Analogues"],
    appStructure: "tabs"
   }).config(["evtApparatusesProvider", "configProvider", "APPARATUSESDEFAULTS", function(a, b, c) {
    var d = b.makeDefaults("apparatuses", c);
    a.setDefaults(d)
   }]), angular.module("evtviewer.apparatuses").provider("evtApparatuses", function() {
    var a = this.defaults;
    this.setDefaults = function(b) {
     a = b
    };
    var b = "";
    this.$get = ["parsedData", "evtInterface", function(c, d) {
     var e = {},
      f = {},
      g = [],
      h = 0;
     return e.build = function(b) {
      var e = h++;
      if (void 0 === f[e]) {
       var i = (b.currentApparatus || "criticalApparatus", {
         _indexes: []
        }),
        j = a.appStructure,
        k = [],
        l = [],
        m = [],
        n = c.getCriticalEntries(),
        o = c.getQuotes(),
        p = c.getAnalogues();
       if (n._indexes.appEntries)
        for (var q = 0; q < n._indexes.appEntries.length; q++) {
         var r = n._indexes.appEntries[q];
         !n[r] || void 0 !== n[r]._isInMainVersion && n[r]._isInMainVersion !== !0 || k.push(r)
        }
       if (o._indexes.encodingStructure)
        for (var s = 0; s < o._indexes.encodingStructure.length; s++) {
         var t = o._indexes.encodingStructure[s];
         !o[t] || void 0 !== o[t]._isInMainVersion && o[t]._isInMainVersion !== !0 || l.push(t)
        }
       if (p._indexes.encodingStructure)
        for (var u = 0; u < p._indexes.encodingStructure.length; u++) {
         var v = p._indexes.encodingStructure[u];
         !p[v] || void 0 !== p[v]._isInMainVersion && p[v]._isInMainVersion !== !0 || m.push(v)
        }!d.isCriticalApparatusInline() && k.length > 0 && (i.criticalApparatus = {
         label: "APPARATUSES.CRITICAL_APPARATUS",
         visibleList: k.slice(0, 10),
         list: k
        }, i._indexes.push("criticalApparatus")), !d.isSourcesInline() && l.length > 0 && (i.sources = {
         label: "APPARATUSES.SOURCES",
         visibleList: l.slice(0, 10),
         list: l
        }, i._indexes.push("sources")), !d.isAnaloguesInline() && m.length > 0 && (i.analogues = {
         label: "APPARATUSES.ANALOGUES",
         visibleList: m.slice(0, 10),
         list: m
        }, i._indexes.push("analogues")), i._indexes.length > 0 && d.updateState("currentApparatus", i._indexes[0]);
       var w = {
        isLoading: !0,
        uid: e,
        currentApparatus: i._indexes.length > 0 ? i._indexes[0] : "",
        apparatuses: i,
        appStructure: j
       };
       return f[e] = angular.extend(b.vm, w), g.push({
        id: e
       }), f[e]
      }
     }, e.setCurrentApparatus = function(a) {
      d.updateState("currentApparatus", a), b.currentApparatus = a, angular.forEach(f, function(b) {
       b.setCurrentApparatus(a)
      })
     }, e.getCurrentApparatus = function() {
      return b.currentApparatus
     }, e.alignScrollToApp = function(a) {
      for (var b in f) void 0 !== f[b].scrollToAppEntry && f[b].scrollToAppEntry(a)
     }, e.alignScrollToQuote = function(a, b) {
      for (var c in f) void 0 !== f[c].scrollToQuotesEntry && ("source" === f[c].type ? f[c].scrollToQuotesEntry(b) : f[c].scrollToQuotesEntry(a))
     }, e.alignScrollToAnalogue = function(a) {
      for (var b in f) void 0 !== f[b].scrollToAnaloguesEntry && f[b].scrollToAnaloguesEntry(a)
     }, e.destroy = function(a) {
      delete f[a]
     }, e
    }]
   }), angular.module("evtviewer.apparatuses").controller("apparatusesCtrl", ["$timeout", "evtApparatuses", "$scope", function(a, b, c) {
    var d = this;
    this.setCurrentApparatus = function(b) {
     b !== d.currentApparatus && d.apparatuses[b] && (d.loading = !0, d.currentApparatus = b, d.apparatuses[b].visibleList = d.apparatuses[b].list.slice(0, 10), a(function() {
      d.loading = !1
     }))
    }, this.getCurrentApparatus = function() {
     return d.currentApparatus
    }, this.toggleAppStructure = function(a) {
     d.appStructure !== a && (d.appStructure = a)
    }, this.toggleOpenApparatus = function(a) {
     d.openApparatus !== a && (d.openApparatus = a)
    }, this.getVisibleList = function(a) {
     return d.apparatuses[a] ? d.apparatuses[a].visibleList : []
    }, this.getAppList = function(a) {
     return d.apparatuses[a] ? d.apparatuses[a].list : []
    }, this.loadMoreElements = function() {
     for (var a = d.currentApparatus, b = d.apparatuses[a].visibleList.length, c = 0; 5 > c && c < d.apparatuses[a].list.length;) {
      var e = d.apparatuses[a].list[b + c];
      e && d.apparatuses[a].visibleList.indexOf(e) <= 0 && d.apparatuses[a].visibleList.push(e), c++
     }
    }, this.destroy = function() {
     b.destroy(this.uid)
    }
   }]), angular.module("evtviewer.apparatuses").directive("evtApparatuses", ["$timeout", "evtApparatuses", "evtInterface", "evtCriticalApparatusEntry", function(a, b, c, d) {
    return {
     restrict: "E",
     scope: {
      currentApparatus: "@"
     },
     transclude: !0,
     templateUrl: "src/apparatuses/apparatuses.dir.tmpl.html",
     controllerAs: "vm",
     controller: "apparatusesCtrl",
     link: function(e, f, g) {
      var h = b.build(e);
      if (e.$on("$destroy", function() {
        h && h.destroy()
       }), e.vm.scrollToAppEntry = function(b) {
        var c = "criticalApparatus";
        if (h.apparatuses[c]) {
         var d = $("#apparatuses_" + h.uid).find("[data-app-id='" + b + "']");
         d.length <= 0 && (h.isLoading = !0), a(function() {
          var a = angular.element(f).find(".apparatuses_content_body")[0],
           e = 1 * window.getComputedStyle(a, null).getPropertyValue("padding-top").replace("px", "");
          d.length <= 0 ? (h.isLoading = !0, h.apparatuses[c].list.indexOf(b) >= 0 && (c === h.currentApparatus ? (h.loadMoreElements("criticalApparatus"), h.scrollToAppEntry(b)) : h.isLoading = !1)) : void 0 !== d[0] && (a.scrollTop = d[0].offsetTop - 3 * e, h.isLoading = !1)
         })
        }
       }, e.vm.scrollToQuotesEntry = function(b) {
        var c = "sources";
        if (h.apparatuses[c]) {
         var d = $("#apparatuses_" + h.uid).find("[data-quote-id='" + b + "']");
         d.length <= 0 && (h.isLoading = !0), a(function() {
          var a = angular.element(f).find(".apparatuses_content_body")[0],
           e = 1 * window.getComputedStyle(a, null).getPropertyValue("padding-top").replace("px", "");
          d.length <= 0 ? (h.isLoading = !0, h.apparatuses[c].list.indexOf(b) >= 0 && (c === h.currentApparatus ? (h.loadMoreElements("sources"), h.scrollToQuotesEntry(b)) : h.isLoading = !1)) : void 0 !== d[0] && (a.scrollTop = d[0].offsetTop - 3 * e, h.isLoading = !1)
         })
        }
       }, e.vm.scrollToAnaloguesEntry = function(b) {
        var c = "analogues";
        if (e.vm.apparatuses[c]) {
         var d = $("#apparatuses_" + h.uid).find("[data-analogue-id='" + b + "']");
         d.length <= 0 && (h.isLoading = !0), a(function() {
          var a = angular.element(f).find(".apparatuses_content_body")[0],
           e = 1 * window.getComputedStyle(a, null).getPropertyValue("padding-top").replace("px", "");
          d.length <= 0 ? (h.isLoading = !0, h.apparatuses[c].list.indexOf(b) >= 0 && (c === h.currentApparatus ? (h.loadMoreElements("analogues"), h.scrollToAnaloguesEntry(b)) : h.isLoading = !1)) : void 0 !== d[0] && (a.scrollTop = d[0].offsetTop - 3 * e, h.isLoading = !1)
         })
        }
       }, "criticalApparatus" === h.currentApparatus) {
       var i = c.getState("currentAppEntry");
       i ? (e.vm.scrollToAppEntry(i), a(function() {
        d.selectById(i)
       }, 200)) : h.isLoading = !1
      } else a(function() {
       h.isLoading = !1
      }, 200)
     }
    }
   }]), angular.module("evtviewer.versionReading", []), angular.module("evtviewer.versionReading").provider("evtVersionReading", function() {
    var a = "";
    this.$get = function() {
     var b = {},
      c = {},
      d = [],
      e = 0;
     return b.build = function(a) {
      var f = e++,
       g = a.appId || void 0;
      if (void 0 === c[f]) {
       var h = {
        uid: f,
        appId: g,
        readingId: a.readingId,
        type: a.type,
        scopeWit: a.scopeWit,
        scopeVersion: a.scopeVersion,
        over: !1,
        selected: g === b.getCurrentVersionEntry(),
        apparatus: {
         opened: !1,
         _subContentOpened: ""
        },
        highlightedText: !1
       };
       return c[f] = angular.extend(a.vm, h), d.push({
        id: f
       }), c[f]
      }
     }, b.getCurrentVersionEntry = function() {
      return a
     }, b.setCurrentVersionEntry = function(b) {
      void 0 !== b && b !== a && (a = b)
     }, b.mouseOutAll = function() {
      angular.forEach(c, function(a) {
       a.mouseOut()
      })
     }, b.mouseOverByAppId = function(a) {
      angular.forEach(c, function(b) {
       b.appId === a ? b.mouseOver() : b.mouseOut()
      })
     }, b.selectById = function(a) {
      angular.forEach(c, function(b) {
       b.appId === a ? b.setSelected() : b.unselect()
      }), b.setCurrentVersionEntry(a)
     }, b.unselectAll = function() {
      angular.forEach(c, function(a) {
       a.unselect()
      })
     }, b.closeAllApparatus = function(a) {
      angular.forEach(c, function(b) {
       void 0 === a ? b.closeApparatus() : b.uid !== a && b.closeApparatus()
      })
     }, b.destroy = function(a) {
      delete c[a]
     }, b
    }
   }), angular.module("evtviewer.versionReading").controller("versionReadingCtrl", ["$scope", "parsedData", "config", "evtPopover", "evtVersionReading", "evtInterface", "evtBox", function(a, b, c, d, e, f, g) {
    var h = this;
    this.mouseOver = function() {
     h.over = !0
    }, this.mouseOut = function() {
     h.over = !1
    }, this.highlightOn = function() {
     h.highlightedText = !0
    }, this.highlightOff = function() {
     h.highlightedText = !1
    }, this.setSelected = function() {
     h.selected = !0
    }, this.unselect = function() {
     h.selected = !1
    }, this.closeApparatus = function() {
     h.apparatus.opened = !1
    }, this.isSelect = function() {
     return h.selected
    }, this.toggleOverAppEntries = function(a) {
     a.stopPropagation(), h.over === !1 ? e.mouseOverByAppId(h.appId) : e.mouseOutAll()
    }, this.toggleSelectAppEntries = function(a) {
     h.selected === !1 ? h.apparatus.opened || (e.selectById(h.appId), f.updateCurrentVersionEntry(h.appId)) : h.apparatus.opened && (e.unselectAll(), f.updateCurrentVersionEntry("")), f.updateUrl()
    }, this.toggleApparatus = function(b) {
     d.closeAll(), h.over && (e.closeAllApparatus(h.uid), h.apparatus.opened = !h.apparatus.opened, h.apparatus.opened && a.$parent.vm.scrollToVersionApparatus(h.appId))
    }, this.callbackClick = function(a) {
     a.stopPropagation(), h.over && (h.toggleSelectAppEntries(a), h.isSelect() && h.apparatus.opened || h.toggleApparatus(a))
    }, this.isScopeRecensioAvailable = function() {
     var d = a.$parent.vm.version || "",
      e = b.getVersionEntries()[h.appId].content,
      f = c.versions[0],
      g = !0;
     if ("" !== d && d !== f) void 0 === e[d] && (g = !1);
     else if ("" === d && "witness" === a.$parent.vm.type) {
      var i = a.$parent.vm.witness,
       j = b.getVersionEntries()._indexes.versionWitMap,
       k = "";
      for (var l in j) j[l].indexOf(i) >= 0 && (k = l);
      ("" === k || void 0 === e[k]) && (g = !1)
     } else void 0 === e[f] && (g = !1);
     return g
    }, this.destroy = function() {
     var a = this.uid;
     e.destroy(a)
    }
   }]), angular.module("evtviewer.versionReading").directive("evtVersionReading", ["evtVersionReading", "evtInterface", function(a, b) {
    return {
     restrict: "E",
     scope: {
      type: "@",
      appId: "@",
      readingId: "@",
      scopeWit: "@",
      scopeVersion: "@"
     },
     transclude: !0,
     templateUrl: "src/versionReading/versionReading.directive.tmpl.html",
     controllerAs: "vm",
     controller: "versionReadingCtrl",
     link: function(c, d, e) {
      c.currentViewMode = b.getState("currentViewMode");
      var f = a.build(c);
      c.$on("destroy", function() {
       f && f.destroy()
      })
     }
    }
   }]), angular.module("evtviewer.versionApparatusEntry", []), angular.module("evtviewer.versionApparatusEntry").provider("evtVersionApparatusEntry", function() {
    this.$get = ["parsedData", "evtVersionApparatus", "config", function(a, b, c) {
     var d = {},
      e = {},
      f = [],
      g = 0;
     return d.build = function(d) {
      var h = g++,
       i = d.appId || void 0,
       j = d.scopeWit || "",
       k = d.scopeVer || "",
       l = d.$parent.$parent.$parent.vm.version || "";
      if ("" === l && "text" === d.$parent.$parent.$parent.type && (l = c.versions[0]), void 0 === e[h]) {
       var m, n = a.getVersionEntries()[i],
        o = "",
        p = {
         _indexes: []
        };
       void 0 !== n && (m = b.getContent(n, j, k), "" !== m.note && (p._indexes.push("criticalNote"), p.criticalNote = {
        label: "VERSIONS.CRITICAL_NOTE"
       }), m._readings && (p._indexes.push("readings"), p.readings = {
        label: "VERSIONS.VERSION_READING"
       }), m.attributes._keys.length > 0 && (p._indexes.push("moreInfo"), p.moreInfo = {
        label: "VERSIONS.MORE_INFO"
       }), "" !== m._xmlSource && (p._indexes.push("xmlSource"), p.xmlSource = {
        label: "VERSIONS.XML"
       }));
       var q = {
        uid: h,
        scopeWit: j,
        scopeVer: k,
        appId: i,
        readingId: d.readingId,
        content: m,
        _subContentOpened: o,
        tabs: p,
        currentViewMode: d.scopeViewMode,
        currentVer: l
       };
       return e[h] = angular.extend(d.vm, q), f.push({
        id: h
       }), e[h]
      }
     }, d.destroy = function(a) {
      delete e[a]
     }, d
    }]
   }), angular.module("evtviewer.versionApparatusEntry").controller("versionApparatusEntryCtrl", ["config", "evtBox", "evtApparatuses", "evtVersionApparatusEntry", "$scope", function(a, b, c, d, e) {
    var f = this;
    this.toggleSubContent = function(a) {
     f._subContentOpened !== a ? f._subContentOpened = a : f._subContentOpened = ""
    }, this.isPinAvailable = function() {
     return a.toolPinAppEntries
    }, this.alignReadings = function() {
     b.alignScrollToApp(f.appId), c.alignScrollToApp(f.appId)
    }, this.destroy = function() {
     var a = this.uid;
     d.destroy(a)
    }
   }]), angular.module("evtviewer.versionApparatusEntry").directive("evtVersionApparatusEntry", ["evtVersionApparatusEntry", "evtInterface", function(a, b) {
    return {
     restrict: "E",
     scope: {
      appId: "@",
      readingId: "@",
      scopeWit: "@",
      scopeVer: "@"
     },
     transclude: !0,
     templateUrl: "src/versionApparatusEntry/versionApparatusEntry.directive.tmpl.html",
     controllerAs: "vm",
     controller: "versionApparatusEntryCtrl",
     link: function(c, d, e) {
      c.scopeViewMode = b.getState("currentViewMode");
      var f = a.build(c);
      c.$on("destroy", function() {
       f && f.destroy()
      })
     }
    }
   }]), angular.module("evtviewer.versionApparatusEntry").provider("evtVersionRef", function() {
    this.$get = ["evtInterface", "evtBox", "parsedData", "config", function(a, b, c, d) {
     var e = {},
      f = {},
      g = [],
      h = 0;
     return e.build = function(e) {
      var i = e.id || h++,
       j = e.elId || "",
       k = e.type || "default",
       l = e.target || "",
       m = e.title || "",
       n = function() {
        console.log("TODO " + k)
       },
       o = a.getState("currentViewMode"),
       p = "";
      switch (k) {
       case "version":
        j !== l && l !== d.versions[0] && (m = "VERSIONS.OPEN_TEXT"), p = c.getVersionEntries()._indexes.versionId[l], n = function() {
         var e;
         if (j !== l && l !== d.versions[0]) {
          e = a.getState("currentVersions"), scopeVersionIndex = e.indexOf(j), e.indexOf(l) >= 0 && e.length > 1 && a.removeVersion(l), a.addVersion(l, scopeVersionIndex + 1), "versions" !== o && a.updateState("currentViewMode", "versions"), a.updateUrl();
          var f = a.getState("currentVersionEntry") || "";
          if ("" !== f) {
           var g = b.getElementByValueOfParameter("version", l);
           void 0 !== g && g.scrollToAppEntry(f)
          }
         } else if (l === d.versions[0]) {
          "versions" !== o && a.updateState("currentViewMode", "versions"), a.updateCurrentVersion(l);
          var h = c.getVersionEntries()[a.getCurrentVersionEntry()].content,
           i = Object.keys(h);
          e = a.getState("currentVersions");
          for (var k = 0; k < i.length; k++) e.indexOf(i[k]) < 0 && i[k] !== d.versions[0] && a.addVersion(i[k]);
          a.updateUrl()
         }
        }
      }
      var q = {
       uid: i,
       id: p,
       elId: j,
       type: k,
       target: l,
       title: m,
       callback: n,
       currentViewMode: o,
       ver: a.getCurrentVersion() || ""
      };
      return f[i] = angular.extend(e.vm, q), g.push({
       id: i,
       type: k
      }), f[i]
     }, e.destroy = function(a) {
      delete f[a]
     }, e
    }]
   }), angular.module("evtviewer.versionApparatusEntry").directive("evtVersionRef", ["evtVersionRef", function(a) {
    return {
     restrict: "E",
     scope: {
      type: "@",
      target: "@",
      elId: "@"
     },
     transclude: !0,
     templateUrl: "src/versionApparatusEntry/versionRef.directive.tmpl.html",
     link: function(b, c, d) {
      b.vm = {};
      var e = a.build(b);
      b.$on("$destroy", function() {
       e && a.destroy(e.uid)
      })
     }
    }
   }]), angular.module("evtviewer.imageViewer", ["evtviewer.openseadragon", "evtviewer.imageViewerService"]),
   function() {
    var a = angular.module("evtviewer.imageViewer", ["evtviewer.openseadragon", "evtviewer.imageViewerService"]);
    a.controller("imageViewerCtrl", ["$scope", "imageViewerModel", function(a, b) {
     a.options = b.getOptions()
    }])
   }();
  var module = angular.module("evtviewer.openseadragon", ["evtviewer.imageViewer", "evtviewer.openseadragonService", "evtviewer.interface"]);
  module.directive("osd", ["$timeout", "imageViewerHandler", "evtInterface", "osd", function(a, b, c, d) {
    return {
     restrict: "E",
     scope: {
      options: "=",
      name: "=",
      tilesource: "=",
      prefixUrl: "="
     },
     controller: "imageViewerCtrl",
     template: "<div id='osd-img' class='box-image box-body Edition noBottomMenu'></div>",
     transclude: !0,
     link: function(e, f, g) {
      a(function() {
       var a = d.build(g.name),
        f = null;
       try {
        f = new OpenSeadragon.Viewer(a)
       } catch (h) {
        console.error("viewer in timeout osd directive errore", h)
       }
       e.osd = f, e.$parent[g.name] = f;
       var i = d.imgCoeff();
       null != i && void 0 != i && b.setImgCoeff(i), b.setViewer(f), b.setScope(e), e.osd.addHandler("home", b.home), e.osd.addOnceHandler("open", b.openPage, c.getState("currentPage")), e.$watch(function() {
        return c.getState("currentPage")
       }, function(a, c) {
        if (c !== a) {
         var d = "page";
         "scroll" === d ? b.updateViewerBounds(a) : "page" === d ? b.updateViewerPage(a) : console.error("Page service problem")
        }
       }, !1)
      }, 10), f.on("$destroy", function() {
       g.name && (e.$parent[g.name] = null), e.osd.removeHandler("open", b.open), e.osd.removeHandler("home", b.home), e.osd.removeHandler("navigator-scroll", b.navigatorScroll), e.osd.removeHandler("pan", b.pan), e.osd.destroy()
      })
     }
    }
   }]), angular.module("evtviewer.imageViewer").controller("imageViewerCtrl", ["$scope", function(a) {}]),
   function() {
    angular.module("evtviewer.imageViewerService", ["evtviewer.dataHandler"]).service("imageViewerModel", ["parsedData", function(a) {
     var b = this,
      c = {
       id: "osd-img",
       prefixUrl: "bower_components/openseadragon/built-openseadragon/openseadragon/images/",
       tileSources: [],
       showRotationControl: !0,
       showNavigator: !0,
       visibilityRatio: 1,
       defaultZoomLevel: 1,
       panHorizontal: !0,
       constrainDuringPan: !0,
       minZoomLevel: .8,
       maxZoomLevel: 2,
       wrapVertical: !1,
       navigatorLeft: "94%",
       navigatorHeight: "100%",
       navigatorWidth: "50%",
       navigatorTop: "1%"
      };
     b.getOptions = function() {
      for (var b, d, e = a.getPages(), f = e.length, g = "", h = 0; f > h; h++) {
       var i = {
        type: "image",
        url: ""
       };
       b = e[h], d = a.getPage(b), g = d.source, void 0 !== g && "" !== g && " " !== g && null !== g && (i.url = g, c.tileSources.push(i))
      }
      return c
     }
    }])
   }(), angular.module("evtviewer.openseadragon").provider("osd", function() {
    this.$get = ["parsedData", "config", function(a, b) {
     var c = {};
     return c.test = function(a) {
      return a ? !0 : !0
     }, c.imgCoeff = function() {
      return b.imageNormalizationCoefficient
     }, c.build = function(c) {
      var d, e, f = b.imageViewerOptions,
       g = a.getPages(),
       h = g.length,
       i = "";
      f.tileSources = [];
      for (var j = 0; h > j; j++) {
       var k = {
        type: "image",
        url: ""
       };
       d = g[j], e = a.getPage(d), i = e.source, void 0 !== i && "" !== i && " " !== i && null !== i && (k.url = i, f.tileSources.push(k))
      }
      return f.id = "osd-img", f
     }, c
    }]
   });
  var imageModule = angular.module("evtviewer.imageViewer");
  ! function() {
   angular.module("evtviewer.openseadragonService", ["evtviewer.interface"]).service("imageViewerHandler", ["evtInterface", "imageScrollMap", "overlayHandler", "parsedData", function(a, b, c, d) {
    function e(a) {
     var b = {};
     return b.x = f(a.ulx), b.y = f(a.uly), b.width = f(a.lrx - a.ulx), b.hight = f(a.lry - a.uly), new OpenSeadragon.Rect(b.x / g, b.y / g, b.width / g, b.hight / g)
    }
  
    function f(a) {
     return a
    }
    var g = void 0,
     h = !1,
     i = this;
    i.viewer = void 0, i.scope = void 0, i.setImgCoeff = function(a) {
     g = a
    }, i.setViewer = function(a) {
     i.viewer = a
    }, i.setScope = function(a) {
     i.scope = a
    }, i.open = function() {
     var a = (viewer.viewport.getBounds(), i.viewer.viewport.getBounds()),
      b = a.height / a.width,
      c = new OpenSeadragon.Rect(0, 0, 0, b);
     i.viewer.viewport.fitBounds(c, !1)
    }, i.openPage = function(b) {
     for (var c = b.userData, e = 0; d.getPages()[e] !== c;)
      if (e += 1, e > d.getPages().length) {
       console.error("error in open page");
       break
      } var f = e;
     i.viewer.goToPage(f), currPage = a.getState("currentPage"), c !== currPage && i.scope.$apply(function() {
      a.updateState("currentPage", "" !== c ? c : currPage)
     })
    }, i.home = function() {
     var a = i.viewer.viewport.getBounds(),
      b = a.height / a.width,
      c = new OpenSeadragon.Rect(0, .1, 1, b);
     i.viewer.viewport.fitBounds(c, !0)
    }, i.navigatorScroll = function(a) {
     a.scroll > 0
    }, i.pan = function(c) {
     try {
      if (void 0 === c.immediately) {
       var d = c.center.y,
        e = c.eventSource.viewport._oldCenterY;
       if (1 === i.viewer.viewport.getZoom()) {
        var f, g;
        i.viewer.viewport.getBounds();
        d > e ? (f = b.mapDown(c.eventSource.viewport.getBounds()), g = a.getState("currentPage"), f !== g && i.scope.$apply(function() {
         a.updateState("currentPage", f)
        })) : e > d && (f = b.mapUP(c.eventSource.viewport.getBounds()), g = a.getState("currentPage"), f !== g && i.scope.$apply(function() {
         a.updateState("currentPage", "" !== f ? f : g)
        }))
       }
      }
     } catch (h) {
      console.error("error in pan", h)
     }
    }, i.updateViewerBounds = function(a) {
     var c = i.viewer.viewport.getBounds();
     b.isInBounds(c.y, a) || b.updateBounds(i.viewer, a)
    }, i.updateViewerPage = function(b) {
     for (var c = b, e = 0; d.getPages()[e] !== c && (e += 1, !(e > d.getPages().length)););
     var f = e;
     i.viewer.goToPage(f), currPage = a.getState("currentPage"), c !== currPage && i.scope.$apply(function() {
      a.updateState("currentPage", "" !== c ? c : currPage)
     })
    }, i.highlightOverlay = function(a) {
     if (!a) throw "problem in zone data extraction";
     try {
      i.viewer.removeOverlay("line-overlay")
     } catch (b) {}
     var c = e(a),
      d = document.createElement("div");
     d.id = "line-overlay", d.className = "highlight", i.viewer.addOverlay({
      element: d,
      location: c
     })
    }, i.highlightSelectedOverlay = function(a, b) {
     if (!a) throw "problem in zone data extraction";
     try {
      i.viewer.removeOverlay("line-overlay")
     } catch (c) {
      console.error("no line overlay", c)
     }
     var d = e(a),
      f = document.createElement("div");
     f.id = "line-overlay_selected", f.className = "selectedHighlight", i.viewer.addOverlay({
      element: f,
      location: d
     })
    }, i.turnOffOverlay = function() {
     try {
      i.viewer.removeOverlay("line-overlay")
     } catch (a) {
      console.error("no line overlay", a)
     }
    }, i.turnOffOverlaySelected = function() {
     try {
      i.viewer.removeOverlay("line-overlay_selected")
     } catch (a) {
      console.error("no line overlay", a)
     }
    }, i.moveToZone = function(a) {
     var b = i.viewer.viewport.getCenter(),
      c = (i.viewer.viewport.getBounds(!0), a.uly / g, a.uly / g < b.y ? b.y : a.uly / g),
      d = new OpenSeadragon.Point(b.x, c);
     i.viewer.viewport.panTo(d)
    }, i.showHotSpot = function(a) {
     for (var b = [], c = 0; c < a.length; c++) {
      var d = new OpenSeadragon.Rect(a[c].ulx / g, a[c].uly / g, (a[c].lrx - a[c].ulx) / g, (a[c].lry - a[c].uly) / g);
      b.push(d)
     }
     for (var e = [], f = 0; f < a.length; f++) {
      var h = a[f].content,
       k = a[f].id,
       l = (a[f], document.createElement("div"));
      l.id = "hotspot-overlay_selected-" + k, l.className = "hotspot", l.dataset.id = k, l.dataset.content = h, l.onmouseover = function() {
       i.viewer.zoomPerClick = 1
      }, l.onmouseout = function() {
       i.viewer.zoomPerClick = 1.5
      }, l.onclick = function() {
       j(this)
      }, e.push(l)
     }
     i.viewer.zoomPerClick = 1;
     for (var m = 0; m < a.length; m++) i.viewer.addOverlay({
      element: e[m],
      location: b[m]
     })
    };
    var j = function(a) {
      if (!h) {
       var b = $(a),
        c = b.position().left,
        d = b.position().top,
        e = b.width(),
        f = b.height(),
        g = new OpenSeadragon.Point(c, d),
        j = new OpenSeadragon.Point(c + e, d + f),
        l = i.viewer.viewport.pointFromPixel(g),
        m = i.viewer.viewport.pointFromPixel(j),
        n = 0;
       n = l.x <= .4 ? l.x + (m.x - l.x) + .05 : l.x - (m.x - l.x + .1);
       var o = new OpenSeadragon.Rect(n, l.y, .3, .35),
        p = document.createElement("div");
       p.id = "div-hotspot-overlay_selected-" + a.dataset.id, p.className = "hotspot-dida";
       var q = document.createElement("div");
       q.id = "div-title-hotspot-overlay_selected-" + a.dataset.id, q.className = "hotspot-dida-title", q.innerHTML = "";
       var r = document.createElement("div");
       r.className = "PopupCloser", r.dataset.id = a.dataset.id, r.onclick = function() {
        i.viewer.zoomPerClick = 1.5, k(this)
       };
       var s = document.createElement("i");
       s.className = "fa fa-times", s.onmouseover = function() {
        i.viewer.zoomPerClick = 1
       }, s.onmouseout = function() {
        i.viewer.zoomPerClick = 1.5
       }, r.appendChild(s), q.appendChild(r);
       var t = document.createElement("div");
       t.id = "div-body-hotspot-overlay_selected-" + a.dataset.id, t.className = "hotspot-dida-body", t.innerHTML = a.dataset.content, p.appendChild(q), p.appendChild(t);
       var u = {
        element: p,
        location: o,
        rotationMode: OpenSeadragon.OverlayRotationMode.NO_ROTATION
       };
       h = !h, i.viewer.addOverlay(u), $(u.element).draggable()
      }
      return h
     },
     k = function(a) {
      try {
       var b = a.dataset.id;
       i.viewer.removeOverlay("div-hotspot-overlay_selected-" + b)
      } catch (c) {
       console.error("no hotspot overlay", c)
      }
      return h = !1
     };
    i.hiddenHotSpot = function(a) {
     try {
      for (var b = 0; b < a.length; b++) i.viewer.removeOverlay("hotspot-overlay_selected-" + a[b].id)
     } catch (c) {
      console.error("no hotspot overlay", c)
     }
    }, i.lineZone = function(b) {
     var c = e(b),
      d = document.createElement("div");
     return d.id = "line-div-overlay_" + b.id, d.dataset.lb = b.id.replace("line", "lb"), d.className = "line-overlay", d.onmouseover = function() {
      var b = "active" === a.getToolState("ITL"),
       c = a.getState("currentViewMode");
      if (b && "imgTxt" === c) {
       this.className += " selectedHighlight";
       var d = document.querySelectorAll("[data-line='" + this.dataset.lb + "']");
       if (0 == d.length) {
        var e = this.dataset.lb.replace("reg", "orig");
        d = document.querySelectorAll("[data-line='" + e + "']")
       }
       for (var f = 0; f < d.length; f++) d[f].className += " lineHover"
      }
     }, d.onmouseout = function() {
      var b = "active" === a.getToolState("ITL"),
       c = a.getState("currentViewMode");
      if (b && "imgTxt" === c) {
       this.className = this.className.replace(" selectedHighlight", "") || "";
       var d = document.querySelectorAll("[data-line='" + this.dataset.lb + "']");
       if (0 == d.length) {
        var e = this.dataset.lb.replace("reg", "orig");
        d = document.querySelectorAll("[data-line='" + e + "']")
       }
       for (var f = 0; f < d.length; f++) d[f].className = d[f].className.replace(" lineHover", "") || ""
      }
     }, d.onclick = function() {}, i.viewer.addOverlay({
      element: d,
      location: c
     }), d
    }, i.testFun = function() {
     return "ok"
    }
   }])
  }(), angular.module("evtviewer.openseadragonService").service("imageScrollMap", ["evtInterface", function(a) {
   var b = "yPage",
    c = this;
   c.mapDown = function(a) {
    return d(a, "down")
   }, c.mapUP = function(a) {
    return d(a, "up")
   };
   var d = function(a, b) {
    var c, d, e = a.getBoundingBox();
    switch (b) {
     case "down":
      if (e.y < c[d + "1"].to) return (d + "1").substr(1).toLowerCase();
      for (var f = 1; f <= c.size; f++)
       if (e.y < c[d + f].to && e.y > c[d + f].from) return (d + f).substr(1).toLowerCase();
      break;
     case "up":
      for (var f = 1; f <= c.size; f++)
       if (e.y < (c[d + f].from + c[d + f].to) / 2 && e.y > c[d + f].from) return (d + f).substr(1).toLowerCase();
      return "";
     default:
      return ""
    }
   };
   c.isInBounds = function(a, c) {
    var d = void 0;
    d = 10 == c.length ? b + c.substr(c.length - 1) : b + c.substr(c.length - 2);
    var e;
    return a >= e[d].from && a < e[d].to ? !0 : !1
   }, c.updateBounds = function(a, c) {
    var d, e = a.viewport.getBounds(),
     f = void 0;
    f = 10 == c.length ? b + c.substr(c.length - 1) : b + c.substr(c.length - 2);
    var g = e.height / e.width,
     h = new OpenSeadragon.Rect(0, d[f].from, 1, g);
    a.viewport.fitBounds(h, !1)
   }
  }]), angular.module("evtviewer.openseadragonService").service("overlayHandler", function() {
   var a = this;
   a.test = function(a) {
    console.log(a)
   }
  }), angular.module("evtviewer.search", []), angular.module("evtviewer.search").directive("evtSearchBox", ["evtSearchBox", "evtInterface", function(a, b) {
   return {
    restrict: "E",
    templateUrl: "src/search/searchBox.directive.tmpl.html",
    replace: !0,
    controllerAs: "vm",
    controller: "SearchBoxCtrl",
    link: function(c) {
     a.build(c, c.vm), c.$watch(function() {
      return b.getState("currentEdition")
     }, function(b, d) {
      d !== b && a.build(c, c.vm)
     }, !0)
    }
   }
  }]), angular.module("evtviewer.search").controller("SearchBoxCtrl", ["$rootScope", "config", "evtInterface", "evtSearchBox", "evtSearchResults", "evtBox", function(a, b, c, d, e, f) {
   var g = this,
    h = [];
   g.searchInput = "", g.searchedTerm = "", g.resList = [], g.visibleRes = [], g.getState = function(a) {
    return g.status ? g.status[a] : void 0
   }, g.updateState = function(a) {
    return g.status[a] = !g.status[a], g.status[a]
   }, g.getBoxEdition = function(a) {
    return f.getEditionById(a)
   }, g.getInputValue = function() {
    return g.searchInput
   }, g.getSearchedTerm = function() {
    return g.searchedTerm
   }, g.closeBox = function(a) {
    return g.status[a] = !1, g.status[a]
   }, g.loadMoreElements = function() {
    for (var a = 0; 10 > a && a < g.resList.length;) {
     var b = g.visibleRes.length - 1,
      c = g.resList[b + 1];
     c && (g.visibleRes.push(c), g.searchResults += c), a++
    }
   }, g.highlightSearchResults = function(a, b) {
    return e.highlightSearchResults(a, b)
   }, g.doSearchCallback = function() {
    for (var a in h) h[a].parentId === g.parentBoxId && h[a].btn.doCallback()
   }, g.getBtnLimit = function() {
    var a = this;
    for (var b in a.searchBoxBtn)
     if ("searchVirtualKeyboard" === a.searchBoxBtn[b].type) return 5;
    return 4
   }, a.$on("searchBtn", function(a, b) {
    h.push(b)
   })
  }]), angular.module("evtviewer.search").provider("evtSearchBox", function() {
   var a = this.defaults;
   this.setDefaults = function(b) {
    a = b
   }, this.$get = ["SEARCHBOXDEFAULTS", "parsedData", function(b, c) {
    var d, e, f = [],
     g = {},
     h = c.getGlyphs();
    return f.build = function(a, c) {
     var f, i = {
       searchResultBox: !1,
       searchCaseSensitive: !1,
       searchExactWord: !1,
       virtualKeyboard: !1,
       progressBar: !1
      },
      j = [],
      k = a.$parent.edition;
     f = "diplomatic" === k ? b.diplomaticSearchBoxBtn : b.interpretativeSearchBoxBtn;
     for (var l in f) 0 === h._indexes.length ? "virtualKeyboard" !== l.toString() && j.push(f[l]) : j.push(f[l]);
     d = a.$parent.id, e = d + "SearchBox";
     var m = {
      status: i,
      searchBoxBtn: j,
      parentBoxId: d,
      searchBoxId: e
     };
     return g[d] = angular.extend(c, m), g[d]
    }, f.getDefaults = function(b) {
     return a[b]
    }, f.getCurrentBoxEdition = function(a) {
     return g[a].getBoxEdition(a)
    }, f.getSearchResults = function(a) {
     return g[a].searchResults
    }, f.getInputValue = function(a) {
     return g[a].searchInput
    }, f.clearInputValue = function(a) {
     g[a].searchInput = ""
    }, f.getStatus = function(a, b) {
     return g[a].status ? g[a].status[b] : void 0
    }, f.setStatus = function(a, b, c) {
     g[a].status[b] = c
    }, f.updateStatus = function(a, b) {
     g[a].status[b] = !g[a].status[b]
    }, f.setSearchedTerm = function(a, b) {
     g[a].searchedTerm = b
    }, f.closeBox = function(a, b) {
     var c;
     for (var d in g)
      if (c = g[d], c.parentBoxId === a) return c.status[b] = !1, c.status[b]
    }, f.showBtn = function(a, b) {
     var c = g[a].searchBoxBtn;
     for (var d in c) c[d].type === b && (c[d].hide = !1)
    }, f.hideBtn = function(a, b) {
     var c = g[a].searchBoxBtn;
     for (var d in c) c[d].type === b && (c[d].hide = !0)
    }, f
   }]
  }), angular.module("evtviewer.search").constant("SEARCHBOXDEFAULTS", {
   diplomaticSearchBoxBtn: {
    showResults: {
     title: "Show results",
     label: "",
     icon: "search-results-show",
     type: "searchResultsShow"
    },
    hideResults: {
     title: "Hide results",
     label: "",
     icon: "search-results-hide",
     type: "searchResultsHide",
     hide: !0
    },
    virtualKeyboard: {
     title: "Virtual keyboard",
     label: "",
     icon: "keyboard",
     type: "searchVirtualKeyboard"
    },
    caseSensitive: {
     title: "Case sensitive",
     label: "",
     icon: "case-sensitive",
     type: "searchCaseSensitive"
    },
    exactWord: {
     title: "Exact word",
     label: "",
     icon: "exact-word",
     type: "searchExactWord"
    },
    searchClear: {
     title: "Clear search",
     label: "",
     icon: "close",
     type: "searchClear"
    },
    previous: {
     title: "Previous",
     label: "",
     icon: "previous",
     type: "searchPrevResult"
    },
    next: {
     title: "Next",
     label: "",
     icon: "next",
     type: "searchNextResult"
    },
    search: {
     title: "Search",
     label: "",
     icon: "search",
     type: "search"
    }
   },
   interpretativeSearchBoxBtn: {
    showResults: {
     title: "Show results",
     label: "",
     icon: "search-results-show",
     type: "searchResultsShow"
    },
    hideResults: {
     title: "Hide results",
     label: "",
     icon: "search-results-hide",
     type: "searchResultsHide",
     hide: !0
    },
    virtualKeyboard: {
     title: "Virtual keyboard",
     label: "",
     icon: "keyboard",
     type: "searchVirtualKeyboard"
    },
    caseSensitive: {
     title: "Case sensitive",
     label: "",
     icon: "case-sensitive",
     type: "searchCaseSensitive"
    },
    exactWord: {
     title: "Exact word",
     label: "",
     icon: "exact-word",
     type: "searchExactWord"
    },
    searchClear: {
     title: "Clear search",
     label: "",
     icon: "close",
     type: "searchClear"
    },
    previous: {
     title: "Previous",
     label: "",
     icon: "previous",
     type: "searchPrevResult"
    },
    next: {
     title: "Next",
     label: "",
     icon: "next",
     type: "searchNextResult"
    },
    search: {
     title: "Search",
     label: "",
     icon: "search",
     type: "search"
    }
   }
  }).config(["evtSearchBoxProvider", "configProvider", "SEARCHBOXDEFAULTS", function(a, b, c) {
   var d = b.makeDefaults("search", c);
   a.setDefaults(d)
  }]), angular.module("evtviewer.search").directive("evtSearchResults", ["$timeout", "evtSearchResult", "evtSearchBox", "evtInterface", function(a, b, c, d) {
   return {
    restrict: "E",
    templateUrl: "src/search/searchResults.directive.tmpl.html",
    replace: !0,
    controllerAs: "vm",
    controller: "SearchResultsCtrl",
    link: function(e) {
     b.build(e, e.vm), e.$watch(function() {
      return d.getState("currentEdition")
     }, function() {
      e.vm.currentEdition = d.getState("currentEdition"), "" !== e.$parent.vm.searchInput && void 0 !== e.$parent.vm.searchInput && (e.$parent.vm.doSearchCallback(), a(function() {
       c.setStatus(e.vm.parentBoxId, "searchResultBox", !1), c.hideBtn(e.vm.parentBoxId, "searchResultsHide"), c.showBtn(e.vm.parentBoxId, "searchResultsShow")
      }))
     }, !0)
    }
   }
  }]), angular.module("evtviewer.search").controller("SearchResultsCtrl", ["$q", "$scope", "$location", "$anchorScroll", "evtSearchResults", "evtSearchBox", "evtInterface", "Utils", function(a, b, c, d, e, f, g, h) {
   function i(c) {
    var d = a.defer(),
     e = b.$parent.vm.parentBoxId;
    return f.closeBox(e, "searchResultBox"), f.showBtn(e, "searchResultsShow"), f.hideBtn(e, "searchResultsHide"), c.preventDefault(), $(c.currentTarget).addClass("selected"), k.currentLineId = document.getElementsByClassName("resultInfo selected")[0].getElementsByClassName("resultLine")[0].getAttribute("id"), j(), $(c.currentTarget).removeClass("selected"), setTimeout(function() {
     d.resolve()
    }, 100), d.promise
   }
  
   function j() {
    var a = document.getElementsByClassName("resultInfo selected")[0].getElementsByClassName("resultPage")[0].getAttribute("id"),
     b = document.getElementsByClassName("resultInfo selected")[0].getElementsByClassName("resultDoc")[0].getAttribute("id");
    g.updateState("currentPage", a), g.updateState("currentDoc", b), g.updateUrl()
   }
   var k = this;
   k.currentEdition = g.getState("currentEdition"), k.currentEditionResults = [], k.visibleRes = [], k.placeholder = "", k.currentLineId = "", k.getResultsNumber = function() {
    var a = k.currentEditionResults,
     b = 0;
    return a && a.forEach(function(a) {
     b += a.resultsNumber
    }), b
   }, k.getCurrentEditionResults = function() {
    return k.currentEditionResults
   }, k.getCurrentBoxEdition = function(a) {
    return f.getCurrentBoxEdition(a)
   }, k.getHighlightedOriginalText = function(a, b, c, d) {
    var f = e.getOriginalText(a, b),
     g = "<strong>" + c + "</strong>",
     i = d[0],
     j = d[0] + d[1],
     k = h.replaceStringAt(f, c, g, i, j);
    return e.getTextPreview(k, g)
   }, k.loadMoreElements = function() {
    for (var a, b, c = 0; 5 > c && c < k.currentEditionResults.length;) a = k.visibleRes.length - 1, b = k.currentEditionResults[a + 1], b && k.visibleRes.push(b), c++
   }, k.range = function(a) {
    return new Array(a)
   }, k.toggle = function(a) {
    var b = $(a.currentTarget);
    b.toggleClass("active"), b.siblings(".search-result").toggleClass("open")
   }, k.scrollToCurrentResult = function(a) {
    var b = i(a);
    b.then(function() {
     k.scrollTo(k.currentLineId)
    })
   }, k.scrollTo = function(a) {
    c.hash(a), d()
   }
  }]), angular.module("evtviewer.search").provider("evtSearchResult", function() {
   this.$get = function() {
    var a = [],
     b = {};
    return a.build = function(a, c) {
     var d = a.$parent.id,
      e = {
       parentBoxId: d
      };
     return b[d] = angular.extend(c, e), b[d]
    }, a.setPlaceholder = function(a, c) {
     b[a].placeholder = c
    }, a.setVisibleRes = function(a, c) {
     b[a].visibleRes = c
    }, a.setCurrentEditionResults = function(a, c) {
     b[a].currentEditionResults = c
    }, a
   }
  }), angular.module("evtviewer.search").directive("evtVirtualKeyboard", ["evtVirtualKeyboard", "parsedData", function(a, b) {
   return {
    restrict: "E",
    templateUrl: "src/search/virtualKeyboard.directive.tmpl.html",
    replace: !0,
    link: function(c) {
     var d = b.getGlyphs();
     0 !== d._indexes.length && a.build(c, c.vm)
    }
   }
  }]), angular.module("evtviewer.search").provider("evtVirtualKeyboard", function() {
   var a = this;
   a.$get = ["evtKeyboard", "config", "$rootScope", function(a, b, c) {
    function d() {
     return a.getDefaultKeyboardKeys()
    }
  
    function e(b) {
     return a.getConfigKeyboardKeys(b)
    }
    var f, g, h, i, j, k, l, m = [],
     n = {},
     o = [];
    return m.build = function(c, m) {
     if (f = c.$parent.id, g = f + "Keyboard", j = "", i = b.virtualKeyboardKeys, l = a.getGlyphInXmlDoc(), 0 !== i.length) {
      k = e(i);
      for (var p in k) l.includes(p) && (j += k[p] + ":" + p + " ")
     } else {
      h = d();
      for (var q in h) j += h[q] + ":" + q + " "
     }
     $("#" + f + " .search-box input").keyboard({
      layout: "custom",
      customLayout: {
       normal: [j]
      },
      usePreview: !1,
      openOn: null,
      stayOpen: !0,
      autoAccept: !0,
      appendTo: "#" + f + " .search-box .keyboard-container",
      change: function(a, b) {
       f = c.$parent.id, b.originalContent = b.$preview.val(), c.vm.searchInput = b.originalContent, c.vm.highlightSearchResults(f, c.vm.searchInput)
      }
     });
     var r = {
      keyboardId: g,
      keyboardBtns: o
     };
     return n[f] = angular.extend(m, r), n[f]
    }, m.getKeyboardId = function(a) {
     return n[a].keyboardId
    }, m.unselectCurrentKeyboard = function(a, b) {
     var c, d = $("#" + b + "Keyboard").getkeyboard();
     if (void 0 !== d) {
      for (var e in o) o[e].parentId === b && (c = o[e].btn);
      d.close(), c.setActive(!1)
     }
    }, c.$on("keyboardBtn", function(a, b) {
     o.push(b)
    }), m
   }]
  }), angular.module("evtviewer.tdhop", []), angular.module("evtviewer.tdhop").controller("TreDHOPCtrl", ["$scope", "$route", "evtInterface", "$log", "config", function(a, b, c, d, e) {
   var f = e.tdhopViewerOptions.Model_1.name,
    g = e.tdhopViewerOptions.Model_2.name;
   a.data = {
    model: null,
    availableOptions: [{
     id: "Mesh_1_mesh",
     name: f + " 3D Model"
    }, {
     id: "Mesh_2_mesh",
     name: g + " 3D Model"
    }]
   }, this.isToolHomeAvailable = function() {
    return e.tdhopViewerOptions.toolHome
   }, this.isToolZoominAvailable = function() {
    return e.tdhopViewerOptions.toolZoomin
   }, this.isToolZoomoutAvailable = function() {
    return e.tdhopViewerOptions.toolZoomout
   }, this.isToolLightingAvailable = function() {
    return e.tdhopViewerOptions.toolLighting
   }, this.isToolLightControlAvailable = function() {
    return e.tdhopViewerOptions.toolLightControl
   }, this.isToolPlaneSectionsAvailable = function() {
    return e.tdhopViewerOptions.toolPlaneSections
   }, this.isToolSolidColorAvailable = function() {
    return e.tdhopViewerOptions.toolSolidColor
   }, this.isToolCameraAvailable = function() {
    return e.tdhopViewerOptions.toolCamera
   }, this.isToolMeasureAvailable = function() {
    return e.tdhopViewerOptions.toolMeasure
   }, this.isToolPickPointAvailable = function() {
    return e.tdhopViewerOptions.toolPickPoint
   }, this.isToolHotspotAvailable = function() {
    return e.tdhopViewerOptions.toolHotspot
   }, this.isToolFullScreenAvailable = function() {
    return e.tdhopViewerOptions.toolFullScreen
   }, this.isToolSwitchModelAvailable = function() {
    return e.tdhopViewerOptions.toolSwitchModel
   }, this.isToolArrowsAvailable = function() {
    return e.tdhopViewerOptions.toolArrows
   }, this.isToolLightControllerAvailable = function() {
    return e.tdhopViewerOptions.toolLightController
   }
  }]), angular.module("evtviewer.tdhop").directive("evtTredhop", ["evtTredhop", "evtInterface", "$timeout", function(a, b, c) {
   return {
    restrict: "AE",
    scope: {
     canvas: "@",
     measurebox: "@",
     options: "=",
     name: "="
    },
    controllerAs: "vm",
    controller: "TreDHOPCtrl",
    templateUrl: "src/tdhop/tdhop.directive.tmpl.html",
    transclude: !0,
    link: function(b, d, e) {
     c(function() {
      var c = a.build(b);
      b.$on("$destroy", function() {
       c && tdhop.destroy(c.currentId)
      })
     }, 10)
    }
   }
  }]), angular.module("evtviewer.tdhop").provider("evtTredhop", function() {
   this.$get = ["parsedData", "config", "$ocLazyLoad", "$log", "evtInterface", function(a, b, c, d, e) {
    var f = {},
     g = d.getInstance("evtTredhop");
    return f.build = function(a) {
     var d = b.tdhopViewerOptions.Model_1.path,
      e = b.tdhopViewerOptions.Model_2.path,
      f = b.tdhopViewerOptions.Hotspots.path,
      h = b.tdhopViewerOptions.Hotspots.type,
      i = JSON.stringify(b.tdhopViewerOptions.Hotspots.hotspotsdata);
     g.log("Check hotspotsdata " + i), g.log("Check model path " + d);
     var j = b.tdhopViewerOptions;
     j.id = "tdhop";
     var k = "js-plugins/tdhop/",
      l = ["setup.js", "spidergl.js", "jquery.js", "presenter.js", "nexus.js", "ply.js", "helpers.js", "trackball_sphere.js", "trackball_turntable.js", "trackball_turntable_pan.js", "trackball_pantilt.js", "trackball_rail.js", "nexus.js", "corto.js", "meco.js", "init.js", "meshcoder_worker.js", "setup.js"],
      m = function(a) {
       c.load(k + l[a]).then(function() {
        l[a + 1] ? (m(a + 1), g.log("Load " + l[a])) : (n(), g.log("Setup 3dhop viewer"), g.log("Initialize 3dhop viewer"))
       })
      },
      n = function() {
       init3dhop(), setup3dhop(d, e, f, i, h)
      };
     b.tdhopViewerOptions.toolHome;
     m(0)
    }, f
   }]
  }), angular.module("evtviewer.tdhopService", []).service("tdhopViewerModel", "$log", function(a, b) {
   var c = this,
    d = {
     id: "tdhop",
     name: "Mesh_1_mesh",
     url: "data/models/singleres/cross.ply",
     mesh: "Mesh_1_mesh",
     toolHome: !0,
     toolZoomin: !0,
     toolZoomout: !0,
     toolLighting: !0,
     toolLightControl: !0,
     toolMeasure: !0,
     toolPickPoint: !0,
     toolPlaneSections: !0,
     toolSolidColor: !0,
     toolCamera: !0,
     toolFullScreen: !0
    };
   c.getOptions = function() {
    return d
   }
  }), angular.module("evtviewer.tdhop"), angular.module("evtviewer.navBar", []), angular.module("evtviewer.navBar").constant("NAVBARDEFAULTS", {}).config(["evtNavbarProvider", "configProvider", "NAVBARDEFAULTS", function(a, b, c) {
   var d = b.makeDefaults("navBar", c);
   a.setDefaults(d)
  }]), angular.module("evtviewer.navBar").provider("evtNavbar", function() {
   var a = this.defaults;
   this.setDefaults = function(b) {
    a = b
   };
   this.$get = ["parsedData", "evtInterface", function(a, b) {
    var c = {},
     d = {},
     e = [],
     f = 0,
     g = function() {
      var a = this.uid;
      c.destroy(a)
     };
    return c.build = function(c) {
     var h = f++,
      i = {};
     if ("undefined" == typeof d[h]) {
      var j = a.getPages(),
       k = a.getDocuments(),
       l = b.getState("currentDoc"),
       m = b.getState("currentPage"),
       n = {
        value: 0,
        options: {
         floor: 0,
         ceil: j ? j.length : 0,
         translate: function(a, b, c) {
          var d = j[a];
          return j[d] ? j[d].label : a
         },
         showSelectionBar: !0,
         hideLimitLabels: !0
        }
       },
       o = function(a) {
        var b = this;
        b.pageSlider.options = a
       },
       p = function(a, b) {
        var c = this;
        c.pageSlider.options = c.pageSlider.options ? c.pageSlider.options : {}, c.pageSlider.options[a] = b
       },
       q = function(a) {
        var c = this;
        if (a) {
         var d = c.pagesCollection[a];
         b.updateState("currentPage", d);
         var e = b.getState("currentDoc"),
          f = c.pagesCollection[d];
         f && (f.docs.length > 0 && f.docs.indexOf(e) < 0 && b.updateState("currentDoc", f.docs[0]), f.docs.length > 1 && b.updateState("currentDoc", f.docs[0])), b.updateUrl()
        }
       },
       r = function(a) {
        var b = this;
        if (b.pagesCollection) {
         var c = b.pagesCollection._indexes.indexOf(a);
         b.pageSlider.value !== c && (b.pageSlider.value = c), b.folio !== a && (b.folio = a), b.page = a
        }
       };
      return i = {
       uid: h,
       pageSlider: n,
       pagesCollection: j,
       documentsCollection: k,
       page: m,
       doc: l,
       updateOptions: o,
       updateSlider: r,
       updatePage: q,
       updateOptionsValue: p,
       destroy: g
      }, d[h] = angular.extend(c.vm, i), e.push({
       id: h
      }), d[h]
     }
    }, c.destroy = function(a) {
     delete d[a]
    }, c
   }]
  }), angular.module("evtviewer.navBar").controller("NavbarCtrl", ["$log", "evtInterface", function(a, b) {
   var c = this;
   a.getInstance("navBar");
   c.showNavigator = function() {
    return !b.getState("isThumbNailsOpened") && !b.getState("isVisCollOpened")
   }
  }]), angular.module("evtviewer.navBar").directive("evtNavbar", ["$timeout", "evtNavbar", "parsedData", "evtInterface", function(a, b, c, d) {
   return {
    restrict: "E",
    scope: {},
    transclude: !0,
    templateUrl: "src/navBar/navBar.directive.tmpl.html",
    controllerAs: "vm",
    controller: "NavbarCtrl",
    link: function(e, f, g) {
     var h = b.build(e);
     e.$watch(function() {
      return c.getPages()
     }, function(b, c) {
      c !== b && (h.updateOptionsValue("floor", 0), h.updateOptionsValue("ceil", b ? b.length - 1 : 0), h.updateOptionsValue("translate", function(a, c, d) {
       var e = b[a];
       return b[e] ? b[e].label : a
      }), a(function() {
       e.$broadcast("rzSliderForceRender")
      }))
     }, !0), e.$watch(function() {
      return h.pageSlider.value
     }, function(a, b) {
      b !== a && h.updatePage(a)
     }, !0), e.$watch(function() {
      return d.getState("currentPage")
     }, function(a, b) {
      b !== a && h.updateSlider(a)
     }, !0), e.$watch(function() {
      return h.showNavigator()
     }, function(a, b) {
      b !== a && h.updateOptionsValue("disabled", !a)
     }, !0), e.$on("$destroy", function() {
      h && h.destroy()
     })
    }
   }
  }]), angular.module("evtviewer.visColl", []), angular.module("evtviewer.visColl").constant("VISCOLLDEFAULTS", {}).config(["evtViscollProvider", "configProvider", "VISCOLLDEFAULTS", function(a, b, c) {
   var d = b.makeDefaults("visColl", c);
   a.setDefaults(d)
  }]), angular.module("evtviewer.visColl").provider("evtViscoll", function() {
   var a = this.defaults;
   this.setDefaults = function(b) {
    a = b
   };
   this.$get = ["$timeout", "parsedData", function(a, b) {
    var c = {},
     d = {},
     e = [],
     f = 0,
     g = function() {
      var a = this.uid;
      c.destroy(a)
     };
    return c.build = function(c) {
     var h = f++,
      i = {};
     if ("undefined" == typeof d[h]) {
      var j = b.getViscollSvgs(),
       k = function() {
        var c = this;
        c.svgCollection = b.getViscollSvgs();
        var d = [];
        if (c.svgCollection.quires._indexes)
         for (var e = 0; e < c.svgCollection.quires._indexes.length; e++) {
          var f = c.svgCollection.quires._indexes[e],
           g = c.svgCollection.quires[f];
          d.push({
           value: g.value,
           label: g.n,
           title: g.n
          });
          var h = c.getFilteredQuireLeaves(f);
          g.leavesList = h.leaves, g.leavesInsertedInSelector = h.leavesInsertedInSelector
         }
        c.quireOptions = d, a(function() {
         var a = angular.element(".viscollContainer svg > g");
         a && (a.click(function(a) {
          try {
           var b = angular.element(a.delegateTarget).parents(".viscollContainer")[0].id,
            d = a.delegateTarget.id,
            e = c.svgCollection.quires[b].leaves[d];
           if (c.svgCollection.quires[b].leavesInsertedInSelector && c.svgCollection.quires[b].leavesInsertedInSelector.indexOf(d) > -1) c.setSelectedFolioForQuire(b, e);
           else {
            var f = c.svgCollection.quires[b].leaves[e.conjoin];
            c.setSelectedFolioForQuire(b, f)
           }
          } catch (a) {
           console.log(a)
          }
         }), a.hover(function(a) {
          try {
           var b = angular.element(a.delegateTarget).parents(".viscollContainer")[0].id,
            d = a.delegateTarget.id,
            e = c.svgCollection.quires[b].leaves[d];
           if (e) {
            var f = angular.element("#" + e.value),
             g = angular.element(".over_unit");
            g && g.removeClass("over_unit"), f.addClass("over_unit")
           }
           if (!c.svgCollection.quires[b].leavesInsertedInSelector || c.svgCollection.quires[b].leavesInsertedInSelector.indexOf(d) < 0) {
            var h = angular.element("#" + e.conjoin);
            h.addClass("over_unit")
           }
          } catch (a) {
           console.log(a)
          }
         }), a.mouseout(function(a) {
          var b = angular.element(".over_unit");
          b && b.removeClass("over_unit")
         }))
        })
       },
       l = function(a) {
        var b = this;
        return b.svgCollection.svgs[a] && b.svgCollection.svgs[a].textSvg ? b.svgCollection.svgs[a].textSvg.outerHTML : "<span>No data</span>"
       },
       m = function(a) {
        var b = this;
        return b.svgCollection.svgs[a].quireN
       },
       n = function(a) {
        var b = this,
         c = b.getSvgQuireN(a);
        return b.getQuireByNumber(c)
       },
       o = function(a) {
        var b = this,
         c = b.getQuireBySvgId(a);
        return c.value
       },
       p = function(a) {
        for (var b, c = this, d = 0; !b && d < c.svgCollection.quires._indexes.length;) {
         var e = c.svgCollection.quires._indexes[d];
         c.svgCollection.quires[e].n === a && (b = c.svgCollection.quires[e]), d++
        }
        return b
       },
       q = function(a) {
        var b = this;
        return b.svgCollection.quires[a] || {}
       },
       r = function(a) {
        var b = this;
        return b.selectedQuire ? a === b.selectedQuire.value : !0
       },
       s = [],
       t = function(a) {
        var b = this;
        a && a.value ? b.selectedQuire = {
         value: a.value,
         n: a.label
        } : b.selectedQuire = void 0
       },
       u = function(a) {
        for (var b = this, c = b.svgCollection.quires[a].leaves, d = [], e = [], f = 0; f < c._indexes.length; f++) {
         var g = c._indexes[f],
          h = c[g];
         if (h) {
          var i = h.conjoin ? c[h.conjoin] : void 0,
           j = !1;
          i && (h.label = h.leafno + " - " + i.leafno, j = e.indexOf(i.value) > -1), j || (d.push(h), e.push(g))
         }
        }
        return {
         leaves: d,
         leavesInsertedInSelector: e
        }
       },
       v = function(a) {
        for (var b = this, c = b.svgCollection.quires[a].leaves, d = [], e = 0; e < c._indexes.length; e++) d.push(c[c._indexes[e]]);
        return d
       },
       w = function(a, b) {
        var c = this;
        c.selectedFolios = c.selectedFolios ? c.selectedFolios : {};
        var d = c.svgCollection.quires[a].leaves[b.value];
        if (d) {
         if (!(d.imageId && d.imageId2 && d.conjoinId && d.conjoinId2)) {
          var e = c.svgCollection.quires[a].leaves[b.conjoin];
          e && (d.imageId || (d.img = e.imgConjoin, d.imageId = e.conjoinId), d.imageId2 || (d.img2 = e.imgConjoin2, d.imageId2 = e.conjoinId2), d.conjoinId || (d.imgConjoin = e.img, d.conjoinId = e.imageId), d.conjoinId2 || (d.imgConjoin2 = e.img2, d.conjoinId2 = e.imageId2))
         }
         d.unitN = b.label
        }
        c.selectedFolios[a] = d;
        var f = angular.element("#" + a + " .active_unit");
        f && (f.removeClass("active_unit"), f.removeClass("first_unit"), f.removeClass("second_unit"));
        var g = angular.element("#" + b.value);
        g && (g.addClass("active_unit"), g.addClass("first_unit"));
        try {
         for (var h, i = c.svgCollection.quires[a], j = 0; !h && j < i.leaves._indexes.length;) {
          var k = i.leaves._indexes[j];
          i.leaves[k].value === b.value && (h = i.leaves[k]), j++
         }
         if (h && h.conjoin) {
          var l = angular.element("#" + h.conjoin);
          l.addClass("active_unit"), l.addClass("second_unit")
         }
        } catch (m) {
         console.log(m)
        }
       };
      return i = {
       uid: h,
       svgCollection: j,
       selectedQuire: void 0,
       quireOptions: s,
       selectedFolios: void 0,
       getSvgByQuire: l,
       getSvgQuireN: m,
       getQuire: q,
       getQuireBySvgId: n,
       getQuireByNumber: p,
       getQuireIdBySvgId: o,
       getFilteredQuireLeaves: u,
       getAllQuireLeaves: v,
       isSelectedQuire: r,
       displayResult: k,
       setSelectedQuire: t,
       setSelectedFolioForQuire: w,
       destroy: g
      }, d[h] = angular.extend(c.vm, i), e.push({
       id: h
      }), d[h]
     }
    }, c.destroy = function(a) {
     delete d[a]
    }, c
   }]
  }), angular.module("evtviewer.visColl").controller("ViscollCtrl", ["config", "$log", "$scope", "$filter", "evtNavbar", "parsedData", "evtInterface", "evtSelect", "evtButtonSwitch", function(a, b, c, d, e, f, g, h, i) {
   var j = this;
   b.getInstance("visColl");
   j.updateCurrentPage = function(a) {
    if (a) {
     var b = f.getPages();
     for (var c in b) void 0 !== b[c].n && b[c].n === a && (g.updateState("currentPage", c), g.updateState("isVisCollOpened", !1));
     var d = i.getByType("visColl");
     d && d.forEach(function(a) {
      a.setActive(!1)
     }), g.updateUrl()
    }
   }
  }]), angular.module("evtviewer.visColl").directive("evtViscoll", ["evtViscoll", "parsedData", "evtInterface", function(a, b, c) {
   return {
    restrict: "E",
    scope: {},
    transclude: !0,
    templateUrl: "src/visColl/visColl.directive.tmpl.html",
    controllerAs: "vm",
    controller: "ViscollCtrl",
    link: function(d, e, f) {
     var g = a.build(d);
     d.$watch(function() {
      return b.areViscollSvgsLoaded()
     }, function(a, b) {
      b !== a && a === !0 && g.displayResult()
     }, !0), d.$watch(function() {
      return c.getState("currentViewMode")
     }, function(a, b) {
      b !== a && (c.updateState("isThumbNailsOpened", !1), c.updateState("isVisCollOpened", !1))
     }, !0), d.$on("$destroy", function() {
      g && g.destroy()
     })
    }
   }
  }]);