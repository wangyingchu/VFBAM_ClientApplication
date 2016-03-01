define({
//begin v1.x content
		next: "Επόμενο",
		previous: "Προηγούμενο",
		finish: "Ολοκλήρωση",
		cancel: "Ακύρωση",
		save: "Αποθήκευση",
		// for accordion wizard
		leadingOverflowLabel: "${count} επιπλέον",
		trailingOverflowLabel: "${count} επιπλέον",
		a11yLabel: "Οδηγός πολλαπλών βημάτων",
		accordionAnnouncement: "Οδηγός πολλαπλών βημάτων. Πατήστε ALT+F12 για βοήθεια.  ",
		accordionHelp: "Κατάσταση κανονικής λειτουργίας οδηγού πολλαπλών βημάτων. "
					 + "Πατήστε ALT+ENTER ή ALT+SPACE για να ανακοινωθεί το τρέχον βήμα. "
					 + "Πατήστε ALT+PAGE UP για να δείτε το προηγούμενο και το τρέχον βήμα του οδηγού. Πατήστε "
					 + "ALT+PAGE DOWN για να δείτε τα επόμενα βήματα του οδηγού. Πατήστε ALT + ARROW KEYS για να "
					 + "μεταβείτε στα επόμενα και προηγούμενα βήματα. Πατήστε ALT+END για να μεταφερθεί η εστίαση στο "
					 + "πρώτο κουμπί ενέργειας του οδηγού. Πατήστε TAB και SHIFT+TAB για να μεταφερθεί η εστίαση σε "
      + "επόμενα και προηγούμενα στοιχεία.  ",
		leadingReviewHelp: "Κατάσταση εξέτασης προηγούμενων βημάτων οδηγού πολλαπλών βημάτων. "
					+ "Πατήστε ALT+ENTER ή ALT+SPACE για να ανακοινωθεί το τρέχον βήμα.  "
					+ "Πατήστε ESCAPE ή ALT+PAGE UP για να ακυρωθεί η κατάσταση εξέτασης προηγούμενων βημάτων και να "
					+ "επιστραφεί η εστίαση αμέσως στο τρέχον βήμα του οδηγού. "
					+ "Πατήστε ALT+PAGE DOWN για να ακυρωθεί η κατάσταση εξέτασης προηγούμενων βημάτων και να γίνει "
     + "μετάβαση σε κατάσταση εξέτασης επόμενων βημάτων. "
					+ "Όταν είστε σε κατάσταση εξέτασης προηγούμενων βημάτων, χρησιμοποιήστε τα πλήκτρα με τα βέλη για "
					+ "να μεταφέρετε την εστίαση στους τίτλους προηγούμενων βημάτων και του τρέχοντος βήματος του οδηγού. "
					+ "Πατήστε ALT+END για να ακυρώσετε την κατάσταση εξέτασης προηγούμενων βημάτων και να μεταφερθεί η "
     + "εστίαση στο πρώτο κουμπί ενέργειας του οδηγού. "
					+ "Χρησιμοποιήστε τα πλήκτρα TAB και SHIFT+TAB για πλοήγηση με κανονική εστίαση. "
					+ "Εάν η εστίαση απομακρυνθεί από τους τίτλους των προηγούμενων βημάτων του οδηγού, τότε η "
					+ "κατάσταση εξέτασης προηγούμενων βημάτων ακυρώνεται.  ",
		trailingReviewHelp: "Κατάσταση εξέτασης επόμενων βημάτων οδηγού πολλαπλών βημάτων.  "
					+ "Πατήστε ALT+ENTER ή ALT+SPACE για να ανακοινωθεί το τρέχον βήμα.  "
					+ "Πατήστε ESCAPE ή ALT+PAGE DOWN για να ακυρωθεί η κατάσταση εξέτασης επόμενων βημάτων και "
					+ "να επιστραφεί η εστίαση αμέσως στο τρέχον βήμα του οδηγού.  "
					+ "Πατήστε ALT+PAGE UP για να ακυρωθεί η κατάσταση εξέτασης επόμενων βημάτων και να γίνει "
     + "μετάβαση σε κατάσταση εξέτασης προηγούμενων βημάτων. "
					+ "Όταν είστε σε κατάσταση εξέτασης επόμενων βημάτων, χρησιμοποιήστε τα πλήκτρα με τα βέλη για να "
					+ "μεταφέρετε την εστίαση στους τίτλους των επόμενων βημάτων μετά το τρέχον βήμα του οδηγού. "
					+ "Πατήστε ALT+END για να ακυρώσετε την κατάσταση εξέτασης επόμενων βημάτων και να μεταφερθεί η "
     + "εστίαση στο πρώτο κουμπί ενέργειας του οδηγού.  "
					+ "Χρησιμοποιήστε τα πλήκτρα TAB και SHIFT+TAB για πλοήγηση με κανονική εστίαση. Εάν η εστίαση "
					+ "απομακρυνθεί από τους τίτλους των επόμενων βημάτων του οδηγού, τότε η κατάσταση εξέτασης "
     + "επόμενων βημάτων ακυρώνεται.  ",
		leadingReviewModeAnnouncement: "Κατάσταση εξέτασης προηγούμενων βημάτων οδηγού πολλαπλών βημάτων. Πατήστε ALT+F12 για βοήθεια. "
     + "Υπάρχουν ${count} κύρια βήματα μέχρι και το τρέχον κύριο βήμα του οδηγού.  ",
		trailingReviewModeAnnouncement: "Κατάσταση εξέτασης επόμενων βημάτων οδηγού πολλαπλών βημάτων. Πατήστε ALT+F12 για βοήθεια. Υπάρχουν "
					+ "${count} κύρια βήματα μετά το τρέχον κύριο βήμα του οδηγού.  ",
		leadingReviewModeWithSubstepsAnnouncement: "Κατάσταση εξέτασης προηγούμενων βημάτων οδηγού πολλαπλών βημάτων. Πατήστε ALT+F12 για βοήθεια. Υπάρχουν "
					+ "${mainCount} κύρια βήματα μέχρι και το τρέχον κύριο βήμα του οδηγού. Το τρέχον κύριο βήμα έχει ${count} "
					+ "επιμέρους βήματα μέχρι και το τρέχον βήμα.  ",
		trailingReviewModeWithSubstepsAnnouncement: "Κατάσταση εξέτασης επόμενων βημάτων οδηγού πολλαπλών βημάτων. Πατήστε ALT+F12 για βοήθεια. Υπάρχουν "
					+ "${mainCount} κύρια βήματα μετά το τρέχον κύριο βήμα του οδηγού. Το τρέχον κύριο βήμα έχει ${count} επιμέρους "
					+ "βήματα που ακολουθούν μετά το τρέχον βήμα.  ",
		trailingReviewOnLastError: "Βρίσκεστε στο τελευταίο βήμα του οδηγού. Η κατάσταση εξέτασης επόμενων βημάτων δεν είναι διαθέσιμη.  ",
		nextOnInvalidError: "Δεν είναι δυνατή η πλοήγηση στο επόμενο βήμα πριν ολοκληρώσετε το τρέχον βήμα.  ",
		nextOnLastError: "Δεν είναι δυνατή η πλοήγηση στο επόμενο βήμα επειδή βρίσκεστε στο τελευταίο διαθέσιμο βήμα.  ",
		previousOnFirstError: "Δεν είναι δυνατή η πλοήγηση στο προηγούμενο βήμα επειδή βρίσκεστε στο πρώτο διαθέσιμο βήμα.  ",
		currentMainStepAnnouncement: "Το τρέχον κύριο βήμα είναι το βήμα ${index} από ${count}, με τίτλο ${title}.  ",
		currentSubstepAnnouncement: "Το τρέχον επιμέρους βήμα είναι το βήμα ${index} από ${count}, με τίτλο ${title}.  ",
		stepChangeAnnouncment: "Το βήμα του οδηγού τροποποιήθηκε.  ",		
		reviewStepAnnouncement: "Εξετάζεται το κύριο βήμα ${index} από ${count}, με τίτλο ${title}.  ",
		reviewStepCurrentAnnouncement: "Αυτό είναι το τρέχον κύριο βήμα.  ",
		reviewStepVisitedAnnouncement: "Αυτό το κύριο βήμα έχει σημειωθεί ως ολοκληρωμένο.  ",
		reviewStepDisabledAnnouncement: "Αυτό το κύριο βήμα είναι απενεργοποιημένο.  ",
		reviewStepClickAnnouncement: "Πατήστε ENTER ή SPACE για να επιστρέψετε σε αυτό το βήμα.  ",
		reviewParentStepClickAnnouncement: "Πατήστε ENTER ή SPACE για να επιστρέψετε στην αρχή αυτού του βήματος.  ",
		reviewStepUnvisitedAnnouncement: "Αυτό το κύριο βήμα δεν έχει ολοκληρωθεί ακόμα.  ",
		reviewStepStartedAnnouncement: "Αυτό το κύριο βήμα έχει ξεκινήσει, αλλά δεν έχει ολοκληρωθεί πλήρως.  ",
		reviewSubstepAnnouncement: "Εξετάζεται το επιμέρους βήμα ${index} από ${count}, με τίτλο ${title}.  Αυτό είναι ένα επιμέρους βήμα του κύριου βήματος ${mainIndex} από ${mainCount}, με τίτλο ${mainTitle}.  ",
		reviewSubstepCurrentAnnouncement: "Αυτό είναι το τρέχον επιμέρους βήμα.  ",
		reviewSubstepVisitedAnnouncement: "Αυτό το επιμέρους βήμα έχει σημειωθεί ως ολοκληρωμένο.  ",
		reviewSubstepDisabledAnnouncement: "Αυτό το επιμέρουςο βήμα είναι απενεργοποιημένο.  ",

		reviewSubstepClickAnnouncement: "Πατήστε ENTER ή SPACE για να επιστρέψετε σε αυτό το επιμέρους βήμα.  ",
		reviewSubstepUnvisitedAnnouncement: "Αυτό το επιμέρους βήμα δεν έχει ολοκληρωθεί ακόμα.  "
});

