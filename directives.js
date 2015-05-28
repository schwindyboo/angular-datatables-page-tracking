angular.module('yourModule')
    .directive('dtPageTrack', dtPageTrack)

/**
 * dtPageTrack - keeps track of the last page accessed in a grid
 */
function dtPageTrack(localStorageService) {
    return {
        restrict: 'TABLE',
        link: function (scope, element) {      
            
            $(document).ready(function () {

                $(element).on('init.dt', function (e, settings, data) {

                    var dt = $(element).DataTable();

                    var tableName = element[0].id;

                    var tables = localStorageService.get('dtPageTrack');

                    if (tables == undefined) {
                        tables = [];
                    }

                    var currentTable;

                    $.each(tables, function (i, table) {

                        if (table.Name == tableName) {

                            currentTable = table;
                            return false;
                        }
                    });

                    if (currentTable != undefined) {

                        var tablePages = dt.page.info().pages - 1;

                        dt.page(currentTable.Page).draw(tablePages < currentTable.Page);
                    }

                    $(element).on('page.dt', function () {

                        var tablePage = dt.page.info().page;
                        var tablePages = dt.page.info().pages;

                        if (currentTable == undefined) {
                            currentTable = {
                                Name: tableName,
                                Page: tablePage
                            };

                            tables.push(currentTable);
                        } else {

                            currentTable.Page = tablePage;
                        }

                        localStorageService.set('dtPageTrack', tables);
                    });

                });
            });
        }
    }
}