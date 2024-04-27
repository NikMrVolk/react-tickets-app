import moment from 'moment'

moment.locale('en', {
    monthsShort: {
        format: 'янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек'.split('_'),
        standalone: 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
    },
    weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
})
