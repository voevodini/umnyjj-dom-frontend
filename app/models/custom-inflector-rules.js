import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('собственника', 'Собственникаs');
inflector.irregular('собственник', 'Собственникs');
inflector.irregular('помещение', 'Помещениеs');
inflector.irregular('поставщик', 'Поставщикs');
inflector.irregular('квитанции', 'Квитанцииs');
inflector.irregular('квитанция', 'Квитанцияs');
inflector.irregular('сотрудник', 'Сотрудникs');
inflector.irregular('компания', 'Компанияs');
inflector.irregular('услуги', 'Услугиs');
inflector.irregular('реестр', 'Реестрs');
inflector.irregular('учета', 'Учетаs');
inflector.irregular('тариф', 'Тарифs');
inflector.irregular('дом', 'Домs');
inflector.irregular('у', 'Уs');

export default {};
