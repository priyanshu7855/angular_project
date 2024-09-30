import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  darkMode = false;
  language = 'en';

  toggleDarkMode(event: Event) {
    const target = event.target as HTMLInputElement; // Cast to HTMLInputElement
    if (target) {
      this.darkMode = target.checked;
    }
  }

  updateLanguage(event: Event) {
    const target = event.target as HTMLSelectElement; // Cast to HTMLSelectElement
    if (target) {
      this.language = target.value;
    }
  }

  saveSettings() {
    console.log('Settings Saved:', { darkMode: this.darkMode, language: this.language });
    alert('Settings Saved!');
  }
}
