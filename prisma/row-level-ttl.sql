ALTER TABLE IF EXISTS event_location_options SET (ttl_expire_after = '60 days');

ALTER TABLE IF EXISTS location_votes SET (ttl_expire_after = '60 days');

ALTER TABLE IF EXISTS event_date_options SET (ttl_expire_after = '60 days');

ALTER TABLE IF EXISTS date_votes SET (ttl_expire_after = '60 days');