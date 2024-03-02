
//  Window scroll sticky class add
function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
    ) {
        navbar.classList.add("nav-sticky");
    } else {
        navbar.classList.remove("nav-sticky");
    }
}

window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
})


// Smooth scroll 
var scroll = new SmoothScroll('#navbar-navlist a', {
    speed: 300,
    offset: 60
});

// Navbar Active Class

var spy = new Gumshoe('#navbar-navlist a', {
    // Active classes
    navClass: 'active', // applied to the nav list item
    contentClass: 'active', // applied to the content
    offset: 70
});

















        // Year jQuery  CODE 

        jQuery(function() {
            jQuery('.multiSelect').each(function(e) {
                var self = jQuery(this);
                var field = self.find('.multiSelect_field');
                var fieldOption = field.find('option');
                var placeholder = field.attr('data-placeholder');
    
                field.hide().after(`<div class="multiSelect_dropdown"></div>
                                    <span class="multiSelect_placeholder">` + placeholder + `</span>
                                    <ul class="multiSelect_list"></ul>
                                    <span class="multiSelect_arrow"></span>`);
                
                fieldOption.each(function(e) {
                jQuery('.multiSelect_list').append(`<li class="multiSelect_option" data-value="`+jQuery(this).val()+`">
                                                        <a class="multiSelect_text">`+jQuery(this).text()+`</a>
                                                    </li>`);
                });
                
                var dropdown = self.find('.multiSelect_dropdown');
                var list = self.find('.multiSelect_list');
                var option = self.find('.multiSelect_option');
                var optionText = self.find('.multiSelect_text');
                
                dropdown.attr('data-multiple', 'true');
                list.css('top', dropdown.height() + 5);
                
                option.click(function(e) {
                var self = jQuery(this);
                        e.stopPropagation();
                    self.addClass('-selected');
                    field.find('option:contains(' + self.children().text() + ')').prop('selected', true);
                dropdown.append(function(e) {
                    return jQuery('<span class="multiSelect_choice">'+ self.children().text() +'<svg class="multiSelect_deselect -iconX"><use href="#iconX"></use></svg></span>').click(function(e) {
                    var self = jQuery(this);
                    e.stopPropagation();
                    self.remove();
                    list.find('.multiSelect_option:contains(' + self.text() + ')').removeClass('-selected');
                    list.css('top', dropdown.height() + 5).find('.multiSelect_noselections').remove();
                    field.find('option:contains(' + self.text() + ')').prop('selected', false);
                    if (dropdown.children(':visible').length === 0) {
                        dropdown.removeClass('-hasValue');
                    }
                    });
                }).addClass('-hasValue');
                    list.css('top', dropdown.height() + 5);
                    if (!option.not('.-selected').length) {
                    list.append('<h5 class="multiSelect_noselections">No Selections</h5>');
                    }
                });
                
                dropdown.click(function(e) {
                e.stopPropagation();
                e.preventDefault();
                dropdown.toggleClass('-open');
                list.toggleClass('-open').scrollTop(0).css('top', dropdown.height() + 5);
                });
                
                jQuery(document).on('click touch', function(e) {
                    if (dropdown.hasClass('-open')) {
                        dropdown.toggleClass('-open');
                        list.removeClass('-open');
                    }
                });
            });
            });
    
              // Tournaments jQuery CODE 
    
              jQuery(function() {
            jQuery('.multiSelectTournaments').each(function(e) {
                var self = jQuery(this);
                var field = self.find('.multiSelect_field_tournaments');
                var fieldOption = field.find('option');
                var placeholder = field.attr('data-placeholder');
    
                field.hide().after(`<div class="multiSelect_dropdown"></div>
                                    <span class="multiSelect_placeholder">` + placeholder + `</span>
                                    <ul class="multiSelect_list"></ul>
                                    <span class="multiSelect_arrow"></span>`);
                
                fieldOption.each(function(e) {
                jQuery('.multiSelect_list').append(`<li class="multiSelect_option" data-value="`+jQuery(this).val()+`">
                                                        <a class="multiSelect_text">`+jQuery(this).text()+`</a>
                                                    </li>`);
                });
                
                var dropdown = self.find('.multiSelect_dropdown');
                var list = self.find('.multiSelect_list');
                var option = self.find('.multiSelect_option');
                var optionText = self.find('.multiSelect_text');
                
                dropdown.attr('data-multiple', 'true');
                list.css('top', dropdown.height() + 5);
                
                option.click(function(e) {
                var self = jQuery(this);
                        e.stopPropagation();
                    self.addClass('-selected');
                    field.find('option:contains(' + self.children().text() + ')').prop('selected', true);
                dropdown.append(function(e) {
                    return jQuery('<span class="multiSelect_choice">'+ self.children().text() +'<svg class="multiSelect_deselect -iconX"><use href="#iconX"></use></svg></span>').click(function(e) {
                    var self = jQuery(this);
                    e.stopPropagation();
                    self.remove();
                    list.find('.multiSelect_option:contains(' + self.text() + ')').removeClass('-selected');
                    list.css('top', dropdown.height() + 5).find('.multiSelect_noselections').remove();
                    field.find('option:contains(' + self.text() + ')').prop('selected', false);
                    if (dropdown.children(':visible').length === 0) {
                        dropdown.removeClass('-hasValue');
                    }
                    });
                }).addClass('-hasValue');
                    list.css('top', dropdown.height() + 5);
                    if (!option.not('.-selected').length) {
                    list.append('<h5 class="multiSelect_noselections">No Selections</h5>');
                    }
                });
                
                dropdown.click(function(e) {
                e.stopPropagation();
                e.preventDefault();
                dropdown.toggleClass('-open');
                list.toggleClass('-open').scrollTop(0).css('top', dropdown.height() + 5);
                });
                
                jQuery(document).on('click touch', function(e) {
                    if (dropdown.hasClass('-open')) {
                        dropdown.toggleClass('-open');
                        list.removeClass('-open');
                    }
                });
            });
            });
    
    
    
              // Country jQuery CODE 
    
              jQuery(function() {
            jQuery('.multiSelectCountry').each(function(e) {
                var self = jQuery(this);
                var field = self.find('.multiSelect_field_country');
                var fieldOption = field.find('option');
                var placeholder = field.attr('data-placeholder');
    
                field.hide().after(`<div class="multiSelect_dropdown"></div>
                                    <span class="multiSelect_placeholder">` + placeholder + `</span>
                                    <ul class="multiSelect_list"></ul>
                                    <span class="multiSelect_arrow"></span>`);
                
                fieldOption.each(function(e) {
                jQuery('.multiSelect_list').append(`<li class="multiSelect_option" data-value="`+jQuery(this).val()+`">
                                                        <a class="multiSelect_text">`+jQuery(this).text()+`</a>
                                                    </li>`);
                });
                
                var dropdown = self.find('.multiSelect_dropdown');
                var list = self.find('.multiSelect_list');
                var option = self.find('.multiSelect_option');
                var optionText = self.find('.multiSelect_text');
                
                dropdown.attr('data-multiple', 'true');
                list.css('top', dropdown.height() + 5);
                
                option.click(function(e) {
                var self = jQuery(this);
                        e.stopPropagation();
                    self.addClass('-selected');
                    field.find('option:contains(' + self.children().text() + ')').prop('selected', true);
                dropdown.append(function(e) {
                    return jQuery('<span class="multiSelect_choice">'+ self.children().text() +'<svg class="multiSelect_deselect -iconX"><use href="#iconX"></use></svg></span>').click(function(e) {
                    var self = jQuery(this);
                    e.stopPropagation();
                    self.remove();
                    list.find('.multiSelect_option:contains(' + self.text() + ')').removeClass('-selected');
                    list.css('top', dropdown.height() + 5).find('.multiSelect_noselections').remove();
                    field.find('option:contains(' + self.text() + ')').prop('selected', false);
                    if (dropdown.children(':visible').length === 0) {
                        dropdown.removeClass('-hasValue');
                    }
                    });
                }).addClass('-hasValue');
                    list.css('top', dropdown.height() + 5);
                    if (!option.not('.-selected').length) {
                    list.append('<h5 class="multiSelect_noselections">No Selections</h5>');
                    }
                });
                
                dropdown.click(function(e) {
                e.stopPropagation();
                e.preventDefault();
                dropdown.toggleClass('-open');
                list.toggleClass('-open').scrollTop(0).css('top', dropdown.height() + 5);
                });
                
                jQuery(document).on('click touch', function(e) {
                    if (dropdown.hasClass('-open')) {
                        dropdown.toggleClass('-open');
                        list.removeClass('-open');
                    }
                });
            });
            });
    
    
    
              // Discipline jQuery CODE 
    
              jQuery(function() {
            jQuery('.multiSelectDiscipline').each(function(e) {
                var self = jQuery(this);
                var field = self.find('.multiSelect_field_discipline');
                var fieldOption = field.find('option');
                var placeholder = field.attr('data-placeholder');
    
                field.hide().after(`<div class="multiSelect_dropdown"></div>
                                    <span class="multiSelect_placeholder">` + placeholder + `</span>
                                    <ul class="multiSelect_list"></ul>
                                    <span class="multiSelect_arrow"></span>`);
                
                fieldOption.each(function(e) {
                jQuery('.multiSelect_list').append(`<li class="multiSelect_option" data-value="`+jQuery(this).val()+`">
                                                        <a class="multiSelect_text">`+jQuery(this).text()+`</a>
                                                    </li>`);
                });
                
                var dropdown = self.find('.multiSelect_dropdown');
                var list = self.find('.multiSelect_list');
                var option = self.find('.multiSelect_option');
                var optionText = self.find('.multiSelect_text');
                
                dropdown.attr('data-multiple', 'true');
                list.css('top', dropdown.height() + 5);
                
                option.click(function(e) {
                var self = jQuery(this);
                        e.stopPropagation();
                    self.addClass('-selected');
                    field.find('option:contains(' + self.children().text() + ')').prop('selected', true);
                dropdown.append(function(e) {
                    return jQuery('<span class="multiSelect_choice">'+ self.children().text() +'<svg class="multiSelect_deselect -iconX"><use href="#iconX"></use></svg></span>').click(function(e) {
                    var self = jQuery(this);
                    e.stopPropagation();
                    self.remove();
                    list.find('.multiSelect_option:contains(' + self.text() + ')').removeClass('-selected');
                    list.css('top', dropdown.height() + 5).find('.multiSelect_noselections').remove();
                    field.find('option:contains(' + self.text() + ')').prop('selected', false);
                    if (dropdown.children(':visible').length === 0) {
                        dropdown.removeClass('-hasValue');
                    }
                    });
                }).addClass('-hasValue');
                    list.css('top', dropdown.height() + 5);
                    if (!option.not('.-selected').length) {
                    list.append('<h5 class="multiSelect_noselections">No Selections</h5>');
                    }
                });
                
                dropdown.click(function(e) {
                e.stopPropagation();
                e.preventDefault();
                dropdown.toggleClass('-open');
                list.toggleClass('-open').scrollTop(0).css('top', dropdown.height() + 5);
                });
                
                jQuery(document).on('click touch', function(e) {
                    if (dropdown.hasClass('-open')) {
                        dropdown.toggleClass('-open');
                        list.removeClass('-open');
                    }
                });
            });
            });
    
    
    
              // Round jQuery CODE 
    
              jQuery(function() {
            jQuery('.multiSelectRound').each(function(e) {
                var self = jQuery(this);
                var field = self.find('.multiSelect_field_round');
                var fieldOption = field.find('option');
                var placeholder = field.attr('data-placeholder');
    
                field.hide().after(`<div class="multiSelect_dropdown"></div>
                                    <span class="multiSelect_placeholder">` + placeholder + `</span>
                                    <ul class="multiSelect_list"></ul>
                                    <span class="multiSelect_arrow"></span>`);
                
                fieldOption.each(function(e) {
                jQuery('.multiSelect_list').append(`<li class="multiSelect_option" data-value="`+jQuery(this).val()+`">
                                                        <a class="multiSelect_text">`+jQuery(this).text()+`</a>
                                                    </li>`);
                });
                
                var dropdown = self.find('.multiSelect_dropdown');
                var list = self.find('.multiSelect_list');
                var option = self.find('.multiSelect_option');
                var optionText = self.find('.multiSelect_text');
                
                dropdown.attr('data-multiple', 'true');
                list.css('top', dropdown.height() + 5);
                
                option.click(function(e) {
                var self = jQuery(this);
                        e.stopPropagation();
                    self.addClass('-selected');
                    field.find('option:contains(' + self.children().text() + ')').prop('selected', true);
                dropdown.append(function(e) {
                    return jQuery('<span class="multiSelect_choice">'+ self.children().text() +'<svg class="multiSelect_deselect -iconX"><use href="#iconX"></use></svg></span>').click(function(e) {
                    var self = jQuery(this);
                    e.stopPropagation();
                    self.remove();
                    list.find('.multiSelect_option:contains(' + self.text() + ')').removeClass('-selected');
                    list.css('top', dropdown.height() + 5).find('.multiSelect_noselections').remove();
                    field.find('option:contains(' + self.text() + ')').prop('selected', false);
                    if (dropdown.children(':visible').length === 0) {
                        dropdown.removeClass('-hasValue');
                    }
                    });
                }).addClass('-hasValue');
                    list.css('top', dropdown.height() + 5);
                    if (!option.not('.-selected').length) {
                    list.append('<h5 class="multiSelect_noselections">No Selections</h5>');
                    }
                });
                
                dropdown.click(function(e) {
                e.stopPropagation();
                e.preventDefault();
                dropdown.toggleClass('-open');
                list.toggleClass('-open').scrollTop(0).css('top', dropdown.height() + 5);
                });
                
                jQuery(document).on('click touch', function(e) {
                    if (dropdown.hasClass('-open')) {
                        dropdown.toggleClass('-open');
                        list.removeClass('-open');
                    }
                });
            });
            });
    
    
    
              // Single Players jQuery CODE 
    
              jQuery(function() {
            jQuery('.multiSelectSinglePlayer').each(function(e) {
                var self = jQuery(this);
                var field = self.find('.multiSelect_field_single_player');
                var fieldOption = field.find('option');
                var placeholder = field.attr('data-placeholder');
    
                field.hide().after(`<div class="multiSelect_dropdown"></div>
                                    <span class="multiSelect_placeholder">` + placeholder + `</span>
                                    <ul class="multiSelect_list"></ul>
                                    <span class="multiSelect_arrow"></span>`);
                
                fieldOption.each(function(e) {
                jQuery('.multiSelect_list').append(`<li class="multiSelect_option" data-value="`+jQuery(this).val()+`">
                                                        <a class="multiSelect_text">`+jQuery(this).text()+`</a>
                                                    </li>`);
                });
                
                var dropdown = self.find('.multiSelect_dropdown');
                var list = self.find('.multiSelect_list');
                var option = self.find('.multiSelect_option');
                var optionText = self.find('.multiSelect_text');
                
                dropdown.attr('data-multiple', 'true');
                list.css('top', dropdown.height() + 5);
                
                option.click(function(e) {
                var self = jQuery(this);
                        e.stopPropagation();
                    self.addClass('-selected');
                    field.find('option:contains(' + self.children().text() + ')').prop('selected', true);
                dropdown.append(function(e) {
                    return jQuery('<span class="multiSelect_choice">'+ self.children().text() +'<svg class="multiSelect_deselect -iconX"><use href="#iconX"></use></svg></span>').click(function(e) {
                    var self = jQuery(this);
                    e.stopPropagation();
                    self.remove();
                    list.find('.multiSelect_option:contains(' + self.text() + ')').removeClass('-selected');
                    list.css('top', dropdown.height() + 5).find('.multiSelect_noselections').remove();
                    field.find('option:contains(' + self.text() + ')').prop('selected', false);
                    if (dropdown.children(':visible').length === 0) {
                        dropdown.removeClass('-hasValue');
                    }
                    });
                }).addClass('-hasValue');
                    list.css('top', dropdown.height() + 5);
                    if (!option.not('.-selected').length) {
                    list.append('<h5 class="multiSelect_noselections">No Selections</h5>');
                    }
                });
                
                dropdown.click(function(e) {
                e.stopPropagation();
                e.preventDefault();
                dropdown.toggleClass('-open');
                list.toggleClass('-open').scrollTop(0).css('top', dropdown.height() + 5);
                });
                
                jQuery(document).on('click touch', function(e) {
                    if (dropdown.hasClass('-open')) {
                        dropdown.toggleClass('-open');
                        list.removeClass('-open');
                    }
                });
            });
            });
    
    
    
              // Double Teams Players jQuery CODE 
    
              jQuery(function() {
            jQuery('.multiSelectDoubleTeams').each(function(e) {
                var self = jQuery(this);
                var field = self.find('.multiSelect_field_double_teams');
                var fieldOption = field.find('option');
                var placeholder = field.attr('data-placeholder');
    
                field.hide().after(`<div class="multiSelect_dropdown"></div>
                                    <span class="multiSelect_placeholder">` + placeholder + `</span>
                                    <ul class="multiSelect_list"></ul>
                                    <span class="multiSelect_arrow"></span>`);
                
                fieldOption.each(function(e) {
                jQuery('.multiSelect_list').append(`<li class="multiSelect_option" data-value="`+jQuery(this).val()+`">
                                                        <a class="multiSelect_text">`+jQuery(this).text()+`</a>
                                                    </li>`);
                });
                
                var dropdown = self.find('.multiSelect_dropdown');
                var list = self.find('.multiSelect_list');
                var option = self.find('.multiSelect_option');
                var optionText = self.find('.multiSelect_text');
                
                dropdown.attr('data-multiple', 'true');
                list.css('top', dropdown.height() + 5);
                
                option.click(function(e) {
                var self = jQuery(this);
                        e.stopPropagation();
                    self.addClass('-selected');
                    field.find('option:contains(' + self.children().text() + ')').prop('selected', true);
                dropdown.append(function(e) {
                    return jQuery('<span class="multiSelect_choice">'+ self.children().text() +'<svg class="multiSelect_deselect -iconX"><use href="#iconX"></use></svg></span>').click(function(e) {
                    var self = jQuery(this);
                    e.stopPropagation();
                    self.remove();
                    list.find('.multiSelect_option:contains(' + self.text() + ')').removeClass('-selected');
                    list.css('top', dropdown.height() + 5).find('.multiSelect_noselections').remove();
                    field.find('option:contains(' + self.text() + ')').prop('selected', false);
                    if (dropdown.children(':visible').length === 0) {
                        dropdown.removeClass('-hasValue');
                    }
                    });
                }).addClass('-hasValue');
                    list.css('top', dropdown.height() + 5);
                    if (!option.not('.-selected').length) {
                    list.append('<h5 class="multiSelect_noselections">No Selections</h5>');
                    }
                });
                
                dropdown.click(function(e) {
                e.stopPropagation();
                e.preventDefault();
                dropdown.toggleClass('-open');
                list.toggleClass('-open').scrollTop(0).css('top', dropdown.height() + 5);
                });
                
                jQuery(document).on('click touch', function(e) {
                    if (dropdown.hasClass('-open')) {
                        dropdown.toggleClass('-open');
                        list.removeClass('-open');
                    }
                });
            });
            });
