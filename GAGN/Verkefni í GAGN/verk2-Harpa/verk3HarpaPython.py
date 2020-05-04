import json
import pprint

pp = pprint.PrettyPrinter(indent=4)

allar_haedir = {
    "Salur": [25,26,27,26,25,28,28,28,26,26,26,26,26,26,26,25,25,23,26,26,26,26,26,26,26,26,26,20],
    "SvalirOne": [16,33,34,35,36,35],
    "SvalirTwo": [16,36,35,34,33,32],
    "SvalirThree": [24,40,37,34,33,30,27,22]
}
allar_hlidar_haedir = {
    "SalurRightA": [11, 11],
    "SalurRightB": [11, 9],# 2 hjólastóla í báðum
    "SalurLeftD": [11, 9],# 2 hjólastóla í báðum
    "SalurLeftC": [11, 11],
    
    "SvalirOneRightG": [11],
    "SvalirOneRightF": [9],
    "SvalirOneLeftJ": [11],
    "SvalirOneLeftI": [9],

    "SvalirTwoRightN": [15],
    "SvalirTwoRightM": [4],
    "SvalirTwoLeftR": [15],
    "SvalirTwoLeftP": [4],

    "SvalirThreeRightT": [13],
    "SvalirThreeRightS": [9],
    "SvalirThreeLeftV": [13],
    "SvalirThreeLeftU": [9],

}

# serstoksaeti = {
#     "SalurRightA_Sérstök":{
#         "Sound_mix": False,
#         "Hjola_stóla": False,
#         "Svið_extent": False
#     },
#     "SalurRightB_Sérstök":{
#         "Sound_mix": False,
#         "Hjola_stóla": True,
#         "Svið_extent": False
#     },
#     "SalurRightC_Sérstök":{
#         "Sound_mix": False,
#         "Hjola_stóla": False,
#         "Svið_extent": False
#     },
#     "SalurRightD_Sérstök":{
#         "Sound_mix": False,
#         "Hjola_stóla": True,
#         "Svið_extent": False
#     },


#     "SvalirOneRightG_Sérstök": {
#         "Sound_mix": False,
#         "Hjola_stóla": True,
#         "Svið_extent": False
#     },
#     "SvalirOneRightF_Sérstök": {
#         "Sound_mix": False,
#         "Hjola_stóla": False,
#         "Svið_extent": False
#     },
#     "SvalirOneLeftJ_Sérstök": {
#         "Sound_mix": False,
#         "Hjola_stóla": True,
#         "Svið_extent": False
#     },
#     "SvalirOneLeftI_Sérstök": {
#         "Sound_mix": False,
#         "Hjola_stóla": False,
#         "Svið_extent": False
#     },


#     "SvalirTwoRightN_Sérstök": {
#         "Sound_mix": False,
#         "Hjola_stóla": True,
#         "Svið_extent": False
#     },
#     "SvalirTwoRightM_Sérstök": {
#         "Sound_mix": False,
#         "Hjola_stóla": False,
#         "Svið_extent": False
#     },
#     "SvalirTwoLeftR_Sérstök": {
#         "Sound_mix": False,
#         "Hjola_stóla": True,
#         "Svið_extent": False
#     },
#     "SvalirTwoLeftP_Sérstök": {
#         "Sound_mix": False,
#         "Hjola_stóla": False,
#         "Svið_extent": False
#     },


#     "SvalirThreeRightT_Sérstök": {
#         "Sound_mix": False,
#         "Hjola_stóla": False,
#         "Svið_extent": False
#     },
#     "SvalirThreeRightS_Sérstök": {
#         "Sound_mix": False,
#         "Hjola_stóla": False,
#         "Svið_extent": False
#     },
#     "SvalirThreeLeftV_Sérstök": {
#         "Sound_mix": False,
#         "Hjola_stóla": False,
#         "Svið_extent": False
#     },
#     "SvalirThreeLeftU_Sérstök": {
#         "Sound_mix": False,
#         "Hjola_stóla": False,
#         "Svið_extent": False
#     }
# }
i = []

for head in allar_haedir.keys():
    svadi = []
    hjola = False
    sound_mix = False
    svid_extend = False
    radar_numer = 0
    for head1 in allar_haedir[head]:
        radar_saeti = []
        radar_numer += 1
        for saeti in range(1,head1 + 1):
            # if saeti !!! Klára !!!
            radar_saeti.append({
                "Sæta_Numer": saeti,
                "ErHjolastola": hjola,
                "ErSoundMixerFratekid": sound_mix,
                "ErSviðaExtention": svid_extend
            })
        svadi.append({
            "Fjöldi_sæta_í_röðinni": head1,
            "Raðar_númer": radar_numer,
            "Sæti": radar_saeti
        })
    i.append({
        "Svæði": head,
        "Allar_radir": svadi
    })

for head3 in allar_hlidar_haedir.keys():
    hlidar_svadi = []
    hlidar_hjola = False
    hlidar_sound_mix = False
    hlidar_svid_extend = False
    hlidar_radar_numer = 0
    for head2 in allar_hlidar_haedir[head3]:
        hlidar_radar_saeti = []
        hlidar_radar_numer += 1
        for saeti1 in range(1, head2 + 1):
            hlidar_radar_saeti.append({
                "Sæta_Numer": saeti1,
                "ErHjolastola": hjola,
                "ErSoundMixerFratekid": hlidar_sound_mix,
                "ErSviðaExtention": hlidar_svid_extend
            })
        hlidar_svadi.append({
            "Raðar_númer": hlidar_radar_numer,
            "Sæti": hlidar_radar_saeti
        })
    i.append({
        "Svæði": head3,
        "Hliðar_svæði": hlidar_svadi
    })

with open('result.json', 'w', encoding='utf-8') as f:
    json.dump(i, f, ensure_ascii=False, indent=4)