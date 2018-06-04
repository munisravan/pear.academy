import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

// https://jaspero.co/resources/projects/ng-notifications
@Injectable({
    providedIn: 'root',
})
export class PearNotificationService {

    constructor(private notificationService: NotificationsService) { }

    // Creates a success notification with the provided title and content.
    success(title: string, content?: string, showprogressbar?: boolean) {
        this.notificationService.success(title,
            content,
            {
                position: ['top', 'right'],
                timeOut: 5000,
                showProgressBar: showprogressbar,
                pauseOnHover: false,
                clickToClose: false,

            });
    }
    // Creates an alert notification with the provided title and content.
    alert(title: string, content?: string, showprogressbar?: boolean) {
        this.notificationService.alert(title,
            content,
            {
                position: ['top', 'right'],
                timeOut: 5000,
                showProgressBar: showprogressbar,
                pauseOnHover: false,
                clickToClose: false,

            });
    }
    // Creates an info notification with the provided title and content.
    info(title: string, content?: string, showprogressbar?: boolean) {
        this.notificationService.info(title,
            content,
            {
                position: ['top', 'right'],
                timeOut: 5000,
                showProgressBar: showprogressbar,
                pauseOnHover: false,
                clickToClose: false,

            });
    }

    // Creates a warn notification with the provided title and content.
    warn(title: string, content?: string, showprogressbar?: boolean) {
        this.notificationService.warn(title,
            content,
            {
                position: ['top', 'right'],
                timeOut: 5000,
                showProgressBar: showprogressbar,
                pauseOnHover: false,
                clickToClose: false,

            });
    }
    // Creates an error notification with the provided title and content.
    error(title: string, content?: string, showprogressbar?: boolean) {
        this.notificationService.error(title,
            content,
            {
                position: ['top', 'right'],
                timeOut: 5000,
                showProgressBar: showprogressbar,
                pauseOnHover: false,
                clickToClose: false,
            });
    }
    create(title: string, content: string = '', type: string = 'success', showprogressbar: boolean = false) {
        this.notificationService.create(title,
            content,
            type,
            {
                position: ['top', 'right'],
                timeOut: 5000,
                showProgressBar: showprogressbar,
                pauseOnHover: false,
                clickToClose: false,
            });
    }
    // Creates a bare notification with the provided title and content. This notification type is best used when adding custom html.
    bare(title: string, content: string = '', showprogressbar: boolean = false) {
        this.notificationService.bare(title,
            content,
            {
                position: ['top', 'right'],
                timeOut: 5000,
                showProgressBar: showprogressbar,
                pauseOnHover: false,
                clickToClose: false,
            });
    }
    // Use this method to create a notification with custom html.
    html(html: any, type: string = 'success', showprogressbar: boolean = false) {
        this.notificationService.html(html,
            type,
            {
                position: ['top', 'right'],
                timeOut: 5000,
                showProgressBar: showprogressbar,
                pauseOnHover: false,
                clickToClose: false,
            });
    }
    clear(id?: string) {
        this.notificationService.remove(id);
    }
}


