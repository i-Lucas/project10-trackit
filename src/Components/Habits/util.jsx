export default function convert(day, param){

    if(param === 'number') {

        switch(day){

            case 'Mon':return 1
            case 'Tue':return 2
            case 'Wed':return 3
            case 'Thu':return 4
            case 'Fri':return 5
            case 'Sat':return 6
            case 'Sun':return 7
            default: return 1
        }
    }

    if(param === 'string') {

        switch (day) {
            case 1: return 'Mon'
            case 2: return 'Tue'
            case 3: return 'Wed'
            case 4: return 'Thu'
            case 5: return 'Fri'
            case 6: return 'Sat'
            case 7: return 'Sun'
            default: return 'Mon'
        }
    }
}
