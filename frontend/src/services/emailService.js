import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/**
 * Send an interview-scheduled invitation email to a student.
 */
export const sendInterviewScheduledEmail = async (studentEmail, studentName, companyName, role, date, time, meetingLink) => {
    try {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            to_email: studentEmail,
            to_name: studentName,
            from_name: 'CareerOS',
            subject: 'Interview Scheduled',
            message: `Hello ${studentName},\n\nYou have been scheduled for an interview.\n\nCompany: ${companyName}\nRole: ${role}\nDate: ${date}\nTime: ${time}${meetingLink ? `\nMeeting Link: ${meetingLink}` : ''}\n\nPlease check your CareerOS dashboard for details.\n\nBest regards,\nCareerOS Team`,
        }, PUBLIC_KEY);
    } catch (err) {
        console.error('Failed to send interview scheduled email:', err);
    }
};

/**
 * Send an interview-rescheduled email to a student.
 */
export const sendInterviewRescheduledEmail = async (studentEmail, studentName, companyName, role, date, time, meetingLink) => {
    try {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            to_email: studentEmail,
            to_name: studentName,
            from_name: 'CareerOS',
            subject: 'Interview Rescheduled',
            message: `Hello ${studentName},\n\nYour interview has been rescheduled.\n\nCompany: ${companyName}\nRole: ${role}\nNew Date: ${date}\nNew Time: ${time}${meetingLink ? `\nMeeting Link: ${meetingLink}` : ''}\n\nPlease check your CareerOS dashboard for the updated details.\n\nBest regards,\nCareerOS Team`,
        }, PUBLIC_KEY);
    } catch (err) {
        console.error('Failed to send interview rescheduled email:', err);
    }
};

/**
 * Send an interview-cancelled email to a student.
 */
export const sendInterviewCancelledEmail = async (studentEmail, studentName, companyName, role) => {
    try {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            to_email: studentEmail,
            to_name: studentName,
            from_name: 'CareerOS',
            subject: 'Interview Cancelled',
            message: `Hello ${studentName},\n\nYour interview with ${companyName} for the ${role} position has been cancelled.\n\nPlease check your CareerOS dashboard for more details.\n\nBest regards,\nCareerOS Team`,
        }, PUBLIC_KEY);
    } catch (err) {
        console.error('Failed to send interview cancelled email:', err);
    }
};

/**
 * Send an interview reminder email to a student (1 hour before).
 */
export const sendInterviewReminderEmail = async (studentEmail, studentName, companyName, role, date, time) => {
    try {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            to_email: studentEmail,
            to_name: studentName,
            from_name: 'CareerOS',
            subject: 'Interview Reminder',
            message: `Hello ${studentName},\n\nThis is a reminder that your interview with ${companyName} starts in 1 hour.\n\nRole: ${role}\nDate: ${date}\nTime: ${time}\n\nPlease be prepared.\n\nBest regards,\nCareerOS Team`,
        }, PUBLIC_KEY);
    } catch (err) {
        console.error('Failed to send interview reminder email:', err);
    }
};
